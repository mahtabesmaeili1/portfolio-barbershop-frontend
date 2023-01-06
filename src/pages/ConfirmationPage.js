import "./confirm.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllAppointments } from "../store/service/thunks";

import { selectAppointments } from "../store/service/selectors";

import { HashLink as Liink } from "react-router-hash-link";

export const ConfirmationPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);

  const appointment = useSelector(selectAppointments);
  useEffect(() => {
    console.log(appointment);
  }, [appointment]);
  return (
    <div className="wholeConfirmation">
      <h1 className="confirmationH">Your Appointment is confirmed</h1>
      {/* <p className="paraConfirmation">Show time and service</p> */}
      <p className="paraConfirmation">
        You should receive a confirmation email in the next few secnonds. If
        not, please contact us
      </p>
      {/* <Link to={`/makeappointment`}>
        <button className="confirmationB">Make another appointment</button>
      </Link> */}
      <Liink to="/#contact">
        <button className="confirmationB">Contact</button>
      </Liink>
      <div className="lightC x1"></div>
      <div className="lightC x2"></div>
      <div className="lightC x3"></div>
      <div className="lightC x4"></div>
      <div className="lightC x5"></div>
      <div className="lightC x6"></div>
      <div className="lightC x7"></div>
      <div className="lightC x8"></div>
      <div className="lightC x9"></div>
    </div>
  );
};
