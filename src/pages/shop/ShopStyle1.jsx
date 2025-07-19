import React from "react";
import { ProductCard, ShopTopBanner } from "../../components";
import { products } from "../../store/data";

const ShopStyle1 = () => {
  return (
    <div className="">
      <ShopTopBanner/>
      
      <div className="grid py-5 grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-10 px-40 ">
        {products.map(product => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopStyle1;
