import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactList } from 'redux/contacts/contactListSlice';
import { selectIsLoading } from 'redux/store';
import { ContactsWrap } from './Pages.Styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContactList());
  }, [dispatch]);
  return (
    <ContactsWrap>
      <div>
        <ContactForm />
        <Filter />
      </div>
      <div>{isLoading && <Loader />}</div>
      <ContactList />
    </ContactsWrap>
  );
};
export default Contacts;
