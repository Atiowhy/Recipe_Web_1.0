import React from 'react';
import ImgProf from '../../assets/Ellipse 129.png';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtYSI6InVzZXJCYXJ1IiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiRhcmdvbjJpZCR2PTE5JG09NjU1MzYsdD0zLHA9NCQ4RWxPZ0xnZjBTZDJlbzBNWVhCVGVRJCtvVjFCV3lyU25CQW9KNWNyRVFyTlcrVzh0SlVyNHJQQTJYdldzazZDZDAiLCJwaG90byI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjMtMDgtMDhUMDU6MTI6MzAuNDE5WiIsImlhdCI6MTY5MTQ5MjMwOH0.5phBSRcBVcBsdIrAWyeRtpiF7GnsJjM87XNKxgfDuTA`;

const Card = () => {
  const navigate = useNavigate();

  const getData = () => {
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
  };

  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:4000/recipe/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => {
        console.log(err);
        getData();
      });
  };

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={item.id}
            onClick={() => console.log(item.id)}
            className="row mt-4 border border-0 border-bottom border-1 border-dark p-3 "
          >
            <div className="col-md-4 d-flex">
              <div className="contentImg w-100 h-100">
                <img src={item.photo} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-content ms-3">
                <h3>{item.title}</h3>
                <h4>Ingredients:</h4>
                <p>{item.ingridients}</p>
                <h5>Category:</h5>
                <p>{item.category}</p>
                <div className="riview">
                  <button className="btn btn-warning text-white">
                    10Likes - 12Riview - 3Bookmark
                  </button>
                </div>
                <div className="account mt-3">
                  <div className="img-account mt-1 d-flex">
                    <div className="img-food w-25 d-flex justify-content-center">
                      <img
                        src={ImgProf}
                        alt="profile"
                        className="img-fluid w-75"
                      />
                    </div>
                    <div className="text-img d-flex align-items-center mt-2">
                      <p>Keren</p>
                    </div>
                    <div className="edit w-100 d-flex align-items-center">
                      <div className="button-edit w-100">
                        <Link to={`/update-menu/${item.id}`}>
                          <button className="btn btn-primary mt-2 ms-1 text-white">
                            Edit
                          </button>
                        </Link>
                        <button
                          className="btn btn-danger mt-2 ms-1"
                          onClick={() => deleteData(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
