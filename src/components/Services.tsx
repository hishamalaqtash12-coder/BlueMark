'use client';

import { motion } from 'framer-motion';
import { Target, BarChart3, Globe, Cpu, Video } from 'lucide-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  {
    title: 'Lead Gen',
    description: 'Targeted strategies to attract high-intent leads.',
    icon: <Target className="w-8 h-8" />,
    step: '01'
  },
  {
    title: 'Ads Mastery',
    description: 'Performance advertising focused on ROI and scale.',
    icon: <BarChart3 className="w-8 h-8" />,
    step: '02'
  },
  {
    title: 'Web Dev',
    description: 'High-converting websites built for business growth.',
    icon: <Globe className="w-8 h-8" />,
    step: '03',
    href: '/website-solutions'
  },
  {
    title: 'Automation',
    description: 'Smart workflows to improve operational efficiency.',
    icon: <Cpu className="w-8 h-8" />,
    step: '04'
  },
  {
    title: 'AI Video',
    description: 'High-converting video ads without filming.',
    icon: <Video className="w-8 h-8" />,
    step: '05',
    href: '/ai-video'
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-dark-navy">
      <div className="container px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase"
          >
            Strategic Growth <br /> <span className="text-blue">At Every Stage</span>
          </motion.h2>
          <p className="text-gray-400 font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-sm">Our full-stack digital marketing solutions</p>
        </div>

        <div className="w-full pb-16 services-slider">
          <style jsx global>{`
            .services-slider .swiper-pagination-bullet {
              background: white;
              opacity: 0.2;
            }
            .services-slider .swiper-pagination-bullet-active {
              background: #009edb;
              opacity: 1;
              box-shadow: 0 0 10px rgba(0,158,219,0.8);
            }
            .services-slider .swiper-slide {
              height: auto;
            }
          `}</style>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3500, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full px-2 !pb-16"
          >
            {services.map((service, index) => {
              const cardInner = (
                <div className={`glow-card p-8 md:p-10 rounded-3xl group relative overflow-hidden h-full flex flex-col ${service.href ? 'cursor-pointer' : ''}`}>
                  <div className="absolute top-4 md:top-6 right-6 md:right-8 text-5xl md:text-6xl font-black text-white/5 group-hover:text-blue/10 transition-colors">
                    {service.step}
                  </div>
                  <div className="mb-6 md:mb-8 text-blue relative z-10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight group-hover:text-blue transition-colors uppercase relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-8 text-sm font-medium leading-relaxed relative z-10">
                    {service.description}
                  </p>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden absolute bottom-0 left-0">
                     <div className="h-full bg-blue w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              );

              return (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    {service.href ? (
                      <Link href={service.href} className="block h-full">
                        {cardInner}
                      </Link>
                    ) : (
                      <div className="block h-full">
                        {cardInner}
                      </div>
                    )}
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
