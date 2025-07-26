import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getOrderDetails = async (orderId) => {
  try {
    const response = await api.get(`/order/get/user/_/${orderId}`);
    console.log("response order details: ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
