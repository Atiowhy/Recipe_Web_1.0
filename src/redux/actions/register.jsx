import axios from 'axios';
import { toast } from 'react-toastify';

const register = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_REGISTER_PENDING' });
    const result = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/register`,
      data
    );
    console.log(result);

    dispatch({ payload: result.data.data, type: 'AUTH_REGISTER_SUCCESS' });
    toast.success('Register Success!');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  } catch (error) {
    console.log(error);

    dispatch({
      payload: error.message,
      type: 'AUTH_REGISTER_FAILED',
    });
    toast.error(error.message);
  }
};

export default register;

//belajar
// import axios from 'axios';
// import { toast } from 'react-toastify';

// export const Register = (data, navigate) => async (dispacth) => {
//   try {
//     dispacth({
//       type: 'AUTH_REGISTER_PENDING',
//     });
//     const response = await axios.post(
//       `${import.meta.env.VITE_BASE_URL}/auth/register`,
//       data
//     );

//     //jika api nya berhasil maka tampilkan outputnya
//     console.log(response);
//     dispacth({
//       type: 'AUTH_REGISTER_SUCCESS',
//       payload: response.data.data,
//     });
//     toast.success('Register Success!');
//     setTimeout(() => {
//       navigate('/login');
//     });

//     //jika api nya gagal maka handle
//   } catch (error) {
//     console.log(error);
//     dispacth({
//       type: 'AUTH_REGISTER_FAILED',
//       payload: error.message,
//     });
//     toast.error(error.message);
//   }
// };


