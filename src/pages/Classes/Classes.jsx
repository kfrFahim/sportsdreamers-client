
import { Helmet } from "react-helmet";
import Cover from "../../components/Cover/Cover";
import coverImg from '../../assets/banner/baground.jpg';
import useClasses from "../../hooks/useClasses";
import Card from "./Card";


const Classes = () => {

  const [classes] = useClasses();
  return (

    <div>
      <Helmet>
        <title>SportsDremars || Classes</title>
      </Helmet>
  
      <Cover img={coverImg} title={"Our Classes"}></Cover>

      <h1>{classes.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3">

      {
        classes.map(item => <Card item={item}></Card> )
      }
      </div>



    </div>
  );
};

export default Classes;
