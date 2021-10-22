import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/users/users-operation";
import { Form } from "../../_share/Form/Form";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const key = e.target.name;

    switch (key) {
      case "name":
        console.log(e.currentTarget.value);
        setName(e.currentTarget.value);
        break;
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
  const options = [
    {
      label: "Name",
      name: "name",
      key: 1,
      value: name,
      onChange: onInputChange,
      pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    },
    {
      label: "Email",
      name: "email",
      key: 2,
      type: "email",
      value: email,
      onChange: onInputChange,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      type: "password",
      key: 3,
      label: "Password",
      name: "password",
      value: password,
      onChange: onInputChange,
      autocomplete: "current-password",
    },
  ];

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    clearSet();
  };

  const clearSet = () => {
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <Form onSubmit={onHandleSubmit} options={options} btnName="Sign up"></Form>
  );
}
