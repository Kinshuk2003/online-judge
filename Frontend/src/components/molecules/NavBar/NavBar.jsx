import React from 'react';
import { FaBell, FaUser, FaCaretDown} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./navbar.css";

export const  NavBar = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#ffa116]">10XCode</Link>
          </div>
        <nav className="main-nav">
          <Link to="/" className="nav-item">Explore</Link>
          <Link to="/problem-list" className="nav-item">Problems</Link>
          <Link to="/contest" className="nav-item">Contest</Link>
          <Link to="/discuss" className="nav-item">Discuss</Link>
          <Link to="/interview" className="nav-item with-dropdown">
            Interview
            <FaCaretDown className="dropdown-icon" />
          </Link>
          <Link to="/store" className="nav-item with-dropdown">
            Store
            <FaCaretDown className="dropdown-icon" />
          </Link>
        </nav>
      </div>
      <div className="header-right">
        <button className="icon-button notification">
          <FaBell />
        </button>
        
        <button className="icon-button profile" onClick={() => {}}>
          <FaUser />
        </button>
      </div>
    </header>
  );
}