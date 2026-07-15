import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiHeart,
  FiShoppingBag,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/products",
  },
  {
    name: "Collection",
    path: "/products",
  },
  {
    name: "Wishlist",
    path: "/wishlist",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}

      <div className="bg-[#111111] text-white text-center text-xs md:text-sm tracking-widest py-3 uppercase">
        Free Shipping on Orders Over $100
      </div>

      {/* Navbar */}

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg"
            : "bg-[#FAFAFA]"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}

            <Link to="/">
              <h1 className="text-3xl font-bold tracking-wide">
                fashion
                <span className="text-[#F4C430]">Able</span>
              </h1>
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-10">

              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-[15px] font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-[#F4C430] after:transition-all after:duration-300 ${
                      isActive
                        ? "text-[#111111] after:w-full"
                        : "text-gray-600 after:w-0 hover:text-[#111111] hover:after:w-full"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            </nav>

            {/* Icons */}

            <div className="hidden lg:flex items-center gap-6">

              <button className="transition hover:text-[#F4C430]">
                <FiSearch size={21} />
              </button>

              <Link
                to="/wishlist"
                className="transition hover:text-[#F4C430]"
              >
                <FiHeart size={21} />
              </Link>

              <Link
                to="/cart"
                className="relative transition hover:text-[#F4C430]"
              >
                <FiShoppingBag size={21} />

                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#F4C430] text-[11px] font-bold text-black">
                  0
                </span>
              </Link>

            </div>

            {/* Mobile Menu */}

            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden"
            >
              <FiMenu size={28} />
            </button>

          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}

      <AnimatePresence>

        {mobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: .5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setMobileMenu(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: .35 }}
              className="fixed right-0 top-0 z-50 h-screen w-80 bg-white px-8 py-8"
            >
              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                  Menu
                </h2>

                <button onClick={() => setMobileMenu(false)}>
                  <FiX size={28} />
                </button>

              </div>

              <div className="mt-14 flex flex-col gap-8">

                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenu(false)}
                    className={({ isActive }) =>
                      `text-lg ${
                        isActive
                          ? "text-[#F4C430]"
                          : "text-gray-700"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <Link
                  to="/cart"
                  onClick={() => setMobileMenu(false)}
                  className="text-lg text-gray-700"
                >
                  Cart
                </Link>

              </div>
            </motion.div>
          </>
        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;