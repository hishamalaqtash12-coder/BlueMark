'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'desktop' | 'mobile-header' | 'mobile-menu';
  isMobile?: boolean;
  onSelect?: () => void;
}

export default function LanguageSwitcher({ 
  className = '', 
  variant = 'desktop',
  isMobile = false, 
  onSelect 
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = (targetLocale: 'ar' | 'en') => {
    if (targetLocale === locale) return;
    
    // Set cookie for 1 year persistence
    document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    router.replace(pathname, { locale: targetLocale });
    if (onSelect) onSelect();
  };

  // Full-width menu version (inside mobile menu drawer)
  if (isMobile || variant === 'mobile-menu') {
    return (
      <div className={`flex items-center gap-3 bg-white/5 border border-white/10 p-1.5 rounded-full ${className}`}>
        <button
          type="button"
          onClick={() => toggleLanguage('ar')}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
            locale === 'ar' 
              ? 'bg-blue text-white shadow-[0_0_15px_rgba(0,158,219,0.5)]' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          العربية
        </button>
        <button
          type="button"
          onClick={() => toggleLanguage('en')}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
            locale === 'en' 
              ? 'bg-blue text-white shadow-[0_0_15px_rgba(0,158,219,0.5)]' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          English
        </button>
      </div>
    );
  }

  // Compact toggle for Mobile Header (prevents collision with logo)
  if (variant === 'mobile-header') {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    const label = locale === 'ar' ? 'EN' : 'عربي';

    return (
      <button
        type="button"
        onClick={() => toggleLanguage(nextLocale)}
        className={`inline-flex items-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 active:scale-95 px-3 py-1.5 rounded-full text-xs font-black text-white transition-all shrink-0 ${className}`}
        aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
      >
        <Globe className="w-3.5 h-3.5 text-blue shrink-0" />
        <span>{label}</span>
      </button>
    );
  }

  // Desktop Header Dual Toggle
  return (
    <div className={`inline-flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full p-1 ${className}`}>
      <Globe className="w-3.5 h-3.5 text-blue ms-2 me-1 shrink-0" />
      <button
        type="button"
        onClick={() => toggleLanguage('ar')}
        className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${
          locale === 'ar'
            ? 'bg-blue text-white shadow-[0_0_10px_rgba(0,158,219,0.4)]'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-label="التبديل إلى العربية"
      >
        العربية
      </button>
      <button
        type="button"
        onClick={() => toggleLanguage('en')}
        className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${
          locale === 'en'
            ? 'bg-blue text-white shadow-[0_0_10px_rgba(0,158,219,0.4)]'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
