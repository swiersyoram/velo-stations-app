import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, postLogin, postLogout } from "../Api/authentication.api";
import { IAuth } from "../Models/auth.type";

export const login = createAsyncThunk("users/login", async (payload: IAuth) => {
  const { data } = await postLogin(payload);
  return data;
});
export const authenticate = createAsyncThunk("users/authenticate", async () => {
  await getAuth();
});

export const logout = createAsyncThunk("users/logout", async () => {
  await postLogout();
});

export const userSlice = createSlice({
  name: "users",
  initialState: { username: null, isAuthenticated: false, error: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => ({
      ...state,
      isAuthenticated: true,
      error: false,
    }));
    builder.addCase(login.rejected, (state) => ({
      ...state,
      isAuthenticated: false,
      error: true,
    }));
    builder.addCase(authenticate.fulfilled, (state) => ({
      ...state,
      isAuthenticated: true,
    }));
    builder.addCase(authenticate.rejected, (state) => ({
      ...state,
      isAuthenticated: false,
    }));
    builder.addCase(logout.fulfilled, (state) => ({
      ...state,
      isAuthenticated: false,
    }));
  },
});

export const userReducer = userSlice.reducer;
