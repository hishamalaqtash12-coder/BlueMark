'use client';

import { Link, usePathname } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('results'), href: '/results' },
    { name: t('about'), href: '/about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 start-0 end-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-dark-navy/95 backdrop-blur-xl py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-4 md:py-8'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center gap-2">
        <Link href="/" className="flex items-center group shrink-0">
          <img 
            src="/Blue-Mark-Logo.webp" 
            alt={t('logoAlt')} 
            className="h-8 sm:h-10 md:h-14 w-auto object-contain shrink-0"
            style={{ 
              filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' 
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-blue relative group ${
                pathname === link.href ? 'text-blue' : 'text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 start-0 w-0 h-0.5 bg-blue transition-all group-hover:w-full ${pathname === link.href ? 'w-full' : ''}`} />
            </Link>
          ))}
          
          <LanguageSwitcher variant="desktop" />

          <Link
            href="/book"
            className="bg-blue text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_15px_rgba(0,158,219,0.3)]"
          >
            {t('book')}
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher variant="mobile-header" />
          <button 
            type="button"
            aria-label={isMobileMenuOpen ? t('closeMenu') : t('openMenu')}
            className="text-white p-1.5 shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 start-0 w-full h-screen bg-dark-navy z-[60] flex flex-col items-center justify-center gap-8 px-6"
          >
            <button 
              type="button"
              aria-label={t('closeMenu')}
              className="absolute top-6 end-6 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            <LanguageSwitcher variant="mobile-menu" onSelect={() => setIsMobileMenuOpen(false)} />

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-black uppercase tracking-tighter ${
                  pathname === link.href ? 'text-blue' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              href="/book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-blue text-white px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest"
            >
              {t('book')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
