import React from 'react'
import { Link } from 'react-router-dom'

const SummerCollectionBanner = () => {
  return (
    <section className="flex flex-col md:flex-row w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 relative h-[450px]">
          <img
            src="/banner-media2.webp"
            alt="Summer Women"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-1/2 right-20 transform  -translate-y-1/2 w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-white rounded-full border border-black flex flex-col justify-center items-center text-center shadow-lg">
            <p className="text-sm font-semibold text-gray-600 mb-1">
              SALE UP TO 50% OFF
            </p>
            <h2 className="text-2xl font-bold tracking-widest">SUMMER</h2>
            <h1 className="text-5xl md:text-6xl font-extrabold mt-1">2024</h1>
            <Link
              to={"/shop-list"}
              className="mt-4 px-6 py-2 border border-black rounded-md font-semibold hover:bg-black hover:text-white transition"
            >
              SHOP NOW
            </Link>
            <div className="absolute top-2 right-2 w-10 h-10 bg-white border border-black rounded-full"></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 relative h-[450px]">
          <img
            src="/banner-media5.webp" 
            alt="New Summer Collection"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-1/2 w-2/3 left-10 transform -translate-y-1/2 text-black z-10 space-y-5">
            <p className="text-sm font-semibold text-black ">
              SALE UP TO 50% OFF
            </p>
            <h2 className="text-4xl md:text-6xl font-bold">
              NEW SUMMER COLLECTION
            </h2>
            <Link
              to={"/shop-list"}
              className=" px-6 py-2 border border-black rounded-md font-semibold hover:bg-black hover:text-white transition"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>
  )
}

export default SummerCollectionBanner