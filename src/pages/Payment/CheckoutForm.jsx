import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";


const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
     if (price > 0) {
          axiosSecure.post('/create-payment-intent', { price })
              .then(res => {
                  console.log(res.data.clientSecret)
                  setClientSecret(res.data.clientSecret);
              })
      }
  }, [price, axiosSecure]);

 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment methode", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }







    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server

      const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
          date: new Date(),
          quantity: cart.length,
          cartItems: cart.map(item => item._id),
          classItemId: cart.map(item => item.classId),
          status: 'service pending',
          itemNames: cart.map(item => item.name)
      }
      axiosSecure.post('/payments', payment)
      .then(res => {
          console.log(res.data);
          if (res.data.result.insertedId) {
              // display confirm
          }
      })

    }
  };

  return (
    <>
      <form className="w-2/3 m-8 " onSubmit={handleSubmit}>
        <CardElement
        className="border p-2 bg-fuchsia-50"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
  <div className="flex justify-center my-4">
  <button
          className="btn btn-primary mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
  </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
