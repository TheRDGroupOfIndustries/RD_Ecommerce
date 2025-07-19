// src/pages/Register.jsx
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../../store/authSlice";
import { BtnLoader } from "../../components";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // dispatch(signUp(data));
  };

  return (
    <div className="flex items-center justify-center p-6 md:p-12">
      <div className="w-full  rounded-2xl border p-8">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <p className="text-center text-gray-500 mb-6">
          Welcome! Please register your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* first name */}
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className={`w-full px-4 py-3 mb-1 border rounded-md outline-none focus:ring-2 ${
              errors.first_name ? "border-red-500" : "border-gray-300"
            }`}
            {...register("first_name", { required: "First Name is required" })}
          />
          {errors.first_name && (
            <p className="text-sm text-red-500 mb-3">
              {errors.first_name.message}
            </p>
          )}
          {/* last name */}
          <label className="block font-semibold mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className={`w-full px-4 py-3 mb-1 border rounded-md outline-none focus:ring-2 ${
              errors.last_name ? "border-red-500" : "border-gray-300"
            }`}
            {...register("last_name", { required: "Last Name is required" })}
          />
          {errors.last_name && (
            <p className="text-sm text-red-500 mb-3">
              {errors.last_name.message}
            </p>
          )}

          {/* Email */}
          <label className="block font-semibold mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            className={`w-full px-4 py-3 mb-1 border rounded-md outline-none focus:ring-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mb-3">{errors.email.message}</p>
          )}

          {/* Password */}
          <label className="block font-semibold mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`w-full px-4 py-3 mb-1 border rounded-md pr-10 outline-none focus:ring-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500 mb-3">
              {errors.password.message}
            </p>
          )}

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm mt-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-black"
                {...register("remember")}
              />
              Remember Me
            </label>
            <a href="#" className="text-red-500 hover:underline">
              Forgot Password
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md w-full cursor-pointer"
            >
              {loading ? <BtnLoader /> : "SIGN UP"}
            </button>
          </div>
        </form>

        <div className="">
          <p className="text-center text-gray-500 mt-6">
            Already have an account{" "}
            <Link to={"/auth/login"} className="text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
