import { configureStore, combineReducers } from '@reduxjs/toolkit';
import autoReducer from './autoReducer/autoSlice';
import favsReducer from './favsReducer/favsSlice';
import filterReducer from './filterReducer/filterSlice';
import { singleCarApi } from './autoReducer/singleAutoApi';
const rootReducer = combineReducers({
  [singleCarApi.reducerPath]: singleCarApi.reducer,
  autoReducer,
  favsReducer,
  filterReducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(singleCarApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
