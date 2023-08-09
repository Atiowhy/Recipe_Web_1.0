import React from 'react';
import Profil from '../assets/Ellipse 129.png';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
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
            className="collapse navbar-collapse w-100 justify-content-between"
            
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Landing.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Add Recipe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/Search Menu.html">
                  Search Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/Profile.html">
                  Profile
                </a>
              </li>
            </ul>
            <div className="img-position d-flex gap-2 me-3">
              <div className="img-prof d-flex justify-content-end">
                <img
                  src={Profil}
                  alt="Image Profile"
                  className="img-fluid img mt-1 w-25"
                />
              </div>

              <div className="text-img">
                <div className="name lh-1">
                  <div className="name">
                    <p>Ayudia</p>
                  </div>
                  <div className="logout">
                    <p className="fw-bold">Logout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
