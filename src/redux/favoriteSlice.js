import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addToFavoriteList(state, action) {
      return (state = [...state, action.payload]);
    },
    deleteToFavoriteList(state, action) {
      return (state = state.filter(car => car !== action.payload));
    },
  },
});
export const { addToFavoriteList, deleteToFavoriteList } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
