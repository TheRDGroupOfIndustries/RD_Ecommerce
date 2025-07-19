import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

function SearchProduct({setIsSearchOpen}) {
  // State for search term, selected category, and products
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'https://placehold.co/200x250/F3F4F6/1F2937?text=Bliss+Dress',
      name: 'Bliss Dress',
      price: 40.00,
    },
    {
      id: 2,
      image: 'https://placehold.co/200x250/F3F4F6/1F2937?text=Glam+Pants',
      name: 'Glam Pants',
      price: 40.00,
    },
    {
      id: 3,
      image: 'https://placehold.co/200x250/F3F4F6/1F2937?text=Leggings',
      name: 'Leggings',
      price: 40.00,
    },
    {
      id: 4,
      image: 'https://placehold.co/200x250/F3F4F6/1F2937?text=Classic+Capri',
      name: 'Classic Capri',
      price: 40.00,
    },
    {
      id: 5,
      image: 'https://placehold.co/200x250/F3F4F6/1F2937?text=Dapper+Coat',
      name: 'Dapper Coat',
      price: 40.00,
    },
    {
      id: 6,
      image: 'https://placehold.co/200x250/F3F4F6/1F2937?text=Comfy+Leggings',
      name: 'Comfy Leggings',
      price: 40.00,
    },
  ]);

  const quickSearchTags = ['Clothes', 'UrbanSkirt', 'VelvetGown', 'LushShorts'];
  const categories = ['All Categories', 'Dresses', 'Skirts', 'Gowns', 'Shorts', 'Pants', 'Coats'];

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category selection change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle quick search tag click
  const handleQuickSearchClick = (tag) => {
    setSearchTerm(tag);
    // In a real app, this would trigger a search
    console.log(`Quick search for: ${tag}`);
  };

  // Handle close button click
  const handleClose = () => {
    setIsSearchOpen(false)
  };

  return (
    <div className="min-h-screen absolute top-0 left-0 w-full bg-zinc-800/40 flex flex-col items-center font-sans text-gray-800">
      <div className="bg-base-ground px-20 py-10 shadow-lg w-full">
        {/* Header with Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <IoClose size={28}/>
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center border-b border-gray-300 pb-4 mb-4">
          <div className="relative w-full sm:w-auto mb-3 sm:mb-0 sm:mr-4">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search Product"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 pl-10"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Quick Search Tags */}
        <div className="mb-6">
          <span className="text-gray-600 mr-2">Quick Search :</span>
          {quickSearchTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleQuickSearchClick(tag)}
              className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mr-2 mb-2 hover:bg-gray-300 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* You May Also Like Section */}
        <h3 className="text-xl font-semibold text-gray-900 mb-4">You May Also Like</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg object-cover mb-2"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x250/F3F4F6/1F2937?text=No+Image'; }}
              />
              <p className="font-medium text-gray-900 text-sm">{product.name}</p>
              <p className="text-gray-700 text-sm">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
