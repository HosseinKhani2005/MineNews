import { createSlice } from "@reduxjs/toolkit";

const THEME_STORAGE_KEY = "theme";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  return localStorage.getItem(THEME_STORAGE_KEY) || "light";
}

const themeSlice = createSlice({
  name: "darkmode",
  initialState: {
    darkmode: getInitialTheme() === "dark",
  },
  reducers: {
    ToggleTheme: (state) => {
      state.darkmode = !state.darkmode;
      if (typeof window !== "undefined") {
        localStorage.setItem(
          THEME_STORAGE_KEY,
          state.darkmode ? "dark" : "light",
        );
      }
    },
    setTheme: (state, action) => {
      state.darkmode = action.payload === "dark";
      if (typeof window !== "undefined") {
        localStorage.setItem(THEME_STORAGE_KEY, action.payload);
      }
    },
  },
});
export const { ToggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
