import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    title: 'Galaxy Store',
    description: 'E-commerce website built with React',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'SpaceBlog',
    description: 'Blog website with modern UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Star Portfolio',
    description: 'Personal portfolio template',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'NASA Clone',
    description: 'Website clone of NASA\'s homepage',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=400&auto=format&fit=crop',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-widest text-white uppercase">PRO<span className="text-gray-400">JECTS</span></h2>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm tracking-widest uppercase">
            <span>+</span>
            <span className="text-[10px]">Some of my recent work</span>
            <span>+</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-white/30 transition-all duration-300"
            >
              <div className="w-full h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col p-6 flex-grow bg-white/[0.02]">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <a href={project.link} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider hover:text-gray-300 transition-colors mt-auto">
                  VIEW PROJECT <FiArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="px-8 py-4 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
