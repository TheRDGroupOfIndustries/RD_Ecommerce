import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const ContentWrapper = ({ children }) => {
  return (
    <div className=" fixed top-14 left-1/2 -translate-x-1/2 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 translate-y-6 p-4">
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
    { title: "With Category", path: "/shop-with-category" },
    { title: "Filters Top Bar", path: "/shop-filters-top-bar" },
    { title: "Sidebar", path: "/shop-sidebar" },
    { title: "Style 1", path: "/shop-style-1" },
    { title: "Style 2", path: "/shop-style-2" },
  ],
  "Product Structure": [
    { title: "Default", path: "/product-default" },
    { title: "Thumbnail", path: "/product-thumbnail" },
    { title: "Grid Media", path: "/product-grid-media" },
    { title: "Carousel", path: "/product-carousel" },
    { title: "Full Width", path: "/product-full-width" },
  ],
  "Shop Pages": [
    { title: "Wishlist", path: "/shop-wishlist" },
    { title: "Cart", path: "/shop-cart" },
    { title: "Checkout", path: "/shop-checkout" },
    { title: "Compare", path: "/shop-compare" },
    { title: "Order Tracking", path: "/shop-order-tracking" },
    { title: "Login", path: "/shop-login" },
    { title: "Registration", path: "/shop-registration" },
    { title: "Forget Password", path: "/shop-forget-password" },
  ],
};

