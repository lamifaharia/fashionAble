import { useCart } from "../context/CartContext";
import { calculateSubtotal } from "../utils/cart";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";
import toast from "react-hot-toast";

export default function Cart() {
  const { items, updateQty, removeItem } = useCart();
  const subtotal = calculateSubtotal(items);

  const handleUpdateQty = (lineId, qty) => {
    if (qty < 1) return;
    updateQty(lineId, qty);
  };

  const handleRemove = (lineId) => {
    removeItem(lineId);
    toast.success("Item removed from cart");
  };

  if (items.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Cart</h1>
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Your Cart <span className="text-gray-400 font-normal text-xl">({items.length})</span>
      </h1>

      <div className="grid md:grid-cols-[1fr_320px] gap-10 items-start">
        <div>
          {items.map((item) => (
            <CartItem
              key={item.lineId}
              item={item}
              onUpdateQty={handleUpdateQty}
              onRemove={handleRemove}
            />
          ))}
        </div>

        <CartSummary subtotal={subtotal} />
      </div>
    </div>
  );
}