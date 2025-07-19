import React from "react";
import Slider from "react-slick";
import { Heart, ShoppingCart } from "lucide-react";
import ProductCard from "./ProductCard";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { products } from "../store/data";

const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-10 bg-black text-white h-10 w-10 rounded-full hover:bg-gray-800 flex items-center justify-center"
    >
      <MdArrowForwardIos size={28} />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10 bg-black text-white h-10 w-10 rounded-full hover:bg-gray-800 flex items-center justify-center"
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className=" px-20 py-10">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <a href="#" className="text-black font-medium flex items-center gap-1">
          See All Products <span className="text-lg">→</span>
        </a>
      </div>

      <div className=" p-5">
        <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
};

export default RelatedProducts;
