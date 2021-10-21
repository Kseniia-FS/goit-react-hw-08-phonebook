import { useState } from "react";
import { InputComponent } from "../../_share/Input/Input";
import { FormWrap } from "./Form.styled";
import { useSelector, useDispatch } from "react-redux";
import { postContatc, getItems } from "../../redux/contacts/";
import { SubButton } from "../../_share/Buttons/SubmitButton";

export const Form = () => {
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
    <FormWrap onSubmit={handleSubmit}>
      <InputComponent
        lable="Name"
        name="name"
        value={name}
        onChange={onInputHandler}
        pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
      />
      <InputComponent
        lable="Phone number"
        type="tel"
        name="number"
        value={number}
        onChange={onInputHandler}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      />

      <SubButton name="Add contact" />
    </FormWrap>
  );
};
