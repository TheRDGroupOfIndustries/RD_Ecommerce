import React from "react";
import { deals } from "../home/HomeIndexOne";
import { ProductCard, ShirtHoverCard, ShopTopBanner } from "../../components";

const ShopStyle2 = () => {
  return (
    <div className="">
      <ShopTopBanner/>
      

      <div className="grid py-5 grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-10 px-4  md:px-20 lg:px-40  ">
        {deals.map((item) => (
          <ShirtHoverCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopStyle2;
