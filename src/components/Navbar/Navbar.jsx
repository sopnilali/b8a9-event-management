import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Navbar.css'
import useAuth from '../../hooks/useAuth';



const Navbar = () => {

  const {user, userLogout} = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    userLogout()
    .then(res => {
      console.log('Logout completed',res);
      navigate('/login');
    })
  }

    const navlinks = <>
                    <NavLink className="mx-2 text-lg px-4 py-1 border rounded-md " to="/">Home</NavLink>
                    <NavLink className="mx-2 text-lg px-4 py-1 border rounded-md" to="/services">Services</NavLink>
                    {/* <NavLink className="mx-2 text-lg px-4 py-1 border rounded-md" to="/login">Login</NavLink> */}
                    <NavLink className="mx-2 text-lg px-4 py-1 border rounded-md" to="/register">Register</NavLink>
    </>

    return (
        <>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img className='w-28 avatar normal-case' src={Logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <NavLink onClick={handleLogout} to="/login" className="btn btn-sm">Logout</NavLink> : <NavLink to="/login" className="btn btn-sm">Login</NavLink>
    }
    
  </div>
</div>
        </>
    );
};

export default Navbar;