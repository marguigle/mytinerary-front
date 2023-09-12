/* import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const cargarUsuario = createAsyncThunk("cargar_usuerio", (user) => {
  return {
    payload: user,
  };
});
export const signUp = createAsyncThun("create_user", async (body) => {
  try {
    const response = await axios.post("localhost:3000/api/auth/signup", body);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const cargarUsuario = createAsyncThunk("cargar_usuario", (user) => {
  return {
    payload: user,
  };
});

export const signUp = createAsyncThunk("create_user", async (body) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/signup",
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
      "http://localhost:3000/api/auth/signin",
      body
    );
    localStorage.setItem("token");
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
export const signInWithToken = createAsyncThunk(
  "login_user_token",
  async () => {
    try {
      const token = localStorage.getItem("token", response.data.token);
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin/token",
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
