'use client';

import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useRef, useEffect } from 'react';

const DeviceShowcase = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  const features = [
    { title: 'Business Growth', desc: 'Scalable strategies for long-term success.' },
    { title: 'Revenue Focus', desc: 'Direct impact on your bottom line.' },
    { title: 'Brand Authority', desc: 'Position yourself as an industry leader.' },
    { title: 'Market Dominance', desc: 'Outperform your competitors with ease.' },
  ];

  return (
    <section className="py-24 md:py-32 bg-dark-navy overflow-hidden">
      <div className="container px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase">
            What we can <br /> <span className="text-blue">Achieve Together</span>
          </h2>
          <p className="text-gray-400 uppercase font-bold tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-sm">Targeted results for ambitious brands</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
          {/* Left Side Features */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8 md:gap-12 text-center lg:text-right order-2 lg:order-1">
            {features.slice(0, 2).map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group px-4"
              >
                <div className="flex flex-col lg:flex-row-reverse items-center gap-3 mb-2">
                   <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue shrink-0" />
                   <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-blue transition-colors">{f.title}</h3>
                </div>
                <p className="text-gray-400 text-sm max-w-xs mx-auto lg:ml-auto">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Video */}
          <div ref={containerRef} className="w-full lg:w-1/3 relative flex justify-center order-1 lg:order-2 mb-8 lg:mb-0 px-4">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[200px] md:h-[300px] bg-blue/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse-slow" />
             <motion.div
               initial={{ opacity: 0, scale: 0.8, y: 50 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true }}
               className="relative z-10 w-full max-w-[320px] md:max-w-[480px] aspect-video bg-[#0b0b0b] rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-white/10 group"
             >
                {isInView ? (
                  <iframe 
                    src="https://www.youtube.com/embed/K1GmGx-vQQI?autoplay=1&loop=1&playlist=K1GmGx-vQQI&controls=1&showinfo=0&rel=0" 
                    className="w-full h-full border-none object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    title="Dashboard Preview"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full bg-[#0b0b0b]"></div>
                )}
             </motion.div>
          </div>

          {/* Right Side Features */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8 md:gap-12 text-center lg:text-left order-3">
            {features.slice(2, 4).map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group px-4"
              >
                <div className="flex flex-col lg:flex-row items-center gap-3 mb-2">
                   <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue shrink-0" />
                   <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-blue transition-colors">{f.title}</h3>
                </div>
                <p className="text-gray-400 text-sm max-w-xs mx-auto lg:mr-auto">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
