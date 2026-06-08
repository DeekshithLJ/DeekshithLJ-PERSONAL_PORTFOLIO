import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "React.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" }
      ]
    },
    {
      title: "Frameworks & Tech",
      skills: [
        { name: "Spring", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "Hibernate", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
        { name: "Eclipse", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" }
      ]
    },
    {
      title: "Concepts",
      skills: [
        { 
          name: "OOP", 
          svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-[#8b0000]"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        },
        { 
          name: "DBMS", 
          svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-[#8b0000]"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
        }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-transparent pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block border border-white/40 rounded-full px-5 py-1.5 text-sm text-white font-bold mb-4 shadow-sm bg-[#8b0000]/60 backdrop-blur-md">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-md">
            My Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
              className="bg-black/50 backdrop-blur-xl rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/10 border-b-4 border-black hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-b-[#8b0000] transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <h3 className="text-2xl font-black text-white mb-6 border-b-2 border-[#8b0000] pb-2 inline-block group-hover:text-[#ff6b6b] transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 w-20">
                    <div className="w-16 h-16 rounded-2xl bg-[#8b0000]/40 flex items-center justify-center p-3 shadow-inner border border-white/10 group-hover:border-white/50 group-hover:bg-[#8b0000]/60 transition-colors duration-300">
                      {skill.url ? (
                        <img src={skill.url} alt={skill.name} className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <div className="w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                          {skill.svg}
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-bold text-gray-300 text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
