import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router";
import { lazy, Suspense } from "react";
import { refreshUser } from "./redux/users/users-operation";

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
const AuthForm = lazy(() =>
  import("./views/AuthForm/AuthForm" /* webpackChunkName: "authForm-page" */)
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
          <PublicRoute path="/auth/:authType" redirect="/contacts" restricted>
            <AuthForm />
          </PublicRoute>
          <PrivatRoute path="/contacts" redirect="/auth/register">
            <Section title="Phonebook" />
          </PrivatRoute>
          <PublicRoute path="/" exact>
            <Home />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
