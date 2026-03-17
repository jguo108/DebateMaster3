'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import { MOCK_USER, MOCK_DEBATES, MOCK_FRIENDS } from '@/lib/utils';
import { 
  Trophy, 
  Flame, 
  BookOpen, 
  TrendingUp, 
  Calendar,
  MoreHorizontal,
  ThumbsUp,
  PartyPopper,
  PlusCircle,
  Star
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#f5f6f8] dark:bg-[#101622]">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
              Welcome back, Champ! 🏆
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Ready for your next big argument today?</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-2 pr-6 rounded-full shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full">
                <Star className="size-5 text-yellow-600 fill-yellow-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">Total Points</p>
                <p className="text-lg font-black text-slate-900 dark:text-white leading-tight">{MOCK_USER.points.toLocaleString()}</p>
              </div>
            </div>
            
            <Link 
              href="/debates/schedule"
              className="bg-[#0d59f2] hover:bg-blue-700 text-white rounded-2xl py-4 px-8 flex items-center justify-center gap-3 font-black text-base shadow-2xl shadow-[#0d59f2]/40 transition-all hover:-translate-y-1 active:scale-95 group"
            >
              <PlusCircle className="size-6 group-hover:rotate-90 transition-transform" />
              START NEW DEBATE
            </Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="size-14 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <Flame className="size-8 text-orange-600 fill-orange-600" />
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 font-semibold text-sm">Win Streak</p>
              <p className="text-3xl font-black text-slate-900 dark:text-white leading-none">{MOCK_USER.winStreak} 🔥</p>
              <p className="text-green-500 text-xs font-bold mt-1">+1 Today</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="size-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <BookOpen className="size-8 text-blue-600" />
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 font-semibold text-sm">Debates Done</p>
              <p className="text-3xl font-black text-slate-900 dark:text-white leading-none">{MOCK_USER.debatesDone}</p>
              <p className="text-blue-500 text-xs font-bold mt-1">+3 this week</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="size-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <TrendingUp className="size-8 text-purple-600" />
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 font-semibold text-sm">Win Rate</p>
              <p className="text-3xl font-black text-slate-900 dark:text-white leading-none">{MOCK_USER.winRate}</p>
              <p className="text-purple-500 text-xs font-bold mt-1">Master Class</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Upcoming Debates</h2>
              <button className="text-[#0d59f2] font-bold text-sm hover:underline">View Calendar</button>
            </div>
            
            <div className="space-y-4">
              {MOCK_DEBATES.filter(d => d.status === 'scheduled').map((debate) => (
                <div key={debate.id} className="group flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                  <div className="size-20 rounded-xl overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800 relative">
                    <Image src={debate.image || debate.opponentAvatar || 'https://picsum.photos/seed/debate/200/200'} alt={debate.topic} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-extrabold uppercase mb-1">
                      {debate.id === 'd2' ? 'Live Tomorrow' : 'Friday Slot'}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{debate.topic}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{debate.time} • VS {debate.opponent}</p>
                  </div>
                  <Link 
                    href={`/debates/arena?id=${debate.id}`}
                    className="px-5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm hover:bg-[#0d59f2] hover:text-white transition-colors"
                  >
                    Prepare
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6">Recent Performance</h2>
              <div className="bg-[#0d59f2]/5 rounded-2xl p-8 border-2 border-dashed border-[#0d59f2]/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="size-5 text-[#0d59f2]" />
                    <span className="font-bold text-slate-700 dark:text-slate-300 uppercase text-xs tracking-widest">Growth Mindset</span>
                  </div>
                  <span className="text-green-600 font-bold">+24 Skill Points</span>
                </div>
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0d59f2] rounded-full w-3/4"></div>
                </div>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  You&apos;re <b>450 points</b> away from <span className="text-[#0d59f2] font-bold">Expert Orator</span> badge!
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Friend Activity</h2>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreHorizontal className="size-5" />
              </button>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-8">
              <div className="flex gap-4">
                <div className="relative">
                  <Image src={MOCK_FRIENDS[4].avatar} alt="Sophie" width={40} height={40} className="rounded-full bg-slate-100" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Sophie <span className="font-normal text-slate-500">just won a debate on</span> Space Travel
                  </p>
                  <span className="text-[10px] text-slate-400 font-medium">2m ago</span>
                </div>
                <button className="text-[#0d59f2] hover:scale-110 transition-transform">
                  <ThumbsUp className="size-5" />
                </button>
              </div>

              <div className="flex gap-4">
                <div className="relative">
                  <Image src={MOCK_FRIENDS[5].avatar} alt="Marcus" width={40} height={40} className="rounded-full bg-slate-100" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-0 right-0 size-3 bg-slate-300 border-2 border-white dark:border-slate-900 rounded-full"></span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Marcus <span className="font-normal text-slate-500">leveled up to</span> Level 10
                  </p>
                  <span className="text-[10px] text-slate-400 font-medium">1h ago</span>
                </div>
                <button className="text-[#0d59f2] hover:scale-110 transition-transform">
                  <PartyPopper className="size-5" />
                </button>
              </div>

              <div className="flex gap-4">
                <div className="relative">
                  <Image src={MOCK_FRIENDS[6].avatar} alt="Jamie" width={40} height={40} className="rounded-full bg-slate-100" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Jamie <span className="font-normal text-slate-500">is looking for an opponent!</span>
                  </p>
                  <span className="text-[10px] text-slate-400 font-medium">Now</span>
                </div>
                <button className="bg-[#0d59f2]/10 text-[#0d59f2] font-extrabold text-[10px] px-3 py-1 rounded-full hover:bg-[#0d59f2] hover:text-white transition-all">
                  CHALLENGE
                </button>
              </div>
            </div>

            <div className="mt-8 relative overflow-hidden bg-[#0d59f2] rounded-3xl p-8 text-white shadow-2xl shadow-[#0d59f2]/30">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-3 leading-tight">Join the Summer Nationals!</h3>
                <p className="text-base text-white/80 mb-6">Registration closes in 3 days. Show them what you&apos;ve got!</p>
                <button className="bg-white text-[#0d59f2] font-black py-3 px-8 rounded-xl text-sm hover:scale-105 transition-transform">
                  Register Now
                </button>
              </div>
              <Trophy className="absolute -right-4 -bottom-4 size-32 text-white/10 rotate-12" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
