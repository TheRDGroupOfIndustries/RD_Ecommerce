import { Filter, Grid, Heart, List, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  CategorySection,
  ListProductCard,
  MobileProductCard,
  ProductCard,
  ShopTopBanner,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../services/productService";

const colorFilters = [
  { name: "Black", color: "bg-black" },
  { name: "Blue", color: "bg-blue-500" },
  { name: "Green", color: "bg-green-500" },
  { name: "Orange", color: "bg-orange-500" },
  { name: "Pink", color: "bg-pink-500" },
  { name: "Purple", color: "bg-purple-500" },
  { name: "Red", color: "bg-red-500" },
  { name: "Yellow", color: "bg-yellow-500" },
  { name: "Gray", color: "bg-gray-500" },
  { name: "White", color: "bg-white border border-gray-300" },
];

const sizeOptions = ["s", "m", "l", "xl", "xxl", "xxxl"];
const categoryOptions = ["T-Shirt", "Dresses", "Jeans", "Shirts", "Hoodie"];

const categories = [
  { name: "Dresses", count: 16, image: "/banner-media.webp" },
  { name: "Top & Blouses", count: 6, image: "/banner-media2.webp" },
  { name: "Boots", count: 17, image: "/banner-media3.webp" },
  { name: "Jewelry", count: 10, image: "/banner-media4.webp" },
  { name: "Makeup", count: 11, image: "/banner-media5.webp" },
  { name: "Fragrances", count: 17, image: "/banner-media.webp" },
  { name: "Shaving & Grooming", count: 13, image: "/banner-media2.webp" },
  { name: "Jacket", count: 12, image: "/banner-media3.webp" },
  { name: "Coat", count: 23, image: "/banner-media4.webp" },
];

const tags = [
  "Vintage",
  "Wedding",
  "Cotton",
  "Linen",
  "Navy",
  "Urban",
  "Business Meeting",
  "Formal",
];

const ShopStandard = ({ viewMode, categorySection = false }) => {
  const [priceRange, setPriceRange] = useState([40, 350]);
  const [sortBy, setSortBy] = useState("latest");
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [likedProducts, setLikedProducts] = useState([]);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    const filter = {
      color,
      size,
      category,
      tag,
      sortBy,
      limit: productsPerPage,
    };
    // // connsole.log("Filter", filter);
    fetchProducts(filter);
  }, [color, size, category, tag, sortBy, productsPerPage]);

  const handleReset = () => {
    // // connsole.log("Reset...");

    setColor("");
    setSize("");
    setCategory("");
    setTag("");
    setSortBy("latest");
    setProductsPerPage(12);
  };

  const fetchProducts = async (filter) => {
    const res = await getProducts(filter);
    if (res) {
      setProducts(res);
    } else {
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts({});
  }, []);

  const toggleLike = (productId) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="">
      <ShopTopBanner />

      <div className=" mx-auto px-4 md:px-10 lg:px-20 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="hidden md:block lg:w-[300px] h-[700px] overflow-y-auto sticky top-20 flex-shrink-0 p-4">
            <div className="space-y-6 bg-white lg:bg-transparent lg:p-0 rounded-lg lg:rounded-none border lg:border-none">
              <div className="sticky top-0 bg-base-ground z-10 flex items-center justify-between gap-2 text-lg font-semibold">
                <div className="flex gap-2 items-center">
                  <Filter className="w-5 h-5" />
                  Filter
                </div>
                <button
                  onClick={handleReset}
                  className="bg-black text-white px-4 py-1 rounded-md text-sm cursor-pointer"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Color</h3>
                <div className="grid grid-cols-5 gap-2">
                  {colorFilters.map((colorItem) => (
                    <label
                      key={colorItem.name}
                      htmlFor={colorItem.name}
                      className={`w-8 h-8 rounded-full ${
                        colorItem.color
                      } hover:scale-110 transition-transform cursor-pointer ${
                        color === colorItem.name ? "border-2 border-black" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="color"
                        onChange={(e) => setColor(colorItem.name)}
                        id={colorItem.name}
                        hidden
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {sizeOptions.map((item, index) => (
                    <label
                      key={item + index}
                      htmlFor={item}
                      className={`p-1 rounded-full ${item} hover:scale-110 transition-transform cursor-pointer flex items-center justify-center uppercase ${
                        size === item ? "border-2 border-black" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="color"
                        onChange={(e) => setSize(item)}
                        id={item}
                        hidden
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* <div className="space-y-4">
                <h3 className="font-semibold">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex justify-between items-center"
                    >
                      <button className="text-left hover:text-primary transition-colors">
                        {category.name}
                      </button>
                      <span className="text-sm text-gray-500">
                        ({category.count})
                      </span>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="space-y-4">
                <h3 className="font-semibold">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categoryOptions.map((item, index) => (
                    <label
                      key={item + index}
                      htmlFor={item}
                      className={`rounded-full ${item} hover:scale-105 transition-transform cursor-pointer flex items-center justify-center px-2  ${
                        category === item
                          ? "bg-black text-white"
                          : "border-[1px] border-black"
                      }`}
                    >
                      <input
                        type="radio"
                        name="color"
                        onChange={(e) => setCategory(item)}
                        id={item}
                        hidden
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((item, index) => (
                    <label
                      key={item + index}
                      htmlFor={item}
                      className={`rounded-full ${item} hover:scale-105 transition-transform cursor-pointer flex items-center justify-center px-2  ${
                        tag === item
                          ? "bg-black text-white"
                          : "border-[1px] border-black"
                      }`}
                    >
                      <input
                        type="radio"
                        name="color"
                        onChange={(e) => setTag(item)}
                        id={item}
                        hidden
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full">
            {/* Category Section */}
            {/* {categorySection && <CategorySection categories={categories} />} */}

            {/* Filter Bar */}
            <div className="flex w-full flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* <div className="flex items-center gap-2 text-sm overflow-x-auto">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs whitespace-nowrap">
                    DRESSES ×
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs whitespace-nowrap">
                    TOPS ×
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs whitespace-nowrap">
                    OUTERWEAR ×
                  </span>
                </div> */}
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  Found {products?.length} Results
                </span>
              </div>

              <div className="flex flex-wrap items-end gap-4">
                <div className="flex items-center gap-4">
                  {/* Sort Select */}
                  <div>
                    <label
                      htmlFor="sort"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Sort By
                    </label>
                    <select
                      id="sort"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="mt-1 block w-32 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                      <option value="latest">Latest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="popular">Most Popular</option>
                    </select>
                  </div>

                  {/* Products Per Page Select */}
                  <div>
                    <label
                      htmlFor="perPage"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Show
                    </label>
                    <select
                      id="perPage"
                      value={productsPerPage}
                      onChange={(e) =>
                        setProductsPerPage(Number(e.target.value))
                      }
                      className="mt-1 block w-24 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                      <option value={8}>8</option>
                      <option value={12}>12</option>
                      <option value={24}>24</option>
                      <option value={36}>36</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center border border-gray-200 rounded">
                  <button
                    onClick={() => navigate("/shop-standard")}
                    className={`p-2 cursor-pointer ${
                      viewMode === "grid" ? "bg-gray-100" : ""
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigate("/shop-list")}
                    className={`p-2 cursor-pointer ${
                      viewMode === "list" ? "bg-gray-100" : ""
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={`w-full ${
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
                  : ""
              }  gap-6 mb-8`}
            >
              {products.length === 0 ? (
                <div className="text-center text-gray-500 text-lg col-span-full py-10">
                  No products found
                </div>
              ) : (
                products.map((product) =>
                  viewMode === "grid" ? (
                    <div key={product._id}>
                      <div className="hidden md:block">
                        <ProductCard key={product.id} product={product} />
                      </div>
                      <div className="md:hidden">
                        <MobileProductCard key={product.id} product={product} />
                      </div>
                    </div>
                  ) : viewMode === "list" ? (
                    <ListProductCard product={product} />
                  ) : null
                )
              )}
            </div>

            {/* Pagination */}
            {/* <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-gray-500">
                Showing 1-{productsPerPage} of 50 Results
              </span>
              <div className="flex items-center gap-2 ml-4">
                <button className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-sm font-semibold">
                  1
                </button>
                <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-sm hover:border-black transition-colors">
                  2
                </button>
                <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-sm hover:border-black transition-colors">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:border-black transition-colors">
                  NEXT
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopStandard;
