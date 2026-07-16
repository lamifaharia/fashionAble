import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiHeart,
  FiShoppingBag,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import { useCart } from "../../context/CartContext";
import { calculateItemCount } from "../../utils/cart";

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/products" },
  { name: "Wishlist", path: "/wishlist" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { items } = useCart();
  const location = useLocation();
  const itemCount = calculateItemCount(items);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenu]);

  return (
    <>
      <div className="bg-[#111111] text-white text-center text-xs font-semibold tracking-[0.2em] py-2.5 uppercase">
        Free Shipping on Orders Over $100
      </div>

      <header className="sticky top-0 z-50 w-full bg-white shadow-md py-4">
        <Container>
          <div className="flex items-center justify-between">
            
            <Link to="/" className="group flex items-center gap-1.5">
              <h1 className="text-3xl font-black tracking-tight text-[#111111]">
                fashion
                <span className="text-[#F4C430] ml-0.5">Able</span>
              </h1>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={`relative text-sm font-semibold tracking-wide uppercase transition-colors duration-300 py-2 ${
                      isActive ? "text-[#111111]" : "text-gray-500 hover:text-[#111111]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F4C430]"
                      />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <button className="text-[#111111] hover:text-[#F4C430] transition-colors">
                <FiSearch size={22} />
              </button>
              <Link to="/wishlist" className="text-[#111111] hover:text-[#F4C430] transition-colors">
                <FiHeart size={22} />
              </Link>
              <Link to="/cart" className="relative text-[#111111] hover:text-[#F4C430] transition-colors">
                <FiShoppingBag size={22} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#F4C430] text-[10px] font-bold text-black">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>

            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden text-[#111111]"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setMobileMenu(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 z-50 h-screen w-80 bg-white p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold">Menu</h2>
                <button onClick={() => setMobileMenu(false)}>
                  <FiX size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenu(false)}
                    className="text-lg font-medium text-gray-700 hover:text-[#F4C430]"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;