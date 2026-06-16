import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Subsidy from './components/sections/Subsidy';
import Philosophy from './components/sections/Philosophy';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Subsidy />
      <Philosophy />
      <Contact />
    </>
  );
}
