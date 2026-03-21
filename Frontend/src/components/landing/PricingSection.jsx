import React from 'react'
import { motion } from 'framer-motion'
import { Check, Shield, Zap, Building } from 'lucide-react'
import TealButton from './ui/TealButton'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#EADBC8]">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#DDCAB5] to-transparent pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 reveal-up">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-4 border border-teal-500/20">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Enterprise-Grade Pricing.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Transparent, predictable, and tailored for manufacturing scale.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Pro Tier */}
          <div className="reveal-up bg-white/40 backdrop-blur-xl border border-black/5 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl hover:border-teal-500/30 transition-all duration-300 relative group">
            <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional</h3>
            <p className="text-slate-600 mb-6">For growing engineering hardware teams tracking components.</p>
            
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-slate-900 tracking-tight">$499</span>
              <span className="text-slate-500 font-medium">/month</span>
            </div>
            
            <ul className="space-y-4 mb-10">
              {[
                'Up to 50 active engineering users',
                'Unlimited Bills of Materials',
                'Advanced ECO tracking & approvals',
                'Standard 8-hour SLA timers',
                'PDF Export Engine',
                'EmailJS Integration'
              ].map(feat => (
                <li key={feat} className="flex items-start gap-4 text-slate-700">
                  <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/20 text-teal-700">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="font-medium text-sm text-slate-800">{feat}</span>
                </li>
              ))}
            </ul>
            
            <TealButton className="w-full justify-center py-4 text-lg">Start 14-Day Free Trial</TealButton>
          </div>

          {/* Enterprise Tier */}
          <div className="reveal-up bg-[#1E2024] border border-[#2A2E35] rounded-3xl p-8 md:p-12 shadow-2xl relative group overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-teal-500/20 transition-colors" />

            <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-[#2A2E35] border border-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Building size={24} />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-widest mb-4 border border-teal-500/30">
              Most Selected
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise PLM</h3>
            <p className="text-slate-400 mb-6">Unrestricted scale with dual-database auto-failover.</p>
            
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white tracking-tight">Custom</span>
              <span className="text-slate-400 font-medium ml-2">/annual</span>
            </div>
            
            <ul className="space-y-4 mb-10">
              {[
                'Unlimited global user accounts',
                'Dual-DB Auto-Failover (PG + Mongo)',
                'Dynamic Visual Image Diffing',
                'Configurable SLA Escalations',
                'Hardware SSO Integration',
                '24/7 Dedicated Account Manager'
              ].map(feat => (
                <li key={feat} className="flex items-start gap-4 text-slate-300">
                  <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#2A2E35] text-green-400 border border-white/10">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="font-medium text-sm">{feat}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full justify-center py-4 text-lg bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white font-bold transition-colors">
              Contact Sales
            </button>
          </div>

        </div>

        {/* Security Badge */}
        <div className="mt-16 flex justify-center reveal-up">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 border border-black/5 backdrop-blur-md">
            <Shield className="text-teal-600" size={20} />
            <span className="text-sm font-semibold text-slate-800">Bank-level 256-bit encryption on all Enterprise plans.</span>
          </div>
        </div>

      </div>
    </section>
  )
}
