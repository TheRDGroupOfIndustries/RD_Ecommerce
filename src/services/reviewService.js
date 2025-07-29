import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createReview = async (data) => {
    try {
        const response = await api.post(`/api/review/create`, data)
        return response.data

    } catch (error) {
        console.error(error);
        return null
        
    }
}

export const getReview = async (id) => {
    try {
        const response = await api.get(`/api/review/${id}`)
        return response.data

    } catch (error) {
        console.error(error);
        return null
        
    }
}

export const getUserReviews = async (userId) => {
    try {
        const response = await api.get(`/api/review/user/${userId}`)
        return response.data

    } catch (error) {
        console.error(error);
        return null
        
    }
}


