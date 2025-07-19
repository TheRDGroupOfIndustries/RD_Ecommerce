import React from 'react';
import { blogDetails } from '../../store/data';
import { BlogProductCard } from '../../components';

const BlogDark3Col = () => {
  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
      {blogDetails.slice(0, 4).map(item => (
        <BlogProductCard key={item.id} theme='dark' item={item} />
      ))}

      <div className="col-span-full flex items-center justify-center pt-4 pb-10">
        <button className='px-6 py-2 bg-black rounded-lg text-white text-sm md:text-base hover:bg-gray-800 transition-colors'>
          Show More
        </button>
      </div>
    </div>
  );
};

export default BlogDark3Col;