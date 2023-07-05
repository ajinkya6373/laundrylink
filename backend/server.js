import express from 'express';
import connectDb from './db/db.connect.js';
import dotenv from 'dotenv';
import helmet from 'helmet'
import morgon from "morgan"
import bodyParser from 'body-parser';
import userRouter from "./router/user.router.js";
import lspRouter from "./router/lsp.router.js";
import catalogRouter from "./router/catalog.router.js";
import reviewRouter from "./router/review.router.js";
import addressRouter from "./router/address.router.js";
import cartRouter from "./router/cart.router.js";
import orderRouter from "./router/order.router.js";
import userDataRoute from "./router/userData.router.js";
// import paymentRouter from "./router/payment.router.js";
import cors from "cors";
const app = express();
const port = 4000;

dotenv.config();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Laundry Service API');
});

app.use(helmet());
app.use(morgon("common"))
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());
app.use("/user", userRouter);
app.use("/lsp", lspRouter);
app.use("/catalog", catalogRouter);
app.use("/review", reviewRouter);
app.use("/address", addressRouter); 
app.use("/cart", cartRouter);
app.use("/userData", userDataRoute);
app.use("/order", orderRouter);
// app.use("/payment", paymentRouter);

connectDb();
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on port ${port}`);
});


