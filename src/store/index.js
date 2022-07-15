import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import UserReducer from "./user";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
  },
});

export default store;
