import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Webyacu from './components/Webyacu';
import Services from './components/Services';
import Methodology from './components/Methodology';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Webyacu />
        <Services />
        <WhyUs />
        <Methodology />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
