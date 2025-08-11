import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";

// ContentWrapper remains largely the same for desktop dropdowns,
// but for mobile, the navigation will be a separate overlay.
const ContentWrapper = ({ children }) => {
  return (
    <div className="fixed top-14 left-1/2 -translate-x-1/2 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 translate-y-6 p-4 z-20 hidden md:block">
      {children}
    </div>
  );
};

const homeNavigations = [
  {
    id: "01",
    image: "/home-1.webp",
    path: "/",
    title: "01 Home Page",
  },
  {
    id: "02",
    image: "/home-2.webp",
    path: "/index-2",
    title: "02 Home Page",
  },
  {
    id: "03",
    image: "/home-3.webp",
    path: "/index-3",
    title: "03 Home Page",
  },
];

const shopNavigations = {
  "Shop Structure": [
    { title: "Standard", path: "/shop-standard" },
    { title: "List", path: "/shop-list" },
    // { title: "With Category", path: "/shop-with-category" },
    { title: "Style 1", path: "/shop-style-1" },
    { title: "Style 2", path: "/shop-style-2" },
  ],
  "Product Structure": [
    { title: "Default", path: "/product-default" },
    { title: "Thumbnail", path: "/product-thumbnail" },
    { title: "Grid Media", path: "/product-grid-media" },
    { title: "Carousel", path: "/product-carousel" },
    // { title: "Full Width", path: "/product-full-width" },
  ],
  // "Shop Pages": [
  //   { title: "Wishlist", path: "/shop-wishlist" },
  //   { title: "Cart", path: "/shop-cart" },
  //   { title: "Checkout", path: "/shop-checkout" },
  //   { title: "Compare", path: "/shop-compare" },
  //   { title: "Order Tracking", path: "/shop-order-tracking" },
  //   { title: "Login", path: "/shop-login" },
  //   { title: "Registration", path: "/shop-registration" },
  //   { title: "Forget Password", path: "/shop-forget-password" },
  // ],
};

const blogNavigations = {
  "Blog Dark Style": [
    { title: "Blog 2 Column", path: "/blog-dark-2-colomn" },
    { title: "Blog 2 Column Sidebar", path: "/blog-dark-2-colomn-sidebar" },
    { title: "Blog 3 Column", path: "/blog-dark-3-colomn" },
  ],
  // "Blog List Sidebar": [
  //   { title: "No Sidebar", path: "/blog-list-no-sidebar" },
  //   { title: "Left Sidebar", path: "/blog-list-left-sidebar" },
  //   { title: "Right Sidebar", path: "/blog-list-right-sidebar" },
  //   { title: "Both Sidebar", path: "/blog-list-both-sidebar" },
  // ],
  // "Blog Page": [
  //   { title: "Blog Archive", path: "/blog-archive" },
  //   { title: "Author", path: "/blog-author" },
  //   { title: "Category", path: "/blog-category" },
  //   { title: "Tag", path: "/blog-tag" },
  // ],
  "Blog Light Style": [
    { title: "Blog 2 Column", path: "/blog-light-2-colomn" },
    { title: "Blog 2 Column Sidebar", path: "/blog-light-2-colomn-sidebar" },
  ],
  // "Blog Grid Sidebar": [
  //   { title: "No Sidebar", path: "/blog-grid-no-sidebar" },
  //   { title: "Left Sidebar", path: "/blog-grid-left-sidebar" },
  //   { title: "Right Sidebar", path: "/blog-grid-right-sidebar" },
  //   { title: "Both Sidebar", path: "/blog-grid-both-sidebar" },
  //   { title: "Wide Sidebar", path: "/blog-grid-wide-sidebar" },
  // ],
};

const recentPosts = [
  {
    title: "Cozy Knit Cardigan Sweater",
    date: "July 23, 2024",
    image: "/1.webp",
  },
  {
    title: "Sophisticated Swagger Suit",
    date: "July 23, 2024",
    image: "/2.webp",
  },
  {
    title: "Athletic Mesh Sports Leggings",
    date: "July 23, 2024",
    image: "/3.webp",
  },
  {
    title: "Satin Wrap Party Blouse",
    date: "July 23, 2024",
    image: "/4.webp",
  },
];

