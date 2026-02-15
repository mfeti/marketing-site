import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown, Rocket, CheckCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'am', name: 'Amharic', flag: '🇪🇹' },
  { code: 'or', name: 'Afaan Oromo', flag: '🌳' },
  { code: 'ti', name: 'Tigrinya', flag: '⛰️' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { name: t('nav.features'), action: () => scrollToSection('features'), type: 'scroll' },
    { name: t('nav.about'), path: '/about', type: 'link' },
    { name: t('nav.plans'), action: () => scrollToSection('plans'), type: 'scroll' },
    { name: t('nav.blog'), path: '/blog', type: 'link' },
    { name: t('nav.contact'), path: '/contact', type: 'link' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center cursor-pointer group"
            // onClick={() => navigate('/')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-2 shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300 group-hover:scale-105">
              <span className="text-white text-2xl font-bold">M</span>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 tracking-tight">
              MedFinder
            </span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              link.type === 'link' ? (
                <Link 
                  key={index}
                  to={link.path}
                  className="px-4 py-2 text-gray-600 hover:text-orange-500 font-medium transition-all duration-200 hover:bg-orange-50 rounded-full relative group text-sm lg:text-base"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2 opacity-0 group-hover:opacity-100"></span>
                </Link>
              ) : (
                <button 
                  key={index}
                  onClick={link.action} 
                  className="px-4 py-2 text-gray-600 hover:text-orange-500 font-medium transition-all duration-200 hover:bg-orange-50 rounded-full relative group text-sm lg:text-base"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2 opacity-0 group-hover:opacity-100"></span>
                </button>
              )
            ))}
            
            <div className="h-6 w-px bg-gray-200 mx-4"></div>

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 font-medium px-3 py-2 rounded-full hover:bg-gray-50 transition-colors"
              >
                <Globe size={18} />
                <span className="uppercase text-sm font-semibold">{i18n.language.split('-')[0]}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl py-2 border border-white/50 ring-1 ring-black ring-opacity-5 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 flex items-center justify-between group ${
                          i18n.language === lang.code 
                            ? 'bg-orange-50 text-orange-600 font-bold' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="flex items-center">
                          <span className="mr-3 text-lg">{lang.flag}</span>
                          {lang.name}
                        </span>
                        {i18n.language === lang.code && (
                          <CheckCircle size={14} className="text-orange-500" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className="ml-4 bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-105 shadow-xl shadow-gray-200 active:scale-95 flex items-center space-x-2 group">
              <span>{t('nav.download')}</span>
              <Rocket size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
               onClick={() => setIsOpen(!isOpen)} 
               className="text-gray-600 p-2 rounded-xl hover:bg-gray-100 transition-colors active:scale-95"
             >
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
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="px-6 pt-6 pb-12 space-y-6">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  link.type === 'link' ? (
                    <Link 
                      key={index}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left py-3 text-lg font-medium text-gray-800 border-b border-gray-100/50 hover:text-orange-500 hover:pl-2 transition-all"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button 
                      key={index}
                      onClick={link.action} 
                      className="block w-full text-left py-3 text-lg font-medium text-gray-800 border-b border-gray-100/50 hover:text-orange-500 hover:pl-2 transition-all"
                    >
                      {link.name}
                    </button>
                  )
                ))}
              </div>
              
              <div className="py-4">
                <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider font-bold">Select Language</p>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { changeLanguage(lang.code); setIsOpen(false); }}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                        i18n.language === lang.code 
                          ? 'bg-orange-50 border-orange-200 text-orange-700 shadow-sm' 
                          : 'bg-white border-gray-100 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/30 active:scale-95 transition-transform flex items-center justify-center space-x-2">
                <span>{t('nav.download')}</span>
                <Rocket size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
