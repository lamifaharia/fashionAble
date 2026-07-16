import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { filterProducts, sortProducts } from "../utils/filter";
import { categories as allCategories, products as allProducts } from "../data/products";
import ProductGrid from "../components/products/ProductGrid";
import ProductFilter from "../components/products/ProductFilter";
import ProductSort from "../components/products/ProductSort";
import SearchBar from "../components/products/SearchBar";
import { FiFilter, FiX } from "react-icons/fi";

const MAX_PRICE = Math.max(...allProducts.map((p) => p.price));

export default function Products() {
  const { products, loading } = useProducts();
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [priceRange, setPriceRange] = useState(MAX_PRICE);
  const [sortBy, setSortBy] = useState("default");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const visibleProducts = useMemo(() => {
    const filtered = filterProducts(products, { search, category, priceRange });
    return sortProducts(filtered, sortBy);
  }, [products, search, category, priceRange, sortBy]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C430] mb-2">
          Shop
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">All Products</h1>
        <p className="text-gray-500 mt-2 text-sm">
          {loading ? "Loading products..." : `${visibleProducts.length} products found`}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <div className="flex gap-3">
          <ProductSort value={sortBy} onChange={setSortBy} />
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 border border-black/10 bg-white px-4 py-3 text-sm font-medium"
          >
            <FiFilter size={16} />
            Filters
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-[220px_1fr] gap-10">
        {/* Desktop filters */}
        <aside className="hidden md:block">
          <ProductFilter
            categories={allCategories}
            activeCategory={category}
            onCategoryChange={setCategory}
            maxPrice={MAX_PRICE}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />
        </aside>

        <ProductGrid products={visibleProducts} loading={loading} />
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed right-0 top-0 z-50 h-screen w-80 max-w-[85vw] bg-white px-6 py-8 md:hidden overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <FiX size={24} />
              </button>
            </div>
            <ProductFilter
              categories={allCategories}
              activeCategory={category}
              onCategoryChange={(cat) => {
                setCategory(cat);
                setMobileFiltersOpen(false);
              }}
              maxPrice={MAX_PRICE}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />
          </div>
        </>
      )}
    </div>
  );
}