import propTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <ul>
    {contacts.map((contact, id) => (
      <li key={id} className={css.contactListItem}>
        {contact.name}: {contact.number}          
        <button
          type="button"
          className={css.contactDeleteBtn}
          onClick={() => handleDelete(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
    
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};