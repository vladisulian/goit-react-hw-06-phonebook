import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactID => {
  return {
    type: 'contacts/deleteContact',
    payload: contactID,
  };
};

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value.toLowerCase(),
  };
};
