import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register } from "@/services/register";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useRegisterMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (userData) => {
      console.log("Mutation function called with: 1time", userData);
      const response = await register(userData);
      // console.log("Response from register function:", response);
      return response;
    },
    onSuccess: (data) => {
      console.log("Mutation success:", data);
      if (data.message === "Account created") {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      console.log("Mutation error:", error);
      toast.error("Registration failed. Please try again.");
    },
  });
};
