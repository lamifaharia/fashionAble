import { Link } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { formatPrice } from "../../utils/cart";

export default function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <div className="flex gap-4 sm:gap-6 py-6 border-b border-black/10">
      <Link
        to={`/products/${item.id}`}
        className="shrink-0 w-24 h-28 sm:w-28 sm:h-32 overflow-hidden bg-gray-100"
      >
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </Link>

      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div className="flex justify-between gap-4">
          <div className="min-w-0">
            <Link
              to={`/products/${item.id}`}
              className="font-semibold text-[#111111] hover:text-[#F4C430] transition-colors line-clamp-1"
            >
              {item.name}
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              {item.color} · {item.size}
            </p>
          </div>
          <button
            onClick={() => onRemove(item.lineId)}
            aria-label="Remove item"
            className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
          >
            <FiTrash2 size={18} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-black/10">
            <button
              onClick={() => onUpdateQty(item.lineId, item.qty - 1)}
              disabled={item.qty <= 1}
              className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Decrease quantity"
            >
              <FiMinus size={12} />
            </button>
            <span className="w-9 text-center text-sm font-semibold">{item.qty}</span>
            <button
              onClick={() => onUpdateQty(item.lineId, item.qty + 1)}
              className="w-9 h-9 flex items-center justify-center hover:bg-gray-50"
              aria-label="Increase quantity"
            >
              <FiPlus size={12} />
            </button>
          </div>

          <p className="font-semibold">{formatPrice(item.price * item.qty)}</p>
        </div>
      </div>
    </div>
  );
}