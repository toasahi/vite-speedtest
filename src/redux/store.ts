import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { TypedUseSelectorHook, useSelector as rawUseSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

type RootState = {
  counter: ReturnType<typeof store.getState>;
};

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
