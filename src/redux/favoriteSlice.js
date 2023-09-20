import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteArray: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavoriteList(state, action) {
      state.favoriteArray.push(action.payload);
    },
    deleteToFavoriteList(state, action) {
      state.favoriteArray = state.favoriteArray.filter(
        item => item !== action.payload
      );
    },
  },
});
export const { addToFavoriteList, deleteToFavoriteList } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
