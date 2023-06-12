import React, { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import { Helmet } from "react-helmet";
import InstructorCard from "./InstructorCard";
import Cover from "../../../components/Cover/Cover";

const Instructor = () => {
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
    <div className="pt-20">
      <Helmet>
        <title>SportsDremars || Instructor</title>
      </Helmet>

      <Cover
        img="https://i.ibb.co/gMgLV1H/isntructors.webp"
        title={"Our Instructors"}
      ></Cover>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {instructor.map((item) => (
          <InstructorCard item={item}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
