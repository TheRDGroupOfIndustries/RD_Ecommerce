import { Link } from "react-router-dom";

const MobileProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 group">
      <div className="relative w-full h-48 sm:h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 object-top"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x300/CCCCCC/666666?text=Image+Error";
          }}
        />
        {product.discount && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-3 py-1 rounded-full font-semibold">
            {product.discount}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <div className="flex items-baseline mb-3">
          <span className="text-xl font-bold text-black mr-2">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
          Add to Cart
        </button>
        <Link to="/shop-list" className="w-full border py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300 mt-2 inline-block text-center">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MobileProductCard;