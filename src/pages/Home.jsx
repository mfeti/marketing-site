import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import Features from '../components/sections/Features';
import Showcase from '../components/sections/Showcase';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Download from '../components/sections/Download';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <Showcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Download />
    </>
  );
}
