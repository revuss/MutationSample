import axios from "axios";

const API_URL = "http://localhost:2024/user";

export const register = async (userData: unknown) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
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

// import axios from "axios";

// const API_URL = "http://localhost:2024/user";

// export const register = async (userData: unknown) => {
//   try {
//     console.log("Sending request to:", `${API_URL}/register`);
//     console.log("Request payload:", userData);
//     const response = await axios.post(`${API_URL}/register`, userData);
//     console.log("Response received:", response.data);
//     return response.data;
//   } catch (error: unknown) {
//     console.log("Error in register function:", error);
//     if (axios.isAxiosError(error)) {
//       const message = error.response?.data.message;
//       return { message };
//     } else {
//       throw error;
//     }
//   }
// };
