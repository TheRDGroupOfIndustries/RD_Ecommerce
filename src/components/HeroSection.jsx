import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const leftSliderRef = useRef(null);
  const rightSliderRef = useRef(null);

  // 🔁 Sync sliders using `asNavFor`
  const [nav1, setNav1] = useState(undefined);
  const [nav2, setNav2] = useState(undefined);

  const handleNext = () => {
    leftSliderRef.current?.slickNext();
    rightSliderRef.current?.slickNext();
  };

  const imageSliderSettings = {
    asNavFor: nav1,
    ref: (slider) => {
      rightSliderRef.current = slider;
      setNav2(slider ?? undefined);
    },
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setActiveIndex(current),
  };

  const leftSliderSettings = {
    asNavFor: nav2,
    ref: (slider) => {
      leftSliderRef.current = slider;
      setNav1(slider ?? undefined);
    },
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const leftSliderDetails = [
    { title: "Beautiful Women Purple Sweater", price: "30.00" },
    { title: "Shot Slad Curly Women", price: "80.00" },
    { title: "Curly Girl Beautiful Dress", price: "30.00" },
    { title: "Shot Slad Curly Women", price: "80.00" },
    { title: "Curly Girl Beautiful Dress", price: "30.00" },
  ];

  const rightSlideDetails = [
    { image: "/banner-media.webp", text: "winter" },
    { image: "/banner-media2.webp", text: "summer" },
    { image: "/banner-media3.webp", text: "leggings" },
    { image: "/banner-media4.webp", text: "dress" },
    { image: "/banner-media5.webp", text: "shorts" },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row px-4 md:px-20 py-10 md:py-20 relative">
      {/* Left Slider */}
      <div className="w-full md:w-1/2 h-full">
        <Slider {...leftSliderSettings}>
          {leftSliderDetails.map((item, index) => (
            <div
              key={item.title + index}
              className="w-full h-[250px] md:h-[400px] p-2 md:p-4 space-y-10"
            >
              <h1 className="text-black text-3xl md:text-7xl font-bold">
                {item.title}
              </h1>
              <div className="">
                <p>Price</p>
                <span className="text-3xl md:text-5xl font-bold">
                  ${item.price}
                </span>
              </div>
              <div className="w-full flex flex-row gap-4 -5 ">
                <button className=" px-6 py-3 bg-black rounded-lg text-white cursor-pointer">ADD TO CART</button>
                <button className=" px-6 py-2 border rounded-lg cursor-pointer">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex gap-4 items-center p-2 md:p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
          >
            <path
              d="M52.6617 37.6496L58.7381 40.0325L75.0609 49.0874L66.6016 63.7422L49.9214 54.6872L45.1557 50.7554L46.1088 57.1892V75.18H28.952V57.1892L30.0243 50.5171L24.9011 54.6872L8.45924 63.7422L0 49.0874L16.3228 39.7942L22.3991 37.6496L16.3228 35.1475L0 26.2117L8.45924 11.557L25.1394 20.4928L30.0243 24.6629L28.952 18.3482V0H46.1088V18.3482L45.1557 24.4246L49.9214 20.4928L66.6016 11.557L75.0609 26.2117L58.7381 35.3858L52.6617 37.6496Z"
              fill="black"
            />
          </svg>
          <div className="space-y-1 md:space-y-2">
            <p className="text-sm md:text-base">Summer Collection</p>
            <h2 className="uppercase text-lg md:text-xl font-bold leading-tight">
              Trendy and Classic <br /> for the New Season
            </h2>
          </div>
        </div>
      </div>

      {/* Right Image Slider */}
      <div className="w-full md:w-1/2 h-full ">
        <div className="slider-container h-full overflow-hidden relative md:-right-10 ">
          <Slider {...imageSliderSettings}>
            {rightSlideDetails.map((item, index) => (
              <div
                key={item.image}
                className="w-full h-[400px] md:h-[550px] p-4 md:p-6 md:pl-20 transition-all duration-500"
              >
                <div className="relative h-full flex items-center justify-center">
                  {/* {activeIndex !== index && (
                <h2 className="uppercase stroke text-3xl md:text-7xl absolute top-1/2 -left-20 md:-left-40 -translate-y-1/2 -rotate-90 z-30 font-bold text-white">
                  {item.text}
                </h2>
              )} */}
                  <img
                    src={item.image}
                    alt="Banner image"
                    className={`${
                      activeIndex === index ? "scale-150" : "scale-100"
                    } transition-all duration-300 rounded-xl z-10 relative`}
                  />
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Next Button */}
          <div
            onClick={handleNext}
            className="w-16 h-16 md:w-20 md:h-20 bg-base-ground rounded-full absolute bottom-10 md:bottom-20 left-1/2 transform flex items-center justify-center cursor-pointer"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-black text-white text-lg md:text-xl">
              ➤
            </div>
          </div>
        </div>
      </div>
      
      <svg
        className="star-1 absolute top-5 md:top-10 left-1/2 transform -translate-x-1/2 animate-star hidden lg:block"
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
        className="star-2 absolute top-5 md:top-10 left-[85%] animate-star hidden lg:block"
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

export default HeroSection;
