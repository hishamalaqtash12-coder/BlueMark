'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const BookingPage = () => {
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
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener('message', handleMessage);
    };
  }, [router]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Blue Mark Team, I'm interested in booking a strategy call for my business growth.");
    window.open(`https://wa.me/962790453482?text=${message}`, '_blank');
  };

  return (
    <div className="bg-dark-navy min-h-screen pt-32 pb-20">
      <div className="container px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue font-black uppercase tracking-[0.3em] text-xs mb-4 block">Take Action</span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
            Strategy <span className="text-blue text-glow">Call</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
            Book your free growth strategy call below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto items-start">
          {/* Calendly Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white/[0.03] rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden min-h-[800px]"
          >
            <div className="absolute inset-0 bg-radial-glow opacity-10 pointer-events-none" />
            <div className="relative z-10 w-full h-full min-h-[700px] flex flex-col justify-center">
              <div className="calendly-inline-widget w-full rounded-2xl overflow-hidden" data-url="https://calendly.com/hisham-alaqtash12/free_growth_strategy_call" style={{ minWidth: '320px', height: '700px' }}></div>
            </div>
          </motion.div>

          {/* Quick Track: WhatsApp Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-blue/10 rounded-[2.5rem] p-10 border border-blue/20 shadow-2xl text-left relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue/10 rounded-full blur-3xl" />
               <MessageCircle className="w-12 h-12 text-blue mb-8" />
               <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Fast Track via WhatsApp</h3>
               <p className="text-gray-400 text-sm font-medium leading-relaxed mb-10">
                 Prefer instant messaging? Chat directly with our growth team to skip the queue and get an immediate response.
               </p>
               <button 
                 onClick={handleWhatsApp}
                 className="w-full bg-blue hover:bg-white hover:text-navy text-white py-6 rounded-full font-black uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(0,158,219,0.4)] flex items-center justify-center gap-3"
               >
                 Send Message Now
               </button>
            </div>

            <div className="glow-card p-10 rounded-[2.5rem] text-left bg-white/[0.01]">
               <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-6">What to Expect</h4>
               <div className="space-y-6">
                 {[
                   'Deep dive into your sales funnel',
                   'Analysis of your current ad spend',
                   'Identification of growth bottlenecks',
                   'A clear roadmap to scale revenue'
                 ].map((step, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue mt-1.5 shrink-0" />
                      <span className="text-sm text-white font-bold uppercase tracking-tight">{step}</span>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-gray-700 text-[10px] font-black uppercase tracking-[0.4em]">
           Secure & Private • Global Growth Execution • US Based Team
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
