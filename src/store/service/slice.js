import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  service: null,
};
export const serviceSlice = createSlice({
  name: "serviceSlice",
  initialState,
  reducers: {
    services: (state, action) => {
      state.service = action.payload;
    },
  },
});
export const { services } = serviceSlice.actions;

export default serviceSlice.reducer;
