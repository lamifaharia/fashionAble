import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";

export default function Wishlist() {
  const { ids } = useWishlist();
  const wishlistedProducts = products.filter((p) => ids.includes(p.id));

  if (wishlistedProducts.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Wishlist</h1>
        <div className="flex flex-col items-center justify-center text-center py-24">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <FiHeart size={32} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold">Your wishlist is empty</h2>
          <p className="text-gray-500 mt-2 max-w-sm">
            Tap the heart icon on any product to save it here for later.
          </p>
          <Link
            to="/products"
            className="mt-8 bg-[#111111] text-white font-semibold px-8 py-3.5 hover:bg-black/80 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Your Wishlist{" "}
        <span className="text-gray-400 font-normal text-xl">
          ({wishlistedProducts.length})
        </span>
      </h1>
      <p className="text-gray-500 mb-8 text-sm">
        Items you've saved for later.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
        {wishlistedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}