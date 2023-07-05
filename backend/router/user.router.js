import express from 'express'
import User from '../models/user.model.js';
import _ from "lodash";
import catchError from '../utils.js';
import bcrypt from 'bcrypt';
const router = express.Router();

router.route("/")
  .post(async (req, res, next) => {
    catchError(next, async () => {
      const { user: { email, password } } = req.body;
      const user = await User.findOne({ email });
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(401).json({
          success: false,
          message: "Incorrect password"
        });
      }
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }
      res.json({
        success: true,
        user: _.pick(user, ["_id", "username", "email"])
      });
    });
  })

router.route("/:userId")
  .get(async (req, res, next) => {
    catchError(next, async () => {
      const userId = req.params.userId;
      let user = await User.findById(userId);

      user = _.pick(user, ["_id", "name", "email"]);
      res.json({
        success: true,
        user
      });
    });
  })


router.route("/new")
  .post(async (req, res, next) => {
    catchError(next, async () => {
      const user = req?.body;
      const { username, email, password, location } = user;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      let newUser = new User({ username, location, email, password: hashedPassword });
      newUser = await newUser.save();
      res.status(200).json({
        success: true,
        user: _.pick(newUser, ["_id", "username", "email"])
      });
    }, (err) => {
      if (err.code === 11000) {
        return res.status(400).json({
          success: false,
          message: "Email already in use. Try a different one."
        });
      }
      return res.status(500).json({
        success: false,
        message: err.message
      });
    });
  });

export default router;

