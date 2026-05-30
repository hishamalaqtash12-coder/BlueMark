'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function SchedulePage() {
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (e: MessageEvent) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        router.push('/thank-you');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      // Clean up script if component unmounts
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
          <span className="text-blue font-black uppercase tracking-[0.3em] text-xs mb-4 block">Step 2 — Strategy Call</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
            Select a <span className="text-blue text-glow">Time</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-12">
            Choose a time slot that works best for you. Timezones are auto-detected. Zoom/Google Meet links are provided automatically.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-5xl mx-auto bg-white/[0.02] rounded-[2.5rem] p-4 md:p-8 border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-radial-glow opacity-10 pointer-events-none" />
          
          <div 
            className="calendly-inline-widget min-h-[700px] w-full relative z-10 rounded-2xl overflow-hidden" 
            data-url="https://calendly.com/your-calendly-link?hide_gdpr_banner=1&background_color=0f172a&text_color=ffffff&primary_color=009EDB"
          ></div>
        </motion.div>
      </div>
    </div>
  );
}
