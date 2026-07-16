export default function ProductFilter({
  categories,
  activeCategory,
  onCategoryChange,
  maxPrice,
  priceRange,
  onPriceChange,
}) {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
          Category
        </p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => onCategoryChange("All")}
            className={`text-left text-sm py-1.5 transition-colors ${
              activeCategory === "All"
                ? "text-[#111111] font-semibold"
                : "text-gray-500 hover:text-[#111111]"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`text-left text-sm py-1.5 transition-colors ${
                activeCategory === cat
                  ? "text-[#111111] font-semibold"
                  : "text-gray-500 hover:text-[#111111]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
          Max Price
        </p>
        <input
          type="range"
          min="0"
          max={maxPrice}
          step="50"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full accent-[#F4C430]"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>৳0</span>
          <span className="font-semibold text-[#111111]">
            ৳{priceRange.toLocaleString("en-BD")}
          </span>
        </div>
      </div>
    </div>
  );
}