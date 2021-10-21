import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./users-operation";
const initialState = {
  user: { name: "", password: "" },
  token: null,
  isLoggedIn: false,
};

const setState = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const resetState = (state) => {
  state.user = { name: "", email: "" };
  state.token = null;
  state.isLoggedIn = false;
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      setState(state, action);
    },
    [logIn.fulfilled](state, action) {
      setState(state, action);
    },
    [logOut.fulfilled](state) {
      resetState(state);
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;

      state.isLoggedIn = true;
    },
  },
});

export default userSlice.reducer;
