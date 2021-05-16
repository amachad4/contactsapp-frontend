import React from 'react';
import LogoutButton from './LogoutButton.jsx';
import { Link } from 'react-router-dom';


function Navbar(){
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Contacts App</Link>
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/" className="nav-link">Contacts List</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create" className="nav-link">Create Contact</Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <LogoutButton />
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
