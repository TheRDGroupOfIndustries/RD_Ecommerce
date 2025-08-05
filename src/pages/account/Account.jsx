import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ShopTopBanner from "../../components/ShopTopBanner";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { Menu, X } from "lucide-react";
import { IoClose } from "react-icons/io5";

const navItems = [
  {
    section: "DASHBOARD",
    items: [
      "Dashboard",
      "Orders",
      "Cart",
      "Wishlist",
      "Downloads",
      "Return request",
    ],
  },
  {
    section: "ACCOUNT SETTINGS",
    items: ["Profile", "Address", "Review"],
  },
];

const Account = () => {
  const { userData } = useSelector((state) => state.auth);
  const TextImage =
    userData &&
    (
      userData.first_name.slice(0, 1) + userData.last_name.slice(0, 1)
    ).toUpperCase();

  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section className="w-full">
      <ShopTopBanner />
      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-10 flex flex-col lg:flex-row gap-8 lg:gap-8  md:z-10">
        {/* Mobile menu toggle button */}
        <div className="lg:hidden mb-4 ">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 text-gray-800 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Menu className="w-5 h-5" /> Show Menu
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-16 inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out lg:sticky lg:h-fit lg:w-[300px] lg:flex-shrink-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <aside className="w-full h-full bg-white rounded-xl shadow-lg lg:shadow-md overflow-y-auto pt-20 md:pt-0">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute md:hidden top-20 right-8 bg-black p-2 text-white rounded-full"
            >
              <IoClose className="w-5 h-5" />{" "}
            </button>
            {/* Profile */}
            <div className="flex flex-col items-center py-6 border-b border-gray-200">
              <img
                src={userData?.profile_image}
                alt={userData?.first_name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/100x100/F3F4F6/1F2937?text=${TextImage}`;
                }}
              />
              <h2 className="mt-3 font-semibold text-lg sm:text-xl capitalize text-gray-900">
                {userData?.first_name} {userData?.last_name}
              </h2>
              <p className="text-blue-600 text-sm sm:text-base">
                {userData?.email}
              </p>
            </div>

            {/* Navigation */}
            <nav className="text-sm">
              {navItems.map((section, idx) => (
                <div key={idx} className="mb-2 last:mb-0">
                  <div className="bg-[#fdf6ee] px-6 py-3 text-gray-600 font-medium uppercase text-xs tracking-wide">
                    {section.section}
                  </div>
                  <ul className="py-2">
                    {section.items.map((item, index) => (
                      <Link
                        to={
                          item === "Dashboard"
                            ? ""
                            : `${item.toLowerCase().replaceAll(" ", "-")}`
                        }
                        key={index}
                        onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
                      >
                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer">
                          {item}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold cursor-pointer w-full text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </aside>
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content (Outlet) */}
        <div className="flex-1 min-h-[500px] lg:min-h-0 ">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Account;
