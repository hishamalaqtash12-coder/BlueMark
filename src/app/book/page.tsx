'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const BookingPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Blue Mark Team, I'm interested in booking a strategy call for my business growth.");
    window.open(`https://wa.me/962790453482?text=${message}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "f04ad1ec-38e7-40ad-a16e-872f0471b67d");
    formData.append("from_name", "Blue Mark Leads");
    formData.append("subject", "New Strategy Call Qualification");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or use WhatsApp.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-dark-navy min-h-screen pt-32 pb-20">
      <div className="container px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue font-black uppercase tracking-[0.3em] text-xs mb-4 block">Step 1 — Qualification</span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
            Strategy <span className="text-blue text-glow">Qualification</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
            Please fill out the form below to start your growth journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto items-start">
          {/* Step 1: Qualification Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white/[0.03] rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden min-h-[800px]"
          >
            <div className="absolute inset-0 bg-radial-glow opacity-10 pointer-events-none" />
            
            {!isSubmitted ? (
              <div className="relative z-10 text-left">
                <div className="mb-12 border-b border-white/5 pb-8">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">Business Analysis</h3>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">Required for all strategy consultations</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Full Name</label>
                      <input name="name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Company Name</label>
                      <input name="company" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue outline-none transition-colors" placeholder="Acme Inc." />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Website URL</label>
                      <input name="website" required type="url" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue outline-none transition-colors" placeholder="https://example.com" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Industry</label>
                      <input name="industry" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue outline-none transition-colors" placeholder="e.g. E-commerce" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Main Growth Goal</label>
                    <input name="goal" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue outline-none transition-colors" placeholder="e.g. Scale to $100k/mo" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Monthly Revenue Range</label>
                      <select name="revenue" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue outline-none transition-colors appearance-none cursor-pointer">
                        <option className="bg-dark-navy">Under $10k</option>
                        <option className="bg-dark-navy">$10k - $50k</option>
                        <option className="bg-dark-navy">$50k - $200k</option>
                        <option className="bg-dark-navy">$200k+</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Monthly Marketing Budget</label>
                      <select name="budget" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue outline-none transition-colors appearance-none cursor-pointer">
                        <option className="bg-dark-navy">Under $2.5k</option>
                        <option className="bg-dark-navy">$2.5k - $10k</option>
                        <option className="bg-dark-navy">$10k - $50k</option>
                        <option className="bg-dark-navy">$50k+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Services Interested In</label>
                      <input name="services" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue outline-none transition-colors" placeholder="e.g. Ads Management" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Target Market</label>
                      <input name="target_market" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue outline-none transition-colors" placeholder="e.g. USA, GCC" />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue text-white py-6 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,158,219,0.3)] mt-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Qualification'} <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center py-20">
                 <div className="w-20 h-20 bg-blue/20 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-10 h-10 text-blue" />
                 </div>
                 <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Application Received</h3>
                 <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                   Thank you for your interest. We have received your business details and will get back to you within 24 hours.
                 </p>
                 <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 text-blue font-black uppercase text-xs tracking-widest border-b border-blue"
                 >
                   Back to Form
                 </button>
              </div>
            )}
          </motion.div>

          {/* Quick Track: WhatsApp Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-blue/10 rounded-[2.5rem] p-10 border border-blue/20 shadow-2xl text-left relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue/10 rounded-full blur-3xl" />
               <MessageCircle className="w-12 h-12 text-blue mb-8" />
               <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Fast Track via WhatsApp</h3>
               <p className="text-gray-400 text-sm font-medium leading-relaxed mb-10">
                 Prefer instant messaging? Chat directly with our growth team to skip the queue and get an immediate response.
               </p>
               <button 
                 onClick={handleWhatsApp}
                 className="w-full bg-blue hover:bg-white hover:text-navy text-white py-6 rounded-full font-black uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(0,158,219,0.4)] flex items-center justify-center gap-3"
               >
                 Send Message Now
               </button>
            </div>

            <div className="glow-card p-10 rounded-[2.5rem] text-left bg-white/[0.01]">
               <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-6">What to Expect</h4>
               <div className="space-y-6">
                 {[
                   'Deep dive into your sales funnel',
                   'Analysis of your current ad spend',
                   'Identification of growth bottlenecks',
                   'A clear roadmap to scale revenue'
                 ].map((step, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue mt-1.5 shrink-0" />
                      <span className="text-sm text-white font-bold uppercase tracking-tight">{step}</span>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-gray-700 text-[10px] font-black uppercase tracking-[0.4em]">
           Secure & Private • Global Growth Execution • US Based Team
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
