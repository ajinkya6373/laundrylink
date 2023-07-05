import express from "express";
const router = express.Router();
import Lsp from "../models/lsp.model.js";
import _ from "lodash";
import catchError from "../utils.js";
import Review from "../models/review.model.js";
import Sentiment from 'sentiment';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
router.post('/images/:id', async (req, res) => {
  try {
    let { url, public_id } = await cloudinary.uploader.upload(req.body.img, {
      upload_preset: 'laundry_App',
      folder: 'LaundryApp/lsp'

  });
    console.log(url, public_id);
    res.json({ message: 'Images uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

router.route("/nearbylsp").get(async (req, res, next) => {
  const userCoordinates = [21.1458004, 79.0881546];
  const maxDistance = 1000000000000000000000000000; // maximum distance in meters

  try {
    const lspList = await Lsp.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: userCoordinates,
          },
          distanceField: "distance",
          maxDistance: maxDistance,
          spherical: true,
        },
      },
    ]);
    res.status(200).json({
      success: true,
      lspList: lspList,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error finding LSPs",
    });
  }
});






router.route("/lspRanking")
.get(async (req, res, next) => {
    catchError(next, async () => {
      const sentiment = new Sentiment();
      const lsps = await Lsp.find();
      const lspRankings = [];
       for (const lsp of lsps) {
        const res = await Review.findById(lsp._id );
        const reviews = res?.reviewList;
        let totalRating = 0;
        let totalWeightedRating = 0;
        if (reviews) {
          for (const review of reviews) {
            const comment = review.comment;
            const rating = review.rating;
            const sentimentScore = sentiment.analyze(comment).score;
            let weight = 1;
            if (sentimentScore < 0) {
              weight = 0.9;
            } else if (sentimentScore > 0) {
              weight = 1.1;
            }
      
            totalRating += rating;
            totalWeightedRating += rating * weight;
          }
        const averageRating = totalRating / reviews.length;
        const weightedRating = totalWeightedRating / reviews.length;
    
        lspRankings.push({
          lsp,
          averageRating: averageRating,
          weightedRating: weightedRating,
        });
      }
    
      lspRankings.sort((a, b) => {
        return b.weightedRating - a.weightedRating;
      });
    }
    
      res.json({
        success: true,
        lspRankings,
      });
    
      
    });
  });


router.route("/").post(async (req, res, next) => {
  catchError(next, async () => {
    const {
      user: { email, password },
    } = req.body;
    const user = await Lsp.findOne({ email });
    if (user && user.password === password) {
      return res.json({
        success: true,
        user: _.pick(user, ["_id", "name", "email"]),
      });
    }
    res.json({
      success: false,
      message: "Lsp not found!",
    });
  });
});

const MIN_RATING = 0;
const MAX_RATING = 5;

// Calculate the final rating of an LSP based on its reviews
const calculateLspRating=(reviews)=>{
  const sentiment = new Sentiment();
  let totalRating = 0;
  let totalWeightedRating = 0;
  let totalWeight = 0;

  for (const review of reviews) {
    const comment = review.comment;
    const rating = review.rating;
    const sentimentScore = sentiment.analyze(comment).score;
    let weight = 1;
    if (sentimentScore < 0) {
      weight = 0.9;
    } else if (sentimentScore > 0) {
      weight = 1.1;
    }

    totalRating += rating;
    totalWeightedRating += rating * weight;
    totalWeight += weight;
  }

  const averageRating = totalRating / reviews.length;
  const weightedRating = totalWeightedRating / totalWeight;
  const normalizedRating = ((weightedRating - MIN_RATING) / (MAX_RATING - MIN_RATING)) * 5;

  return normalizedRating.toFixed(1)
}

router.route("/:userId")
.get(async (req, res, next) => {
  catchError(next, async () => {
    const userId = req.params.userId;
    let user = await Lsp.findById(userId);
    const {reviewList} = await Review.findById(userId);
   const rating = await calculateLspRating(reviewList);
    res.json({
      success: true,
      user,
      rating,
    });
  });
});


router.route("/new").post(async (req, res, next) => {
  catchError(
    next,
    async () => {
      let newLsp = new Lsp(req?.body);
      newLsp = await newLsp.save();
      res.status(200).json({
        success: true,
        user: _.pick(newLsp, ["_id", "name", "email"]),
      });
    },
    (err) => {
      if (err.code === 11000) {
        return res.status(400).json({
          success: false,
          message: "Email already in use. Try a different one.",
        });
      }
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  );
});







export default router;
