'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-[#000814] text-white pt-32 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-8 block group">
              <img 
                src="/Blue-Mark-Logo.webp" 
                alt={tNav('logoAlt')} 
                className="h-12 md:h-16 w-auto object-contain"
                style={{ 
                  filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' 
                }}
              />
            </Link>
            <p className="text-gray-400 max-w-md mb-10 text-lg leading-relaxed font-medium">
              {t('description')}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">{t('explore')}</h4>
            <ul className="space-y-6">
              <li><Link href="/" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">{t('links.home')}</Link></li>
              <li><Link href="/results" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">{t('links.results')}</Link></li>
              <li><Link href="/about" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">{t('links.about')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">{t('connect')}</h4>
            <ul className="space-y-6">
              <li><a href="https://www.linkedin.com/company/blue-mark-agency/" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">{t('social.linkedIn')}</a></li>
              <li><a href="https://www.instagram.com/bluemark_agency" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">{t('social.instagram')}</a></li>
              <li><a href="https://web.facebook.com/bluemarkagency1" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">{t('social.facebook')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-gray-600 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">{t('privacy')}</Link>
            <Link href="#" className="text-gray-600 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
