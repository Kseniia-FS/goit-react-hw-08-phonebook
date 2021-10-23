import { useSelector } from "react-redux";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { isLoggedIn } from "../../redux/users/users-selectors";
import { Nav, Link } from "./NavBar.styled";

export default function NavBar() {
  const isLoggedInNow = useSelector(isLoggedIn);
  return (
    <Nav>
      <Link to="/" exact>
        Home
      </Link>
      {isLoggedInNow && (
        <Link to="/contacts" exact>
          Contacts
        </Link>
      )}
      {!isLoggedInNow && (
        <>
          <Link to="/auth/register" exact>
            Sign Up
          </Link>
          <Link to="/auth/login" exact>
            Log In
          </Link>
        </>
      )}

      {isLoggedInNow && <UserMenu />}
    </Nav>
  );
}
