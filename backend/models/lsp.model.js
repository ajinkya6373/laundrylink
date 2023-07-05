import mongoose from "mongoose";

const lspSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    shopName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        enum: ["Wash and Fold", "Dry Cleaning", "Ironing", "Dyeing", "Alteration"],
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: "Email is required!"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required!"
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    images: [String],
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },


}, { timestamps: true });
lspSchema.index({ location: "2dsphere" });

const Lsp = mongoose.model('Lsp', lspSchema);
export default Lsp;