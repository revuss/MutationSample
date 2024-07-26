import axios from "axios";

const API_URL = "http://localhost:2024/user";

export const login = async (userData: unknown) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data.message;
      return { message };
    } else {
      throw error;
    }
  }
};
