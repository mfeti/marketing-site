import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  const { t } = useTranslation();

  const plans = [
    {
      key: 'basic',
      features: ['500_meds', '1_staff', 'core_features'],
    },
    {
      key: 'standard',
      features: ['unlimited_meds', '5_staff', 'core_features', 'csv_export'],
      popular: true,
    },
    {
      key: 'premium',
      features: ['unlimited_meds', 'unlimited_staff', 'multistore', 'ai_prediction', 'priority_support'],
    },
  ];

  return (
    <section id="plans" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t('pricing.title')}</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, index) => (
            <PricingCard key={plan.key} plan={plan} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index, t }) {
  const isPopular = plan.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative p-8 rounded-3xl border ${isPopular ? 'border-orange-500 bg-white shadow-2xl scale-105 z-10' : 'border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl'} transition-all duration-300 flex flex-col h-full`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
          {t('pricing.plans.standard.popular')}
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t(`pricing.plans.${plan.key}.name`)}</h3>
        <p className="text-gray-500 text-sm h-10">{t(`pricing.plans.${plan.key}.desc`)}</p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-bold text-gray-900">ETB {t(`pricing.plans.${plan.key}.price`)}</span>
        <span className="text-gray-500">{t('pricing.monthly')}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((featureKey) => (
          <li key={featureKey} className="flex items-start space-x-3">
            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isPopular ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span className="text-gray-600 text-sm">{t(`pricing.features.${featureKey}`)}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 rounded-xl font-bold transition-all duration-200 ${isPopular ? 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl' : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-900'}`}>
        {t('pricing.cta')}
      </button>
    </motion.div>
  );
}
