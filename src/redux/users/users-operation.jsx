import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "http://connections-api.herokuapp.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk("user/register", async (userData) => {
  try {
    const { data } = await axios.post("/users/signup", userData);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logIn = createAsyncThunk("user/login", async (userData) => {
  try {
    const { data } = await axios.post("/users/login", userData);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const logOut = createAsyncThunk("user/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const refreshUser = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const currentToken = state.auth.token;

    if (currentToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(currentToken);
    try {
      const { data } = await axios.get("/users/current");

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
