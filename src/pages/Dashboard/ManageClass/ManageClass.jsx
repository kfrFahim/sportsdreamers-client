import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageClass = () => {
  const [newClass, setNewClass] = useState([]);

  const [singleClass, setSingleClass] = useState({});
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://summer-camp-server-mu-one.vercel.app/newclasses")
      .then((res) => res.json())
      .then((data) => {
        setNewClass(data);
      });
  }, []);

  const handleApprove = (id, status) => {
    fetch(
      `https://summer-camp-server-mu-one.vercel.app/newclasses/update-status/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch("https://summer-camp-server-mu-one.vercel.app/newclasses")
          .then((res) => res.json())
          .then((data) => {
            setNewClass(data);
          });
      });
  };

  const handleFeedback = (id, feedback) => {
    fetch(
      `https://summer-camp-server-mu-one.vercel.app/newclasses/update-status/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(feedback),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleClass({});
      });
  };

  return (
    <div className="w-full p-4 ">
      <Helmet>
        <title> SportsDreamers | All users</title>
      </Helmet>
      <SectionTitle heading="Manage Classes"></SectionTitle>
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
                    disabled={
                      newcls.status === "Approved" || newcls.status === "Deny"
                    }
                    className="btn btn-sm btn-success"
                    // {`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ${
                    //   disabled ? "opacity-50 cursor-not-allowed" : ""
                    // }`}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleApprove(newcls._id, "Deny")}
                    disabled={
                      newcls.status === "Deny" || newcls.status === "Approved"
                    }
                    className="btn btn-sm btn-error"
                    // {`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 ${
                    //   disabled ? "opacity-50 cursor-not-allowed" : ""
                    // }`}
                  >
                    Deny
                  </button>
                  <button
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      window.my_modal_1.showModal();
                      setSingleClass(newcls);
                    }}
                  >
                    FeedBack
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg my-2">Hello! Give your Feedback</h3>
          <input
          className="input input-bordered input-lg w-full max-w-2xls"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            type="text"
          />
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() =>
                handleFeedback(singleClass._id, { feedback: value })
              }
              className="btn btn-sm btn-secondary"
            >
              Add
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ManageClass;
