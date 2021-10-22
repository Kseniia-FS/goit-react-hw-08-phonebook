import { useState } from "react";
import { useDispatch } from "react-redux";

import { logIn } from "../../redux/users/users-operation";
import { SubButton } from "../../_share/Buttons/SubmitButton";

import { Form } from "../../_share/Form/Form";
export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const key = e.target.name;

    switch (key) {
      case "password":
        setPassword(e.currentTarget.value);
        break;
      case "email":
        setEmail(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    clearSet();
  };

  const clearSet = () => {
    setPassword("");
    setEmail("");
  };
  const options = [
    {
      label: "Email",
      name: "email",
      key: 6,
      type: "email",
      value: email,
      onChange: onInputChange,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      type: "password",
      key: 7,
      label: "Password",
      name: "password",
      value: password,
      onChange: onInputChange,
      autocomplete: "current-password",
    },
  ];

  return (
    <Form onSubmit={onHandleSubmit} options={options} btnName="Log in"></Form>
  );
}
