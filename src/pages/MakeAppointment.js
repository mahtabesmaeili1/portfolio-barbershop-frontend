import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAppointments,
  getAllServices,
  makeAnAppointment,
} from "../store/service/thunks";
import { selectToken } from "../store/user/selectors";
import moment from "moment";
import { selectAppointments } from "../store/service/selectors";

export const MakeAppointment = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [serviceId, setServiceId] = useState("");

  const dispatch = useDispatch();
  const appointment = useSelector(selectAppointments);

  useEffect(() => {
    dispatch(getAllAppointments());
    dispatch(getAllServices());
  }, [dispatch]);

  const submitForm = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    dispatch(makeAnAppointment(date, time, serviceId));
    setDate("");
    setTime("");
    setServiceId("");
  };
  const sortedAppointments =
    appointment &&
    appointment
      .filter((f) => f.date >= moment(new Date()).format("YYYY-MM-DD"))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

  console.log("appointment", appointment);
  console.log("sorted", sortedAppointments);
  const token = useSelector(selectToken);
  return (
    <div>
      <p>make appointment:</p>
      {token ? (
        <form onSubmit={submitForm}>
          <input type={"date"} onChange={(e) => setDate(e.target.value)} />
          <input type={"time"} onChange={(e) => setTime(e.target.value)} />
          <input
            placeholder="serviceId"
            value={serviceId}
            type={"option"}
            onChange={(e) => setServiceId(e.target.value)}
          />

          <p>1 - Men Haircut </p>
          <p>2 - Men Beard </p>
          <p>3 - Men Haircut & Beard</p>
          <p> 4 - Haircut&HairWash&Styling</p>

          <button
            onClick={() => {
              submitForm();
            }}
            type="submit"
          >
            make appointment
          </button>
        </form>
      ) : (
        " Please login"
      )}
      <h3>all appointments</h3>
      {!sortedAppointments
        ? "Loading... "
        : sortedAppointments.map((a) => {
            return (
              <div key={a.id}>
                <p> done: {a.done ? "yes its done" : "not yet"}</p>
                <p> date: {a.date}</p>
                <p> time: {a.time}</p>
                <p> {a.service.duration}</p>
              </div>
            );
          })}
    </div>
  );
};
