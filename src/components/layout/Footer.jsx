import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiArrowUp,
  FiMail,
} from "react-icons/fi";
import toast from "react-hot-toast";

const shopLinks = [
  { name: "All Products", path: "/products" },
  { name: "Wishlist", path: "/wishlist" },
  { name: "Cart", path: "/cart" },
];

const companyLinks = [
  { name: "About Us", path: "/" },
  { name: "Contact", path: "/" },
  { name: "Careers", path: "/" },
];

const helpLinks = [
  { name: "Shipping Info", path: "/" },
  { name: "Returns", path: "/" },
  { name: "FAQs", path: "/" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter an email address");
      return;
    }
    toast.success("Subscribed! Watch your inbox.");
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-white">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-xl md:text-2xl font-bold">
              Join the fashion<span className="text-[#F4C430]">Able</span> list
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              New arrivals, restocks, and offers — no spam, unsubscribe anytime.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
            <div className="relative flex-1">
              <FiMail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/15 rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#F4C430] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 bg-[#F4C430] text-black font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#e0b520] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand Section */}
        <div className="col-span-2 md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">
            fashion<span className="text-[#F4C430]">Able</span>
          </h2>
          <p className="text-gray-400 text-sm leading-7 max-w-xs">
            Curated fashion pieces designed for people who love timeless
            elegance and effortless confidence.
          </p>
          <div className="flex gap-4 mt-6 text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#F4C430] hover:text-black transition-colors"
            >
              <FiFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#F4C430] hover:text-black transition-colors"
            >
              <FiInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#F4C430] hover:text-black transition-colors"
            >
              <FiTwitter />
            </a>
          </div>
        </div>

        {/* Links Sections (remains the same) */}
        {[
          { title: "Shop", links: shopLinks },
          { title: "Company", links: companyLinks },
          { title: "Help", links: helpLinks },
        ].map((section) => (
          <div key={section.title}>
            <p className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              {section.title}
            </p>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              {section.links.map((link) => (
                <li key={link.path + link.name}>
                  <NavLink
                    to={link.path}
                    className="hover:text-[#F4C430] transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} fashionAble. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-[#F4C430] transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white/15">
              <FiArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}