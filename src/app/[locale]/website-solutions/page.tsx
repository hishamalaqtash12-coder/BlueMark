'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Play, Zap, Target, Monitor, Search, Shield, Smartphone, BarChart, Rocket, Link as LinkIcon, Check } from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function WebsiteSolutions() {
  const [popupVideo, setPopupVideo] = useState<string | null>(null);
  const t = useTranslations('websiteSolutions');
  const tCommon = useTranslations('common');

  const comparisonRows = [
    { icon: Zap, label: t('difference.rows.speed.label'), old: t('difference.rows.speed.old'), new: t('difference.rows.speed.new') },
    { icon: Target, label: t('difference.rows.leads.label'), old: t('difference.rows.leads.old'), new: t('difference.rows.leads.new') },
    { icon: Monitor, label: t('difference.rows.design.label'), old: t('difference.rows.design.old'), new: t('difference.rows.design.new') },
    { icon: Search, label: t('difference.rows.seo.label'), old: t('difference.rows.seo.old'), new: t('difference.rows.seo.new') },
    { icon: Shield, label: t('difference.rows.security.label'), old: t('difference.rows.security.old'), new: t('difference.rows.security.new') },
  ];

  const featuresList = [
    { icon: Smartphone, title: t('features.items.autoSync.title'), desc: t('features.items.autoSync.desc') },
    { icon: Monitor, title: t('features.items.mobileFirst.title'), desc: t('features.items.mobileFirst.desc') },
    { icon: BarChart, title: t('features.items.dataDriven.title'), desc: t('features.items.dataDriven.desc') },
    { icon: Rocket, title: t('features.items.scalable.title'), desc: t('features.items.scalable.desc') },
    { icon: Zap, title: t('features.items.fastLoading.title'), desc: t('features.items.fastLoading.desc') },
    { icon: Target, title: t('features.items.conversionFirst.title'), desc: t('features.items.conversionFirst.desc') },
    { icon: LinkIcon, title: t('features.items.crmReady.title'), desc: t('features.items.crmReady.desc') },
    { icon: Search, title: t('features.items.seoOptimized.title'), desc: t('features.items.seoOptimized.desc') }
  ];

  const processSteps = [
    { no: t('process.steps.step1.no'), title: t('process.steps.step1.title'), desc: t('process.steps.step1.desc') },
    { no: t('process.steps.step2.no'), title: t('process.steps.step2.title'), desc: t('process.steps.step2.desc') },
    { no: t('process.steps.step3.no'), title: t('process.steps.step3.no'), desc: t('process.steps.step3.desc') }
  ];

  const portfolioGroups = [
    {
      category: t('portfolio.categories.corporate'),
      items: [
        { title: 'Medan Consulting', tags: ['Lead Generation', 'Consulting'], video: 'https://www.youtube.com/embed/0A5PPQRySB0?autoplay=1', thumb: 'https://img.youtube.com/vi/0A5PPQRySB0/hqdefault.jpg' },
        { title: 'Alamari Group', tags: ['Multi-Service', 'Corporate'], video: 'https://www.youtube.com/embed/0imY46mJpVI?autoplay=1', thumb: 'https://img.youtube.com/vi/0imY46mJpVI/hqdefault.jpg' },
        { title: 'Archipolis', tags: ['Architecture', 'Corporate'], video: 'https://www.youtube.com/embed/fwZytmf30Tw?autoplay=1', thumb: 'https://img.youtube.com/vi/fwZytmf30Tw/hqdefault.jpg' }
      ]
    },
    {
      category: t('portfolio.categories.medical'),
      items: [
        { title: 'Vita Medspa', tags: ['Medical', 'Conversion'], video: 'https://www.youtube.com/embed/bEKjMZZTYTI?autoplay=1', thumb: 'https://img.youtube.com/vi/bEKjMZZTYTI/hqdefault.jpg' },
        { title: 'Kayan', tags: ['Wellness', 'Trust'], video: 'https://www.youtube.com/embed/gUV0fWjd_Tw?autoplay=1', thumb: 'https://img.youtube.com/vi/gUV0fWjd_Tw/hqdefault.jpg' }
      ]
    },
    {
      category: t('portfolio.categories.ecommerce'),
      items: [
        { title: 'Mahally', tags: ['E-commerce', 'Conversion'], video: 'https://www.youtube.com/embed/-NbGfmma4AU?autoplay=1', thumb: 'https://img.youtube.com/vi/-NbGfmma4AU/hqdefault.jpg' }
      ]
    }
  ];

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
            <span className="text-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block text-glow">
              {t('hero.badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-black text-white mb-8 tracking-tighter leading-tight sm:leading-none uppercase">
              {t('hero.headlinePart1')} <br />
              <span className="text-blue">{t('hero.headlineHighlight')}</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed uppercase tracking-widest font-bold opacity-80 px-4">
              {t('hero.subheadline')}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="#portfolio" className="bg-blue text-white py-4 px-10 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_30px_rgba(0,158,219,0.3)] w-full sm:w-auto">
                {t('hero.seeWork')}
              </Link>
              <Link href="#lead-form" className="bg-white/5 border border-white/10 text-white py-4 px-10 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto">
                {t('hero.bookConsultation')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Smart Difference (Comparison) */}
      <section className="py-24 border-b border-white/5 relative overflow-hidden">
        <div className="container px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              {t('difference.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
              {t('difference.headlinePart1')} <br className="md:hidden" /> <span className="text-blue">{t('difference.headlineVs')}</span> {t('difference.headlinePart2')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-medium">
              {t('difference.subheadline')}
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto mt-16 bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl text-start">
            <div className="grid grid-cols-3 bg-white/[0.05] p-4 md:p-6 border-b border-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">
               <div>{t('difference.colFeature')}</div>
               <div className="text-red-400">{t('difference.colTraditional')}</div>
               <div className="text-blue">{t('difference.colBlueMark')}</div>
            </div>
            {comparisonRows.map((row, i) => (
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
            <span className="text-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              {t('features.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-20 tracking-tighter uppercase leading-tight">
              {t('features.headlinePart1')} <span className="text-blue">{t('features.headlineHighlight')}</span> <br /> {t('features.headlinePart2')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresList.map((feat, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] text-start hover:bg-white/[0.04] transition-colors group">
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
            <span className="text-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              {t('portfolio.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-20 tracking-tighter uppercase leading-tight">
              {t('portfolio.headlinePart1')} <br /> <span className="text-blue">{t('portfolio.headlineHighlight')}</span>
            </h2>
            
            <div className="space-y-32">
               {portfolioGroups.map((group, i) => (
                 <div key={i}>
                   <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-12 text-start px-4 border-s-4 border-blue">{group.category}</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
                     {group.items.map((item, j) => (
                       <div key={j} className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden group/card shadow-2xl flex flex-col h-full">
                         <div className="aspect-[16/9] relative overflow-hidden bg-black cursor-pointer" onClick={() => setPopupVideo(item.video)}>
                           <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110 grayscale group-hover/card:grayscale-0" style={{ backgroundImage: `url(${item.thumb})` }} />
                           <div className="absolute inset-0 bg-navy/40 group-hover/card:bg-transparent transition-colors" />
                           <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,158,219,0.5)] group-hover/card:scale-110 transition-transform">
                               <Play size={24} className="fill-white text-white ms-1" />
                             </div>
                           </div>
                         </div>
                         <div className="p-8 flex flex-col flex-grow">
                           <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{item.title}</h4>
                           <div className="flex gap-2 mb-8 flex-wrap">
                             {item.tags.map(tag => (
                               <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-blue uppercase tracking-widest">{tag}</span>
                             ))}
                           </div>
                           <button type="button" onClick={() => setPopupVideo(item.video)} className="mt-auto inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] bg-white/5 px-6 py-3 rounded-full hover:bg-blue transition-all w-fit">
                             <span>{t('portfolio.watchCaseStudy')}</span> <Play size={12} className="fill-current" />
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
               <span className="text-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
                 {t('process.badge')}
               </span>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 tracking-tighter uppercase leading-tight">
                 {t('process.headlinePart1')} <br /> <span className="text-blue">{t('process.headlineHighlight')}</span>
               </h2>
               <div className="space-y-8">
                 {processSteps.map((step, i) => (
                   <div key={i} className="flex gap-6 items-start">
                     <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-full flex items-center justify-center font-black text-blue text-xl">
                       <bdi>{step.no}</bdi>
                     </div>
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
                 <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6">{t('process.cta.title')}</h3>
                 <p className="text-gray-400 font-medium mb-10 max-w-sm mx-auto">{t('process.cta.desc')}</p>
                 <Link href="/book" className="inline-flex items-center justify-center w-full bg-blue text-white py-6 px-10 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_20px_rgba(0,158,219,0.3)]">
                   {t('process.cta.btn')}
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA 
        headline={
          <>
            {t('finalCta.headlinePart1')} <br /> <span className="text-blue text-glow">{t('finalCta.headlineHighlight')}</span>
          </>
        } 
        subheadline={t('hero.badge')}
      />

      {/* Video Popup Lightbox */}
      {popupVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/90 backdrop-blur-md">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setPopupVideo(null)} />
          <div className="relative z-10 w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <button 
              type="button"
              aria-label={tCommon('closeVideo')}
              onClick={() => setPopupVideo(null)} 
              className="absolute top-4 end-4 z-20 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
            >
               ✕
            </button>
            <iframe src={popupVideo} className="w-full h-full border-none" allow="autoplay; encrypted-media" allowFullScreen />
          </div>
        </div>
      )}
    </div>
  );
}
