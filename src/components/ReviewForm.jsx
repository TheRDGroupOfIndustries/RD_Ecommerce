import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { createReview } from "../services/reviewService";
import { useState } from "react";
import BtnLoader from "./BtnLoader";
import RatingStars from "./RatingStars";

export default function ReviewForm({ productId, setReviews }) {
  const { userData } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Form Data:", data);

    const review = {
      product: productId,
      user: userData._id,
      rating: userRating,
      description: data.description,
    }

    console.log("Review data: ", review);
    
    const res = await createReview(review);

    if (res) {
      console.log("Review created successfully", res);
      setReviews(res);
    }

    reset();
    setUserRating(0)
    setLoading(false);
  };

  return (
    <div className="w-full mx-auto  rounded-2xl  mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize"
            placeholder="Enter your name"
            value={`${userData?.first_name} ${userData?.last_name}`}
            disabled={true}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Rating</label>
          {/* <select
            {...register("rating", { required: "Rating is required" })}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a rating</option>
            {[1, 2, 3, 4, 5].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select> */}
          <RatingStars rating={userRating} interactive onRate={(value) => setUserRating(value)} />
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your review..."
            rows={4}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 cursor-pointer py-2 rounded-xl hover:bg-blue-700 transition"
          >
            {loading ? <BtnLoader/> : "Submit Review"}
          </button>
        </div>
      </form>
    </div>
  );
}
