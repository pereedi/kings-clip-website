import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Features from './components/Features';
import AITools from './components/AITools';
import Gallery from './components/Gallery';
import Templates from './components/Templates';
import HowItWorks from './components/HowItWorks';
import BeforeAfter from './components/BeforeAfter';
import Audience from './components/Audience';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="main-wrapper">
        <div className="content-col">
          <Hero />
          <Showcase />
          <Features />
          <AITools />
          <Gallery />
          <Templates />
          <HowItWorks />
          <BeforeAfter />
          <Audience />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
