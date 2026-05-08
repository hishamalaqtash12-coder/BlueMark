'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import { Play } from 'lucide-react';

const results = [
  {
    growth: '+400% Sales Growth',
    market: 'California',
    services: 'Lead Generation • Paid Ads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop'
  },
  {
    growth: '9X ROAS Campaign',
    market: 'UAE',
    services: 'Ads Management • Funnel Optimization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    growth: '10,000+ Qualified Leads',
    market: 'Multi-market',
    services: 'Lead Generation',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    growth: '6.5X ROAS for E-com',
    market: 'USA',
    services: 'Paid Ads • Content Strategy',
    image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2070&auto=format&fit=crop'
  }
];

const testimonials = [
  { name: 'David S.', company: 'E-com Brand', text: 'Working with Blue Mark was the turning point for our US expansion. The lead quality is unmatched.', video: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Sarah L.', company: 'SaaS Founder', text: 'The ROAS we saw in the first 90 days was triple our previous agency. Highly recommended.', video: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' },
  { name: 'Michael R.', company: 'Tech Corp', text: 'Blue Mark understands performance. They don’t just sell systems, they deliver real execution.', video: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop' },
];

const ResultsPage = () => {
  return (
    <div className="bg-dark-navy min-h-screen">
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-dark-navy relative overflow-hidden text-center border-b border-white/5">
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <div className="container px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Proven Performance</span>
            <h1 className="text-5xl md:text-[8rem] font-black text-white mb-8 tracking-tighter leading-none text-glow uppercase">
              Results Backed <br /> <span className="text-blue">by Execution.</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed uppercase tracking-widest font-bold opacity-80 px-4">
              A snapshot of growth campaigns, lead generation strategies, and measurable business results across multiple industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${result.image})` }}
                  />
                  <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/20 transition-colors" />
                  <div className="absolute top-6 right-6 z-20">
                    <span className="px-4 py-1.5 bg-blue/90 backdrop-blur-md text-white text-[9px] font-black uppercase rounded-full tracking-[0.2em]">
                      Performance Data
                    </span>
                  </div>
                </div>
                
                <div className="p-10 md:p-14">
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
                    {result.growth}
                  </h3>
                  <div className="flex flex-col gap-3 mb-12">
                    <span className="text-blue font-black uppercase text-xs tracking-[0.3em]">{result.market}</span>
                    <span className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em]">{result.services}</span>
                  </div>
                  <Link 
                    href="/book"
                    className="group/btn inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] bg-white/5 px-6 py-3 rounded-full hover:bg-blue transition-all"
                  >
                    Duplicate This Success <Play size={12} className="fill-current" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container px-6 mb-20 text-center">
           <span className="text-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Wall of Proof</span>
           <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase">Direct <span className="text-blue">Feedback</span></h2>
        </div>
        <div className="flex gap-8 px-6 overflow-x-auto pb-12 no-scrollbar scroll-smooth">
           {testimonials.map((t, i) => (
             <div key={i} className="flex-shrink-0 w-[320px] md:w-[450px] bg-dark-navy rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl">
                <div className="aspect-video relative group cursor-pointer">
                   <div 
                      className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                      style={{ backgroundImage: `url(${t.video})` }}
                   />
                   <div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-colors" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,158,219,0.5)] group-hover:scale-110 transition-transform">
                         <Play size={24} className="fill-white text-white ml-1" />
                      </div>
                   </div>
                </div>
                <div className="p-8 md:p-10">
                   <p className="text-gray-400 text-lg font-medium leading-relaxed mb-8 italic">"{t.text}"</p>
                   <div>
                      <h4 className="text-white font-black uppercase tracking-tighter text-xl">{t.name}</h4>
                      <p className="text-blue font-black uppercase text-[10px] tracking-widest mt-1">{t.company}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Dashboard Gallery */}
      <section className="py-24 md:py-32 overflow-hidden">
         <div className="container px-6 mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase">Live <span className="text-blue">Execution</span> Dashboards</h2>
         </div>
         <div className="flex gap-8 animate-scroll whitespace-nowrap">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-[#0b0b0b] rounded-[2.5rem] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden relative group">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:opacity-40 transition-opacity" />
                 <span className="relative z-10 text-white/5 font-black text-5xl md:text-8xl italic tracking-tighter">DATA_OVERVIEW_0{i}</span>
              </div>
            ))}
            {/* Repeat for Infinite Loop */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={`dup-${i}`} className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-[#0b0b0b] rounded-[2.5rem] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden relative group">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:opacity-40 transition-opacity" />
                 <span className="relative z-10 text-white/5 font-black text-5xl md:text-8xl italic tracking-tighter">DATA_OVERVIEW_0{i}</span>
              </div>
            ))}
         </div>
      </section>

      {/* Final CTA */}
      <FinalCTA 
        headline={<>Want Similar <br /> <span className="text-blue">Results?</span></>} 
        subheadline="Real Growth"
      />
    </div>
  );
};

export default ResultsPage;
