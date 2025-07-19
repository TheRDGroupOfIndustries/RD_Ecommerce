import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#fff9f1] text-[#111] pt-16 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand & Contact */}
        <div className="space-y-4">
          <img src="/logo.svg" alt="Pixio Logo" className="h-10" />
          <p>Address : 451 Wall Street, UK, London</p>
          <p>E-mail : example@info.com</p>
          <p>Phone : (064) 332-1233</p>
          <div>
            <p className="font-semibold mt-4 mb-2">Subscribe To Our Newsletter</p>
            <div className="flex items-center bg-yellow-300 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-2 w-full bg-yellow-300 text-sm focus:outline-none"
              />
              <button className="px-3 text-xl font-bold">→</button>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Recent Posts</h3>
          <ul className="space-y-4 text-sm">
            {[
              {
                img: "/1.webp",
                title: "Cozy Knit Cardigan Sweater",
                date: "Jan 23, 2025",
              },
              {
                img: "/2.webp",
                title: "Sophisticated Swagger Suit",
                date: "Jan 23, 2025",
              },
              {
                img: "/3.webp",
                title: "Athletic Mesh Sports Leggings",
                date: "Jan 23, 2025",
              },
            ].map((post, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div>
                  <p className="font-semibold leading-tight">{post.title}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Stores */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Stores</h3>
           <ul className="space-y-2 text-sm text-gray-700">
            {["new-york", "london-sf", "edinburgh", "los-angeles", "chicago", "las-vegas"].map(
              (city) => (
                <li key={city}>
                  <Link to="#" className="text-gray-600 hover:text-black capitalize font-semibold">
                    {city.replace("-", " ")}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Privacy Policy",
              "Returns",
              "Terms & Conditions",
              "Contact Us",
              "Latest News",
              "Our Sitemap",
            ].map((link) => (
              <li key={link} className="text-gray-600 hover:text-black capitalize font-semibold">
                <Link to="#">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Menu */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Footer Menu</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Instagram Profile",
              "New Collection",
              "Woman Dress",
              "Contact Us",
              "Latest News",
            ].map((link) => (
              <li key={link} className="text-gray-600 hover:text-black capitalize font-semibold">
                <Link to="#">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-300 py-6 text-sm flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto px-6 gap-4">
        <p>
          © 2025 <span className="text-red-600 font-semibold">DexignZone</span> Theme. All Rights
          Reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="font-semibold">We Accept:</span>
          <img src="/footer-pay-img.webp" alt="footer-pay-img" className="h-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
