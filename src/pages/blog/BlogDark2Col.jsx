import React from 'react'
import { blogDetails } from '../../store/data'
import { BlogProductCard } from '../../components'

const BlogDark2Col = () => {
  return (
    <div className='w-full px-40 py-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
      {blogDetails.slice(0, 4).map(item => (
        <BlogProductCard theme='dark' infoWidth={'70%'} item={item} />
      ))}

      <div className="col-span-full flex items-center justify-center py-10">
        <button className='px-6 py-2 bg-black rounded-lg text-white'>Show More</button>
      </div>
    </div>
  )
}

export default BlogDark2Col