import {  createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
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
export const { ToggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
