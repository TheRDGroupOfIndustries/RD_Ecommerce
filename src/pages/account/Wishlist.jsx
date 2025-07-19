import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Wishlist = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Product1",
      name: "Sophisticated Swagger Suit",
      originalPrice: 45.0,
      currentPrice: 28.0,
      stockStatus: "In Stock",
    },
    {
      id: 2,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Product2",
      name: "Cozy Knit Cardigan Sweater",
      originalPrice: 95.0,
      currentPrice: 56.0,
      stockStatus: "In Stock",
    },
    {
      id: 3,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Product3",
      name: "Athletic Mesh Sports Leggings",
      originalPrice: 56.0,
      currentPrice: 20.0,
      stockStatus: "In Stock",
    },
  ]);

  const handleAddToCart = (productId) => {
    console.log(`Product with ID ${productId} added to cart!`);
  };

  const handleRemoveItem = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
    console.log(`Product with ID ${id} removed from listing.`);
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">Our Products</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products available.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/5"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
              >
                Stock
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                      }}
                    />
                    <span className="font-medium text-gray-900">
                      {product.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-gray-700 font-semibold">
                      ${product.currentPrice.toFixed(2)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {product.stockStatus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-6">
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
                    >
                      Add To Cart
                    </button>
                    <button
                      onClick={() => handleRemoveItem(product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                      aria-label="Remove item"
                    >
                      <IoClose size={28} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Wishlist;
