import mongoose from "mongoose";
const itemSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      enum:["T-shirt","pant","shirt","jeans","kurta","saree","salwar","kurti","suit","blazer","coat","jacket","sweater","hoodie","jumpsuit","shorts","skirt","leggings","trousers","shoes","sandals","flip-flops","boots","sneakers","slippers","loafers","heels","wedges","flats","slippers","flip-flops","sandals","shoes","handbags","wallets","belts"],
  
    },
    category: {
      type: String,
      enum: ["Men's Clothing", "Women's Clothing", "Household Items"],

    },
    description: {
      type: String,
    },
    servicePrices: [{
      serviceType: {
        type: String,
        enum: ["Wash and Fold", "Dry Cleaning", "Ironing", "Dyeing", "Alteration"],
        required: true,
      },
      price: {
        type: Number,
        required: true,
      }
    }],
    discount: {
      type: Number,
    },
    minimumQuantity: {
      type: Number,
    },
    maximumQuantity: {
      type: Number,
    },
    taxRate: {
      type: Number,
    },
    tags: [{
      type: String,
    }]
  }, { timestamps: true });

const catalogSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, ref: "Lsp"
    },
      items: [itemSchema]
}, { timestamps: true });

const Catalog = mongoose.model('Catalog', catalogSchema);

export default Catalog;
