import React from "react";
import Container from "../../../components/Container/Container";

const InstructorCard = ({ item }) => {
  return (
    <Container>
      <div className="my-6">
        <div className="card w-full md:h-[350px] bg-base-100 shadow-xl">
          <figure>
            <img className=" md:h-[200px]" src={item.image_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name : {item.name}</h2>
            <h2 className="text-xl font-medium">
              {" "}
              Instructor Email : {item.email}
            </h2>
            <p>Class taken by Instructor : {item.classes_taken}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InstructorCard;
