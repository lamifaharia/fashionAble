import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../products/ProductCard";
import SkeletonCard from "../products/SkeletonCard";

export default function FeaturedProducts() {
  const { products, loading } = useProducts(500);
  const featured = products.slice(0, 8);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C430] mb-2">
              Handpicked
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Products
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden sm:block text-sm font-semibold border-b-2 border-[#111111] pb-1 hover:text-[#F4C430] hover:border-[#F4C430] transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            to="/products"
            className="inline-block text-sm font-semibold border-b-2 border-[#111111] pb-1"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}