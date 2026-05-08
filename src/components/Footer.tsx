import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#000814] text-white pt-32 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-8 block group">
              <img 
                src="/Blue-Mark-Logo.webp" 
                alt="Blue Mark Logo" 
                className="h-12 md:h-16 w-auto object-contain"
                style={{ 
                  filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' 
                }}
              />
            </Link>
            <p className="text-gray-400 max-w-md mb-10 text-lg leading-relaxed font-medium">
              Growth solutions built to drive sales. We help businesses generate qualified leads, 
              increase revenue, and scale through performance marketing and automation.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Explore</h4>
            <ul className="space-y-6">
              <li><Link href="/" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">Home</Link></li>
              <li><Link href="/results" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">Results</Link></li>
              <li><Link href="/about" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Connect</h4>
            <ul className="space-y-6">
              <li><a href="#" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-blue transition-colors">Twitter X</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Blue Mark Growth Agency. All rights reserved.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-gray-600 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-gray-600 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
