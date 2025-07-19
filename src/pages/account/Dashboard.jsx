import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample Data
const countries = [
  { name: "United States", amount: "$130.00", flag: "🇺🇸" },
  { name: "India", amount: "$110.00", flag: "🇮🇳" },
  { name: "Africa", amount: "$90.00", flag: "🌍" },
  { name: "Canada", amount: "$75.00", flag: "🇨🇦" },
  { name: "Brazil", amount: "$60.00", flag: "🇧🇷" },
  { name: "Jordan", amount: "$50.00", flag: "🇯🇴" },
];

const chartData = [
  { month: "Jan", amount: 200 },
  { month: "Feb", amount: 190 },
  { month: "Mar", amount: 200 },
  { month: "Apr", amount: 190 },
  { month: "May", amount: 205 },
  { month: "Jun", amount: 185 },
  { month: "Jul", amount: 200 },
  { month: "Aug", amount: 195 },
];

const Dashboard = () => {
  const { userData } = useSelector((state) => state.auth);
  return (
    <div className=" md:p-6">
      <p className="mb-4 text-gray-800 capitalize">
        Hello{" "}
        <strong>
          {" "}
          {userData.first_name} {userData.last_name}{" "}
        </strong>{" "}
        (not {userData.first_name} {userData.last_name}?{" "}
        <a href="#" className="text-blue-500 underline">
          Log out
        </a>
        )
      </p>
      <p className="text-gray-700 mb-6">
        From your account dashboard you can view your{" "}
        <a href="#" className="underline">
          recent orders
        </a>
        , manage your{" "}
        <a href="#" className="underline">
          shipping and billing addresses
        </a>
        , and{" "}
        <a href="#" className="underline">
          edit your password and account details
        </a>
        .
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Card icon="🛒" title="Total Order" value="3658" />
        <Card icon="🚚" title="Total Pending Order" value="215" />
        <Card icon="⚙️" title="Total Wishlist" value="31576" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" rounded-xl shadow p-4 md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Monthly Spending</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[180, 210]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#dc2626"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className=" rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Your Top Countries</h2>
          <ul className="space-y-2">
            {countries.map((country, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <span>
                  {country.flag} {country.name}
                </span>
                <span className="font-medium">{country.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, value }) => (
  <div className=" rounded-xl shadow p-6 text-center">
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

export default Dashboard;
