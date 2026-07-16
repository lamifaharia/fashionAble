import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
      <p className="text-8xl md:text-9xl font-black text-[#111111] leading-none">
        404
      </p>
      <p className="text-[#F4C430] font-semibold uppercase tracking-[0.2em] text-sm mt-2">
        Page not found
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mt-6">
        This page took a wrong turn
      </h1>
      <p className="text-gray-500 mt-3 max-w-md">
        The page you're looking for doesn't exist or may have been moved.
        Let's get you back on track.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-[#111111] text-white font-semibold px-8 py-3.5 mt-8 hover:bg-black/80 transition-colors"
      >
        <FiArrowLeft size={16} />
        Back to Home
      </Link>
    </div>
  );
}