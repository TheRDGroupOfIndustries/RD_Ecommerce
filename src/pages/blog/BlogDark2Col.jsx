import React, { useEffect } from "react";
import { blogDetails } from "../../store/data";
import { BlogProductCard } from "../../components";
import { getPosts } from "../../services/SanityServices";

const BlogDark2Col = () => {
  const [blogs, setBlogs] = React.useState([]);


   const fetchPosts = async () => {
    try {
      const response = await getPosts();
      console.log("Sanity posts: ", response);
      setBlogs(response);
      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 xl:px-40 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      {blogs.slice(0, 4).map((blog) => (
        <BlogProductCard key={blog.title} theme="dark" infoWidth={"70%"} blog={blog} />
      ))}

      {/* <div className="col-span-full flex items-center justify-center py-10">
        <button className="px-6 py-2 bg-black rounded-lg text-white">
          Show More
        </button>
      </div> */}
    </div>
  );
};

export default BlogDark2Col;
