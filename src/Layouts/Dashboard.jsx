import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Bounce } from "react-awesome-reveal";
import { FaShoppingCart,FaWallet,FaShoppingBasket,FaHome,FaBars,FaUtensils,FaBook,FaUsers } from 'react-icons/fa';

const Dashboard = () => {


  const isAdmin = true;
  const isInstructor = true;


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
    <ul className="menu p-4 w-80 h-full bg-gray-50 text-black">


      {/* Sidebar content here */}

       
          
          <div>
          {
              isAdmin ? (<div>   <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
              <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
              <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
              <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
              <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li></div>) 
              : isInstructor ?
               (<>isntructor</>) 
               : (<>  <li><NavLink to="/dashboard/myclasses">  <Bounce> <FaShoppingCart></FaShoppingCart> </Bounce> My Selected Classes</NavLink></li>
               <li><NavLink to="/dashboard/myenrollclasses">  <Bounce> <FaShoppingBasket></FaShoppingBasket> </Bounce> My Enrolled Classes</NavLink></li>
               <li><NavLink to="/dashboard/paymenthistory">  <Bounce> <FaWallet></FaWallet> </Bounce>Payment History </NavLink></li>
               </>)
            }
          </div>
    
          
       
          <div className="divider"></div>



      <li><NavLink to="/">  <Bounce> <FaHome></FaHome></Bounce> Home </NavLink></li>
      <li><NavLink to="/classes">  <Bounce> <FaBars></FaBars></Bounce> All Classes </NavLink></li>
    </ul>
  
  </div>
</div>
          </div>
     );
};

export default Dashboard;