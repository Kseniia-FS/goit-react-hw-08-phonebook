import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { editContact } from "../../redux/contacts/contacts-operations";

import * as contactsActions from "./contacts-actions";

const initialContacts = [];

const items = createReducer(initialContacts, {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.postContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.postContactRequest]: () => true,
  [contactsActions.postContactSuccess]: () => false,
  [contactsActions.postContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

export const contactsReducer = combineReducers({
  items,
  filter,
  isLoading,
});
