import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const { t } = useTranslation();
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const plans = [
    {
      key: 'basic',
      features: ['500_meds', '1_staff', 'core_features'],
      price: { monthly: '499', yearly: '4,990' }
    },
    {
      key: 'standard',
      features: ['unlimited_meds', '5_staff', 'core_features', 'csv_export'],
      price: { monthly: '999', yearly: '9,990' },
      popular: true,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      key: 'premium',
      features: ['unlimited_meds', 'unlimited_staff', 'multistore', 'ai_prediction', 'priority_support'],
      price: { monthly: '1,999', yearly: '19,990' }
    },
  ];

  return (
    <section id="plans" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
           <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">Simple Pricing</span>
           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">{t('pricing.title')}</h2>
           
           {/* Billing Toggle */}
           <div className="flex items-center justify-center gap-4 mb-8">
             <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
             <button 
               onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
               className="w-14 h-8 bg-gray-200 rounded-full p-1 relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
             >
                <motion.div 
                  layout
                  className="w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: billingCycle === 'monthly' ? 0 : 24 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
             </button>
             <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
               Yearly <span className="text-orange-600 text-xs bg-orange-100 px-2 py-0.5 rounded-full ml-1">Save 20%</span>
             </span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <PricingCard key={plan.key} plan={plan} index={index} t={t} billingCycle={billingCycle} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index, t, billingCycle }) {
  const isPopular = plan.popular;

  return (
    <motion.div
      layout
      data-aos="fade-up"
      data-aos-delay={index * 100}
      whileHover={{ y: -8 }}
      className={`relative p-8 rounded-[2rem] border transition-all duration-300 flex flex-col h-full ${
        isPopular 
          ? 'bg-white shadow-2xl border-orange-100 ring-4 ring-orange-500/10 scale-105 z-10' 
          : 'bg-white/60 backdrop-blur-lg border-white/50 shadow-xl hover:shadow-2xl hover:bg-white/80'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-max">
           <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
             <Star size={14} fill="currentColor" />
             {t('pricing.plans.standard.popular')}
           </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(`pricing.plans.${plan.key}.name`)}</h3>
        <p className="text-gray-500 text-sm leading-relaxed min-h-[40px]">{t(`pricing.plans.${plan.key}.desc`)}</p>
      </div>

      <div className="mb-8 flex items-baseline">
        <span className="text-5xl font-extrabold text-gray-900 tracking-tight">
          <AnimatePresence mode='wait'>
            <motion.span
              key={billingCycle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              ETB {plan.price[billingCycle]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="text-gray-500 font-medium ml-2">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((featureKey) => (
          <li key={featureKey} className="flex items-start space-x-3">
            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isPopular ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'}`}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span className="text-gray-700 text-sm font-medium">{t(`pricing.features.${featureKey}`)}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-xl font-bold transition-all duration-200 ${
        isPopular 
          ? 'bg-gray-900 text-white hover:bg-black shadow-lg hover:shadow-xl hover:-translate-y-1' 
          : 'bg-white border-2 border-gray-100 text-gray-900 hover:border-gray-900 hover:bg-gray-50'
      }`}>
        {t('pricing.cta')}
      </button>
    </motion.div>
  );
}
