import React, { useRef, useState, useEffect, use } from "react";
import ProductCard from "./ProductCard";
import MobileProductCard from "./MobileProductCard";
import { getCategories, getProducts } from "../services/productService";
import toast from "react-hot-toast";

const MostPopularProduct = () => {
  const [categories, setCategories] = useState([]);
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

  const [mostPopularProducts, setMostPopularProducts] = useState([]);

  const fetchMostPopularProducts = async () => {
    const res = await getProducts();
    if (res) {
      setMostPopularProducts(res);
    } else {
      toast.error("Failed to fetch most popular products");
    }
  };

  const fetchCategories = async () => {
    const res = await getCategories();
    if (res) {
      setCategories(res);
    } else {
      toast.error("Failed to fetch categories");
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchMostPopularProducts();
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? mostPopularProducts
      : mostPopularProducts?.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full px-2 md:px-20 py-10  mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-0">
          Most Popular Products
        </h2>
        <div className="flex flex-wrap justify-center sm:justify-end gap-1 border border-black p-1 rounded-full bg-white shadow-sm">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === "All"
                ? "bg-black text-white shadow-md"
                : "bg-white text-black hover:bg-gray-100 hover:text-black"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.title
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-black hover:bg-gray-100 hover:text-black"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 sm:px-0">
        {filteredProducts.length ? filteredProducts.slice(0, 8).map((product) => (
          <ProductCard key={product._id} product={product} />
        )) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found in this category.
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 sm:px-0">
        {filteredProducts.length ? filteredProducts.slice(0, 8).map((product) => (
          <MobileProductCard
            key={product._id}
            product={product}
          />
        )) : (
           <p className="text-center text-gray-500 col-span-full">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default MostPopularProduct;
