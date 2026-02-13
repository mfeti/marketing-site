import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Showcase() {
  const { t } = useTranslation();

  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Feature 1: Inventory */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="flex-1 w-full"
           >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-900 bg-gray-900 max-w-xs mx-auto">
                <img src="/screenshots/stock.png" alt="Inventory Management" className="w-full h-auto" />
              </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex-1 text-center md:text-left"
           >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('features.inventory.title')}</h3>
              <p className="text-xl text-gray-600 leading-relaxed">{t('features.inventory.desc')}</p>
           </motion.div>
        </div>

        {/* Feature 2: Analytics */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="flex-1 w-full"
           >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-900 bg-gray-900 max-w-xs mx-auto">
                <img src="/screenshots/insights.png" alt="Analytics" className="w-full h-auto" />
              </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex-1 text-center md:text-left"
           >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('features.analytics.title')}</h3>
              <p className="text-xl text-gray-600 leading-relaxed">{t('features.analytics.desc')}</p>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
