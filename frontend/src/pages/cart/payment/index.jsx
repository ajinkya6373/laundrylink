import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { loadScript } from '../../../utils/utils';


const RAZORPAY_API_KEY = 'rzp_test_NPSzpBiUnnQSCO';

function Payment() {
  const [amount, setAmount] = useState(0);
  const [orderId, setOrderId] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);


  // Handle form submit to create a new payment order
  const handlePaymentSubmit = async (event) => {
    event.preventDefault();

    try {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            
        }
      const response = await axios.post('/api/payment', { amount });

      setOrderId(response.data.orderId);
      setPaymentSuccess(false);

      // Open the Razorpay payment modal
      const options = {
        key: RAZORPAY_API_KEY,
        amount: response.data.amount,
        currency: response.data.currency,
        name: 'Your Laundry Service',
        description: 'Laundry Service Payment',
        order_id: response.data.orderId,
        handler: function (response) {
          setPaymentId(response.razorpay_payment_id);
          setPaymentSuccess(true);

          // Capture the payment on the backend
          axios.post('/api/payment/capture', {
            paymentId: response.razorpay_payment_id,
            amount: response.razorpay_amount,
          });
        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '+919876543210',
        },
        notes: {
          address: 'Laundry service address',
        },
        theme: {
          color: '#F37254',
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Make a Payment</h1>
      <form onSubmit={handlePaymentSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <button type="submit">Pay Now</button>
      </form>
      {orderId && (
        <p>
          Payment order created successfully! Your order ID is: <strong>{orderId}</strong>
        </p>
      )}
      {paymentSuccess && (
        <p>
          Payment successful! Your payment ID is: <strong>{paymentId}</strong>
        </p>
      )}
    </div>
  );
}

export default Payment;
