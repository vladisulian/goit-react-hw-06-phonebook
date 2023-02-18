import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { contactsReducer, filterReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
