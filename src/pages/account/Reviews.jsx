import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Star } from "lucide-react";
import { useSelector } from "react-redux";
import { getUserReviews } from "../../services/reviewService";

const ReviewCard = ({ review }) => {
  const { product, rating, description, user } = review;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-md mx-auto">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        <img
          src={product?.images[0]}
          alt={product?.title}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold">{product?.title}</h3>
          <p className="text-gray-600">₹{product?.price}</p>
        </div>
      </div>

      {/* User Review */}
      <div className="mt-4 border-t pt-3">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating ? "text-yellow-500 fill-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>
        <p className="text-sm text-gray-700 mt-2 font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { userData, isAuthenticated } = useSelector((state) => state.auth);

  const fetchReviews = async () => {
    const response = await getUserReviews(userData?._id);
    if (response) {
      // connsole.log("Review Response: ", response);

      setReviews(response);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchReviews();
    }
  }, [isAuthenticated]);

  return (
    <div className="w-full">
      {reviews.length === 0 ? (
        <p className="text-center text-gray-600">No Reviews available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review?._id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
