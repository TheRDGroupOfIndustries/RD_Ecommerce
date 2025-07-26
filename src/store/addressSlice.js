import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (addressData, { rejectWithValue, getState }) => {
    try {
      const { userData } = getState().auth;
      const response = await api.post("/address/create", {
        userId: userData._id,
        address: addressData,
      });
      return response.data;
    } catch (error) {
      console.error("Error adding address:", error);
      return rejectWithValue(
        error.response?.data || { message: "Failed to add address" }
      );
    }
  }
);

export const getAllAddresses = createAsyncThunk(
  "address/getAllAddresses",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { userData } = getState().auth;
      const response = await api.get(`/address/get/${userData._id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching addresses:", error);
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch addresses" }
      );
    }
  }
);

export const getAddress = createAsyncThunk(
  "address/getAddress",
  async (addressId, { rejectWithValue, getState }) => {
    try {
      const { userData } = getState().auth;
      const response = await api.get(`/address/get/${userData._id}/${addressId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching address:", error);
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch address" }
      );
    }
  }
);

export const updateAddress = createAsyncThunk(
  "address/updateAddress",
  async ({ addressId, addressData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/address/${addressId}`, {
        address: addressData,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating address:", error);
      return rejectWithValue(
        error.response?.data || { message: "Failed to update address" }
      );
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (addressId, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/address/${addressId}`);
      return { ...response.data, deletedAddressId: addressId };
    } catch (error) {
      console.error("Error deleting address:", error);
      return rejectWithValue(
        error.response?.data || { message: "Failed to delete address" }
      );
    }
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState: {
    addresses: [],
    selectedAddress: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedAddress: (state) => {
      state.selectedAddress = null;
    },
    setSelectedAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Add Address
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses.push(action.payload.data);
        toast.success("Address added successfully!");
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Failed to add address:", action.payload);
        toast.error(action.payload.message || "Failed to add address");
      })
      
      // Get All Addresses
      .addCase(getAllAddresses.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(getAllAddresses.fulfilled, (state, action) => {
        // state.loading = false;
        state.addresses = action.payload;
      })
      .addCase(getAllAddresses.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.payload;
        console.error("Failed to fetch addresses:", action.payload);
        toast.error(action.payload.message || "Failed to fetch addresses");
      })
      
      // Get Single Address
      .addCase(getAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedAddress = action.payload;
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Failed to fetch address:", action.payload);
        toast.error(action.payload.message || "Failed to fetch address");
      })
      
      // Update Address
      .addCase(updateAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.loading = false;
        const updatedAddress = action.payload.data;
        const index = state.addresses.findIndex(addr => addr._id === updatedAddress._id);
        if (index !== -1) {
          state.addresses[index] = updatedAddress;
        }
        if (state.selectedAddress && state.selectedAddress._id === updatedAddress._id) {
          state.selectedAddress = updatedAddress;
        }
        toast.success("Address updated successfully!");
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Failed to update address:", action.payload);
        toast.error(action.payload.message || "Failed to update address");
      })
      
      // Delete Address
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        const deletedAddressId = action.payload.deletedAddressId;
        state.addresses = state.addresses.filter(addr => addr._id !== deletedAddressId);
        if (state.selectedAddress && state.selectedAddress._id === deletedAddressId) {
          state.selectedAddress = null;
        }
        toast.success("Address deleted successfully!");
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Failed to delete address:", action.payload);
        toast.error(action.payload.message || "Failed to delete address");
      });
  },
});

export const { clearSelectedAddress, setSelectedAddress, clearError } = addressSlice.actions;
export default addressSlice.reducer;