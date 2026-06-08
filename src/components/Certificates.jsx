import React, { useState } from 'react';

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates = [
    {
      title: "AI Foundations",
      issuer: "Oracle Certified Foundations Associate",
      date: "Oct 2025"
    },
    {
      title: "Virtual Cloud Computing",
      issuer: "Great Learning",
      date: "Nov 2024"
    },
    {
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      date: "Feb 2024"
    },
    {
      title: "Load Testing Training",
      issuer: "Maiora IT Services and consultancy Pvt Ltd, Bengaluru",
      date: ""
    },
    {
      title: "Communication Skills",
      issuer: "Seven Sences",
      date: "Jun 2023"
    }
  ];

  return (
    <section id="certificates" className="bg-transparent pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <div data-aos="fade-down" className="inline-block border border-white/40 rounded-full px-5 py-1.5 text-sm text-white font-bold mb-8 shadow-sm bg-[#8b0000]/60 backdrop-blur-md">
          Licenses & Certifications
        </div>
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
          CERTIFICATES
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-300 text-base md:text-lg max-w-2xl font-medium leading-relaxed mb-10">
          Professional certifications and additional training that showcase my commitment to continuous learning.
        </p>
        
        <button 
          data-aos="zoom-in" data-aos-delay="200"
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-[#8b0000] text-white font-bold rounded-full hover:bg-red-900 transition-transform transform hover:scale-105 shadow-[0_0_20px_rgba(139,0,0,0.5)] border border-red-500/30 flex items-center gap-3"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
          View Certificates
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div 
            className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl animate-fade-in-up"
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
              Certifications
            </h3>
            
            <div className="space-y-6 text-left">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-[#8b0000]/40 p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-[0_0_20px_rgba(139,0,0,0.8)] hover:border-white/50 hover:bg-[#8b0000]/60 transition-all flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#8b0000]/40 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#5a0000] group-hover:text-white transition-colors shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1 leading-tight">{cert.title}</h4>
                    <p className="text-gray-300 font-medium">{cert.issuer}</p>
                  </div>
                  {cert.date && (
                    <div className="text-sm font-bold text-white bg-black/40 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {cert.date}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
