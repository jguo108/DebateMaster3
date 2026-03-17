'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Rocket, HelpCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] dark:bg-[#101622] flex flex-col">
      <header className="flex items-center justify-between px-6 md:px-10 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="bg-[#0d59f2] p-2 rounded-lg text-white">
            <Rocket className="size-6" />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">DebateKids</h2>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0d59f2]/10 text-[#0d59f2] rounded-xl font-bold text-sm hover:bg-[#0d59f2]/20 transition-colors">
          <HelpCircle className="size-4" />
          <span>Help</span>
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
          <div className="hidden md:flex flex-col justify-between p-12 bg-[#0d59f2]/5 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                Master the art of <span className="text-[#0d59f2]">persuasion.</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
                Join thousands of young debaters learning to think critically and speak confidently.
              </p>
            </div>
            <div className="mt-12 rounded-2xl overflow-hidden aspect-video relative z-10 shadow-2xl border-4 border-white dark:border-slate-800">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS91_YvC4lnk28cCL8jU1k7siD5_KAz7P1UTKcrjX0AcfsvIr1NJA-zfxTZOQghHxAXnSDxqQLCGpK4zINn_ollhi6wJemSxFHdRn3NXOkt0v8b6el_MlkBRqhwFlxRBOXOW1DRkx8GATlFz15ZY1rWe7GWJDX2NdNcn3uKXCG2KXWjzm-7le8sjA60u78Z1D6tka0txdOy6sHV6r_kHtaSYWuxEcoOLerLnhzQbomU8nWVlQUbMTxqp1w5sIJcTBQm2K-ouO8ML4" 
                alt="Kids Debating" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d59f2]/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#0d59f2]/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#0d59f2]/20 rounded-full blur-3xl"></div>
          </div>

          <div className="p-8 md:p-16 flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-3">Welcome Back!</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg">Ready to sharpen your arguments?</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email or Username</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0d59f2]">person</span>
                  <input 
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0d59f2]/20 focus:border-[#0d59f2] outline-none transition-all" 
                    placeholder="Enter your username" 
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
                  <Link href="#" className="text-xs font-bold text-[#0d59f2] hover:underline">Forgot password?</Link>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0d59f2]">lock</span>
                  <input 
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0d59f2]/20 focus:border-[#0d59f2] outline-none transition-all" 
                    placeholder="••••••••" 
                    type="password"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 px-1">
                <input className="rounded border-slate-300 text-[#0d59f2] focus:ring-[#0d59f2] cursor-pointer" id="remember" type="checkbox"/>
                <label className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="remember">Keep me logged in</label>
              </div>
              <button 
                className="w-full bg-[#0d59f2] hover:bg-[#0d59f2]/90 text-white font-black py-5 rounded-xl shadow-xl shadow-[#0d59f2]/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3" 
                type="submit"
              >
                <span>Login to Dashboard</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-slate-500 dark:text-slate-400">
                New to DebateKids? 
                <Link href="/signup" className="text-[#0d59f2] font-black hover:underline ml-1">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-8 text-center">
        <p className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-widest font-bold">© 2024 DebateKids — The Future of Discourse</p>
      </footer>
    </div>
  );
}
