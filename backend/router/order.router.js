import express from "express";
import _ from "lodash";
const router = express.Router();
import catchError from '../utils.js';
import Order from "../models/order.model.js";
import CartList from "../models/cart.model.js";

router.route("/:userId")
    .get(async (req, res, next) => {
        catchError((next), async () => {
            const { userId } = req.params;
            const order = await Order.findById(userId);
            res.status(201).json({
                success: true,
                order
            });
        });
    })

    .post(async (req, res, next) => {
        catchError(next, async () => {
            const { userId } = req.params;
            const { orderItems } = req.body;
            let order = await Order.findById(userId);
            if (!order) {
                const newOrder = new Order({ _id: userId, orders: [orderItems] })
                await newOrder.save();
                const savedItem = newOrder.orders[newOrder.orders.length - 1];
                return res.status(201).json({
                    success: true,
                    savedItem
                });
            }
            order.orders.push(orderItems);
            await order.save();
            const savedItem = order.orders[order.orders.length - 1];
            const cartlist = await CartList.findById(userId);
            if (cartlist) {
                await CartList.deleteOne({ _id: cartlist._id });
            }
            res.status(201).json({
                success: true,
                savedItem
            });
        });
    })
    
    .delete(async (req, res, next) => {
        catchError(next, async () => {
            const { userId } = req.params;
            const { itemId } = req.body;
            let order = await Order.findById(userId);
            order = _.extend(order, {
                orderList: _.filter(order.orderList, (item) =>
                    item.itemId.toString() !== itemId
                )
            });
            await order.save();
            res.status(201).json({
                success: true,
                order
            });
        })
    })
router.route("/:userId/:itemId")
    .post(async (req, res, next) => {
        catchError(next, async () => {
            const { userId, itemId } = req.params;
            const { quantity } = req.body;
            let order = await Order.findById(userId);

            order = _.extend(order, {
                orderList: _.map(order.orderList, (item) =>
                    item.itemId.toString() === itemId ?
                        _.extend(item, { quantity: quantity })
                        : item
                )
            });
            await order.save();
            res.status(201).json({
                success: true,
                order
            });
        })
    })

router.route("/:userId/:orderId")
    .put(async (req, res, next) => {
        catchError(next, async () => {
            const { userId, orderId } = req.params;
            const { status } = req.body;
            let order = await Order.findById(userId)
            const orderIndex = order.orders.findIndex((order) => order._id.toString() === orderId);
            if (orderIndex === -1) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found"
                });
            }
            order.orders[orderIndex].status = status;
            await order.save();
            res.status(200).json({
                success: true,
                order: order.orders[orderIndex]
            });
        });
    })
    .get(async (req, res, next) => {
        catchError(next, async () => {
            const { userId, orderId } = req.params;
            let order = await Order.findById(userId);
            const orderIndex = order.orders.findIndex((order) => order._id.toString() === orderId);
            if (orderIndex === -1) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found"
                });
            }
            await order.save();
            res.status(200).json({
                success: true,
                order: order.orders[orderIndex]
            });
        });
    })



export default router;