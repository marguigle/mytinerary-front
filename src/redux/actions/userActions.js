import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const cargarUsuario = createAsyncThunk("cargar_usuario", (user) => {
  return {
    payload: user,
  };
});

export const signUp = createAsyncThunk("create_user", async (body) => {
  try {
    const response = await axios.post(
      `${process.env.URL_BASE}/auth/signup`,
      body
    );
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
export const signIn = createAsyncThunk("login_user", async (body) => {
  try {
    const response = await axios.post(
      `${process.env.URL_BASE}/auth/signIn`,
      body
    );
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
export const signInWithToken = createAsyncThunk(
  "login_user_token",
  async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${process.env.URL_BASE}/auth/signin/token`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return {
        user: response.data.user,
        token: token,
      };
    } catch (error) {
      console.error(error);
    }
  }
);
export const logout = createAction("reset", () => {
  localStorage.removeItem("token");
  return {
    payload: null,
  };
});
