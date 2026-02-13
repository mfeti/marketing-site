import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function SEO({ title, description, image }) {
  const { t } = useTranslation();

  const siteTitle = title ? `${title} | MedFinder` : 'MedFinder — Pharmacy Management App';
  const metaDescription = description || t('hero.subheadline');

  return (
    <Helmet>
      <html lang={t('lang_code_iso', { defaultValue: 'en' })} />
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
