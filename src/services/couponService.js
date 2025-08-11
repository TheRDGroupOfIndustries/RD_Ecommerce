import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCoupons = async () => {
  try {
    const response = await api.get("/coupons");
    // connsole.log("Coupon Response: ", response.data);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const applyCouponCode = async ({ code, userId }) => {
  try {
    const response = await api.post("/coupons/validate", {
      code,
      userId,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    toast.error(error.response.data.error);
    return null;
  }
};
