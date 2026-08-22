'use client';

import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

const DeviceShowcase = () => {
  const t = useTranslations('home.showcase');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  const features = [
    { title: t('features.businessGrowth.title'), desc: t('features.businessGrowth.desc') },
    { title: t('features.revenueFocus.title'), desc: t('features.revenueFocus.desc') },
    { title: t('features.brandAuthority.title'), desc: t('features.brandAuthority.desc') },
    { title: t('features.marketDominance.title'), desc: t('features.marketDominance.desc') },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark-navy overflow-hidden">
      <div className="container px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase">
            {t('headline')} <br /> <span className="text-blue">{t('headlineHighlight')}</span>
          </h2>
          <p className="text-gray-400 uppercase font-bold tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-sm">
            {t('badge')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
          {/* Left Side Features */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8 md:gap-12 text-center lg:text-end order-2 lg:order-1">
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
                <p className="text-gray-400 text-sm max-w-xs mx-auto lg:ms-auto">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Video */}
          <div ref={containerRef} className="w-full lg:w-1/3 relative flex justify-center order-1 lg:order-2 mb-8 lg:mb-0 px-4">
             <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[200px] md:h-[300px] bg-blue/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse-slow" />
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
          <div className="w-full lg:w-1/3 flex flex-col gap-8 md:gap-12 text-center lg:text-start order-3">
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
                <p className="text-gray-400 text-sm max-w-xs mx-auto lg:me-auto">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
