import { Star, StarHalf, StarOff } from "lucide-react";

const RatingStars = ({ rating = 0, outOf = 5, interactive = false, onRate }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = outOf - fullStars - (hasHalfStar ? 1 : 0);

  const handleClick = (index) => {
    if (!interactive || !onRate) return;
    onRate(index + 1);
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className={`w-5 h-5 text-yellow-500 cursor-${interactive ? "pointer" : "default"}`}
          fill="currentColor"
          onClick={() => handleClick(i)}
        />
      ))}
      {hasHalfStar && (
        <StarHalf
          className={`w-5 h-5 text-yellow-500 cursor-${interactive ? "pointer" : "default"}`}
          fill="currentColor"
          onClick={() => handleClick(fullStars)}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff
          key={`empty-${i}`}
          className={`w-5 h-5 text-gray-300 cursor-${interactive ? "pointer" : "default"}`}
          onClick={() => handleClick(fullStars + (hasHalfStar ? 1 : 0) + i)}
        />
      ))}
    </div>
  );
};

export default RatingStars;
