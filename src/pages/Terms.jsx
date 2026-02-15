import { useTranslation } from 'react-i18next';
import { Check, AlertCircle, ShieldCheck } from 'lucide-react';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 prose prose-orange lg:prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">{t('footer.terms')}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-12 bg-gray-50 w-fit px-4 py-2 rounded-full">
            <span className="font-medium mr-2">{t('privacy.last_updated')}:</span>
            <span>February 13, 2026</span>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 shadow-sm">1</span>
                {t('terms.agreement_title').replace(/^\d+\.\s*/, '')}
              </h2>
              <p className="text-gray-600 leading-relaxed bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                {t('terms.agreement_text')}
              </p>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 shadow-sm">2</span>
                {t('terms.ip_title').replace(/^\d+\.\s*/, '')}
              </h2>
              <p className="text-gray-600">{t('terms.ip_text')}</p>
            </section>

             <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 shadow-sm">3</span>
                {t('terms.user_reps_title').replace(/^\d+\.\s*/, '')}
              </h2>
              <p className="text-gray-600 mb-8">{t('terms.user_reps_text')}</p>
              <div className="grid gap-4 md:grid-cols-1">
                {(t('terms.user_reps_list', { returnObjects: true }) || []).map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                    <div className="bg-green-100 text-green-600 rounded-full p-1.5 mr-4 flex-shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 shadow-sm">4</span>
                {t('terms.prohibited_title').replace(/^\d+\.\s*/, '')}
              </h2>
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100 flex items-start">
                 <div className="bg-red-100 text-red-600 rounded-lg p-2 mr-4 mt-1 flex-shrink-0">
                    <AlertCircle size={24} />
                 </div>
                 <p className="text-gray-800 m-0 leading-relaxed font-medium">{t('terms.prohibited_text')}</p>
              </div>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 shadow-sm">5</span>
                {t('terms.termination_title').replace(/^\d+\.\s*/, '')}
              </h2>
              <p className="text-gray-600">{t('terms.termination_text')}</p>
            </section>

            <section className="border-t border-gray-100 pt-10 mt-10">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 shadow-sm">6</span>
                {t('terms.contact_title').replace(/^\d+\.\s*/, '')}
              </h2>
              <p className="text-gray-600 mb-8">{t('terms.contact_text')}</p>
              <div className="bg-gray-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white m-0 mb-2">MedFinder</h3>
                  <p className="text-gray-400 m-0">Addis Ababa, Ethiopia</p>
                </div>
                <div className="mt-6 md:mt-0">
                  <a href="mailto:support@medfinder.et" className="inline-flex items-center text-orange-400 font-bold hover:text-orange-300 transition-colors text-lg">
                    support@medfinder.et
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
