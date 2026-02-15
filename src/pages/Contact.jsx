
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Linkedin', icon: Linkedin, url: '#' }
  ];

  return (
    <div className="pt-24 pb-24 relative overflow-hidden bg-gray-50/50 min-h-screen">
       {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] animate-pulse-slower"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "outExpo" }}
          >
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start max-w-6xl mx-auto">
            {/* Contact Info Card */}
            <div className="lg:col-span-5">
                <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.2, duration: 0.8 }}
                     className="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden h-full"
                >
                    {/* Decorative Circles */}
                    {/* <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[60px] -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px] -ml-16 -mb-16"></div> */}

                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-8">{t('contact.info_title')}</h3>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-gray-900/50">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 font-medium mb-1 text-sm uppercase tracking-wide">{t('contact.labels.email')}</p>
                                    <p className="text-lg font-semibold hover:text-orange-400 transition-colors cursor-pointer">support@medfinder.et</p>
                                    <p className="text-lg font-semibold hover:text-orange-400 transition-colors cursor-pointer">sales@medfinder.et</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-gray-900/50">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 font-medium mb-1 text-sm uppercase tracking-wide">{t('contact.labels.phone')}</p>
                                    <p className="text-lg font-semibold">+251 911 234 567</p>
                                    <p className="text-lg font-semibold">+251 112 345 678</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-gray-900/50">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 font-medium mb-1 text-sm uppercase tracking-wide">{t('contact.labels.office')}</p>
                                    <p className="text-lg font-semibold leading-snug">Bole Medhanialem,<br/>Alemnesh Plaza, 4th Floor</p>
                                    <p className="text-white/60 mt-1">Addis Ababa, Ethiopia</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-800">
                             <p className="text-gray-400 mb-4">Follow us on social media</p>
                             <div className="flex space-x-4">
                                {socialLinks.map((item) => (
                                    <a 
                                        key={item.name} 
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all cursor-pointer group/icon"
                                    >
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon size={18} className="text-gray-400 group-hover/icon:text-gray-900 transition-colors" />
                                    </a>
                                ))}
                             </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-gray-200/50 border border-gray-100"
                >
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 ml-1">{t('contact.labels.name')}</label>
                                <input type="text" id="name" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-100 focus:bg-white border-2 focus:border-orange-500 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400" placeholder={t('contact.placeholders.name')} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 ml-1">{t('contact.labels.email')}</label>
                                <input type="email" id="email" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-100 focus:bg-white border-2 focus:border-orange-500 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400" placeholder={t('contact.placeholders.email')} />
                            </div>
                        </div>

                         <div>
                            <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Subject</label> {/* Need key */}
                            <input type="text" id="subject" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-100 focus:bg-white border-2 focus:border-orange-500 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400" placeholder="How can we help?" />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 ml-1">{t('contact.labels.message')}</label>
                            <textarea id="message" rows={5} className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-100 focus:bg-white border-2 focus:border-orange-500 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400 resize-none" placeholder={t('contact.placeholders.message')}></textarea>
                        </div>
                        
                        <button type="submit" className="w-full flex items-center justify-center space-x-3 bg-gray-900 text-white px-8 py-5 rounded-xl font-bold hover:bg-orange-500 transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-gray-200 group">
                            <span>{t('contact.labels.send')}</span>
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
}
