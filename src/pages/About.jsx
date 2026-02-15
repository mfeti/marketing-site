import { motion, useInView, animate } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Users, Heart, Target, Zap, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ from = 0, to, duration = 2, suffix = "", decimals = 0 }) {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = value.toFixed(decimals) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, suffix, decimals]);

  return <span ref={nodeRef} />;
}

export default function About() {
  const { t } = useTranslation();

  // Helper for icons based on index/content (mock logic since translation keys don't map 1:1 to icons easily)
  const getIcon = (index) => {
    const icons = [Users, Target, Shield, Heart, Zap, Award];
    const Icon = icons[index % icons.length];
    return <Icon size={24} className="text-white" />;
  };

  return (
    <div className="pt-24 pb-24 relative overflow-hidden bg-gray-50/50">
       {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] animate-pulse-slower"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "outExpo" }}
          className="text-center mb-20"
        >
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">Who We Are</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.mission')}
          </p>
        </motion.div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "outExpo" }}
            className="relative"
          >
             {/* Back Image (Illustration) - Decorative & Content */}
             <div className="absolute top-0 left-0 w-full h-full transform translate-x-6 translate-y-6 rotate-3 rounded-[2.5rem] overflow-hidden shadow-xl z-0 border-2 border-white/20">
                <div className="absolute inset-0 bg-orange-500/10 z-10"></div> {/* Tint */}
                <img src="/images/about-team.jpg" alt="Team Illustration" className="w-full h-full object-cover opacity-80" />
             </div>

             {/* Front Image (Real Team) */}
             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group z-10 bg-gray-100">
                <img 
                  src="/images/team.jpg" 
                  alt="MedFinder Team" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest mb-1 opacity-80 text-orange-400">Established 2024</p>
                  <p className="text-2xl font-bold">Addis Ababa, Ethiopia</p>
                </div>
             </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "outExpo", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('about.story_title')}</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>{t('about.story_p1')}</p>
                <p>{t('about.story_p2')}</p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 flex gap-8">
                <div>
                    <p className="text-4xl font-extrabold text-orange-600">
                        <AnimatedCounter to={50} suffix="K+" />
                    </p>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">Users</p>
                </div>
                <div>
                    <p className="text-4xl font-extrabold text-blue-600">
                        <AnimatedCounter to={200} suffix="+" />
                    </p>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">Pharmacies</p>
                </div>
                <div>
                    <p className="text-4xl font-extrabold text-green-600">
                        <AnimatedCounter to={4.9} decimals={1} />
                    </p>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">Rating</p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('about.values_title')}</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">The core principles that drive our mission to revolutionize healthcare access.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(t('about.values', { returnObjects: true }) || []).map((value, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-orange-100 transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {getIcon(i)}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
