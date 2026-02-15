import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  
  return (
    <section id="faq" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
            <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-200/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-orange-200/20 rounded-full blur-[100px]" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
           <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">Common Questions</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            {t('faq.title')}
          </motion.h2>
          <p className="text-xl text-gray-500">Everything you need to know about MedFinder.</p>
        </div>

        <div className="space-y-4">
          {(t('faq.items', { returnObjects: true }) || []).map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact Support CTA */}
        <div className="mt-16 text-center">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors">
                <MessageCircleQuestion size={20} />
                Contact our support team
            </a>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-lg ring-1 ring-black/5' : 'bg-white/50 hover:bg-white hover:shadow-md'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className={`font-bold text-lg transition-colors duration-300 ${isOpen ? 'text-orange-600' : 'text-gray-900'}`}>
            {faq.question}
        </span>
        <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-orange-100 text-orange-600 rotate-180' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
