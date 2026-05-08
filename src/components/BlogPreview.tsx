'use client';

import { motion } from 'framer-motion';

const blogs = [
  { title: 'Mastering Lead Generation in 2024', date: 'Oct 24, 2024', category: 'Strategy' },
  { title: 'The Future of Performance Marketing', date: 'Oct 15, 2024', category: 'Ads' },
  { title: 'How Automation Saves 20+ Hours Weekly', date: 'Oct 02, 2024', category: 'Operations' },
];

const BlogPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-dark-navy">
      <div className="container px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
            Latest <span className="text-blue">Insights</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glow-card p-6 md:p-8 rounded-3xl group cursor-pointer"
            >
              <div className="aspect-video bg-navy rounded-2xl mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 bg-blue/10 group-hover:bg-blue/20 transition-colors" />
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                 <span className="text-[10px] font-bold text-blue uppercase tracking-widest px-2 py-1 bg-blue/10 rounded">{blog.category}</span>
                 <span className="text-[10px] text-gray-500 font-bold uppercase">{blog.date}</span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-white group-hover:text-blue transition-colors leading-tight mb-4">{blog.title}</h3>
              <div className="text-blue font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
                 Read More <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
