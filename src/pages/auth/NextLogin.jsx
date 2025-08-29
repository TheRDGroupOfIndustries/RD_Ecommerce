import { useState } from "react";
import { authApi } from "../../authentication/auth.js";

export default function NextLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
   try {
      const res = await authApi.loginWithCredentials(email, password);
      // console.log("Login success:", res);
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Log in to your account
        </h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300 mb-4"
        >
          Login
        </button>
        <div className="relative flex justify-center text-xs text-gray-500 mb-4">
          <span className="bg-white px-2">or</span>
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-300 transform -translate-y-1/2 -z-10"></div>
        </div>
        <button
          onClick={authApi.loginWithGoogle}
          className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-50 transition duration-300"
        >
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
}