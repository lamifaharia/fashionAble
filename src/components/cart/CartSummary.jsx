import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/cart";

export default function CartSummary({ subtotal }) {
  const shipping = subtotal > 2000 || subtotal === 0 ? 0 : 100;
  const total = subtotal + shipping;

  return (
    <div className="border border-black/10 p-6 sticky top-24">
      <h2 className="font-semibold text-lg mb-5">Order Summary</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-500">
          <span>Subtotal</span>
          <span className="text-[#111111] font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Shipping</span>
          <span className="text-[#111111] font-medium">
            {shipping === 0 ? "Free" : formatPrice(shipping)}
          </span>
        </div>
        {subtotal > 0 && subtotal < 2000 && (
          <p className="text-xs text-gray-400">
            Add {formatPrice(2000 - subtotal)} more for free shipping
          </p>
        )}
      </div>

      <div className="flex justify-between items-center mt-5 pt-5 border-t border-black/10">
        <span className="font-semibold">Total</span>
        <span className="font-bold text-xl">{formatPrice(total)}</span>
      </div>

      <button
        disabled={subtotal === 0}
        className="w-full bg-[#111111] text-white font-semibold py-3.5 mt-6 hover:bg-black/80 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Proceed to Checkout
      </button>

      <Link
        to="/products"
        className="block text-center text-sm text-gray-500 hover:text-[#111111] mt-4 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}