import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Layers, TrendingUp, Scan, Bell, Store, Users, FileText, ArrowUpRight } from 'lucide-react';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    { key: 'inventory', icon: Layers, color: 'text-blue-500', bg: 'bg-blue-50', gradient: 'from-blue-500/20 to-blue-500/0' },
    { key: 'analytics', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-50', gradient: 'from-green-500/20 to-green-500/0' },
    { key: 'scanner', icon: Scan, color: 'text-purple-500', bg: 'bg-purple-50', gradient: 'from-purple-500/20 to-purple-500/0' },
    { key: 'alerts', icon: Bell, color: 'text-red-500', bg: 'bg-red-50', gradient: 'from-red-500/20 to-red-500/0' },
    { key: 'multistore', icon: Store, color: 'text-orange-500', bg: 'bg-orange-50', gradient: 'from-orange-500/20 to-orange-500/0' },
    { key: 'staff', icon: Users, color: 'text-cyan-500', bg: 'bg-cyan-50', gradient: 'from-cyan-500/20 to-cyan-500/0' },
    { key: 'csv', icon: FileText, color: 'text-gray-500', bg: 'bg-gray-50', gradient: 'from-gray-500/20 to-gray-500/0' },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 relative overflow-hidden perspective-1000">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             rotate: [0, 90, 0],
             opacity: [0.3, 0.5, 0.3]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-orange-100/40 rounded-full blur-[100px]"
         />
         <motion.div 
           animate={{ 
             scale: [1.2, 1, 1.2],
             rotate: [0, -90, 0],
             opacity: [0.3, 0.5, 0.3]
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px]"
         />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20" data-aos="fade-down">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">Why MedFinder?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">{t('features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{t('features.subtitle')}</p>
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
  const ref = useRef(null);
  const Icon = feature.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      data-aos={index % 3 === 0 ? "fade-right" : index % 3 === 1 ? "fade-up" : "fade-left"}
      data-aos-delay={index * 200}
      initial={{ rotateX: 0, rotateY: 0 }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,165,0,0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={32} strokeWidth={1.5} />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors flex items-center justify-between">
          {t(`features.${feature.key}.title`)}
          <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-gray-300" />
        </h3>
        <p className="text-gray-600 leading-relaxed font-medium relative z-10">{t(`features.${feature.key}.desc`)}</p>
      </div>

      {/* Decorative gradient blob on hover */}
      <div className={`absolute -bottom-20 -right-20 w-40 h-40 ${feature.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    </motion.div>
  );
}
