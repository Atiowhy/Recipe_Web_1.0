import React from 'react';
import Img2 from '../../assets/Image8.png';

const Content3 = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="title2 border border-0 border-start border-5 border-warning">
          <h1 className="ms-3">New Recipe</h1>
        </div>
        <div className="row d-flex">
            <div className="col-md-6">
                <div className="image-2 mt-5 d-flex justify-content-center p-3 border rounded border-3 border-warning">
                    <img src={Img2} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div className="title-2">
                    <h2 className='w-50'>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                    <p className='w-50'>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                    <button className='btn btn-warning text-light w-50'>Learn More</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