const blogNavigations = {
  "Blog Dark Style": [
    { title: "Blog 2 Column", path: "/blog-dark-2-colomn" },
    { title: "Blog 2 Column Sidebar", path: "/blog-dark-2-colomn-sidebar" },
    { title: "Blog 3 Column", path: "/blog-dark-3-colomn" },
    { title: "Blog Half Image", path: "/blog-dark-half-image" },
  ],
  "Blog List Sidebar": [
    { title: "No Sidebar", path: "/blog-list-no-sidebar" },
    { title: "Left Sidebar", path: "/blog-list-left-sidebar" },
    { title: "Right Sidebar", path: "/blog-list-right-sidebar" },
    { title: "Both Sidebar", path: "/blog-list-both-sidebar" },
  ],
  "Blog Page": [
    { title: "Blog Archive", path: "/blog-archive" },
    { title: "Author", path: "/blog-author" },
    { title: "Category", path: "/blog-category" },
    { title: "Tag", path: "/blog-tag" },
  ],
  "Blog Light Style": [
    { title: "Blog 2 Column", path: "/blog-light-2-colomn" },
    { title: "Blog 2 Column Sidebar", path: "/blog-light-2-colomn-sidebar" },
    { title: "Blog Half Image", path: "/blog-light-half-image" },
    { title: "Blog Exclusive", path: "/blog-light-exclusive" },
  ],
  "Blog Grid Sidebar": [
    { title: "No Sidebar", path: "/blog-grid-no-sidebar" },
    { title: "Left Sidebar", path: "/blog-grid-left-sidebar" },
    { title: "Right Sidebar", path: "/blog-grid-right-sidebar" },
    { title: "Both Sidebar", path: "/blog-grid-both-sidebar" },
    { title: "Wide Sidebar", path: "/blog-grid-wide-sidebar" },
  ],
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

const postSections = {
  "Post Types": [
    "Text Post",
    "Image Post",
    "Video Post",
    "Link Post",
    "Audio Post",
    "Post Quote",
    "Tutorial Post",
    "Cateloge Post",
  ],
  "Multiple Media": ["Banner", "Slider", "Gallery", "Status Slider"],
  "Post Layout Type": ["Standard Post", "Corner Post", "Side Post"],
  "Side Bar": ["Left Sidebar", "Right Sidebar", "Both Sidebar", "No Sidebar"],
};

const portfolioItems = [
  {
    path: "portfolio-tiles",
    image: "/portfolio-tiles.c233f7aa.svg",
    title: "Portfolio Tiles",
  },
  {
    path: "collage-style-1",
    image: "/collage-style-1.fa53c4d7.svg",
    title: "Collage Style 1",
  },
  {
    path: "collage-style-2",
    image: "/collage-style-2.f6cebca9.svg",
    title: "Collage Style 2",
  },
  {
    path: "masonry-grid",
    image: "/masonry-grid.38bd74ab.svg",
    title: "Masonary Grid",
  },
  {
    path: "cobble-style-1",
    image: "/cobble-style-1.c0f6e465.svg",
    title: "Cobble Style 1",
  },
  {
    path: "cobble-style-2",
    image: "/cobble-style-2.c7de38e9.svg",
    title: "Cobble Style 2",
  },
  {
    path: "portfolio-thumbs-slider",
    image: "/portfolio-thumbs-slider.8de5035c.svg",
    title: "Portfolio Thumbs Slider",
  },
  {
    path: "portfolio-film-strip",
    image: "/portfolio-film-strip.94dde8da.svg",
    title: "Portfolio Film Strip",
  },
  {
    path: "portfolio-split-slider",
    image: "/portfolio-split-slider.4fa1211b.svg",
    title: "Portfolio Split Slider",
  },
  {
    path: "carousel-showcase",
    image: "/carousel-showcase.e0496453.svg",
    title: "Carousel Showcase",
  },
];

const pageNavigations = {
  Pages: [
    { name: "About Us", path: "/about-us" },
    { name: "About Me", path: "/about-me" },
    { name: "Pricing Table", path: "/pricing" },
    { name: "Our Gift Vouchers", path: "/gift-vouchers" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Faqs 1", path: "/faqs-1" },
    { name: "Faqs 2", path: "/faqs-2" },
    { name: "Our Team", path: "/team" },
  ],
  "Contact Us": [
    { name: "Contact Us 1", path: "/contact-1" },
    { name: "Contact Us 2", path: "/contact-2" },
    { name: "Contact Us 3", path: "/contact-3" },
  ],
  "Web Pages": [
    { name: "Error 404 1", path: "/404-1" },
    { name: "Error 404 2", path: "/404-2" },
    { name: "Coming Soon", path: "/coming-soon" },
    { name: "Under Construction", path: "/under-construction" },
  ],
  "Banner Style": [
    { name: "Banner With BG Color", path: "/banner-bg" },
    { name: "Banner With Image", path: "/banner-image" },
    { name: "Banner With Video", path: "/banner-video" },
    { name: "Banner With Kanbern", path: "/banner-kanbern" },
    { name: "Banner Small", path: "/banner-small" },
    { name: "Banner Medium", path: "/banner-medium" },
    { name: "Banner Large", path: "/banner-large" },
  ],
  "Header Style": [
    { name: "Header Style 1", path: "/header-1" },
    { name: "Header Style 2", path: "/header-2" },
    { name: "Header Style 3", path: "/header-3" },
    { name: "Header Style 4", path: "/header-4" },
    { name: "Header Style 5", path: "/header-5" },
    { name: "Header Style 6", path: "/header-6" },
    { name: "Header Style 7", path: "/header-7" },
  ],
  "Footer Style": [
    { name: "Footer Style 1", path: "/footer-1" },
    { name: "Footer Style 2", path: "/footer-2" },
    { name: "Footer Style 3", path: "/footer-3" },
    { name: "Footer Style 4", path: "/footer-4" },
    { name: "Footer Style 5", path: "/footer-5" },
    { name: "Footer Style 6", path: "/footer-6" },
    { name: "Footer Style 7", path: "/footer-7" },
  ],
  Dashboard: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Orders", path: "/orders" },
    { name: "Orders Details", path: "/orders/details" },
    { name: "Orders Confirmation", path: "/orders/confirmation" },
    { name: "Downloads", path: "/downloads" },
    { name: "Return Request", path: "/returns/request" },
    { name: "Return Request Detail", path: "/returns/detail" },
    { name: "Return Request Confirmed", path: "/returns/confirmed" },
  ],
};

const dashboardLinks = [
  { name: "Dashboard", path: "/account" },
  { name: "Orders", path: "/account/orders" },
  { name: "Orders Details", path: "/account/orders-details" },
  { name: "Orders Confirmation", path: "/account/orders-confirmation" },
  { name: "Downloads", path: "/account/downloads" },
  { name: "Return Request", path: "/account/returns-request" },
  { name: "Return Request Detail", path: "/account/returns-detail" },
  { name: "Return Request Confirmed", path: "/account/returns-confirmed" },
  { name: "Profile", path: "/account/profile" },
  { name: "Address", path: "/account/address" },
  { name: "Shipping Methods", path: "/account/shipping-methods" },
  { name: "Payment Methods", path: "/account/payment-methods" },
  { name: "Review", path: "/account/review" },
  { name: "Billing Address", path: "/account/billing-address" },
  { name: "Shipping Address", path: "/account/shipping-address" },
  { name: "Cancellation Requests", path: "/account/cancellations" },
];

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const openSearchPannel = () => {
    setIsSearchOpen(true);
  };

  return (
    <div className="w-full py-4 px-20 flex items-center justify-between gap-4">
      <div className="">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="cursor-pointer" />
        </Link>
      </div>
      <nav className="flex gap-2">
        <div className="group">
          <li className="px-4 py-2 font-semibold cursor-pointer">Home</li>
          <ContentWrapper>
            <div className="p-10 bg-white flex gap-5 items-center shadow rounded-sm ">
              {homeNavigations.map((page) => (
                <Link key={page.id} to={page.path}>
                  <div className="space-y-2">
                    <div className="h-56 w-56 overflow-hidden">
                      <img
                        src={page.image}
                        alt={page.title}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-center font-semibold ">{page.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </ContentWrapper>
        </div>
        <div className="group">
          <li className="px-4 py-2 font-semibold cursor-pointer">Shop</li>
          <ContentWrapper>
            <div className="bg-white p-10 flex flex-nowrap gap-10 shadow rounded-sm">
              {/* Shop Structure */}
              <div className="space-y-6">
                <div className="flex gap-32 whitespace-nowrap">
                  {Object.entries(shopNavigations).map(([section, items]) => (
                    <div key={section}>
                      <h3 className="text-lg font-semibold mb-3">{section}</h3>
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

                <div className="border border-gray-400 p-4 w-full flex items-center rounded-sm gap-10">
                  <div className="">
                    <h4 className="text-lg font-bold mb-2">
                      Deal of the month
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 ">
                      Yes! Send me exclusive offers, personalised, and unique
                      gift ideas, tips for shopping on Pixio
                    </p>
                    <button className="text-blue-500 font-medium hover:underline mb-4">
                      View All Products
                    </button>
                  </div>

                  {/* Countdown */}
                  <div className="flex justify-center gap-3 text-sm font-medium text-center">
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

              <div className="">
                {/* Image + Deal of the Month */}
                <div className="flex flex-col items-center w-80">
                  {/* Image */}
                  <img
                    src="/adv-1.webp"
                    alt="Fashion"
                    className="rounded-2xl mb-4 w-full object-cover"
                  />
                </div>

                {/* Deal of the Month */}
              </div>
            </div>
          </ContentWrapper>
        </div>
        <div className="group">
          <li className="px-4 py-2 font-semibold cursor-pointer">Blog</li>
          <ContentWrapper>
            <div className="bg-white p-10 flex flex-nowrap gap-10 shadow rounded-sm">
              {/* Blog columns */}
              <div className="w-2xl grid grid-cols-3 gap-10 whitespace-nowrap">
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
              </div>

              {/* Recent Posts */}
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
          </ContentWrapper>
        </div>
        <div className="group">
          <li className="px-4 py-2 font-semibold cursor-pointer">
            Post Layout
          </li>
          <ContentWrapper>
            <div className="bg-white p-10 flex flex-nowrap gap-10 shadow rounded-sm">
              {/* Post Types */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Post Types</h3>
                <ul className="space-y-2 text-gray-600">
                  {postSections["Post Types"].map((item) => (
                    <li key={item} className="hover:text-black cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Multiple Media + Post Layout Type */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Multiple Media</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  {postSections["Multiple Media"].map((item) => (
                    <li key={item} className="hover:text-black cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mb-4">Post Layout Type</h3>
                <ul className="space-y-2 text-gray-600">
                  {postSections["Post Layout Type"].map((item) => (
                    <li key={item} className="hover:text-black cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Side Bar */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Side Bar</h3>
                <ul className="space-y-2 text-gray-600">
                  {postSections["Side Bar"].map((item) => (
                    <li key={item} className="hover:text-black cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ContentWrapper>
        </div>
        <div className="group">
          <li className="px-4 py-2 font-semibold cursor-pointer">Portfolio</li>
          <ContentWrapper>
            <div className="w-full bg-white p-10 shadow rounded-sm flex gap-5">
              <div className="w-3xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {portfolioItems.map((item) => (
                  <Link
                    key={`${item.path}dfjgslfg`}
                    to={item.path}
                    className="group"
                  >
                    <div
                      key={item.title}
                      className="flex flex-col items-center"
                    >
                      <div className="w-32">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className=" text-center text-sm font-medium text-gray-700 ">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="whitespace-nowrap px-10 flex-col flex gap-1">
                <h2 className="font-bold text-lg mb-1">Portfolio Details</h2>
                <Link
                  to="/portfolio-details-1"
                  className="text-gray-600 hover:text-red-500"
                >
                  Portfolio Details 1
                </Link>
                <Link
                  to="/portfolio-details-2"
                  className="text-gray-600 hover:text-red-500"
                >
                  Portfolio Details 2
                </Link>
                <Link
                  to="/portfolio-details-3"
                  className="text-gray-600 hover:text-red-500"
                >
                  Portfolio Details 3
                </Link>
                <Link
                  to="/portfolio-details-4"
                  className="text-gray-600 hover:text-red-500"
                >
                  Portfolio Details 4
                </Link>
                <Link
                  to="/portfolio-details-5"
                  className="text-gray-600 hover:text-red-500"
                >
                  Portfolio Details 5
                </Link>
              </div>
            </div>
          </ContentWrapper>
        </div>
        <div className="group">
          <li className="px-4 py-2 font-semibold cursor-pointer">Pages</li>
          <ContentWrapper>
            <div className="bg-white p-10 flex flex-nowrap gap-10 shadow rounded-sm">
              {Object.entries(pageNavigations).map(([section, items]) => (
                <div key={section} className="whitespace-nowrap">
                  <h3 className="text-lg font-semibold mb-4">{section}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {items.map(({ name, path }) => (
                      <li key={name} className="hover:text-black">
                        <Link to={path} className="block whitespace-nowrap">
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {section === "Header Style" && (
                    <div className="col-span-full flex justify-center mt-4">
                      <button className="px-6 py-2 rounded-full border-2 font-semibold text-sm flex items-center gap-2 bg-white text-black border-red-400 hover:shadow transition-all bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text hover:bg-clip-border hover:text-black duration-200">
                        <span className="text-black">Menu Styles</span>
                        <span className="text-black text-lg">➜</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ContentWrapper>
        </div>
        {/* {isAuthenticated && ( */}
          <div className="group">
            <li className="px-4 py-2 font-semibold cursor-pointer">
              My Account
            </li>
            <ContentWrapper>
              <div className="bg-white p-10 flex flex-nowrap gap-10 shadow rounded-sm">
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
        {/* )} */}
      </nav>
      <div className="flex items-center gap-10 justify-between">
        <div className="flex items-center gap-8">
          <button onClick={openSearchPannel} className="cursor-pointer">
            <Search style={{ width: "20px", height: "20px" }} />
          </button>
          {/* {isAuthenticated ? ( */}
          <>
            <Link to={"/account/wishlist"} className="">
              <Heart style={{ width: "20px", height: "20px" }} />
            </Link>
            <Link to={"/account/cart"} className="relative">
              <div className="absolute -right-3 -top-3 rounded-full">5</div>
              <ShoppingCart style={{ width: "20px", height: "20px" }} />
            </Link>
            <Link to={"/account"}>
              <CgProfile size={30} />
            </Link>
          </>
          {/* ) : ( */}
          <button>
            <Link to={"/auth/login"}>Login/Register</Link>
          </button>
          {/* )} */}
        </div>
      </div>

      {isSearchOpen && <SearchProduct setIsSearchOpen={setIsSearchOpen} />}
    </div>
  );
};

export default Header;
