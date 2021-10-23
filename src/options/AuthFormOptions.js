export const signInFormOptions = [
  {
    label: "Email",
    name: "email",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
  },
  {
    type: "password",
    label: "Password",
    name: "password",
    autocomplete: "current-password",
  },
];
export const signUpFormOptions = [
  {
    label: "Name",
    name: "name",
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
  },
  {
    type: "password",
    label: "Password",
    name: "password",
    autocomplete: "current-password",
  },
];

export const contactsFormOptions = [
  {
    label: "Name",
    name: "name",
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  },
  {
    label: "Phone number",
    name: "number",
    type: "tel",
    pattern: "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",
  },
];
