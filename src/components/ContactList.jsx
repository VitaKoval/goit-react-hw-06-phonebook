import { useSelector, useDispatch } from 'react-redux';
import { del } from '../redux/contactsSlice';
import { List, Item, ButtonDelete, ContactName } from './ui/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterKey = useSelector(state => state.contacts.filterKey);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    const normalizedFilter = filterKey?.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsList = filteredContacts();

  return (
    <List>
      {contactsList.map(({ id, name, number }) => (
        <Item key={id} id={id}>
          <ContactName>{name}:</ContactName>
          {number}
          <ButtonDelete type="buton" onClick={() => dispatch(del(id))}>
            Delete
          </ButtonDelete>
        </Item>
      ))}
    </List>
  );
};
