import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../common/SEO';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <SEO />
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
