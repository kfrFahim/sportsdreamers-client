import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../hooks/useCart';

const Payment = () => {

     const [cart] = useCart();
     console.log(cart);
     const total = cart.reduce((sum, item) => sum + item.price, 0);
     const price = parseFloat(total.toFixed(2))
    


   
   

     const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

     return (
          <div className='w-full' >
               <SectionTitle heading='Payment'></SectionTitle>

               <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price} ></CheckoutForm>
            </Elements>
          </div>
     );
};

export default Payment;