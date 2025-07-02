import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'
import profilePic from '../assets/profile_pic.png'
import dropdoen_icon from '../assets/dropdown_icon.svg'
import { useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(true);
    const links = <>
                 <li><NavLink to="/" className='nav-link'>HOME</NavLink></li>
                 <li><NavLink to="/doctors" className='nav-link'>ALL DOCTORS</NavLink></li>
                 <li><NavLink to="/contact" className='nav-link'>CONTACT</NavLink></li>
                 <li><NavLink to="/about" className='nav-link'>ABOUT</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 border-b-2 border-base-300 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost"><img className='sm:text-xl text-2xl'  src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
        token 
        ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={profilePic} alt="" />
            <img className='w-2.5' src={dropdoen_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                    <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
            </div>
        </div>
        :
        <button onClick={()=>navigate('/login')} className="btn btn-primary rounded-2xl">Create account</button>
    }
    
  </div>
</div>
    );
};

export default Navbar;


