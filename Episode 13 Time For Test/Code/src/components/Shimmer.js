const Shimmer = () => {
  return (
    <div className="px-4 md:px-8 max-w-[1200px] mx-auto">
      {/* Search and Filter Shimmer */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
        <div className="w-full md:w-1/2 h-12 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-48 h-12 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      {/* Restaurant Cards Shimmer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(12).fill("").map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
