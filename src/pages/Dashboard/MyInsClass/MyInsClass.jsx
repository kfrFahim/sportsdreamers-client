import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const MyInsClass = () => {

     const [myInsclass, setMyInsClass] = useState([]);
     const [loading, setLoading] = useState(true);
   
     useEffect(() => {
       fetch("http://localhost:5000/newclasses")
         .then((res) => res.json())
         .then((data) => {
          setMyInsClass(data);
           setLoading(false);
         });
     }, []);

     return (
          <div className="w-full p-4 ">
          <Helmet>
            <title> SportsDreamers | All users</title>
          </Helmet>
          
          <SectionTitle heading="Instructor Added Class"></SectionTitle>

          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Instructor Name</th>
                  <th>Email</th>
                  <th>Available Seats</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {myInsclass.map((newcls, index) => (
                  <tr key={newcls._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={newcls.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{newcls.name}</td>
                    <td>{newcls.instructor_name}</td>
                    <td>{newcls.instructor_email}</td>
                    <td>{newcls.available_seats}</td>
                    <td>${newcls.price}</td>
                    <td className="text-gray-900 font-semibold">{newcls.status}</td>
                    <td>
                      No Feedback
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
     );
};

export default MyInsClass;