import * as contactsActions from "./contacts-actions";

import {
  getAllContacts,
  addContact,
  deleteContact,
} from "../../services/contactsApi";

export const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const contacts = await getAllContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

export const postContatc = (name, number) => async (dispatch) => {
  dispatch(contactsActions.postContactRequest());
  try {
    const contact = await addContact(name, number);
    dispatch(contactsActions.postContactSuccess(contact));
  } catch (error) {
    dispatch(contactsActions.postContactError(error.message));
  }
};

export const removeContact = (id) => async (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());
  try {
    await deleteContact(id);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};
