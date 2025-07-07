import HeroSection from '../components/HeroSection';
import Services from './Services';
import About from './About';
import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
