import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { ContactsWrap } from './Pages.Styled';

export const Contacts = () => {
  return (
    <ContactsWrap>
      <div>
        <ContactForm />
        <Filter />
      </div>
      <ContactList />
    </ContactsWrap>
  );
};
