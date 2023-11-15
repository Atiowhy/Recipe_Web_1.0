import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
let url = import.meta.env.VITE_BASE_URL;
let headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
};

export const getMenuDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_MENU_DETAIL_PENDING',
    });
    Swal.fire({
      title: 'Loading...',
      allowOutsideClick: false, // Mencegah interaksi selama loading
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const result = await axios.get(url + `/recipe/${id}`, { headers });
    Swal.close();
    console.log(result);
    dispatch({
      type: 'GET_MENU_DETAIL_SUCCESS',
      payload: result.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_MENU_DETAIL_FAILED',
      payload: error.message,
    });
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
};

export const getMenu = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_MENU_PENDING' });
    Swal.fire({
      title: 'Loading...',
      allowOutsideClick: false, // Mencegah interaksi selama loading
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const result = await axios.get(url + '/recipe', { headers });
    Swal.close();
    dispatch({ payload: result.data.data, type: 'GET_MENU_SUCCESS' });
  } catch (error) {
    console.log('error');
    dispatch({ payload: error.message, type: 'GET_MENU_FAILED' });
    // console.log(err);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
};

export const postMenu = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: 'POST_MENU_PENDING' });
    Swal.fire({
      title: 'Loading...',
      allowOutsideClick: false, // Mencegah interaksi selama loading
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const result = await axios.post(url + `/recipe`, data, { headers });
    Swal.close();
    dispatch({ payload: result.data.data, type: 'POST_MENU SUCCESS' });
    Swal.fire({
      icon: 'success',
      title: 'Add Menu Success!',
      timer: 2000,
      showConfirmButton: true,
    });
    navigate('/profile');
  } catch (error) {
    console.log(error);
    dispatch({ payload: error.response, type: 'POST_MENU_FAILED' });
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
};

export const deleteMenu = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_MENU_PENDING' });
    Swal.fire({
      title: 'Loading...',
      allowOutsideClick: false, // Mencegah interaksi selama loading
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const result = await axios.delete(url + `/recipe/${id}`, { headers });
    console.log(result);
    Swal.close();
    dispatch({ payload: result.data.data, type: 'DELETE_MENU_SUCCESS' });
    Swal.fire({
      icon: 'success',
      title: 'Delete Menu Success!',
      timer: 2000,
      showConfirmButton: true,
    });
    navigate('/profile');
  } catch (err) {
    console.log('error');
    dispatch({
      payload: err.message,
      type: 'DELETE_MENU_FAILED',
    });

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
};

export const updateMenu = (data, id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_MENU_PENDING' });
    Swal.fire({
      title: 'Loading...',
      allowOutsideClick: false, // Mencegah interaksi selama loading
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const result = await axios.put(url + `/recipe/${id}`, data, { headers });
    console.log(result);
    Swal.close()
    dispatch({ payload: result.data.data, type: 'UPDATE_MENU_SUCCESS' });
    Swal.fire({
      icon: 'success',
      title: 'Update Menu Success!',
      timer: 2000,
      showConfirmButton: true,
    });
    navigate('/profile');
  } catch (error) {
    console.log('error');
    dispatch({ payload: error.message, type: 'UPDATE_MENU_FAILED' });
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
};

export const getMenuUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_MENU_USERS_PENDING',
    });
    const result = await axios.get(
      url + `/data/${localStorage.getItem('id')}`,
      { headers }
    );
    console.log(result);
    dispatch({
      type: 'GET_MENU_USERS_SUCCESS',
      payload: result.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_MENU_USERS_FAILED',
      payload: error.message,
    });
    console.log(error);
  }
};

export const searchMenu = (search, sort, page) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_MENU_SEARCH_PENDING' });
    const result = await axios.get(
      url +
        `/search?search=${search}&searchBy=title&limit=5&page=${page}&sortBy=${sort}`,
      { headers }
    );
    dispatch({ type: 'GET_MENU_SEARCH_SUCCESS', payload: result.data });
  } catch (error) {
    dispatch({
      type: 'GET_MENU_SEARCH_FAILED',
      pyload: error.message,
    });
  }
};
