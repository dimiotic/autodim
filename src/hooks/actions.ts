import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { favsActions } from 'store/favsReducer/favsSlice';
import { filterActions } from 'store/filterReducer/filterSlice';

const actions = {
  ...favsActions,
  ...filterActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
