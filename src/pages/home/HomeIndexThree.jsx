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
    image: "/banner-media4.webp",
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
    // dots: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    // appendDots: dots => (
    //   <div className="flex justify-center gap-4 mt-6">
    //     {dots}
    //   </div>
    // ),
    // customPaging: i => (
    //   <button className="text-sm text-gray-500 hover:text-black">{`0${i + 1}`}</button>
    // ),
  };
  return (
    <>
      <section className="w-full min-h-screen flex ">
        {/* left side */}
        <div className="w-[60%] h-full  pl-28 py-20 flex-col justify-between relative ">
          <div className=" relative space-y-10 z-20">
            <h1 className="text-7xl font-bold capitalize ">
              Make your fashion look mire charming
            </h1>
            <p className="text-2xl font-bold">
              Sell globally in minutes with localized currencies, languages, and
              experiences in every market.
            </p>
            <div className="flex gap-5 items-center justify-start">
              <button className="px-10 py-4 bg-black rounded-lg text-white">
                ADD TO CART
              </button>
              <button className="px-10 py-4 bg-black rounded-lg text-white">
                VIEW SETAILS
              </button>
            </div>
          </div>
          <div className="flex gap-10 items-center  mt-10 flex-shrink-0">
            <div className=" flex items-start gap-5 p-10">
              <div className=" bg-white rounded-full h-32 w-32 flex  flex-shrink-0 items-center justify-center border-2 border-red-600 relative">
                <div className="absolute top-0 right-0 rounded-full bg-red-600 flex items-center justify-center p-1">
                  <FaPlus size={20} />
                </div>
                <img src="/shirts/1.webp" alt="" className="h-20 " />
              </div>
              <div className="">
                <h2 className="text-2xl">Collar Casual Shirt</h2>
                <h3>
                  <span className="text-red-600">$19</span>{" "}
                  <span className="line-through text-black text-lg">$27</span>
                </h3>
              </div>
            </div>
            <div className=" flex items-start gap-5 p-10">
              <div className=" bg-white rounded-full h-32 w-32 flex  flex-shrink-0 items-center justify-center border-2 border-red-600 relative">
                <div className="absolute top-0 right-0 rounded-full bg-red-600 flex items-center justify-center p-1">
                  <FaPlus size={20} />
                </div>
                <img src="/shirts/1.webp" alt="" className="h-20 " />
              </div>
              <div className="">
                <h2 className="text-2xl">Collar Casual Shirt</h2>
                <h3>
                  <span className="text-red-600">$19</span>{" "}
                  <span className="line-through text-black text-lg">$27</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="h-40 w-40 overflow-hidden rounded-full absolute top-6 left-20 z-10 ">
            <img src="/banner-media.webp" alt="" className=" object-cover" />
          </div>
        </div>

        {/* right side */}
        <div className="w-[40%] h-full p-10">
          <div className="rounded-full overflow-hidden p-4 bg-white ">
            <img
              src="/banner-media3.webp"
              alt=""
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FEEB9D] w-full h-full p-20 flex relative">
        {/* left side */}
        <div className="w-[30%] bg-slate-400 rounded-xl overflow-hidden z-10">
          <img src="/pic8.webp" alt="" className="object-cover" />
        </div>

        {/* right side */}
        <div className="w-[70%] px-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold">Discover Latest Collection</h2>
            <button className="bg-white rounded-full p-4 shadow text-xl flex-shrink-0 ">
              <FiArrowUpRight />
            </button>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {collectionData.map((item, index) => (
              <div key={index} className="px-4">
                <div className="relative group rounded-t-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover`}
                  />
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                    <button className="bg-white px-6 py-2 font-semibold rounded-xl whitespace-nowrap">
                      {item.title}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Arrows */}
          <div className="flex justify-end mt-10 gap-6 text-xl px-10">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="hover:scale-110 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="hover:scale-110 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="h-[300px] w-[300px] bg-base-ground rounded-full absolute top-1/2 -translate-y-1/2 left-0 z-0"></div>
      </section>

      <MostPopularProduct />
      <SummerCollectionBanner/>
      <UserViewsSection />
      <SponsoredSection />
    </>
  );
};

export default HomeIndexThree;
