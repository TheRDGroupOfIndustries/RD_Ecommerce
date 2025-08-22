import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
  deleteCartItem,
  fetchCartItems,
  setAppliedCoupon,
  updateQuantity,
} from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { applyCouponCode, getCoupons } from "../../services/couponService";
import toast from "react-hot-toast";

const CouponCard = ({ coupon, applyCoupon }) => {
  const { name, code, endDate, discountType, discountValue } = coupon;

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-300 rounded-xl p-4 w-full min-w-60 shadow-md">
      <div className="flex items-center justify-between gap-5 w-full">
        <h3 className="text-lg font-semibold text-blue-800 uppercase">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <p className=" font-semibold text-gray-600">Use Code:</p>
          <div className="text-base font-bold bg-blue-200 px-3 py-1 inline-block rounded-md tracking-wider text-blue-900">
            {code}
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between gap-5 ">
        <div className="">
          <p className="mt-2 text-green-600 font-medium">
            {discountType == "percent"
              ? `${discountValue}% OFF`
              : `Rs.${discountValue} OFF`}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Expires on:{" "}
            <span className="font-semibold">
              {endDate?.split("T")[0].replaceAll("-", "/")}
            </span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => applyCoupon(code)}
          className="bg-black px-4 py-1 cursor-pointer rounded-md text-white"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const [coupons, setCoupons] = useState([]);
  const [couponCode, setCouponCode] = useState("");

  // const [discount, setDiscount] = useState(0);
  const { isAuthenticated, userData } = useSelector((state) => state.auth);
  const { items, totalPrice, loading, appliedCoupon, discount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();


  const fetchCoupons = async () => {
    const res = await getCoupons();
    setCoupons(res.coupons);
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCartItems());
      fetchCoupons();
    }
  }, []);

  const handleQuantityChange = (id, delta) => {
    dispatch(updateQuantity({ productId: id, quantity: delta }));
  };

  const handleRemoveItem = (id) => {
    dispatch(deleteCartItem(id));
  };

  const applyCoupon = async (code) => {
    if (code === "") return toast.error("Invalid coupon code");
    const res = await applyCouponCode({ code, userId: userData?._id });

    if (res.success) {
      const coupon = coupons.find((c) => c.code === code);
      dispatch(setAppliedCoupon(coupon));
    }

    setCouponCode("");
  };

  const handleRemoveCoupon = () =>{
    dispatch(setAppliedCoupon(null))
    // setDiscount(0)
  }

  return (
    <div className="">
      {" "}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
        Your Shopping Cart
      </h2>
      {loading ? (
        <div className="flex items-center justify-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
        </div>
      ) : items?.length === 0 ? (
        <p className="text-lg font-semibold text-center">Your cart is empty.</p>
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
              {items.map((item) => (
                <tr
                  key={item.product._id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-16 h-16 rounded object-cover border border-gray-200"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                      }}
                    />
                    <span className="font-medium text-gray-900">
                      {item.product.title}
                    </span>
                  </td>
                  <td className="p-4 text-gray-700">
                    Rs. {item.product.salePrice.toFixed(2)}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.product._id, -1)
                        }
                        className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200 text-sm"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus />
                      </button>
                      <span className="font-medium text-gray-800 text-base w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.product._id, 1)
                        }
                        className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200 text-sm"
                        aria-label="Increase quantity"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-gray-900">
                    Rs. {(item.product.salePrice * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleRemoveItem(item.product._id)}
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
            {items.map((item) => (
              <div
                key={item.product._id}
                className="flex flex-col border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-20 h-20 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                      }}
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 text-base">
                        {item.product.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Price: Rs. {item.product.salePrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.product._id)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                    aria-label="Remove item"
                  >
                    <IoClose size={24} />
                  </button>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.product._id, -1)}
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
                    Subtotal: Rs. {totalPrice}
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
                Rs. {totalPrice}
              </span>
            </div>
            <div className="flex justify-between items-center text-gray-700 text-base">
              <span>Discount</span>
              {appliedCoupon && (
                <div className="flex gap-4 bg-gray-200 px-4 py-2 rounded-md">
                  <span>{appliedCoupon?.name}</span>
                  <span className="text-green-500 font-semibold">
                    {appliedCoupon?.discountType == "percent"
                      ? `${appliedCoupon?.discountValue}% OFF`
                      : `Rs.${appliedCoupon?.discountValue} OFF`}
                  </span>
                  <button type="button" className="cursor-pointer" onClick={handleRemoveCoupon}>
                    <IoClose size={20} />
                  </button>
                </div>
              )}
              <span className="text-green-600 font-medium">
                -Rs. {discount}
              </span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-gray-200">
              <span className="text-lg sm:text-xl font-semibold text-gray-800">
                Order Total
              </span>
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                Rs. {(totalPrice - discount).toFixed(2)}
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
                onChange={(e) => setCouponCode(e.target.value)}
                className="p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-gray-700"
              />
              <button
                onClick={() => applyCoupon(couponCode)}
                className="bg-gray-800 text-white px-6 py-3 rounded-r-lg hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap text-sm sm:text-base"
              >
                Apply Coupon
              </button>
            </div>
            
            <Link
              to="/checkout"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto text-base sm:text-lg font-semibold"
            >
              Proceed to Checkout
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 mt-10">
            {coupons.length == 0 ? (
              <p className="text-gray-600 text-sm">No coupons available</p>
            ) : (
              coupons.map((coupon) => (
                <CouponCard
                  key={coupon._id}
                  coupon={coupon}
                  applyCoupon={applyCoupon}
                />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
