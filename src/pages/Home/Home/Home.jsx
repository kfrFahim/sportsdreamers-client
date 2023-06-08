import React, { useContext } from 'react';
import Container from '../../../components/Container/Container';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import Featured from '../Featured/Featured';
import Loader from '../../../components/Loader/Loader';
import { AuthContext } from '../../../providers/AuthProvider';


const Home = () => {
  const {loading} = useContext(AuthContext);
  
     if (loading) {
          return <Loader />
        }
     return (
          
              
               <Container>
                    <Banner></Banner>
                    <PopularClasses></PopularClasses>
                    <Featured></Featured>
               </Container>
             
          
     );
};

export default Home;