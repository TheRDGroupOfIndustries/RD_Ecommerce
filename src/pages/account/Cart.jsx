import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Product1",
      name: "Sophisticated Swagger Suit",
      price: 28.0,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Product2",
      name: "Cozy Knit Cardigan Sweater",
      price: 56.0,
      quantity: 1,
    },
    {
      id: 3,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Product3",
      name: "Athletic Mesh Sports Leggings",
      price: 20.0,
      quantity: 1,
    },
    {
      id: 4,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Product4",
      name: "Plaid Wool Winter Coat",
      price: 42.0,
      quantity: 2,
    },
    {
      id: 5,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Product5",
      name: "Satin Wrap Party Blouse",
      price: 35.0,
      quantity: 2,
    },
    {
      id: 6,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Product6",
      name: "Suede Ankle Booties Collection",
      price: 38.0,
      quantity: 2,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const calculateSubtotal = (item) => item.price * item.quantity;
  const calculateTotalPrice = () =>
    cartItems.reduce((sum, item) => sum + calculateSubtotal(item), 0);
  const calculateOrderTotal = () => calculateTotalPrice() - discount;

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
    setCouponMessage("");
  };

  const applyCoupon = () => {
    console.log(`Applying coupon: ${couponCode}`);
    if (couponCode.toLowerCase() === "discount20") {
      setDiscount(20);
      setCouponMessage("Coupon applied successfully!");
    } else {
      setDiscount(0);
      setCouponMessage("Invalid coupon code.");
    }
  };

  const handleProceedToCheckout = () => {
    console.log("Proceeding to Checkout!");
    alert("Proceeding to Checkout!");
  };

  return (
    <div className="">
      {" "}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
        Your Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 py-10">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items - Desktop Table Layout */}
          <table className="hidden md:table w-full text-left bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-sm font-semibold text-gray-700">
                  Product
                </th>
                <th className="p-4 text-sm font-semibold text-gray-700">
                  Price
                </th>
                <th className="p-4 text-sm font-semibold text-gray-700">
                  Quantity
                </th>
                <th className="p-4 text-sm font-semibold text-gray-700">
                  Subtotal
                </th>
                <th className="p-4 text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover border border-gray-200"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                      }}
                    />
                    <span className="font-medium text-gray-900">
                      {item.name}
                    </span>
                  </td>
                  <td className="p-4 text-gray-700">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200 text-sm"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus />
                      </button>
                      <span className="font-medium text-gray-800 text-base w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200 text-sm"
                        aria-label="Increase quantity"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-gray-900">
                    ${calculateSubtotal(item).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                      aria-label="Remove item"
                    >
                      <IoClose size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Cart Items - Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                      }}
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 text-base">
                        {item.name}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Price: ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                    aria-label="Remove item"
                  >
                    <IoClose size={24} />
                  </button>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200 text-sm"
                      aria-label="Decrease quantity"
                    >
                      <FaMinus />
                    </button>
                    <span className="font-medium text-gray-800 text-base w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200 text-sm"
                      aria-label="Increase quantity"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="font-semibold text-gray-900 text-base">
                    Subtotal: ${calculateSubtotal(item).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="border-t border-gray-200 pt-6 mt-6 space-y-3 text-right">
            <div className="flex justify-between items-center text-gray-700 text-base">
              <span>Total Price</span>
              <span className="text-gray-900 font-medium">
                ${calculateTotalPrice().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-gray-700 text-base">
              <span>Discount</span>
              <span className="text-green-600 font-medium">
                -${discount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-gray-200">
              <span className="text-lg sm:text-xl font-semibold text-gray-800">
                Order Total
              </span>
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                ${calculateOrderTotal().toFixed(2)}
              </span>
            </div>
          </div>

          {/* Coupon and Checkout Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex w-full sm:w-auto">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={handleCouponCodeChange}
                className="p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-gray-700"
              />
              <button
                onClick={applyCoupon}
                className="bg-gray-800 text-white px-6 py-3 rounded-r-lg hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap text-sm sm:text-base"
              >
                Apply Coupon
              </button>
            </div>
            {couponMessage && (
              <p
                className={`text-sm ${
                  discount > 0 ? "text-green-600" : "text-red-600"
                } mt-2`}
              >
                {couponMessage}
              </p>
            )}
            <button
              onClick={handleProceedToCheckout}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto text-base sm:text-lg font-semibold"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
