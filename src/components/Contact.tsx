import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiCheckCircle, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10 flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-widest text-white uppercase">CONTACT <span className="text-gray-400">ME</span></h2>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm tracking-widest uppercase">
            <span>+</span>
            <span className="text-[10px]">Let's work together!</span>
            <span>+</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#050505] border border-white/10 rounded-3xl p-8 lg:p-12 w-full">
          <div className="flex flex-col items-center lg:items-start relative">
            <div className="absolute w-48 h-48 bg-white/5 rounded-full blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <motion.img 
              initial={{ y: -20 }}
              animate={{ y: 20 }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatType: "reverse" }}
              src="/contact_astronaut_1778177583429.png" 
              alt="Floating Astronaut" 
              className="w-48 h-48 lg:w-64 lg:h-64 object-contain z-10 relative mb-8"
            />
            
            <div className="w-full space-y-4 mt-auto">
            <div className="flex items-center gap-4 text-gray-400">
              <FiMail size={18} />
              <span className="text-sm">youremail@example.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <FiPhone size={18} />
              <span className="text-sm">+123 456 7890</span>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <FiMapPin size={18} />
              <span className="text-sm">Earth 🌍</span>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <FiCheckCircle size={18} className="text-white" />
              <span className="text-sm">Available for freelance</span>
            </div>
          </div>
        </div>

        <form className="space-y-4 flex flex-col justify-center">
          <div>
            <input 
              type="text" 
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input 
              type="email" 
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea 
              rows={4}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button 
            type="button"
            className="w-full py-4 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors"
          >
            SEND MESSAGE <FiSend />
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
