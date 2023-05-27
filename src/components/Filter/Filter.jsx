import { useDispatch, useSelector } from 'react-redux';
import { FilterField, FilterLabel, FilterLabelText } from './Filter.styled';
import { getFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const onFilterContacts = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      <FilterLabelText>Find contacts by name</FilterLabelText>
      <FilterField
        type="text"
        placeholder="Enter a name"
        value={filterValue}
        onChange={onFilterContacts}
      />
    </FilterLabel>
  );
};
