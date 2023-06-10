import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../hooks/useCart';

const Payment = () => {

     const [cart] = useCart();
     
     const totalPrice = cart.find((item ) =>  item._id);
     const classPrice = totalPrice.price;
     console.log(price);



   
   

     const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

     return (
          <div className='w-full' >
               <SectionTitle heading='Payment'></SectionTitle>

               <Elements stripe={stripePromise}>
                <CheckoutForm price={classPrice} ></CheckoutForm>
            </Elements>
          </div>
     );
};

export default Payment;