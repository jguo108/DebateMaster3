'use client';

import React, { Suspense } from 'react';
import Sidebar from '@/components/Sidebar';
import { MOCK_HISTORY } from '@/lib/utils';
import { 
  Trophy, 
  ArrowLeft, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  Star,
  Share2,
  Download
} from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

function VerdictContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || 'h1';
  const debate = MOCK_HISTORY.find(h => h.id === id) || MOCK_HISTORY[0];

  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="max-w-[1000px] mx-auto">
        <Link 
          href="/history"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0d59f2] font-bold text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="size-4" />
          BACK TO HISTORY
        </Link>

        <header className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className={cn(
                "px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm",
                debate.result === 'win' ? "bg-green-500 text-white" : "bg-red-500 text-white"
              )}>
                {debate.result === 'win' ? 'VICTORY' : 'DEFEAT'}
              </span>
              <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">{debate.date}</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              {debate.topic}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm text-center min-w-[140px]">
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-1">Final Score</p>
              <p className={cn(
                "text-4xl font-black",
                debate.result === 'win' ? "text-green-600" : "text-red-600"
              )}>{debate.score}</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <MessageSquare className="size-6 text-[#0d59f2]" />
                Judge&apos;s Verdict
              </h2>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed italic">
                  &ldquo;{debate.feedback}&rdquo;
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="size-5 text-green-600" />
                    <h3 className="font-bold text-green-800 dark:text-green-400">Key Strengths</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-green-700 dark:text-green-500 font-medium">
                    <li>• Excellent use of empirical evidence</li>
                    <li>• Strong emotional resonance in opening</li>
                    <li>• Clear and concise rebuttals</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="size-5 text-orange-600" />
                    <h3 className="font-bold text-orange-800 dark:text-orange-400">Areas to Grow</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-500 font-medium">
                    <li>• Watch your pacing in the middle round</li>
                    <li>• Elaborate more on the ethical implications</li>
                    <li>• Maintain eye contact during rebuttals</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center justify-between">
                <span>Debate Transcript</span>
                <button className="text-xs font-bold text-[#0d59f2] hover:underline">Download Full PDF</button>
              </h2>
              <div className="space-y-10">
                {debate.transcript?.map((entry, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800">
                    <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-white dark:bg-slate-900 border-2 border-[#0d59f2]"></div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-black text-[#0d59f2] uppercase tracking-widest">{entry.part}</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">— {entry.speaker}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                      {entry.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <TrendingUp className="size-5 text-[#0d59f2]" />
                Skill Impact
              </h2>
              <div className="space-y-6">
                {[
                  { label: 'Critical Thinking', value: 85, color: 'bg-blue-500' },
                  { label: 'Public Speaking', value: 72, color: 'bg-purple-500' },
                  { label: 'Research Skill', value: 94, color: 'bg-green-500' },
                  { label: 'Persuasion', value: 68, color: 'bg-orange-500' },
                ].map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-slate-500 uppercase tracking-widest">{skill.label}</span>
                      <span className="text-slate-900 dark:text-white">{skill.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full", skill.color)} style={{ width: `${skill.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
                <p className="text-sm font-bold text-slate-900 dark:text-white mb-2">Total XP Earned</p>
                <p className="text-3xl font-black text-[#0d59f2]">+1,250 XP</p>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm text-center">
              <div className="size-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="size-10 text-yellow-600 fill-yellow-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">New Achievement!</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">You&apos;ve unlocked the <b>&ldquo;Logic Master&rdquo;</b> badge for winning 5 debates in a row.</p>
              <div className="flex gap-3">
                <button className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black py-3 rounded-xl text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                  <Share2 className="size-4" />
                  SHARE
                </button>
                <button className="flex-1 bg-[#0d59f2] text-white font-black py-3 rounded-xl text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Download className="size-4" />
                  SAVE
                </button>
              </div>
            </section>

            <div className="bg-[#0d59f2] rounded-3xl p-8 text-white shadow-xl shadow-[#0d59f2]/20 text-center">
              <Trophy className="size-16 mx-auto mb-4 text-white/20" />
              <h3 className="text-xl font-black mb-2">Ready for more?</h3>
              <p className="text-white/80 text-sm mb-6">Schedule your next debate now and keep the streak alive!</p>
              <Link 
                href="/debates/schedule"
                className="block w-full bg-white text-[#0d59f2] font-black py-4 rounded-xl text-sm hover:scale-105 transition-transform"
              >
                START NEW DEBATE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function VerdictPage() {
  return (
    <div className="flex h-screen bg-[#f5f6f8] dark:bg-[#101622]">
      <Sidebar />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center">Loading verdict...</div>}>
        <VerdictContent />
      </Suspense>
    </div>
  );
}
