import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { isLoggedIn } from "../redux/users/users-selectors";

export default function PrivatRoute({ children, redirect, ...routeProps }) {
  const isLoggedInNow = useSelector(isLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedInNow ? children : <Redirect to={redirect} />}
    </Route>
  );
}
