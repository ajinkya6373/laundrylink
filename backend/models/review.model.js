import mongoose from "mongoose";
const reviewSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    username: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    } 
}, { timestamps: true });

const reviewListSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, ref: "Lsp"
    },
    reviewList: [reviewSchema]
}, { timestamps: true });

const Review = mongoose.model('Review', reviewListSchema);
export default Review;
