import React, { useRef, useState, useEffect } from "react";
// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import MobileProductCard from "./MobileProductCard";

// MostPopularProduct component (as provided and enhanced for responsiveness)
const MostPopularProduct = () => {
  const categories = ["All", "Dresses", "Tops", "Outerwear", "Jacket"];
  const [activeCategory, setActiveCategory] = useState("All");

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
      image: "/banner-media4.webp",
      category: "Jacket",
    },
    {
      id: 5,
      title: "Elegant Evening Gown",
      originalPrice: 120,
      price: 150,
      discount: "NEW ARRIVAL",
      image: "/banner-media5.webp",
      category: "Dresses",
    },
    {
      id: 6,
      title: "Comfortable Cotton T-Shirt",
      originalPrice: 20,
      price: 25,
      discount: "LIMITED STOCK",
      image: "/banner-media2.webp",
      category: "Tops",
    },
    {
      id: 7,
      title: "Warm Winter Coat",
      originalPrice: 100,
      price: 130,
      discount: "SEASONAL SALE",
      image: "/banner-media3.webp",
      category: "Outerwear",
    },
    {
      id: 8,
      title: "Stylish Leather Jacket",
      originalPrice: 90,
      price: 110,
      discount: "TOP SELLER",
      image: "/banner-media5.webp",
      category: "Jacket",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full px-2 md:px-20 py-10 bg-[#FFFCF5] rounded-t-xl shadow-inner mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-0">
          Most Popular Products
        </h2>
        <div className="flex flex-wrap justify-center sm:justify-end gap-1 border border-black p-1 rounded-full bg-white shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-black hover:bg-gray-100 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 sm:px-0">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id + product.title} product={product} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 sm:px-0">
        {filteredProducts.map((product) => (
          <MobileProductCard key={product.id + product.title} product={product} />
        ))}
      </div>
    </section>
  );
};

export default MostPopularProduct