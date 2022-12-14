import axios from "axios";
import { services } from "./slice";

const apiUrl = "http://localhost:4000";
//thunk to get all the services from db
export const getAllServices = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/shop`);
    console.log("get all the services from thunk: ", response.data);
    dispatch(services(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
