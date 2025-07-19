import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { RiArrowGoBackLine, RiShipLine } from "react-icons/ri";

const images = [
  "/details/product1.webp",
  "/details/product2.webp",
  "/details/product3.webp",
  "/details/product1.webp",
];

const sizes = ["S", "M", "L"];
const colors = ["gray", "black", "green", "pink"];
const colorClasses = {
  gray: "bg-gray-300",
  black: "bg-black",
  green: "bg-green-500",
  pink: "bg-pink-300",
};

const GridMediaDetailsSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("gray");
 

  return (
    <section className="grid grid-cols-2 px-20 py-10 gap-10">
      {/* Images */}
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        {images.map(image => (
          <img src={image} alt="" className="w-full h-full object-cover rounded-lg" />
        ))}
      </div>
      {/* Details */}
      <div className="w-full space-y-10">
        <span className="text-sm bg-black text-white px-2 py-1 rounded-md font-semibold">
          SALE 20% OFF
        </span>
        <h1 className="text-3xl font-bold mt-2">Curly Girl Beautiful Dress</h1>

        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <div className="flex text-yellow-500">★★★★☆</div>
          <span>4.7 Rating (5 customer reviews)</span>
        </div>

        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="flex items-center gap-16 w-full">
          {/* Quantity */}
          <div className="space-y-4">
            <h2 className="font-semibold">Quantity</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                className="p-2 bg-black text-white rounded-full"
              >
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 bg-black text-white rounded-full"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Size */}
          <div className="space-y-4">
            <h4 className="font-semibold">Size</h4>
            <div className="flex items-center gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-4">
            <h4 className="font-semibold">Color</h4>
            <div className="flex items-center gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 ${
                    colorClasses[color]
                  } ${selectedColor === color ? "ring-2 ring-black" : ""}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-b w-full pb-10 flex items-center gap-5">
          <button className="border-[1px] w-fit px-4 font-bold bg-black text-white rounded-lg uppercase py-2">
            Add To Cart
          </button>
          <button className="border-[1px] w-fit px-4 font-bold border-black rounded-lg uppercase py-2">
            Add To Wishlist
          </button>
        </div>

        <div className="text-lg text-gray-700 space-y-1">
          <div>
            <span className="font-bold">SKU:</span> PRT584E63A
          </div>
          <div>
            <span className="font-bold">Category:</span> Dresses, Jeans,
            Swimwear, Summer
          </div>
          <div>
            <span className="font-bold">Tags:</span> Casual, Workwear,
            Accessories
          </div>
          <div className="flex gap-3 mt-2"></div>
        </div>

        <div className="">
          <div className=" flex gap-6 items-center">
            <RiShipLine size={30} />
            <div className="flex flex-col">
              <span>FREE</span>
              <span className="font-bold">Shiping</span>
            </div>
            <RiArrowGoBackLine size={30} />
            <div className="flex flex-col">
              <span>Easy Return</span>
              <span className="font-bold">30 Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridMediaDetailsSection;
