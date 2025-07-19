import React from "react";
import { Link } from "react-router-dom";

const orders = [
  { id: "#34VB5540K83", date: "Jan 21, 2025", total: "$358.75", status: "IN PROGRESS" },
  { id: "#78A643CD409", date: "Feb 09, 2025", total: "$760.50", status: "CANCELED" },
  { id: "#112P45A90V2", date: "Jan 15, 2025", total: "$1,264.00", status: "DELAYED" },
  { id: "#28BA67U0981", date: "Jan 19, 2025", total: "$198.35", status: "DELIVERED" },
  { id: "#502TR872W2", date: "Jan 04, 2025", total: "$2,133.90", status: "DELIVERED" },
  { id: "#47H76G09F33", date: "Jan 30, 2025", total: "$86.40", status: "DELIVERED" },
  { id: "#53U76G09E38", date: "Jan 21, 2025", total: "$86.40", status: "DELIVERED" },
  { id: "#31M76G09G76", date: "Jan 07, 2025", total: "$112.40", status: "DELIVERED" },
];

const getStatusClass = (status) => {
  switch (status) {
    case "DELIVERED":
      return "bg-green-600 text-white";
    case "IN PROGRESS":
      return "bg-blue-500 text-white";
    case "CANCELED":
      return "bg-red-600 text-white";
    case "DELAYED":
      return "bg-yellow-500 text-white";
    default:
      return "bg-gray-400 text-white";
  }
};

const Orders = () => {
  return (
    <div className="p-6">
      <div className="overflow-x-auto  ">
        <table className="min-w-full table-auto text-left">
          <thead className="border-b">
            <tr className="text-sm font-semibold text-gray-700">
              <th className="px-6 py-4">ORDER #</th>
              <th className="px-6 py-4">DATE PURCHASED</th>
              <th className="px-6 py-4">STATUS</th>
              <th className="px-6 py-4">TOTAL</th>
              <th className="px-6 py-4 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={` text-sm text-gray-800 border-b hover:bg-zinc-300/50 duration-150`}
              >
                <td className="px-6 py-4 font-medium">{order.id}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4 text-right">
                  <Link to={`/account/order-details`} className="text-pink-600 font-medium hover:underline">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 py-4">
          <button className="border px-3 py-1 rounded-full hover:bg-gray-100">PREW</button>
          <button className="border px-3 py-1 rounded-full font-semibold text-white bg-black">1</button>
          <button className="border px-3 py-1 rounded-full hover:bg-gray-100">2</button>
          <button className="border px-3 py-1 rounded-full hover:bg-gray-100">3</button>
          <button className="border px-3 py-1 rounded-full hover:bg-gray-100">NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
