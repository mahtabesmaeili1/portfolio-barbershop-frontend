import React from "react";
import "./App.css";

import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import { Homepage, Login, SignUp, Appointments } from "./pages";
import { MakeAppointment } from "./pages/MakeAppointment";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <MessageBox /> <Navigation />
      <Routes>
        <Route path="/appointment" element={<Appointments />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/makeappointment" element={<MakeAppointment />} />
      </Routes>
    </div>
  );
}

export default App;
