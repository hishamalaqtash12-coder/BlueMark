'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const teamMembers = [
  { name: 'Marcus Blue', role: 'Founder & CEO', category: 'Leadership', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Sarah J.', role: 'Head of Strategy', category: 'Strategy', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop' },
  { name: 'David K.', role: 'Performance Lead', category: 'Performance', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Elena V.', role: 'Creative Director', category: 'Creative', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop' },
  { name: 'Michael T.', role: 'Technical Solutions', category: 'Development', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Sophia L.', role: 'Lead Optimizer', category: 'Strategy', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' },
];

const AboutPage = () => {
  return (
    <div className="bg-dark-navy min-h-screen">
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-dark-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="container px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <span className="text-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block text-glow">The Blue Mark Philosophy</span>
            <h1 className="text-5xl md:text-[8rem] font-black text-white mb-8 tracking-tighter leading-none uppercase">
              Built Around Performance, <br /> <span className="text-blue">Not Hype.</span>
            </h1>
            <p className="text-sm md:text-2xl text-gray-400 leading-relaxed max-w-3xl font-bold uppercase tracking-widest">
              Growth through performance-driven marketing, lead generation, creative execution, and scalable growth strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Video Section */}
      <section className="py-24">
        <div className="container px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/5] bg-[#0b0b0b] rounded-[2.5rem] overflow-hidden relative shadow-2xl border-4 border-white/5">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale" />
                <div className="absolute inset-0 bg-navy/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Link href="/book" className="w-24 h-24 bg-blue rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,158,219,0.6)]">
                      <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                   </Link>
                </div>
                <div className="absolute bottom-10 left-10 text-white">
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-blue">Founder Message</div>
                   <div className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-tight">Growth is an <br /> Execution Problem.</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight uppercase">How We Think <br /> <span className="text-blue">About Growth.</span></h2>
              <div className="space-y-12">
                 <div className="group">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-blue transition-colors">Strategy Over Tactics</h3>
                    <p className="text-gray-400 leading-relaxed font-medium">Most businesses struggle because they chase tactics without a cohesive strategy. We build the foundation first.</p>
                 </div>
                 <div className="group">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-blue transition-colors">The Execution Gap</h3>
                    <p className="text-gray-400 leading-relaxed font-medium">Ideas are cheap. Execution is everything. Our team is built around operators who know how to ship and scale.</p>
                 </div>
                 <div className="group">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-blue transition-colors">Long-Term Partnership</h3>
                    <p className="text-gray-400 leading-relaxed font-medium">We don't want a one-time project. We want to be your growth partner for the next decade.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-20 tracking-tighter uppercase">The Team Behind <br /> <span className="text-blue">The Numbers</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative grayscale group-hover:grayscale-0 transition-all duration-700 border-4 border-white/5 shadow-2xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="text-2xl font-black text-white mb-1 tracking-tighter uppercase">{member.name}</h4>
                <p className="text-blue font-black uppercase text-[10px] tracking-[0.2em]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 overflow-hidden">
         <div className="container px-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">Behind <span className="text-blue">The Scenes</span></h2>
         </div>
         <div className="flex gap-6 px-6 overflow-x-auto pb-12 no-scrollbar">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-shrink-0 w-[300px] md:w-[450px] h-[250px] md:h-[350px] rounded-[2rem] overflow-hidden shadow-2xl relative border-2 border-white/5">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
              </div>
            ))}
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-dark-navy text-center">
        <div className="container px-6">
          <h2 className="text-4xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-tight uppercase">
            Let’s Build <br /> <span className="text-blue text-glow">Something That Grows.</span>
          </h2>
          <Link
            href="/book"
            className="btn-primary"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
