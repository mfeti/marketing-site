import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Layers, TrendingUp, Scan, Bell, Store, Users, FileText } from 'lucide-react';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    { key: 'inventory', icon: Layers },
    { key: 'analytics', icon: TrendingUp },
    { key: 'scanner', icon: Scan },
    { key: 'alerts', icon: Bell },
    { key: 'multistore', icon: Store },
    { key: 'staff', icon: Users },
    { key: 'csv', icon: FileText },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t('features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('features.subtitle')}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.key} feature={feature} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, t }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`features.${feature.key}.title`)}</h3>
      <p className="text-gray-600 leading-relaxed">{t(`features.${feature.key}.desc`)}</p>
    </motion.div>
  );
}
