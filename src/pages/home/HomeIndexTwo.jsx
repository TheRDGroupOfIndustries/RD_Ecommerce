import Slider from "react-slick";
import { MostPopularProduct, ProductCard } from "../../components";
import { useEffect, useState } from "react";
import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import { ArrowRight, Heart, Instagram, ShoppingCart } from "lucide-react";
import { getProducts } from "../../services/productService";
import toast from "react-hot-toast";

const categorieList = [
  {
    name: "Jacket",
    image: "/index2/pic1.webp",
    bgColor: "bg-[#C7B0EB]",
  },
  {
    name: "Jeans",
    image: "/index2/pic2.webp",
    bgColor: "bg-[#F8A6B7]",
  },
  {
    name: "Shirts",
    image: "/index2/pic3.webp",
    bgColor: "bg-[#ADD8E6]",
  },
  {
    name: "Shorts",
    image: "/index2/pic4.webp",
    bgColor: "bg-[#F8D6B7]",
  },
  {
    name: "T-Shirt",
    image: "/index2/pic5.webp",
    bgColor: "bg-[#FFC107]",
  },
  {
    name: "Blazer",
    image: "/index2/pic6.webp",
    bgColor: "bg-[#C8A2C8]",
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
    imageUrl: "/pic1.webp",
  },
  {
    date: "21 FEB 2025",
    title: "Street Style Safari: Global Fashion Influences",
    imageUrl: "/pic2.webp",
  },
  {
    date: "25 FEB 2025",
    title: "Fashion & Beauty Fusion: The Ultimate Style Guide",
    imageUrl: "/pic3.webp",
  },
  {
    date: "14 FEB 2025",
    title: "Style Diaries: Fashion",
    imageUrl: "/pic4.webp",
  },
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
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await getProducts({});
    if (res) {
      setProducts(res);
    } else {
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* NewHeroSection */}
      <section className="relative bg-[#FFFBF7] py-10 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-20 flex gap-10 -rotate-90 origin-top-left ">
          <a
            href="#"
            className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors duration-300 "
          >
            INSTAGRAM
          </a>
          <a
            href="#"
            className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors duration-300 "
          >
            FACEBOOK
          </a>
          <a
            href="#"
            className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors duration-300 "
          >
            TWITTER
          </a>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 w-full">
          <div className="lg:w-1/2 text-center lg:text-left px-4 sm:px-0">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Your Ultimate <br />
              <span className="text-[#FF4062] flex items-center justify-center lg:justify-start">
                <Heart
                  className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mr-2"
                  fill="currentColor"
                />
                Online Store
              </span>{" "}
              for All Your Needs.
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              No code need. Plus free shipping on{" "}
              <span className="font-semibold text-[#FF4062]">₹99+</span> orders!
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 transition duration-300 shadow-lg">
                ADD TO CART
              </button>
              <button className="bg-white text-gray-800 border border-gray-300 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-50 transition duration-300 shadow-lg">
                VIEW DETAILS
              </button>
            </div>
          </div>

          <div className="relative lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0 w-full min-h-[400px] sm:min-h-[500px]">
            <div className="absolute w-[80%] h-[80%] max-w-[600px] max-h-[500px] bg-[#FFE0EC] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-[70%] h-[70%] max-w-[500px] max-h-[400px] bg-[#B0EBD2] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-[75%] h-[75%] max-w-[550px] max-h-[450px] bg-[#FFE0EC] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"></div>

            <img
              src="/hero-2.webp"
              alt="Smiling woman with yoga mat and headphones"
              className="relative z-10 w-[min(90%,_600px)] h-auto object-cover rounded-lg shadow-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x750/CCCCCC/666666?text=Image+Error";
              }}
            />

            <span className="absolute top-5 right-5 sm:top-10 sm:right-20 text-[#FFC9DB] text-4xl sm:text-6xl rotate-45 select-none z-10">
              &times;
            </span>
            <span className="absolute bottom-5 left-5 sm:bottom-20 sm:left-10 text-[#FFC9DB] text-3xl sm:text-5xl -rotate-45 select-none z-10">
              &times;
            </span>
            <span className="absolute top-1/3 left-5 text-[#FFC9DB] text-2xl sm:text-4xl rotate-12 select-none z-10">
              &times;
            </span>
            <span className="absolute bottom-5 right-5 sm:bottom-10 sm:right-5 text-[#FFC9DB] text-3xl sm:text-5xl rotate-90 select-none z-10">
              &times;
            </span>

            <div className="absolute bg-white p-3 sm:p-4 rounded-xl shadow-xl flex items-center space-x-2 sm:space-x-3 bottom-1/4 right-0 lg:-right-10 transform translate-x-1/3 lg:translate-x-0 -translate-y-1/2 z-20">
              <img
                src="/women.webp"
                alt="Cozy Knit Cardigan"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/64x64/CCCCCC/666666?text=Error";
                }}
              />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-gray-800">
                  Cozy Knit Cardigan
                </p>
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  ₹80
                </p>
              </div>
            </div>

            <div className="absolute bg-white p-2 sm:p-3 rounded-full shadow-xl flex items-center space-x-1 bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-base sm:text-xl">
                <Heart size={20} />
              </div>
              <img
                src="/testimonial1.webp"
                alt="Person 1"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/40x40/CCCCCC/666666?text=Error";
                }}
              />
              <img
                src="/testimonial2.webp"
                alt="Person 2"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/40x40/CCCCCC/666666?text=Error";
                }}
              />
              <img
                src="/testimonial3.webp"
                alt="Person 3"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/40x40/CCCCCC/666666?text=Error";
                }}
              />
            </div>

            <button className="absolute bottom-1/4 right-0 lg:-right-10 bg-[#FF4062] p-3 sm:p-4 rounded-full shadow-xl z-20 transform translate-x-1/2 lg:translate-x-0 -translate-y-1/2">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* CategorySection */}
      <section className="bg-[#edd383] py-10 px-4 sm:px-6 lg:px-8 my-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {categorieList.map((category, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 border-4 border-white ${category.bgColor} min-h-[250px] md:min-h-[300px]  `}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl object-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x500/CCCCCC/666666?text=Image+Error";
                }}
              />
              <div className="relative z-10 flex items-end justify-start h-full p-6">
                <a
                  href={`/shop-with-category?category=${category.name.toLowerCase()}`}
                  className="inline-block px-6 py-3 rounded-full bg-white text-gray-800 text-base font-semibold shadow-md
                             hover:bg-[#FF4062] hover:text-white transition-colors duration-300"
                >
                  {category.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TrendingProductsSection */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-10  my-10">
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left">
              What's trending now
            </h2>
            <p className="text-base sm:text-xl text-gray-700 text-center sm:text-left">
              Discover the most trending products in Neeraya.
            </p>
          </div>
          <button className="px-6 py-3 rounded-md bg-black text-white text-base font-medium hover:bg-gray-800 transition-colors duration-300 shadow-md">
            View All
          </button>
        </div>

        <div className="px-2">
          <Slider {...slider1Setting}>
            {products.map((product) => (
              <div key={product.id} className="p-2">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <MostPopularProduct />

      {/* GrowingCompaniesSection */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-10 my-10">
        <div className="rounded-3xl bg-gradient-to-br from-pink-400 to-yellow-200 min-h-[400px] md:min-h-[600px] relative flex flex-col lg:flex-row items-center justify-center overflow-hidden p-6 sm:p-10">
          <div className="py-10 space-y-6 sm:space-y-10 text-center lg:text-left lg:w-2/3 xl:w-1/2 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              We’re just keep growing with 6.3k trusted companies
            </h1>

            <style>{`
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
              }
              @keyframes scroll-right {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(0); }
              }
              .wrapper-scroll {
                display: flex;
                width: fit-content;
                animation: scroll-left 30s linear infinite;
              }
              .wrapper-scroll.reverse {
                animation: scroll-right 30s linear infinite;
              }
              .wrapper-scroll:hover {
                animation-play-state: paused;
              }
              .wrapper-scroll .item {
                flex-shrink: 0;
                width: 150px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: white;
                border-radius: 8px;
                margin-right: 20px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
              }
              .wrapper-scroll .item img {
                max-width: 80%;
                max-height: 70%;
                object-fit: contain;
              }
            `}</style>
            <div className="overflow-hidden w-full">
              <div className="flex flex-col space-y-4">
                <div className="wrapper-scroll">
                  {commonLogos.concat(commonLogos).map((img, index) => (
                    <div key={"left-" + index} className="item">
                      <img
                        src={img}
                        alt={`Logo ${index + 1}`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/100x50/CCCCCC/666666?text=Error";
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="wrapper-scroll reverse">
                  {commonLogos.concat(commonLogos).map((img, index) => (
                    <div key={"right-" + index} className="item">
                      <img
                        src={img}
                        alt={`Logo ${index + 1}`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/100x50/CCCCCC/666666?text=Error";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 pt-10 sm:pt-20 bg-yellow-100 absolute top-0 right-4 sm:right-10 md:right-20 rounded-b-full shadow-lg">
            <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-black flex items-center justify-center shadow-lg">
              <ArrowRight color="white" size={32} />
            </div>
          </div>

          <img
            src="https://placehold.co/24x24/FFFFFF/000000?text=X"
            alt="Decorative element"
            className="h-6 absolute top-4 left-4 sm:top-10 sm:left-10 z-10"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/24x24/CCCCCC/666666?text=Error";
            }}
          />
          <img
            src="https://placehold.co/24x24/FFFFFF/000000?text=X"
            alt="Decorative element"
            className="h-6 absolute bottom-4 right-4 sm:bottom-10 sm:right-10 rotate-180 z-10"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/24x24/CCCCCC/666666?text=Error";
            }}
          />
        </div>
      </section>

      {/* LatestPostSection */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-10 bg-base-ground my-10">
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left">
              Latest Post
            </h2>
            <p className="text-base sm:text-xl text-gray-700 text-center sm:text-left">
              Discover the most trending products in Neeraya.
            </p>
          </div>
          <button className="px-6 py-3 rounded-md bg-black text-white text-base font-medium hover:bg-gray-800 transition-colors duration-300 shadow-md">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-2">
          {trendingPostsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-5 px-4 sm:px-6 py-4 sm:py-6 shadow-sm overflow-hidden"
            >
              <div className="h-48 w-full sm:h-60 sm:w-48 lg:h-80 lg:w-60 flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover rounded-t-full sm:rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/300x400/CCCCCC/666666?text=Image+Error";
                  }}
                />
              </div>
              <div className="p-2 sm:p-5 space-y-3 sm:space-y-4 flex flex-col justify-between text-center sm:text-left">
                <div>
                  <span className="inline-block p-1 px-3 bg-black text-white rounded-md text-sm font-medium">
                    {item.date}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-2 leading-tight text-gray-900">
                    {item.title}
                  </h2>
                </div>
                <button className="relative px-6 py-2 border border-gray-300 uppercase flex items-center justify-center sm:justify-start gap-2 sm:gap-4 rounded-md w-fit mx-auto sm:mx-0 text-black text-sm font-medium hover:bg-gray-100 transition-colors duration-300 shadow-sm">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* InstagramFeedSection */}
      <section className="relative bg-[#FFFBF7] py-10 sm:py-20 overflow-hidden">
        <div className="relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] mx-auto">
          <div className="flex justify-center items-center h-full w-full">
            {instagramImages.map((image) => (
              <div
                key={image.id}
                className="relative h-full overflow-hidden flex-1 group"
                style={{ minWidth: "100px" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/300x300/CCCCCC/666666?text=Image+Error";
                  }}
                />
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <button className="px-6 py-3 sm:px-10 sm:py-4 bg-white rounded-md flex items-center gap-2 text-base sm:text-lg cursor-pointer shadow-lg hover:bg-gray-100 transition-colors duration-300">
              <Instagram size={24} />
              Follow @Neeraya
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeIndexTwo;
