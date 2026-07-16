import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FiStar, FiShoppingBag, FiMinus, FiPlus, FiCheck } from "react-icons/fi";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/cart";
import WishlistButton from "../components/wishlist/WishlistButton";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [qty, setQty] = useState(1);

  const { addItem } = useCart();

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const gallery = product.gallery?.length ? product.gallery : [product.image];

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addItem(product, { size: selectedSize, color: selectedColor, qty });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-[#111111] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-[#111111] transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-[#111111]">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
            <img
              src={gallery[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {gallery.length > 1 && (
            <div className="flex gap-3">
              {gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? "border-[#F4C430]" : "border-transparent"
                  }`}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C430] mb-3">
            {product.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-3 mt-3">
            <span className="flex items-center gap-1 text-sm">
              <FiStar size={14} className="fill-[#F4C430] text-[#F4C430]" />
              {product.rating}
            </span>
            <span className="text-gray-400 text-sm">
              ({product.reviews} reviews)
            </span>
            {product.inStock ? (
              <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
                <FiCheck size={14} /> In Stock
              </span>
            ) : (
              <span className="text-xs font-semibold text-red-500">Out of Stock</span>
            )}
          </div>

          <p className="text-3xl font-bold mt-6">{formatPrice(product.price)}</p>

          <p className="text-gray-500 mt-6 leading-7">{product.description}</p>

          {/* Color */}
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Color: <span className="text-[#111111]">{selectedColor}</span>
            </p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 text-sm border transition-colors ${
                    selectedColor === color
                      ? "border-[#111111] bg-[#111111] text-white"
                      : "border-black/10 hover:border-[#111111]"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Size: <span className="text-[#111111]">{selectedSize}</span>
            </p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center text-sm border transition-colors ${
                    selectedSize === size
                      ? "border-[#111111] bg-[#111111] text-white"
                      : "border-black/10 hover:border-[#111111]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + actions */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center border border-black/10">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-11 h-11 flex items-center justify-center hover:bg-gray-50"
                aria-label="Decrease quantity"
              >
                <FiMinus size={14} />
              </button>
              <span className="w-10 text-center text-sm font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-11 h-11 flex items-center justify-center hover:bg-gray-50"
                aria-label="Increase quantity"
              >
                <FiPlus size={14} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 flex items-center justify-center gap-2 bg-[#111111] text-white font-semibold py-3.5 hover:bg-black/80 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <FiShoppingBag size={18} />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>

            <WishlistButton productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
}