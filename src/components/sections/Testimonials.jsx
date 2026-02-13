import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Abebe Kebede",
    role: "Owner, Addis Pharmacy",
    quote: "MedFinder completely transformed how we manage our inventory. We reduced expired medicine waste by 40% in just two months.",
    rating: 5
  },
  {
    name: "Sara Tadesse",
    role: "Pharmacist, Life Care",
    quote: "The interface is so intuitive. Even my new staff learned to use it in minutes. The sales reports are incredibly detailed.",
    rating: 5
  },
  {
    name: "Yonas Mekonnen",
    role: "Manager, City Med",
    quote: "Finally an app that works seamlessly in Amharic. Customer support is fantastic and they truly listen to our feedback.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 tracking-tight"
          >
            Trusted by Pharmacists
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-colors"
            >
              <div className="flex space-x-1 mb-6 text-orange-500">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">"{item.quote}"</p>
              <div>
                <p className="font-bold text-white">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
