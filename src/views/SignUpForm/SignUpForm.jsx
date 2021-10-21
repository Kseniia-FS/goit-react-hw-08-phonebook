import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/users/users-operation";
import { FormWrap } from "./SignUpForm.styled";
import { InputComponent } from "../../_share/Input/Input";
import { SubButton } from "../../_share/Buttons/SubmitButton";
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
    <FormWrap onSubmit={onHandleSubmit}>
      <InputComponent
        lable="Name"
        name="name"
        value={name}
        onChange={onInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
      <InputComponent
        lable="Email"
        name="email"
        type="email"
        value={email}
        onChange={onInputChange}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
      />
      <InputComponent
        type="password"
        lable="Password"
        name="password"
        value={password}
        onChange={onInputChange}
        autocomplete="current-password"
      />
      <SubButton name="Sign up" />
    </FormWrap>
  );
}
