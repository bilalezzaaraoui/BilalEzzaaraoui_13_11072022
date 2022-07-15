import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: undefined,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
      state.isAuth = true;
    },

    logout(state) {
      state.token = undefined;
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
