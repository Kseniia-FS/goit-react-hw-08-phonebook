import { createReducer } from "@reduxjs/toolkit";
import {
  deleteContactError,
  deleteContactRequest,
  fetchContactsError,
  fetchContactsRequest,
  postContactError,
  postContactRequest,
} from "../contacts/contacts-actions";
import { logIn, logOut, register, refreshUser } from "../users/users-operation";

const setError = (_, { payload }) => payload;
const resetError = () => null;

export const errorReducer = createReducer(null, {
  [register.rejected]: setError,
  [logIn.rejected]: setError,
  [logOut.rejected]: setError,
  [register.pending]: resetError,
  [logIn.pending]: resetError,
  [logOut.pending]: resetError,
  [refreshUser.rejected]: setError,
  [fetchContactsError]: setError,
  [fetchContactsRequest]: resetError,
  [postContactError]: setError,
  [postContactRequest]: resetError,
  [deleteContactError]: setError,
  [deleteContactRequest]: resetError,
});
