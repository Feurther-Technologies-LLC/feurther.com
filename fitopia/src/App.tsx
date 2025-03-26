import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <div id="introduction">
          <Hero />
        </div>
        <Features />
        {/* 可以根据需要添加更多部分，如Testimonials, Pricing, FAQ等 */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
