import React from 'react'
import ShopTopBanner from '../../components/ShopTopBanner'

const BlogLayout = ({children}) => {
  return (
    <section className=' '>
        <ShopTopBanner/>
        {children}
    </section>
  )
}

export default BlogLayout