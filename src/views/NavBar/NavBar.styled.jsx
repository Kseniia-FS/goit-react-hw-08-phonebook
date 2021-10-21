import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  height: 60px;
  background-color: #c4c0c0;
  color: #020000;
  margin-bottom: 20px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  margin-right: 20px;
  font-size: 24px;

  &:hover {
    color: #e404a1;
  }
  &.active {
    color: #9c27b0;
    font-weight: bold;
    border-bottom: 1px solid #9c27b0;
  }
`;
