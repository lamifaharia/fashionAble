import { FiHeart } from "react-icons/fi";
import { useWishlist } from "../../context/WishlistContext";
import toast from "react-hot-toast";

export default function WishlistButton({ productId, size = 20, className = "" }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(productId);

  const handleClick = () => {
    toggleWishlist(productId);
    toast.success(wishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle wishlist"
      className={`w-11 h-11 flex items-center justify-center rounded-full border border-black/10 hover:border-[#F4C430] hover:bg-[#F4C430] transition-colors ${className}`}
    >
      <FiHeart
        size={size}
        className={wishlisted ? "fill-[#111111] text-[#111111]" : "text-[#111111]"}
      />
    </button>
  );
}