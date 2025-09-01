import { Minus, Plus, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { RiShipLine } from "react-icons/ri";
import Slider from "react-slick";
import {
  CarouselDetailsSection,
  DefaultDetailsSection,
  FullWidthDetailsSection,
  GridMediaDetailsSection,
  RelatedProducts,
  ReviewForm,
  ThumbnailDetailsSection,
} from "../../components";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../services/productService";
import toast from "react-hot-toast";
import { getReview } from "../../services/reviewService";

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
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  let { id } = useParams();
  const { pathname } = useParams();

  const fetchProductDetails = async () => {
    id = id || "687e1a9ae6aa3c62be4bcdb8"; // Default ID for testing
    const res = await getProductDetails(id);
    if (res) {
      setProduct(res);
    } else {
      toast.error("Failed to fetch product details");
    }
  };

  const fetchReviews = async () => {
    const res = await getReview(id);
    if (res) {
      setReviews(res);
    }
  };

  useEffect(() => {
    fetchProductDetails();
    fetchReviews();
  }, [id, pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {route === "default" ? (
        <DefaultDetailsSection product={product} reviews={reviews} />
      ) : route === "thumbnail" ? (
        <ThumbnailDetailsSection product={product} reviews={reviews} />
      ) : route === "grid-media" ? (
        <GridMediaDetailsSection product={product} reviews={reviews} />
      ) : route === "carousel" ? (
        <CarouselDetailsSection product={product} reviews={reviews} />
      ) : route === "full-width" ? (
        <FullWidthDetailsSection product={product} reviews={reviews} />
      ) : null}

      <section className="px-4 py-8 md:px-8 lg:px-20 lg:py-12 mx-auto my-8">
        {/* Tab Navigation */}
        {/* <div className="w-full flex  items-center gap-6 sm:gap-10 justify-center border-b border-gray-200 mb-8">
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
        </div> */}

        {/* Tab Content */}
        {/* {tab === "description" ? ( */}
        <div className="p-4 sm:p-6 lg:p-10 text-center">
          <h2 className="font-bold text-xl md:text-2xl text-gray-900 mb-4">
            {product?.title || "Product Title"}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base max-w-3xl mx-auto">
            {product?.description}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            doloremque sit tempora voluptate iste quibusdam vero excepturi
            dicta! Aliquam animi reprehenderit sint fuga quis est voluptatibus
            omnis qui quibusdam, fugiat modi.
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
              src={product?.images[0]}
              alt="Product detail 1"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md object-top"
            />
            <img
              src={product?.images[1] || images[1]}
              alt="Product detail 2"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src={product?.images[2] || images[2]}
              alt="Product detail 3"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md object-bottom"
            />
          </div>
        </div>
        {/* ) : tab === "reviews" ? ( */}
        <div className="p-4 sm:p-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Comments Section */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Customer Reviews ({reviews.length})
            </h2>
            <p className="text-gray-600 mb-6 text-base">
              See what our customers are saying about this product.
            </p>

            <div className="space-y-8">
              {reviews.length === 0 ? (
                <p className="text-gray-600 text-center py-4">
                  No reviews yet. Be the first to review!
                </p>
              ) : (
                reviews.reverse().map((review, idx) => (
                  <div
                    key={review._id}
                    className=" shadow-md rounded-2xl p-4 flex flex-col gap-3 w-full"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={review.user.profile_image}
                        alt={"profile Image"}
                        className="w-12 h-12 rounded-full object-cover border"
                      />
                      <div>
                        <h3 className="text-lg font-semibold capitalize">
                          {review.user.first_name} {review.user.last_name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {review.user.country}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={18}
                          className={`${
                            index < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-700">{review.description}</p>

                    <div className="text-right text-sm text-gray-400">
                      {review.createdAt.split("T")[0].replaceAll("-", "/")}
                    </div>
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

            <ReviewForm productId={id} setReviews={setReviews} />
          </div>
        </div>
        {/* ) : null} */}
      </section>

      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
