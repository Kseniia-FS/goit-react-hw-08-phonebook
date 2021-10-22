import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { postContatc, getItems } from "../../redux/contacts";

import { Form } from "../../_share/Form/Form";

export const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const onInputHandler = (e) => {
    const key = e.target.name;

    switch (key) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "number":
        setNumber(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sameContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (sameContact) {
      alert(`${name} is already in contacts`);
      clearSet();
      return;
    }

    dispatch(postContatc(name, number));

    clearSet();
  };

  const clearSet = () => {
    setName("");
    setNumber("");
  };
  const options = [
    {
      label: "Name",
      name: "name",
      key: 4,
      value: name,
      onChange: onInputHandler,
      pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    },
    {
      label: "Phone number",
      name: "number",
      key: 5,
      type: "tel",
      value: number,
      onChange: onInputHandler,
      pattern: "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",
    },
  ];

  return (
    <Form
      onSubmit={handleSubmit}
      options={options}
      btnName="Add contact"
    ></Form>
  );
};
