import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Download() {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-orange-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           data-aos="zoom-in-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            {t('download.title')}
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
             {t('download.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95">
                Download for iOS
              </button>
              <button className="bg-black/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-black/30 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95">
                Download for Android
              </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
