import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Bounce } from "react-awesome-reveal";
import { FaShoppingCart,FaWallet,FaShoppingBasket,FaHome,FaBars,FaUtensils,FaBook,FaUsers,FaWpforms,FaBookmark } from 'react-icons/fa';
import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {


  // const isAdmin = false;
  // const isInstructor = true;
 
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();




     return (
          <div>
               <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full my-auto bg-gray-50 text-black">


      {/* Sidebar content here */}

       
          
          <div className='flex flex-col items-center'>
          {
              isAdmin ? (<div>   <li><NavLink to="/dashboard/adminhome"><Bounce><FaHome className='text-2xl'></FaHome></Bounce> Admin Home</NavLink></li>
              <li><NavLink to="/dashboard/manageclass"> <Bounce><FaWpforms className='text-2xl'></FaWpforms></Bounce> Manage Classes</NavLink></li>
              <li><NavLink to="/dashboard/allusers"><Bounce><FaUsers className='text-2xl'></FaUsers> </Bounce>Manage Users</NavLink></li></div>) 
              :
               isInstructor ?
               (<> <li><NavLink to="/dashboard/instructorhome"><Bounce><FaHome className='text-2xl'></FaHome></Bounce> Instructor Home</NavLink></li>
               <li><NavLink to="/dashboard/addclass"><Bounce><FaBook className='text-2xl'></FaBook></Bounce> Add a Class</NavLink></li>
               <li><NavLink to="/dashboard/myinsclass"><Bounce><FaBookmark className='text-2xl'></FaBookmark></Bounce>My Classes</NavLink></li></>) 


               : (<> 
               <li><NavLink to="/dashboard/userhome">  <Bounce> <FaHome className='text-2xl'></FaHome> </Bounce> User Home </NavLink></li>
                <li><NavLink to="/dashboard/myclasses">  <Bounce> <FaShoppingCart className='text-2xl'></FaShoppingCart> </Bounce> My Selected Classes</NavLink></li>
               <li><NavLink to="/dashboard/myenrollclasses">  <Bounce> <FaShoppingBasket className='text-2xl'></FaShoppingBasket> </Bounce> My Enrolled Classes</NavLink></li>
               <li><NavLink to="/dashboard/payment">  <Bounce> <FaWallet></FaWallet> </Bounce> Payment</NavLink></li>
               <li><NavLink to="/dashboard/paymenthistory">  <Bounce> <FaWallet></FaWallet> </Bounce>Payment History </NavLink></li>
               </>)
            }
          </div>
    
          
       
          <div className="divider"></div>



      <li className='flex flex-col items-center'><NavLink to="/">  <Bounce> <FaHome className='text-2xl'></FaHome></Bounce> Home </NavLink></li>
     
    </ul>
  
  </div>
</div>
          </div>
     );
};

export default Dashboard;