import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});


export const getProducts = async () => {
    try {
        const response = await api.get('/api/products/get/get-all-products');
        console.log("response products: ", response.data);
        
        return response.data;
        
    } catch (error) {
        console.log(error);
        return null
        
    }
}