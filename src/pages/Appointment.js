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

  const now = new Date().getDate();
  console.log("now", now);
  return (
    <div>
      <h3 className="topText">All Appointments...</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>FullName</th>
            <th>Email</th>
            <th>Service</th>
            <th>Price</th>
            <th>Duration</th>
            <th>cancel?</th>
            <th>done?</th>
            <th>paid?</th>
          </tr>
        </thead>
        <tbody>
          {!appointment
            ? "Loading... "
            : appointment
                .filter((a) => new Date(a.date).getDate() >= now)
                .map((a) => {
                  return (
                    <tr key={a.id}>
                      <td>{a.date}</td>
                      <td>{a.time}</td>
                      <td>{a.user.fullName}</td>
                      <td>{a.user.email}</td>
                      <td>{a.service.name}</td>
                      <td>{a.service.price}</td>
                      <td>{a.service.duration}</td>
                      <td>
                        <button
                          className="employeeB"
                          onClick={() => {
                            onDelete(a.id);
                          }}
                        >
                          Cancell
                        </button>
                      </td>
                      <td>
                        <button
                          style={{
                            color: a.done ? "green" : "red",
                            backgroundColor: "white",
                            border: "none",
                            borderRadius: "2px",
                          }}
                          className="employeeB"
                          onClick={() => {
                            toggleDone(a.id, a.done);
                          }}
                        >
                          {a.done ? "✔" : "✘"}
                        </button>
                      </td>
                      <td>
                        <button
                          style={{
                            color: a.paid ? "green" : "red",
                            backgroundColor: "white",
                            border: "none",
                            borderRadius: "2px",
                          }}
                          className="employeeB"
                          onClick={() => {
                            togglePay(a.id, a.paid);
                          }}
                        >
                          {a.paid ? "✔" : "✘"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
        </tbody>
      </table>
    </div>
  );
};
