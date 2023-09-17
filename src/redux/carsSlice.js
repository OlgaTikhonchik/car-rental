import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

const initialState = {
  items: [],

  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, ...action.payload];
  //state.items.push(...action.payload);
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    clearCarsData: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCars.fulfilled, handleFulfilled)

      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
export const { clearCarsData } = carsSlice.actions;
