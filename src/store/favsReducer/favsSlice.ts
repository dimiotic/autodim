import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICar } from 'models/ICar';

interface FavsState {
  favs: string[];
}

const initialState: FavsState = {
  favs: JSON.parse(localStorage.getItem('favs') ?? '[]'),
};

export const favsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addFav(state, action: PayloadAction<string>) {
      state.favs.push(action.payload);
      localStorage.setItem('favs', JSON.stringify(state.favs));
    },
    removeFav(state, action: PayloadAction<string>) {
      state.favs = state.favs.filter((f) => f !== action.payload);
      localStorage.setItem('favs', JSON.stringify(state.favs));
    },
  },
});

export const favsActions = favsSlice.actions;
export default favsSlice.reducer;
