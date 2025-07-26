import React from "react";
import { Link } from "react-router-dom";

const ShirtHoverCard = ({ product }) => {
  return (
    <div key={product?.id} className="pt-20 p-5">
      <div className="bg-[#FBF7F3] rounded-xl shadow-top text-center py-6 px-4 group">
        <div className="h-68 relative -top-12 group-hover:-top-18 duration-200">
          <img
            src={product?.images[0]}
            alt={product?.title}
            className=" object-contain"
          />
        </div>
        <div className="  rounded-xl px-2 py-1 flex justify-between ">
          <div className="text-start">
            <span className={`text-sm font-medium text-red-500`}>
              {product?.discount} % OFF
            </span>
            <Link
              to={`/product-default/${product?._id}`}
              className="text-black font-medium line-clamp-1"
            >
              {product?.title}
            </Link>
          </div>
          <div className="">
            <span className="font-bold text-black">Rs. {product?.salePrice}</span>
            <div className="text-gray-400 text-sm line-through">
              Rs. {product?.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShirtHoverCard;
