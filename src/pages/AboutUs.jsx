import { Award, Calendar, CheckCircle, Mail, MapPin, Users } from 'lucide-react'
import React, { useEffect } from 'react'

const AboutUs = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <div className="space-y-12 p-4 md:p-10 lg:p-20">
      {/* About Us Hero Section */}
      <div className="relative bg-gradient-to-br from-yellow-100 to-pink-100 rounded-3xl shadow-xl p-8 md:p-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Our Story
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We believe fashion is more than just clothing—it's a statement, a mood, and an expression of who you are.
        </p>
        {/* Decorative circle element */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full opacity-30 blur-xl -mr-8 -mt-8"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-30 blur-xl -ml-12 -mb-12"></div>
      </div>

      {/* Founding Story Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Founding Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Neeraya was born out of a simple idea: to make high-quality, fashionable clothing accessible to everyone. Our founder, Jane Doe, started the company from her small apartment, designing and hand-making pieces for friends. The passion for style and commitment to quality quickly resonated, leading to the launch of our first online store.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="/friends-study-session-learning-showing-peace-sign.webp"
            alt="Our Founding Story"
            className="w-full h-auto rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower people to feel confident and stylish in their everyday lives. We curate a collection of high-quality, trendy, and affordable fashion that helps you express your unique personality. We are committed to ethical sourcing and sustainable practices to make a positive impact on the world.
          </p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To become the leading online destination for modern fashion, inspiring creativity and self-expression through clothing. We envision a future where style is a tool for empowerment and everyone can find pieces that truly represent them.
          </p>
        </div>
      </div>
      
      {/* Our Values Section */}
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-pink-50 rounded-2xl shadow-inner transition transform hover:scale-105 duration-300">
            <Users size={48} className="text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Building a community of fashion lovers and creators.</p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-2xl shadow-inner transition transform hover:scale-105 duration-300">
            <Award size={48} className="text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">Offering only the highest quality products to our customers.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl shadow-inner transition transform hover:scale-105 duration-300">
            <MapPin size={48} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">Continuously innovating our styles and customer experience.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl shadow-inner transition transform hover:scale-105 duration-300">
            <Mail size={48} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">Operating with honesty and transparency in all we do.</p>
          </div>
        </div>
      </div>

      {/* Our Leadership Section */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Meet Our Leadership</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <img
              src="/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
              alt="Jane Doe"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-pink-200"
            />
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p className="text-pink-600">Founder & CEO</p>
            <p className="text-gray-600 mt-2 text-sm">Visionary leader passionate about fashion and empowering people.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <img
              src="/brooke-cagle-wKOKidNT14w-unsplash.jpg"
              alt="John Smith"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-200"
            />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-yellow-600">Head of Design</p>
            <p className="text-gray-600 mt-2 text-sm">Creative director with an eye for emerging trends and timeless style.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <img
              src="/sajad-fi-jfMVcOtvLX4-unsplash.jpg"
              alt="Emily Chen"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200"
            />
            <h3 className="text-xl font-semibold">Emily Chen</h3>
            <p className="text-blue-600">Marketing Director</p>
            <p className="text-gray-600 mt-2 text-sm">Strategic marketer focused on building a strong community around our brand.</p>
          </div>
        </div>
      </div>

      {/* Our Milestones Section */}
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our Journey So Far</h2>
        <div className="relative border-l-4 border-pink-200 pl-8 space-y-12">
          {/* Timeline Item 1 */}
          <div className="relative">
            <div className="absolute -left-12 -top-1 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white">
              <Calendar size={16} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">2018: Founded</h3>
            <p className="text-gray-600">Neeraya is founded by Jane Doe as a small-scale online boutique.</p>
          </div>
          {/* Timeline Item 2 */}
          <div className="relative">
            <div className="absolute -left-12 -top-1 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white">
              <CheckCircle size={16} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">2020: First Collection Launch</h3>
            <p className="text-gray-600">We launched our first full seasonal collection, gaining significant media attention.</p>
          </div>
          {/* Timeline Item 3 */}
          <div className="relative">
            <div className="absolute -left-12 -top-1 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white">
              <Award size={16} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">2022: Sustainability Initiative</h3>
            <p className="text-gray-600">Introduced our new line of sustainably-sourced clothing, committing to a greener future.</p>
          </div>
          {/* Timeline Item 4 */}
          <div className="relative">
            <div className="absolute -left-12 -top-1 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white">
              <Users size={16} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">2024: Community Growth</h3>
            <p className="text-gray-600">Exceeded 1 million members in our online fashion community and loyalty program.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs