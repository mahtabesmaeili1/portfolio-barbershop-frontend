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
import "./employee.css";
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
      <h3 className="h1">All Appointments</h3>
      {!appointment
        ? "Loading... "
        : appointment.map((a) => {
            return (
              <div key={a.id} className="eachAppointment">
                {a.time}-{a.date}
                <p>
                  <span className="spans">DATE:</span> {a.date}
                </p>
                <p>
                  {" "}
                  <span className="spans">TIME:</span> {a.time}
                </p>
                <p>
                  {" "}
                  <span className="spans">FULL NAME:</span> {a.user.fullName}
                </p>
                <p>
                  {" "}
                  <span className="spans">EMAIL: </span> {a.user.email}
                </p>
                <p>
                  {" "}
                  <span className="spans">SERVICE:</span> {a.service.name}
                </p>
                <p>
                  <span className="spans">PRICE:</span> {a.service.price}
                </p>
                <p>
                  <span className="spans">DURATION:</span> {a.service.duration}
                </p>
                <button
                  className="employeeB"
                  onClick={() => {
                    onDelete(a.id);
                  }}
                >
                  Cancell
                </button>
                <button
                  className="employeeB"
                  onClick={() => {
                    toggleDone(a.id, a.done);
                  }}
                >
                  {a.done ? "Done" : "Uncomplite"}
                </button>
                <button
                  className="employeeB"
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
