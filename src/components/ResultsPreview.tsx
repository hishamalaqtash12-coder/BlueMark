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
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
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

          <div className="lg:w-1/2 w-full relative flex justify-center mt-12 lg:mt-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue/20 rounded-full blur-[80px]" />
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative z-10 w-full max-w-[320px] aspect-[9/16] bg-[#0b0b0b] rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10"
             >
                <iframe 
                  src="https://www.youtube.com/embed/JTnE6QNEPzo?rel=0&modestbranding=1" 
                  className="w-full h-full border-none object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  title="Blue Mark Case Study"
                  allowFullScreen
                ></iframe>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsPreview;
