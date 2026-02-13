import { useTranslation } from 'react-i18next';
import { Twitter, Instagram, Linkedin, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-orange-500 mb-4 block">MedFinder</span>
            <p className="text-gray-500 mb-6">
              Empowering pharmacies with modern tools to track inventory, manage sales, and serve patients better.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">Features</a></li>
              <li><a href="#plans" className="text-gray-600 hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail size={16} />
                <span>support@medfinder.et</span>
              </li>
              <li className="text-gray-600">+251 911 234 567</li>
              <li className="text-gray-600">Addis Ababa, Ethiopia</li>
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
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
