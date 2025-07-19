import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

function SearchProduct({setIsSearchOpen}) {
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
  ]);

  const quickSearchTags = ['Clothes', 'UrbanSkirt', 'VelvetGown', 'LushShorts'];
  const categories = ['All Categories', 'Dresses', 'Skirts', 'Gowns', 'Shorts', 'Pants', 'Coats'];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleQuickSearchClick = (tag) => {
    setSearchTerm(tag);
    console.log(`Quick search for: ${tag}`);
  };

  const handleClose = () => {
    setIsSearchOpen(false)
  };

  return (
    <div className="fixed inset-0 bg-zinc-800/40 flex justify-center items-start pt-10 md:pt-20 z-[100] font-sans">
      <div className="bg-white px-4 md:px-10 py-8 shadow-lg w-full max-w-4xl rounded-lg mx-4">
        <div className="flex justify-end mb-6">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer p-1 rounded-full hover:bg-gray-100"
            aria-label="Close search panel"
          >
            <IoClose size={28}/>
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center border-b border-gray-200 pb-6 mb-6 gap-4 md:gap-0">
          <div className="relative w-full md:w-auto md:mr-4">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="appearance-none bg-gray-50 border border-gray-300 rounded-lg py-2.5 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full md:min-w-[150px]"
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
          <div className="relative flex-grow w-full">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 pl-10 pr-4"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center">
          <span className="text-gray-600 mr-2 mb-2 md:mb-0">Quick Search :</span>
          {quickSearchTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleQuickSearchClick(tag)}
              className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full mr-2 mb-2 hover:bg-gray-200 transition-colors border border-transparent hover:border-gray-300"
            >
              {tag}
            </button>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-5">You May Also Like</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center p-2 bg-gray-50 rounded-lg shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-md mb-2"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x250/F3F4F6/1F2937?text=No+Image'; }}
              />
              <p className="font-medium text-gray-900 text-sm truncate w-full px-1">{product.name}</p>
              <p className="text-gray-700 text-sm">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
