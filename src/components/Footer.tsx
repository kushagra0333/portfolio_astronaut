import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 relative z-10 flex flex-col items-center">
      <div className="w-full max-w-lg px-4 sm:px-6 relative z-10">
        <div className="relative">
          <div className="absolute -left-6 -top-10 w-16 h-16 bg-white/10 rounded-full blur-[20px]"></div>
          <motion.img 
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatType: "reverse" }}
            src="/about_astronaut_1778177555935.png" 
            alt="Astronaut" 
            className="w-16 h-16 object-contain absolute -left-8 -top-8 z-20"
          />
          <div className="bg-[#0a0a0a] border border-white/10 rounded-full py-4 px-12 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute w-24 h-24 bg-white/5 rounded-full blur-[20px] left-4 top-1/2 -translate-y-1/2"></div>
            <h3 className="text-white font-bold tracking-widest text-sm uppercase mb-1 z-10">THANK YOU FOR VISITING!</h3>
            <p className="text-gray-500 text-xs tracking-wide z-10">Let's create something amazing together.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
