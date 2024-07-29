// import axios from 'axios';

// const API_BASE_URL ='http://localhost:5000/api';

// export const createClub = async (userId: string, clubData: any) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/users/${userId}/clubs`, clubData);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating club', error);
//     throw error;
//   }
// };

// export const getClubs = async (userId: string) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/users/${userId}/clubs`);
//     return response.data;
//   } catch (error) {
//     console.error('Error retrieving clubs', error);
//     throw error;
//   }
// };

// src/api/clubApi.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const createClub = async (userId: string, clubData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/${userId}/clubs`, clubData);
    return response.data;
  } catch (error) {
    console.error('Error creating club', error);
    throw error;
  }
};

// Fetch clubs for a specific user
export const getClubs = async (userId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/clubs`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving clubs', error);
    throw error;
  }
};

// Fetch all clubs
export const getAllClubs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/clubs`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving all clubs', error);
    throw error;
  }
};
