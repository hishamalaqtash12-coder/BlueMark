'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Video, Zap, Clock, DollarSign, Target, Play } from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const videoList = [
  "SFBggkxPvaI", "WRy76IAL6kk", "WZ35n5HQShI", "1BO2E35ftIQ",
  "oQEevurD2Lo", "LsITWJ4zo7g", "6d-N4G-tEl4", "ZJcm6B-IGj8",
  "KwwAzBM2hLk", "GzGlUFFjL1c", "RAqK0tG1ITM", "M4Uctxic0cc",
  "O0e-it2HZd0", "AYs4ekDzZOc", "6l0XqxznIeM", "4K1r2ithP_Y",
  "p8c4u0j1ZCs", "7PHCmwC95Xc", "rXtNf4TgiYA", "wSMptYGVie8",
  "gKCH9aPh93g", "c1BBHaaARr8", "vejh9NhBmDo"
];

export default function AIVideo() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

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
      <section id="videos" className="py-20 bg-navy relative border-y border-white/5">
        <div className="container px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Our Work <span className="text-blue">Speaks for Itself</span>
          </h2>
        </div>

        {/* 3D Coverflow Slider */}
        <div className="w-full max-w-[1400px] mx-auto px-0 md:px-6 ai-video-slider">
          <style jsx global>{`
            .ai-video-slider .swiper-slide {
              width: 280px;
              opacity: 0.5;
              transition: opacity 0.3s ease;
            }
            @media (min-width: 768px) {
              .ai-video-slider .swiper-slide {
                width: 380px;
              }
            }
            .ai-video-slider .swiper-slide-active {
              opacity: 1;
            }
            .ai-video-slider .swiper-slide-active > div {
              border-color: rgba(0, 158, 219, 0.6);
              box-shadow: 0 0 40px rgba(0, 158, 219, 0.2);
            }
            .ai-video-slider .swiper-button-next,
            .ai-video-slider .swiper-button-prev {
              color: white !important;
              background: rgba(0, 0, 0, 0.6) !important;
              border: 1px solid rgba(255,255,255,0.1) !important;
              width: 50px !important;
              height: 50px !important;
              border-radius: 50% !important;
              backdrop-filter: blur(10px) !important;
              transition: all 0.3s ease !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            .ai-video-slider .swiper-button-next:hover,
            .ai-video-slider .swiper-button-prev:hover {
              background: #009edb !important;
              border-color: #009edb !important;
            }
            .ai-video-slider .swiper-button-next:after,
            .ai-video-slider .swiper-button-prev:after,
            .ai-video-slider .swiper-button-next > *,
            .ai-video-slider .swiper-button-prev > * {
              display: none !important; /* Hide default Swiper font and SVGs */
            }
            .ai-video-slider .swiper-button-next::before {
              content: '';
              display: block;
              width: 14px;
              height: 14px;
              border-top: 3px solid white;
              border-right: 3px solid white;
              transform: rotate(45deg);
              margin-right: 4px;
            }
            .ai-video-slider .swiper-button-prev::before {
              content: '';
              display: block;
              width: 14px;
              height: 14px;
              border-top: 3px solid white;
              border-left: 3px solid white;
              transform: rotate(-45deg);
              margin-left: 4px;
            }
            .ai-video-slider .swiper-pagination-bullet {
              background: white;
              opacity: 0.3;
            }
            .ai-video-slider .swiper-pagination-bullet-active {
              background: #009edb;
              opacity: 1;
              box-shadow: 0 0 10px rgba(0,158,219,0.8);
            }
          `}</style>
          
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            loop={true}
            navigation={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="pt-10 pb-20"
            onSlideChange={(swiper) => {
              if (!swiper.touches.diff) {
                setPlayingVideo(null);
              }
            }}
          >
            {videoList.map((id, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-dark-navy rounded-3xl overflow-hidden aspect-[9/16] relative group border-2 border-white/5 transition-all duration-500 shadow-2xl">
                  {playingVideo === id ? (
                    <div className="absolute inset-0 z-50 w-full h-full bg-black">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0&rel=0&controls=1`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <>
                      <img 
                        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} 
                        onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }}
                        alt={`AI Video ${idx + 1}`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                        <button 
                          onClick={() => setPlayingVideo(id)}
                          className="w-16 h-16 md:w-20 md:h-20 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-blue hover:border-blue hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,158,219,0.4)]"
                        >
                          <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 opacity-80 group-hover:opacity-100" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Features Pills */}
        <div className="container px-6 mt-16">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Video className="w-4 h-4 text-red-500" />, text: "No Filming Required" },
              { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "48-Hour Delivery" },
              { icon: <DollarSign className="w-4 h-4 text-green-500" />, text: "80% Cost Saving" },
              { icon: <Target className="w-4 h-4 text-blue" />, text: "High Conversion" },
            ].map((pill, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 text-sm md:text-base font-bold text-white uppercase tracking-wider shadow-lg">
                {pill.icon}
                {pill.text}
              </div>
            ))}
          </div>
        </div>
      </section>

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
