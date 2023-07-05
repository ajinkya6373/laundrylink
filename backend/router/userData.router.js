import express from "express";
import CartList from "../models/cart.model.js";
import Order from "../models/order.model.js";
import {userAddress} from "../models/address.model.js";
import catchError from "../utils.js";
const router = express.Router();

router.get("/:userId",async (req,res,next)=>{
    catchError(next, async()=>{
        const {userId}= req.params;
        const [cart,order,address] = await Promise.all([
            CartList.findById(userId),
            Order.findById(userId),
            userAddress.findById(userId)
        ]);
        
    res.json({
        success: true,
        cartList: cart && cart.cartItems,
        orderList: order && order.orders,
        addressList: address && address.addressList,
      });

    })
})



export default router;


