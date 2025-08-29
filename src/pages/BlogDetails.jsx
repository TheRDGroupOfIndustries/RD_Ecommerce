import React, { useEffect, useState } from "react";
import { getPost } from "../services/SanityServices";
import { useParams } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";

function BlogDetails() {
  const slug = useParams().slug;
  const [blog, setBlog] = useState(null);

  const fetchPosts = async () => {
    try {
      // console.log("Fetching blog post with slug:", slug);
      const response = await getPost(slug);
      // console.log("Sanity post:", response);
      setBlog(response);
      return response;
    } catch (error) {
      // console.log(error);
      return null;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <div
        className="flex flex-col justify-end text-white h-[calc(100vh-4rem)] px-6 md:px-16 lg:px-24 pb-12"
        style={{
          backgroundImage: `url(${blog?.coverImage?.asset?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat",
          textShadow: "2px 2px 10px black",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <div>
            <h5 className="uppercase tracking-wide text-gray-900 text-sm md:text-base">
              {blog?.tag}
            </h5>
            <h1 className="font-bold text-gray-900 text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight" style={{
                textShadow: "2px 2px 10px white",
            }}>
              {blog?.title}
            </h1>
          </div>
          <p className="text-gray-900 font-semibold text-sm md:text-base">
            {blog?.date ? new Date(blog.date).toDateString() : ""}
          </p>
        </div>
      </div>

      {/* Blog Content */}
      {blog?.content && (
        <div className="max-w-4xl mx-auto my-10 px-6 md:px-0">
          {blog?.content.map((block) => {
            if (block._type === "block") {
              if (block.style === "h4") {
                return (
                  <h4
                    key={block._key}
                    className="font-semibold text-xl md:text-3xl mt-8 mb-4"
                  >
                    {block.children.map((child) => child.text).join("")}
                  </h4>
                );
              }
              if (block.listItem === "bullet") {
                return (
                  <ul key={block._key} className="list-disc list-inside pl-4 mb-4">
                    <li className="text-gray-700 leading-relaxed font-semibold flex gap-2">
                      <ArrowBigRight/> {block.children.map((child) => child.text).join("")}
                    </li>
                  </ul>
                );
              }
              return (
                <p
                  key={block._key}
                  className="text-lg text-gray-800 leading-relaxed mb-6"
                >
                  {block.children.map((child) => child.text).join("")}
                </p>
              );
            }

            if (block._type === "image") {
              return (
                <img
                  key={block._key}
                  src={block.asset.url}
                  alt=""
                  className="w-full rounded-lg my-6"
                />
              );
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
