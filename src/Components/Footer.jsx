import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-warning mt-5">
      <div className="text-footer text-center">
        <h1 className="eat">Eat, Cook, Repeat</h1>
      </div>
      <div className="text-footer2 text-center text-muted mt-5 pb-5">
        <h3>Shere Your Best Recipe By Uploading Here !</h3>
      </div>
      <div className="text-header d-flex justify-content-center">
        <div className="row w-50">
          <div className="col-md-3">
            <p className="text-center text-muted">Product</p>
          </div>
          <div className="col-md-3">
            <p className="text-center text-muted">Company</p>
          </div>
          <div className="col-md-3">
            <p className="text-center text-muted">Learn More</p>
          </div>
          <div className="col-md-3">
            <p className="text-center text-muted">Get In Touch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer
