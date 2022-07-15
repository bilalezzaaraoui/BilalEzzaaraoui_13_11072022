import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: undefined,
  email: undefined,
  firstName: "Tony",
  lastName: "Jarvis",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    newUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
