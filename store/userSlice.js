import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const asynkLogin = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${process.env.SERVER_ADDRESS}/api/auth/login`,
        { ...data },
        { withCredentials: true },
      );
      return res.data.user;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "خطا در ورود");
    }
  },
);
export const asynkRegister = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${process.env.SERVER_ADDRESS}/api/auth/register`,
        { username: data.username, password: data.password, email: data.email },
        { withCredentials: true },
      );
      return res.data.user;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "خطا در ورود");
    }
  },
);
export const checkAuth = createAsyncThunk(
  "auth/checkout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${process.env.SERVER_ADDRESS}http://localhost:2000/api/auth/check`, {
        withCredentials: true,
      });
      return res.data.user;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "احراز هویت نشدی");
    }
  },
);
export const asynkLogout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${process.env.SERVER_ADDRESS}/api/auth/logout`,
        {}, 
        { withCredentials: true } 
      );
      return res.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "خطا در خروج");
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null,
  },
  reducers: {
    setErrorNull: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asynkLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asynkLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(asynkLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(asynkRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asynkRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(asynkRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(asynkLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asynkLogout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(asynkLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;

      })
  },
});

export const {setErrorNull } = userSlice.actions;
export default userSlice.reducer;
