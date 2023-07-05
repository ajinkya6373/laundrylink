import express from "express";
import _ from "lodash";
const router = express.Router();
import catchError from '../utils.js';
import CartList from "../models/cart.model.js";

router.route("/:userId")
  .get(async (req, res, next) => {
    catchError((next), async () => {
      const { userId } = req.params;
      const cartlist = await CartList.findById(userId);
      res.status(201).json({
        success: true,
        cartlist
      });
    });
  })

  .post(async (req, res, next) => {
    catchError(next, async () => {
      const { userId } = req.params;
      const { lspName, lspId, cartItem } = req.body;
      let cartlist = await CartList.findById(userId);
      if (!cartlist) {
        const newCart = new CartList({ _id: userId, lspName: lspName, lspId: lspId, cartItems: [cartItem] })
        await newCart.save();
        const savedItem = newCart.cartItems[newCart.cartItems.length - 1];
        return res.status(201).json({
          success: true,
          savedItem
        });
      }
      if (lspId !== cartlist.lspId.toString()) {
        return res.status(201).json({
          success: false,
          message: "Cannot add items from different LSPs to the same cart list ! Please Clear cart first then add Items 😃."
        });
      }
      cartlist = _.extend(cartlist, { cartItems: _.concat(cartlist.cartItems, cartItem) });
      await cartlist.save();
      const savedItem = cartlist.cartItems[cartlist.cartItems.length - 1];
      res.status(201).json({
        success: true,
        savedItem
      });
    })
  })

router.route("/:userId/:itemId")
  .post(async (req, res, next) => {
    catchError(next, async () => {
      const { userId, itemId } = req.params;
      const { quantity } = req.body;
      let cartlist = await CartList.findById(userId);
      cartlist = _.extend(cartlist, {
        cartItems: _.map(cartlist.cartItems, (item) =>
          item._id.toString() === itemId ?
            _.extend(item, { quantity: quantity })
            : item
        )
      });
      await cartlist.save();
      res.json({
        success: true,
        cartlist
      });
    });
  })

  .delete(async (req, res, next) => {
    catchError(next, async () => {
      const { userId, itemId } = req.params;
      let cartlist = await CartList.findById(userId);

      if (!cartlist) {
        return res.status(404).json({
          success: false,
          message: "Cart list not found.",
        });
      }

      const filteredItems = cartlist.cartItems.filter(
        (item) => item._id.toString() !== itemId
      );

      if (filteredItems.length === cartlist.cartItems.length) {
        return res.status(404).json({
          success: false,
          message: "Item not found in cart list.",
        });
      }

      cartlist.cartItems = filteredItems;

      // Check if cartItems is empty
      if (cartlist.cartItems.length === 0) {
        await CartList.deleteOne({ _id: cartlist._id });
        return res.json({
          success: true,
          message: "Cart deleted successfully.",
        });
      }

      await cartlist.save();

      res.json({
        success: true,
        cartlist,
      });
    });
  });
export default router


