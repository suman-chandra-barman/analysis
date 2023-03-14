import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from '../features/expense/expenseSlice';

const store = configureStore({
  reducer: {
    expense: expenseSlice,
  },
});

export default store;
