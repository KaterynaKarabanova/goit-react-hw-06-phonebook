import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter(state, action) {
      state.value = action.payload;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const getFilterValue = state => state.filter.value.value;
