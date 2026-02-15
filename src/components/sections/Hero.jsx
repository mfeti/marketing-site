import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[100px] opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] opacity-70 animate-pulse-slower"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-purple-100/30 rounded-full blur-[80px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div data-aos="fade-up" data-aos-duration="800">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center py-1.5 px-4 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-bold mb-8 cursor-default hover:bg-orange-100 transition-colors shadow-sm"
            >
              <Rocket size={16} className="mr-2 fill-orange-500" />
              #1 Pharmacy Management App in Ethiopia
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tight">
              {t('hero.headline')}
            </h1>
            
            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {t('hero.subheadline')}
            </p>
            
            <div 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="flex flex-col sm:flex-row justify-center gap-5"
            >
              <button className="flex items-center justify-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-black transition-all hover:-translate-y-1 hover:shadow-2xl shadow-xl shadow-gray-200 active:scale-95 group">
                <svg className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.23 3.91-.65.2.09 2.53.25 2.53.25s.3-1.48 1.48-2.65c-2.3-1.02-4.1-.25-4.55.12-.45.37-1.12 1.34-1.12 1.34s-2.58-1.57-4.1-.74c-1.52.83-1.52 3.2-1.52 3.2s-2.08 6.64 3.32 9.08c1.35.61 2.58.58 3.08 0 .5-.58 1.54-.58 2.05 0 .5.58 1.83.58 3.32-.25.86-.48 1.18-.8 1.54-1.21-.18-.21-.4-.44-.64-.68z"/></svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400 font-medium tracking-wide">Download on the</div>
                  <div className="text-xl font-bold leading-none">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center space-x-3 bg-white text-gray-900 border border-gray-100 px-8 py-4 rounded-2xl font-medium hover:bg-gray-50 transition-all hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-gray-100 active:scale-95 group">
                <svg className="w-7 h-7 fill-current text-green-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85M22,12L17.2,14.47L15.39,12L17.2,9.53M14.54,11.15L6.05,2.66L16.81,8.88"/></svg>
                 <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium tracking-wide">Get it on</div>
                  <div className="text-xl font-bold leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          className="mt-20 relative mx-auto max-w-5xl perspective-1000"
        >
          {/* Main App Mockup Container - Floating Animation */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-500/20 border-[8px] border-gray-900 bg-gray-900 aspect-[9/19] md:aspect-[11/19] max-w-xs mx-auto flex items-center justify-center group transform transition-transform duration-500">
               <img 
                 src="/screenshots/dashboard.png" 
                 alt="MedFinder Dashboard" 
                 className="w-full h-full object-cover"
               />
               
               {/* Shine effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-150%] animate-shine pointer-events-none"></div>
            </div>
          </motion.div>
          
          {/* Decorative Elements around phone */}
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 right-10 md:right-40 bg-white p-4 rounded-2xl shadow-xl z-30 hidden md:block"
          >
             <div className="flex items-center space-x-3">
               <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <div>
                 <p className="text-xs text-gray-400 font-medium">Sales Today</p>
                 <p className="text-lg font-bold text-gray-900">ETB 12,450</p>
               </div>
             </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-40 left-10 md:left-40 bg-white p-4 rounded-2xl shadow-xl z-30 hidden md:block"
          >
             <div className="flex items-center space-x-3">
               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
               </div>
               <div>
                 <p className="text-xs text-gray-400 font-medium">Low Stock Alert</p>
                 <p className="text-sm font-bold text-gray-900">Amoxicillin (5 left)</p>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
