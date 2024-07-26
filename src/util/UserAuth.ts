import { toast } from "react-toastify";
import { login } from "../services/login";

export async function handleLogin(
  values: { email: string; password: string },
  navigate: (path: string) => void
) {
  try {
    const response = await login(values);
    handleLoginSuccess(response, navigate);
    return response;
  } catch (error) {
    handleLoginError(error);
    throw error;
  }
}

function handleLoginSuccess(response: any, navigate: (path: string) => void) {
  if (response.username) {
    toast.success(`Welcome ${response.username}`);
    navigate("/task");
  } else {
    toast.error(response.message);
  }
}

function handleLoginError(error: any) {
  console.error("Login error:", error);
  toast.error(`Login try again. ${error}`);
}
