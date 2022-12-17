export const selectServices = (reduxState) => reduxState.services.service;

export const selectAppointments = (reduxState) =>
  reduxState.services.appointment;
