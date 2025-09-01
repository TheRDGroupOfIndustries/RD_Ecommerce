import { Filter, Grid, List, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CategorySection,
  ListProductCard,
  MobileProductCard,
  ProductCard,
  ShopTopBanner,
} from "../../components";
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
  // const [priceRange, setPriceRange] = useState([40, 350]);
  const [sortBy, setSortBy] = useState("latest");
  const [productsPerPage, setProductsPerPage] = useState(12);
  // const [likedProducts, setLikedProducts] = useState([]);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [tag, setTag] = useState("");

  const [isFilterOpen, setIsFilterOpen] = useState(false); // mobile filter toggle

  const { search } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search);
    const genderParam = query.get("gender");
    const categoryParam = query.get("category");

    setGender(genderParam);
    setCategory(categoryParam);
    // console.log("Query", { genderParam, categoryParam });
  }, [search]);

  useEffect(() => {
    const filter = {
      color,
      size,
      category,
      tag,
      sortBy,
      limit: productsPerPage,
      gender,
    };
    fetchProducts(filter);
  }, [color, size, category, tag, sortBy, productsPerPage, gender]);

  const handleReset = () => {
    setColor("");
    setSize("");
    setCategory("");
    setTag("");
    setGender("");
    setSortBy("latest");
    setProductsPerPage(12);
    navigate("/shop-standard");
  };

  const fetchProducts = async (filter) => {
    // console.log("Fetching products with filter:", filter);

    const res = await getProducts(filter);
    if (res) {
      setProducts(res);
      // console.log("Fetched products:", res);
    } else {
      toast.error("Failed to fetch products");
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // useEffect(() => {
  //   fetchProducts({});
  // }, []);

  // const toggleLike = (productId) => {
  //   setLikedProducts((prev) =>
  //     prev.includes(productId)
  //       ? prev.filter((id) => id !== productId)
  //       : [...prev, productId]
  //   );
  // };

  return (
    <div className="">
      <ShopTopBanner />

      <div className="mx-auto px-4 md:px-10 lg:px-20 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block lg:w-[280px] h-[700px] overflow-y-auto sticky top-20 flex-shrink-0 p-4 border rounded-lg">
            {/* Sidebar Content */}
            <SidebarFilters
              handleReset={handleReset}
              color={color}
              setColor={setColor}
              size={size}
              setSize={setSize}
              category={category}
              setCategory={setCategory}
              tag={tag}
              setTag={setTag}
            />
          </div>

          {/* Mobile Sidebar (Drawer) */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black/40 z-50 flex">
              <div className="bg-white w-72 h-full p-4 overflow-y-auto shadow-xl">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold flex items-center gap-2">
                    <Filter className="w-5 h-5" /> Filters
                  </h2>
                  <button
                    className="p-2 rounded hover:bg-gray-200"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <SidebarFilters
                  handleReset={handleReset}
                  color={color}
                  setColor={setColor}
                  size={size}
                  setSize={setSize}
                  category={category}
                  setCategory={setCategory}
                  tag={tag}
                  setTag={setTag}
                />
              </div>
              <div className="flex-1" onClick={() => setIsFilterOpen(false)} />
            </div>
          )}

          {/* Main Content */}
          <div className="w-full">
            {/* Filter Bar */}
            <div className="flex w-full flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-3 py-2 border rounded-md text-sm font-medium bg-gray-100"
                >
                  <Filter className="w-4 h-4" /> Filters
                </button>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  Found {products?.length} Results
                </span>
              </div>

              <div className="flex flex-wrap items-end gap-4">
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
                    className="mt-1 block w-32 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm"
                  >
                    <option value="latest">Latest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>

                {/* Products Per Page */}
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
                    onChange={(e) => setProductsPerPage(Number(e.target.value))}
                    className="mt-1 block w-24 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm"
                  >
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                  </select>
                </div>

                {/* View Mode */}
                <div className="flex items-center border border-gray-200 rounded">
                  <button
                    onClick={() => navigate("/shop-standard")}
                    className={`p-2 ${
                      viewMode === "grid" ? "bg-gray-100" : ""
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigate("/shop-list")}
                    className={`p-2 ${
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
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  : ""
              } mb-8`}
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
                        <ProductCard product={product} />
                      </div>
                      <div className="md:hidden">
                        <MobileProductCard product={product} />
                      </div>
                    </div>
                  ) : (
                    <ListProductCard key={product._id} product={product} />
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopStandard;

/* Extracted Sidebar Filters for Reusability */
const SidebarFilters = ({
  handleReset,
  color,
  setColor,
  size,
  setSize,
  category,
  setCategory,
  tag,
  setTag,
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 text-lg font-semibold">
        <div className="flex gap-2 items-center">
          <Filter className="w-5 h-5" />
          Filter
        </div>
        <button
          onClick={handleReset}
          className="bg-black text-white px-4 py-1 rounded-md text-sm"
        >
          Reset
        </button>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="font-semibold">Color</h3>
        <div className="grid grid-cols-5 gap-2">
          {colorFilters.map((colorItem) => (
            <label
              key={colorItem.name}
              className={`w-8 h-8 rounded-full ${
                colorItem.color
              } cursor-pointer hover:scale-110 transition ${
                color === colorItem.name ? "border-2 border-black" : ""
              }`}
            >
              <input
                type="radio"
                name="color"
                onChange={() => setColor(colorItem.name)}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="font-semibold">Size</h3>
        <div className="grid grid-cols-4 gap-2">
          {sizeOptions.map((item) => (
            <label
              key={item}
              className={`p-1 rounded-full flex items-center justify-center uppercase cursor-pointer hover:scale-110 transition ${
                size === item ? "border-2 border-black" : "border"
              }`}
            >
              <input
                type="radio"
                name="size"
                onChange={() => setSize(item)}
                hidden
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-semibold">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categoryOptions.map((item) => (
            <label
              key={item}
              className={`px-2 py-1 rounded-full cursor-pointer hover:scale-105 transition ${
                category === item
                  ? "bg-black text-white"
                  : "border border-black"
              }`}
            >
              <input
                type="radio"
                name="category"
                onChange={() => setCategory(item)}
                hidden
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="space-y-4">
        <h3 className="font-semibold">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((item) => (
            <label
              key={item}
              className={`px-2 py-1 rounded-full cursor-pointer hover:scale-105 transition ${
                tag === item ? "bg-black text-white" : "border border-black"
              }`}
            >
              <input
                type="radio"
                name="tag"
                onChange={() => setTag(item)}
                hidden
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
