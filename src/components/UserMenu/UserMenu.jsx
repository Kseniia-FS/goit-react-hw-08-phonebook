import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";
import Button from "../../_share/Buttons/IconButton";
import { logOut } from "../../redux/users/users-operation";
import { getUserName } from "../../redux/users/users-selectors";

export const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Hello, {name}</h2>
      <Button
        type="button"
        ariaLabel="Delete contact"
        onClick={() => dispatch(logOut())}
      >
        <LogoutIcon width="30" height="30" fill="black" />
      </Button>
    </>
  );
};
