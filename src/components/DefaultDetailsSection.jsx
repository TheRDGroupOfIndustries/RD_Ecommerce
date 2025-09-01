import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import Slider from "react-slick";
import { LuPackage } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../store/cartSlice";
import BtnLoader from "./BtnLoader";
import toast from "react-hot-toast";
import { addToWishlist } from "../store/authSlice";
import RatingStars from "./RatingStars";

const images = [
  "/details/product1.webp",
  "/details/product2.webp",
  // "/details/product3.webp",
];
const sizes = ["S", "M", "L", "XL"];
const colors = ["gray", "black", "green", "pink"];
const colorClasses = {
  gray: "bg-gray-300",
  green: "bg-green-500",
  pink: "bg-pink-300",
  white: "bg-white",
  black: "bg-black",
  blue: "bg-blue-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  brown: "bg-brown-500",
  cyan: "bg-cyan-500",
};

const DefaultDetailsSection = ({ product, reviews }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const settings = {
    customPaging: function (i) {
      return (
        <a className="block border border-gray-200 rounded-md overflow-hidden hover:border-blue-500 transition-colors">
          <img
            src={product.images[i]}
            alt={`Product thumbnail ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const productPrice = 750;
  const discountPercentage = 0.2;
  const discountedPrice = productPrice * (1 - discountPercentage);
  const savings = productPrice * discountPercentage;

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error("Please login to add items to cart");
      return;
    }
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }
    dispatch(
      addProductToCart({
        productId: product._id,
        quantity,
        color: selectedColor,
        size: selectedSize,
      })
    );
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 p-4 md:p-8 lg:p-10  mx-auto mt-6">
      {/* Images Section */}
      <div className="lg:col-span-1 md:col-span-2 mx-auto w-full max-w-lg lg:max-w-none">
        <div className="slider-container">
          <Slider {...settings}>
            {product?.images && product?.images.length == 1 && (
              <div className="">
                <img
                  src={product?.images[0]}
                  alt={`Product image`}
                  className="rounded-lg w-full h-auto object-cover object-center"
                />
              </div>
            )}
            {product?.images.map((image, index) => (
              <div key={index} className="">
                <img
                  src={image}
                  alt={`Product image ${index + 1}`}
                  className="rounded-lg w-full h-auto object-cover object-center"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Details Section */}
      <div className="lg:col-span-1 space-y-6 text-center lg:text-left px-4 lg:px-6">
        {/* Sale Badge */}
        <div className="mb-4">
          <span className="inline-block text-sm bg-black text-white px-4 py-1.5 rounded-full font-medium transform hover:scale-105 transition-transform duration-200">
            SALE {product?.discount}% OFF
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
          {product?.title}
        </h1>

        {/* Ratings */}
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-800">
              {Math.round(averageRating)}
            </span>
            <RatingStars rating={Math.round(averageRating)} />
          </div>
          <span className="text-sm text-gray-600">
            ({reviews.length} customer reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline justify-center lg:justify-start space-x-4 mt-2">
          <span className="text-4xl font-bold text-gray-900">
            ₹{product?.salePrice.toFixed(2)}
          </span>
          <span className="text-xl text-gray-500 line-through">
            ₹{product?.price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed text-base rounded-lg">
            {product?.description}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Quantity, Size, Colors Options */}
        <div className="flex flex-col flex-wrap sm:flex-row items-center gap-6 justify-center lg:justify-between w-full mt-6 sm:mt-8 pt-6 border-t border-gray-200">
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
              <span className="font-medium text-lg w-8 text-center">
                {quantity}
              </span>
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
              {product?.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium transition-all duration-200
                    ${
                      selectedSize === size
                        ? "bg-black text-white shadow-md border-black"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  aria-pressed={selectedSize === size}
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Color</h4>
            <div className="flex items-center gap-2">
              {product?.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-7 h-7 rounded-full border-2 border-white shadow-sm cursor-pointer transition-all duration-200
                    ${colorClasses[color]} ${
                    selectedColor === color
                      ? "ring-2 ring-offset-1 ring-blue-500"
                      : ""
                  }`}
                  aria-label={`Select ${color} color`}
                  aria-pressed={selectedColor === color}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Meta Info */}
        <div className="text-base text-gray-700 space-y-2 pt-4 border-t border-gray-200 mt-6">
          <div>
            <span className="font-semibold">SKU:</span> {product?.sku}
          </div>
          <div>
            <span className="font-semibold">Category:</span>
            {product?.category}
          </div>
          <div>
            <span className="font-semibold">Tags:</span>
            {product?.tags.join(", ")}
          </div>
        </div>
      </div>

      {/* Actions Section */}
      <div className="lg:col-span-1">
        <div className="w-full md:border md:border-gray-300 md:rounded-lg flex flex-col p-5 space-y-6 h-fit">
          <div className="border border-green-300 bg-green-50 text-green-700 px-4 py-3 rounded-lg flex items-center justify-center text-sm font-medium">
            Bank offer: Get 5% Off!
          </div>

          <div className="border border-gray-200 rounded-lg flex items-center p-4 space-x-4">
            <LuPackage size={24} className="text-gray-600 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">Easy Returns</span>
              <span className="text-sm text-gray-600">
                30 Days hassle-free return policy.
              </span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg flex items-center p-4 space-x-4">
            <LuPackage size={24} className="text-gray-600 flex-shrink-0" />{" "}
            {/* Reused icon for demo */}
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">
                Premium Quality
              </span>
              <span className="text-sm text-gray-600">
                Experience superior comfort and durability.
              </span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg flex flex-col p-5 mt-auto">
            {" "}
            {/* mt-auto to push to bottom */}
            <div className="border-b border-gray-200 w-full pb-3 mb-3 text-center text-sm text-green-600 font-semibold">
              You will save ₹{savings.toFixed(2)} on this order!
            </div>
            <div className="w-full font-bold flex items-center justify-between">
              <h2 className="text-lg text-gray-800">Total</h2>
              <h2 className="text-2xl text-gray-900">
                ₹{(product?.salePrice * quantity).toFixed(2)}
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              dispatch(addToWishlist(product?._id));
            }}
            className="w-full bg-gray-100 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 mt-3 cursor-pointer"
          >
            Add To Wishlist
          </button>
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 "
          >
            {loading ? <BtnLoader /> : "Add To Cart"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DefaultDetailsSection;
