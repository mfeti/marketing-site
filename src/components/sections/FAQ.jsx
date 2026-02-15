import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const faqs = [
  {
    question: "Do I need internet access to use MedFinder?",
    answer: "MedFinder works in offline mode for most features like inventory tracking and sales. You only need internet to sync data with the cloud or manage multiple stores."
  },
  {
    question: "Can I manage multiple pharmacy branches?",
    answer: "Yes! Our Multi-store support allows you to manage inventory, staff, and sales for all your branches from a single dashboard."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-standard encryption to protect your data. Cloud backups ensure you never lose your records even if you lose your phone."
  },
  {
    question: "What languages does the app support?",
    answer: "MedFinder is fully localized in English, Amharic, Afaan Oromo, and Tigrinya."
  },
  {
    question: "How do I pay for the subscription?",
    answer: "We accept payments via Telebirr, CBE Birr, and other local payment methods directly within the app."
  }
];

export default function FAQ() {
  const { t } = useTranslation();
  
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
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
      className="border border-gray-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
        <span className={`text-orange-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
