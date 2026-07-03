import {  createSlice } from "@reduxjs/toolkit";

const themeslice = createSlice({
  name: "darkmode",
  initialState: {
    darkmode: false,
  },
  reducers: {
    ToggleTheme: (state) => {
      state.darkmode = !state.darkmode;
    },
  },
  
});
export const { ToggleTheme } = themeslice.actions;
export default themeslice.reducer;
