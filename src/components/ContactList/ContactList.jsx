import React, { useEffect } from 'react';
import {
  ListStyled,
  ListItemStyled,
  ContactTextStyled,
  ContactListBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContactList,
} from '../../redux/contacts/contactListSlice';
import { selectFilter } from '../../redux/filter/filterSlice';
import Loader from 'components/Loader/Loader';
import { selectContactList, selectError, selectIsLoading } from 'redux/store';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContactList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContactList());
  }, [dispatch]);

  const filteredContacts = contactList?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {isLoading && <Loader />}
      {error && 'Sorry, something wrong, please try to reload page.'}
      {contactList.length > 0 && !isLoading && !error && (
        <div style={{ flexDirection: 'column', alignItems: 'center' }}>
          <ListStyled
            style={{
              height: '75vh',
              overflow: 'auto',
            }}
          >
            {filteredContacts.map(contact => {
              return (
                <ListItemStyled key={contact.id}>
                  <ContactTextStyled>
                    {contact.name}: {contact.number}
                  </ContactTextStyled>
                  <ContactListBtn
                    type="button"
                    onClick={() => dispatch(deleteContact(contact.id))}
                  >
                    Delete
                  </ContactListBtn>
                </ListItemStyled>
              );
            })}
            {filteredContacts.length === 0 &&
              'Sorry, there is no such contact...'}
          </ListStyled>
        </div>
      )}
    </>
  );
};

export default ContactList;
