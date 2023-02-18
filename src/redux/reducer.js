import { nanoid } from 'nanoid';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const contactsinitialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = createReducer(contactsinitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
    // return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    // return state.filter(contact => contact.id !== action.payload);
    const index = state.findIndex(contact => contact.id !== action.payload);
    state.splice(index, 1);
  },
});

const filterInitialState = '';
export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => (state = action.payload),
});
// export const contactsReducer = (state = contactsinitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];

//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case setFilter.type:
//       return action.payload;

//     default:
//       return state;
//   }
// };
