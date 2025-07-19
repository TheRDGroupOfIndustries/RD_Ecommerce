import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const { pathname } = useLocation();
  const route = pathname.split("/")[2] || "login"; // fallback if no [2]

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#fffaf5]">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center bg-[#fff1db] p-8 relative">
        <div className="w-full absolute top-20 left-10 md:left-20 max-w-md">
          <h1 className="text-3xl font-bold capitalize mb-1">
            {route.replace(/-/g, " ")}
          </h1>
          <p className="text-sm capitalize text-gray-600">
            Home <span className="mx-1">›</span> {route.replace(/-/g, " ")}
          </p>
        </div>
        <img
          src="/auth-background.webp"
          alt="Auth Illustration"
          className="w-full max-w-md object-cover"
        />
      </div>

      {/* Right Section: Page Content */}
      <div className="flex justify-center items-center p-6 md:p-12">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
