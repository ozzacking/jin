import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:hello@findsleeptime.com?subject=${encodeURIComponent(form.subject || 'Contact from findsleeptime.com')}&body=${encodeURIComponent('Name: ' + form.name + '\nEmail: ' + form.email + '\n\n' + form.message)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-xl text-gray-300 mb-12">
          Have a question, suggestion, or feedback? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-6 text-center">
            <Mail className="w-8 h-8 text-[#7c6aff] mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <a href="mailto:hello@findsleeptime.com" className="text-gray-300 text-sm hover:text-[#7c6aff] transition-colors">
              hello@findsleeptime.com
            </a>
          </div>
          <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-6 text-center">
            <Clock className="w-8 h-8 text-[#7c6aff] mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Response Time</h3>
            <p className="text-gray-300 text-sm">Within 1–2 business days</p>
          </div>
          <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-6 text-center">
            <MessageCircle className="w-8 h-8 text-[#7c6aff] mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Feedback</h3>
            <p className="text-gray-300 text-sm">Feature requests welcome</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            {submitted ? (
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 text-center">
                <p className="text-green-300 font-semibold text-lg mb-2">Opening your email client...</p>
                <p className="text-green-200 text-sm">If it didn't open, email us directly at hello@findsleeptime.com</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full bg-[#0d1b2a]/70 border border-[#7c6aff]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#7c6aff] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full bg-[#0d1b2a]/70 border border-[#7c6aff]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#7c6aff] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({...form, subject: e.target.value})}
                    className="w-full bg-[#0d1b2a]/70 border border-[#7c6aff]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7c6aff] transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="General Question">General Question</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Content Feedback">Content Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full bg-[#0d1b2a]/70 border border-[#7c6aff]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#7c6aff] transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7c6aff] hover:bg-[#6a5aee] text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8">
              <HelpCircle className="w-7 h-7 text-[#7c6aff] mb-4" />
              <h2 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-medium text-sm mb-1">How accurate is the sleep calculator?</h3>
                  <p className="text-gray-400 text-sm">Our calculator uses the standard 90-minute sleep cycle, which is the average for most adults. Individual cycles may vary between 80–110 minutes.</p>
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm mb-1">Is the calculator free to use?</h3>
                  <p className="text-gray-400 text-sm">Yes, all tools on findsleeptime.com are completely free with no account required.</p>
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm mb-1">Do you store my data?</h3>
                  <p className="text-gray-400 text-sm">No. All calculations happen locally in your browser. We do not collect or store any personal information. See our Privacy Policy for details.</p>
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm mb-1">Can I suggest a new feature?</h3>
                  <p className="text-gray-400 text-sm">Absolutely! Use the contact form and select "Feature Request". We read every message.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-blue-200 font-semibold mb-2">About This Site</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Sleep Cycle Calculator (findsleeptime.com) is dedicated to helping people understand and optimize their sleep. Our tools are built on established sleep science to help you wake up refreshed every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
      }
