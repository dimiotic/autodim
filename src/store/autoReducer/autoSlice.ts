import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  Dispatch,
} from '@reduxjs/toolkit';
import { ICar } from '../../models/ICar';
import axios from 'axios';

interface CarState {
  cars: ICar[];
  isLoading: boolean;
  error: string;
}

const initialState: CarState = {
  cars: [],
  isLoading: false,
  error: '',
};

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get('http://localhost:5000/cars');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const autoSlice = createSlice({
  name: 'auto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCars.fulfilled.type,
        (state, action: PayloadAction<ICar[]>) => {
          state.isLoading = false;
          state.error = '';
          state.cars = action.payload;
        }
      )
      .addCase(fetchCars.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCars.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default autoSlice.reducer;
