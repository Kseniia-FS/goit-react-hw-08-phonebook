import { createSelector } from "@reduxjs/toolkit";

export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getLoading = (state) => state.contacts.isLoading;

// export const getFilteredContacts = (state) => {
//   const contacts = getItems(state);
//   const filter = getFilter(state);
//   const normalizedContacts = filter.toLowerCase();

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedContacts)
//   );
//   return filteredContacts;
// };

export const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedContacts = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
    return filteredContacts;
  }
);

export const getContactById = (id, items) => {
  const contact = items.find((item) => item.id === id);
  return contact;
};
