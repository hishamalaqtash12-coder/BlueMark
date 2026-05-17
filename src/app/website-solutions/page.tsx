'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play, Zap, Target, Monitor, Search, Shield, Smartphone, BarChart, Rocket, Link as LinkIcon, Check } from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';
import { useState } from 'react';

export default function WebsiteSolutions() {
  const [popupVideo, setPopupVideo] = useState<string | null>(null);

  return (
    <div className="bg-dark-navy min-h-screen">
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-dark-navy relative overflow-hidden text-center border-b border-white/5">
        <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
        <div className="container px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block text-glow">Website Solutions</span>
            <h1 className="text-5xl md:text-[6rem] lg:text-[7rem] font-black text-white mb-8 tracking-tighter leading-none uppercase">
              Stop Building Websites. <br />
              <span className="text-blue">Start Building Smart Assets.</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed uppercase tracking-widest font-bold opacity-80 px-4">
              High-performance, intelligent websites designed to work for you 24/7.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="#portfolio" className="bg-blue text-white py-4 px-10 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_30px_rgba(0,158,219,0.3)] w-full sm:w-auto">
                See Our Smart Work
              </Link>
              <Link href="#lead-form" className="bg-white/5 border border-white/10 text-white py-4 px-10 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto">
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Smart Difference (Comparison) */}
      <section className="py-24 border-b border-white/5 relative overflow-hidden">
        <div className="container px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">The Smart Difference</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
              Traditional Website <br className="md:hidden" /> <span className="text-blue">vs</span> Smart Site
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-medium">A simple side-by-side comparison that explains the value in seconds.</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto mt-16 bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl text-left">
            <div className="grid grid-cols-3 bg-white/[0.05] p-4 md:p-6 border-b border-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">
               <div>Feature</div>
               <div className="text-red-400">Traditional</div>
               <div className="text-blue">Blue Mark</div>
            </div>
            {[
              { icon: Zap, label: 'Speed', old: 'Slow loading', new: 'Blazing Fast (<2s)' },
              { icon: Target, label: 'Leads', old: 'Manual follow-up', new: 'Auto CRM Sync' },
              { icon: Monitor, label: 'Design', old: 'Basic templates', new: 'Conversion-First UI' },
              { icon: Search, label: 'SEO', old: 'Hidden in Google', new: 'Google-Ready' },
              { icon: Shield, label: 'Security', old: 'Vulnerable', new: 'Bank-Grade Security' },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-4 md:p-6 border-b border-white/5 items-center last:border-0 hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-3 text-white font-bold uppercase text-[10px] md:text-xs tracking-widest">
                  <row.icon className="w-5 h-5 text-gray-500 hidden md:block" /> {row.label}
                </div>
                <div className="text-gray-500 font-medium text-xs md:text-sm">{row.old}</div>
                <div className="text-white font-black text-xs md:text-sm flex items-center gap-2">
                   <Check className="w-4 h-4 text-blue shrink-0" /> <span className="truncate">{row.new}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 border-b border-white/5">
        <div className="container px-6 text-center">
            <span className="text-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Smart Features</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-20 tracking-tighter uppercase leading-tight">
              Built for <span className="text-blue">Performance,</span> <br /> Leads, and Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Smartphone, title: 'Auto-Sync', desc: 'Leads go straight to your phone or CRM automatically.' },
                { icon: Monitor, title: 'Mobile-First', desc: 'Perfect experience on every screen and device.' },
                { icon: BarChart, title: 'Data-Driven', desc: 'Built around real user behavior, not just visuals.' },
                { icon: Rocket, title: 'Scalable', desc: 'Your system grows as your business grows.' },
                { icon: Zap, title: 'Fast Loading', desc: 'Optimized for speed to reduce drop-off and keep users engaged.' },
                { icon: Target, title: 'Conversion-First', desc: 'Every layout block is designed to guide visitors toward action.' },
                { icon: LinkIcon, title: 'CRM Ready', desc: 'Connect your website with your workflow for smarter handling.' },
                { icon: Search, title: 'SEO Optimized', desc: 'Built with structure and performance search engines love.' }
              ].map((feat, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] text-left hover:bg-white/[0.04] transition-colors group">
                   <div className="w-14 h-14 bg-blue/10 rounded-2xl flex items-center justify-center mb-8 border border-blue/20 group-hover:scale-110 transition-transform">
                     <feat.icon className="w-6 h-6 text-blue" />
                   </div>
                   <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{feat.title}</h3>
                   <p className="text-gray-400 text-sm font-medium leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Portfolio (Videos) */}
      <section className="py-24 border-b border-white/5" id="portfolio">
        <div className="container px-6 text-center">
            <span className="text-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Smart Work</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-20 tracking-tighter uppercase leading-tight">
              Websites Built for Growth, <br /> <span className="text-blue">Not Just Looks</span>
            </h2>
            
            <div className="space-y-32">
               {[
                 {
                   category: 'Corporate & Consulting',
                   items: [
                     { title: 'Medan Consulting', tags: ['Lead Generation', 'Consulting'], video: 'https://www.youtube.com/embed/0A5PPQRySB0?autoplay=1', thumb: 'https://img.youtube.com/vi/0A5PPQRySB0/hqdefault.jpg' },
                     { title: 'Alamari Group', tags: ['Multi-Service', 'Corporate'], video: 'https://www.youtube.com/embed/0imY46mJpVI?autoplay=1', thumb: 'https://img.youtube.com/vi/0imY46mJpVI/hqdefault.jpg' },
                     { title: 'Archipolis', tags: ['Architecture', 'Corporate'], video: 'https://www.youtube.com/embed/fwZytmf30Tw?autoplay=1', thumb: 'https://img.youtube.com/vi/fwZytmf30Tw/hqdefault.jpg' }
                   ]
                 },
                 {
                   category: 'Medical & Wellness',
                   items: [
                     { title: 'Vita Medspa', tags: ['Medical', 'Conversion'], video: 'https://www.youtube.com/embed/bEKjMZZTYTI?autoplay=1', thumb: 'https://img.youtube.com/vi/bEKjMZZTYTI/hqdefault.jpg' },
                     { title: 'Kayan', tags: ['Wellness', 'Trust'], video: 'https://www.youtube.com/embed/gUV0fWjd_Tw?autoplay=1', thumb: 'https://img.youtube.com/vi/gUV0fWjd_Tw/hqdefault.jpg' }
                   ]
                 },
                 {
                   category: 'E-commerce & Retail',
                   items: [
                     { title: 'Mahally', tags: ['E-commerce', 'Conversion'], video: 'https://www.youtube.com/embed/-NbGfmma4AU?autoplay=1', thumb: 'https://img.youtube.com/vi/-NbGfmma4AU/hqdefault.jpg' }
                   ]
                 }
               ].map((group, i) => (
                 <div key={i}>
                   <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-12 text-left px-4 border-l-4 border-blue">{group.category}</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                     {group.items.map((item, j) => (
                       <div key={j} className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden group/card shadow-2xl flex flex-col h-full">
                         <div className="aspect-[16/9] relative overflow-hidden bg-black cursor-pointer" onClick={() => setPopupVideo(item.video)}>
                           <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110 grayscale group-hover/card:grayscale-0" style={{ backgroundImage: `url(${item.thumb})` }} />
                           <div className="absolute inset-0 bg-navy/40 group-hover/card:bg-transparent transition-colors" />
                           <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,158,219,0.5)] group-hover/card:scale-110 transition-transform">
                               <Play size={24} className="fill-white text-white ml-1" />
                             </div>
                           </div>
                         </div>
                         <div className="p-8 flex flex-col flex-grow">
                           <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{item.title}</h4>
                           <div className="flex gap-2 mb-8 flex-wrap">
                             {item.tags.map(t => (
                               <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-blue uppercase tracking-widest">{t}</span>
                             ))}
                           </div>
                           <button onClick={() => setPopupVideo(item.video)} className="mt-auto inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] bg-white/5 px-6 py-3 rounded-full hover:bg-blue transition-all w-fit">
                             Watch Case Study <Play size={12} className="fill-current" />
                           </button>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* Process & Form */}
      <section className="py-24 border-b border-white/5" id="lead-form">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div>
               <span className="text-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Simple Process</span>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 tracking-tighter uppercase leading-tight">
                 Get started in <br /> <span className="text-blue">3 simple steps</span>
               </h2>
               <div className="space-y-8">
                 {[
                   { no: '1', title: 'Fill the Form', desc: 'Tell us your business and project needs.' },
                   { no: '2', title: 'We Review', desc: 'We review your case and recommend the best smart solution.' },
                   { no: '3', title: 'We Contact You', desc: 'We reach out quickly and move you toward launch.' }
                 ].map((step, i) => (
                   <div key={i} className="flex gap-6 items-start">
                     <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-full flex items-center justify-center font-black text-blue text-xl">{step.no}</div>
                     <div>
                       <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{step.title}</h3>
                       <p className="text-gray-400 font-medium">{step.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="bg-white/[0.03] border border-white/5 p-8 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center h-full">
               <div className="absolute inset-0 bg-radial-glow opacity-10 pointer-events-none" />
               <div className="relative z-10">
                 <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6">Ready to scale?</h3>
                 <p className="text-gray-400 font-medium mb-10 max-w-sm mx-auto">Skip the back-and-forth. Book a direct strategy call with our team to map out your new smart asset.</p>
                 <Link href="/book" className="inline-flex items-center justify-center w-full bg-blue text-white py-6 px-10 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_20px_rgba(0,158,219,0.3)]">
                   Book Free Consultation
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA 
        headline={<>This is not just a website. <br /> <span className="text-blue text-glow">This is a ready-to-grow asset.</span></>} 
        subheadline="Website Solutions"
      />

      {/* Video Popup Lightbox */}
      {popupVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/90 backdrop-blur-md">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setPopupVideo(null)} />
          <div className="relative z-10 w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <button onClick={() => setPopupVideo(null)} className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors">
               ✕
            </button>
            <iframe src={popupVideo} className="w-full h-full border-none" allow="autoplay; encrypted-media" allowFullScreen />
          </div>
        </div>
      )}
    </div>
  );
}
