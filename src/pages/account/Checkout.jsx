import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, getAllAddresses } from "../../store/addressSlice";
import { clearCart, fetchCartItems, setAppliedCoupon } from "../../store/cartSlice";
import BtnLoader from "../../components/BtnLoader";
import { createOrder } from "../../store/orderSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { items, totalPrice, appliedCoupon, discount } = useSelector(
    (state) => state.cart
  );
  const { addresses } = useSelector((state) => state.address);
  const { error, loading } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedAddress, setSelectedAddress] = useState(
    addresses[0]?._id || null
  );
  const [billingMethod, setBillingMethod] = useState("cod");

  const handleOrder = () => {
    const selected = addresses.find((addr) => addr._id === selectedAddress);

    if (!selected) {
      return toast.error("Please select a delivery address");
    }

    const orderDetails = {
      address: selected._id,
      items: items.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      billingMethod,
      totalPrice: Number((totalPrice - discount).toFixed(2)),
    };

    appliedCoupon && (orderDetails.coupon = appliedCoupon?._id)

    console.log("orderDetails", orderDetails);
    
    dispatch(createOrder(orderDetails));
    dispatch(clearCart());
    dispatch(setAppliedCoupon(null))

    new Promise((resolve) =>
      setTimeout(() => {
        navigate("/account/orders");
        resolve();
      }, 3000)
    );
  };

  const fetchAddresses = () => {
    dispatch(getAllAddresses());
  };

  const fetchCart = () => {
    dispatch(fetchCartItems());
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAddresses();
      fetchCart();
    }
  }, [isAuthenticated]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold">Checkout</h2>

      {/* Address Section */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Select Delivery Address</h3>
        {addresses.length > 0 ? (
          <div className="space-y-3">
            {addresses.map((addr) => (
              <label
                key={addr?._id}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                  selectedAddress === addr?._id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <div className="text-gray-700 space-y-1 text-sm">
                  <p>
                    <span className="font-medium">Name:</span> {addr?.fullName}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> {addr?.phone}
                  </p>
                  {addr?.alternatePhone && (
                    <p>
                      <span className="font-medium">Alt Phone:</span>{" "}
                      {addr?.alternatePhone}
                    </p>
                  )}
                  <p>
                    <span className="font-medium">Address:</span>{" "}
                    {addr?.addressLine1},{" "}
                    {addr?.addressLine2 && `${addr?.addressLine2}, `}
                    {addr.city}, {addr?.state} - {addr?.postalCode},{" "}
                    {addr?.country}
                  </p>
                </div>
                <input
                  type="radio"
                  name="address"
                  value={addr?._id}
                  checked={selectedAddress === addr?._id}
                  onChange={() => setSelectedAddress(addr?._id)}
                  className="mr-2"
                />
              </label>
            ))}
          </div>
        ) : (
          <div className="text-gray-500">
            No address found.{" "}
            <span className="text-blue-600 cursor-pointer">Add Address</span>
          </div>
        )}
      </div>

      {/* Cart Items */}
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Cart Items</h3>
          <ul className="divide-y divide-gray-200 border rounded-lg">
            {items.map((item) => (
          <li key={item?.product._id} className="flex justify-between p-4 hover:bg-gray-50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
            <img
              src={item?.product.images[0]}
              alt={item?.product.title}
              className="w-20 h-20 object-cover rounded-md"
            />
              </div>
              <div className="flex-1">
            <p className="font-medium text-gray-900">{item?.product.title}</p>
            <p className="text-sm text-gray-600 mt-1">
              Qty: {item?.quantity}
            </p>
              </div>
            </div>
            <div className="text-right font-medium text-gray-900">
              ₹{item?.product.salePrice * item?.quantity}
            </div>
          </li>
            ))}
          </ul>
          
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center py-2">
          <span className="text-gray-600">Subtotal:</span>
          <span className="text-lg font-medium">₹{totalPrice}</span>
            </div>

            {appliedCoupon && (
          <div className="flex justify-between items-center py-2 text-green-600">
            <span>Discount Applied:</span>
            <span>-₹{discount}</span>
          </div>
            )}

            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-lg font-bold">Total:</span>
          <span className="text-xl font-bold text-blue-600">₹{(totalPrice - discount).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Billing Method */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Billing Method</h3>
        <div className="space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="billing"
              value="cod"
              checked={billingMethod === "cod"}
              onChange={() => setBillingMethod("cod")}
              className="mr-2"
            />
            Cash on Delivery
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="billing"
              value="card"
              checked={billingMethod === "card"}
              onChange={() => setBillingMethod("card")}
              className="mr-2"
            />
            Card / UPI
          </label>
        </div>
      </div>

      {/* Order Button */}
      <div>
        <button
          disabled={items.length <= 0}
          onClick={handleOrder}
          className="w-full bg-blue-600 cursor-pointer text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {loading ? <BtnLoader /> : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
