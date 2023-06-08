import React from 'react';
import Container from '../../../components/Container/Container';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import Featured from '../Featured/Featured';


const Home = () => {
     return (
          
              
               <Container>
                    <Banner></Banner>
                    <PopularClasses></PopularClasses>
                    <Featured></Featured>
               </Container>
             
          
     );
};

export default Home;