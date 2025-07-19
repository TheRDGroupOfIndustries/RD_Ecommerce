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
      status: "Return Made", // Changed for variety
      date: "May 30, 2025",
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Shirt4",
      name: "Classic Denim Skinny Shirt",
      quantity: 1,
      price: 245,
    },
  ]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Return Made":
        return "bg-green-100 text-green-800"; // Light green background, dark green text
      case "Request Submitted":
        return "bg-orange-100 text-orange-800"; // Light orange background, dark orange text
      case "Processing": // Example for future status
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleViewDetails = (requestNo) => {
    console.log(`Viewing details for return request: #${requestNo}`);
    // In a real application, you'd navigate to a details page
    alert(`Navigating to details for return request #${requestNo}`);
  };

  return (
    <div className=""> 
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
        Your Return Requests ({returnRequests.length})
      </h2>

      {returnRequests.length === 0 ? (
        <p className="text-center text-gray-600 py-10">
          No return requests found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid */}
          {returnRequests.map((request) => (
            <div
              key={request.id}
              className="p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col bg-white" // Added shadow-sm and flex-col
            >
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100"> {/* Added bottom border */}
                <span className="text-sm text-gray-700 font-medium">
                  Request No:{" "}
                  <span className="text-blue-600 font-bold"> {/* Changed to blue, bold */}
                    #{request.requestNo}
                  </span>
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusClass(request.status)}`} 
                >
                  {request.status}
                </span>
              </div>
              <div className="flex items-center space-x-4 flex-grow mb-4"> {/* flex-grow to push button to bottom */}
                <img
                  src={request.image}
                  alt={request.name}
                  className="w-20 h-20 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                  }}
                />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-1">{request.date}</p>
                  <p className="font-semibold text-gray-900 text-base mb-1"> {/* Increased font size */}
                    {request.name}
                  </p>
                  <p className="text-gray-700 text-sm mb-1">
                    Quantity: <span className="font-medium">{request.quantity}</span> {/* Bold quantity */}
                  </p>
                  <p className="font-bold text-gray-900 text-lg"> {/* Consistent bold and size */}
                    ₹{request.price.toFixed(2)} {/* Using Rupee symbol */}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleViewDetails(request.requestNo)}
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 text-sm w-full"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReturnRequests;