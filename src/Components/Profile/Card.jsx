import React, { useState } from 'react';
import ImgProf from '../../assets/Ellipse 129.png';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMenu,
  deleteMenu,
  getMenuDetail,
  getMenuUsers,
} from '../../redux/actions/menu';
import axios from 'axios';

const Card = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('http://localhost:4000/recipe', {
        headers: {
          Authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                <img
                  src={item.image}
                  className="img-fluid rounded shadow"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-content ms-3">
                <div className='mt-2'>
                  <h1>{item.title}</h1>
                  <h4>Ingredients:</h4>
                  <p>{item.ingredients}</p>
                  <h5>Category:</h5>
                  <p>{item.category}</p>
                </div>
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
                      <p>{item.author}</p>
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
                          onClick={() =>
                            dispatch(deleteMenu(item.id, navigate))
                          }
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
