'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface FinalCTAProps {
  headline?: React.ReactNode;
  subheadline?: string;
}

const FinalCTA = ({ 
  headline = <>Ready to <span className="text-blue">Scale?</span></>,
  subheadline = "Ready to grow?"
}: FinalCTAProps) => {
  return (
    <section className="py-24 md:py-48 bg-dark-navy relative overflow-hidden text-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue/10 rounded-full blur-[100px] md:blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue/10 rounded-full blur-[100px] md:blur-[120px]" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-blue font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm mb-6 md:mb-8 block">{subheadline}</span>
          <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-black text-white leading-[0.9] tracking-tighter mb-12 md:mb-16 uppercase">
            {headline}
          </h2>
          
          <Link
            href="/book"
            className="inline-block bg-blue text-white px-10 md:px-16 py-6 md:py-8 rounded-full font-black text-lg md:text-2xl uppercase tracking-widest hover:bg-white hover:text-navy transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(0,158,219,0.4)] w-full sm:w-auto"
          >
            Book Free Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
