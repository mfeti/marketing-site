import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

export default function Careers() {
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
            {t('careers.title')}
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('careers.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 rounded-2xl p-12 text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('careers.no_openings_title')}</h2>
                <p className="text-gray-600 mb-8">
                    <Trans i18nKey="careers.no_openings_desc">
                        We're not actively hiring right now, but we're always looking for talented individuals. 
                        Send your CV to <a href="mailto:careers@medfinder.et" className="text-orange-500 font-medium hover:underline">careers@medfinder.et</a> and we'll keep you in mind for future roles.
                    </Trans>
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('careers.why_join_title')}</h3>
                    <ul className="space-y-3 text-gray-600 mt-4">
                        {(t('careers.benefits', { returnObjects: true }) || []).map((benefit, index) => (
                           <li key={index} className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>{benefit}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                     <h3 className="text-xl font-bold text-gray-900 mb-2">{t('careers.tech_stack_title')}</h3>
                     <div className="flex flex-wrap gap-2 mt-4">
                        {['React Native', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS'].map(tech => (
                            <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                        ))}
                     </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
