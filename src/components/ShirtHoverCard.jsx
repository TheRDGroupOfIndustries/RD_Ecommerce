import React from "react";

const ShirtHoverCard = ({ item }) => {
  return (
    <div key={item.id} className="pt-20 p-5">
      <div className="bg-[#FBF7F3] rounded-xl shadow-top text-center py-6 px-4 group">
        <div className="h-68 relative -top-12 group-hover:-top-18 duration-200">
          <img src={item.image} alt={item.title} className=" object-contain" />
        </div>
        <div className="  rounded-xl px-2 py-1 flex justify-between ">
          <div className="text-start">
            <span className={`text-sm font-medium text-red-500`}>
              {item.discount}
            </span>
            <p className="text-black font-medium line-clamp-1">{item.title}</p>
          </div>
          <div className="">
            <span className="font-bold text-black">${item.price}</span>
            <div className="text-gray-400 text-sm line-through">
              ${item.originalPrice}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShirtHoverCard;
