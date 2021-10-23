import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";
import { register, logIn } from "../../redux/users/users-operation";
import { Form } from "../../_share/Form/Form";
import {
  signUpFormOptions,
  signInFormOptions,
} from "../../options/AuthFormOptions";

export default function AuthForm() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const { params } = useRouteMatch();

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const { name, value } = e.target;

    params.authType === "register" &&
      setSignUpData((prev) => ({ ...prev, [name]: value }));
    params.authType === "login" &&
      setSignInData((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    params.authType === "register" && dispatch(register(signUpData));
    params.authType === "login" && dispatch(logIn(signInData));

    clearSet();
  };

  const clearSet = () => {
    params.authType === "register"
      ? setSignUpData({ name: "", email: "", password: "" })
      : setSignInData({
          email: "",
          password: "",
        });
  };

  return params.authType === "register" ? (
    <Form
      onSubmit={onHandleSubmit}
      onChange={onInputChange}
      btnName="Sign up"
      dataForm={signUpData}
      formOptions={signUpFormOptions}
    />
  ) : (
    <Form
      onSubmit={onHandleSubmit}
      onChange={onInputChange}
      btnName="Sign in"
      dataForm={signInData}
      formOptions={signInFormOptions}
    />
  );
}
