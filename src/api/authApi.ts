// src/api/authApi.ts
import axiosInstance from "./axiosInstance";
import { User } from "../types/User";
import { Credentials } from "../types/Credentials";

export const signup = async (userData: User) => {
  try {
    const response = await axiosInstance.post("/signup", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials: Credentials) => {
  try {
    const response = await axiosInstance.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
