'use client';

import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

const videos = [
  'p8c4u0j1ZCs',
  'gKCH9aPh93g',
  'AYs4ekDzZOc',
  'O0e-it2HZd0',
  '1BO2E35ftIQ',
  'oQEevurD2Lo',
  'GzGlUFFjL1c',
  'ZJcm6B-IGj8',
  'WEFwnwSfGL0'
];

const CreativePortfolio = () => {
  const t = useTranslations('home.creativePortfolio');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const isRtl = document.dir === 'rtl';
      let scrollAmount = direction === 'left' ? -350 : 350;
      if (isRtl) {
        scrollAmount = -scrollAmount;
      }
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-2 bg-dark-navy overflow-hidden">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-6">
          <div className="text-start">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight"
            >
              {t('headline')} <br className="md:hidden" /><span className="text-blue">{t('headlineHighlight')}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mt-4 max-w-xl font-medium"
            >
              {t('subheadline')}
            </motion.p>
          </div>
          
          <div className="flex gap-4">
            <button 
              type="button"
              aria-label={t('prev')}
              onClick={() => scroll('left')} 
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white"
            >
              <ChevronLeft className="w-6 h-6 rtl:-scale-x-100" />
            </button>
            <button 
              type="button"
              aria-label={t('next')}
              onClick={() => scroll('right')} 
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white"
            >
              <ChevronRight className="w-6 h-6 rtl:-scale-x-100" />
            </button>
          </div>
        </div>

        <div className="relative -mx-6 px-6">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {videos.map((id, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="shrink-0 w-[260px] md:w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/10 snap-center bg-[#0b0b0b] group"
              >
                <iframe 
                  src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`} 
                  className="w-full h-full border-none object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  title={`Creative Portfolio Video ${i + 1}`}
                  allowFullScreen
                ></iframe>
              </motion.div>
            ))}
          </div>
          {/* Edge Gradients for smooth scrolling fade */}
          <div className="absolute top-0 bottom-0 start-0 w-8 md:w-24 bg-gradient-to-r rtl:bg-gradient-to-l from-dark-navy to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 end-0 w-8 md:w-24 bg-gradient-to-l rtl:bg-gradient-to-r from-dark-navy to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolio;
