import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-24 bg-[#0a0d14] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Inspirational Quote */}
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <p className="text-slate-400 text-sm sm:text-base italic font-light">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
          <p className="text-xs text-purple-400 font-semibold mt-2">— Albert Einstein</p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-0.5 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <div className="w-full h-full bg-[#0a0d14] rounded-[14px] flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono font-medium bg-cyan-950/60 border border-cyan-500/30 px-3 py-1.5 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Degree & School */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-purple-400 mb-1">
                  {item.institution}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-400 mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                  {item.grade && (
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      {item.grade}
                    </span>
                  )}
                </div>

                {/* Details */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                  {item.details}
                </p>

                {/* Activities / Honors */}
                {item.activities && item.activities.length > 0 && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                      Highlights & Activities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.activities.map((act, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs border border-white/5"
                        >
                          • {act}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
