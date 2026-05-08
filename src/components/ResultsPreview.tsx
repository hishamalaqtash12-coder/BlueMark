'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: '$2M+ Ad Spend Managed', value: '2M' },
  { label: '10,000+ Leads Generated', value: '10K' },
  { label: '9X ROAS Campaigns', value: '9X' },
  { label: 'Multi-Market Experience', value: '15+' },
];

const ResultsPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-dark-navy relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[2.2rem] sm:text-5xl md:text-7xl font-black text-white mb-10 md:mb-12 tracking-tighter uppercase leading-[1.1]"
            >
              Real Work. <br /> <span className="text-blue">Real Growth.</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glow-card p-6 md:p-8 rounded-2xl flex flex-col items-center sm:items-start"
                >
                  <div className="text-4xl md:text-5xl font-black text-blue mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest text-center sm:text-left">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 md:border-4 border-white/5"
            >
              <div className="aspect-video bg-[#0b0b0b] flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
                <div className="relative z-10">
                  <a href="/book" className="w-16 h-16 md:w-20 md:h-20 bg-blue/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-[0_0_30px_rgba(0,158,219,0.5)] mx-auto mb-6">
                    <div className="w-0 h-0 border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[14px] md:border-l-[18px] border-l-white border-b-[8px] md:border-b-[10px] border-b-transparent ml-1" />
                  </a>
                  <p className="text-white font-black uppercase tracking-[0.1em] text-[10px] md:text-xs">
                    Watch Case Studies
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsPreview;
