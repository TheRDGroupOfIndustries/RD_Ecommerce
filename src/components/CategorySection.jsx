const CategorySection = ({ categories }) => {
  return (
    <section className="py-12 bg-[#fffaf5] px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>

      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full pb-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] py-2"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="rounded-2xl object-cover w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px]"
              />
              <p className="mt-2 font-semibold text-center text-sm sm:text-base">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
