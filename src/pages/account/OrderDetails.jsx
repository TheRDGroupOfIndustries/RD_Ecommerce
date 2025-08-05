import React, { useState } from "react";

const orderHistory = [
  {
    title: "Product Shiped",
    date: "08/04/2025 5:23pm",
    icon: "🟢",
    description: [
      { label: "Courier Service", value: "UPS, R. Gosling" },
      { label: "Estimated Delivery Date", value: "09/04/2025" },
    ],
  },
  {
    title: "Product Shiped",
    date: "08/04/2025 5:23pm",
    icon: "🔴",
    description: [
      { label: "Tracking Number", value: "3409–4216–8759" },
      { label: "Warehouse", value: "Top Shirt 12b" },
    ],
  },
  {
    title: "Product Packaging",
    date: "09/04/2025 4:34pm",
    icon: "⚪",
    description: [],
  },
  {
    title: "Order Placed",
    date: "10/04/2025 2:36pm",
    icon: "⚪",
    description: [],
  },
];

const item = {
  image: "https://placehold.co/100x100/F3F4F6/1F2937?text=Shirt", // Placeholder image
  name: "Collar Casual Shirt",
  price: 150,
  size: "XL",
};

const OrderDetails = () => {
  const [tab, setTab] = useState("Order History");
  const totalPrice = item.price;
  const totalDiscounts = 55; // Assuming a fixed discount for this example
  const orderTotal = totalPrice - totalDiscounts;
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-2xl border">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/60x60"
            alt="product"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div>
            <div className="text-sm font-semibold text-white bg-pink-600 px-2 py-1 rounded inline-block mb-1">
              IN PROGRESS
            </div>
            <h2 className="text-xl font-bold text-gray-900">Order #17493</h2>
          </div>
        </div>

        {/* Order Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm text-gray-700">
          <div>
            <p className="text-gray-500">Item</p>
            <p>casual shirt</p>
          </div>
          <div>
            <p className="text-gray-500">Courier</p>
            <p>casual shirt</p>
          </div>
          <div>
            <p className="text-gray-500">Start Time</p>
            <p>05 April 2024, 15:43:23</p>
          </div>
          <div>
            <p className="text-gray-500">Address</p>
            <p>Address 451 Wall Street UK, London</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
            Export Details
          </button>
          <button className="border px-4 py-2 rounded-md text-sm">
            Request Confirmation
          </button>
          <button className="border border-red-400 text-red-500 px-4 py-2 rounded-md text-sm">
            Cancel Order
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="flex space-x-6 border-b border-gray-300 text-sm font-medium text-gray-700">
          {["Order History", "Item Details", "Courier", "Receiver"].map(
            (tabItem) => (
              <button
                onClick={() => setTab(tabItem)}
                className={`${
                  tab === tabItem
                    ? "border-b-2 border-pink-600 text-pink-600"
                    : ""
                } pb-2 cursor-pointer`}
              >
                {tabItem}
              </button>
            )
          )}
        </div>

        {/* Timeline */}
        <div className="mt-6 space-y-6">
          {tab === "Order History" ? (
            orderHistory.map((step, index) => (
              <div key={index} className="flex items-start gap-4 relative pl-4">
                {/* Dotted line */}
                <div className="absolute left-1 top-6 w-px h-full bg-gray-300"></div>
                {/* Icon */}
                <div className="text-2xl">{step.icon}</div>

                {/* Details */}
                <div>
                  <h3 className="font-semibold text-sm">{step.title}</h3>
                  <p className="text-gray-500 text-xs">{step.date}</p>
                  <div className="mt-1 space-y-1 text-sm">
                    {step.description.map((desc, i) => (
                      <p key={i}>
                        <span className="font-semibold">{desc.label}:</span>{" "}
                        {desc.value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : tab === "Item Details" ? (
            <div className=" w-full">
              {/* Item Details Section */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg object-cover border border-gray-200"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/100x100/F3F4F6/1F2937?text=No+Image";
                  }} // Fallback for image loading errors
                />
                <div className="flex-1">
                  <p className="text-lg font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-gray-600 mt-1">Price : ₹{item.price}</p>
                  <p className="text-gray-600 mt-1">Size : {item.size}</p>
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Price</span>
                  <span className="text-gray-900 font-medium">
                    + ₹{totalPrice}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Discounts</span>
                  <span className="text-green-600 font-medium">
                    - ₹{totalDiscounts}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <span className="text-lg font-semibold text-gray-800">
                    Order Total
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    ₹{orderTotal}
                  </span>
                </div>
              </div>
            </div>
          ) : tab === "Courier" ? (
            <div className="text-lg ">
              Commyolk Suspendisse et justo. Praesent mattis augue Aliquam
              ornare hendrerit augue Cras tellus In pulvinar lectus a est
              Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Suspendisse et justo. Praesent
              mattis commyolk augue aliquam ornare.
            </div>
          ) : tab === "Receiver" ? (
            <div className="">
              <h2 className="text-lg text-green-600 my-2 font-semibold">
                Thank you Your order has been received
              </h2>
              <h3>
                <strong>Order Number: </strong>#17493
              </h3>
              <h3>
                <strong>Date: </strong>17/04/2025, 02:34pm
              </h3>
              <h3>
                <strong>Total: </strong>₹95
              </h3>
              <h3>
                <strong>Payment Methods: </strong>Cash on Delivery
              </h3>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
