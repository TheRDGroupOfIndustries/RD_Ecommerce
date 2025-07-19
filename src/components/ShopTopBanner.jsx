import React from 'react'
import { useLocation } from 'react-router-dom'

const ShopTopBanner = () => {
    const { pathname } = useLocation()

    const paths = pathname.split('/')

  return (
    <div className="relative h-80 bg-gradient-to-r from-warm-300 to-warm-500 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(/bg1.cf596262.jpg)`,
      }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center capitalize">
            { paths[paths.length-1].split('-').join(" ")}
          </h1>
          <nav className="text-white/80 text-sm md:text-lg">
            <span>Home</span>
            <span className="mx-2 md:mx-3">›</span>
            <span className='capitalize'>{pathname.replace("/", '').replaceAll("/", " > ").replaceAll('-', ' ')} </span>
          </nav>
        </div>
        
      </div>
  )
}

export default ShopTopBanner