import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
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

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-2xl font-bold mb-6 cursor-pointer"
            >
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">M</span>
              </div>
              <span>MedFinder</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('hero.subheadline')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.product')}</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-orange-500 transition-colors">{t('nav.features')}</button></li>
              <li><button onClick={() => scrollToSection('plans')} className="text-gray-400 hover:text-orange-500 transition-colors">{t('nav.plans')}</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-orange-500 transition-colors">{t('testimonials.title')}</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-orange-500 transition-colors">{t('faq.title')}</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-orange-500 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>support@medfinder.et</span>
              </li>
              <li className="text-gray-400">+251 911 234 567</li>
              <li className="text-gray-400">Addis Ababa, Ethiopia</li>
            </ul>
            <div className="mt-6 flex flex-col space-y-2">
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Download on App Store
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} MedFinder. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-orange-500">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
