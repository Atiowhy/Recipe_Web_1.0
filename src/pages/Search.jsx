import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';
import progImage from '../assets/Ellipse 129.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchMenu } from '../redux/actions/menu';
import { getMenu } from '../redux/actions/menu';

export default function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [currentpage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const result = useCallback(
    (page) => {
      const token = localStorage.getItem('token');
      axios
        .get(import.meta.env.VITE_BASE_URL + `/search`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: page,
            limit: 2,
            searchBy: 'title',
            search: search,
          },
        })
        .then((res) => {
          console.log(res);
          setData(res.data);
          setTotalPage(res.data.pagination.totalPage);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [search]
  );

  const submitSearch = async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    result(1);
  };

  const handleNext = useCallback(() => {
    if (currentpage < totalPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [currentpage, totalPage]);

  const handlePrev = useCallback(() => {
    if (currentpage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, [currentpage]);

  const changeSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  useEffect(() => {
    result(currentpage);
  }, [result, currentpage]);

  const handleNextDisabled = currentpage >= totalPage;
  const handlePrevDisabled = currentpage === 1;

  return (
    <div>
      <Navbar />
      <div className="article ms-4">
        <div className="main w-25">
          <h1 className="text-article">Discover Recipe &amp; Delicious Food</h1>
        </div>
        <div className="row">
          <form onSubmit={submitSearch} className="col-md-4">
            <input
              className="mb-2 form-control form-control-lg"
              type="text"
              placeholder="telur dadar ..."
              name="search"
              value={search}
              onChange={changeSearch}
              aria-label=".form-control-lg example"
            />
          </form>
          <div className="col-md-4">
            <button className="btn btn-warning text-white">Search</button>
          </div>
        </div>
        <div className="choose w-50">
          <div className="row mt-3">
            <div className="col-md-3 mb-2">
              <button
                className="btn btn-warning text-white w-100"
                // onClick={handlerSort}
              >
                ASC
              </button>
            </div>
            <div className="col-md-3 mb-2">
              <button className="btn btn-warning text-white w-100">
                Popular
              </button>
            </div>
            <div className="col-md-3 mb-2">
              <button className="btn btn-success text-white w-100">
                Vegetarian
              </button>
            </div>
            <div className="col-md-3 mb-2">
              <button className="btn btn-success text-white w-100">
                Breakfast
              </button>
            </div>
          </div>
        </div>

        {data?.data?.map((item, index) => {
          return (
            <div
              key={index}
              className="row mt-4 border border-0 border-bottom border-1 border-dark p-3"
            >
              <div className="col-md-4 d-flex">
                <div className="contentImg w-100 h-100">
                  <img src={item.image} className="img-fluid rounded" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-content ms-3">
                  <h3>{item.title}</h3>
                  <h4>Ingredients:</h4>
                  <p>{item.ingredients}</p>
                  <div className="riview">
                    <button className="btn btn-warning text-white">
                      10Likes - 12Riview - 3Bookmark
                    </button>
                  </div>

                  <div className="row">
                    <div className="col-md p-3 d-flex">
                      <div className="col-md-1">
                        <img
                          src={progImage}
                          alt="profile"
                          width={60}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-2 p-1 ps-2 d-flex justify-content-center text-dark align-items-cente">
                        <p>{item.author}</p>
                      </div>
                      <div className="col-md-3 d-flex p-1 text-dark">
                        <p>{item.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="pagination d-flex justify-content-center mt-5">
          <button
            className="btn btn-warning text-white ms-3"
            onClick={handlePrev}
            disabled={handlePrevDisabled}
          >
            Prev
          </button>
          <h4 className="text-muted ms-2 me-2">
            Show {data?.pagination?.pageNow} From {data?.pagination?.totalPage}
          </h4>
          <button
            className="btn btn-warning text-white"
            onClick={handleNext}
            disabled={handleNextDisabled}
          >
            Next
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
