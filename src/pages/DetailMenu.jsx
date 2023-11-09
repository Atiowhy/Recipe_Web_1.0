import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../assets/Image1.png';
import imgProf from '../assets/Ellipse 129.png';
import Footer from '../Components/Footer';
import axios from 'axios';
import { useParams } from 'react-router';
import { getMenuDetail } from '../redux/actions/menu';
import { useDispatch, useSelector } from 'react-redux';

export default function DetailMenu() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.menuDetailReducer);

  useEffect(() => {
    dispatch(getMenuDetail(id));
  }, [dispatch, id]);
  return (
    <div>
      <Navbar />

      <Container>
        <div className="row">
          <div className="col-md">
            <div className="card mt-5">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-side w-50 d-flex border border-5 border-0 border-start border-warning">
                      <img
                        src={imgProf}
                        className="img-fluid d-block w-25 ms-3 "
                        alt=""
                      />
                      <div className="lh-1 ms-3">
                        <p className="fw-bold">halo</p>
                        <p className="fw-bold">10 Recipes</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="lh-1 fw-bold">
                      <p className="d-flex justify-content-end">
                        21 September 2023
                      </p>
                      <p className="d-flex justify-content-end">
                        20 Likes - 2 Comment
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div>
                    <div className="title d-flex justify-content-center mt-3 p-3">
                      <h1>{data?.title}</h1>
                    </div>
                    <div className="photo d-flex justify-content-center p-3 mb-3">
                      <img
                        src={data?.image}
                        className="img-fluid w-50 rounded"
                        alt="img"
                      />
                    </div>
                    <div className="ms-5 ingridient">
                      <div className="list">
                        <h6>Ingredients</h6>
                        <ul>
                          <li>{data?.ingredients}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="chatBox border-top border-bottom border-3 border-warning p-3 mt-5">
                    <div className="row">
                      <div className="col-md-2 border-end border-3 border-warning">
                        <div className="chat d-flex gap-3">
                          <img
                            src={imgProf}
                            className="img-fluid"
                            width="50"
                            alt="profile"
                          />
                          <div className="user1 lh-1">
                            <p>Karen</p>
                            <p>20 Recipes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10 d-flex align-items-center">
                        <div className="comment mt-2">
                          <p>Wawwww Amazingg Recipe</p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-2 border-end border-3 border-warning">
                        <div className="chat d-flex gap-3">
                          <img
                            src={imgProf}
                            className="img-fluid"
                            width="50"
                            alt="profile"
                          />
                          <div className="user1 lh-1">
                            <p>Karen</p>
                            <p>20 Recipes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10 d-flex align-items-center">
                        <div className="comment mt-2">
                          <p>Wawwww Amazingg Recipe</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
