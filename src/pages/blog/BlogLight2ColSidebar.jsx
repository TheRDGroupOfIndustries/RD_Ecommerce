import React from "react";
import { blogDetails } from "../../store/data";
import { BlogProductCard, BlogSidebar } from "../../components";

const BlogLight2ColSidebar = () => {
  return (
    <div className="w-full p-20 grid gap-10 grid-cols-3">
      <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogDetails.slice(0, 4).map((item) => (
          <BlogProductCard theme="dark" infoWidth={"100%"} item={item} />
        ))}

        <div className="col-span-full flex items-center justify-center py-10">
          <button className="px-6 py-2 bg-black rounded-lg text-white">
            Show More
          </button>
        </div>
      </div>
      <BlogSidebar />
    </div>
  );
};

export default BlogLight2ColSidebar;
