import { useState } from "react";
import { contactsFormOptions } from "../../options/AuthFormOptions";
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

  return (
    <Form
      onSubmit={handleSubmit}
      formOptions={contactsFormOptions}
      btnName="Add contact"
      onChange={onInputHandler}
      dataForm={{ name, number }}
    ></Form>
  );
};
