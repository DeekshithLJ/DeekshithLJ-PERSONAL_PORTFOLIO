import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AnimatedBackground from './components/AnimatedBackground'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#1a0000]">
      {/* Global Animated Background with Parallax and Video */}
      <AnimatedBackground />

      <div className="relative z-10">
        <Preloader />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App

