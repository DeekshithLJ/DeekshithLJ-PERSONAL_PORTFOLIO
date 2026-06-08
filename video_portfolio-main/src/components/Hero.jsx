import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    // AOS is now initialized in App.jsx globally
  }, []);



  return (
    <section className="relative w-full min-h-screen flex items-center bg-transparent pt-20">
      {/* Content Container */}
      <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-left w-full h-full pb-20">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight"
          >
            <span>
              Hi, I’m Deekshith L J
            </span>
            <br /> 
            <motion.span 
              className="inline-block font-black text-white mt-2"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 0px 20px rgba(0,0,0,0.8)",
                  "0px 0px 0px rgba(0,0,0,0)"
                ],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Java Full Stack Developer
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-white/90 text-sm md:text-lg font-medium mb-8 max-w-md drop-shadow-lg leading-relaxed"
          >
            Computer Science and Engineering student passionate about building efficient software solutions and solving real-world problems.
          </motion.p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-4 w-full mt-4"
          >
            {/* Primary Button */}
            <a href="#services" className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-full bg-[#8b0000] border border-[#ff6b6b]/30 text-white font-black tracking-wide hover:bg-black hover:text-[#ff6b6b] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-xl hover:shadow-2xl">
              View My Work
            </a>
            
            {/* Secondary Button - Glassmorphism style */}
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-full bg-black/20 border-2 border-white text-white font-black tracking-wide hover:bg-black/40 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-lg shadow-lg hover:shadow-2xl"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side: Social Links */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-3 md:gap-4 cursor-pointer self-start md:self-auto z-30 flex-wrap justify-center"
        >
          {/* GitHub */}
          <a href="https://github.com/DeekshithLJ" target="_blank" rel="noreferrer" className="group">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 md:w-7 md:h-7 invert group-hover:invert-0 transition-all" />
            </div>
          </a>
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/deekshithlj" target="_blank" rel="noreferrer" className="group">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/916362839776" target="_blank" rel="noreferrer" className="group">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#25D366] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:deekshithgowda767@gmail.com" className="group">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ea4335] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/deekshith_._gowda_?igsh=c2ZhNHZkaXVlN3hx" target="_blank" rel="noreferrer" className="group">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#E1306C] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/share/1au6fayNvH/" target="_blank" rel="noreferrer" className="group">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#1877F2] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Contact Modal Overlay */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div 
            className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-md w-full relative shadow-2xl animate-fade-in-up text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-[#ff6b6b] transition-colors p-2 bg-[#8b0000]/40 rounded-full hover:bg-[#8b0000]/60"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-3xl font-black text-white mb-8 border-b-4 border-[#8b0000] inline-block pb-2">
              Let's Connect
            </h3>
            
            <div className="flex flex-col gap-6 text-gray-200">
              {/* Phone */}
              <a href="tel:+916362839776" className="flex items-center gap-4 group p-3 rounded-xl hover:bg-[#8b0000]/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#8b0000]/40 flex items-center justify-center text-[#ff6b6b] group-hover:bg-[#8b0000] group-hover:text-white transition-colors border border-white/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</div>
                  <div className="font-black text-lg text-white">+91 6362839776</div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:deekshithgowda767@gmail.com" className="flex items-center gap-4 group p-3 rounded-xl hover:bg-[#8b0000]/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#8b0000]/40 flex items-center justify-center text-[#ff6b6b] group-hover:bg-[#8b0000] group-hover:text-white transition-colors border border-white/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email</div>
                  <div className="font-black text-sm md:text-base break-all text-white">deekshithgowda767@gmail.com</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/deekshithlj" target="_blank" rel="noreferrer" className="flex items-center gap-4 group p-3 rounded-xl hover:bg-[#8b0000]/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#8b0000]/40 flex items-center justify-center text-[#ff6b6b] group-hover:bg-[#8b0000] group-hover:text-white transition-colors border border-white/10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">LinkedIn</div>
                  <div className="font-black text-lg text-white">deekshithlj</div>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/deekshith_._gowda_?igsh=c2ZhNHZkaXVlN3hx" target="_blank" rel="noreferrer" className="flex items-center gap-4 group p-3 rounded-xl hover:bg-[#8b0000]/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#8b0000]/40 flex items-center justify-center text-[#ff6b6b] group-hover:bg-[#8b0000] group-hover:text-white transition-colors border border-white/10">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Instagram</div>
                  <div className="font-black text-lg truncate w-40 md:w-auto text-white">deekshith_._gowda_</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
