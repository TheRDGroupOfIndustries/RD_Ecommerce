import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { LuTruck, LuRotateCcw } from "react-icons/lu"; // Changed from RiShipLine, RiArrowGoBackLine for consistency

const images = [
  "/details/product1.webp",
  "/details/product2.webp",
  "/details/product3.webp",
  "/details/product1.webp", // Assuming this is intentional for a 2x2 grid
];

const sizes = ["XS", "S", "M", "L", "XL"]; // Added more sizes for variety
const colors = ["gray", "black", "green", "pink", "blue"]; // Added blue color
const colorClasses = {
  gray: "bg-gray-300",
  black: "bg-black",
  green: "bg-green-500",
  pink: "bg-pink-300",
  blue: "bg-blue-500",
};

const GridMediaDetailsSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("gray");

  const productPrice = 999; // Example base price in INR
  const discountedPrice = 799; // Example discounted price in INR

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-4 md:p-8 lg:p-12 mx-auto mt-6">
      {/* Images Grid */}
      <div className="grid grid-cols-2 gap-5 w-full ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product view ${index + 1}`}
            className="w-full h-48 md:h-64 lg:h-96 object-cover object-top rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Details Section */}
      <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left">
        <span className="inline-block text-sm bg-black text-white px-3 py-1 rounded-md font-semibold mb-2">
          SALE 20% OFF
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Curly Girl Beautiful Dress
        </h1>

        <div className="flex items-center justify-center lg:justify-start text-sm text-gray-600 space-x-2">
          <div className="flex text-yellow-500">★★★★☆</div>
          <span>4.7 Rating (5 customer reviews)</span>
        </div>

        {/* Price Display */}
        <div className="flex items-baseline justify-center lg:justify-start space-x-3 text-gray-900">
          <span className="text-3xl font-bold">₹{discountedPrice.toFixed(2)}</span>
          <span className="text-lg text-gray-500 line-through">₹{productPrice.toFixed(2)}</span>
        </div>

        <p className="text-gray-700 leading-relaxed text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        {/* Quantity, Size, Colors Options */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 justify-center lg:justify-start w-full mt-6 pt-6 border-t border-gray-100">
          {/* Quantity */}
          <div className="space-y-3">
            <h2 className="font-semibold text-gray-800">Quantity</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                className="p-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors duration-200"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="font-medium text-lg w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors duration-200"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Size */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Size</h4>
            <div className="flex items-center gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium transition-all duration-200
                    ${selectedSize === size ? "bg-black text-white shadow-md border-black ring-2 ring-black" : "text-gray-700 hover:bg-gray-100"}`}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Color</h4>
            <div className="flex items-center gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-7 h-7 rounded-full border-2 border-white shadow-sm cursor-pointer transition-all duration-200
                    ${colorClasses[color]} ${selectedColor === color ? "ring-2 ring-offset-1 ring-blue-500" : ""}`}
                  aria-label={`Select ${color} color`}
                  aria-pressed={selectedColor === color}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Add to Cart / Wishlist Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full pt-6 pb-6 border-b border-gray-200">
          <button className="w-full px-6 py-3 font-bold bg-blue-600 text-white rounded-lg uppercase hover:bg-blue-700 transition-colors duration-200 shadow-md">
            Add To Cart
          </button>
          <button className="w-full px-6 py-3 font-bold border border-gray-300 text-gray-800 rounded-lg uppercase hover:bg-gray-100 transition-colors duration-200 shadow-sm">
            Add To Wishlist
          </button>
        </div>

        {/* Product Meta Info */}
        <div className="text-base text-gray-700 space-y-2 py-4">
          <div>
            <span className="font-semibold">SKU:</span> PRT584E63A
          </div>
          <div>
            <span className="font-semibold">Category:</span> Dresses, Jeans,
            Swimwear, Summer
          </div>
          <div>
            <span className="font-semibold">Tags:</span> Casual, Workwear,
            Accessories
          </div>
        </div>

        {/* Shipping & Returns Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm">
            <LuTruck size={24} className="text-blue-600 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">FREE Shipping</span>
              <span className="text-sm text-gray-600">On all orders above ₹500</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm">
            <LuRotateCcw size={24} className="text-blue-600 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">Easy Returns</span>
              <span className="text-sm text-gray-600">30 Days hassle-free return</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridMediaDetailsSection;