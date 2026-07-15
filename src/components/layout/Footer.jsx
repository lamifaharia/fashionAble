import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white mt-24">

      <Container>

        <div className="grid md:grid-cols-3 gap-12 py-20">

          <div>

            <h2 className="text-4xl font-bold mb-5">
              fashion
              <span className="text-[#D4AF37]">Able</span>
            </h2>

            <p className="text-gray-400 leading-8">
              Curated fashion pieces designed for women who love timeless
              elegance and effortless confidence.
            </p>

          </div>

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link to="/">Home</Link>

              <Link to="/products">Shop</Link>

              <Link to="/wishlist">Wishlist</Link>

              <Link to="/cart">Cart</Link>

            </div>

          </div>

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl">

              <FiFacebook />

              <FiInstagram />

              <FiTwitter />

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 py-6 text-center text-gray-400">

          © {new Date().getFullYear()} fashionAble. All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
};

export default Footer;