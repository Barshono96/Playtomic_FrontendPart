import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const createCourt = async (clubId: string, courtData: any) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/clubs/${clubId}/courts`,
      courtData
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error while creating court", error.message);
    } else {
      console.error("Unexpected error while creating court", error);
    }
    throw error;
  }
};

export const getCourts = async (clubId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/clubs/${clubId}/courts`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error while retrieving courts", error.message);
    } else {
      console.error("Unexpected error while retrieving courts", error);
    }
    throw error;
  }
};

export const getAllCourts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/courts`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error while retrieving all courts", error.message);
    } else {
      console.error("Unexpected error while retrieving all courts", error);
    }
    throw error;
  }
};
