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

      <section className="px-20 py-10">
        <div className="w-full flex items-center gap-5 justify-center border-b">
          <button
            onClick={() => setTab("description")}
            className={`${
              tab === "description" && "border-b-2"
            } py-4 cursor-pointer font-semibold`}
          >
            Description
          </button>
          <button
            onClick={() => setTab("reviews")}
            className={`${
              tab === "reviews" && "border-b-2"
            } py-4 cursor-pointer font-semibold`}
          >
            Reviews (20)
          </button>
        </div>
        {tab === "description" ? (
          <div className="text-center py-10">
            <h2 className="font-semibold text-xl mb-2">
              Flawless Denim Delights
            </h2>
            <p>
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
            <div className="flex items-center justify-between mt-10 gap-5">
              <div className="flex items-center justify-between gap-2">
                <div className="p-2 rounded-full border-[1px] ">
                  <IoCheckmark size={28} />
                </div>
                <h3 className="text-lg font-semibold">
                  Versatile, enduring style for all occasions
                </h3>
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="p-2 rounded-full border-[1px] ">
                  <IoCheckmark size={28} />
                </div>
                <h3 className="text-lg font-semibold">
                  Versatile, enduring style for all occasions
                </h3>
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="p-2 rounded-full border-[1px] ">
                  <IoCheckmark size={28} />
                </div>
                <h3 className="text-lg font-semibold">
                  Versatile, enduring style for all occasions
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 p-10 ">
              <img src={images[0]} alt="" className="h-full rounded-2xl" />
              <img src={images[1]} alt="" className="h-full rounded-2xl" />
              <img src={images[2]} alt="" className="h-full rounded-2xl" />
            </div>
          </div>
        ) : tab === "reviews" ? (
          <div className="">
            <div className="px-10 py-10">
              <h2 className="text-xl font-bold mb-1">
                Comments (0{comments.length})
              </h2>
              <p className="text-gray-600 mb-6">
                There are many variations of passages of Lorem Ipsum available.
              </p>

              <div className="space-y-6">
                {comments.map((c, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between border-b pb-6"
                  >
                    <div className="flex gap-4">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{c.name}</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          {c.comment}
                        </p>
                      </div>
                    </div>
                    <button className="bg-black text-white text-xs px-4 py-1 rounded font-semibold mt-2 hover:bg-gray-800 transition">
                      REPLY
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h2 className="text-xl font-bold mb-1">Good Comments</h2>
              <p className="text-gray-600 mb-6">
                There are many variations of passages of Lorem Ipsum available.
              </p>

              <form className="space-y-4">
                {/* Author + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Author"
                    className="w-full p-4 rounded border outline-none bg-[#fdf6ee] placeholder:text-gray-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 rounded border outline-none bg-[#fdf6ee] placeholder:text-gray-500"
                  />
                </div>

                {/* Comment Textarea */}
                <textarea
                  placeholder="Type Comment Here"
                  rows={5}
                  className="w-full p-4 rounded border outline-none bg-[#fdf6ee] placeholder:text-gray-500"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-6 py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition"
                >
                  Submit Now
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
