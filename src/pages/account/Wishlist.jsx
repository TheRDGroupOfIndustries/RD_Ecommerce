import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/cartSlice";
import { removeFromWishlist } from "../../store/authSlice";

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
      stockStatus: "Out of Stock",
    },
    {
      id: 4,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Product4",
      name: "Plaid Wool Winter Coat",
      originalPrice: 120.0,
      currentPrice: 85.0,
      stockStatus: "In Stock",
    },
  ]);

  const { isAuthenticated, userData } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleAddToCart = (productId) => {
    console.log(`Product with ID ${productId} added to cart!`);
    alert(`Product with ID ${productId} added to cart!`);
  };

  const handleRemoveItem = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
    console.log(`Product with ID ${id} removed from wishlist.`);
  };

  const getStockStatusClass = (status) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-700";
      case "Out of Stock":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
        Your Wishlist
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-600 py-10">
          Your wishlist is empty.
        </p>
      ) : (
        <>
          {/* Desktop/Tablet Table Layout */}
          <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200">
            {userData?.wishlist_products.length === 0 ? (
              <div className="">
                <p className="text-center text-gray-600 py-10">
                  Your wishlist is empty.
                </p>
              </div>
            ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/5 whitespace-nowrap"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5 whitespace-nowrap"
                  >
                    Price
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5 whitespace-nowrap"
                  >
                    Stock Status
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5 whitespace-nowrap"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userData?.wishlist_product_details.map((product) => (
                  <tr
                    key={product._id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="w-20 h-20 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                          }}
                        />
                        <span className="font-medium text-gray-900 text-base">
                          {product.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        {product.salePrice && (
                          <span className="text-gray-500 line-through text-sm">
                            Rs. {product.price}
                          </span>
                        )}
                        <span className="text-gray-700 font-semibold text-base">
                          Rs. {product.salePrice}
                        </span>
                      </div>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStockStatusClass(
                          product.stockStatus
                        )}`}
                      >
                        {product.stockStatus}
                      </span>
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-4">
                        <button
                          // onClick={() => handleAddToCart(product.id)}
                          onClick={()=> {
                            dispatch(addProductToCart({ productId: product._id, quantity: 1 }))
                          }}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 text-sm whitespace-nowrap cursor-pointer"
                          >
                          Add To Cart
                        </button>
                        <button
                          // onClick={() => handleRemoveItem(product.id)}
                          onClick={()=> {
                            dispatch(removeFromWishlist(product._id))
                          }}
                          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                          aria-label="Remove item from wishlist"
                        >
                          <IoClose size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
             )}
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            {userData?.wishlist_product_details !=0 ? (userData?.wishlist_product_details.map((product) => (
              <div
                key={product._id}
                className="flex flex-col border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-20 h-20 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                      }}
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 text-base">
                        {product.title}
                      </h3>
                      <div className="flex flex-col mt-1">
                        {product.price && (
                          <span className="text-gray-500 line-through text-sm">
                            ${product.price}
                          </span>
                        )}
                        <span className="text-gray-700 font-semibold text-base">
                          ${product.salePrice}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    // onClick={() => handleRemoveItem(product.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                    aria-label="Remove item from wishlist"
                  >
                    <IoClose size={24} />
                  </button>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  {/* <span
                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStockStatusClass(
                      product.stockStatus
                    )}`}
                  >
                    {product.stockStatus}
                  </span> */}
                  <button
                    // onClick={() => handleAddToCart(product.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 text-sm whitespace-nowrap"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))) : (
              <div className="">
                <p className="text-gray-500 text-sm">No products in wishlist</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
