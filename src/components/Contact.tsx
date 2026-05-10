import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-widest text-white uppercase">CONTACT <span className="text-gray-500">ME</span></h2>
          <p className="text-gray-400 text-sm tracking-[0.3em] uppercase">Let's work together!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-10 tracking-tight">Contact Information</h3>
            
            <div className="space-y-6 flex-grow">
              {/* Email Card */}
              <a href="mailto:kushagrapandey0333@gmail.com" className="bg-white/[0.05] border border-white/5 p-5 rounded-2xl flex items-center gap-5 group hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-gray-200 font-medium break-all text-sm md:text-base">kushagrapandey0333@gmail.com</p>
                </div>
              </a>

              {/* GitHub Card */}
              <a href="https://github.com/kushagra0333" target="_blank" rel="noopener noreferrer" className="bg-white/[0.05] border border-white/5 p-5 rounded-2xl flex items-center gap-5 group hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <FiGithub size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">GitHub</p>
                  <p className="text-gray-200 font-medium text-sm md:text-base">github.com/kushagra0333</p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a href="https://linkedin.com/in/its-kushagra-pandey" target="_blank" rel="noopener noreferrer" className="bg-white/[0.05] border border-white/5 p-5 rounded-2xl flex items-center gap-5 group hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <FiLinkedin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">LinkedIn</p>
                  <p className="text-gray-200 font-medium text-sm md:text-base">linkedin.com/in/its-kushagra-pandey</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-10 tracking-tight">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-700"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-700"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-700 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-blue-500/20"
              >
                Send Message <FiSend className="text-lg" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Mobile View Planet/Astronaut (as seen in image 2) */}
        <div className="mt-16 lg:hidden flex flex-col items-center">
            <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full"></div>
                <img 
                    src="/contact_astronaut_1778177583429.png" 
                    alt="Space Illustration" 
                    className="w-48 h-48 object-contain relative z-10 animate-float"
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
