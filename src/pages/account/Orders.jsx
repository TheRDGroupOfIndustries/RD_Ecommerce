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
      return "bg-green-100 text-green-800"; // Lighter background, darker text for delivered
    case "IN PROGRESS":
      return "bg-blue-100 text-blue-800";   // Lighter background, darker text for in progress
    case "CANCELED":
      return "bg-red-100 text-red-800";     // Lighter background, darker text for canceled
    case "DELAYED":
      return "bg-yellow-100 text-yellow-800"; // Lighter background, darker text for delayed
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Orders = () => {
  return (
    <div className=""> {/* Added responsive padding, background, and shadow */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Orders</h2> {/* Added a heading */}
      <div className="overflow-x-auto rounded-lg border border-gray-200"> {/* Added border and rounded corners to the table container */}
        <table className="min-w-full divide-y divide-gray-200"> {/* Added divide-y */}
          <thead className="bg-gray-50"> {/* Added background to header */}
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">ORDER #</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">DATE PURCHASED</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">STATUS</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">TOTAL</th>
              <th scope="col" className="relative px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">ACTION</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={`text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150`}
              >
                <td className="px-4 py-3 font-medium whitespace-nowrap">{order.id}</td>
                <td className="px-4 py-3 whitespace-nowrap">{order.date}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{order.total}</td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  <Link to={`/account/orders/${order.id}`} className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">View</Link> {/* More descriptive link */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6"> {/* Responsive flex direction and padding */}
        <p className="text-sm text-gray-600">
            Showing <span className="font-semibold">1</span> to <span className="font-semibold">{orders.length}</span> of <span className="font-semibold">{orders.length}</span> results
        </p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            Previous
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
            1
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            2
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            3
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;