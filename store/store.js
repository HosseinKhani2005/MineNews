import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import themeSlice from "./themeSlice"
export const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
  },
});
