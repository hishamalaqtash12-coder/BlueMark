'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import FinalCTA from '@/components/FinalCTA';
import CreativePortfolio from '@/components/BlogPreview';
import { useTranslations } from 'next-intl';

export default function AIVideo() {
  const t = useTranslations('aiVideo');

  const steps = [
    { num: t('steps.step1.num'), title: t('steps.step1.title'), desc: t('steps.step1.desc') },
    { num: t('steps.step2.num'), title: t('steps.step2.title'), desc: t('steps.step2.desc') },
    { num: t('steps.step3.num'), title: t('steps.step3.title'), desc: t('steps.step3.desc') },
  ];

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
              {t('hero.headlinePart1')} <br />
              <span className="text-blue">{t('hero.headlineHighlight')}</span> {t('hero.headlinePart2')}
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
              {t('hero.subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#order" className="w-full sm:w-auto bg-blue text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_20px_rgba(0,158,219,0.3)]">
                {t('hero.startOrder')}
              </a>
              <a href="#videos" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                {t('hero.viewWork')}
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
              {t('steps.headline')} <span className="text-blue">{t('steps.headlineHighlight')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-blue/30 transition-colors text-start">
                <div className="absolute -top-10 -end-10 text-[120px] font-black text-white/[0.03] group-hover:text-blue/[0.05] transition-colors leading-none">
                  <bdi>{step.num}</bdi>
                </div>
                <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center text-blue font-black text-xl mb-6 shadow-[0_0_15px_rgba(0,158,219,0.2)]">
                  <bdi>{step.num}</bdi>
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
              <h3 className="text-2xl font-black text-gray-400 uppercase tracking-tight mb-8">{t('comparison.traditional.title')}</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-500 font-bold uppercase text-sm tracking-widest">{t('comparison.traditional.productionLabel')}</span>
                  <span className="text-white font-bold">{t('comparison.traditional.productionValue')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-500 font-bold uppercase text-sm tracking-widest">{t('comparison.traditional.crewLabel')}</span>
                  <span className="text-white font-bold">{t('comparison.traditional.crewValue')}</span>
                </div>
                <div className="flex justify-between items-center pb-4">
                  <span className="text-gray-500 font-bold uppercase text-sm tracking-widest">{t('comparison.traditional.costLabel')}</span>
                  <span className="text-white font-bold"><bdi>{t('comparison.traditional.costValue')}</bdi></span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-blue/30 p-8 rounded-3xl relative overflow-hidden shadow-[0_0_30px_rgba(0,158,219,0.1)]">
              <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
              <h3 className="text-2xl font-black text-blue uppercase tracking-tight mb-8 relative z-10">{t('comparison.ai.title')}</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400 font-bold uppercase text-sm tracking-widest">{t('comparison.ai.productionLabel')}</span>
                  <span className="text-white font-black">{t('comparison.ai.productionValue')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400 font-bold uppercase text-sm tracking-widest">{t('comparison.ai.crewLabel')}</span>
                  <span className="text-white font-black text-green-400">{t('comparison.ai.crewValue')}</span>
                </div>
                <div className="flex justify-between items-center pb-4">
                  <span className="text-gray-400 font-bold uppercase text-sm tracking-widest">{t('comparison.ai.costLabel')}</span>
                  <span className="text-white font-black text-green-400">{t('comparison.ai.costValue')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl text-center hover:bg-white/[0.04] transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{t('packages.pkg1.title')}</h3>
              <p className="text-gray-400 text-sm mb-8 font-medium">{t('packages.pkg1.desc')}</p>
              <div className="mt-auto">
                <a href="#order" className="block w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">{t('packages.pkg1.btn')}</a>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-blue p-8 rounded-3xl text-center relative overflow-hidden shadow-[0_0_30px_rgba(0,158,219,0.2)] scale-105 z-10 flex flex-col h-full">
              <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
              <div className="text-blue text-[10px] font-black uppercase tracking-[0.2em] mb-4 relative z-10">{t('packages.pkg2.badge')}</div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2 relative z-10">{t('packages.pkg2.title')}</h3>
              <p className="text-gray-400 text-sm mb-8 font-medium relative z-10">{t('packages.pkg2.desc')}</p>
              <div className="mt-auto relative z-10">
                <a href="#order" className="block w-full bg-blue text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_20px_rgba(0,158,219,0.3)]">{t('packages.pkg2.btn')}</a>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl text-center hover:bg-white/[0.04] transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{t('packages.pkg3.title')}</h3>
              <p className="text-gray-400 text-sm mb-8 font-medium">{t('packages.pkg3.desc')}</p>
              <div className="mt-auto">
                <a href="#order" className="block w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">{t('packages.pkg3.btn')}</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Order Form / CTA */}
      <section id="order" className="py-24 bg-dark-navy relative">
        <div className="container px-6 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              {t('order.headlinePart1')}<br/>
              <span className="text-blue">{t('order.headlineHighlight')}</span>
            </h2>
          </div>

          <div className="bg-white/[0.03] border border-white/5 p-8 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center h-full max-w-2xl mx-auto">
             <div className="absolute inset-0 bg-radial-glow opacity-10 pointer-events-none" />
             <div className="relative z-10">
               <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6">{t('order.readyTitle')}</h3>
               <p className="text-gray-400 font-medium mb-10 max-w-sm mx-auto">{t('order.readyDesc')}</p>
               <Link href="/book" className="inline-flex items-center justify-center w-full bg-blue text-white py-6 px-10 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_20px_rgba(0,158,219,0.3)]">
                 {t('order.btn')}
               </Link>
             </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
