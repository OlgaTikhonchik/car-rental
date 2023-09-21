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
      state.onFilter = payload.onFilter;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

//  const selectOnFilter = state => state.filter.onFilter;
//  const selectBrand = state => state.filter.brand;
//  const selectPrice = state => state.filter.price;
// const selectMileageFrom = state => state.filter.mileageFrom;
// const selectMileageTo = state => state.filter.mileageTo;
