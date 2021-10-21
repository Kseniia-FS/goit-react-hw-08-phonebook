import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router";
import { lazy, Suspense } from "react";
import { refreshUser } from "./redux/users/users-operation";
// import Section from "./views/Section/Section";
// import NavBar from "./views/NavBar/NavBar";
// import SignUpForm from "./views/SignUpForm/SignUpForm";
// import Home from "./views/Home/Home";
// import SignInForm from "./views/SignInForm/SignInForm";

import PrivatRoute from "./routes/PrivatRoute";
import PublicRoute from "./routes/PublicRout";

const Home = lazy(() =>
  import("./views/Home/Home" /* webpackChunkName: "home-page" */)
);
const Section = lazy(() =>
  import("./views/Section/Section" /* webpackChunkName: "contacts-page" */)
);
const NavBar = lazy(() =>
  import("./views/NavBar/NavBar" /* webpackChunkName: "nav-bar" */)
);
const SignUpForm = lazy(() =>
  import(
    "./views/SignUpForm/SignUpForm" /* webpackChunkName: "register-page" */
  )
);
const SignInForm = lazy(() =>
  import("./views/SignInForm/SignInForm" /* webpackChunkName: "login-page" */)
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Switch>
          <PublicRoute path="/register" redirect="/contacts" restricted>
            <SignUpForm />
          </PublicRoute>
          <PublicRoute path="/login" redirect="/contacts" restricted>
            <SignInForm />
          </PublicRoute>
          <PrivatRoute path="/contacts" redirect="/register">
            <Section title="Phonebook" />
          </PrivatRoute>
          <PublicRoute path="/">
            <Home />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
