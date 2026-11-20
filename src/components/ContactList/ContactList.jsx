import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <ul className={css.list}>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(item => (
          <li className={css.item} key={item.id}>
            {item.name}: {item.number}
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
