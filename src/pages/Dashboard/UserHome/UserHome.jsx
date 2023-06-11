import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const UserHome = () => {
     const {user} = useContext(AuthContext);
     return (
          <div>
                <h2>Welcome Back , {user.displayName}</h2>
          </div>
     );
};

export default UserHome;