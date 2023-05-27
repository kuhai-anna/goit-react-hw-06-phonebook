import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Contact,
  ContactItem,
  ContactName,
  DeleteButton,
} from './ContactListItem.styled';
import { deleteContact } from 'redux/contacts/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <Contact>
        <ContactName>{name}:</ContactName> {number}
      </Contact>
      <DeleteButton type="button" onClick={onDelete}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
