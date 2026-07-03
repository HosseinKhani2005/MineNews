import {  createSlice } from "@reduxjs/toolkit";

const themeslice = createSlice({
  name: "darkmode",
  initialState: {
    darkmode: false,
    loading: false,
    error: null,
  },
  reducers: {
    ToggleTheme: (state) => {
      state.darkmode = !state.darkmode;
    },
  },
  
});
export const { ToggleTheme } = themeslice.actions;
export default themeslice.reducer;
