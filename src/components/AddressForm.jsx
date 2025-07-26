import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../store/addressSlice";
import BtnLoader from "./BtnLoader";

const AddressForm = ({ addressId, handleClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.address);

  useEffect(() => {
    if (addressId) {
      // Fetch address data by ID and set form values

      console.log(`Fetching address data for ID: ${addressId}`);
      // Simulate fetching dat
    }
  }, [addressId]);

  const onSubmitHandler = (data) => {
    console.log("Form submitted with data: ", data);

    if (addressId) {
      // Update existing address
      dispatch(updateAddress(addressId, data));
    } else {
      // Create new address
      dispatch(addAddress(data));
    }
    error ? alert(error) : reset();

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className=" mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <div className="w-full flex items-center justify-between gap-4 col-span-full">
        <h2 className=" text-xl font-semibold text-gray-800 mb-2">
          Delivery Address
        </h2>
        <button
          type="button"
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer p-1 rounded-full hover:bg-gray-100"
          aria-label="Close search panel"
        >
          <IoClose size={28} />
        </button>
      </div>

      <div>
        <label className="block font-medium">Full Name</label>
        <input
          {...register("fullName", { required: "Full name is required" })}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Phone</label>
        <input
          {...register("phone", { required: "Phone number is required" })}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          type="tel"
          placeholder="9876543210"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Alternate Phone</label>
        <input
          {...register("alternatePhone")}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          type="tel"
          placeholder="Optional"
        />
      </div>

      <div>
        <label className="block font-medium">Address Line 1</label>
        <input
          {...register("addressLine1", { required: "Address is required" })}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="House No, Street"
        />
        {errors.addressLine1 && (
          <p className="text-red-500 text-sm">{errors.addressLine1.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Address Line 2</label>
        <input
          {...register("addressLine2")}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Landmark (optional)"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">City</label>
          <input
            {...register("city", { required: "City is required" })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="City"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">State</label>
          <input
            {...register("state", { required: "State is required" })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="State"
          />
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Postal Code</label>
          <input
            {...register("postalCode", { required: "Postal code is required" })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="123456"
          />
          {errors.postalCode && (
            <p className="text-red-500 text-sm">{errors.postalCode.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Country</label>
          <input
            {...register("country", { required: "Country is required" })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="India"
            defaultValue="India"
          />
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block font-medium">Address Type</label>
        <select
          {...register("addressType")}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        >
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <input
          {...register("isDefault")}
          type="checkbox"
          id="isDefault"
          className="accent-blue-600"
        />
        <label htmlFor="isDefault">Set as default address</label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
      >
        {loading ? <BtnLoader/> : "Save"}
      </button>
    </form>
  );
};

export default AddressForm;
