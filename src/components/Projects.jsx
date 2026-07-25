import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, Github, Eye, Sparkles, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Featured', 'Full Stack', 'Data Analytics', 'IoT / Hardware', 'Mobile App'];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return project.featured;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="relative py-24 bg-[#0d111c] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-3">
            <Code2 className="w-4 h-4" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Projects <span className="gradient-text">Made</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                  : 'bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
              >
                {/* Project Image Box */}
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />

                    {/* Category Tag */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-md text-xs font-semibold text-purple-300">
                      {project.category}
                    </span>

                    {/* Featured Ribbon */}
                    {project.featured && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] uppercase tracking-wider font-extrabold flex items-center gap-1 backdrop-blur-md">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6">
                    {project.duration && (
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.duration}</span>
                      </div>
                    )}

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-light">
                      {project.shortDescription || project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Badges and Action Buttons */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-slate-900 text-slate-400 text-[11px] font-mono">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/40 text-purple-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Details
                    </button>

                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center justify-center transition-colors"
                        aria-label="GitHub Repository"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveDemo && project.liveDemo !== '#' && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900 text-cyan-300 hover:text-white border border-cyan-500/40 text-xs font-semibold flex items-center justify-center transition-colors"
                        aria-label="Live Demo"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Window Component */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
