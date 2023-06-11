import React, { useEffect, useState } from "react";
import InstructorCard from "../Instructor/InstructorCard";
import Container from "../../../components/Container/Container";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://summer-camp-server-mu-one.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-[full] mx-auto">
      <Container>
        <Helmet>
          <title>SportsDremars || Instructor</title>
        </Helmet>

        <SectionTitle heading={"Popular Instructor"}></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {instructor.map((item) => (
            <InstructorCard key={item._id} item={item}></InstructorCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularInstructor;
