import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Calendar } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#111827] border border-white/10 rounded-3xl shadow-2xl overflow-y-auto z-10 my-auto custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image Header */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-950 shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/50 to-transparent" />

            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold shadow-lg">
                  {project.category}
                </span>
                {project.duration && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-cyan-400 text-xs font-mono">
                    <Calendar className="w-3 h-3" />
                    {project.duration}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-display leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-2">
                Project Overview
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Key Features / Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Key Features & Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/70 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
                Technologies & Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Link Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-white/10">
              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}

              {project.liveDemo && project.liveDemo !== '#' && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-purple-600/30 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
