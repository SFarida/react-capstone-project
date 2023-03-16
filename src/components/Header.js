import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <NavLink to="/" className="navbar-brand">Air Pollution Stats</NavLink>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
);

export default Header;
