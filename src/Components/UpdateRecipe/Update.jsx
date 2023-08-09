import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router';

let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtYSI6InVzZXJCYXJ1IiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiRhcmdvbjJpZCR2PTE5JG09NjU1MzYsdD0zLHA9NCQ4RWxPZ0xnZjBTZDJlbzBNWVhCVGVRJCtvVjFCV3lyU25CQW9KNWNyRVFyTlcrVzh0SlVyNHJQQTJYdldzazZDZDAiLCJwaG90byI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjMtMDgtMDhUMDU6MTI6MzAuNDE5WiIsImlhdCI6MTY5MTQ5MjMwOH0.5phBSRcBVcBsdIrAWyeRtpiF7GnsJjM87XNKxgfDuTA`;

const UpdateData = () => {
  const {menuId} = useParams();
  const [photo, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    title: '',
    ingridients: '',
    category_id: '1',
    photo_url: '',
  });

  

  const getData = () => {
    axios
      .get(`http://localhost:4000/recipe/${menuId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setInputData({... inputData,title:res.data.data.title, ingridients:res.data.data.ingridients, photo_url:res.data.data.photo})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(menuId);
    getData()
  }, []);

  const postData = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append('title', inputData.title);
    bodyFormData.append('ingridients', inputData.ingridients);
    bodyFormData.append('category_id', inputData.category_id);
    bodyFormData.append('photo', photo);
    console.log(bodyFormData);

    axios
      .put(`http://localhost:4000/recipe/${menuId}`, bodyFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <form onSubmit={postData}>
          <div
            className="mb-3 border border-1 rounded mt-5 w-100"
            style={{ height: '300px', background: 'rgba(246, 245, 244, 1)' }}
          >
            <label className="btn d-flex h-100 justify-content-center align-items-center btn-lg text-muted ">
              Upload
              <input
                type="file"
                name="photo"
                onChange={onChangePhoto}
                className="form-control"
                style={{ display: 'none' }}
              />
              <img src={inputData.photo_url} width={400} />
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
              name="ingridients"
              value={inputData.ingridients}
              onChange={onChange}
              className="form-control ingredients"
              placeholder="Ingredients"
              style={{ height: '250px', background: 'rgba(246, 245, 244, 1)' }}
            />
          </div>
          <div className="dropdown">
            <button
              className="btn list btn-secondary dropdown-toggle text-muted"
              style={{ background: 'rgba(246, 245, 244, 1)' }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Main Course
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dessert
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Appetizier
                </a>
              </li>
            </ul>
          </div>
          <div className="post text-center mt-4">
            <button
              type="submit"
              className="btn fs-5 btn-warning text-white w-50"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateData;
