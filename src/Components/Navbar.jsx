import React from 'react';
import Profil from '../assets/Ellipse 129.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swal from 'sweetalert2';

const Navbar = () => {
  const Navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const Logout = () => {
    if (localStorage.getItem('token')) {
      Swal.fire({
        title: 'Loading...',
        allowOutsideClick: false, // Mencegah interaksi selama loading
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      localStorage.clear();
      Navigate('/');
      Swal.close();
    }
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
                <Link to="/landing" className="text-decoration-none">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="text-decoration-none">
                  <a className="nav-link active">Add Recipes</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="text-decoration-none">
                  <a className="nav-link active">Search Menu</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="text-decoration-none">
                  <a className="nav-link active">Profile</a>
                </Link>
              </li>
            </ul>

            <div className="prof d-flex gap-2">
              <div className="img">
                <div className="img-prof d-flex justify-content-center">
                  <img src={Profil} alt="profil" width={75} />
                </div>
              </div>
              <div className="name lh-1">
                <p className="fw-bold">{localStorage.getItem('name')}</p>
                <button className="btn btn-danger" onClick={() => Logout()}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
