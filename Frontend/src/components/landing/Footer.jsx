import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin, ArrowRight, ShieldCheck, Mail, Activity } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#EADBC8] pt-24 pb-10 px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-teal-500/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Massive Footer CTA (Pre-Footer) */}
        <div className="w-full text-center mb-24 reveal-up">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Ready to commandeer the <br className="hidden md:block"/> manufacturing floor?
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join the elite tier of engineers shipping uncompromising hardware. Deploy PLM to an unshakeable fault-tolerant cluster today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login" className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all">
              Launch Enterprise Trial
            </Link>
            <button className="px-8 py-4 rounded-xl text-slate-900 bg-white/50 hover:bg-white/80 border border-black/10 font-bold text-lg transition-colors">
              Talk to Architect
            </button>
          </div>
        </div>

        {/* Top dividing line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mb-16" />

        {/* Main Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20 text-left">
          
          {/* Brand/Mission */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 group mb-6 inline-flex">
              <div className="w-12 h-12 flex items-center justify-center transition-transform hover:scale-105 duration-300 bg-white/50 border border-black/10 rounded-2xl shadow-sm">
                <img src="/logo.svg" alt="PLM Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900 flex items-center">
                PLM
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-8 pr-4">
              The premier fault-tolerant Product Lifecycle Management infrastructure. Engineered exclusively for enterprise manufacturing scale, BoM integrity, and ECO velocity.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-white/30 flex items-center justify-center text-slate-500 hover:text-teal-700 hover:bg-teal-500/10 hover:border-teal-500/30 border border-black/5 transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Links - Platform */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-6">
            <h4 className="text-slate-900 font-bold tracking-widest uppercase text-xs mb-6">Platform</h4>
            <ul className="space-y-4">
              {['Change Control (ECO)', 'BoM Versioning', 'Dual-DB Failover', 'SLA Timers', 'EmailJS Serverless', 'PDF Export Engine'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Resources */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-slate-900 font-bold tracking-widest uppercase text-xs mb-6">Resources</h4>
            <ul className="space-y-4">
              {['API Documentation', 'System Architecture', 'Security Whitepaper', 'Odoo Hackathon Profile', 'Customer Stories'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-12 lg:col-span-3">
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-black/5 shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-teal-700">
                <Mail size={18} />
                <h4 className="font-bold text-sm">Engineering Digest</h4>
              </div>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Receive unadulterated systems insights and hardware workflow algorithms directly to your terminal. Zero spam.
              </p>
              <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter business email" 
                    className="w-full bg-white/60 border border-black/10 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white group flex items-center justify-center gap-2 hover:bg-slate-800 px-4 py-3 rounded-xl font-bold transition-all text-sm">
                  Subscribe <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Trust Badges */}
        <div className="w-full flex flex-wrap justify-between items-center gap-6 py-8 border-t border-black/5">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-slate-600">
              <ShieldCheck size={18} className="text-teal-600" />
              <span className="text-xs font-bold tracking-widest uppercase">ISO 27001 Ready</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-slate-600">
              <Activity size={18} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                Systems: <span className="text-emerald-600">Operational</span>
              </span>
            </div>
          </div>
          
          <div className="flex gap-6 text-xs font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Legal</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-center pt-8 pb-4">
          <p className="text-slate-500 text-xs tracking-wider">
            © 2026 PLM Enterprise by ERP Titans. Securely engineered for the Odoo x Gujarat Vidyapith Hackathon 🏆
          </p>
        </div>

      </div>
    </footer>
  )
}
