// src/pages/shop/index.js

import ShopStandard from "./ShopStandard";
import ShopList from "./ShopList";
import ShopWithCategory from "./ShopWithCategory";
import ShopFiltersTopBar from "./ShopFiltersTopBar";
import ShopSidebar from "./ShopSidebar";
import ShopStyle1 from "./ShopStyle1";
import ShopStyle2 from "./ShopStyle2";


import ShopWishlist from "./ShopWishlist";
import ShopCart from "./ShopCart";
import ShopCheckout from "./ShopCheckout";
import ShopCompare from "./ShopCompare";
import ShopOrderTracking from "./ShopOrderTracking";
import ShopLogin from "./ShopLogin";
import ShopRegistration from "./ShopRegistration";
import ShopForgetPassword from "./ShopForgetPassword";

export {
  ShopStandard,
  ShopList,
  ShopWithCategory,
  ShopFiltersTopBar,
  ShopSidebar,
  ShopStyle1,
  ShopStyle2,
  ShopWishlist,
  ShopCart,
  ShopCheckout,
  ShopCompare,
  ShopOrderTracking,
  ShopLogin,
  ShopRegistration,
  ShopForgetPassword,
};

//
export const shopRoutes = [
  // Shop Structure
  { path: "shop-standard", element: <ShopStandard viewMode={"grid"}/> },
  { path: "shop-list", element: <ShopStandard viewMode={"list"}/> },
  { path: "shop-with-category", element:  <ShopStandard viewMode={"grid"} categorySection /> },
  { path: "shop-filters-top-bar", element: <ShopFiltersTopBar /> },
  { path: "shop-sidebar", element: <ShopSidebar /> },
  { path: "shop-style-1", element: <ShopStyle1 /> },
  { path: "shop-style-2", element: <ShopStyle2 /> },

  // Shop Shops
  { path: "shop-wishlist", element: <ShopWishlist /> },
  { path: "shop-cart", element: <ShopCart /> },
  { path: "shop-checkout", element: <ShopCheckout /> },
  { path: "shop-compare", element: <ShopCompare /> },
  { path: "shop-order-tracking", element: <ShopOrderTracking /> },
  { path: "shop-login", element: <ShopLogin /> },
  { path: "shop-registration", element: <ShopRegistration /> },
  { path: "shop-forget-password", element: <ShopForgetPassword /> },
];
