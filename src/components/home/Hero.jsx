import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="bg-[#fafafa]">
      <Container>
        <div className="grid min-h-[88vh] items-center gap-16 py-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[6px] text-[#F4C430]">
              NEW ARRIVAL
            </p>

            <h1 className="text-5xl font-black leading-none text-[#111111] md:text-6xl xl:text-7xl">
              Timeless
              <br />
              Fashion For
              <br />
              Everyone
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-600">
              Explore premium dresses designed to make every occasion feel
              special. Elegant silhouettes, modern styles and timeless comfort
              in one collection.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/products"
                className="flex items-center gap-3 rounded-full bg-[#111111] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#F4C430] hover:text-black"
              >
                Shop Collection
                <FiArrowRight />
              </Link>

              <Link
                to="/products"
                className="rounded-full border-2 border-[#111111] px-8 py-4 font-semibold transition duration-300 hover:border-[#F4C430] hover:bg-[#F4C430]"
              >
                View Collection
              </Link>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Card */}

            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[40px] " />

            {/* Image */}

            <div className="relative overflow-hidden rounded-[40px] bg-white shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[560px]">

              <motion.img
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.5,
                }}
                src="/src/assets/images/hero.png"
                alt="Fashion Collection"
                className="h-full w-full object-cover"
              />

            </div>

            {/* Floating Label */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute -left-8 bottom-8 rounded-3xl bg-white px-7 py-5 shadow-xl"
            >
              <p className="text-xs uppercase tracking-[3px] text-gray-500">
                Summer 2026
              </p>

              <h3 className="mt-2 text-xl font-bold">
                New Dress
                <br />
                Collection
              </h3>
            </motion.div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;