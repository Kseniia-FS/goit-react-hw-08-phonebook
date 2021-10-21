import { createAction } from "@reduxjs/toolkit";

export const postContactSuccess = createAction("postContactSuccess");
export const postContactRequest = createAction("postContactRequest");
export const postContactError = createAction("postContactError");

export const deleteContactRequest = createAction("deleteContactRequest");
export const deleteContactSuccess = createAction("deleteContactSuccess");
export const deleteContactError = createAction("deleteContactError");

export const changeFilter = createAction("contacts/changeFilter");

export const fetchContactsRequest = createAction("fetchContactsRequest");
export const fetchContactsSuccess = createAction("fetchContactsSuccess");
export const fetchContactsError = createAction("fetchContactsError");

export const editContactRequest = createAction("editContactRequest");
export const editContactSuccess = createAction("editContactSuccess");
export const editContactError = createAction("editContactError");
