import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">About MedFinder</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are on a mission to digitize Ethiopia's pharmaceutical supply chain, one pharmacy at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="bg-orange-100 rounded-3xl p-8 aspect-video flex items-center justify-center">
                <span className="text-orange-500 font-bold text-2xl">Team Photo Placeholder</span>
             </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2024, MedFinder started with a simple observation: pharmacies in Ethiopia were struggling with manual inventory management and disjointed supply chains.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We built a mobile-first solution designed specifically for the local context, working offline and supporting local languages. Today, we empower hundreds of pharmacies to run more efficiently and serve their communities better.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Innovation", desc: "We build technology that solves real problems." },
                    { title: "Accessibility", desc: "We design for everyone, regardless of language or connectivity." },
                    { title: "Trust", desc: "We protect our users' data and earn their confidence every day." }
                ].map((value, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600">{value.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
