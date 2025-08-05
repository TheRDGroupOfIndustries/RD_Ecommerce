import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getHomeBanners } from "../services/productService";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../store/cartSlice";
import toast from "react-hot-toast";

export default function App() {
  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen">
      <HeroSection />
    </div>
  );
}

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [banners, setBanners] = useState([]);
  const { isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const leftSliderRef = useRef(null);
  const rightSliderRef = useRef(null);

  const [nav1, setNav1] = useState(undefined);
  const [nav2, setNav2] = useState(undefined);

  useEffect(() => {
    setNav1(leftSliderRef.current || undefined);
    setNav2(rightSliderRef.current || undefined);
  }, []);

  const handleNext = () => {
    leftSliderRef.current?.slickNext();
    rightSliderRef.current?.slickNext();
  };

  const fetchBanners = async () => {
    const res = await getHomeBanners();
    setBanners(res);
    console.log(res);
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleAddToCart = (id) => {
    if(!isAuthenticated) return toast.error("Please login to add product to cart");
    dispatch(addProductToCart({productId: id, quantity: 1}));
  }

  const imageSliderSettings = {
    asNavFor: nav1,
    ref: (slider) => (rightSliderRef.current = slider),
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setActiveIndex(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const leftSliderSettings = {
    asNavFor: nav2,
    ref: (slider) => (leftSliderRef.current = slider),
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };


  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row px-4 md:px-20 py-10 md:py-20 relative overflow-hidden gap-5">
      {/* Left Slider - Product Details */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
        {banners?.length != 0 && (
          <Slider {...leftSliderSettings}>
            {banners.map((item) => (
              <div
                key={item._id}
                className="w-full h-[300px] md:h-[400px] p-2 md:p-4 space-y-4 md:space-y-6 flex flex-col justify-center"
              >
                <h1 className="text-black text-3xl md:text-7xl font-bold leading-tight capitalize">
                  {item.title}
                </h1>
                <div>
                  <p className="text-lg md:text-xl text-gray-700">Price</p>
                  <span className="text-3xl md:text-5xl font-bold text-black">
                    ₹{item.salePrice}
                  </span>
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className="px-6 py-3 bg-black rounded-lg text-white text-base font-medium hover:bg-gray-800 transition-colors duration-300 shadow-md cursor-pointer"
                  >
                    ADD TO CART
                  </button>
                  <Link
                    to={`/product-default/${item._id}`}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-black text-base font-medium hover:bg-gray-100 transition-colors duration-300 shadow-md"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        )}
        {/* Additional Info Section */}
        <div className="flex gap-4 items-center p-2 md:p-4 mt-8 md:mt-12 bg-white rounded-lg shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            className="w-16 h-16 md:w-auto md:h-auto"
          >
            <path
              d="M52.6617 37.6496L58.7381 40.0325L75.0609 49.0874L66.6016 63.7422L49.9214 54.6872L45.1557 50.7554L46.1088 57.1892V75.18H28.952V57.1892L30.0243 50.5171L24.9011 54.6872L8.45924 63.7422L0 49.0874L16.3228 39.7942L22.3991 37.6496L16.3228 35.1475L0 26.2117L8.45924 11.557L25.1394 20.4928L30.0243 24.6629L28.952 18.3482V0H46.1088V18.3482L45.1557 24.4246L49.9214 20.4928L66.6016 11.557L75.0609 26.2117L58.7381 35.3858L52.6617 37.6496Z"
              fill="black"
            />
          </svg>
          <div className="space-y-1 md:space-y-2">
            <p className="text-sm md:text-base text-gray-600">
              Summer Collection
            </p>
            <h2 className="uppercase text-lg md:text-xl font-bold leading-tight text-black">
              Trendy and Classic <br /> for the New Season
            </h2>
          </div>
        </div>
      </div>

      {/* Right Image Slider */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
        <div className="slider-container w-full h-full overflow-hidden relative md:-right-10 flex items-center">
          {banners.length != 0 && (
            <Slider {...imageSliderSettings} className="w-full">
              {banners.map((item, index) => (
                <div
                  key={item._id}
                  className="w-full h-[400px] md:h-[550px] p-2 md:p-6 transition-all duration-500 flex items-center justify-center"
                >
                  <div className="relative h-full flex items-center justify-center w-full">
                    <img
                      src={item.images[0]}
                      alt="Banner image"
                      className={`${
                        activeIndex === index
                          ? "scale-110 md:scale-120"
                          : "scale-100"
                      } transition-all duration-300 rounded-xl z-10 relative object-cover w-full h-full shadow-lg`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/600x400/CCCCCC/666666?text=Image+Error";
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          )}

          {/* Custom Next Button */}
          <div
            onClick={handleNext}
            className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-full absolute bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-300 transition-colors duration-300 z-20"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-black text-white text-lg md:text-xl">
              ➤
            </div>
          </div>
        </div>
      </div>

      <svg
        className="star-1 absolute top-5 md:top-10 left-[10%] transform -translate-x-1/2 animate-pulse hidden lg:block"
        xmlns="http://www.w3.org/2000/svg"
        width="94"
        height="94"
        viewBox="0 0 94 94"
        fill="none"
      >
        <path
          d="M47 0L53.8701 30.4141L80.234 13.766L63.5859 40.1299L94 47L63.5859 53.8701L80.234 80.234L53.8701 63.5859L47 94L40.1299 63.5859L13.766 80.234L30.4141 53.8701L0 47L30.4141 40.1299L13.766 13.766L40.1299 30.4141L47 0Z"
          fill="#FEEB9D"
        />
      </svg>

      <svg
        className="star-2 absolute top-5 md:top-10 right-[10%] animate-pulse hidden lg:block"
        xmlns="http://www.w3.org/2000/svg"
        width="82"
        height="94"
        viewBox="0 0 82 94"
        fill="none"
      >
        <path
          d="M41 0L45.277 39.592L81.7032 23.5L49.554 47L81.7032 70.5L45.277 54.408L41 94L36.723 54.408L0.296806 70.5L32.446 47L0.296806 23.5L36.723 39.592L41 0Z"
          fill="black"
        />
      </svg>
    </section>
  );
};
