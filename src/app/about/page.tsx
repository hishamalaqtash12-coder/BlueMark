'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const teamMembers = [
  { name: 'Hisham AlAqtash', role: 'Founder and CEO', image: '/ourteam/Hisham AlAqtash _ Founder and CEO .jpeg' },
  { name: 'Batool', role: 'Marketing Manager', image: '/ourteam/Batool _ Marketing Manager .jpeg' },
  { name: 'Natasha Jankhout', role: 'CEO Assistant', image: '/ourteam/Natasha Jankhout _ CEO Assistant.jpeg' },
  { name: 'Noor Aldeen AlQaisi', role: 'Project Manager', image: '/ourteam/Noor Aldeen AlQaisi _ Project Manager .PNG' },
  { name: 'Noor Hindi', role: 'Account Manager', image: '/ourteam/Noor Hindi _ Account Manager .jpeg' },
  { name: 'Fatima Jibril', role: 'Account Manager', image: '/ourteam/Fatima Jibril _ Account Manager .jpeg' },
  { name: 'Alaa AlAqtash', role: 'Media Buyer', image: '/ourteam/Alaa AlAqtash _ Media Buyer .jpeg' },
  { name: 'Bassem Tolomedjian', role: 'AI Content Creator, Video editor', image: '/ourteam/Bassem Tolomedjian _ AI Content Creator, Video editor .png' },
  { name: 'Omar Adel', role: 'Senior Graphic Designer & Video Editor', image: '/ourteam/Omar Adel_ Senior Graphic Designer & Video Editor.jpeg' },
  { name: 'Ebrahim Fathi', role: 'Graphic Designer', image: '/ourteam/Ebrahim Fathi _ Graphic Designer .webp' },
  { name: 'Omar Remah', role: 'Video Editor', image: '/ourteam/Omar Remah _ Video Editor .jpeg' },
  { name: 'Shadi Adel', role: 'Video Editor', image: '/ourteam/Shadi Adel_ Video Editor.jpeg' },
  { name: 'Motasem Odeh', role: 'Web Developer', image: '/ourteam/Motasem Odeh - Web Developer.jpg' }
];

const AboutPage = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isVideoInView = useInView(videoRef, { margin: "-100px" });

  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      if (isVideoInView) {
        iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo' }), '*');
        iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'unMute' }), '*');
      } else {
        iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo' }), '*');
      }
    }
  }, [isVideoInView]);

  const videoSrc = "https://www.youtube.com/embed/IYIh4GJLfAo?rel=0&modestbranding=1&enablejsapi=1";

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
              <div ref={videoRef} className="w-full aspect-video md:aspect-[4/5] bg-[#0b0b0b] rounded-[2.5rem] overflow-hidden relative shadow-2xl border-4 border-white/5">
                <iframe 
                  ref={iframeRef}
                  src={videoSrc}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  title="Founder Message"
                  allowFullScreen
                ></iframe>
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
                    className={`absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-110 ${['Hisham AlAqtash', 'Omar Adel'].includes(member.name) ? 'bg-top' : 'bg-center'}`}
                    style={{ backgroundImage: `url("${member.image}")` }}
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
         <div className="container px-6 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">Behind <span className="text-blue">The Scenes</span></h2>
         </div>
         <div className="container px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['/team-results-1.jpeg', '/team-results-2.jpeg', '/team-results-3.jpeg', '/team-results-4.jpeg'].map((imgSrc, i) => (
                <div key={i} className="w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-[2rem] overflow-hidden shadow-2xl relative border-2 border-white/5 group">
                   <div 
                     className="absolute inset-0 bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                     style={{ backgroundImage: `url(${imgSrc})` }}
                   />
                </div>
              ))}
            </div>
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
