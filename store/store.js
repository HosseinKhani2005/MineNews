import { configureStore } from "@reduxjs/toolkit";
import themeslice from "./themeSlice";
import userSlice from "./userSlice";
export const store = configureStore({
  reducer: {
    theme: themeslice,
    user: userSlice,
  },
});
