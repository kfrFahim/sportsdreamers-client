import React, { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import { Helmet } from "react-helmet";

const ManageClass = () => {
  const [newClass, setNewClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/newclasses")
      .then((res) => res.json())
      .then((data) => {
        setNewClass(data);
      });
  }, []);

  return (
    <div className="w-full p-4 ">
      <Helmet>
        <title> SportsDreamers | All users</title>
      </Helmet>
      {/* <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3> */}
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newClass.map((newcls, index) => (
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
                <td className="flex flex-col gap-1">
                    <button className="btn btn-sm btn-warning">Approve</button>
                    <button className="btn btn-sm btn-error">Deny</button>
                    <button className="btn btn-sm btn-accent">Feedback</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
