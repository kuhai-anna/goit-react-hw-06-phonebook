import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';

const getVisibleContacts = (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
