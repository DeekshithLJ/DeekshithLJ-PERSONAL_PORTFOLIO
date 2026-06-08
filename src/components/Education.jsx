import React, { useState } from 'react';

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="education" className="bg-transparent pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <div data-aos="fade-down" className="inline-block border border-white/40 rounded-full px-5 py-1.5 text-sm text-white font-bold mb-8 shadow-sm bg-[#8b0000]/60 backdrop-blur-md">
          My Academic Journey
        </div>
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
          EDUCATION
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-300 text-base md:text-lg max-w-2xl font-medium leading-relaxed mb-10">
          My educational background and academic achievements.
        </p>
        
        <button 
          data-aos="zoom-in" data-aos-delay="200"
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-[#8b0000] text-white font-bold rounded-full hover:bg-red-900 transition-transform transform hover:scale-105 shadow-[0_0_20px_rgba(139,0,0,0.5)] border border-red-500/30"
        >
          View Education Details
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div 
            className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 bg-[#8b0000]/60 border border-white/10 rounded-full hover:bg-[#8b0000]"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 border-b-4 border-[#8b0000] inline-block pb-2">
              Education
            </h3>
            
            <div className="space-y-8 text-left text-gray-300">
              
              {/* Degree */}
              <div data-aos="fade-up" className="bg-[#8b0000]/40 p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-[0_0_20px_rgba(139,0,0,0.8)] hover:border-white/50 hover:bg-[#8b0000]/60 transition-all">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Bachelor of Engineering (Computer Science and Engineering)</h4>
                <div className="flex flex-col md:flex-row md:items-center justify-between text-gray-400 mb-3 font-medium">
                  <span>KVG College of Engineering (KVGCE)</span>
                  <span className="text-[#ff6b6b] font-bold">2022–2026</span>
                </div>
                <p className="text-lg font-black text-gray-200">CGPA: 8.29/10</p>
              </div>

              {/* PU */}
              <div data-aos="fade-up" data-aos-delay="100" className="bg-[#8b0000]/40 p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-[0_0_20px_rgba(139,0,0,0.8)] hover:border-white/50 hover:bg-[#8b0000]/60 transition-all">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Pre-University Education (PCMC)</h4>
                <div className="flex flex-col md:flex-row md:items-center justify-between text-gray-400 mb-3 font-medium">
                  <span>St. Joseph's Pre-University College, Somwarpet, Kodagu, Karnataka</span>
                </div>
                <p className="text-lg font-black text-gray-200">Score: 73.83%</p>
              </div>

              {/* SSLC */}
              <div data-aos="fade-up" data-aos-delay="200" className="bg-[#8b0000]/40 p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-[0_0_20px_rgba(139,0,0,0.8)] hover:border-white/50 hover:bg-[#8b0000]/60 transition-all">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">SSLC</h4>
                <div className="flex flex-col md:flex-row md:items-center justify-between text-gray-400 mb-3 font-medium">
                  <span>Jnana Vikasa English Medium School, Somwarpet, Kodagu, Karnataka</span>
                </div>
                <p className="text-lg font-black text-gray-200">Score: 80.96%</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
