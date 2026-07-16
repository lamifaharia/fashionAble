import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
        <FiShoppingBag size={32} className="text-gray-400" />
      </div>
      <h2 className="text-2xl font-bold">Your cart is empty</h2>
      <p className="text-gray-500 mt-2 max-w-sm">
        Looks like you haven't added anything yet. Start exploring and find
        something you'll love.
      </p>
      <Link
        to="/products"
        className="mt-8 bg-[#111111] text-white font-semibold px-8 py-3.5 hover:bg-black/80 transition-colors"
      >
        Start Shopping
      </Link>
    </div>
  );
}