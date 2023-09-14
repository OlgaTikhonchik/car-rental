import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6484aeb0ee799e321626ecf8.mockapi.io';

export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  'cars/getById',
  async (carId, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/${carId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);