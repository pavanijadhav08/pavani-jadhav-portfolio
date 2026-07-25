import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Trophy,
  Award,
  Star,
  Medal
};

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="relative py-24 bg-[#0d111c] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Trophy className="w-4 h-4" />
            <span>Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Honors & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-[#111827] border border-white/10 hover:border-purple-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-900/60 to-cyan-900/60 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-cyan-400">
                      {item.organization}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>Award Milestone</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
