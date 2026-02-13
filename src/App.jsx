import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Showcase from './components/sections/Showcase';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Download from './components/sections/Download';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <Testimonials />
      <Download />
    </Layout>
  )
}

export default App
