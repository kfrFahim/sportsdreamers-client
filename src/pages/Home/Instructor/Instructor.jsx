import React, { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import { Helmet } from "react-helmet";

import coverImg from '../../../assets/banner/baground.jpg';
import InstructorCard from "./InstructorCard";
import Cover from "../../../components/Cover/Cover";

const Instructor = () => {
     const [instructor, setInstructor] = useState([]);
     const [loading, setLoading] = useState(true);
   
     useEffect(() => {
       fetch("http://localhost:5000/instructor")
         .then((res) => res.json())
         .then((data) => {
           setInstructor(data);
           setLoading(false);
         });
     }, []);
  return (
    
      <Container>
      <Helmet>
        <title>SportsDremars || Instructor</title>
      </Helmet>
  
      <Cover img={coverImg} title={"Our Instructors"}></Cover>

      <div className="grid grid-cols-1 md:grid-cols-3">

      {
        instructor.map(item => <InstructorCard item={item}></InstructorCard>)
      }
      </div>

      </Container>
    
  );
};

export default Instructor;
