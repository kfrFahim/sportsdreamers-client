import React, {  useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Dialog } from '@headlessui/react'


const ManageClass = () => {

  const [newClass, setNewClass] = useState([]);
  
  

  useEffect(() => {
    fetch("http://localhost:5000/newclasses")
      .then((res) => res.json())
      .then((data) => {
        setNewClass(data);
      });
  }, []);

  const handleApprove = (id, status) => {
    // setStatus("approved");
    // setDisabled(true);
    fetch(`http://localhost:5000/newclasses/update-status/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch("http://localhost:5000/newclasses")
      .then((res) => res.json())
      .then((data) => {
        setNewClass(data);
      });
      });
  };


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
              <th>Status</th>
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
                <td className="text-gray-900 font-semibold">{newcls.status}</td>
                <td className="flex flex-col gap-1">
                  <button
                    onClick={() => handleApprove(newcls._id, "Approved")}
                    disabled={newcls.status === "Approved" || newcls.status === "Deny"}
                    className="btn btn-sm btn-success"
                    // {`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ${
                    //   disabled ? "opacity-50 cursor-not-allowed" : ""
                    // }`}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleApprove(newcls._id, "Deny")}
                    disabled={newcls.status === "Deny" || newcls.status === "Approved" }
                    className="btn btn-sm btn-error"
                    // {`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 ${
                    //   disabled ? "opacity-50 cursor-not-allowed" : ""
                    // }`}
                  >
                    Deny
                  </button>

                  <div>
                <button className="btn">asdfsd</button>
                 </div>

                   
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
