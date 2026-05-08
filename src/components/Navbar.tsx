'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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
    { name: 'Home', href: '/' },
    { name: 'Results', href: '/results' },
    { name: 'About', href: '/about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-dark-navy/95 backdrop-blur-xl py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <img 
            src="/Blue-Mark-Logo.webp" 
            alt="Blue Mark Logo" 
            className="h-10 md:h-14 w-auto object-contain"
            style={{ 
              filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' 
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-blue relative group ${
                pathname === link.href ? 'text-blue' : 'text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue transition-all group-hover:w-full ${pathname === link.href ? 'w-full' : ''}`} />
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-blue text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-[0_0_15px_rgba(0,158,219,0.3)]"
          >
            Book Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-dark-navy z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
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
              className="mt-8 bg-blue text-white px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest"
            >
              Book Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
