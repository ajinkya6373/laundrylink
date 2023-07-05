import express from "express";
import _ from "lodash";
const router = express.Router();
import catchError from '../utils.js';
import Review from "../models/review.model.js";

router.route("/:lspId")
  .get(async (req, res, next) => {
    catchError(next, async () => {
      const { lspId } = req.params;
      const {reviewList} = await Review.findById(lspId);
      res.json({
        success: true,
        reviewList
      });
    });
  })

  .post(async (req, res, next) => {
    catchError(next, async () => {
      const { lspId } = req.params;
      const newReview = req.body;
      let review = await Review.findById(lspId);
      if (!review) {
        const newLspReview = new Review({ _id: lspId, reviewList: [newReview] });
        newLspReview.save();
        return res.status(201).json({
          success: true,
          newLspReview
        })
      }

      review = _.extend(review, {
        reviewList: _.concat(review.reviewList, newReview)
      });
      await review.save();
      res.status(201).json({
        success: true,
        review
      })
    });
  });


router.route("/:lspId/:reviewId")
  .get(async (req, res, next) => {
    catchError(next, async () => {
      const { lspId, reviewId } = req.params;
      const reviews = await Review.findById(lspId);
      const review = _.find(reviews.reviewList, (review) => review._id.toString() === reviewId);

      return res.json({
        success: true,
        review
      });
    });
  })

  .put(async (req, res, next) => {
    catchError(next, async () => {
      const { lspId, reviewId } = req.params;
      const { rating, comment } = req.body;
      let review = await Review.findById(lspId);
      review = _.extend(review, {
        reviewList: _.map(review.reviewList, reviewObj =>
          reviewObj._id.toString() === reviewId ?
            _.extend(reviewObj, { rating, comment })
            :
            reviewObj
        )
      });
      await review.save();
      return res.json({
        success: true,
        review
      });
    });
  })


  .delete(async (req, res, next) => {
    catchError(next, async () => {
      const { lspId, reviewId } = req.params;
      let review = await Review.findById(lspId);
      review = _.extend(review, {
        reviewList: _.filter(review.reviewList, ({ _id }) =>
          _id.toString() !== reviewId)
      });

      await review.save();
      res.json({
        success: true,
        review
      });
    });
  })



  

export default router;
