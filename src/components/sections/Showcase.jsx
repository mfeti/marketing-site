import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Showcase() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <section ref={containerRef} className="py-32 overflow-hidden bg-gray-50 relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24" data-aos="fade-up">
           <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">App Showcase</span>
           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Experience Implementation</h2>
        </div>
        
        {/* Feature 1: Inventory */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-40">
           <div className="flex-1 w-full perspective-1000 relative">
              <motion.div 
                style={{ y: y1, rotateY: 15, rotateX: 5 }}
                className="relative z-10 max-w-sm mx-auto"
                initial={{ opacity: 0, rotateY: 45, y: -100 }}
                whileInView={{ opacity: 1, rotateY: 15, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-[8px] border-gray-900 bg-gray-900"
                  >
                    <img src="/screenshots/stock.png" alt="Inventory Management" className="w-full h-auto object-cover" />
                    {/* Screen Glare */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                  </motion.div>
                  
                   {/* Floating Badge */}
                  <motion.div 
                    animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -right-12 bottom-20 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 hidden md:block"
                  >
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                        <div>
                          <p className="text-xs text-gray-500 font-semibold">Stock Updated</p>
                          <p className="text-sm font-bold text-gray-900">Successfully</p>
                        </div>
                     </div>
                  </motion.div>
              </motion.div>
              
              {/* Shadow Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[80px] -z-10 rounded-full" />
           </div>

           <div className="flex-1 text-center md:text-left" data-aos="fade-up" data-aos-duration="1000">
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {t('features.inventory.title')}
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t('features.inventory.desc')}
              </p>
              <ul className="space-y-4 text-left inline-block">
                {[
                  "Real-time stock tracking",
                  "Expiration date alerts",
                  "Low stock notifications"
                ].map((item, i) => (
                   <li key={i} className="flex items-center text-gray-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-xs">✓</div>
                      {item}
                   </li>
                ))}
              </ul>
           </div>
        </div>

        {/* Feature 2: Analytics */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
           <div className="flex-1 w-full perspective-1000 relative">
              <motion.div 
                style={{ y: y1, rotateY: -15, rotateX: 5 }}
                className="relative z-10 max-w-sm mx-auto"
                initial={{ opacity: 0, rotateY: -45, y: 100 }}
                whileInView={{ opacity: 1, rotateY: -15, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                 <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-900/20 border-[8px] border-gray-900 bg-gray-900"
                  >
                    <img src="/screenshots/insights.png" alt="Analytics" className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Floating Badge */}
                  <motion.div 
                    animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -left-12 top-20 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 hidden md:block"
                  >
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">📈</div>
                        <div>
                          <p className="text-xs text-gray-500 font-semibold">Weekly Growth</p>
                          <p className="text-sm font-bold text-gray-900">+24.5%</p>
                        </div>
                     </div>
                  </motion.div>
              </motion.div>

              {/* Shadow Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/10 blur-[80px] -z-10 rounded-full" />
           </div>

           <div className="flex-1 text-center md:text-left" data-aos="fade-down" data-aos-duration="1000">
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {t('features.analytics.title')}
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t('features.analytics.desc')}
              </p>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-black transition-all hover:shadow-lg hover:-translate-y-0.5">
                Explore Analytics
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}
