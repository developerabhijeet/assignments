import React from 'react'
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Demo App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="nav nav-tabs">
            <NavLink className="nav-item nav-link" exact to="/">Home</NavLink>
            <NavLink className="nav-link nav-item" to="/about">About</NavLink>
            <NavLink className="nav-link nav-item" to="/contact">Contact</NavLink>

            <NavLink className="nav-link nav-item" to="/login">Login</NavLink>
            <NavLink className="nav-link nav-item" to="/register">Register</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;