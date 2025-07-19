import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { MostPopularProduct, SponsoredSection, SummerCollectionBanner, UserViewsSection } from "../../components";


const collectionData = [
  {
    title: "WOMAN DRESS",
    image: "/banner-media.webp",
    borderRadius: "rounded-[80px]",
  },
  {
    title: "WOMAN TOP",
    image: "/banner-media2.webp",
    borderRadius: "rounded-full",
  },
  {
    title: "WOMAN DRESS",
    image: "/banner-media3.webp",
    borderRadius: "rounded-[50px]",
  },
  {
    title: "WOMAN DRESS",
    image: "/banner-media5.webp",
    borderRadius: "rounded-[60px]",
  },
];

const HomeIndexThree = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch bg-gray-100 font-inter">
        {/* Left side */}
        <div className="w-full lg:w-[60%] h-full p-8 lg:pl-28 lg:py-20 flex flex-col justify-between relative">
          <div className="relative space-y-6 md:space-y-10 z-20 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold capitalize leading-tight">
              Make your fashion look more charming
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700">
              Sell globally in minutes with localized currencies, languages, and experiences in every market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button className="px-8 py-3 md:px-10 md:py-4 bg-black rounded-lg text-white font-semibold hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
                ADD TO CART
              </button>
              <button className="px-8 py-3 md:px-10 md:py-4 bg-black rounded-lg text-white font-semibold hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
                VIEW DETAILS
              </button>
            </div>
          </div>

          {/* Product Cards Section */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center lg:justify-start mt-10 flex-shrink-0">
            {/* Product Card 1 */}
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md w-full md:w-auto">
              <div className="bg-white rounded-full h-24 w-24 md:h-32 md:w-32 flex flex-shrink-0 items-center justify-center border-2 border-red-600 relative">
                <div className="absolute -top-2 -right-2 rounded-full bg-red-600 text-white flex items-center justify-center p-1.5">
                  <FaPlus size={16} />
                </div>
                <img src="/shirts/1.webp" alt="Collar Casual Shirt" className="h-16 md:h-20 object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-semibold">Collar Casual Shirt</h2>
                <h3>
                  <span className="text-red-600 font-bold text-xl">$19</span>{" "}
                  <span className="line-through text-gray-500 text-base md:text-lg">$27</span>
                </h3>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md w-full md:w-auto">
              <div className="bg-white rounded-full h-24 w-24 md:h-32 md:w-32 flex flex-shrink-0 items-center justify-center border-2 border-red-600 relative">
                <div className="absolute -top-2 -right-2 rounded-full bg-red-600 text-white flex items-center justify-center p-1.5">
                  <FaPlus size={16} />
                </div>
                <img src="/shirts/3.webp" alt="Collar Casual Shirt" className="h-16 md:h-20 object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-semibold">Collar Casual Shirt</h2>
                <h3>
                  <span className="text-red-600 font-bold text-xl">$19</span>{" "}
                  <span className="line-through text-gray-500 text-base md:text-lg">$27</span>
                </h3>
              </div>
            </div>
          </div>

          {/* Absolute positioned image - hidden on small screens, adjusted for larger */}
          <div className="hidden lg:block h-40 w-40 overflow-hidden rounded-full absolute top-6 left-20 z-10 ">
            <img src="/banner-media2.webp" alt="" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-[40%] h-full p-8 flex items-center justify-center">
          <div className="rounded-full overflow-hidden p-4 bg-white shadow-xl max-w-sm w-full">
            <img
              src="/banner-media3.webp"
              alt="Fashion Model"
              className="object-cover rounded-full w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Discover Latest Collection Section */}
      <section className="bg-[#FEEB9D] w-full h-full p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row relative font-inter">
        {/* Left side image */}
        <div className="w-full lg:w-[30%] bg-gray-400 rounded-xl overflow-hidden z-10 mb-8 lg:mb-0 lg:mr-8 shadow-lg">
          <img src="/pic8.webp" alt="Latest Collection" className="object-cover w-full h-full" />
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-[70%] px-0 md:px-4 lg:px-10">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center sm:text-left mb-4 sm:mb-0">Discover Latest Collection</h2>
            <button className="bg-white rounded-full p-3 md:p-4 shadow-lg text-lg md:text-xl flex-shrink-0 hover:scale-105 transition duration-300">
              <FiArrowUpRight />
            </button>
          </div>

          {/* Slider for collections */}
          <Slider ref={sliderRef} {...settings}>
            {collectionData.map((item, index) => (
              <div key={index} className="px-2 md:px-4">
                <div className={`relative group overflow-hidden ${item.borderRadius} shadow-lg`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 transition-opacity duration-300">
                    <button className="bg-white px-5 py-2 md:px-6 md:py-2.5 font-semibold rounded-xl whitespace-nowrap text-sm md:text-base shadow-md hover:bg-gray-100">
                      {item.title}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Arrows */}
          <div className="flex justify-center lg:justify-end mt-8 md:mt-10 gap-4 md:gap-6 text-xl px-0 md:px-10">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition duration-300"
              aria-label="Previous slide"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition duration-300"
              aria-label="Next slide"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Absolute positioned circle - hidden on small screens, adjusted for larger */}
        <div className="hidden lg:block h-[200px] w-[200px] md:h-[300px] md:w-[300px] bg-yellow-300 rounded-full absolute top-1/2 -translate-y-1/2 left-0 z-0 opacity-50"></div>
      </section>

      {/* Other Sections (assuming they are already responsive or will be made so) */}
      <MostPopularProduct />
      <SummerCollectionBanner />
      <UserViewsSection />
      <SponsoredSection />
    </>
  );
};

export default HomeIndexThree;
