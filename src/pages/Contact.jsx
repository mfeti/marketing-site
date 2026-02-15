import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            {t('contact.title')}
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 }}
                 className="space-y-8"
            >
                <div className="bg-orange-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{t('contact.info_title')}</h3>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <Mail className="text-orange-500 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900">{t('contact.labels.email')}</p>
                                <p className="text-gray-600">support@medfinder.et</p>
                                <p className="text-gray-600">sales@medfinder.et</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Phone className="text-orange-500 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900">{t('contact.labels.phone')}</p>
                                <p className="text-gray-600">+251 911 234 567</p>
                                <p className="text-gray-600">+251 112 345 678</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-orange-500 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900">{t('contact.labels.office')}</p>
                                <p className="text-gray-600">Bole Medhanialem, Alemnesh Plaza</p>
                                <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
            >
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.labels.name')}</label>
                        <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-shadow" placeholder={t('contact.placeholders.name')} />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.labels.email')}</label>
                        <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-shadow" placeholder={t('contact.placeholders.email')} />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.labels.message')}</label>
                        <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-shadow" placeholder={t('contact.placeholders.message')}></textarea>
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors">
                        <span>{t('contact.labels.send')}</span>
                        <Send size={18} />
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
