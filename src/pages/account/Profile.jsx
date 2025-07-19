import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function App() {
  const { userData } = useSelector((state) => state.auth);
  const TextImage =
    userData &&
    (
      userData.first_name.slice(0, 1) + userData.last_name.slice(0, 1)
    ).toUpperCase();

  console.log("TextImage", TextImage);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  const newPassword = watch("newPassword");

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);

    if (data.newPassword && data.newPassword !== data.confirmNewPassword) {
      setError("confirmNewPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      alert("New password and confirm new password do not match.");
      return;
    }

    alert("Profile updated successfully!");

    // setuserData({
    //   ...userData,
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   email: data.email,
    //   phone: data.phone,
    // });
  };

  return (
      <div className="">
        {/* Profile Header Section */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <img
              src={userData?.profile_image}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-purple-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/100x100/F3F4F6/1F2937?text=${TextImage}`;
              }}
            />
            {/* Camera icon for image upload */}
            <div className="absolute bottom-0 right-0 bg-red-500 p-2 rounded-full text-white cursor-pointer hover:bg-red-600 transition-colors">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A.999.999 0 0010.586 3H7.414A.999 0 006.707 3.293L5.586 4.414A1 1 0 014.879 5H4zm0 2h12v8H4V7zm5 2a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm3 0a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-900 capitalize">
              {userData?.first_name} {userData?.last_name}
            </p>
            <p className="text-gray-600">{userData?.email}</p>
          </div>
        </div>

        {/* Profile Edit Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                defaultValue={userData?.first_name}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                defaultValue={userData?.last_name}
                {...register("lastName", { required: "Last Name is required" })}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                defaultValue={userData?.email}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                defaultValue={userData?.phone}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                New password (leave blank to leave unchanged)
              </label>
              <input
                type="password"
                id="newPassword"
                {...register("newPassword")}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="confirmNewPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm new password
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                {...register("confirmNewPassword", {
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.confirmNewPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmNewPassword.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="subscribeToNewsletter"
              type="checkbox"
              {...register("subscribeToNewsletter")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="subscribeToNewsletter"
              className="ml-2 block text-sm text-gray-900"
            >
              Subscribe me to Newsletter
            </label>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
  );
}

export default App;
