
import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
      <div className="container-fluid">
        <h4><a className="navbar-brand content" href="#">Demo App</a></h4>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="nav nav-tabs">
            <NavLink className="nav-item nav-link content" exact to="/">Home</NavLink>
            <NavLink className="nav-link nav-item content" to="/about">About</NavLink>
            <NavLink className="nav-link nav-item content" to="/contact">Contact</NavLink>
            <NavLink className="nav-link nav-item content" to="/form">Form</NavLink>
          
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;