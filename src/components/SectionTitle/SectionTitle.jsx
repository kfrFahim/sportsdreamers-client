import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
     return (
          <div className='my-8 w-3/12 mx-auto text-center'>
               <h3 className='text-3xl uppercase my-5 border-y-4 py-3'>{heading}</h3>
          </div>
     );
};

export default SectionTitle;