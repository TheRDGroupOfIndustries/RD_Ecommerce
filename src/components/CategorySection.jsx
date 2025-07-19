

const CategorySection = ({ categories }) => {

  return (
     <section className=" py-12 bg-[#fffaf5]">
      <h2 className="text-2xl font-bold mb-6">Category</h2>

      <div className="w-[60vw] flex gap-6 overflow-x-auto scrollbar-thin  scrollbar-thumb-gray-400">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center w-[140px] md:w-[180px] py-2"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="rounded-2xl object-cover w-full h-[160px] md:h-[200px]"
            />
            <p className="mt-1 font-semibold text-center">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
