'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import * as fpixel from '@/lib/fpixel';

const BookingPage = () => {
  const router = useRouter();
  const t = useTranslations('book');
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lazy load Calendly widget via IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isScriptLoaded) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        setIsScriptLoaded(true);
      }
    }, { rootMargin: '200px' });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleMessage = (e: MessageEvent) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        // Fire Meta Pixel events for Schedule and Lead
        fpixel.event('Schedule');
        fpixel.event('Lead');
        router.push('/thank-you');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      observer.disconnect();
      window.removeEventListener('message', handleMessage);
    };
  }, [isScriptLoaded, router]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('whatsapp.prefilled'));
    window.open(`https://wa.me/962790453482?text=${message}`, '_blank');
  };

  const whatYouGetItems = [
    t('whatYouGet.item1'),
    t('whatYouGet.item2'),
    t('whatYouGet.item3'),
    t('whatYouGet.item4'),
  ];

  return (
    <div className="bg-dark-navy min-h-screen pt-32 pb-20">
      <div className="container px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue font-black uppercase tracking-[0.3em] text-xs mb-4 block">
            {t('hero.badge')}
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
            {t('hero.headlinePart1')} <span className="text-blue text-glow">{t('hero.headlineHighlight')}</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-6">
            {t('hero.subheadline')}
          </p>
          <a
            href="#calendly-section"
            className="inline-block bg-blue/20 hover:bg-blue border border-blue/40 text-white text-xs font-black uppercase px-6 py-2.5 rounded-full transition-all tracking-wider"
          >
            {t('hero.ctaAboveFold')}
          </a>
        </motion.div>

        <div id="calendly-section" className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto items-start">
          {/* Calendly Section */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white/[0.03] rounded-[2.5rem] p-0 border border-white/5 shadow-2xl relative overflow-hidden min-h-[800px]"
          >
            <div className="absolute inset-0 bg-radial-glow opacity-10 pointer-events-none" />
            <div className="relative z-10 w-full h-full min-h-[700px] flex flex-col justify-center">
              <div 
                className="calendly-inline-widget w-full rounded-2xl overflow-hidden" 
                data-url="https://calendly.com/hisham-alaqtash12/free_growth_strategy_call" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </motion.div>

          {/* Quick Track: WhatsApp Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-blue/10 rounded-[2.5rem] p-10 border border-blue/20 shadow-2xl text-start relative overflow-hidden">
              <div className="absolute -top-10 -end-10 w-40 h-40 bg-blue/10 rounded-full blur-3xl" />
              <MessageCircle className="w-12 h-12 text-blue mb-8" />
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                {t('whatsapp.badge')}
              </h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed mb-10">
                {t('whatsapp.text')}
              </p>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full bg-blue hover:bg-white hover:text-navy text-white py-6 rounded-full font-black uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(0,158,219,0.4)] flex items-center justify-center gap-3"
              >
                {t('whatsapp.button')}
              </button>
            </div>

            <div className="glow-card p-10 rounded-[2.5rem] text-start bg-white/[0.01]">
              <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-6">
                {t('whatYouGet.headline')}
              </h4>
              <div className="space-y-6">
                {whatYouGetItems.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue mt-1.5 shrink-0" />
                    <span className="text-sm text-white font-bold tracking-tight">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Critical Fix: Trust Indicators */}
        <div className="mt-20 text-gray-400 text-xs font-bold tracking-wide max-w-2xl mx-auto">
          {t('trustIndicators')}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
