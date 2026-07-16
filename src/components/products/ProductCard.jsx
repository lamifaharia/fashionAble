import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { formatPrice } from "../../utils/cart";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    if (!product.inStock) return;
    addItem(product, {
      size: product.sizes[0],
      color: product.colors[0],
      qty: 1,
    });
    toast.success(`${product.name} added to cart`);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product.id);
    toast.success(
      wishlisted ? "Removed from wishlist" : "Added to wishlist"
    );
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-white/40 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-[#F4C430] text-black text-[11px] font-bold uppercase tracking-wide px-2.5 py-1">
              New
            </span>
          )}
          {!product.inStock && (
            <span className="bg-[#111111] text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-1">
              Sold Out
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          aria-label="Toggle wishlist"
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-[#F4C430] transition-colors"
        >
          <FiHeart
            size={16}
            className={wishlisted ? "fill-[#111111] text-[#111111]" : "text-[#111111]"}
          />
        </button>

        {/* Quick add */}
        <button
          onClick={handleQuickAdd}
          disabled={!product.inStock}
          className="absolute bottom-0 left-0 right-0 bg-[#111111] text-white text-sm font-semibold py-3 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <FiShoppingBag size={16} />
          {product.inStock ? "Quick Add" : "Unavailable"}
        </button>
      </div>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-wider text-gray-400">
          {product.category}
        </p>
        <h3 className="font-medium text-[#111111] mt-1 group-hover:text-[#F4C430] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold">{formatPrice(product.price)}</span>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <FiStar size={12} className="fill-[#F4C430] text-[#F4C430]" />
            {product.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}