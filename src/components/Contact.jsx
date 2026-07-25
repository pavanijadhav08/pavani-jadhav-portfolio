import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Headset, Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, User, MessageSquare, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { contact, socialLinks } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setError('Something went wrong. Please try again.');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSubmitted(false);

    try {
      await emailjs.send(
        'service_w4qzkph',
        'template_d4z666h',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'zFgU0JCc_11Jq8jn6'
      );

      setIsSubmitting(false);
      setSubmitted(true);
      
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setIsSubmitting(false);
      setError('Something went wrong. Please try again.');
      setTimeout(() => setError(null), 6000);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0d111c] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-3">
            <Headset className="w-4 h-4" />
            <span>Communication Hub</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3 font-light">
            {contact.subheading}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info Cards */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-3xl bg-[#111827] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-[60px]" />

              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email Card */}
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-purple-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email Address</p>
                    <p className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {contact.email}
                    </p>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Phone Number</p>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {contact.phone}
                    </p>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Location</p>
                    <p className="text-sm font-semibold text-white">
                      {contact.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Response guarantee note */}
              <div className="mt-8 p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs text-purple-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{contact.responseTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative">
              
              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm font-semibold flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-950/80 border border-red-500/40 text-red-300 text-sm font-semibold flex items-center gap-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Phone / Subject Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Phone / Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000 or Project Inquiry"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    />
                    <PhoneCall className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Your Message <span className="text-purple-400">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your project details or message here..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                    ></textarea>
                    <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-4" />
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
