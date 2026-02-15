import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-24 bg-gray-50/50 min-h-screen relative overflow-hidden">
        {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-orange-100/40 to-transparent rounded-[100%] blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "outExpo" }}
          >
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">Latest Insights</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                {t('blog.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {t('blog.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {(t('blog.posts', { returnObjects: true }) || []).map((post, index) => {
                const images = [
                    "/images/blog-1.jpg",
                    "/images/blog-2.jpg",
                    "/images/blog-3.jpg"
                ];
                const image = images[index] || "/images/blog-1.jpg"; // Fallback
                
                return (
                <motion.article 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer group flex flex-col h-full border border-gray-100"
                >
                    <div className="h-60 overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                        <img src={image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-4 left-4 z-20">
                             <span className="bg-white/90 backdrop-blur-md text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1 shadow-sm">
                                <Tag size={12} />
                                {post.category}
                             </span>
                        </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center text-sm text-gray-400 mb-4 font-medium">
                            <Calendar size={14} className="mr-2" />
                            <span>{post.date}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors line-clamp-2">{post.title}</h2>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
                        
                        <div className="pt-6 border-t border-gray-100 mt-auto flex items-center justify-between group/link">
                            <span className="font-bold text-gray-900 group-hover/link:text-orange-600 transition-colors">{t('blog.read_more')}</span>
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-orange-50 group-hover/link:text-orange-600 transition-colors">
                                <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </motion.article>
            )})}
        </div>
      </div>
    </div>
  );
}
