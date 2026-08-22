'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import * as fpixel from '@/lib/fpixel';

export default function SchedulePage() {
  const router = useRouter();
  const t = useTranslations('book');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (e: MessageEvent) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        fpixel.event('Schedule');
        fpixel.event('Lead');
        router.push('/thank-you');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener('message', handleMessage);
    };
  }, [router]);

  return (
    <div className="bg-dark-navy min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 text-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue font-black uppercase tracking-[0.3em] text-xs mb-4 block">
            {t('hero.badge')}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
            {t('hero.headlinePart1')} <span className="text-blue text-glow">{t('hero.headlineHighlight')}</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-12">
            {t('hero.subheadline')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-5xl mx-auto bg-white/[0.02] rounded-[2.5rem] p-0 md:p-8 border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-radial-glow opacity-10 pointer-events-none" />
          
          <div 
            className="calendly-inline-widget min-h-[700px] w-full relative z-10 rounded-2xl overflow-hidden" 
            data-url="https://calendly.com/hisham-alaqtash12/free_growth_strategy_call"
          ></div>
        </motion.div>
      </div>
    </div>
  );
}
