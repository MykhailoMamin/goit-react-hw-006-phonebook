import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <input
      className={css.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={evt => dispatch(changeFilter(evt.target.value))}
    />
  );
};
