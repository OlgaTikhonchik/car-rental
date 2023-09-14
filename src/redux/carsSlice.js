import { createSlice } from '@reduxjs/toolkit';
import { getAllCars, getCarById } from './operations';

const initialState = {
  items: [],
  shownItem: {},
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = 'true';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleFulfilledById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownItem = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCars.fulfilled, handleFulfilled)
      .addCase(getCarById.fulfilled, handleFulfilledById)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
