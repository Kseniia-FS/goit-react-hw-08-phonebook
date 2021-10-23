import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", userData);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.massage);
    }
  }
);

export const logIn = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", userData);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.massage);
    }
  }
);
export const logOut = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (error) {
      rejectWithValue(error.massage);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "user/refresh",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    const currentToken = state.auth.token;

    if (currentToken === null) {
      return rejectWithValue("No currentToken");
    }
    token.set(currentToken);
    try {
      const { data } = await axios.get("/users/current");

      return data;
    } catch (error) {
      rejectWithValue(error.massage);
    }
  }
);
