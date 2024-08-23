import axios from 'axios';
import { ADD_HOME, UPDATE_HOME, VIEW_HOMES, VIEW_INDI_HOME, DELETE_HOME } from '../constants/homeConstants';
// import serverUrl from '../constants/utils';
const serverUrl = "http://localhost:5000";
// Get all homes
export const viewHomes = () => async dispatch => {
  try {
    const res = await axios.get(`${serverUrl}/api/homes/`);
    dispatch({
      type: VIEW_HOMES,
      payload: res.data.homes
    });
  } catch (err) {
    console.log(err);
  }
};

// Get home by ID
export const viewHomeById = userId => async dispatch => {
  console.log("hhh", userId);
  try {
    const res = await axios.get(`${serverUrl}/api/homes/${userId}`);

    dispatch({
      type: VIEW_INDI_HOME,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Add home
export const addHome = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post(`${serverUrl}/api/homes`, formData, config);

    dispatch({
      type: ADD_HOME,
      payload: res.data
    });

  } catch (err) {
    console.log(err);
  }
};

// Update home
export const updateHome = (homeData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.put(`${serverUrl}/api/homes/${homeData.id}`, homeData, config);

    dispatch({
      type: UPDATE_HOME,
      payload: res.data
    });

  } catch (err) {
    console.log(err);
  }
};

export const deleteHome = userId => async dispatch => {
  try {
    const res = await axios.delete(`${serverUrl}/api/homes/${userId}`);

    dispatch({
      type: DELETE_HOME,
      payload: userId
    });
  } catch (err) {
    console.log(err);
  }
};