
import mongoose from 'mongoose'; 
import dotenv from 'dotenv'; 
dotenv.config();
const dbURL = process.env.dbURL;
const dbUrl = 'mongodb://localhost:27017/laundry';
 const connectDb = () => {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log(`connected to Mongodb`)
    }).catch((err)=>{
        console.log(`connection Fail due to ${err}`)
    })
}
export default connectDb;