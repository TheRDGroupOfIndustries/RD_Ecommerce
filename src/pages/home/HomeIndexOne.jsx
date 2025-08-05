import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {
  HeroSection,
  MostPopularProduct,
  ProductCard,
  ShirtHoverCard,
  SponsoredSection,
  SummerCollectionBanner,
  UserViewsSection,
} from "../../components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Star } from "lucide-react";
import { getBlockbusterDeals } from "../../services/productService";
import toast from "react-hot-toast";

const products = [
  {
    id: 1,
    title: "Cozy Knit Cardigan Sweater",
    originalPrice: 80,
    price: 95,
    discount: "GET 20% OFF",
    image: "/banner-media.webp",
    category: "Outerwear",
  },
  {
    id: 2,
    title: "Sophisticated Swagger Suit",
    originalPrice: 70,
    price: 95,
    discount: "GET 10% OFF",
    image: "/banner-media2.webp",
    category: "Tops",
  },
  {
    id: 3,
    title: "Classic Denim Skinny Jeans",
    originalPrice: 50,
    price: 95,
    discount: "GET 15% OFF",
    image: "/banner-media3.webp",
    category: "Dresses",
  },
  {
    id: 4,
    title: "Athletic Mesh Sports Leggings",
    originalPrice: 30,
    price: 95,
    discount: "GET 40% OFF",
    image: "/banner-media5.webp",
    category: "Jacket",
  },
  {
    id: 1,
    title: "Cozy Knit Cardigan Sweater",
    originalPrice: 80,
    price: 95,
    discount: "GET 20% OFF",
    image: "/banner-media.webp",
    category: "Outerwear",
  },
  {
    id: 2,
    title: "Sophisticated Swagger Suit",
    originalPrice: 70,
    price: 95,
    discount: "GET 10% OFF",
    image: "/banner-media2.webp",
    category: "Tops",
  },
  {
    id: 3,
    title: "Classic Denim Skinny Jeans",
    originalPrice: 50,
    price: 95,
    discount: "GET 15% OFF",
    image: "/banner-media3.webp",
    category: "Dresses",
  },
  {
    id: 4,
    title: "Athletic Mesh Sports Leggings",
    originalPrice: 30,
    price: 95,
    discount: "GET 40% OFF",
    image: "/banner-media5.webp",
    category: "Jacket",
  },
];

const featuredCategoriesData = [
  { image: "/shirts.webp", title: "shirts" },
  { image: "/shorts.webp", title: "shorts" },
  { image: "/tshirts.webp", title: "t-shirts" },
  { image: "/jeans.webp", title: "jeans" },
];


const featuredItems = [
  {
    title: "Cozy Knit Cardigan Sweater",
    price: 80,
    oldPrice: 95,
    discountText: "Up to 40% Off",
    reviews: "2k Review",
    image: "/banner-media.webp",
    bg: "bg-[#d7c7e7]",
  },
  {
    title: "Sophisticated Swagger Suit",
    price: 80,
    oldPrice: 95,
    discountText: "Up to 40% Off",
    reviews: "2k Review",
    image: "/banner-media2.webp",
    bg: "bg-[#f0cfc4]",
  },
  {
    title: "Classic Denim Skinny Jeans",
    price: 80,
    oldPrice: 95,
    discountText: "Up to 40% Off",
    reviews: "2k Review",
    image: "/banner-media3.webp",
    bg: "bg-[#f3f3f3]",
  },
];

const featuredOffers = [
  {
    title: "LUXURY BRAS",
    discount: "20% OFF",
    image: "/banner-media2.webp",
    bg: "bg-[#e3e1de]",
  },
  {
    title: "SUMMER 2024",
    discount: "SALE UP TO 50% OFF",
    image: "/banner-media3.webp",
    bg: "bg-[#f4dada]",
  },
  {
    title: "SWIMWEAR SALE",
    discount: "20% OFF",
    image: "/banner-media4.webp",
    bg: "bg-[#f7d6b9]",
  },
];

const posts = [
  {
    date: "19 FEB 2025",
    title: "Dress to Impress: Elevate Your Everyday Style",
    image: "/posts/1.webp",
  },
  {
    date: "21 FEB 2025",
    title: "Street Style Safari: Global Fashion Influences",
    image: "/posts/2.webp",
  },
  {
    date: "25 FEB 2025",
    title: "Fashion & Beauty Fusion: The Ultimate Style Guide",
    image: "/posts/3.webp",
  },
  {
    date: "14 FEB 2025",
    title: "Style Diaries: Fashion",
    image: "/posts/4.webp",
  },
];

