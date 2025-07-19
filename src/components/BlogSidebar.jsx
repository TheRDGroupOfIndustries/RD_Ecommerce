import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Dresses", count: 10 },
  { name: "Top & Blouses", count: 5 },
  { name: "Boots", count: 17 },
  { name: "Jewelry", count: 13 },
  { name: "Makeup", count: 11 },
  { name: "Fragrances", count: 17 },
  { name: "Shaving & Grooming", count: 13 },
  { name: "Jacket", count: 12 },
  { name: "Coat", count: 22 },
];

const latestPosts = [
  {
    date: "17 May 2025",
    title: "The Anatomy of an Effective Shopping Cart Page",
    image: "/blog/latest1.webp",
    slug: "anatomy-shopping-cart",
  },
  {
    date: "20 May 2025",
    title: "Shopping Cart Design User-Friendly Tips and Best Practices",
    image: "/blog/latest2.webp",
    slug: "shopping-cart-design-tips",
  },
  {
    date: "22 May 2025",
    title: "Shopping Cart Security Keeping Your Customers' Data Safe",
    image: "/blog/latest3.webp",
    slug: "shopping-cart-security",
  },
];

const tags = [
  "Vintage",
  "Wedding",
  "Cotton",
  "Linen",
  "Navy",
  "Urban",
  "Business Meeting",
  "Formal",
];

export default function BlogSidebar() {
  return (
    <aside className="w-full space-y-10 text-black">
      {/* Search */}
      <div>
        <h3 className="mb-3 text-xl font-semibold">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border px-4 py-2 pr-10 text-sm focus:outline-none"
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-rose-600" />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="mb-4 text-xl font-semibold">Category</h3>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="text-rose-600">→</span>
                <span>{cat.name}</span>
              </div>
              <span className="text-black/70">({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Posts */}
      <div>
        <h3 className="mb-4 text-xl font-semibold">Latest Post</h3>
        <div className="space-y-6">
          {latestPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="flex items-start gap-4"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-16 w-16 rounded-xl object-cover"
              />
              <div className="text-sm">
                <p className="text-xs text-black/60">{post.date}</p>
                <h4 className="font-medium leading-snug line-clamp-2">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="mb-4 text-xl font-semibold">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className="rounded-md border px-3 py-1 text-sm text-black hover:bg-black hover:text-white transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
