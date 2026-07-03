import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const asynkTheme = createAsyncThunk(
  "theme/asynkTheme",
  async (newTheme, { rejectWithValue }) => {
    try {
      const res = await axios.patch(
        "http://localhost:2000/api/user/theme",
        { theme: newTheme },
        { withCredentials: true },
      );
      return res.data.theme;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'خطا در ورود');
    }
  },
);

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
  extraReducers: (builder) => {
    builder
      .addCase(asynkTheme.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asynkTheme.fulfilled, (state, action) => {
        state.loading = false;
        state.darkmode = action.payload
        state.error = null;
      })
      .addCase(asynkTheme.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { ToggleTheme } = themeslice.actions;
export default themeslice.reducer;
