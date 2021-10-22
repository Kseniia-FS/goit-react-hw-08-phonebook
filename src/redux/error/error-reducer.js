import { createReducer } from "@reduxjs/toolkit";
import { logIn, logOut, register } from "../users/users-operation";

const setError = (_, { payload }) => payload;
const resetError = () => null;

export const errorReducer = createReducer(null, {
  [register.rejected]: setError,
  [logIn.rejected]: setError,
  [logOut.rejected]: setError,
  [register.pending]: resetError,
  [logIn.pending]: resetError,
  [logOut.pending]: resetError,
});
