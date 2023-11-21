import axios from 'axios';
import Swal from 'sweetalert2';

const Login = (form, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: 'AUTH_LOGIN_PENDING',
    });
    Swal.fire({
      title: 'Loading...',
      allowOutsideClick: false, // Mencegah interaksi selama loading
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const result = await axios.post(
      `https://raspberry-binturong-kit.cyclic.app/auth/login`,
      form
    );
    localStorage.setItem('token', result.data.data.token);
    localStorage.setItem('name', result.data.data.name);
    localStorage.setItem('email', result.data.data.email);
    localStorage.setItem('photo', result.data.data.photo);
    localStorage.setItem('id', result.data.data.id);
    Swal.close();

    dispatch({
      type: 'AUTH_LOGIN_SUCCESS',
      payload: result.data,
    });
    Swal.fire({
      icon: 'success',
      title: 'Login Success!',
      timer: 2000,
      showConfirmButton: true,
    });
    setTimeout(() => {
      navigate('/landing');
    }, [2000]);
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'AUTH_LOGIN_FAILED',
      payload: error.message,
    });
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response?.data?.message,
    });
  }
};

// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = (form, navigate) => async (dispatch) => {
//   try {
//     dispatch({
//       type: 'AUTH_LOGIN_PENDING',
//     });
//     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}`, form);
//     console.log(response);

//     //jika api nya berhasil maka set localstorage
//     localStorage.setItem('token', response.data.data.token),
//       localStorage.setItem('nama', response.data.data.nama);
//     localStorage.setItem('photo', response.data.data.photo);
//     localStorage.setItem('email', response.data.data.email);

//     dispatch({
//       type: 'AUTH_LOGIN_SUCCESS',
//       payload: response.data.data,
//     });
//     toast.success('Login Successfully!');
//     setTimeout(() => {
//       navigate('/');
//     }, [2000]);

//     //jika api nya gagal maka handle errornya
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: 'AUTH_LOGIN_FAILED',
//       payload: error.message,
//     });
//     toast.error('Ooops... Something Wrong');
//   }
// };

export default Login;
