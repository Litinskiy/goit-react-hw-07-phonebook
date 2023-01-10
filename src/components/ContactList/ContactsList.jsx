import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/operations'; 
import { getContactsState } from 'components/redux/selectors';
import { Btn, ContactItem } from './ContactsList.styled';

export function ContactsList() {
  const {
    contacts: { items, isLoading, error },
    filter: filterValue,
  } = useSelector(getContactsState);
  const dispatch = useDispatch();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      {error && <div style={{ color: 'red', fontSize: '20px' }}>{error}</div>}
      <ul>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <ContactItem key={id}>
              {name}: {phone}
              <Btn
                type="button"
                disabled={isLoading}
                onClick={() => dispatch(deleteContact(id))}
              >
                {isLoading ? 'wait please' : 'Delete'}
              </Btn>
            </ContactItem>
          );
        })}
        {isLoading && <p>Updating...</p>}
      </ul>
    </>
  );
}
