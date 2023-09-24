import { ContactForm } from './ContactsForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList/ContactList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getFilterValue, setStatusFilter } from '../redux/filterSlice';
import {
  addContact,
  deleteContact,
  getContactsItems,
} from '../redux/contactsSlice';
import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
export const App = () => {
  const contacts = useSelector(getContactsItems);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (JSON.parse(window.localStorage.getItem('Contacts'))?.length) {
  //     const contactsLS = JSON.parse(window.localStorage.getItem('Contacts'));
  //     dispatch(setfromLS(contactsLS));
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('Contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    if (contacts.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number, id: `${Date.now()}` }));
  };
  const onChange = value => {
    dispatch(setStatusFilter({ value }));
  };
  const onSearch = () => {
    console.log(filter);
    if (filter) {
      return contacts.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };
  const onDelete = id => {
    dispatch(deleteContact({ id }));
  };

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={onFormSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={onChange} />
      <ContactList contacts={onSearch()} onDelete={onDelete} />
    </div>
  );
};