const dashboardLinks = [
  { name: "Dashboard", path: "/account" },
  { name: "Orders", path: "/account/orders" },
  { name: "Downloads", path: "/account/downloads" },
  { name: "Return Request", path: "/account/return-request" },
  { name: "Profile", path: "/account/profile" },
  { name: "Address", path: "/account/address" },
  { name: "Review", path: "/account/review" },
];

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isAuthenticated, userData } = useSelector((state) => state.auth);

  const { totalQuantity } = useSelector((state) => state.cart);
  const [openMenu, setOpenMenu] = useState(false);

  const openSearchPannel = () => {
    setIsSearchOpen(true);
  };

  return (
    <div className="w-full py-4 px-4 md:px-10 flex items-center justify-between gap-4  z-50 bg-white shadow-sm fixed top-0">
      <div className="">
        <Link to="/">
          <img
            src="/website-logo-1.jpg"
            alt="logo"
            className="cursor-pointer h-8 md:h-10"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-2">
        <div className="group">
          <Link to={"/"}>
            <li className="px-4 py-2 font-semibold cursor-pointer list-none">
              Home
            </li>
          </Link>
          {/* <ContentWrapper>
            <div className="p-10 bg-white flex flex-col md:flex-row gap-5 items-center shadow rounded-sm ">
              {homeNavigations.map((page) => (
                <Link key={page.id} to={page.path}>
                  <div className="space-y-2">
                    <div className="h-40 w-40 md:h-56 md:w-56 overflow-hidden">
                      <img
                        src={page.image}
                        alt={page.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-center font-semibold ">{page.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </ContentWrapper> */}
        </div>
        <div className="group">
          <li className="px-4 py-2 font-semibold cursor-pointer list-none flex items-center gap-1 group">
            Shop{" "}
            <MdKeyboardArrowDown
              size={20}
              className="group-hover:rotate-180 duration-150"
            />
          </li>
          <ContentWrapper>
            <div className="bg-white p-6 md:p-10 grid grid-cols-2 gap-10 shadow rounded-sm">
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row flex-nowrap gap-5 md:gap-10">
                  {Object.entries(shopNavigations).map(([section, items]) => (
                    <div key={section}>
                      <h3 className="text-lg font-semibold mb-3 whitespace-nowrap">
                        {section}
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        {items.map((item) => (
                          <li
                            key={`${item.title}jfslhfjgs`}
                            className="hover:text-black cursor-pointer whitespace-nowrap"
                          >
                            <Link to={item.path}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="border border-gray-400 p-4 rounded-sm">
                  <div className="">
                    <h4 className="text-lg font-bold mb-2">
                      Deal of the month
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 ">
                      Yes! Send me exclusive offers, personalized, and unique
                      gift ideas, tips for shopping on Neeraya
                    </p>
                    <button className="text-blue-500 font-medium hover:underline mb-4">
                      View All Products
                    </button>
                  </div>

                  <div className="flex justify-center gap-2 md:gap-3 text-sm font-medium text-center">
                    <div className="">
                      <div className="bg-gray-300 p-2 rounded-sm text-xl">
                        179
                      </div>
                      <p className="font-bold">DAYS</p>
                    </div>
                    <div className="">
                      <div className="bg-gray-300 p-2 rounded-sm text-xl">
                        17
                      </div>
                      <p className="font-bold">HOURS</p>
                    </div>
                    <div className="">
                      <div className="bg-gray-300 p-2 rounded-sm text-xl">
                        21
                      </div>
                      <p className="font-bold">MINUTES</p>
                    </div>
                    <div className="">
                      <div className="bg-gray-300 p-2 rounded-sm text-xl">
                        33
                      </div>
                      <p className="font-bold">SECOND</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full flex gap-10 ">
                <img
                  src="/adv-1.webp"
                  alt="Fashion"
                  className="rounded-2xl w-full object-cover "
                />
              </div>
            </div>
          </ContentWrapper>
        </div>
        <div className="group">
          <li className="px-4 py-2 font-semibold cursor-pointer list-none flex items-center gap-1 group">
            Blog{" "}
            <MdKeyboardArrowDown
              size={20}
              className="group-hover:rotate-180 duration-150"
            />
          </li>
          <ContentWrapper>
            <div className="bg-white p-6 md:p-10 flex flex-col md:flex-row flex-nowrap gap-5 md:gap-10 shadow rounded-sm">
              <div className="w-full md:w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 whitespace-nowrap">
                {Object.entries(blogNavigations).map(([section, items]) => (
                  <div key={section}>
                    <h3 className="text-lg font-semibold mb-3">{section}</h3>
                    <ul className="space-y-2 text-gray-600">
                      {items.map((item) => (
                        <li
                          key={`${item.title}dfhiuer`}
                          className="hover:text-black cursor-pointer whitespace-nowrap"
                        >
                          <Link to={item.path}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div>
                  <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {recentPosts.map((post) => (
                      <li key={post.title} className="flex gap-4 items-start">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        <div className="text-sm">
                          <p className="font-semibold leading-tight">
                            {post.title}
                          </p>
                          <p className="text-gray-500 text-xs mt-1">
                            {post.date}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ContentWrapper>
        </div>

        <Link to="/about-us" className="px-4 py-2 font-semibold cursor-pointer">
          About Us
        </Link>
        <Link
          to="/contact-us"
          className="px-4 py-2 font-semibold cursor-pointer"
        >
          Contact Us
        </Link>

        {isAuthenticated && (
          <div className="group">
            <li className="px-4 py-2 font-semibold cursor-pointer list-none">
              My Account
            </li>
            <ContentWrapper>
              <div className="bg-white p-6 md:p-10 flex flex-nowrap gap-5 md:gap-10 shadow rounded-sm">
                <ul className="space-y-3 text-gray-600 text-sm">
                  {dashboardLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="hover:text-black transition-colors block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ContentWrapper>
          </div>
        )}
      </nav>

      <div className="flex items-center gap-4 md:gap-10 justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <button onClick={openSearchPannel} className="cursor-pointer ">
            <Search style={{ width: "20px", height: "20px" }} />
          </button>
          {isAuthenticated ? (
            <div className="flex items-center gap-4 md:gap-8 ">
              <Link
                to={"/account/wishlist"}
                className="relative hidden lg:block"
              >
                <div className="absolute -right-3 -top-3 rounded-full bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center">
                  {userData?.wishlist_products?.length}
                </div>
                <Heart style={{ width: "20px", height: "20px" }} />
              </Link>
              <Link to={"/account/cart"} className="relative hidden lg:block">
                <div className="absolute -right-3 -top-3 rounded-full bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center">
                  {totalQuantity}
                </div>
                <ShoppingCart style={{ width: "20px", height: "20px" }} />
              </Link>
              <Link to={"/account"}>
                <CgProfile size={30} />
              </Link>
            </div>
          ) : (
            <Link
              className="border px-3 py-1 text-sm rounded-lg hover:bg-gray-100 hidden md:block"
              to={"/auth/login"}
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Menu style={{ width: "24px", height: "24px" }} />
        </button>
      </div>

      {isSearchOpen && <SearchProduct setIsSearchOpen={setIsSearchOpen} />}

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/">
            <img src="/website-logo-1.jpg" alt="logo" className="cursor-pointer h-8" />
          </Link>
          <button onClick={() => setOpenMenu(false)} className="text-2xl">
            &times;
          </button>
        </div>
        <nav className="p-4 flex flex-col gap-4">
          {/* <details className="py-2 border-b"> */}
          <Link
            onClick={() => setOpenMenu(false)}
            to="/"
            className="text-lg font-semibold cursor-pointer"
          >
            Home
          </Link>
          {/* <div className="p-4  grid grid-cols-2 md:grid-cols-3 gap-5 ">
              {homeNavigations.map((page) => (
                <Link
                  key={page.id}
                  to={page.path}
                  onClick={() => setOpenMenu(false)}
                >
                  <div className="space-y-2">
                    <div className="h-40 w-40 md:h-56 md:w-56 overflow-hidden">
                      <img
                        src={page.image}
                        alt={page.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-center font-semibold ">{page.title}</h3>
                  </div>
                </Link>
              ))}
            </div> */}
          {/* </details> */}
          <details className="py-2 border-b">
            <summary className="text-lg font-semibold cursor-pointer">
              Shop
            </summary>
            <div className="pl-4 pt-2">
              {Object.entries(shopNavigations).map(([section, items]) => (
                <div key={section} className="mb-4">
                  <h4 className="font-semibold text-gray-800 mt-2">
                    {section}
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {items.map((item) => (
                      <li key={item.title}>
                        <Link to={item.path} onClick={() => setOpenMenu(false)}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
          <details className="py-2 border-b">
            <summary className="text-lg font-semibold cursor-pointer">
              Blog
            </summary>
            <div className="pl-4 pt-2">
              {Object.entries(blogNavigations).map(([section, items]) => (
                <div key={section} className="mb-4">
                  <h4 className="font-semibold text-gray-800 mt-2">
                    {section}
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {items.map((item) => (
                      <li key={item.title}>
                        <Link to={item.path} onClick={() => setOpenMenu(false)}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
          <Link
            to="/about-us"
            onClick={() => setOpenMenu(false)}
            className="px-4 py-2 font-semibold cursor-pointer border-b"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            onClick={() => setOpenMenu(false)}
            className="px-4 py-2 font-semibold cursor-pointer border-b"
          >
            Contact Us
          </Link>

          {isAuthenticated ? (
            <>
              <details className="py-2 border-b">
                <summary className="text-lg font-semibold cursor-pointer">
                  My Account
                </summary>
                <div className="pl-4 pt-2">
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {dashboardLinks.map((item) => (
                      <li key={item.name}>
                        <Link to={item.path} onClick={() => setOpenMenu(false)}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>

              <div className="flex flex-col gap-4 mt-4">
                <Link
                  to={"/account/wishlist"}
                  className="flex items-center gap-2 text-gray-700 hover:text-black relative"
                  onClick={() => setOpenMenu(false)}
                >
                  <Heart style={{ width: "20px", height: "20px" }} /> Wishlist
                  <span className="absolute left-4 top-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {userData?.wishlist_products?.length}
                  </span>
                </Link>
                <Link
                  to={"/account/cart"}
                  className="flex items-center gap-2 text-gray-700 hover:text-black relative"
                  onClick={() => setOpenMenu(false)}
                >
                  <ShoppingCart style={{ width: "20px", height: "20px" }} />{" "}
                  Cart
                  <span className="absolute left-4 top-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {totalQuantity}
                  </span>
                </Link>
                {isAuthenticated && (
                  <Link
                    to={"/account"}
                    className="flex items-center gap-2 text-gray-700 hover:text-black"
                    onClick={() => setOpenMenu(false)}
                  >
                    <CgProfile size={24} /> Profile
                  </Link>
                )}
              </div>
            </>
          ) : (
            <Link
              className="text-lg font-semibold py-2 border-b"
              to={"/auth/login"}
              onClick={() => setOpenMenu(false)}
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
