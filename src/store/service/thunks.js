import axios from "axios";
import { services, appointments, cancell } from "./slice";
import { appDoneLoading, appLoading } from "../appState/slice";

import { showMessageWithTimeout } from "../appState/thunks";
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

//thunk to get all the appointment from db
export const getAllAppointments = () => async (dispatch, getState) => {
  const { token } = getState().user;

  try {
    const response = await axios.get(`${apiUrl}/shop/appointments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("get all the appointments from thunk: ", response.data);
    dispatch(appointments(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

//thunks to toggle paid for employee
export const togglePayment = (paid, id) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    try {
      console.log(id, paid, token, "this is the id");
      const response = await axios.put(
        `${apiUrl}/shop/appointments/${id}`,
        {
          paid: paid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      dispatch(getAllAppointments());
    } catch (e) {
      console.log(e.message);
    }
  };
};

//thunks to toggle done for employee
export const toggleFinish = (done, id, token) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    try {
      console.log(id, done, token, "this is the id");
      const response = await axios.put(
        `${apiUrl}/shop/appointments/${id}`,
        {
          done: done,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      dispatch(getAllAppointments());
    } catch (e) {
      console.log(e.message);
    }
  };
};

//thunk to add a new reservation

export const makeAnAppointment = (date, time, serviceId) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(appLoading());

    try {
      const response = await axios.post(
        `${apiUrl}/shop/makeappointment`,
        {
          date,
          time,
          serviceId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("make appointment repsonse", response);

      // dispatch(makeAppointment(response.data.newAppointment));
      dispatch(showMessageWithTimeout("success", false, "New appointment!"));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};

//thunk to cancell an appointment as it owner

export const deleteAppointment = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const { token } = getState().user;

    try {
      const response = await axios.delete(`${apiUrl}/shop/cancelation/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("appointment deleted?", response.data);

      dispatch(cancell(id));

      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e.message);
    }
  };
};
