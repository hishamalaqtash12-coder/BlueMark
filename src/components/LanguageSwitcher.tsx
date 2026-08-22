'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  isMobile?: boolean;
  onSelect?: () => void;
}

export default function LanguageSwitcher({ className = '', isMobile = false, onSelect }: LanguageSwitcherProps) {
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

  if (isMobile) {
    return (
      <div className={`flex items-center gap-4 bg-white/5 border border-white/10 p-1.5 rounded-full ${className}`}>
        <button
          type="button"
          onClick={() => toggleLanguage('ar')}
          className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
            locale === 'ar' 
              ? 'bg-blue text-white shadow-[0_0_10px_rgba(0,158,219,0.5)]' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          العربية
        </button>
        <button
          type="button"
          onClick={() => toggleLanguage('en')}
          className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
            locale === 'en' 
              ? 'bg-blue text-white shadow-[0_0_10px_rgba(0,158,219,0.5)]' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          English
        </button>
      </div>
    );
  }

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
