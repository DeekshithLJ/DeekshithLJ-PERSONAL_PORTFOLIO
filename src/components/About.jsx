import React, { useState } from "react";
import profileImage from "../assets/about/DP.jpeg";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="bg-transparent pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div
            data-aos="drop-bounce"
            className="relative flex justify-center w-full"
          >
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-black/40 rounded border border-white/20 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-[#8b0000] border border-white/10 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Binder Clip */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-black/50 backdrop-blur-md rounded-t-xl transform -translate-x-1/2 flex justify-center items-center border border-white/20">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-black/20 border-2 border-transparent">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Info Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="flex-1 text-white mt-8 md:mt-0 relative z-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">
            Hello!
          </h2>
          <p className="text-lg font-bold mb-6 leading-relaxed max-w-3xl text-gray-200">
            Hi, my name is{" "}
            <span className="text-white text-xl font-black mx-1 tracking-wide uppercase bg-[#8b0000] px-2 py-1 rounded">
              Deekshith L J
            </span>
            , a Java Full Stack Developer based in Bengaluru, Karnataka, with
            hands-on experience in building efficient software solutions using
            modern technologies.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            data-aos="fade-up"
            className="px-8 py-3 bg-[#8b0000] text-white font-bold rounded-full border border-white/20 hover:bg-[#5a0000] transition-transform transform hover:scale-105 shadow-[0_0_15px_rgba(139,0,0,0.5)] mb-12 flex items-center justify-center gap-2 max-w-xs"
          >
            About Me
          </button>

          {/* Horizontal Skills Row (Transparent & Large) */}
          <div className="flex flex-wrap items-center gap-6 mt-8">
            {[
              {
                name: "Java",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
              },
              {
                name: "HTML5",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
              },
              {
                name: "CSS3",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
              },
              {
                name: "JavaScript",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
              },
              {
                name: "React",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
              },
              {
                name: "MySQL",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
              },
              {
                name: "Spring",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
              },
              {
                name: "Hibernate",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",
              },
              {
                name: "Git",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
              },
            ].map((skill, index) => (
              <img
                key={skill.name}
                data-aos="zoom-in"
                data-aos-delay={300 + index * 50}
                src={skill.url}
                alt={skill.name}
                title={skill.name}
                className="w-12 h-12 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl bg-[#8b0000]/40 rounded-lg p-2 border border-white/5"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
      <div
        className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div 
            className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-[#8b0000] transition-colors p-2 bg-black/40 rounded-full hover:bg-black/60 border border-white/10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 border-b-4 border-[#8b0000] inline-block pb-2">
              Detailed Background
            </h3>
            
            <div className="text-gray-300 space-y-6 text-base md:text-lg font-medium leading-relaxed">
              <p>
                Computer Science and Engineering student with a strong academic background and hands-on experience in Java Full Stack Development, web application development, and database management. Skilled in Java, Advanced Java, MySQL, SQL, HTML, CSS, JavaScript, React.js, Spring Framework, and Hibernate, with a solid understanding of Object-Oriented Programming (OOP) concepts and Database Management Systems (DBMS). Passionate about designing, developing, and implementing scalable software applications that provide efficient and user-friendly solutions to real-world problems. Experienced in building responsive web applications, integrating databases, and implementing backend functionalities using modern development frameworks and technologies.
              </p>
              
              <p>
                Completed Java Full Stack Developer internship training at Tap Academy, where I gained practical exposure to frontend development, backend development, database integration, and software development life cycle practices. Developed a Fashion Store Web Application using Java, MySQL, HTML, CSS, JavaScript, React.js, Spring Framework, and Hibernate, focusing on responsive user interface design, business logic implementation, and efficient data management. Acquired hands-on experience in developing full-stack applications and understanding industry-standard development practices.
              </p>
              
              <p>
                Successfully completed multiple academic and personal projects, including a Driver Drowsiness Detection System that utilized Python, OpenCV, and Machine Learning techniques to monitor driver alertness and improve road safety through real-time detection and alert mechanisms. Developed an AI-Based Resume Screening and Interview Suggester application that automated candidate evaluation and recommendation processes by analyzing resumes against job requirements. These projects strengthened problem-solving abilities, analytical thinking, software design skills, and the ability to work with diverse technologies and development tools.
              </p>
              
              <p>
                Possess strong technical knowledge in software development, web technologies, database design, and application development, along with a commitment to continuous learning and professional growth. Earned certifications in AI Foundations from Oracle, Virtual Cloud Computing from Great Learning, Basics of Python from Infosys Springboard, Communication Skills, and Load Testing. A quick learner with excellent teamwork, communication, and adaptability skills, seeking an opportunity to contribute technical expertise, creativity, and dedication to a dynamic organization as a Java Full Stack Developer or Software Developer while continuing to enhance technical and professional capabilities.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
