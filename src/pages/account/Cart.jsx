import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Cart = () => {
   const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: 'https://placehold.co/80x80/F3F4F6/1F2937?text=Product1',
      name: 'Sophisticated Swagger Suit',
      price: 28.00,
      quantity: 1,
    },
    {
      id: 2,
      image: 'https://placehold.co/80x80/F3F4F6/1F2937?text=Product2',
      name: 'Cozy Knit Cardigan Sweater',
      price: 56.00,
      quantity: 1,
    },
    {
      id: 3,
      image: 'https://placehold.co/80x80/F3F4F6/1F2937?text=Product3',
      name: 'Athletic Mesh Sports Leggings',
      price: 20.00,
      quantity: 1,
    },
    {
      id: 4,
      image: 'https://placehold.co/80x80/F3F4F6/1F2937?text=Product4',
      name: 'Plaid Wool Winter Coat',
      price: 42.00,
      quantity: 2, // Example with more than 1 quantity
    },
    {
      id: 5,
      image: 'https://placehold.co/80x80/F3F4F6/1F2937?text=Product5',
      name: 'Satin Wrap Party Blouse',
      price: 35.00,
      quantity: 2,
    },
    {
      id: 6,
      image: 'https://placehold.co/80x80/F3F4F6/1F2937?text=Product6',
      name: 'Suede Ankle Booties Collection',
      price: 38.00,
      quantity: 2,
    },
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const calculateSubtotal = (item) => item.price * item.quantity;
  const calculateTotalPrice = () => cartItems.reduce((sum, item) => sum + calculateSubtotal(item), 0);
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
  };

  const applyCoupon = () => {
    console.log(`Applying coupon: ${couponCode}`);
    if (couponCode.toLowerCase() === 'discount20') {
      setDiscount(20); 
    } else {
      setDiscount(0);
    }
  };

  const updateCart = () => {
    console.log('Cart updated!');
  };
  return (
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-6">Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 py-2 border-b border-gray-200 font-medium text-gray-600">
              <div className="col-span-2">Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-5 gap-4 items-center py-4 border-b border-gray-100">
                <div className="col-span-2 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image'; }}
                  />
                  <span className="font-medium text-gray-900">{item.name}</span>
                </div>
                <div className="text-gray-700">${item.price.toFixed(2)}</div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                  >
                    <FaMinus />
                  </button>
                  <span className="font-medium text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">${calculateSubtotal(item).toFixed(2)}</span>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200 ml-4"
                    aria-label="Remove item"
                  >
                    <IoClose size={30} />
                  </button>
                </div>
              </div>
            ))}
            {/* Order Summary Section */}
            <div className="border-t border-gray-200 pt-6 mt-6 space-y-3 text-right">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Total Price</span>
                <span className="text-gray-900 font-medium">${calculateTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Discount</span>
                <span className="text-green-600 font-medium">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <span className="text-xl font-semibold text-gray-800">Order Total</span>
                <span className="text-xl font-bold text-gray-900">${calculateOrderTotal().toFixed(2)}</span>
              </div>
            </div>

            {/* Coupon and Update Cart Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={handleCouponCodeChange}
                  className="p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-gray-800 text-white px-6 py-3 rounded-r-lg hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
                >
                  Apply Coupon
                </button>
              </div>
              <button
                onClick={updateCart}
                className="bg-gray-900 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-200 w-full sm:w-auto"
              >
                Confirm Order
              </button>
            </div>

          </>
        )}
      </div>
  )
}

export default Cart