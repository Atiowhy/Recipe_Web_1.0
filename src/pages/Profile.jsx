import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ImgProf from '../assets/Ellipse 129.png';
import Card from '../Components/Profile/Card';
import { NavLink, NavItem } from 'react-bootstrap';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container shadow rounded mt-5">
        <div className="header d-flex justify-content-between">
          <div className="img-position d-flex mt-3">
            <div className="img-prof w-25">
              <img
                src={ImgProf}
                alt="Image Profile"
                className="img-fluid img mt-1 w-75"
              />
            </div>

            <div className="text-img lh-1">
              <div className="box-title mt-3">
                <div className="name">
                  <a
                    href="/EditProfile.html"
                    className="text-decoration-none text-dark"
                  >
                    {localStorage.getItem('name')}
                  </a>
                </div>
                <div className="logout">
                  <p className="fw-bold">10 Recipe</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-right lh-1">
            <div className="right h-100 d-flex justify-content-end align-items-center">
              <p>21 Februari 2023</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <ul className='nav'>
              <li className='nav-item'><a href=""></a></li>
              <li><a href="" className='navbar-brand data-bs-toggle'></a></li>
              <li><a href=""></a></li>
            </ul>
          </div>
        </div>
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
