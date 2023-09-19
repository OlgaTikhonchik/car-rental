import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducer';
import { favoriteReducer, favoriteSlice } from './favoriteSlice';
import { carsReducer } from './carsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favoriteArray', 'selectedFavorite'],
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  reducer: {
    // cars: persistedReducer,

    // favorite: favoriteSlice.reducer,
    cars: carsReducer,
    filter: filterReducer,
    favorite: persistedReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
