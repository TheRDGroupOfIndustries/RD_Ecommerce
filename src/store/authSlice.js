import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Truck } from "lucide-react";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/api/user`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", credentials);
      console.log("login response:", response.data);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Login failed" }
      );
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/register", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Registration failed" }
      );
    }
  }
);

export const getTokenData = createAsyncThunk(
  "auth/validate",
  async (token, { rejectWithValue }) => {
    try {
      // console.log("getting details...", token);

      const response = await api.get("/details", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
        // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Token not valid" }
      );
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "auth/addToWishlist",
  async (productId, { rejectWithValue, getState }) => {
    try {
      const { userData } = getState().auth;
      const response = await axios.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/wishlist/add-to-wishlist`, {
        userId: userData._id,
        productId: productId
      })

      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to add to wishlist" });
      
    }
  }
)

export const removeFromWishlist = createAsyncThunk(
  "auth/removeFromWishlist",
  async (productId, { rejectWithValue, getState }) => {
    try {
      const { userData } = getState().auth;
      const response = await axios.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/wishlist/remove-from-wishlist`, {
        userId: userData._id,
        productId: productId
      })

      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to add to wishlist" });
      
    }
  }
)



const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    userData: null,
    loading: false,
    token: localStorage.getItem("token"),
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
      localStorage.removeItem("token");
      state.token = null;
    },
    validateToken: (state, action) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.isAuthenticated = true;
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        // console.log("payload", action.payload);
        state.loading = false;
        toast.success(action.payload);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(getTokenData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTokenData.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(getTokenData.rejected, (state, action) => {
        localStorage.removeItem("token");
        state.isAuthenticated = false;
        state.token = null;
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        toast.success("Product Added To Your Wishlist");
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        toast.error("Something went wrong");
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        toast.success("Product Added To Your Wishlist");
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        toast.error("Something went wrong");
      })
  },
});

export const { validateToken, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
