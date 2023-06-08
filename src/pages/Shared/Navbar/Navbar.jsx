import React, { useContext } from "react";
import Container from "../../../components/Container/Container";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import avatarImg from "../../../assets/avatar/placeholder.jpg"


const Navbar = () => {

  const {user , logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut();
  }


  return (
<div className="mb-[100px] md:mb-0">
  <Container>
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li tabIndex={0}> <Link to="/classes">Classes</Link> </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    
    {
        user ? <> <div className="flex gap-1">
          <button className="btn" onClick={handleLogOut}> Logout </button>
          <img
      className='rounded-full'
      src={user && user.photoURL ? user.photoURL : avatarImg}
      alt='profile'
      height='30'
      width='30'
    />

          
          </div></> : <><button className="btn"><Link to="/login"> Login </Link></button></>
    }
  </div>
</div>
  </Container>
</div>
  );
};

export default Navbar;
