import { FiTruck, FiRefreshCw, FiShield, FiHeadphones } from "react-icons/fi";

const features = [
  {
    icon: FiTruck,
    title: "Free Shipping",
    desc: "On all orders over ৳2000",
  },
  {
    icon: FiRefreshCw,
    title: "Easy Returns",
    desc: "7-day hassle-free return policy",
  },
  {
    icon: FiShield,
    title: "Secure Checkout",
    desc: "Your payment info stays protected",
  },
  {
    icon: FiHeadphones,
    title: "Dedicated Support",
    desc: "We reply within a few hours",
  },
];

export default function Features() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#111111]">
              <Icon size={22} className="text-[#F4C430]" />
            </div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-gray-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}