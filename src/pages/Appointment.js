import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllAppointments,
  togglePayment,
  toggleFinish,
} from "../store/service/thunks";
import { deleteAppointment } from "../store/service/thunks";
import { selectAppointments } from "../store/service/selectors";

export const Appointments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);

  const appointment = useSelector(selectAppointments);
  useEffect(() => {
    console.log(appointment);
  }, [appointment]);
  const onDelete = (id) => {
    // console.log("deleting art!", id);
    dispatch(deleteAppointment(id));
  };
  const togglePay = (id, paid) => {
    dispatch(togglePayment(!paid, id));
  };
  const toggleDone = (id, done) => {
    dispatch(toggleFinish(!done, id));
  };
  return (
    <div>
      <h3>all appointments</h3>
      {!appointment
        ? "Loading... "
        : appointment.map((a) => {
            return (
              <div key={a.id}>
                <p> date: {a.date}</p>
                <p> time: {a.time}</p>

                <p> full name : {a.user.fullName}</p>
                <p> email : {a.user.email}</p>
                <p> service : {a.service.name}</p>
                <p> price : {a.service.price}</p>
                <p> duration : {a.service.duration}</p>
                <button
                  onClick={() => {
                    onDelete(a.id);
                  }}
                >
                  cancell
                </button>
                <button
                  onClick={() => {
                    toggleDone(a.id, a.done);
                  }}
                >
                  <h5>{a.done ? "done" : "treatment is uncomplite"}</h5>
                </button>

                <button
                  onClick={() => {
                    togglePay(a.id, a.paid);
                  }}
                >
                  {a.paid ? "paid" : "unpaid"}
                </button>
              </div>
            );
          })}
    </div>
  );
};
