import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  onFilter: false,
  brand: '',
  price: '',
  mileageFrom: '',
  mileageTo: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, { payload }) {
      state.brand = payload.brand;
      state.price = payload.price;
      state.mileageFrom = payload.mileageFrom;
      state.mileageTo = payload.mileageTo;
      state.onFilter = true;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
