import mongoose from 'mongoose';
import {addressSchema} from "./address.model.js";
const orderItemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    specialInstructions: {
        type: String,
    },
    services: [
        {
            serviceId: {
                type: String,
                required: true,
            },
            serviceType: {
                type: String,
            },
            price: {
                type: Number,
            },
        },
    ],
    category: {
        type: String,
        enum: ["Men's Clothing", "Women's Clothing", "Household Items"],
    },
    quantity: {
        type: Number,
        required: "Quantity is required!",
    },
});

const orderSchema = mongoose.Schema({
    lspId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    lspName: {
        type: String,
        required: true,
    },
    items: [orderItemSchema],
    deliveryAddress: addressSchema,
    paymentMethod: {
        type: mongoose.Schema.Types.ObjectId,
        // required: "Payment method is required!"
    },
    expectedDeliveryDate: {
        type: Date,
        // required: "Expected delivery date is required!"
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "processing", "delivered", "cancelled"],
    },
    
}, { timestamps: true });

const orderListSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orders: [orderSchema],
}, { timestamps: true });

const Order = mongoose.model('Order', orderListSchema);

export default Order;
