import React, { useEffect, useState } from "react";
import { ProductCard, ShirtHoverCard, ShopTopBanner } from "../../components";
import { getBlockbusterDeals } from "../../services/productService";
import toast from "react-hot-toast";

const ShopStyle2 = () => {
    const [products, setProducts] = useState([]);
  
    const fetchProducts = async () => {
      const res = await getBlockbusterDeals();
      if (res) {
        setProducts(res);
      } else {
        toast.error("Failed to fetch products");
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  return (
    <div className="">
      <ShopTopBanner/>
      

      <div className="grid py-5 grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-10 px-4  md:px-20 lg:px-40  ">
        {products.map((product) => (
          <ShirtHoverCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopStyle2;
