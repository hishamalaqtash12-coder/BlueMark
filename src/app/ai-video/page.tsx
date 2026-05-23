'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import CreativePortfolio from '@/components/BlogPreview';

export default function AIVideo() {

  return (
    <div className="bg-dark-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
              Turn Your Idea Into a <br />
              <span className="text-blue">Full Video Ad</span> Without Filming
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
              AI-powered video production (Scenes, Characters, Voice-over & Editing). Ready for ads. Built for results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#order" className="w-full sm:w-auto bg-blue text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_20px_rgba(0,158,219,0.3)]">
                Start Your Order
              </a>
              <a href="#videos" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <div id="videos">
        <CreativePortfolio />
      </div>

      {/* Steps Section */}
      <section className="py-24 bg-dark-navy relative">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              Start Your AI Video in <span className="text-blue">60 Seconds</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { num: '1', title: 'Fill the Form', desc: 'Tell us about your idea and what you need.' },
              { num: '2', title: 'We Review', desc: 'Our team analyzes your request and prepares the concept.' },
              { num: '3', title: 'We Contact You', desc: 'We reach out on WhatsApp and start your video production.' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-blue/30 transition-colors">
                <div className="absolute -top-10 -right-10 text-[120px] font-black text-white/[0.03] group-hover:text-blue/[0.05] transition-colors leading-none">
                  {step.num}
                </div>
                <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center text-blue font-black text-xl mb-6 shadow-[0_0_15px_rgba(0,158,219,0.2)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison & Packages Section */}
      <section className="py-24 bg-navy relative border-t border-white/5">
        <div className="container px-6">
          
          {/* Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl opacity-80 grayscale">
              <h3 className="text-2xl font-black text-gray-400 uppercase tracking-tight mb-8">Traditional</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-500 font-bold uppercase text-sm tracking-widest">Production</span>
                  <span className="text-white font-bold">3 Weeks</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-500 font-bold uppercase text-sm tracking-widest">Filming Crew</span>
                  <span className="text-white font-bold">Required</span>
                </div>
                <div className="flex justify-between items-center pb-4">
                  <span className="text-gray-500 font-bold uppercase text-sm tracking-widest">Total Cost</span>
                  <span className="text-white font-bold">$3,000+</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-blue/30 p-8 rounded-3xl relative overflow-hidden shadow-[0_0_30px_rgba(0,158,219,0.1)]">
              <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
              <h3 className="text-2xl font-black text-blue uppercase tracking-tight mb-8 relative z-10">Blue Mark AI</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400 font-bold uppercase text-sm tracking-widest">Production</span>
                  <span className="text-white font-black">3-5 Days</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400 font-bold uppercase text-sm tracking-widest">Filming Crew</span>
                  <span className="text-white font-black text-green-400">Not Needed</span>
                </div>
                <div className="flex justify-between items-center pb-4">
                  <span className="text-gray-400 font-bold uppercase text-sm tracking-widest">Total Cost</span>
                  <span className="text-white font-black text-green-400">Fraction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl text-center hover:bg-white/[0.04] transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">1 Video</h3>
              <p className="text-gray-400 text-sm mb-8 font-medium">Perfect for testing new offers</p>
              <div className="mt-auto">
                <a href="#order" className="block w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">Select Plan</a>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-blue p-8 rounded-3xl text-center relative overflow-hidden shadow-[0_0_30px_rgba(0,158,219,0.2)] scale-105 z-10 flex flex-col h-full">
              <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
              <div className="text-blue text-[10px] font-black uppercase tracking-[0.2em] mb-4 relative z-10">BEST SELLER</div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2 relative z-10">3 Videos</h3>
              <p className="text-gray-400 text-sm mb-8 font-medium relative z-10">Our most popular creative bundle</p>
              <div className="mt-auto relative z-10">
                <a href="#order" className="block w-full bg-blue text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_20px_rgba(0,158,219,0.3)]">Claim Offer</a>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl text-center hover:bg-white/[0.04] transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">5 Videos</h3>
              <p className="text-gray-400 text-sm mb-8 font-medium">Scale your ads across all platforms</p>
              <div className="mt-auto">
                <a href="#order" className="block w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">Select Plan</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-24 bg-dark-navy relative">
        <div className="container px-6 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              This is not just a video.<br/>
              <span className="text-blue">This is a ready-to-run ad.</span>
            </h2>
          </div>

          <div className="bg-white/[0.03] border border-white/5 p-8 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center h-full max-w-2xl mx-auto">
             <div className="absolute inset-0 bg-radial-glow opacity-10 pointer-events-none" />
             <div className="relative z-10">
               <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6">Ready to scale?</h3>
               <p className="text-gray-400 font-medium mb-10 max-w-sm mx-auto">Skip the back-and-forth. Book a direct strategy call with our team to map out your new AI video ads.</p>
               <Link href="/book" className="inline-flex items-center justify-center w-full bg-blue text-white py-6 px-10 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_20px_rgba(0,158,219,0.3)]">
                 Book Free Consultation
               </Link>
             </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
