import React from "react";
import Slider from "react-slick";
import { Heart, ShoppingCart } from "lucide-react"; // Assuming these are used within ProductCard
import ProductCard from "./ProductCard"; // Ensure this path is correct
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { products } from "../store/data"; // Ensure this path is correct and data is structured as expected

// Import slick carousel CSS. Make sure these are in your main App.js or index.js
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-20px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 z-10 
                 bg-gray-800 text-white h-10 w-10 rounded-full 
                 hover:bg-gray-900 transition-colors duration-200 shadow-md
                 hidden md:flex items-center justify-center" // Hidden on small, flex on md and up
      aria-label="Next Slide"
    >
      <MdArrowForwardIos size={28} />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-[-20px] lg:left-[-50px] top-1/2 transform -translate-y-1/2 z-10 
                 bg-gray-800 text-white h-10 w-10 rounded-full 
                 hover:bg-gray-900 transition-colors duration-200 shadow-md
                 hidden md:flex items-center justify-center" // Hidden on small, flex on md and up
      aria-label="Previous Slide"
    >
      <MdArrowBackIos size={28} />
    </button>
  );
};

const RelatedProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable custom arrows
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200, // Example breakpoint for slightly smaller desktops
        settings: {
          slidesToShow: 3, // Show 3 products on larger desktops/laptops
        },
      },
      {
        breakpoint: 992, // Typical tablet breakpoint
        settings: {
          slidesToShow: 2, // Show 2 products on tablets
        },
      },
      {
        breakpoint: 576, // Typical mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 product on small mobile devices
          arrows: false, // Hide arrows on very small screens, rely on swipe
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
      <div className="flex justify-between items-center mb-6"> {/* Increased bottom margin */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Related Products</h2>
        <a
          href="#"
          className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800 transition-colors duration-200"
          aria-label="See all related products"
        >
          See All Products <span className="text-lg">→</span>
        </a>
      </div>

      <div className="relative"> {/* Added relative for arrow positioning */}
        {products.length === 0 ? (
          <p className="text-center text-gray-600 py-10">No related products available.</p>
        ) : (
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-2"> {/* Added horizontal padding here for gap */}
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;