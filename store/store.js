import { configureStore, createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const THEME_STORAGE_KEY = "theme";

const themeSlice = createSlice({
  name: "darkmode",
  initialState: {
    darkmode: false,
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

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    user: userSlice,
  },
});
