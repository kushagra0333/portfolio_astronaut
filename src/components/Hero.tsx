import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowRight } from 'react-icons/fi';
import { BsMouse } from 'react-icons/bs';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background Stars Overlay Removed (Now in App.tsx) */}

      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 hidden lg:flex flex-col items-center gap-2 z-20 text-gray-400">
        <BsMouse size={20} />
        <span className="text-[10px] tracking-widest writing-vertical-rl rotate-180 uppercase mt-2">Scroll Down</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10 w-full pl-8 lg:pl-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-4 text-center lg:text-left"
          >
            <h2 className="text-xl md:text-2xl font-semibold tracking-widest text-white uppercase">
              HI, I'M
            </h2>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              YOUR<br />NAME
            </h1>
            
            <h3 className="text-xl md:text-2xl text-white font-bold uppercase tracking-wider mt-2">
              Frontend Developer
            </h3>
            
            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-base md:text-lg mt-4 leading-relaxed">
              I build responsive and interactive web experiences that are out of this world.
            </p>
            
            <div className="flex justify-center lg:justify-start pt-6">
              <Link to="projects" smooth={true} duration={500}>
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300">
                  <span className="text-sm tracking-wider uppercase">Explore My Work</span>
                  <FiArrowRight />
                </button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 pt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FiGithub size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FiLinkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FiTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FiInstagram size={24} /></a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center h-[400px] md:h-[600px]"
          >
            {/* Glowing orb background */}
            <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div>
            
            {/* Astronaut Image */}
            <img 
              src="/hero_astronaut_1778177541852.png" 
              alt="Astronaut with laptop on moon" 
              className="w-full max-w-[500px] h-auto object-contain z-10 animate-float"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
