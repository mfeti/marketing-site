import { motion } from 'framer-motion';

const posts = [
    {
        title: "Digital Transformation in Ethiopian Pharmacies",
        excerpt: "How mobile technology is replacing paper ledgers and improving inventory accuracy.",
        date: "Feb 10, 2026",
        category: "Industry"
    },
    {
        title: "MedFinder v2.4 Release Notes",
        excerpt: "Introducing AI-powered demand prediction and multi-store management features.",
        date: "Jan 25, 2026",
        category: "Product Update"
    },
    {
        title: "Best Practices for Medicine Storage",
        excerpt: "Tips for maintaining optimal storage conditions and organizing your pharmacy stock.",
        date: "Jan 12, 2026",
        category: "Guide"
    }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Blog & Updates
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            News, specific guides, and updates from the MedFinder team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <motion.article 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                    <div className="h-48 bg-gray-200 group-hover:bg-orange-100 transition-colors"></div>
                    <div className="p-8">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded-md font-medium">{post.category}</span>
                            <span>{post.date}</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">{post.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                        <div className="mt-6 font-medium text-orange-500 flex items-center">
                            Read more 
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                    </div>
                </motion.article>
            ))}
        </div>
      </div>
    </div>
  );
}
