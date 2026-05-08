'use client';

import { motion } from 'framer-motion';

const TeamAuthority = () => {
  return (
    <section className="py-20 md:py-32 bg-dark-navy overflow-hidden">
      <div className="container px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-tight"
            >
              Built by a Team <br /> <span className="text-blue">Focused on Results</span>
            </motion.h2>
            <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-xl font-medium">
              Blue Mark works with businesses across the USA, GCC, and Jordan to build scalable growth strategies focused on measurable business results.
            </p>
            
            <div className="space-y-6 mb-12 lg:mb-0">
              {['Strategy First Approach', 'Creative Execution', 'Data-Driven Optimization', 'Direct Founder Communication'].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-blue/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue shadow-[0_0_10px_rgba(0,158,219,0.8)]" />
                  </div>
                  <span className="font-bold text-white uppercase tracking-wide text-xs md:text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 relative"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 relative"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 relative"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 relative"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880212340-053459a139ad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAuthority;
