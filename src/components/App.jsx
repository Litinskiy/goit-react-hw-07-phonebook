import { AddContactForm } from './AddContactForm/AddContactForm'; 
import { ContactsList } from './ContactList/ContactsList'; 
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter'; 

export function App() {

  return (
    <div className="wrapper">
      <Section title={'Phone Book'}>
        <AddContactForm></AddContactForm>
      </Section>
      <Section title={'Contacts:'}>
        <Filter></Filter>
        <ContactsList></ContactsList>
      </Section>
    </div>
  );
}
