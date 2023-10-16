import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postMenu } from '../../redux/actions/menu';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import {toast, Bounce, ToastContainer} from 'react-toastify'

const FormRecipe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    title: '',
    ingredients: '',
    category_id: '1',
    photo_url: '',
  });

  const postData = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append('title', inputData.title);
    bodyFormData.append('ingredients', inputData.ingredients);
    bodyFormData.append('category_id', inputData.category_id);
    bodyFormData.append('image', photo);
    console.log(bodyFormData);

    dispatch(postMenu(bodyFormData, navigate));
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const onChangePhoto = (e) => {
    setPhoto(e.target.files[0]);
    e.target.files[0] &&
      setInputData({
        ...inputData,
        photo_url: URL.createObjectURL(e.target.files[0]),
      });
  };

  return (
    <>
      <div className="container mt-5">
      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          transition={Bounce}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <form onSubmit={postData}>
          <div
            className="mb-3 border border-1 rounded mt-5 w-100"
            style={{ height: '300px', background: 'rgba(246, 245, 244, 1)' }}
          >
            <label className="btn d-flex h-100 justify-content-center align-items-center btn-lg text-muted ">
              Upload
              <input
                type="file"
                name="image"
                onChange={onChangePhoto}
                className="form-control"
                style={{ display: 'none' }}
              />
              {photo && (
                <img
                  src={inputData.photo_url}
                  // width={400}
                  className="img-fluid w-25 rounded"
                />
              )}
            </label>
          </div>
          <div className="mb-3 title-form">
            <input
              type="text"
              name="title"
              value={inputData.title}
              onChange={onChange}
              className="form-control title"
              placeholder="Title"
              style={{ height: '50px', background: 'rgba(246, 245, 244, 1)' }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="ingredients"
              value={inputData.ingredients}
              onChange={onChange}
              className="form-control ingredients"
              placeholder="Ingredients"
              style={{ height: '250px', background: 'rgba(246, 245, 244, 1)' }}
            />
          </div>

          <Row>
            <Col md={2}>
              <Form.Select className="py-3 bg-body-tertiary">
                <option>Category</option>
                <option value="1">Main Course</option>
                <option value="2">Dessert</option>
                <option value="3">Appetizer</option>
              </Form.Select>
            </Col>
          </Row>

          <div className="post text-center mt-4">
            <button
              type="submit"
              className="btn fs-5 btn-warning text-white w-50"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormRecipe;
