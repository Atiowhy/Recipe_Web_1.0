import React, { useState } from 'react';
import ImgProf from '../../assets/Ellipse 129.png';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMenu, getMenuUsers } from '../../redux/actions/menu';
// import { useNavigate } from 'react-router';
import axios from 'axios';

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [destroy, setDestroy] = useState(null);
  const { data } = useSelector((state) => state.getMenuUsersReducer);

  const destroyMenu = (id) => {
    dispatch(deleteMenu(id));
    setDestroy(true);
    navigate('/');
  };

  useEffect(() => {
    dispatch(getMenuUsers());
    setDestroy(false);
  }, [deleteMenu]);
  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <div className="row mt-4 border border-0 border-bottom border-1 border-dark p-3 ">
              <div key={item.id} className="col-md-4 d-flex">
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
                  <div className="mt-2">
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
                            onClick={() => destroyMenu(item.id)}
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
