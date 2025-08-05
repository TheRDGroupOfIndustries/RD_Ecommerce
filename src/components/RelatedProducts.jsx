import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { getProducts } from "../services/productService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileProductCard from "./MobileProductCard";
import toast from "react-hot-toast";

const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-20px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 z-10 
                 bg-gray-800 text-white h-10 w-10 rounded-full 
                 hover:bg-gray-900 transition-colors duration-200 shadow-md
                 hidden md:flex items-center justify-center"
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
                 hidden md:flex items-center justify-center"
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const [relatedProducts, setRelatedProducts] = useState([]);

  const fetchRelatedProducts = async () => {
    const res = await getProducts({});
    if (res) {
      setRelatedProducts(res.slice(0, 8));
    } else {
      toast.error("Failed to fetch related products");
    }
  };

  useEffect(() => {
    fetchRelatedProducts();
  }, []);

  return (
    <section className="container mx-auto px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Related Products
        </h2>
        <Link
          to="/shop-standard"
          className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800 transition-colors duration-200"
          aria-label="See all related products"
        >
          See All Products <span className="text-lg">→</span>
        </Link>
      </div>

      <div className="relative">
        {relatedProducts.length === 0 ? (
          <p className="text-center text-gray-600 py-10">
            No related products available.
          </p>
        ) : (
          <Slider {...settings}>
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="px-2"
              >
                <MobileProductCard product={product} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;
