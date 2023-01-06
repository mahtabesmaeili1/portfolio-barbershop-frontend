import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllAppointments,
  getAllServices,
  makeAnAppointment,
} from "../store/service/thunks";
import { selectToken } from "../store/user/selectors";
import { selectAppointments } from "../store/service/selectors";
import { DateTime, Duration } from "luxon";
import "./form.css";
import { useNavigate } from "react-router-dom";
export const MakeAppointment = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [takenTimeSlots, setTakenTimeSlots] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allAppointments = useSelector(selectAppointments);

  useEffect(() => {
    if (allAppointments) {
      console.log(allAppointments);
    }
  }, [allAppointments]);

  useEffect(() => {
    if (allAppointments) {
      const timeSlotsTaken = allAppointments
        .filter((app) => app.date === date)
        .map((app) => {
          const results = [DateTime.fromISO(`${app.date}T${app.time}`)];
          const amountOfSlots = Math.round(app.service.duration / 15);
          for (let i = 0; i < amountOfSlots; i++) {
            const last = results[results.length - 1];
            results.push(last.plus(Duration.fromObject({ minutes: 15 })));
          }
          return results.map((dt) =>
            dt.toLocaleString(DateTime.TIME_24_SIMPLE)
          );
        });
      setTakenTimeSlots(timeSlotsTaken.flat());
    }
  }, [date, allAppointments]);

  useEffect(() => {
    dispatch(getAllAppointments());
    dispatch(getAllServices());
  }, [dispatch]);

  const submitForm = (e) => {
    e.preventDefault();
    if (!date || !time || !serviceId) {
      alert("Please fill out all the fields.");
      return;
    }
    dispatch(makeAnAppointment(date, time, serviceId));
    setDate("");
    setTime("");
    setServiceId("");
    navigate("/confirmation");
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
    <div className="page">
      <p className="headerA">Make an appointment</p>
      {token ? (
        <form onSubmit={submitForm} className="formAppointment">
          <label htmlFor="date" className="titles">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            min={new Date().toISOString().split("T")[0]}
          />

          <br />
          <label htmlFor="service" className="titles">
            Service:
          </label>
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
          <label htmlFor="time" className="titles">
            Time:
          </label>

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

          <button
            disabled={!date || !time || !serviceId}
            type="submit"
            className="b"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>Make Appointment
          </button>
          <p style={{ color: "red", letterSpacing: "2px", fontSize: "16px" }}>
            fill the form to enable the button!
          </p>
        </form>
      ) : (
        <div className="pleaseLogin"> Please Login </div>
      )}
    </div>
  );
};
