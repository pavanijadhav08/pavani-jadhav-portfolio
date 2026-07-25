import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24 bg-[#0a0d14] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-cyan-500 to-purple-900 -translate-x-1/2 opacity-40" />
          
          {/* Mobile Vertical Left Line */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-purple-600/40" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-start ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-[#0a0d14] border-2 border-purple-500 items-center justify-center shadow-lg shadow-purple-500/40 z-20">
                    <div className="w-3 h-3 rounded-full bg-purple-400 animate-ping" />
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 absolute" />
                  </div>

                  {/* Mobile Node Dot */}
                  <div className="lg:hidden absolute left-4 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-purple-600 border-2 border-[#0a0d14] z-20" />

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card Content Column */}
                  <div className="w-full lg:w-1/2 pl-10 lg:pl-0 lg:px-8">
                    <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-white/10 relative">
                      
                      {/* Top Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                          {item.type}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 mb-4 font-medium">
                        <span className="text-purple-400 font-semibold">{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>

                      {/* Main Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                        {item.description}
                      </p>

                      {/* Highlights Bullet List */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="space-y-2 mb-6">
                          {item.highlights.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Technologies Used */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-mono border border-slate-700/60"
                          >
                            #{tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
