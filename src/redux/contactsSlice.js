import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
        localStorage.setItem('Contacts', JSON.stringify(state.items));
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.items.findIndex(task => task.id === action.payload);
        state.items.splice(index, 1);
        localStorage.setItem('Contacts', JSON.stringify(state.items));
      },
    },
    loadContactsFromLocalStorage: {
      reducer(state, action) {
        const storedContacts = JSON.parse(localStorage.getItem('Contacts'));
        if (storedContacts) {
          state.items = storedContacts; // Update the state with the loaded contacts
        }
      },
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact, loadContactsFromLocalStorage } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const getContactsItems = state => state.contacts.items;
