import { IconButton } from "./Button.styled.jsx";

import PropTypes from "prop-types";
const Button = ({ onClick, ariaLabel, type, children, color }) => {
  return (
    <IconButton
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      color={color}
      size="small"
    >
      {children}
    </IconButton>
  );
};

Button.propTypes = {
  onDeleteContacts: PropTypes.func,
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Button;
