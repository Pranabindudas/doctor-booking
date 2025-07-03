import React, {  useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b-2 border-gray-300'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-primary border-b-2 border-primary pb-1"
          : "text-gray-600 hover:text-primary pb-1"
      }
    >
      HOME
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/doctors"
      className={({ isActive }) =>
        isActive
          ? "text-primary border-b-2 border-primary pb-1"
          : "text-gray-600 hover:text-primary pb-1"
      }
    >
      ALL DOCTORS
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive
          ? "text-primary border-b-2 border-primary pb-1"
          : "text-gray-600 hover:text-primary pb-1"
      }
    >
      ABOUT
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive
          ? "text-primary border-b-2 border-primary pb-1"
          : "text-gray-600 hover:text-primary pb-1"
      }
    >
      CONTACT
    </NavLink>
  </li>
</ul>
<div  className='flex items-center gap-4'>
  {
    token 
    ? <div className='flex items-center gap-2 cursor-pointer group relative'>
      <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
      <img className='w-2.5' src={assets.dropdown_icon} alt="" />
      <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
          <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer' >My Profile</p>
          <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer' >My Appointments</p>
          <p className='hover:text-red-600 cursor-pointer' onClick={()=>setToken(false)}>Logout</p>
        </div>
      </div>
    </div>
    : <button onClick={()=>navigate('/')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
  }
 
</div>
    </div>
  );
};

export default Navbar;