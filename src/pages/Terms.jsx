import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-orange lg:prose-lg">
        <h1>{t('footer.terms')}</h1>
        <p className="lead text-gray-600">Last updated: February 13, 2026</p>

        <p>
            <em>Note: The full terms of service are currently available in English.</em>
        </p>

        <h2>1. Agreement to Terms</h2>
        <p>
          These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and MedFinder ("we," "us" or "our"), concerning your access to and use of the MedFinder application and website.
        </p>

        <h2>2. Intellectual Property Rights</h2>
        <p>
          Unless otherwise indicated, the Application is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Application (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
        </p>

        <h2>3. User Representations</h2>
        <p>By using the Application, you represent and warrant that:</p>
        <ul>
          <li>All registration information you submit will be true, accurate, current, and complete.</li>
          <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
          <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
          <li>You are not a minor in the jurisdiction in which you reside.</li>
        </ul>

        <h2>4. Prohibited Activities</h2>
        <p>
          You may not access or use the Application for any purpose other than that for which we make the Application available. The Application may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
        </p>

        <h2>5. Termination</h2>
        <p>
          We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
        </p>

        <h2>6. Contact Us</h2>
        <p>In order to resolve a complaint regarding the Application or to receive further information regarding use of the Application, please contact us at:</p>
        <p>
          <strong>MedFinder</strong><br />
          Addis Ababa, Ethiopia<br />
          support@medfinder.et
        </p>
      </div>
    </div>
  );
}
