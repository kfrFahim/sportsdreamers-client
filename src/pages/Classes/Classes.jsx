import { Helmet } from "react-helmet";
import Cover from "../../components/Cover/Cover";
import coverImg from "../../assets/banner/baground.jpg";
import Card from "./Card";
import { useEffect, useState } from "react";

const Classes = () => {
  // const [classes] = useClasses();

  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://summer-camp-server-mu-one.vercel.app/apclasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-20">
      <Helmet>
        <title>SportsDremars || Classes</title>
      </Helmet>

      <Cover img={coverImg} title={"Our Classes"}></Cover>

      <div className="grid grid-cols-1 md:grid-cols-3 w-[95%]">
        {classes.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;
