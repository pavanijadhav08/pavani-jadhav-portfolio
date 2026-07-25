import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Phone, Mail, MapPin, Code2, Github, Linkedin, Twitter, Send, Instagram } from 'lucide-react';
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

const Footer = () => {
  const { footer, contact, socialLinks, personalInfo } = portfolioData;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06080d] text-slate-300 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Box */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2 text-2xl font-bold font-display text-white">
              <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <span>{footer.brandText}</span>
              <span className="text-purple-500">.</span>
            </a>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed font-light">
              {footer.quote}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon] || Code2;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-purple-500 hover:bg-purple-950 text-slate-400 hover:text-purple-300 flex items-center justify-center transition-all"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Skills & Abilities
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Projects Made
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <p className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <Phone className="w-4 h-4 text-purple-400 shrink-0" />
              <span>{contact.phone}</span>
            </p>
            <p className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{contact.email}</span>
            </p>
            <p className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{contact.location}</span>
            </p>
          </div>

        </div>

        {/* Bottom Credit Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {footer.year} {personalInfo.name}. {footer.copyright}</p>
          
          <p className="flex items-center gap-1">
            Designed with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> for developers
          </p>
        </div>

      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 text-white flex items-center justify-center shadow-xl shadow-purple-600/40 hover:scale-110 focus:outline-none transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
