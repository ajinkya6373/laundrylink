
// cart.schema.js
import mongoose from "mongoose";

const cartItemSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  specialInstructions:{
    type: String,
  },
  services: [
    {
      serviceId: {
        type: mongoose.Schema.Types.ObjectId,
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
  expectedDeliveryDate: {
    type: Date,
  },
});

const cartSchema = mongoose.Schema({
    _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  lspName: {
    type: String,
  },
  lspId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lsp",
  },

  cartItems: [cartItemSchema],
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;




// const cartItemSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     enum:["T-shirt","pant","shirt","jeans","kurta","saree","salwar","kurti","suit","blazer","coat","jacket","sweater","hoodie","jumpsuit","shorts","skirt","leggings","trousers","shoes","sandals","flip-flops","boots","sneakers","slippers","loafers","heels","wedges","flats","slippers","flip-flops","sandals","shoes","handbags","wallets","belts"],

//   },
//   category: {
//     type: String,
//     enum: ["Men's Clothing", "Women's Clothing", "Household Items"],
//     required: true,
//   },
//   quantity: {
//     type: Number,
//     required: true,
//   },
//   serviceType: {
//     type: String,
//     enum: ["Wash and Fold", "Dry Cleaning", "Ironing", "Dyeing", "Alteration"],
//     required: true,
//   },
//   expectedDeliveryDate: {
//     type: Date,
//   },

// });

