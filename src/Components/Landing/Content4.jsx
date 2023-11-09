import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../../redux/actions/menu';

const Content4 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isError, errorMessage, isLoading } = useSelector(
    (state) => state.menu
  );
  const { search, setSearch } = useState('');
  // const { id } = useParams;

  // let url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  return (
    <div className="container mt-5">
      <div className="title-4 border border-0 border-start border-3 border-warning ">
        <h1 className="ms-3">Popular Recipe</h1>
        {/* {isLoading && <div className='spinner-border text-light' role='status'>
            <span className='sr-only'></span>
            </div>} */}
      </div>
      <div className="row mt-4">
        {data?.map((item, index) => {
          return (
            <div
              className="col-md-4 mb-3"
              key={item.id}
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <div className="title position-relative">
                <div className="title-product position-absolute d-flex w-100 h-100 align-items-end">
                  <p className="ps-3 w-75 fw-bold text-white fs-4">
                    {item.title}
                  </p>
                  <p className="text-white fw-bold">({item.author})</p>
                </div>
                <div>
                  <img
                    src={item.image}
                    // onClick={() => navigate('/detail')}
                    alt="Img"
                    width="100%"
                    className="img-fluid object-fit-cover rounded shadow"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content4;
