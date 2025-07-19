import React from "react";
import { Link, Outlet } from "react-router-dom";
import ShopTopBanner from "../../components/ShopTopBanner";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";

const user = {
  name: "Ronald M. Spino",
  email: "info@example.com",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
};

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
  // const dispatch = useDispatch();
  const handleLogout = () => {
    // dispatch(logout());
  };
  return (
    <section className="w-full ">
      <ShopTopBanner />
      <div className="flex p-20 gap-20">
        <div className="w-[350px]  sticky top-[90px] h-full ">
          {" "}
          <aside className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Profile */}
            <div className="flex flex-col items-center py-6 border-b">
              <img
                src={userData?.profile_image}
                alt={userData?.first_name}
                className="w-20 h-20 rounded-full border-4 border-white shadow"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/100x100/F3F4F6/1F2937?text=${TextImage}`;
                }}
              />
              <h2 className="mt-3 font-semibold text-lg capitalize">
                {userData?.first_name} {userData?.last_name}
              </h2>
              <p className="text-red-500 text-sm">{userData?.email}</p>
            </div>

            {/* Navigation */}
            <div className="text-sm">
              {navItems.map((section, idx) => (
                <div key={idx}>
                  <div className="bg-[#fdf6ee] px-6 py-2 text-gray-500 font-medium uppercase text-xs tracking-wide">
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
                      >
                        <li
                          key={index}
                          className="px-6 py-2 text-black hover:bg-gray-100 cursor-pointer"
                        >
                          {item}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 hover:bg-red-500 text-amber-50 cursor-pointer duration-200 w-full text-lg font-semibold"
            >
              Logout
            </button>
          </aside>
        </div>
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Account;
