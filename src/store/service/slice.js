import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  service: null,
  appointment: null,
};
export const serviceSlice = createSlice({
  name: "serviceSlice",
  initialState,
  reducers: {
    services: (state, action) => {
      state.service = action.payload;
    },
    appointments: (state, action) => {
      state.appointment = action.payload;
    },
    makeAppointment: (state, action) => {
      state.appointment = [...state.appointment, action.payload];
    },
    cancell: (state, action) => {
      const appointmentId = action.payload;
      state.appointment = state.appointment.filter(
        (a) => a.id !== appointmentId
      );
    },
  },
});
export const {
  services,
  cancell,
  appointments,
  toggleDone,
  makeAppointment,
  togglePaid,
} = serviceSlice.actions;

export default serviceSlice.reducer;
