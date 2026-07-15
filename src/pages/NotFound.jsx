import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="text-gray-600">
        Page not found.
      </p>

      <Link
        to="/"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;