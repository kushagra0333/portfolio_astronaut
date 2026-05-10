import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    period: '2022 - Present',
    description: 'Led the frontend team in developing responsive and highly scalable web applications. Mentored junior developers and improved overall code quality.'
  },
  {
    role: 'Web Developer',
    company: 'Creative Studio',
    period: '2020 - 2022',
    description: 'Designed and implemented intuitive user interfaces for diverse clients. Worked closely with the design team to ensure pixel-perfect implementations.'
  },
  {
    role: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2018 - 2020',
    description: 'Assisted in building full-stack features. Gained extensive experience in modern JavaScript frameworks and collaborative version control.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 flex flex-col items-center">
      <div className="w-full max-w-5xl px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-widest text-white uppercase">EXPERI<span className="text-gray-400">ENCE</span></h2>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm tracking-widest uppercase">
            <span>+</span>
            <span className="text-[10px]">My Professional Journey</span>
            <span>+</span>
          </div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-gray-400 group-hover:text-white group-hover:border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                  <span className="text-gray-500 text-xs font-mono bg-white/5 px-3 py-1 rounded-full w-fit mt-2 lg:mt-0">{exp.period}</span>
                </div>
                <h4 className="text-gray-400 text-sm mb-4 font-semibold uppercase tracking-wider">{exp.company}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
