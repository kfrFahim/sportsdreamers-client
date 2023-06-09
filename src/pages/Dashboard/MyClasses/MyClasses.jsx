import React from 'react';
import useCart from '../../../hooks/useCart';
import { Helmet } from 'react-helmet';
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClasses = () => {
     const [cart , refetch] = useCart();

     const total = cart.reduce((sum, item) => item.price + sum, 0);


     const handleDelete = (items) => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/carts/${items._id}`, {
              method:"DELETE"
             })
             .then(res => res.json())
             .then(data => {
              if(data.deletedCount > 0){
                refetch();
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
             })
            }
          })
        }


     return (
          <div className="w-full p-4">
          <Helmet>
            <title>SportsDremars | My Cart </title>
          </Helmet>
          <div className="flex justify-between uppercase font-semibold">
            <h2>My cart {cart.length}</h2>
            <h2>Total Price : ${total}</h2>
           <Link to="/dashboard/payment"> <button className="btn btn-warning btn-sm">PAY</button></Link>
          </div>
    
          {/* Table */}
    
          <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
            <th> # </th>
            </th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Delete</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((items , index) => <tr key={items._id}>
              <th> {index + 1} </th>
              <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={items.image} />
                  </div>
                </div>
                </div>
              </td>
              <td>
               {items.name}
                {/* <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
              </td>
              <td>$ {items.price}</td>

              <td>
                <button onClick={() => handleDelete(items)} className="btn btn-ghost bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
              </td>
            </tr> )
          }
    
        </tbody>
        
      </table>
    </div>
    
        </div>
     );
};

export default MyClasses;