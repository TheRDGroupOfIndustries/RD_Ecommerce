import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => (
  <div className=" p-6 rounded-lg shadow-md border border-gray-200">
    <div className="flex items-center space-x-4 mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full object-cover border border-gray-200"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/80x80/F3F4F6/1F2937?text=User";
        }}
      />
      <div>
        <p className="text-lg font-semibold text-gray-900">
          {testimonial.name}
        </p>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar size={16} className="text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
  </div>
);

const Reviews = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=MP",
      name: "Michel Poe",
      rating: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
      id: 2,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=CA",
      name: "Celesto Anderson",
      rating: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
      id: 3,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=MR",
      name: "Monsur Rahman Lito",
      rating: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
      id: 4,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=JD",
      name: "Johan Doe",
      rating: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
  ]);
  return (
    <div className="w-full">
      {testimonials.length === 0 ? (
        <p className="text-center text-gray-600">No testimonials available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
