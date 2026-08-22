'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const TeamAuthority = () => {
  const t = useTranslations('home.aboutBlurb');

  const pillars = [
    t('pillars.strategy'),
    t('pillars.execution'),
    t('pillars.optimization'),
    t('pillars.directComm'),
  ];

  return (
    <section className="py-2 bg-dark-navy overflow-hidden">
      <div className="container px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-tight"
            >
              {t('headline')} <br /> <span className="text-blue">{t('headlineHighlight')}</span>
            </motion.h2>
            <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-xl font-medium">
              {t('text')}
            </p>
            
            <div className="space-y-6 mb-12 lg:mb-0">
              {pillars.map((item, i) => (
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
                <div className="absolute inset-0 bg-[url('/team-results-1.jpeg')] bg-cover bg-center grayscale" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 relative"
              >
                <div className="absolute inset-0 bg-[url('/team-results-2.jpeg')] bg-cover bg-center grayscale" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 relative"
              >
                <div className="absolute inset-0 bg-[url('/team-results-3.jpeg')] bg-cover bg-center grayscale" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 relative"
              >
                <div className="absolute inset-0 bg-[url('/team-results-4.jpeg')] bg-cover bg-center grayscale" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAuthority;
