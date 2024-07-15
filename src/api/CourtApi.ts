import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const createCourt = async (clubId: string, courtData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/clubs/${clubId}/courts`, courtData);
    return response.data;
  } catch (error) {
    console.error('Error creating court', error);
    throw error;
  }
};

export const getCourts = async (clubId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/clubs/${clubId}/courts`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving courts', error);
    throw error;
  }
};
