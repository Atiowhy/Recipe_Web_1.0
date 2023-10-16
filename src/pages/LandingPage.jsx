import React from 'react';
import Navbar from '../Components/Navbar';
import NavbarGuest from '../Components/GuestNav';
import Footer from '../Components/Footer';
import Content1 from '../Components/Landing/Content1';
import Content2 from '../Components/Landing/Content2';
import Content3 from '../Components/Landing/Content3';
import Content4 from '../Components/Landing/Content4';

const Landing = () => {
  const token = localStorage.getItem('token');
  console.log(token);

  const DisplayNav = () => {
    if (token) {
      return <Navbar />;
    } else {
      return <NavbarGuest />;
    }
  };
  return (
    <>
      {DisplayNav()}
      <div>
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
