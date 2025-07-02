import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import profilePic from '../assets/profile_pic.png';
import dropdownIcon from '../assets/dropdown_icon.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'nav-link underline underline-offset-4 text-primary font-semibold'
      : 'nav-link';

  const handleLinkClick = () => setMenuOpen(false); // Close on NavLink click

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass} onClick={handleLinkClick}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/doctors" className={navLinkClass} onClick={handleLinkClick}>
          ALL DOCTORS
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkClass} onClick={handleLinkClick}>
          CONTACT
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navLinkClass} onClick={handleLinkClick}>
          ABOUT
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b border-base-300 z-30 max-w-7xl mx-auto">
      {/* Left - Logo & Mobile Toggle */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu Dropdown */}
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost p-0">
          <img src={logo} alt="logo" className="w-28" />
        </Link>
      </div>

      {/* Center - Desktop Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      {/* Right - Auth/Profile */}
      <div className="navbar-end">
        {token ? (
          <div className="relative group flex items-center gap-2 cursor-pointer">
            <img src={profilePic} alt="profile" className="w-8 rounded-full" />
            <img src={dropdownIcon} alt="dropdown" className="w-2.5" />

            {/* Dropdown */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow">
                <p
                  onClick={() => navigate('/my-profile')}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate('/my-appointments')}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className="btn btn-primary rounded-2xl">
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
