import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BtnLoader } from "../../components";
import { login } from "../../store/authSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    dispatch(login(data));
  };

  return (
    <div className="flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-md rounded-2xl border p-8">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <p className="text-center text-gray-500 mb-6">
          welcome please login to your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
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
                message: "Enter a valid email",
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
              {loading ? <BtnLoader /> : "SIGN IN"}
            </button>
          </div>
        </form>

        <div className="">
          <p className="text-center text-gray-500 mt-6">
            Don't have an account{" "}
            <Link to={"/auth/register"} className="text-red-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
