import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6484aeb0ee799e321626ecf8.mockapi.io';

export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=8`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const getAllCarsWithoutPage = createAsyncThunk(
//   'cars/getAllCars',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('/adverts');
//       return data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );
