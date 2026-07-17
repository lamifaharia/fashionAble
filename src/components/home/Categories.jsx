import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import panjabi from "../../assets/images/panjabi.webp";
import cottonShari from '../../assets/images/Handloom Cotton Saree.webp'
import kurti from '../../assets/images/Embroidered Kurti.jpg'
import jacket from '../../assets/images/Denim Jacket.jpg'

const categories = [
  {
    name: "Panjabi",
    image: panjabi,
  },
  {
    name: "Saree",
    image: cottonShari,
  },
  {
    name: "Kurti",
    image: kurti,
  },
  {
    name: "Jackets",
    image: jacket,
  },
];

export default function Categories() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C430] mb-2">
            Browse
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link
              to={`/products?category=${cat.name}`}
              className="group relative block aspect-square overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors" />
              <span className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                {cat.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}