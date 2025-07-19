import { Heart } from "lucide-react";
import React from "react";

const LongProductCard = ({ product }) => {
  const colors = ["bg-black", "bg-gray-500", "bg-green-500"];
  return (
    <div className="max-w-5xl mx-auto bg-[#fdf7ef] rounded-2xl flex flex-col md:flex-row gap-4 md:gap-6 shadow-md mb-5 p-4 md:p-0">
      {/* Image */}
      <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt="Product"
          className="w-full h-[250px] md:h-[300px] object-cover object-top"
        />
      </div>

      {/* Details */}
      <div className="w-full md:w-2/3 flex flex-col justify-between p-0 md:p-4">
        {/* Top section */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-1">
            {product.title}
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mb-2">
            Accessories, Sunglasses
          </p>

          {/* Rating and review */}
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <div className="flex text-black text-base md:text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <span className="text-xs md:text-sm text-gray-600">
              370 Review
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 md:mb-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>

        {/* Bottom section */}
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          {/* Price and Color */}
          <div className="flex items-center gap-6 md:gap-10">
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-lg md:text-xl font-bold">$40.00</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Color</p>
              <div className="flex gap-2 mt-1">
                {colors.map((color, index) => (
                  <span
                    key={index}
                    // onClick={() => setSelectedColor(index)}
                    className={`w-5 h-5 rounded-full cursor-pointer border ${
                      // selectedColor === index ? "ring-2 ring-black" : ""
                      ""
                    } ${color}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
              Add To Cart
            </button>
            <button className="border border-black p-2 rounded-lg hover:bg-gray-100">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongProductCard;