import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAppointments,
  getAllServices,
  makeAnAppointment,
  getTakenTimeSlots,
} from "../store/service/thunks";
import { selectToken } from "../store/user/selectors";

import "./form.css";
export const MakeAppointment = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [takenTimeSlots, setTakenTimeSlots] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (date) {
      getTakenTimeSlots(date).then((timeSlots) => {
        setTakenTimeSlots(timeSlots);
      });
    }
  }, [date]);
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

  const token = useSelector(selectToken);
  const timeSlots = [];
  for (let i = 10; i < 19; i++) {
    timeSlots.push(`${i}:00`);
    timeSlots.push(`${i}:15`);
    timeSlots.push(`${i}:30`);
    timeSlots.push(`${i}:45`);
  }
  return (
    <div>
      <p className="header">Make appointment:</p>
      {token ? (
        <form onSubmit={submitForm}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            min={new Date().toISOString().split("T")[0]}
          />
          <br />
          <label htmlFor="time">Time:</label>

          <select
            id="time"
            name="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option
                key={slot}
                value={slot}
                disabled={takenTimeSlots.includes(slot)}
                className={takenTimeSlots.includes(slot) ? "disabled" : ""}
              >
                {slot}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="service">Service:</label>
          <select
            id="service"
            name="service"
            value={serviceId}
            onChange={(event) => setServiceId(event.target.value)}
          >
            <option value="">Select a service</option>
            <option value="1">Men Haircut</option>
            <option value="2">Men Beard</option>
            <option value="3">Men Haircut & Beard</option>
            <option value="4">Haircut&HairWash&Styling</option>
          </select>
          <br />
          <button type="submit">Make Appointment</button>
        </form>
      ) : (
        " Please login"
      )}
    </div>
  );
};
