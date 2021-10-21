import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputComponent } from "../../_share/Input/Input";
import { logIn } from "../../redux/users/users-operation";
import { SubButton } from "../../_share/Buttons/SubmitButton";
import { FormWrap } from "./SignInForm.styled";
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

  return (
    <FormWrap onSubmit={onHandleSubmit}>
      <InputComponent
        lable="Email"
        type="email"
        name="email"
        value={email}
        onChange={onInputChange}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
      <InputComponent
        lable="Password"
        type="password"
        name="password"
        value={password}
        onChange={onInputChange}
        autoComplete="current-password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}"
      />

      <SubButton name="Log in" />
    </FormWrap>
  );
}
