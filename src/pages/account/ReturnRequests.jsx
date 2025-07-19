import React, { useState } from "react";

const ReturnRequests = () => {
  const [returnRequests, setReturnRequests] = useState([
    {
      id: 1,
      requestNo: "1374845",
      status: "Return Made",
      date: "May 30, 2025",
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Shirt1",
      name: "Collar Casual Shirt",
      quantity: 1,
      price: 105,
    },
    {
      id: 2,
      requestNo: "2374237",
      status: "Request Submitted",
      date: "May 30, 2025",
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Shirt2",
      name: "Collar Casual Shirt",
      quantity: 1,
      price: 304,
    },
    {
      id: 3,
      requestNo: "4374528",
      status: "Request Submitted",
      date: "May 30, 2025",
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Shirt3",
      name: "Classic Denim Skinny Shirt",
      quantity: 1,
      price: 657,
    },
    {
      id: 4,
      requestNo: "5374619",
      status: "Request Submitted",
      date: "May 30, 2025",
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Shirt4",
      name: "Classic Denim Skinny Shirt",
      quantity: 1,
      price: 245,
    },
  ]);
  return (
    <div className=" p-6 rounded-lg max-w-5xl w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        REQUEST FOR PRODUCT RETURN ({returnRequests.length})
      </h2>

      {returnRequests.length === 0 ? (
        <p className="text-center text-gray-600">No return requests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {returnRequests.map((request) => (
            <div
              key={request.id}
              className=" p-4 rounded-lg  border border-gray-200"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-700">
                  Request No:{" "}
                  <span className="text-red-500 font-semibold">
                    #{request.requestNo}
                  </span>
                </span>
                <span
                  className={`text-sm font-medium ${
                    request.status === "Return Made"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {request.status}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={request.image}
                  alt={request.name}
                  className="w-24 h-24 rounded-lg object-cover border border-gray-200"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                  }}
                />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-1">{request.date}</p>
                  <p className="font-semibold text-gray-900 mb-1">
                    {request.name}
                  </p>
                  <p className="text-gray-700 text-sm mb-1">
                    Quantity: {request.quantity}
                  </p>
                  <p className="font-bold text-gray-900 text-lg">
                    ${request.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReturnRequests;
