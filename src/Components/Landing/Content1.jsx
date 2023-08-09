import React from 'react';
import Img1 from '../../assets/Image1.png';
const Content1 = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md d-flex mt-5">
            <div className="text-right w-50 d-flex align-items-center ms-5">
              <div className="title">
                <div className="title">
                  <h1 style={{ color: 'rgba(46, 38, 111, 1)' }}>
                    Discover Recipe & Delicious Food
                  </h1>
                </div>
                <div className="input">
                  <div className="search ">
                    <input
                      type="text"
                      className="w-50 rounded bg-light"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="image d-flex justify-content-center">
              <img
                src={Img1}
                className="img-fluid w-75 border p-3 rounded border-3 border-warning"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content1;
