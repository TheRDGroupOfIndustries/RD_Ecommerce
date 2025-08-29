import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeIndexOne,
  HomeIndexThree,
  HomeIndexTwo,
} from "./pages/home/index.jsx";
import { blogRoutes } from "./pages/blog/index.jsx";
import { shopRoutes } from "./pages/shop/index.jsx";
import { productRoute } from "./pages/product/index.jsx";
import { Account, accountRoute, Checkout, Dashboard } from "./pages/account";
import AuthLayout from "./pages/auth/AuthLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { AboutUs, ContactUs } from "./pages";
import NextLogin from "./pages/auth/NextLogin.jsx";
import AuthCallback from "./pages/auth/AuthCallback.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeIndexOne /> },
      { path: "index-2", element: <HomeIndexTwo /> },
      { path: "index-3", element: <HomeIndexThree /> },
      ...blogRoutes,
      ...shopRoutes,
      ...productRoute,
      {
        path: "account",
        element: <Account />,
        children: [...accountRoute],
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "blog/:slug",
        element: <BlogDetails />,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "callback",
            element: <AuthCallback />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
