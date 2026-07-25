import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, MapPin, Mail, GraduationCap, Briefcase, ChevronRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personalInfo, aboutStats, aboutDetails } = portfolioData;

  return (
    <section id="about" className="relative py-24 bg-[#0a0d14] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-3">
            <User className="w-4 h-4" />
            <span>Discover Story</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Profile Image / Frame */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative rounded-2xl bg-[#111827] border border-white/10 p-3 shadow-2xl">
                <img
                  src={personalInfo.aboutImage || personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-[400px] object-cover rounded-xl filter brightness-95"
                />

                {/* Badge Overlay */}
                <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-purple-900 to-slate-900 border border-purple-500/40 p-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/50 flex items-center justify-center text-purple-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{aboutDetails.experienceYears}</p>
                    <p className="text-xs text-slate-400">Professional Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Bio & Info Details */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              I'm {personalInfo.name}
            </h3>
            <span className="inline-block px-3 py-1 rounded-md bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold mb-6">
              {personalInfo.role}
            </span>

            {/* Editable Bio Paragraphs */}
            <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
              {personalInfo.bio}
            </p>

            {/* Career Objective Box */}
            <div className="p-4 rounded-xl bg-slate-900/90 border-l-4 border-purple-500 mb-8 border-y border-r border-white/5">
              <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-1">
                Career Objective
              </h4>
              <p className="text-sm text-slate-300 italic font-light">
                "{personalInfo.careerObjective}"
              </p>
            </div>

            {/* Quick Details Table/Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/5">
                <Mail className="w-5 h-5 text-purple-400 shrink-0" />
                <div className="overflow-hidden">
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="text-sm font-medium text-white truncate">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/5">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-medium text-white">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/5">
                <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Degree</p>
                  <p className="text-sm font-medium text-white">{aboutDetails.degree}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/5">
                <Briefcase className="w-5 h-5 text-pink-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Status</p>
                  <p className="text-sm font-medium text-white">{personalInfo.availability}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {aboutStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#111827] border border-white/10 text-center hover:border-purple-500/40 transition-colors"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold gradient-text font-display">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <div>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Pavani_Jadhav_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all duration-300 group"
              >
                <span>Download Resume</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
