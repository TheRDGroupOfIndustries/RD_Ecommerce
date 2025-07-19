import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { RiShipLine } from "react-icons/ri";
import Slider from "react-slick";
import { CarouselDetailsSection, DefaultDetailsSection, FullWidthDetailsSection, GridMediaDetailsSection, RelatedProducts, ThumbnailDetailsSection } from "../../components";

const images = [
  "/details/product1.webp",
  "/details/product2.webp",
  "/details/product3.webp",
];

const comments = [
  {
    name: "Michel Poe",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Celesto Anderson",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Monsur Rahman Lito",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
const ProductDetails = ({ route }) => {

  const [tab, setTab] = useState("description");


  return (
    <>
      {route === "default" ? (
        <DefaultDetailsSection />
      ) : route === "thumbnail" ? (
        <ThumbnailDetailsSection />
      ) : route === "grid-media" ? (
        <GridMediaDetailsSection />
      ) : route === "carousel" ? (
        <CarouselDetailsSection/>
      ) : route === "full-width" ? (
        <FullWidthDetailsSection />
      ) : null}

      <section className="px-4 py-8 md:px-8 lg:px-20 lg:py-12 mx-auto my-8">
      {/* Tab Navigation */}
      <div className="w-full flex  items-center gap-6 sm:gap-10 justify-center border-b border-gray-200 mb-8">
        <button
          onClick={() => setTab("description")}
          className={`py-4 cursor-pointer font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
            tab === "description"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "border-b-2 border-transparent"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setTab("reviews")}
          className={`py-4 cursor-pointer font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
            tab === "reviews"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "border-b-2 border-transparent"
          }`}
        >
          Reviews (12)
        </button>
      </div>

      {/* Tab Content */}
      {tab === "description" ? (
        <div className="p-4 sm:p-6 lg:p-10 text-center">
          <h2 className="font-bold text-xl md:text-2xl text-gray-900 mb-4">
            Flawless Denim Delights: The Ultimate Casual Chic
          </h2>
          <p className="text-gray-700 leading-relaxed text-base max-w-3xl mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            doloremque sit tempora voluptate iste quibusdam vero excepturi
            dicta! Aliquam animi reprehenderit sint fuga quis est voluptatibus
            omnis qui quibusdam, fugiat modi. Voluptatum temporibus magnam
            ipsum eos illum amet, reiciendis consequuntur dignissimos
            asperiores adipisci sapiente perferendis eum cupiditate. A
            quibusdam libero, soluta ducimus, veniam maiores quos ipsam
            distinctio est doloremque minima, sit aut voluptas iure sequi
            expedita praesentium nemo odio natus eaque omnis error id nostrum?
            Molestias neque quis soluta vitae pariatur eveniet commodi,
            perferendis in qui repellat, eligendi nemo, inventore ut
            voluptates dolor ullam sunt voluptatum at quaerat quo. Architecto
            consequatur aliquid ullam aspernatur.
          </p>

          {/* Product Features / Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex-shrink-0 text-blue-600">
                <IoCheckmark size={24} />
              </div>
              <h3 className="text-base font-semibold text-gray-800 text-left">
                Versatile, enduring style for all occasions
              </h3>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex-shrink-0 text-blue-600">
                <IoCheckmark size={24} />
              </div>
              <h3 className="text-base font-semibold text-gray-800 text-left">
                Premium quality fabric for ultimate comfort
              </h3>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex-shrink-0 text-blue-600">
                <IoCheckmark size={24} />
              </div>
              <h3 className="text-base font-semibold text-gray-800 text-left">
                Fashion-forward design that turns heads
              </h3>
            </div>
          </div>

          {/* Product Images in Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4 sm:p-0">
            <img
              src={images[0]}
              alt="Product detail 1"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md object-top"
            />
            <img
              src={images[1]}
              alt="Product detail 2"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src={images[2]}
              alt="Product detail 3"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md object-bottom"
            />
          </div>
        </div>
      ) : tab === "reviews" ? (
        <div className="p-4 sm:p-6 lg:p-10">
          {/* Comments Section */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Customer Reviews ({comments.length})
            </h2>
            <p className="text-gray-600 mb-6 text-base">
              See what our customers are saying about this product.
            </p>

            <div className="space-y-8">
              {comments.length === 0 ? (
                <p className="text-gray-600 text-center py-4">
                  No reviews yet. Be the first to review!
                </p>
              ) : (
                comments.map((c, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
                  >
                    <div className="flex gap-4 items-start">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-100 flex-shrink-0 object-top"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {c.name}
                        </h4>
                        <p className="text-gray-700 text-base leading-relaxed mt-1">
                          {c.comment}
                        </p>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md font-semibold text-xs hover:bg-blue-700 transition-colors duration-200">
                      REPLY
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Leave a Review Form */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Leave a Review
            </h2>
            <p className="text-gray-600 mb-6 text-base">
              Share your thoughts on this product.
            </p>

            <form className="space-y-4">
              {/* Author + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white placeholder:text-gray-500 text-gray-800"
                  aria-label="Your Name"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white placeholder:text-gray-500 text-gray-800"
                  aria-label="Your Email"
                />
              </div>

              {/* Comment Textarea */}
              <textarea
                placeholder="Type your comment here..."
                rows={5}
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white placeholder:text-gray-500 text-gray-800 resize-y"
                aria-label="Your Comment"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </section>

      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
