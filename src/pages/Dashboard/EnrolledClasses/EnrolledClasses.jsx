import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';

const EnrolledClasses = () => {

     const [patments, setPayments] = useState([]);
     const [loading, setLoading] = useState(true);
   
     useEffect(() => {
       fetch("http://localhost:5000/payments")
         .then((res) => res.json())
         .then((data) => {
          console.log(data)
          setPayments(data);
           setLoading(false);
         });
     }, []);

     return (
          <div className='w-full'>
          <SectionTitle heading="My Enrolled Classes"></SectionTitle>

       <Helmet>
           <title> SportsDreamers | Enrolled Classes</title>
       </Helmet>
       <h3 className="text-3xl font-semibold my-4">Total Users: {patments.length}</h3>
       <div className="overflow-x-auto">
           <table className="table table-zebra w-full">
               {/* head */}
               <thead>
                   <tr>
                       <th>#</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>TransactionId</th>
                       <th>Date</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       patments.map((pay, index) => <tr key={pay._id}>
                           <th>{index + 1}</th>
                           <td>{pay.itemNames[0]}</td>
                           <td>{pay.email}</td>
                           <td>${pay.transactionId}</td>
                           <td>${pay.date}</td>
                          
                         
                       </tr>)
                   }
                   
                   
               </tbody>
           </table>
       </div>





     </div>
     );
};

export default EnrolledClasses;