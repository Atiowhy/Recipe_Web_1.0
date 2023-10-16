import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

import { Container, Navbar, Nav } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarGuest = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow bg-body-tertiary">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/search">
                Search Menu
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default NavbarGuest;
