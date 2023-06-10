import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../providers/AuthProvider';


const CheckoutForm = ({classPrice}) => {

     const stripe = useStripe();
     const elements = useElements();
     const [cardError, setCardError] = useState('');
     const {user} = useContext(AuthContext);
     const [axiosSecure] = useAxiosSecure();
     const [clientSecret, setClientSecret] = useState('');
     setClientSecret(res.data.clientSecret)


     useEffect(()=>{
          axiosSecure.post('/create-payment-intent')
          .then(res => {
               console.log(res.data.clientSecret)
          })
     },[price, axiosSecure])

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
             const {error, paymentMethod} = await stripe.createPaymentMethod({
              type: 'card',
              card,
            })
            if(error){
                 console.log('error', error)
                 setCardError(error.message)
            }else{
              setCardError('')
              console.log("payment methode" , paymentMethod);
            }



            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
               clientSecret,
               {
                   payment_method: {
                       card: card,
                       billing_details: {
                           email: user?.email || 'unknown',
                           name: user?.displayName || 'anonymous'
                       },
                   },
               },
           );
           

     }

     return (
          
                       <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret }>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {/* {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>} */}
        </>
     
     );
};

export default CheckoutForm;