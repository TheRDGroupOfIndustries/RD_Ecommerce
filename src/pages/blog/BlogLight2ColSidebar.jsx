import React from "react";
import { blogDetails } from "../../store/data";
import { BlogProductCard, BlogSidebar } from "../../components";

const BlogLight2ColSidebar = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20 grid gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {blogDetails.slice(0, 4).map((item) => (
              <BlogProductCard theme="light" infoWidth={"100%"} item={item} />
            ))}
    
            <div className="col-span-full flex items-center justify-center pt-4 pb-10">
              <button className="px-6 py-2 bg-black rounded-lg text-white text-sm md:text-base hover:bg-gray-800 transition-colors">
                Show More
              </button>
            </div>
          </div>
          <BlogSidebar className="col-span-1 hidden lg:block" />{" "}
          {/* BlogSidebar is hidden on small/medium screens */}
        </div>
  );
};

export default BlogLight2ColSidebar;
