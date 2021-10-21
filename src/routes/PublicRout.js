import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { isLoggedIn } from "../redux/users/users-selectors";

export default function PublicRoute({
  children,
  redirect,
  exact = false,
  restricted = false,
  ...routeProps
}) {
  const isLoggInNow = useSelector(isLoggedIn);
  const shoulRedirect = isLoggInNow && restricted;
  return (
    <Route {...routeProps}>
      {shoulRedirect ? <Redirect to={redirect} /> : children}
    </Route>
  );
}
