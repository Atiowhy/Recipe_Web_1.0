import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LineWave } from 'react-loader-spinner';
import register from '../redux/actions/register';
import { Spinner } from 'react-bootstrap';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(register(data, navigate));
  };
  return (
    <div>
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
        {/* <form onSubmit={postRegis}> */}
        <div className="Register w-100 h-100 d-flex justify-content-center align-items-center mt-5">
          <div className="card shadow" style={{ width: '20rem' }}>
            <div className="card-body">
              <h1 className="fs-4 text-center text-warning">
                Let's Get Started!
              </h1>
              <p className="text-regis text-muted text-center">
                Create New Account To Access All Features
              </p>
              <div className="form-login">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Name
                    </label>
                    <input
                      name="nama"
                      type="text"
                      className="form-control shadow"
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control shadow"
                      name="email"
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      placeholder="enter e-mail address"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control shadow"
                      name="password"
                      onChange={(e) => setData({...data, password: e.target.value})}
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
                      I agree to terms &amp; condition
                    </label>
                  </div>
                  <div className="submit w-100 text-center">
                    <button
                      type="submit"
                      className="btn btn-warning w-100 shadow"
                    >
                     Register
                    </button>
                  </div>
                  <div className="already mt-5 text-center">
                    <p className="text-muted">
                      Already have account?
                      <span>
                        <Link
                          to={'/login'}
                          className="text-decoration-none ms-1"
                        >
                          Log In here
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
