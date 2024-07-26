// utils/auth.ts
import Cookies from "js-cookie";
import { useAuth } from "../context/AuthContext";

export const handleLogout = () => {
  // Remove token from cookies
  Cookies.remove("token"); // Replace 'token' with the actual cookie name if different

  // Clear user data from localStorage if needed
  localStorage.removeItem("user");

  // Optionally, you can also update the authentication state
  const { logout } = useAuth();
  logout();
};
