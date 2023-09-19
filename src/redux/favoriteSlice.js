import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteArray: [],
  selectedFavorite: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavoriteList(state, action) {
      //state.favoriteArray = [...state.favoriteArray, action.payload];
      state.favoriteArray.push(action.payload);
      state.selectedFavorite.push(action.payload);
    },
    deleteToFavoriteList(state, action) {
      state.favoriteArray = state.favoriteArray.filter(
        item => item !== action.payload
      );
      state.selectedFavorite = state.selectedFavorite.filter(
        item => item !== action.payload
      );
    },

    updateSelectedFavorite(state, action) {
      state.selectedFavorite = [action.payload];
    },
  },
});
export const { addToFavoriteList, deleteToFavoriteList } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
