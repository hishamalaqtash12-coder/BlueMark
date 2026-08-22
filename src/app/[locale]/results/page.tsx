'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import FinalCTA from '@/components/FinalCTA';
import { Play } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { statsConfig } from '@/data/stats';

const ResultsPage = () => {
  const t = useTranslations('results');
  const tCommon = useTranslations('common');

  const caseStudies = [
    {
      id: 'case1',
      country: t('caseStudies.case1.country'),
      sector: t('caseStudies.case1.sector'),
      service: t('caseStudies.case1.service'),
      result: t('caseStudies.case1.result'),
      image: '/results-10,000+ Qualified Leads.jpg',
      imageAlt: t('caseStudies.case1.imageAlt'),
    },
    {
      id: 'case2',
      country: t('caseStudies.case2.country'),
      sector: t('caseStudies.case2.sector'),
      service: t('caseStudies.case2.service'),
      result: t('caseStudies.case2.result'),
      image: '/results-5.9X ROAS for E-com.jpg',
      imageAlt: t('caseStudies.case2.imageAlt'),
    },
    {
      id: 'case3',
      country: t('caseStudies.case3.country'),
      sector: t('caseStudies.case3.sector'),
      service: t('caseStudies.case3.service'),
      result: t('caseStudies.case3.result'),
      image: '/results-9X ROAS Campaign.jpg',
      imageAlt: t('caseStudies.case3.imageAlt'),
    },
    {
      id: 'case4',
      country: t('caseStudies.case4.country'),
      sector: t('caseStudies.case4.sector'),
      service: t('caseStudies.case4.service'),
      result: t('caseStudies.case4.result'),
      image: '/results-10,000+ Qualified Leads.jpg',
      imageAlt: t('caseStudies.case4.imageAlt'),
    },
  ];

  const clientLogosList = [
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/قصر-النشلامي.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/سرداح.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/بلاي-ميكر.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/باريس-1.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/اورانج.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/العطاونة.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/اقران.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/عدنان.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/صيدلية.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/سيف.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/سما.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/سدر-وفخارة.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/س.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/ديار-للعقار.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/دكتور.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/حبيبيز.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/جول.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/جدزدنا.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/تادهل.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/بيف-في-رغيف.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/بريتش.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/براكتيكا.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/براكتا.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/باريس.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/الموند.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/البيت-التركي.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/الامير-سرداح.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/الامبراطور.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/الاقصى.jpg',
    'https://bmark-agency-712547.hostingersite.com/wp-content/uploads/2025/03/اركان.jpg'
  ];

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
            <span className="text-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              {t('hero.badge')}
            </span>
            <h1 className="text-5xl md:text-[8rem] font-black text-white mb-8 tracking-tighter leading-none text-glow uppercase">
              {t('hero.headlinePart1')} <br /> <span className="text-blue">{t('hero.headlinePart2')}</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed uppercase tracking-widest font-bold opacity-80 px-4">
              {t('hero.subheadline')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Reach / Presence */}
      <section className="py-12 bg-white/[0.02] border-b border-white/5 overflow-hidden">
        <div className="container px-6 mb-8 text-center">
           <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4">
             {t('presence.headline')} <span className="text-blue">{t('presence.headlineHighlight')}</span>
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-medium">
             {t('presence.text')}
           </p>
        </div>
        <div className="flex gap-16 md:gap-32 animate-scroll whitespace-nowrap items-center w-max">
           {[...Array(2)].map((_, loopIdx) => (
             <div key={loopIdx} className="flex gap-16 md:gap-32 items-center">
               {[
                 { name: 'Jordan', code: 'jo' },
                 { name: 'KSA', code: 'sa' },
                 { name: 'UAE', code: 'ae' },
                 { name: 'Kuwait', code: 'kw' },
                 { name: 'USA', code: 'us' },
                 { name: 'Oman', code: 'om' },
                 { name: 'Morocco', code: 'ma' },
               ].map((country, i) => (
                 <div key={`${loopIdx}-${i}`} className="flex items-center gap-4 transition-all cursor-default hover:scale-105">
                    <img src={`https://flagcdn.com/${country.code}.svg`} alt={`${country.name} Flag`} className="h-8 md:h-10 w-auto rounded-sm border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform" />
                    <span className="text-white font-black uppercase tracking-[0.2em] text-sm md:text-base">{country.name}</span>
                 </div>
               ))}
             </div>
           ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {caseStudies.map((cs, index) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col h-full"
              >
                <div className="aspect-[16/9] overflow-hidden relative shrink-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url("${cs.image}")` }}
                  />
                  <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/20 transition-colors" />
                  <div className="absolute top-6 end-6 z-20">
                    <span className="px-4 py-1.5 bg-blue/90 backdrop-blur-md text-white text-[9px] font-black uppercase rounded-full tracking-[0.2em]">
                      {cs.country}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 flex flex-col flex-grow">
                  <div className="text-xs text-blue font-black uppercase tracking-[0.2em] mb-2">
                    {cs.sector}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight leading-snug">
                    <bdi>{cs.result}</bdi>
                  </h3>
                  <div className="text-gray-400 text-xs font-medium mb-8">
                    {cs.service}
                  </div>
                  <Link 
                    href="/book"
                    className="group/btn inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] bg-white/5 px-6 py-3 rounded-full hover:bg-blue transition-all mt-auto w-fit"
                  >
                    <span>{t('caseStudies.button')}</span>
                    <Play size={12} className="fill-current shrink-0" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Marquee (Gated) */}
      {statsConfig.clientLogos.verified && (
        <section className="py-24 bg-dark-navy border-b border-white/5 overflow-hidden">
          <div className="container px-6 mb-12 text-center">
             <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase">
               {t('clientTrust.headline')} <span className="text-blue">{t('clientTrust.headlineHighlight')}</span>
             </h2>
          </div>
          <div className="flex gap-12 animate-scroll whitespace-nowrap items-center w-max" style={{ animationDuration: '80s' }}>
             {[...Array(2)].map((_, loopIdx) => (
               <div key={loopIdx} className="flex gap-12 items-center">
                 {clientLogosList.map((src, i) => (
                   <div key={`${loopIdx}-${i}`} className="w-24 md:w-32 h-24 md:h-32 flex-shrink-0 bg-white rounded-2xl flex items-center justify-center p-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/10">
                      <img src={src} alt="Client Logo" className="w-full h-full object-contain mix-blend-multiply" />
                   </div>
                 ))}
               </div>
             ))}
          </div>
        </section>
      )}

      {/* Dashboard Gallery */}
      <section className="py-24 md:py-32 overflow-hidden">
         <div className="container px-6 mb-16 text-center">
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase">
              {t('dashboards.headline')} <span className="text-blue">{t('dashboards.headlineHighlight')}</span> {t('dashboards.headlineEnd')}
            </h2>
         </div>
         <div className="flex gap-8 animate-scroll whitespace-nowrap">
            {[
              '/1-G-ads.webp',
              '/2-G-ads.webp',
              '/3-G-ads.webp',
              '/4-G-ads.webp',
              '/5-G-ads.webp',
              '/6-G-ads.webp'
            ].map((src, i) => (
              <div key={i} className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-[#0b0b0b] rounded-[2.5rem] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden relative group cursor-pointer">
                 <div 
                   className="absolute inset-0 bg-cover bg-center opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" 
                   style={{ backgroundImage: `url(${src})` }}
                 />
              </div>
            ))}
            {/* Repeat for Infinite Loop */}
            {[
              '/1-G-ads.webp',
              '/2-G-ads.webp',
              '/3-G-ads.webp',
              '/4-G-ads.webp',
              '/5-G-ads.webp',
              '/6-G-ads.webp'
            ].map((src, i) => (
              <div key={`dup-${i}`} className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-[#0b0b0b] rounded-[2.5rem] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden relative group cursor-pointer">
                 <div 
                   className="absolute inset-0 bg-cover bg-center opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" 
                   style={{ backgroundImage: `url(${src})` }}
                 />
              </div>
            ))}
         </div>
      </section>

      {/* Final CTA */}
      <FinalCTA 
        headline={
          <>
            {t('cta.headlinePart1')} <br /> <span className="text-blue">{t('cta.headlineHighlight')}</span>
          </>
        } 
        subheadline={t('cta.badge')}
        buttonText={t('cta.button')}
      />
    </div>
  );
};

export default ResultsPage;
