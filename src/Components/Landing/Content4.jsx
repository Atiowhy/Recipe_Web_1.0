import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import img4 from '../../assets/Image5.png';

let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtYSI6InVzZXJCYXJ1IiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiRhcmdvbjJpZCR2PTE5JG09NjU1MzYsdD0zLHA9NCQ4RWxPZ0xnZjBTZDJlbzBNWVhCVGVRJCtvVjFCV3lyU25CQW9KNWNyRVFyTlcrVzh0SlVyNHJQQTJYdldzazZDZDAiLCJwaG90byI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjMtMDgtMDhUMDU6MTI6MzAuNDE5WiIsImlhdCI6MTY5MTQ5MjMwOH0.5phBSRcBVcBsdIrAWyeRtpiF7GnsJjM87XNKxgfDuTA`;

const Content4 = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get('http://localhost:4000/recipe', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="title-4 border border-0 border-start border-3 border-warning ">
          <h1 className="ms-3">Popular Recipe</h1>
        </div>
        <div className="row mt-4">
          {data?.map((item, index) => {
            return (
              <div
                className="col-md-4 "
                key={item.id}
                onClick={() => console.log(item.id)}
              >
                <div className="title">
                  <img
                    src={item.photo}
                    alt="Img"
                    className="img-fluid w-100 object-fit-cover rounded"
                  />
                  <div className="title-product">
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content4;
