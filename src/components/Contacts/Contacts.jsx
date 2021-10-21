import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import Button from "../../_share/Buttons/IconButton";
import { ContactList, Item, Title } from "./Contacts.styled";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import {
  fetchContacts,
  removeContact,
  getFilteredContacts,
  getLoading,
} from "../../redux/contacts/";

export function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getLoading);
  const onDeleteContacts = (id) => dispatch(removeContact(id));

  return (
    <ContactList>
      <Title>Contacts</Title>
      {isLoading && <div>Загружаю...</div>}
      {contacts.map(({ name, id, number }) => (
        <Item key={id} id={id}>
          <span>
            {name}: {number}
          </span>

          <Button
            color="secondary"
            type="button"
            ariaLabel="Delete contact"
            onClick={() => onDeleteContacts(id)}
          >
            <DeleteForeverOutlinedIcon />
          </Button>
        </Item>
      ))}
    </ContactList>
  );
}
