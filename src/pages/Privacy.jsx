import { useTranslation, Trans } from 'react-i18next';
import { Check, Shield, Lock, FileText } from 'lucide-react';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 prose prose-orange lg:prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">{t('footer.privacy')}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-12 bg-gray-50 w-fit px-4 py-2 rounded-full">
            <span className="font-medium mr-2">{t('privacy.last_updated')}:</span>
            <span>February 13, 2026</span>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 shadow-sm">1</span>
                {t('privacy.intro_title').replace(/^\d+\.\s*/, '')}
              </h2>
              <p className="text-gray-600 leading-relaxed bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                {t('privacy.intro_text')}
              </p>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 shadow-sm">2</span>
                {t('privacy.info_collect_title').replace(/^\d+\.\s*/, '')}
              </h2>
              <p className="text-gray-600 mb-6">{t('privacy.info_collect_text')}</p>
              <div className="grid gap-6 md:grid-cols-1">
                <div className="flex items-start p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-gray-100">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4 mt-1">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 m-0 mb-2">{t('privacy.personal_data_title')}</h3>
                    <p className="text-gray-600 m-0 text-sm">{t('privacy.personal_data_text')}</p>
                  </div>
                </div>
                <div className="flex items-start p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-gray-100">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-4 mt-1">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 m-0 mb-2">{t('privacy.derivative_data_title')}</h3>
                    <p className="text-gray-600 m-0 text-sm">{t('privacy.derivative_data_text')}</p>
                  </div>
                </div>
                <div className="flex items-start p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-gray-100">
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg mr-4 mt-1">
                    <Lock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 m-0 mb-2">{t('privacy.financial_data_title')}</h3>
                    <p className="text-gray-600 m-0 text-sm">{t('privacy.financial_data_text')}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 shadow-sm">3</span>
                {t('privacy.use_info_title').replace(/^\d+\.\s*/, '')}
              </h2>
              <p className="text-gray-600 mb-8">{t('privacy.use_info_text')}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {(t('privacy.use_info_list', { returnObjects: true }) || []).map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all group">
                    <div className="bg-orange-100 text-orange-500 rounded-full p-1 mr-3 mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 shadow-sm">4</span>
                {t('privacy.disclosure_title').replace(/^\d+\.\s*/, '')}
              </h2>
              <p className="text-gray-600 mb-6">{t('privacy.disclosure_text')}</p>
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <h3 className="text-lg font-bold text-red-900 m-0 mb-3">{t('privacy.legal_title')}</h3>
                <p className="text-red-700 m-0">{t('privacy.legal_text')}</p>
              </div>
            </section>

            <section className="border-t border-gray-100 pt-10 mt-10">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 shadow-sm">5</span>
                {t('privacy.contact_title').replace(/^\d+\.\s*/, '')}
              </h2>
              <p className="text-gray-600 mb-8">{t('privacy.contact_text')}</p>
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
