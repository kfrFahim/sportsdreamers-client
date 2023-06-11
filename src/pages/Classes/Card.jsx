import React, { useContext } from "react";
import Container from "../../components/Container/Container";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Card = ({item}) => {

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const {name , image ,instructor , available_seats, price , _id, } = item;

  const {user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
      if(user && user.email){
        const orderClass = {classId : _id , name ,image,  instructor ,available_seats,price , email: user.email }
        fetch("http://localhost:5000/carts", {
          method:"POST",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify(orderClass)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Added to Cart',
              showConfirmButton: false,
              timer: 1500
            })
            // refetch();
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please Login',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", {state: {from:location}})
          }
        })
      }
  }



  return (
    <div className="my-5 " >
      <Container>
      <div className="card w-96 md:h-[350px] bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white p-3 font-semibold"> ${item.price} </p>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <h2 className="text-xl font-medium"> Instructor : {item.instructor_name}</h2>
    <p>Available Seats : {item.available_seats}</p>
    <p>Price : ${item.price}</p>
    
    <div className="card-actions justify-end">
      <button disabled={isAdmin || isInstructor || item?.available_seats===0} onClick={()=> handleAddToCart(item)} className="btn btn-outline bg-slate-700 text-white border-[1px] hover:bg-slate-200 hover:text-black">Select</button>
    </div>
  </div>
</div>
      </Container>
    </div>
  );
};

export default Card;
