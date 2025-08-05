import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const ContactUs = () => {
  return (
    <div className="space-y-12 p-4 md:p-10 lg:p-20">
      {/* Contact Us Hero Section */}
      <div className="relative bg-gradient-to-br from-pink-100 to-yellow-100 rounded-3xl shadow-xl p-8 md:p-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you! Send us a message or find us at our headquarters.
        </p>
        <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full opacity-30 blur-xl -mr-8 -mt-8"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-30 blur-xl -ml-12 -mb-12"></div>
      </div>

      {/* Contact Information and Form Section */}
      <div className="bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Reach Out to Us</h2>
          <div className="flex items-start space-x-4">
            <Mail size={24} className="text-pink-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600">contact@pixio.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone size={24} className="text-pink-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">+91 8117994713</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin size={24} className="text-pink-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600">Varanasi, Uttar Pradesh, India</p>
            </div>
          </div>
          {/* Placeholder image for contact info section */}
          <img
            src="https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGVjb21tZXJjZSUyMGNvbXBhbnklMjBpYW1nZXxlbnwwfDB8MHx8fDA%3D"
            alt="Contact Us"
            className="w-full h-auto rounded-2xl shadow-md mt-8"
          />
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Send us a message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 p-3 bg-gray-50 border"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 p-3 bg-gray-50 border"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 p-3 bg-gray-50 border"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 p-3 bg-gray-50 border"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-pink-600 text-white font-bold rounded-full shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">Q: What is your return policy?</h3>
            <p className="text-gray-600 mt-2">A: We offer free returns within 30 days of purchase. Items must be unworn and in original condition.</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">Q: How can I track my order?</h3>
            <p className="text-gray-600 mt-2">A: Once your order is shipped, you will receive an email with a tracking number and a link to the carrier's website.</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">Q: Do you ship internationally?</h3>
            <p className="text-gray-600 mt-2">A: Yes, we ship to over 100 countries worldwide. Shipping fees and times vary by location.</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">Q: How do I create an account?</h3>
            <p className="text-gray-600 mt-2">A: You can create an account by clicking on the "Sign Up" button in the top right corner and following the instructions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs