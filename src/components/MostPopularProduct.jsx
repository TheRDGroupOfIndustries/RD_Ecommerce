import React, { useState } from 'react'
import ProductCard from './ProductCard'

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

const MostPopularProduct = () => {
      const categories = ["All", "Dresses", "Tops", "Outerwear", "Jacket"];
      const [activeCategory, setActiveCategory] = useState("All");

    
      const filteredProducts =
        activeCategory === "All"
          ? products
          : products.filter((p) => p.category === activeCategory);
  return (
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
  )
}

export default MostPopularProduct