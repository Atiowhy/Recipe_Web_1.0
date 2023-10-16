import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
let url = import.meta.env.VITE_BASE_URL;
let headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
};
export const getMenuDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_MENU_DETAIL_PENDING' });
    const result = await axios.get(url + `/recipe/${id}`, { headers });
    console.log(result);
    dispatch({ payload: result.data.data, type: 'GET_MENU_DETAIL_SUCCES' });
  } catch (error) {
    dispatch({ payload: error.message, type: 'GET_MENU_DETAIL_FAILED' });
  }
};

export const getMenu = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_MENU_PENDING' });
    const result = await axios.get(url + '/recipe', { headers });
    dispatch({ payload: result.data.data, type: 'GET_MENU_SUCCESS' });
  } catch (error) {
    console.log('error');
    dispatch({ payload: error.message, type: 'GET_MENU_FAILED' });
    // console.log(err);
  }
};

export const postMenu = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: 'POST_MENU_PENDING' });
    const result = await axios.post(url + `/recipe`, data, { headers });

    dispatch({ payload: result.data.data, type: 'POST_MENU SUCCESS' });
    toast.success('Add Recipe Success!');
    setTimeout(() => {
      navigate('/');
    }, 2000);
    navigate('/');
  } catch (error) {
    console.log(error);
    dispatch({ payload: error.response, type: 'POST_MENU_FAILED' });
  }
};

export const deleteMenu = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_MENU_PENDING' });
    const result = await axios.delete(url + `/recipe/${id}`, { headers });
    console.log(result);
    navigate('/');
    dispatch({ payload: result.data.data, type: 'DELETE_MENU_SUCCESS' });
  } catch (err) {
    console.log('error');
    dispatch({
      payload: err.response.data.message,
      type: 'DELETE_MENU_FAILED',
    });
    console.log(err);
  }
};

export const updateMenu = (data, id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_MENU_PENDING' });
    const result = await axios.put(url + `/recipe/${id}`, data, { headers });
    console.log(result);
    dispatch({ payload: result.data.data, type: 'UPDATE_MENU_SUCCESS' });
    toast.success('Update Success');
    setTimeout(() => {
      navigate('/profile');
    }, 2000);
  } catch (error) {
    console.log('error');
    dispatch({ payload: error.message, type: 'UPDATE_MENU_FAILED' });
    console.log(error);
  }
};

export const getMenuUsers = (users_id) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_MENU_USERS_PENDING' });
    const result = await axios.get(url + `/data/${users_id}`, { headers });
    console.log(result);
    dispatch({ payload: result.data.data, type: 'GET_MENU_USERS_SUCCESS' });
  } catch (error) {
    console.log('error');
    dispatch({ payload: error.message, type: 'GET_MENU_USERS_FAILED' });
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
