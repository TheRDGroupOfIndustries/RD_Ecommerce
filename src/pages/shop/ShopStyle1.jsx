import React from "react";
import { MobileProductCard, ProductCard, ShopTopBanner } from "../../components";
import { products } from "../../store/data";

const ShopStyle1 = () => {
  return (
    <div className="">
      <ShopTopBanner/>
      
      <div className="grid py-5 grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-20 lg:px-40 ">
        {products.map(product => (
          <>
                  <div className="hidden md:block">
                    <ProductCard key={product.id} product={product} />
                  </div>
                  <div className="md:hidden">
                    <MobileProductCard key={product.id} product={product} />
                  </div>
                  </>
        ))}
      </div>
    </div>
  );
};

export default ShopStyle1;
