import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

export default function ProductGrid({ products, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-24">
        <p className="text-5xl mb-4">🔍</p>
        <h3 className="text-xl font-semibold text-[#111111]">
          No products found
        </h3>
        <p className="text-gray-500 text-sm mt-2 max-w-sm">
          Try adjusting your filters or search term — nothing matches right
          now.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}