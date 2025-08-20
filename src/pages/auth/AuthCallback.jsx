import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { RiLoader3Fill } from "react-icons/ri";
import { getTokenData, loginUser } from "../../store/authSlice";

export default function AuthCallback() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (token) {
      const user = jwtDecode(token);
      console.log("Logged in user:", user);
      localStorage.setItem("neeraya-auth-token", token);
      dispatch(loginUser(user));
      navigate("/");
    } else {
      navigate("/auth/login");
    }
  }, []);

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gray-50 p-6 font-inter">
      <div className="bg-white rounded-lg shadow-xl p-10 flex flex-col items-center justify-center text-center max-w-md w-full">
        <h2 className="text-4xl font-bold font-serif-custom text-gray-800 mb-6 animate-pulse">
          CHLOE'S VENTURE
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-8">
          {/* Simple pulsing circle animation */}
          <RiLoader3Fill size={60} className="animate-spin text-blue-600" />
          {/* You could also use an SVG spinner here for more customization */}
        </div>
        <p className="text-xl text-gray-700 leading-relaxed font-semibold">
          Logging in... Please wait
        </p>
        <p className="text-sm text-gray-500 mt-4">Redirecting you to Home.</p>
      </div>
    </div>
  );
}
