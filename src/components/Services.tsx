import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaDesktop, FaRocket } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive, fast and modern websites tailored to your needs.',
    icon: <FaCode size={24} className="text-gray-300" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing clean and intuitive interfaces that provide great user experiences.',
    icon: <FaPaintBrush size={24} className="text-gray-300" />,
  },
  {
    title: 'Responsive Design',
    description: 'Making sure your website looks perfect on every device and screen size.',
    icon: <FaDesktop size={24} className="text-gray-300" />,
  },
  {
    title: 'Web Optimization',
    description: 'Improving performance, SEO and best practices for faster and better websites.',
    icon: <FaRocket size={24} className="text-gray-300" />,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative z-10 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-widest text-white uppercase">SER<span className="text-gray-400">VICES</span></h2>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm tracking-widest uppercase">
            <span>+</span>
            <span className="text-[10px]">What I can do for you</span>
            <span>+</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#050505] p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center gap-4 hover:border-white/30 hover:bg-[#0a0a0a] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black mb-2 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-16 w-full max-w-md flex justify-center relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
        <img 
          src="/services_planet_1778177568541.png" 
          alt="Ringed Planet" 
          className="w-48 md:w-64 h-auto object-contain z-10"
        />
      </motion.div>
    </section>
  );
};

export default Services;
