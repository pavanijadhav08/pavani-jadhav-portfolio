import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="relative py-24 bg-[#0a0d14] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-3">
            <Award className="w-4 h-4" />
            <span>Verified Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Certifications & <span className="gradient-text">Licenses</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Issuer Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/40 p-2 overflow-hidden flex items-center justify-center">
                    {cert.badge ? (
                      <img
                        src={cert.badge}
                        alt={cert.issuer}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <Award className="w-6 h-6 text-purple-400" />
                    )}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-cyan-400 font-semibold">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-purple-400 font-medium mb-4 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {cert.issuer}
                </p>
              </div>

              {/* View Certificate Link */}
              {cert.link && (
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
