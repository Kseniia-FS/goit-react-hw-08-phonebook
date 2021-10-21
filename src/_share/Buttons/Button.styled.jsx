import styled from "@emotion/styled";
import Fab from "@mui/material/Fab";
export const IconButton = styled(Fab)`
  margin-left: 20px;
  text-align: center;
  padding: 5px;
  border: none;

  cursor: pointer;
  width: 40px;
  height: 40px;
`;

export const SubmitButton = styled.button`
  padding: 5px;
  background-color: #bd86c7;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 1px 3px #bd86c7;
  font-size: 16px;

  &:hover {
    background-color: #9606af;
    box-shadow: 0 0 1px 3px #9606af;
  }
`;
