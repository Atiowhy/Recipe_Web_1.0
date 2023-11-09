import React from 'react';
import Profil from '../assets/Ellipse 129.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';

const Navbar = () => {
  const Navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const Logout = () => {
    localStorage.clear();
    Navigate('/login');
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top shadow bg-body-tertiary">
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
                <a className="nav-link active" href="/add">
                  Add Recipes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/search">
                  Search Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/profile">
                  Profile
                </a>
              </li>
            </ul>
            {/* <div className="img-position d-flex gap-2  me-3 bg-primary w-50">
              <div className="img-prof d-flex justify-content-end">
                <img
                  src={Profil}
                  width={40}
                  
                  alt="Image Profile"
                  className="img-fluid d-block img mt-1"
                />
              </div>
              <div className="text-img">
                <div className="name lh-1">
                  <div className="name">
                    {<p className="fw-bold">{localStorage.getItem('name')}</p>}
                  </div>
                  <div className="logout d-flex justify-content-end">
                    <p className="fw-bold btn btn-danger" onClick={Logout}>
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="prof d-flex gap-2">
              <div className="img">
                <div className="img-prof d-flex justify-content-center">
                  <img src={Profil} alt="profil" width={75} />
                </div>
              </div>
              <div className="name lh-1">
                <p className="fw-bold">{localStorage.getItem('name')}</p>
                <button className="btn btn-danger" onClick={() => Logout()}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
