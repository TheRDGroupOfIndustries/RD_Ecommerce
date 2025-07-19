import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import Slider from "react-slick";

import { RiShipLine } from "react-icons/ri";

const images = [
  "/details/product1.webp",
  "/details/product2.webp",
  "/details/product3.webp",
];
const sizes = ["S", "M", "L"];
const colors = ["gray", "black", "green", "pink"];
const colorClasses = {
  gray: "bg-gray-300",
  black: "bg-black",
  green: "bg-green-500",
  pink: "bg-pink-300",
};

const DefaultDetailsSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("gray");

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={images[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <section className="grid grid-cols-3 px-20 py-10 gap-10">
      {/* Images */}
      <div className="">
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((image) => (
              <div>
                <img src={image} className="rounded-md" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Details */}
      <div className="w-full space-y-4">
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

        <div className="flex items-center gap-5 justify-between w-full">
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
      </div>
      {/* Actions */}
      <div className="">
        <div className="w-full h-full border-[1px] border-black rounded-2xl flex flex-col p-5 justify-between ">
          <div className="border-[1px] border-black rounded-lg flex items-center justify-center py-2">
            Bank offer 5% Off
          </div>
          <div className="border-[1px] border-black rounded-lg flex gap-6 items-center p-6">
            <RiShipLine size={30} />
            <div className="flex flex-col">
              <span>Easy Return</span>
              <span className="font-bold">30 Days</span>
            </div>
          </div>
          <div className="border-[1px] border-black rounded-lg flex gap-6 items-center p-6">
            <RiShipLine size={30} />
            <div className="flex flex-col">
              <span className="font-bold">Enjoy The Product</span>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </span>
            </div>
          </div>
          <div className="border-[1px] border-black rounded-lg flex flex-col gap-6 items-center p-6">
            <div className="border-b-2 w-full pb-2 text-center font-semibold">
              You will save Rs.504 on this order
            </div>
            <div className="w-full font-bold flex items-center justify-between">
              <h2>Total</h2>
              <h2>$503</h2>
            </div>
          </div>

          <button className="border-[1px] font-bold border-black rounded-lg uppercase py-2">
            Add To Wishlist
          </button>
          <button className="border-[1px] font-bold bg-black text-white rounded-lg uppercase py-2">
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default DefaultDetailsSection;
