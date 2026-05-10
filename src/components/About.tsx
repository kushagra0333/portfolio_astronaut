import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Tailwind CSS', level: 80 },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-widest uppercase text-white">ABOUT ME</h2>
          <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center relative"
          >
            <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 flex items-center justify-center overflow-hidden bg-[#0a0a0a] z-10 p-8 shadow-2xl">
              <img 
                src="/about_astronaut_1778177555935.png" 
                alt="Astronaut waving" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="mt-8 text-center max-w-sm">
              <p className="text-gray-300 text-lg leading-relaxed">
                Frontend Developer with a passion for creating beautiful and functional websites.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              I'm a dedicated frontend developer skilled in HTML, CSS, JavaScript, React and modern frameworks. I love turning ideas into real-world products.
            </p>
            
            <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">SKILLS</h3>
            
            <div className="space-y-6 mb-12">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-xs font-bold">{skill.name.charAt(0)}</span>
                      <span className="text-sm font-semibold text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#111] rounded-full h-1.5 border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="bg-gray-300 h-1.5 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 bg-[#0a0a0a] rounded-2xl border border-white/5">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">1+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight">YEARS<br/>EXPERIENCE</div>
              </div>
              <div className="text-center border-l border-r border-white/5">
                <div className="text-2xl font-bold text-white mb-2">15+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight">PROJECTS<br/>COMPLETED</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">10+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight">HAPPY<br/>CLIENTS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
