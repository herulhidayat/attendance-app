import { getItem, setItem } from '@app/helper/localstorage.helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clockIn: getItem('clockIn'),
  clockOut: getItem('clockOut')
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setClockIn: (state, { payload }) => {
      setItem('clockIn', payload);
      state.clockIn = payload;
    },
    setClockOut: (state, { payload }) => {
      setItem('clockOut', payload);
      state.clockOut = payload;
    }
  },
});

export const { setClockIn, setClockOut } = appSlice.actions;

export default appSlice.reducer;
