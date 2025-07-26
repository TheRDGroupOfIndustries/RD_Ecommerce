import React from 'react'
import Slider from 'react-slick'

const sponsoredData = [
  {
    title: "Outdoor Shoes",
    offer: "Min. 30% Off",
    logo: "/logo/logo1.webp",
    image: "/logo/1.webp",
    storeTag: false,
  },
  {
    title: "Best Cloths",
    offer: "Min. 30% Off",
    logo: "/logo/logo2.webp",
    image: "/logo/2.webp",
    storeTag: true,
  },
  {
    title: "Sports Shoes",
    offer: "Min. 30% Off",
    logo: "/logo/logo3.webp",
    image: "/logo/1.webp",
    storeTag: false,
  },
  {
    title: "Modern Jewellery",
    offer: "Min. 30% Off",
    logo: "/logo/logo4.webp",
    image: "/logo/2.webp",
    storeTag: true,
  },
];

const SponsoredSection = () => {

     const sliderSetting = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#fdf7ef] py-5 px-4 md:px-10 lg:px-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Sponsored</h2>
          {/* <button className="text-sm font-medium hover:underline flex items-center gap-1">
            See All <span>➜</span>
          </button> */}
        </div>

        <Slider {...sliderSetting}>
          {sponsoredData.map((item, idx) => (
            <div key={idx} className="px-3">
              <div className="rounded-2xl overflow-hidden">
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover rounded-2xl"
                  />
                  {item.storeTag && (
                    <span className="absolute top-2 right-2 bg-white text-black px-3 py-1 text-sm font-semibold rounded-full shadow">
                      In Store
                    </span>
                  )}
                  <img
                    src={item.logo}
                    alt="brand logo"
                    className="absolute inset-0 m-auto max-h-[60px] w-auto object-contain z-10"
                  />
                </div>
                <div className="flex justify-between items-center mt-2 px-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <span className="text-sm text-gray-600">{item.offer}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
  )
}

export default SponsoredSection