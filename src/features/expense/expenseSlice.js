const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  cost: 0,
};
const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {},
});
export default expenseSlice.reducer;
