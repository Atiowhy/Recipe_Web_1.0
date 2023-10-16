import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../redux/actions/login';
import {toast, Bounce, ToastContainer} from 'react-toastify'

export default function login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const postData = (e) => {
    e.preventDefault();
    dispatch(Login(form, navigate));
  };

  return (
    <div className="container-fluid ">
      <div className="container-fluid">
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
        
      <div className="Login w-100 h-100 d-flex justify-content-center align-items-center mt-5">
        <div className="card shadow" style={{ width: '20rem' }}>
          <div className="card-body">
            <h1 className="fs-4 text-center text-warning">Welcome</h1>
            <p className="text-regis text-muted text-center">
              Log in into your exiting account
            </p>
            <div className="form-login">
              <form onSubmit={(e) => postData(e)}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="form-control shadow"
                    placeholder="enter e-mail address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control shadow"
                    name="password"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    placeholder="password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="exampleCheck1"
                  >
                    I agree to terms & condition
                  </label>
                </div>
                <div className="submit w-100 text-center">
                  <button
                    type="submit"
                    className="btn btn-warning w-100 shadow"
                  >
                    {/* <Link to={'/'} className="text-decoration-none">
                      Login
                    </Link> */}
                    Login
                  </button>
                </div>
                <div className="already mt-5 text-center">
                  <p className="text-muted">
                    Dont have account?
                    <span>
                      <Link
                        to={'/register'}
                        className="text-decoration-none ms-1"
                      >
                        Sign Up
                      </Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
