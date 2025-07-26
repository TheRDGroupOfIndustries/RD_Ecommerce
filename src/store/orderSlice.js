import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});



export const createOrder = createAsyncThunk(
    "order/createOrder",
    async (orderDetails, { rejectWithValue, getState }) => {
        try {
            const { userData } = getState().auth;
            console.log("Creating order with details:", {
                ...orderDetails,
                user: userData._id,
            });
            
            const response = await api.post("/order/create", {
                ...orderDetails,
                user: userData._id,
            });
            return response.data;
        } catch (error) {
            console.error("Error creating order:", error);
            return rejectWithValue(
                error.response?.data || { message: "Failed to create order" }
            );
        }
    }
)

export const getAllOrders = createAsyncThunk(
    "order/getAllOrders",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { userData } = getState().auth;
            const response = await api.get(`/order/get/user/${userData._id}`);
            // console.log("Fetched orders successfully:", response.data);
            return response.data;
        } catch (error) {
            // console.error("Error fetching orders:", error);
            return rejectWithValue(
                error.response?.data || { message: "Failed to fetch orders" }
            );
        }
    }
)

export const getOrderDetails = createAsyncThunk(
    "order/getOrderDetails",
    async (orderId, { rejectWithValue, getState }) => {
        try {
            const { userData } = getState().auth;
            const response = await api.get(`/order/get/user/${userData._id}/${orderId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || { message: "Failed to fetch order details" }
            );
        }
    }
)



const orderSlice  = createSlice({
    name: "order",
    initialState: {
        orders: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
                console.log("Order created successfully:", action.payload);
                
                state.orders = action.payload.orders;
                toast.success("Order created successfully!");
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload.message || "Failed to create order");
            })
            .addCase(getAllOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
                console.log("Fetched orders successfully:", action.payload);
            })
            .addCase(getAllOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload.message || "Failed to fetch orders");
            });
    }
})

export default orderSlice.reducer;