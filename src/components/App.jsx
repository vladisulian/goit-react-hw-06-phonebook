import React from 'react';
import { ContactsList } from './Contacts/ContactsList';
import { FilterBar } from './Filter/Filter';
import { Form } from './Form/Form';

export const App = () => {


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

  return (
    <div className="Phonebook-container">
      <h1 className="Phonebook__title">Phonebook</h1>

      {/* <Form onSubmit={formAddContact} /> */}
      <Form />

      <FilterBar  />

      <ContactsList />
      {/* <ContactsList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      /> */}
    </div>
  );
};
