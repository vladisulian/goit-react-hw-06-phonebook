import { nanoid } from 'nanoid';
import { createReducer, createSlice } from '@reduxjs/toolkit';
// import { addContact, deleteContact, setFilter } from './actions';
import { ContactsList } from 'components/Contacts/ContactsList';

const contactsinitialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactsinitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// const filterInitialState = '';
// export const filterReducer = createReducer(filterInitialState, {
//   [setFilter]: (state, action) => (state = action.payload),
// });

export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
