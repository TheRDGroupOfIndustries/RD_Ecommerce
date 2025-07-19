import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BlogProductCard({
  item,
  infoWidth,
  theme = "dark",
  className = "",
}) {
  const { slug, title, date, image, description } = item;

  return (
    <article
      className={[
        "group relative h-full w-full overflow-hidden",
        "rounded-[2.5rem] bg-muted/20", // fall-back bg while image loads
        className,
      ].join(" ")}
    >
      <Link
        to={`/blog/${slug}`}
        aria-label={title}
        className="block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        {/* Image */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Bottom Info Panel */}
        <div
          className={`pointer-events-none absolute bottom-0 left-0 ${
            !infoWidth ? "w-full" : `w-[${infoWidth}]`
          }`}
        >
          <div
            className={`rounded-tr-3xl p-4 sm:p-6 md:p-8 shadow-xl transition-colors duration-300 ${
              theme === "dark"
                ? "bg-black/90 text-white"
                : "bg-[#FEEB9D] text-black"
            }`}
          >
            {/* Date Badge */}
            <span
              className={`mb-3 inline-block rounded-md px-2 py-1 text-[10px] font-medium leading-none sm:text-xs transition-all duration-300 ${
                theme === "dark" ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              {date}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold leading-tight sm:text-xl md:text-xl">
              {title}
            </h3>

            {/* Read More link */}
            <span
              className={`mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                theme === "dark" ? "text-white/90" : "text-black/80"
              } group`}
            >
              Read More
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
