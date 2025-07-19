import React from 'react'
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

const UserViewsSection = () => {
  return (
    <section className="w-full px-4 md:px-20 py-20 bg-[#fdf7ef] flex flex-col lg:flex-row gap-10 items-center justify-center">
        {/* Left Hover Image */}
        <div className="relative group w-[380px] h-[500px] shrink-0">
          <div className="absolute h-full w-full left-0 bottom-0 group-hover:-left-2 group-hover:-bottom-2 duration-300 border border-black rounded-[200px_200px_0_0] pointer-events-none"></div>
          <img
            src="/banner-media2.webp"
            alt="Fashion Model"
            className="w-full h-full object-cover  rounded-[200px_200px_0_0] relative group-hover:left-2 group-hover:bottom-2 duration-300"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          {/* Heading and button */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold leading-tight">
              Users Who Viewed This Also <br />
              Checked Out These Similar Profiles
            </h2>

            {/* Circular Button */}
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-cover rounded-t-2xl object-top"
                />
                <div className="p-4">
                  <p className="text-pink-600 text-sm font-semibold">
                    Up To 79% Off
                  </p>
                  <h3 className="text-base font-semibold text-black">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-black font-bold">
                      ${product.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${product.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default UserViewsSection