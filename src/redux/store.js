// import { initialState } from './reducers';

import { devToolsEnhancer } from '@redux-devtools/extension';

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';
const enhancer = devToolsEnhancer();
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
  enhancer,
});

export default store;
