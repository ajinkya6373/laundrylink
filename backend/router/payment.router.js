// import express from 'express';
// import Razorpay from 'razorpay';
// import catchError from '../utils.js';
// const router = express.Router();
// const razorpayKey = 'YOUR_RAZORPAY_API_KEY';
// const razorpaySecret = 'YOUR_RAZORPAY_API_SECRET';

// // Create a new instance of Razorpay
// const razorpay = new Razorpay({
//   key_id: "rzp_test_NPSzpBiUnnQSCO",
//   key_secret: "i9db9FiGRmi7NI83OAav5bRM",
// });

// // Route for creating a new payment order
// router.route('/payment').post('/api/payment', async (req, res) => {
//   const amount = req.body.amount; // Amount in paisa (e.g. Rs. 100 = 10000 paisa)
//   const currency = 'INR';
//   const options = {
//     amount,
//     currency,
//   };

//   try {
//     // Create a new payment order
//     const paymentOrder = await razorpay.orders.create(options);

//     res.status(200).json({
//       message: 'Payment order created successfully',
//       orderId: paymentOrder.id,
//       amount: paymentOrder.amount,
//       currency: paymentOrder.currency,
//       notes: paymentOrder.notes,
//       paymentLinks: paymentOrder.links,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to create payment order', error });
//   }
// });

// // Route for capturing a payment
// router.route('/payment/capture').post('/api/payment/capture', async (req, res) => {
//   const paymentId = req.body.paymentId;
//   const amount = req.body.amount;

//   try {
//     // Capture the payment
//     const payment = await razorpay.payments.capture(paymentId, amount);

//     res.status(200).json({
//       message: 'Payment captured successfully',
//       paymentId: payment.id,
//       amount: payment.amount,
//       currency: payment.currency,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to capture payment', error });
//   }
// });


// export default router;