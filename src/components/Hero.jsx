import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Send, Github, Linkedin, Twitter, Instagram, Code2, Mail } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Send,
  Instagram,
  Code2,
  Mail,
};

const Hero = () => {
  const { personalInfo, socialLinks } = portfolioData;

  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personalInfo.typingRoles;
    const targetText = roles[roleIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === targetText) {
      speed = 2200; // Pause at full word
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      speed = 400;
    }

    const timer = setTimeout(() => {
      setCurrentText((prev) => {
        if (!isDeleting) {
          if (prev === targetText) {
            setIsDeleting(true);
            return prev;
          }
          return targetText.substring(0, prev.length + 1);
        } else {
          return targetText.substring(0, prev.length - 1);
        }
      });
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, personalInfo.typingRoles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Interactive Canvas Particle Background */}
      <ParticleCanvas />

      {/* Radial Background Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-6 shadow-lg shadow-purple-950/50 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {personalInfo.availability}
            </div>

            {/* Greeting & Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight font-display">
              Hi There, <br />
              I'm{' '}
              <span className="gradient-text font-black">
                {personalInfo.name}
              </span>
            </h1>

            {/* Typewriter Role Line */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <p className="text-lg sm:text-2xl font-medium text-slate-300">
                I am into{' '}
                <span className="text-cyan-400 font-bold border-b-2 border-cyan-400/80 pb-0.5 min-h-[30px] inline-block font-mono">
                  {currentText}
                </span>
                <span className="animate-pulse text-purple-400 font-bold ml-1">|</span>
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed font-light">
              {personalInfo.shortIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#about"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 flex items-center gap-2 group"
              >
                About Me
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Pavani_Jadhav_Resume.pdf"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-purple-500/50 font-semibold text-sm shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-purple-400" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/30 font-semibold text-sm transition-all duration-300 flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                Contact Me
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold mr-2">
                Connect:
              </span>
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon] || Code2;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 hover:border-purple-500/60 hover:bg-purple-950/50 text-slate-400 hover:text-purple-400 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 group relative"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-[10px] text-slate-200 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-lg">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image/Avatar Card */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />
              
              {/* Card Container */}
              <div className="relative rounded-3xl bg-[#111827] p-4 border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Tech Tag Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-xl flex items-center">
                  <div>
                    <p className="text-xs text-slate-400">Current Role</p>
                    <p className="text-sm font-bold text-white">{personalInfo.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
