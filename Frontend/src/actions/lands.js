import axios from 'axios';
import { ADD_LAND, UPDATE_LAND, VIEW_LANDS, VIEW_INDI_LAND, DELETE_LAND } from '../constants/landConstants';
const serverUrl = "http://localhost:5000";

// Get all lands
export const viewLands = () => async dispatch => {
  try {
    const res = await axios.get(`${serverUrl}/api/lands/`);
    dispatch({
      type: VIEW_LANDS,
      payload: res.data.lands
    });
  } catch (err) {
    console.log(err);
  }
};

// Get land by ID
export const viewLandById = userId => async dispatch => {
  try {
    const res = await axios.get(`${serverUrl}/api/lands/${userId}`);

    dispatch({
      type: VIEW_INDI_LAND,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Add land
export const addLand = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post(`${serverUrl}/api/lands`, formData, config);

    dispatch({
      type: ADD_LAND,
      payload: res.data
    });

  } catch (err) {
    console.log(err);
  }
};

// Update land
export const updateLand = (landData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.put(`${serverUrl}/api/lands/${landData.id}`, landData, config);

    dispatch({
      type: UPDATE_LAND,
      payload: res.data
    });

  } catch (err) {
    console.log(err);
  }
};

export const deleteLand = userId => async dispatch => {
  try {
    const res = await axios.delete(`${serverUrl}/api/lands/${userId}`);

    dispatch({
      type: DELETE_LAND,
      payload: userId
    });
  } catch (err) {
    console.log(err);
  }
};