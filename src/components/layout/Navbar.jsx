import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'am', name: 'Amharic' },
  { code: 'or', name: 'Afaan Oromo' },
  { code: 'ti', name: 'Tigrinya' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle cross-page scrolling
  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500 tracking-tight">MedFinder</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-orange-500 transition-colors font-medium">{t('nav.features')}</button>
            <button onClick={() => scrollToSection('plans')} className="text-gray-600 hover:text-orange-500 transition-colors font-medium">{t('nav.plans')}</button>
            <button onClick={() => scrollToSection('support')} className="text-gray-600 hover:text-orange-500 transition-colors font-medium">{t('nav.support')}</button>
            
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 font-medium"
              >
                <Globe size={18} />
                <span className="uppercase">{i18n.language.split('-')[0]}</span>
                <ChevronDown size={14} />
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-gray-100 ring-1 ring-black ring-opacity-5"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors ${i18n.language === lang.code ? 'font-bold text-orange-600 bg-orange-50/50' : 'text-gray-700'}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/30 active:scale-95">
              {t('nav.download')}
            </button>
          </div>

          <div className="md:hidden flex items-center">
             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
               {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="block w-full text-left py-3 text-lg font-medium text-gray-700 border-b border-gray-50 hover:text-orange-500"
              >
                {t('nav.features')}
              </button>
              <button 
                onClick={() => scrollToSection('plans')} 
                className="block w-full text-left py-3 text-lg font-medium text-gray-700 border-b border-gray-50 hover:text-orange-500"
              >
                {t('nav.plans')}
              </button>
              <button 
                onClick={() => scrollToSection('support')} 
                className="block w-full text-left py-3 text-lg font-medium text-gray-700 border-b border-gray-50 hover:text-orange-500"
              >
                {t('nav.support')}
              </button>
              
              <div className="py-4">
                <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">Language</p>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { changeLanguage(lang.code); setIsOpen(false); }}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${i18n.language === lang.code ? 'bg-orange-100 text-orange-700' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-orange-500 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/30 active:scale-95 transition-transform mt-4">
                {t('nav.download')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
