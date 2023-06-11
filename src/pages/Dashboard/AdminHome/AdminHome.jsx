import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const AdminHome = () => {

     const {user} = useContext(AuthContext);
     console.log(user);

     return (
          <div>
             <h2 className='text-3xl font-semibold' >Welcome Back , {user.displayName}</h2>

             
    
          </div>
     );
};

export default AdminHome;