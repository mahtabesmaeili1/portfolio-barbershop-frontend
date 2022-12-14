import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./service/slice";
import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    services: serviceReducer,
  },
});
