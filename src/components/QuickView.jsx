import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

//  const product = {
//     id: "PRT584E63A",
//     name: "Cozy Knit Cardigan Sweater",
//     price: 125.75,
//     oldPrice: 132.17,
//     rating: 4.7,
//     reviews: 5,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     sku: "PRT584E63A",
//     category: "Dresses, Jeans, Swimwear, Summer, Clothing",
//     tags: "Casual, Athletic, Workwear, Accessories",
//     images: [
//       "/details/lady-1.webp",
//       "/details/lady-2.webp",
//       "/details/lady-3.webp",
//     ],
//     cartIcon: "/icons/cart-icon.svg",
//     heartIcon: "/icons/heart-icon.svg",
//     facebookIcon: "/icons/facebook.svg",
//     pinterestIcon: "/icons/pinterest.svg",
//     linkedinIcon: "/icons/linkedin.svg",
//     instagramIcon: "/icons/instagram.svg",
//   };

const QuickView = ({ product, setIsQuickViewOpen }) => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images[0]);
  const { isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    setMainImage(product.images[0]);
    setQuantity(1); // Reset quantity as well
  }, []);

  const handleClose = () => {
    setIsQuickViewOpen(false);
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error("Please login to add items to cart");
      return;
    }
    dispatch(addProductToCart({ productId: product._id, quantity }));
  };

  return (
    <div className="fixed inset-0 bg-black/35  flex justify-center items-center z-50 p-4">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl font-light leading-none z-10 cursor-pointer focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Image Section */}
        <div className="w-full md:w-2/5 p-6 flex flex-col items-center justify-center bg-gray-50">
          <div className="mb-4 w-full flex justify-center items-center">
            <img
              src={mainImage}
              alt={product.title}
              className="max-w-full h-auto max-h-96 object-contain rounded-md shadow"
            />
          </div>
          <div className="flex space-x-2">
            {product.images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                  mainImage === imgSrc
                    ? "border-blue-500"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => setMainImage(imgSrc)}
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-3/5 p-6 md:p-8">
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md mb-3 inline-block">
            SALE 20% OFF
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {product.title}
          </h2>

          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 text-lg mr-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>
                  {i < Math.floor(product.ratings) ? "★" : "☆"}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.ratings} Rating ({product.reviews_number} customer
              reviews)
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-blue-600 mr-2">
                ${product.salePrice.toFixed(2)}
              </span>
              <span className="text-lg text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center text-gray-800 focus:outline-none bg-white"
              />
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-3 mb-6 flex-wrap gap-y-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 min-w-[180px] px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              ADD TO CART
            </button>
            <Link to={`/product-default/${product._id}`} className="flex-1 min-w-[180px] px-6 py-3 border border-gray-300 text-gray-800 font-semibold rounded-md shadow-sm hover:bg-gray-50 transition duration-300 flex items-center justify-center space-x-2">
              View Details
            </Link>
          </div>

          <div className="text-sm text-gray-700 mb-6">
            <p className="mb-1">
              <strong className="text-gray-800">SKU:</strong> {product.sku}
            </p>
            <p className="mb-1">
              <strong className="text-gray-800">Category:</strong>{" "}
              {product.category}
            </p>
            <p>
              <strong className="text-gray-800">Tags:</strong>{" "}
              {product.tags.join(", ")}
            </p>
          </div>

          <div className="flex space-x-3">{/* Socila media links */}</div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
