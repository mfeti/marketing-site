import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{t('about.title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('about.mission')}
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
                <span className="text-orange-500 font-bold text-2xl">{t('about.t_photo')}</span>
             </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.story_title')}</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('about.story_p1')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('about.story_p2')}
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('about.values_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {(t('about.values', { returnObjects: true }) || []).map((value, i) => (
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
