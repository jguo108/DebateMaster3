'use client';

import React from 'react';
import Link from 'next/link';
import { Rocket, HelpCircle, Eye } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] dark:bg-[#101622] font-sans text-slate-900 dark:text-slate-100 flex flex-col">
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
        <div className="max-w-[480px] w-full flex flex-col">
          <div className="mb-6">
            <div 
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-2xl min-h-[200px] bg-[#0d59f2]/10 border-4 border-white dark:border-slate-800 shadow-xl" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3xckRuVqpD2cRSjyywq_ipUUDqA6ixlZPa9wkD0QaW72LQUek2fZ59mMb8pYTzpb1SDa8q7flHDrtdJTC_D4Mad1rfwQYBkCgQhzyGBGFQ2-CExrfBRdT-YPFqjxIXnnr4RRroz3Ttl2Ldq4WdUjQrAaEufXOGaUopfLwk37ax-wbT8kMW6EPmb2p6OPShsi9rLVchZLmF_X-R6B-g3FEbhLVTEm203qCuG9EhFPjOAJNYYHbIig6hTcSulS5VrtiBYhO2O8QYeY")' }}
            />
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">Join the Club!</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Create your account to start sharing your big ideas.</p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 ml-1">
                <span className="material-symbols-outlined text-[#0d59f2]">face</span>
                <label className="text-base font-bold">Pick a cool username</label>
              </div>
              <input 
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-14 px-5 text-base focus:ring-2 focus:ring-[#0d59f2]/20 focus:border-[#0d59f2] outline-none transition-all" 
                placeholder="e.g. BrainyOwl42"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 ml-1">
                <span className="material-symbols-outlined text-[#0d59f2]">mail</span>
                <label className="text-base font-bold">Parent&apos;s Email</label>
              </div>
              <input 
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-14 px-5 text-base focus:ring-2 focus:ring-[#0d59f2]/20 focus:border-[#0d59f2] outline-none transition-all" 
                placeholder="mom-or-dad@email.com" 
                type="email"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 ml-1">
                <span className="material-symbols-outlined text-[#0d59f2]">lock</span>
                <label className="text-base font-bold">Secret Password</label>
              </div>
              <div className="relative">
                <input 
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-14 px-5 pr-12 text-base focus:ring-2 focus:ring-[#0d59f2]/20 focus:border-[#0d59f2] outline-none transition-all" 
                  placeholder="Make it strong!" 
                  type="password"
                  required
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Eye className="size-5" />
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 px-1 py-2">
              <input className="mt-1 h-5 w-5 rounded border-slate-300 text-[#0d59f2] focus:ring-[#0d59f2] cursor-pointer" id="terms" type="checkbox" required/>
              <label className="text-sm text-slate-500 dark:text-slate-400 leading-snug cursor-pointer" htmlFor="terms">
                I agree to the <Link href="#" className="text-[#0d59f2] font-bold hover:underline">Club Rules</Link> and my parent says it&apos;s okay for me to join.
              </label>
            </div>

            <button 
              className="w-full bg-[#0d59f2] hover:bg-[#0d59f2]/90 text-white text-xl font-black h-16 rounded-xl shadow-xl shadow-[#0d59f2]/25 transition-all transform active:scale-[0.98]" 
              type="submit"
            >
              Ready, Set, Debate!
            </button>
          </form>

          <div className="mt-10 mb-10 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Already a member? 
              <Link href="/" className="text-[#0d59f2] font-black hover:underline ml-1">Log in here</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
