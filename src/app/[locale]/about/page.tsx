'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const teamMembers = [
  { name: 'Hisham AlAqtash', roleKey: 'ceo', image: '/ourteam/Hisham AlAqtash _ Founder and CEO .jpeg' },
  { name: 'Batool', roleKey: 'marketingManager', image: '/ourteam/Batool _ Marketing Manager .jpeg' },
  { name: 'Jasmine Bani Mustafa', roleKey: 'adminAndBizDev', image: '/ourteam/Natasha Jankhout _ CEO Assistant.jpeg' },
  { name: 'Noor Aldeen Alaqtash', roleKey: 'kuwaitProjectManager', image: '/ourteam/Noor Aldeen AlQaisi _ Project Manager .PNG' },
  { name: 'Noor Hindi', roleKey: 'accountManager', image: '/ourteam/Noor Hindi _ Account Manager .jpeg' },
  { name: 'Fatima Jibril', roleKey: 'accountManager', image: '/ourteam/Fatima Jibril _ Account Manager .jpeg' },
  { name: 'Areen Asklan', roleKey: 'accountManager', image: '/ourteam/Fatima Jibril _ Account Manager .jpeg' },
  { name: 'Alaa AlAqtash', roleKey: 'mediaBuyer', image: '/ourteam/Alaa AlAqtash _ Media Buyer .jpeg' },
  { name: 'Khaled', roleKey: 'mediaBuyer', image: '/ourteam/Omar Remah _ Video Editor .jpeg' },
  { name: 'Bassem Tolomedjian', roleKey: 'aiContentAndEditor', image: '/ourteam/Bassem Tolomedjian _ AI Content Creator, Video editor .png' },
  { name: 'Omar Adel', roleKey: 'seniorDesignerAndEditor', image: '/ourteam/Omar Adel_ Senior Graphic Designer & Video Editor.jpeg' },
  { name: 'Ebrahim Fathi', roleKey: 'graphicDesigner', image: '/ourteam/Ebrahim Fathi _ Graphic Designer .webp' },
  { name: 'Shadi Adel', roleKey: 'videoEditor', image: '/ourteam/Shadi Adel_ Video Editor.jpeg' },
  { name: 'Motasem Odeh', roleKey: 'webDeveloper', image: '/ourteam/Motasem Odeh - Web Developer.jpg' }
];

const AboutPage = () => {
  const t = useTranslations('about');
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
            <span className="text-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block text-glow">
              {t('hero.badge')}
            </span>
            <h1 className="text-5xl md:text-[8rem] font-black text-white mb-8 tracking-tighter leading-none uppercase">
              {t('hero.headlinePart1')} <br /> <span className="text-blue">{t('hero.headlinePart2')}</span>
            </h1>
            <p className="text-sm md:text-2xl text-gray-400 leading-relaxed max-w-3xl font-bold uppercase tracking-widest">
              {t('hero.subheadline')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Video Section / Pillars */}
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
                  title={t('video.title')}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight uppercase">
                {t('pillarsSection.headline')} <br /> <span className="text-blue">{t('pillarsSection.headlineHighlight')}</span>
              </h2>
              <div className="space-y-12">
                 <div className="group">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-blue transition-colors">
                      {t('pillarsSection.pillar1.title')}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-medium">
                      {t('pillarsSection.pillar1.desc')}
                    </p>
                 </div>
                 <div className="group">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-blue transition-colors">
                      {t('pillarsSection.pillar2.title')}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-medium">
                      {t('pillarsSection.pillar2.desc')}
                    </p>
                 </div>
                 <div className="group">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-blue transition-colors">
                      {t('pillarsSection.pillar3.title')}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-medium">
                      {t('pillarsSection.pillar3.desc')}
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-20 tracking-tighter uppercase">
            {t('team.headline')} <br /> <span className="text-blue">{t('team.headlineHighlight')}</span>
          </h2>
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
                <p className="text-blue font-black uppercase text-[10px] tracking-[0.2em]">
                  {t(`team.roles.${member.roleKey}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 overflow-hidden">
         <div className="container px-6 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
              {t('culture.headline')} <span className="text-blue">{t('culture.headlineHighlight')}</span>
            </h2>
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
            {t('cta.headlinePart1')} <br /> <span className="text-blue text-glow">{t('cta.headlineHighlight')}</span>
          </h2>
          <Link
            href="/book"
            className="btn-primary"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
