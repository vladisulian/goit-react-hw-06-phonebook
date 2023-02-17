import { useState, useEffect } from 'react';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import React from 'react';
import { ContactsList } from './Contacts/ContactsList';
import { FilterBar } from './Filter/Filter';
import { Form } from './Form/Form';

export const App = () => {
  const contacts = useSelector(getContacts);

  // const [contacts, setContacts] = useState([
  //   { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  //   { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  //   { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleChangeFilter = e => setFilter(e.currentTarget.value);

  // const formAddContact = data => {
  //   const dataContact = [
  //     { id: nanoid(), name: data.name, number: data.number },
  //   ];

  //   const isExist = contacts.some(contact => {
  //     return (
  //       contact.name.toLowerCase() === data.name.toLowerCase() ||
  //       contact.number.toLowerCase() === data.number.toLowerCase()
  //     );
  //   });
  //   if (isExist) {
  //     alert(
  //       `Name '${dataContact[0].name}' or number '${dataContact[0].number}' is already in contacts!`
  //     );
  //     return;
  //   }

  //   setContacts([...contacts, ...dataContact]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="Phonebook-container">
      <h1 className="Phonebook__title">Phonebook</h1>

      {/* <Form onSubmit={formAddContact} /> */}
      <Form />

      <FilterBar handleChange={handleChangeFilter} />

      <ContactsList contacts={filteredContacts} />
      {/* <ContactsList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      /> */}
    </div>
  );
};
