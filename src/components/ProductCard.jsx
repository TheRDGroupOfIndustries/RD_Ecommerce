import React, { useState } from "react";
import { IoCart } from "react-icons/io5"
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import QuickView from "./QuickView";

const ProductCard = ({ product, height }) => {
  const [inWishlist, setInWishlist] = useState(false)
  const [inCart, setInCart] = useState(false)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  // console.log("ProductCard product: ", product);
  
  
  return (
    <div className=" rounded-3xl overflow-hidden relative group">
      {/* Image */}
      <div className={` ${height ? height : "h-[450px]"} w-full relative overflow-hidden`}>
        <div className="relative rounded-3xl overflow-hidden h-full w-full group-hover:h-[95%] duration-300 ">
          <img
            src={product?.images[0]}
            alt={product?.title}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="bg-base-ground p-1.5 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[100%] group-hover:translate-y-0 duration-300 opacity-0 group-hover:opacity-100  cursor-pointer">
          <button onClick={()=>setIsQuickViewOpen(true)} className="px-4 py-1.5 bg-black text-white text-lg whitespace-nowrap rounded-full cursor-pointer">Quick View</button>
        </div>

        {/* Discount Tag */}
        <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow">
          {product?.discount}% OFF
        </span>

        {/* Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button onClick={(()=>setInWishlist(state => !state))} className={` p-2 rounded-full bg-opacity-60 flex items-center justify-center text-white cursor-pointer ${inWishlist ? 'bg-red-500' : 'bg-gray-800 '} `}>
            <FaHeart size={20} />
          </button>
          <button onClick={(()=>setInCart(state => !state))} className={` p-2 rounded-full bg-gray-800 bg-opacity-60 flex items-center justify-center text-white cursor-pointer ${inCart ? 'bg-red-500' : 'bg-gray-800 '}`}>
            <IoCart size={20} />
          </button>
        </div>
      </div>

      {/* Title + Price */}
      <div className="p-4 flex items-start justify-between">
        <Link to={`/product-default/${product?._id}`} className="text-lg font-bold cursor-pointer hover:text-red-500 duration-300">{product?.title}</Link>
        <p className="text-right text-base font-bold">Rs. {product?.salePrice}</p>
      </div>


      {isQuickViewOpen && (
        <QuickView product={product} setIsQuickViewOpen={setIsQuickViewOpen} />
      )}
    </div>
  );
};

export default ProductCard;
