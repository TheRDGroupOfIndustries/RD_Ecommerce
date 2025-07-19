import Slider from "react-slick";
import { ProductCard } from "../../components";
import { useState } from "react";
import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";

const categorieList = [
  {
    name: "Jacket",
    image: "/index2/pic1.webp",
    bgColor: "bg-[#C7B0EB]", // Light purple from the image
  },
  {
    name: "Jeans",
    image: "/index2/pic2.webp",
    bgColor: "bg-[#F8A6B7]", // Pink from the image
  },
  {
    name: "Shirts",
    image: "/index2/pic3.webp",
    bgColor: "bg-[#ADD8E6]", // Light blue from the image
  },
  {
    name: "Shorts",
    image: "/index2/pic4.webp",
    bgColor: "bg-[#F8D6B7]", // Light yellow from the image
  },
  {
    name: "T-Shirt",
    image: "/index2/pic5.webp",
    bgColor: "bg-[#FFC107]", // Orange/Yellow from the image
  },
  {
    name: "Blazer",
    image: "/index2/pic6.webp",
    bgColor: "bg-[#C8A2C8]", // Darker pink/purple from the image
  },
];

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

const slider1Setting = {
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  slidesToShow: 4,
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

const commonLogos = [
  "/marquee/logo1.webp",
  "/marquee/logo2.webp",
  "/marquee/logo3.webp",
  "/marquee/logo4.webp",
  "/marquee/logo5.webp",
  "/marquee/logo6.webp",
  "/marquee/logo3.webp",
  "/marquee/logo4.webp",
];

const trendingPostsData = [
  {
    date: "19 FEB 2025",
    title: "Dress to Impress: Elevate Your Everyday Style",
    imageUrl: "/pic1.webp", // Replace with your image URL
  },
  {
    date: "21 FEB 2025",
    title: "Street Style Safari: Global Fashion Influences",
    imageUrl: "/pic2.webp", // Replace with your image URL
  },
  {
    date: "25 FEB 2025",
    title: "Fashion & Beauty Fusion: The Ultimate Style Guide",
    imageUrl: "/pic3.webp", // Replace with your image URL
  },
  {
    date: "14 FEB 2025",
    title: "Style Diaries: Fashion",
    imageUrl: "/pic4.webp", // Replace with your image URL
  },
  // Add more trending posts as needed
];

const instagramImages = [
  {
    id: 1,
    src: "/instagram/1.webp",
    alt: "Woman in yellow top and sunglasses",
  },
  {
    id: 2,
    src: "/instagram/2.webp",
    alt: "Woman with shopping bags and sunglasses",
  },
  {
    id: 3,
    src: "/instagram/3.webp",
    alt: "Group of happy women taking photo",
  },
  {
    id: 4,
    src: "/instagram/4.webp",
    alt: "Woman in floral dress looking away",
  },
  {
    id: 5,
    src: "/instagram/5.webp",
    alt: "Woman with earrings and necklace",
  },
  {
    id: 6,
    src: "/instagram/6.webp",
    alt: "Woman in yellow sweater and striped pants",
  },
];

const HomeIndexTwo = () => {
  const categories = ["All", "Dresses", "Tops", "Outerwear", "Jacket"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="relative bg-[#FFFBF7] py-10 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)]">
        {" "}
        {/* Adjust min-h-screen if you have a fixed header */}
        {/* Social Media Links on the left */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 flex flex-col space-y-20 z-20">
          <a
            href="#"
            className="transform -rotate-90 text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors duration-300"
          >
            INSTAGRAM
          </a>
          <a
            href="#"
            className="transform -rotate-90 text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors duration-300"
          >
            FACEBOOK
          </a>
          <a
            href="#"
            className="transform -rotate-90 text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors duration-300"
          >
            TWITTER
          </a>
        </div>
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Your Ultimate <br />
              <span className="text-[#FF4062] flex items-center justify-center lg:justify-start">
                <svg
                  className="h-10 w-10 sm:h-12 sm:w-12 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Online Store
              </span>{" "}
              for All Your Needs.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              No code need. Plus free shipping on{" "}
              <span className="font-semibold text-[#FF4062]">$99+</span> orders!
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300 shadow-lg">
                ADD TO CART
              </button>
              <button className="bg-white text-gray-800 border border-gray-300 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition duration-300 shadow-lg">
                VIEW DETAILS
              </button>
            </div>
          </div>

          {/* Right Image and Overlays */}
          <div className="relative lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
            {/* Background shapes/blobs */}
            <div className="absolute w-[600px] h-[500px] bg-[#FFE0EC] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-[500px] h-[400px] bg-[#B0EBD2] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-[550px] h-[450px] bg-[#FFE0EC] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"></div>

            {/* Main Woman Image */}
            <img
              src="/hero-2.webp" // Replace with your image
              alt="Smiling woman with yoga mat and headphones"
              className="relative z-10 w-[min(90%,_600px)] h-auto object-cover rounded-lg"
            />

            {/* Small star-like shapes */}
            <span className="absolute top-10 right-20 text-[#FFC9DB] text-6xl rotate-45 select-none z-10">
              &times;
            </span>
            <span className="absolute bottom-20 left-10 text-[#FFC9DB] text-5xl -rotate-45 select-none z-10">
              &times;
            </span>
            <span className="absolute top-1/3 left-5 text-[#FFC9DB] text-4xl rotate-12 select-none z-10">
              &times;
            </span>
            <span className="absolute bottom-10 right-5 text-[#FFC9DB] text-5xl rotate-90 select-none z-10">
              &times;
            </span>

            {/* Floating Product Card */}
            <div className="absolute bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3 bottom-1/4 right-0 lg:-right-10 transform translate-x-1/3 lg:translate-x-0 -translate-y-1/2 z-20">
              <img
                src="/banner-media2.webp" // Replace with actual product image
                alt="Cozy Knit Cardigan"
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Cozy Knit Cardigan
                </p>
                <p className="text-lg font-bold text-gray-900">$80</p>
              </div>
            </div>

            {/* Floating People Avatars */}
            <div className="absolute bg-white p-3 rounded-full shadow-xl flex items-center space-x-1 bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl">
                ❤️
              </div>
              <img
                src="/testimonial1.webp"
                alt="Person 1"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <img
                src="/testimonial2.webp"
                alt="Person 2"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <img
                src="/testimonial3.webp"
                alt="Person 3"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
            </div>

            {/* Floating Shopping Cart Button */}
            <button className="absolute bottom-1/4 right-0 lg:-right-10 bg-[#FF4062] p-4 rounded-full shadow-xl z-20 transform translate-x-1/2 lg:translate-x-0 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#edd383] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorieList.map((category, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 border-4 border-white ${category.bgColor}`}
              style={{ minHeight: "400px" }} // Ensure consistent card height
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
              <div className="relative z-10 flex items-end justify-start h-full p-6">
                <a
                  href={`/shop-with-category?category=${category.name.toLowerCase()}`} // Example link
                  className="inline-block px-6 py-3 rounded-full bg-white text-gray-800 text-lg font-semibold shadow-md
                           hover:bg-[#FF4062] hover:text-white transition-colors duration-300" // Hover effect here
                >
                  {category.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-20 py-10 ">
        <div className="flex items-center justify-between p-10">
          <div className="">
            <h2 className="text-4xl font-bold">What's trending now</h2>
            <p className="text-xl">
              Discover the most trending products in Pixio.
            </p>
          </div>
          <button className="px-5 py-2 rounded-md bg-black text-white">
            View All
          </button>
        </div>

        <div className="">
          <Slider {...slider1Setting}>
            {products.map((product) => (
              <div key={product.id} className="p-4">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="w-full px-4 md:px-20 py-10 bg-[#FFFCF5]">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Most Popular Products
          </h2>
          <div className="flex gap-3 flex-wrap border border-black p-2 rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1 rounded-full  text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {filteredProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </section>

      <section className="w-full px-20 py-10 ">
        <div className="rounded-3xl bg-gradient-to-br from-pink-400 to-yellow-200 min-h-[600px] relative flex items-center ">
          <div className="py-10 space-y-10">
            <h1 className="text-6xl font-bold text-white w-2/3 p-10">
              We’re just keep growing with 6.3k trusted companies
            </h1>

            <div className="">
              <div class="wrapper">
                {commonLogos.map((img, index) => (
                  <div
                    class={`itemLeft ${
                      "item" + (index + 1)
                    } flex items-center justify-center bg-white`}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
              <div class="wrapper">
                {commonLogos.map((img, index) => (
                  <div
                    class={`itemRight ${
                      "item" + (index + 1)
                    } flex items-center justify-center bg-white`}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 pt-20 bg-yellow-100 absolute top-0 right-40 rounded-b-full">
            <div className="h-40 w-40 rounded-full bg-black flex items-center justify-center">
              <FaArrowRightLong color="white" size={32} />
            </div>
          </div>

          <img
            src="/download.svg"
            alt=""
            className="h-6 absolute top-0 left-10"
          />
          <img
            src="/download.svg"
            alt=""
            className="h-6 absolute bottom-0 right-10 rotate-180"
          />
        </div>
      </section>

      <section className="px-20 py-10 w-full">
        <div className="flex items-center justify-between p-10">
          <div className="">
            <h2 className="text-4xl font-bold">Latest Post</h2>
            <p className="text-xl">
              Discover the most trending products in Pixio.
            </p>
          </div>
          <button className="px-5 py-2 rounded-md bg-black text-white">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 rounded-lg ">
          {trendingPostsData.map((item, index) => (
            <div className="bg-white rounded-2xl flex gap-5 px-6">
              <div className=" h-80 w-60 flex-shrink-0">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="h-full w-full rounded-t-full"
                />
              </div>
              <div className="p-5 space-y-4 flex flex-col justify-between">
                <div className="">
                  <span className="p-1 bg-black text-white rounded-md">
                    {item.date}{" "}
                  </span>
                  <h2 className="text-4xl font-semibold mt-2">{item.title} </h2>
                </div>
                <button className="relative px-6 py-2 border uppercase flex items-center gap-4 rounded-md w-fit">
                  Read More
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-[#FFFBF7] py-20 overflow-hidden">
        <div
          className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] mx-auto"
        >
          <div className="flex justify-center items-center h-full w-full">
            {instagramImages.map((image) => (
              <div
                key={image.id}
                className="relative h-full overflow-hidden flex-1 group"
                style={{ minWidth: "150px" }}
              >
                {" "}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Follow @Pixio Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <button className="px-10 py-4 bg-white rounded-md flex items-center gap-2 text-lg cursor-pointer">
              <FaInstagram size={32} />
              Folli @Pixio
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeIndexTwo;
