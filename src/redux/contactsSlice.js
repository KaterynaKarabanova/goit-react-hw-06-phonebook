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
      },
    },
  },
  deleteContact(state, action) {
    const index = state.items.findIndex(task => task.id === action.payload);
    state.items.splice(index, 1);
  },
});
// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const getContactsItems = state => state.contacts.items;