const HomeIndexOne = () => {
  const blocbosterSliderSetting = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const FeaturedSliderSetting = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const featuresNowSliderSetting = {
    infinite: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const postSliderSetting = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
    ],
  };

  const [blockbusterDeals, setBlockbusterDeals] = useState([]);

  const fetchBlockbusterDeals = async () => {
    const res = await getBlockbusterDeals();
    if (res) {
      console.log("Blockbuster Deals: ---", res);

      setBlockbusterDeals(res);
    } else {
      toast.error("Failed to fetch blockbuster deals");
    }
  };

  useEffect(() => {
    fetchBlockbusterDeals();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <section className="w-full flex flex-col lg:flex-row ">
        <div className="w-full lg:w-[70%] h-full bg-[#FEEB9D] relative">
          <img
            src="/download.svg"
            alt="wave"
            className="absolute top-0 left-10 w-40 lg:w-80"
          />
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-10
           items-center w-full justify-between p-10 lg:pl-20 lg:pr-32 lg:py-20"
          >
            {featuredCategoriesData.map((item) => (
              <div
                key={`${item.title}aksdhk`}
                className="text-center space-y-10"
              >
                <img src={item.image} alt={item.title} className="h-[180px] " />
                <button className="capitalize rounded-full border-[1px] border-black px-4 py-2 bg-white cursor-pointer ">
                  {item.title}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full hidden md:block lg:w-[30%] bg-black relative">
          {/* <div className="rotating-circle bg-white rounded-full hidden lg:block absolute top-1/2 -translate-1/2 left-0 ">
            <svg viewBox="0 0 200 200" className="rotating-text font-semibold">
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                />
              </defs>
              <text font-size="16" fill="black" letter-spacing="4">
                <textPath href="#circlePath" startOffset="0%" className="">
                  MORE COLLECTION • MORE COLLECTION •
                </textPath>
              </text>
            </svg>

            <div className="center-arrow">
              <span className=""><FaArrowLeftLong/></span>
            </div>
          </div> */}

          <div className="p-10 lg:p-28 space-y-4">
            <h1 className="text-3xl font-semibold text-white ">
              Featured Categories
            </h1>
            <p className="text-sm text-white">
              Discover the most trending products in Pixio.
            </p>
            <div className="">
              <button variant={"link"}>
                <FaArrowLeftLong color="white" />
              </button>
              <button variant={"link"}>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FFFCF5] px-6 md:px-16 py-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 overflow-hidden">
          <img
            src="/women.webp"
            alt="Woman Fashion"
            className="w-full h-full object-cover"
          />
          <Link to={"/shop-standard"} className="absolute bottom-4 left-4 px-6 py-2 bg-white border border-black rounded-full font-semibold text-black shadow">
            Woman Collection
          </Link>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
              Set Your Wardrobe With Our <br /> Amazing Selection!
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the...
            </p>
          </div>

          {/* Category Cards */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Child Fashion */}
            <div className="relative w-full h-[350px] overflow-hidden rounded-3xl">
              <img
                src="/child-fashion.webp"
                alt="Child Fashion"
                className="w-full h-full object-cover"
              />
              <Link to={"/shop-standard"}  className="absolute bottom-4 left-4 px-5 py-2 bg-white border border-black rounded-full font-semibold text-black shadow">
                Child Fashion
              </Link>
            </div>

            {/* Man Collection */}
            <div className="relative w-full  h-[350px] overflow-hidden rounded-3xl">
              <img
                src="/mens-fashion.webp"
                alt="Man Collection"
                className="w-full h-full object-cover"
              />
              {/* 50% Sale Badge */}
              <div className="absolute top-3 right-3 bg-[#FEEB9D] text-black font-semibold px-4 py-1 rounded-full shadow-md text-sm z-10">
                50% Sale
              </div>
              <Link to={"/shop-standard"}  className="absolute bottom-4 left-4 px-5 py-2 bg-white border border-black rounded-full font-semibold text-black shadow">
                Man Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MostPopularProduct />

      <SummerCollectionBanner />

      <UserViewsSection />

      <section className="w-full bg-[#fdf7ef] px-4 md:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-32">
          {/* LEFT: Products */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {products.slice(0, 4).map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl px-2 py-1 flex justify-between shadow border">
                  <div className="">
                    <span className={`text-sm font-medium ${item.tagColor}`}>
                      {item.discount}
                    </span>
                    <p className="text-black font-medium line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                  <div className="">
                    <span className="font-bold text-black">₹{item.price}</span>
                    <div className="text-gray-400 text-sm line-through">
                      ₹{item.originalPrice}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Star Badge */}
            <div className="absolute top-[-15px] right-[-15px]">
              <div className="w-24 h-24 bg-yellow-300 text-black text-sm font-semibold rounded-full shadow flex items-center justify-center rotate-12">
                50% Sale
              </div>
            </div>
          </div>

          {/* RIGHT: Banner */}
          <div
            className="relative h-full rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(/great-saving-bg.webp)`,
            }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
              <h2 className="text-5xl font-bold text-center">
                Great Saving On <br /> Everyday Essentials
              </h2>
              <p className="mt-2 text-sm text-center">
                Up To 60% Off + Up To ₹107 CashBACK
              </p>
              <Link to={"/shop-standard"}  className="bg-white text-black font-semibold px-10 py-2 mt-5 rounded-md">
                SEE ALL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blockbuster deals */}
      <section className="bg-[#fdf7ef] px-4 md:px-20 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Blockbuster Deals</h2>
          <Link to={"/shop-standard"}  className="text-sm font-medium hover:underline flex items-center gap-1">
            See All Deals <span>➜</span>
          </Link>
        </div>

        {/* {blockbusterDeals.length > 0 && ( */}
        <Slider {...blocbosterSliderSetting}>
          {blockbusterDeals.length > 0 ? (
            blockbusterDeals.map((product) => (
              <ShirtHoverCard product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No blockbuster deals available at the moment.
            </p>
          )}
        </Slider>
        {/* )} */}
      </section>

      {/* Featured Offer For You */}
      <section className="bg-[#fdf7ef] px-4 md:px-10 lg:px-20 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Offer For You</h2>
          <Link to={"/shop-standard"}  className="text-sm font-medium hover:underline flex items-center gap-1">
            See All <span>➜</span>
          </Link>
        </div>

        <Slider {...FeaturedSliderSetting}>
          {featuredOffers.map((item, i) => (
            <div key={i} className="p-2">
              <div
                className={`${item.bg} rounded-2xl overflow-hidden relative h-[360px] flex items-end p-6`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute top-6 left-6 bg-white text-sm font-bold px-4 py-1 rounded-sm shadow">
                  {item.discount}
                </div>
                <div className="relative z-10 text-black max-w-[60%]">
                  <h3 className="text-3xl font-bold leading-tight mb-4">
                    {item.title}
                  </h3>
                  <Link to={"/shop-standard"} className="border-2 border-black px-4 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
                    Collect Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="bg-[#fdf7ef] px-4 md:px-10 lg:px-20 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Now</h2>
          <Link to={"/shop-standard"}  className="text-sm font-medium hover:underline flex items-center gap-1">
            See All <span>➜</span>
          </Link>
        </div>

        <Slider {...featuresNowSliderSetting}>
          {featuredItems.map((item, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-white shadow rounded-xl border border-black/20 overflow-hidden flex items-center gap-4 px-4 py-6">
                <div
                  className={`w-32 h-32 rounded-xl overflow-hidden shrink-0 flex items-center justify-center ${item.bg}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-col justify-between text-left">
                  <h3 className="text-2xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm text-red-500 font-medium">
                    {item.discountText}
                  </p>
                  <div className="flex items-center gap-3 text-base">
                    <span className="font-bold">₹{item.price}</span>
                    <span className="line-through text-gray-400 text-sm">
                      ₹{item.oldPrice}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-500" />
                      ({item.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="w-full bg-[#fdf7ef] px-4 md:px-10 lg:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* LEFT: Products */}
          <div
            className="relative h-full rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(/great-saving-bg.webp)`,
            }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
              <h2 className="text-5xl font-bold text-center">
                Recent Adiitions To <br /> Tour Shortlist
              </h2>
              <p className="mt-2 text-sm text-center">
                Up To 60% Off + Up To ₹107 CashBACK
              </p>
              <Link to={"/shop-standard"}  className="bg-white text-black font-semibold px-10 py-2 mt-5 rounded-md">
                SEE ALL
              </Link>
            </div>
          </div>

          {/* RIGHT: Banner */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {products.slice(0, 4).map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl px-2 py-1 flex justify-between shadow border">
                  <div className="">
                    <span className={`text-sm font-medium ${item.tagColor}`}>
                      {item.discount}
                    </span>
                    <p className="text-black font-medium line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                  <div className="">
                    <span className="font-bold text-black">₹{item.price}</span>
                    <div className="text-gray-400 text-sm line-through">
                      ₹{item.originalPrice}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Star Badge */}
            <div className="absolute top-[-15px] right-[-15px]">
              <div className="w-24 h-24 bg-yellow-300 text-black text-sm font-semibold rounded-full shadow flex items-center justify-center rotate-12">
                50% Sale
              </div>
            </div>
          </div>
        </div>
      </section>

      <SponsoredSection />

      <section className=" py-10 px-4 md:px-10 lg:px-20">
        <div className=" mx-auto">
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Discover The Most Trending Post In Pixio.
            </h2>
          </div>

          <Slider {...postSliderSetting}>
            {posts.map((post, index) => (
              <div key={index} className="px-2">
                {" "}
                {/* Added padding for spacing between cards */}
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[450px] object-cover" // Adjust height as needed
                  />
                  <div className="absolute top-4 left-4 bg-white text-gray-800 text-sm px-3 py-1 rounded-full font-semibold">
                    {post.date}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent text-white">
                    <h3 className="text-xl font-semibold mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <Link to={"/shop-standard"}  className="absolute bottom-6 right-6 p-3 rounded-full bg-white text-gray-800 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 15.707a1 1 0 010-1.414L14.586 10H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="relative bg-[#FFFBF7] h-[600px] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
        {/* Background Text Overlay - Needs a way to handle large text dynamically or as SVG/image */}
        {/* For simplicity, I'm using a large, semi-transparent text element. 
          You might want to use an SVG or a background image for better control
          and responsiveness of the "COLLECTIONS" text in the background. */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="text-gray-100 text-[18vw] font-extrabold opacity-70 leading-none tracking-widest uppercase select-none">
            COLLECTIONS
          </span>
        </div>

        {/* Floating Images */}
        <img
          src="/banner-media5.webp"
          alt="Collection Image 1"
          className="absolute top-10 left-5 sm:left-20 lg:left-40 w-36 h-48 sm:w-48 sm:h-64 lg:w-56 lg:h-72 object-cover rounded-md shadow-lg transform rotate-[-5deg] z-10 "
        />
        <img
          src="/banner-media4.webp"
          alt="Collection Image 2"
          className="absolute top-10 right-5 sm:right-20 lg:right-40 w-36 h-48 sm:w-48 sm:h-64 lg:w-56 lg:h-72 object-cover rounded-md shadow-lg transform rotate-[5deg] z-10"
        />
        <img
          src="/banner-media3.webp"
          alt="Collection Image 3"
          className="absolute top-10 left-[30%] sm:left-[35%] w-36 h-24 sm:w-48 sm:h-32 object-cover rounded-md shadow-lg transform rotate-[2deg] z-10"
        />
        <img
          src="/banner-media2.webp"
          alt="Collection Image 4"
          className="absolute bottom-10 left-5 sm:left-20 lg:left-40 w-36 h-48 sm:w-48 sm:h-64 lg:w-56 lg:h-72 object-cover rounded-md shadow-lg transform rotate-[3deg] z-10"
        />
        <img
          src="/banner-media.webp"
          alt="Collection Image 5"
          className="absolute bottom-10 right-5 sm:right-20 lg:right-40 w-36 h-48 sm:w-48 sm:h-64 lg:w-56 lg:h-72 object-cover rounded-md shadow-lg transform rotate-[-4deg] z-10"
        />

        {/* Main Content (Heading and Button) */}
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Upgrade Your Style With Our Top-Notch Collection.
          </h2>
          <Link to={"/shop-standard"}  className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300">
            All Collections
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button (if applicable, same as previous section) */}
      <div className="fixed bottom-8 right-8 z-30">
        <button
          onClick={scrollToTop}
          className="p-4 rounded-full bg-gray-800 text-white shadow-lg cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default HomeIndexOne;
