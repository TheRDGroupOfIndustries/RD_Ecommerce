import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api/auth", // Next.js backend API
  withCredentials: true, // keep cookies for session
});

export const authApi = {
  // 🔹 Google login → just redirect
  loginWithGoogle: () => {
    window.location.href =
      "http://localhost:3000/api/auth/signin/google?callbackUrl=http://localhost:5173/dashboard";
  },

  // 🔹 Credentials login
  loginWithCredentials: async (email, password) => {
    try {
      const response = await axiosClient.post(
        "/callback/credentials",
        new URLSearchParams({
          email,
          password,
          callbackUrl: "http://localhost:5173/dashboard",
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: "Login failed" };
    }
  },

  // 🔹 Get current session
  getSession: async () => {
    try {
      const response = await axiosClient.get("/session");
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: "Unable to fetch session" };
    }
  },

  // 🔹 Logout
  logout: async () => {
    try {
      await axiosClient.post("/signout", null, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      window.location.href = "/login";
    } catch (error) {
      throw error.response?.data || { error: "Logout failed" };
    }
  },
};
