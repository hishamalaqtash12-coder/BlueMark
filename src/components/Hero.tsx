'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden bg-dark-navy">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-transparent to-dark-navy z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-blue font-bold tracking-[0.4em] uppercase text-[9px] md:text-xs mb-8 block px-4 opacity-80">
            Premium Growth Solutions
          </span>
          <h1 className="text-[3rem] sm:text-7xl md:text-[10rem] font-black text-white leading-[0.95] md:leading-[0.85] mb-10 tracking-tighter text-glow px-2 uppercase">
            Growth <br className="hidden sm:block" /> 
            Begins <br className="hidden sm:block" /> 
            <span className="text-blue">Here.</span>
          </h1>
          <p className="text-sm md:text-2xl text-gray-400 mb-12 max-w-lg md:max-w-3xl mx-auto uppercase tracking-widest font-bold leading-relaxed px-4 opacity-70">
            Qualified Leads. Scalable Revenue. <br className="hidden md:block" /> Results-Driven Execution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-24 px-6">
            <Link
              href="/book"
              className="btn-primary w-full sm:w-auto px-12"
            >
              Book Free Strategy Call <Play className="w-5 h-5 fill-current" />
            </Link>
            <Link 
              href="/results"
              className="text-white font-black uppercase tracking-widest text-xs border-b-2 border-white/10 hover:border-blue transition-all pb-1"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glow-card p-8 rounded-3xl text-center md:text-left bg-white/[0.02]"
            >
               <div className="text-4xl font-black text-white mb-2">20+</div>
               <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]">Markets Served</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="glow-card p-8 rounded-3xl text-center md:text-left bg-blue/10 border-blue/30"
            >
               <div className="text-4xl font-black text-blue mb-2">1,000+</div>
               <p className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em]">Monthly Leads</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="glow-card p-8 rounded-3xl text-center md:text-left bg-white/[0.02]"
            >
               <div className="text-4xl font-black text-white mb-2">9X</div>
               <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]">Average ROAS</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
