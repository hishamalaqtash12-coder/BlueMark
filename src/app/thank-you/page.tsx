'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="bg-dark-navy min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-24">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
      
      <div className="container px-6 relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/[0.03] border border-blue/20 p-10 md:p-16 rounded-[3rem] shadow-[0_0_50px_rgba(0,158,219,0.15)] backdrop-blur-sm relative overflow-hidden"
        >
          {/* Inner subtle glow */}
          <div className="absolute inset-0 bg-blue/5 pointer-events-none" />

          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className="w-24 h-24 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,158,219,0.3)] relative z-10"
          >
            <CheckCircle className="w-12 h-12 text-blue" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter relative z-10">
            Booking <span className="text-blue">Confirmed</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-medium relative z-10">
            Thank you for scheduling a strategy call with Blue Mark. We've sent a calendar invitation with the meeting details to your email. We look forward to speaking with you!
          </p>
          
          <div className="relative z-10">
            <Link 
              href="/"
              className="inline-flex items-center justify-center bg-blue text-white py-4 px-10 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_20px_rgba(0,158,219,0.4)] w-full sm:w-auto"
            >
              Back to Homepage
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
