import React from "react";
import Container from "../../components/Container/Container";

const Card = ({item}) => {
  return (
    <div className="my-5" >
      <Container>
      <div className="card w-96 md:h-[350px] bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white p-3 font-semibold"> ${item.price} </p>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <h2 className="text-xl font-medium"> Instructor : {item.instructor}</h2>
    <p>Available Seats : {item.available_seats}</p>
    
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-700 text-white border-[1px] hover:bg-slate-200 hover:text-black">Select</button>
    </div>
  </div>
</div>
      </Container>
    </div>
  );
};

export default Card;
