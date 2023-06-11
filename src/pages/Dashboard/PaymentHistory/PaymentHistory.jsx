import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../providers/AuthProvider";

const PaymentHistory = () => {
  const [patments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  console.log(user);


  useEffect(() => {
    fetch(
      `https://summer-camp-server-mu-one.vercel.app/payments/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <div className="w-full">
      <SectionTitle heading="Payment History"></SectionTitle>

      <Helmet>
        <title> SportsDreamers | All users</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>TransactionId</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {patments.map((pay, index) => (
              <tr key={pay._id}>
                <th>{index + 1}</th>
                <td>{pay.itemNames[0]}</td>
                <td>{pay.email}</td>
                <td>${pay.price}</td>
                <td>${pay.transactionId}</td>
                <td>${pay.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
