import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-16 pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6 cursor-default hover:bg-orange-200 transition-colors">
              #1 Pharmacy Management App in Ethiopia
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8 tracking-tight">
              {t('hero.headline')}
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subheadline')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="flex items-center justify-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-xl shadow-gray-200 active:scale-95">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.23 3.91-.65.2.09 2.53.25 2.53.25s.3-1.48 1.48-2.65c-2.3-1.02-4.1-.25-4.55.12-.45.37-1.12 1.34-1.12 1.34s-2.58-1.57-4.1-.74c-1.52.83-1.52 3.2-1.52 3.2s-2.08 6.64 3.32 9.08c1.35.61 2.58.58 3.08 0 .5-.58 1.54-.58 2.05 0 .5.58 1.83.58 3.32-.25.86-.48 1.18-.8 1.54-1.21-.18-.21-.4-.44-.64-.68z"/></svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-xl shadow-gray-200 active:scale-95">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85M22,12L17.2,14.47L15.39,12L17.2,9.53M14.54,11.15L6.05,2.66L16.81,8.88"/></svg>
                 <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-lg font-bold leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          {/* Main App Mockup Container - Glassmorphism & Shadows */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-900 bg-gray-900 aspect-[9/19] md:aspect-[11/19] max-w-xs mx-auto flex items-center justify-center group transform transition-transform hover:scale-[1.01] duration-500">
             <img 
               src="/screenshots/dashboard.png" 
               alt="MedFinder Dashboard" 
               className="w-full h-full object-cover"
             />
             
             {/* Shine effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
          </div>
          
          {/* Decorative ambient glow */}
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] -z-10 opacity-60"></div>
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10 opacity-60"></div>
        </motion.div>
      </div>
    </section>
  );
}
