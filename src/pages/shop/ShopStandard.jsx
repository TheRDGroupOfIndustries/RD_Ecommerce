import { Filter, Grid, Heart, List, Search } from "lucide-react";
import { useState } from "react";
import Slider from "react-slick";
import { CategorySection, ListProductCard, MobileProductCard, ProductCard, ShopTopBanner } from "../../components";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Sophisticated Sweater Suit",
    price: 80.0,
    originalPrice: 100.0,
    discount: 20,
    image: "/banner-media.webp",
    bgColor: "from-purple-200 to-purple-400",
    liked: false,
  },
  {
    id: 2,
    title: "Checkered Slim Collar Casual Shirt",
    price: 94.0,
    originalPrice: 120.0,
    discount: 25,
    image: "/banner-media.webp",
    bgColor: "from-pink-200 to-pink-400",
    liked: false,
  },
  {
    id: 3,
    title: "Solid Cut Away Collar Casual Shirt",
    price: 35.0,
    originalPrice: 50.0,
    discount: 30,
    image: "/banner-media.webp",
    bgColor: "from-blue-200 to-blue-400",
    liked: false,
  },
  {
    id: 4,
    title: "Athletic Mesh Sports Leggings",
    price: 45.0,
    originalPrice: 60.0,
    discount: 25,
    image: "/banner-media.webp",
    bgColor: "from-orange-200 to-red-400",
    liked: false,
  },
  {
    id: 5,
    title: "Denim Overalls Shorts",
    price: 70.0,
    originalPrice: 90.0,
    discount: 20,
    image: "/banner-media.webp",
    bgColor: "from-pink-200 to-pink-300",
    liked: false,
  },
  {
    id: 6,
    title: "Plaid Wool Winter Coat",
    price: 36.0,
    originalPrice: 60.0,
    discount: 40,
    image: "/banner-media.webp",
    bgColor: "from-pink-300 to-red-300",
    liked: false,
  },
  {
    id: 7,
    title: "Comfy Lounge Jogger Pants",
    price: 75.0,
    originalPrice: 100.0,
    discount: 25,
    image: "/banner-media.webp",
    bgColor: "from-gray-200 to-gray-300",
    liked: false,
  },
  {
    id: 8,
    title: "Water-Resistant Windbreaker Jacket",
    price: 90.0,
    originalPrice: 120.0,
    discount: 25,
    image: "/banner-media.webp",
    bgColor: "from-yellow-200 to-orange-300",
    liked: false,
  },
  {
    id: 9,
    title: "Classic Denim Skinny Jeans",
    price: 50.0,
    originalPrice: 70.0,
    discount: 28,
    image: "/banner-media.webp",
    bgColor: "from-amber-200 to-amber-300",
    liked: false,
  },
  {
    id: 10,
    title: "Stylish Fedora Hat Collection",
    price: 80,
    originalPrice: 100.0,
    discount: 20,
    image: "/banner-media.webp",
    bgColor: "from-pink-300 to-red-400",
    liked: false,
  },
  {
    id: 11,
    title: "Suede Ankle Booties Collection",
    price: 70,
    originalPrice: 90.0,
    discount: 22,
    image: "/banner-media.webp",
    bgColor: "from-red-300 to-red-500",
    liked: false,
  },
  {
    id: 12,
    title: "Hiking Outdoor Gear Collection",
    price: 50,
    originalPrice: 75.0,
    discount: 33,
    image: "/banner-media.webp",
    bgColor: "from-purple-300 to-purple-500",
    liked: false,
  },
];

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

const sizeOptions = ["4", "6", "8", "10", "12", "14", "16", "18", "XS"];

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

  const toggleLike = (productId) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="">
      <ShopTopBanner/>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="hidden md:block lg:w-72 flex-shrink-0">
            <div className="sticky top-8 space-y-6 bg-white lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none border lg:border-none">
              {/* Filter Header */}
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Filter className="w-5 h-5" />
                Filter
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="search"
                  placeholder="Search Product"
                  className="pl-10 bg-white border-gray-200"
                />
              </div>

              {/* Price Range */}
              <div className="space-y-4">
                <h3 className="font-semibold">Price</h3>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={350}
                    min={40}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Min Price: {priceRange[0]}</span>
                    <span>Max Price: {priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Color Filter */}
              <div className="space-y-4">
                <h3 className="font-semibold">Color</h3>
                <div className="grid grid-cols-5 gap-2">
                  {colorFilters.map((color) => (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full ${color.color} hover:scale-110 transition-transform`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="space-y-4">
                <h3 className="font-semibold">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {sizeOptions.map((size) => (
                    <button
                      key={size}
                      className="px-3 py-2 text-sm border border-gray-200 rounded hover:border-primary hover:text-primary transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-4">
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
              </div>

              {/* Tags */}
              <div className="space-y-4">
                <h3 className="font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 text-sm border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset button */}
              <button
                variant="outline"
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                RESET
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="">
            {/* Category Section */}
             {categorySection && <CategorySection categories={categories} />}

            {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-2 text-sm overflow-x-auto">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs whitespace-nowrap">
                    DRESSES ×
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs whitespace-nowrap">
                    TOPS ×
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs whitespace-nowrap">
                    OUTERWEAR ×
                  </span>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  Showing 1-{productsPerPage} of 50 Results
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
              className={`${
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
                  : ""
              }  gap-6 mb-8`}
            >
              {products.map((product) =>
                viewMode === "grid" ? (
                  <>
                  <div className="hidden md:block">
                    <ProductCard key={product.id} product={product} />
                  </div>
                  <div className="md:hidden">
                    <MobileProductCard key={product.id} product={product} />
                  </div>
                  </>
                ) : viewMode === "list" ? (
                  <ListProductCard product={product} />
                ) : null
              )}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopStandard;
