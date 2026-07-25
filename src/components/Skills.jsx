import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Laptop,
  Atom,
  FileCode,
  FileCode2,
  Globe,
  Palette,
  Layout,
  Server,
  Cpu,
  Code,
  Network,
  Database,
  DatabaseBackup,
  Box,
  Cloud,
  GitBranch,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const skillIconMap = {
  Atom,
  FileCode,
  FileCode2,
  Globe,
  Palette,
  Layout,
  Server,
  Cpu,
  Code,
  Network,
  Database,
  DatabaseBackup,
  Box,
  Cloud,
  GitBranch,
  Sparkles,
};

const Skills = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('All');

  const filteredTechnical =
    activeTab === 'All'
      ? skills.technical
      : skills.technical.filter((skill) => skill.category === activeTab);

  const showSoftSkills = activeTab === 'All' || activeTab === 'Concepts' || activeTab === 'Soft Skills';

  return (
    <section id="skills" className="relative py-24 bg-[#0d111c] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Laptop className="w-4 h-4" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Skills & <span className="gradient-text">Abilities</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skills.categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                    : 'bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Technical Skills Grid */}
        {activeTab !== 'Soft Skills' && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Technical Stack & Proficiency
            </h3>

            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredTechnical.map((skill, index) => {
                  const IconComponent = skillIconMap[skill.icon] || Laptop;
                  return (
                    <motion.div
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      className="glass-card glass-card-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                              {skill.category}
                            </span>
                          </div>
                        </div>

                        <span className="text-sm font-extrabold text-cyan-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Soft Skills Section */}
        {showSoftSkills && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              Professional & Soft Skills
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.softSkills.map((soft, index) => (
                <motion.div
                  key={soft.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {soft.name}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {soft.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
