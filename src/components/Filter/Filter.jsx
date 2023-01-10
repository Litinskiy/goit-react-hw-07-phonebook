import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/contactsSlice'; 
import { Label, Input, Wrap } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Label>
        Filter by Name
        <Input
          type="text"
          name="filter"
          onChange={e => dispatch(setFilter(e.target.value))}
          placeholder="Start enter the contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    </Wrap>
  );
}
