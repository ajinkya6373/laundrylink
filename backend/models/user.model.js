import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: "Name is required"
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
    // isLsp:{
    //     type: Boolean,
    //     default: false,
    // },
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
    }

}, { timestamps: true });
userSchema.index({ location: "2dsphere" });


const User = mongoose.model('User', userSchema);
export default User;


