import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteArray: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavoriteList(state, action) {
      state.favoriteArray = [...state.favoriteArray, action.payload];
    },
    deleteToFavoriteList(state, action) {
      state.favoriteArray = state.favoriteArray.filter(
        car => car.id !== action.payload.id
      );
    },
  },
});
export const { addToFavoriteList, deleteToFavoriteList } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
