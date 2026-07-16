import { FiSearch, FiX } from "react-icons/fi";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <FiSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="w-full border border-black/10 bg-white pl-11 pr-10 py-3 text-sm focus:outline-none focus:border-[#F4C430] transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#111111]"
        >
          <FiX size={16} />
        </button>
      )}
    </div>
  );
}