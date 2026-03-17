'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import { MOCK_FRIENDS, cn } from '@/lib/utils';
import { 
  Search, 
  UserPlus, 
  MessageSquare, 
  MoreVertical,
  Users,
  Globe,
  Star,
  Zap
} from 'lucide-react';

export default function NetworkPage() {
  return (
    <div className="flex h-screen bg-[#f5f6f8] dark:bg-[#101622]">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">My Network</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Connect with other debaters and build your team.</p>
          </div>
          
          <button className="bg-[#0d59f2] hover:bg-blue-700 text-white rounded-2xl py-4 px-8 flex items-center justify-center gap-3 font-black text-base shadow-lg transition-all">
            <UserPlus className="size-6" />
            FIND NEW FRIENDS
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                <input 
                  className="w-full h-14 pl-12 pr-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-base focus:ring-2 focus:ring-[#0d59f2]/20 transition-all" 
                  placeholder="Search by name, ID, or school..." 
                />
              </div>
              <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <button className="px-6 py-2.5 rounded-xl bg-[#0d59f2] text-white font-black text-sm">All Friends</button>
                <button className="px-6 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Requests (2)</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {MOCK_FRIENDS.map((friend) => (
                <div key={friend.id} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 hover:shadow-md transition-all group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className="size-20 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg relative">
                        <Image src={friend.avatar} alt={friend.name} fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <span className={cn(
                        "absolute -bottom-1 -right-1 size-5 rounded-full border-4 border-white dark:border-slate-900",
                        friend.online ? "bg-green-500" : "bg-slate-300"
                      )}></span>
                    </div>
                    <button className="text-slate-300 hover:text-slate-600 dark:hover:text-slate-400">
                      <MoreVertical className="size-5" />
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">{friend.name}</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {friend.online ? 'Online Now' : `Last seen ${friend.lastSeen}`}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 text-center">
                      <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Level</p>
                      <p className="text-sm font-black text-slate-900 dark:text-white">12</p>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 text-center">
                      <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Win Rate</p>
                      <p className="text-sm font-black text-slate-900 dark:text-white">74%</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-[#0d59f2] hover:bg-blue-700 text-white font-black py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2">
                      <Zap className="size-4" />
                      CHALLENGE
                    </button>
                    <button className="size-12 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <MessageSquare className="size-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Globe className="size-5 text-[#0d59f2]" />
                Global Rankings
              </h2>
              <div className="space-y-6">
                {[
                  { rank: 1, name: 'DebateKing', points: '42,500', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg5WUZo-T3d02IgfApXY7HseM_oOti3TbRVymuGiSvOz5bL6EmP3BuWAEQWgt4LEZfGavBQ5-6WjeAvJws40UB9rrGuonb8YY_pgDLVafmkKAlINZA11MEkE3CeQ_TDj3c36XkJ1tVpDQcYaiQ0jDEnW8t93m23BirmXE4kzxu1wxF19jDMODdRBkq2Owc3E7QnwC-FoUEiaP4b2UEg-Qmkf8to4Mlk7Vek2jG49f2xV4wLCZK2Y7MtwBgAlPBPAuPwgRm4009Dso' },
                  { rank: 2, name: 'LogicQueen', points: '38,200', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr4faittLMkZ16mOM37marZ2QEReWr_QA36iynwn7Y7hqCg80V-OotOMtonyahtAaA1BhAn8zi6FR8gpW0R5tZRgF3rEF_uOcYjZ323YRX3LjBB2qEtqidlHS6tpU9UP8_Sg3kt6UW6DyWBKT9Dnm2veg0QaqR-X7ubxQO6RbgvuRmCPYdVgaLDjeOulYH9xa6Q3p8a2GzKFx8MHsx2gZnH1-4nsgub5QaNXu8N9hM5iZefyMq0Tg_3vuQR7HV6qc_omh-rjI90s0' },
                  { rank: 3, name: 'Brainiac', points: '35,900', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3xckRuVqpD2cRSjyywq_ipUUDqA6ixlZPa9wkD0QaW72LQUek2fZ59mMb8pYTzpb1SDa8q7flHDrtdJTC_D4Mad1rfwQYBkCgQhzyGBGFQ2-CExrfBRdT-YPFqjxIXnnr4RRroz3Ttl2Ldq4WdUjQrAaEufXOGaUopfLwk37ax-wbT8kMW6EPmb2p6OPShsi9rLVchZLmF_X-R6B-g3FEbhLVTEm203qCuG9EhFPjOAJNYYHbIig6hTcSulS5VrtiBYhO2O8QYeY' },
                ].map((top) => (
                  <div key={top.rank} className="flex items-center gap-4">
                    <span className={cn(
                      "size-6 rounded-full flex items-center justify-center text-[10px] font-black",
                      top.rank === 1 ? "bg-yellow-400 text-yellow-900" : 
                      top.rank === 2 ? "bg-slate-300 text-slate-700" : "bg-orange-300 text-orange-900"
                    )}>
                      {top.rank}
                    </span>
                    <div className="size-10 rounded-full bg-slate-100 relative overflow-hidden">
                      <Image src={top.avatar} alt={top.name} fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{top.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{top.points} pts</p>
                    </div>
                    {top.rank === 1 && <Star className="size-4 text-yellow-400 fill-yellow-400" />}
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-black text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                VIEW LEADERBOARD
              </button>
            </section>

            <section className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl shadow-purple-500/20 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 leading-tight">Create a Debate Club</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">Gather your friends, host private tournaments, and climb the club rankings together!</p>
                <button className="bg-white text-purple-600 font-black py-3 px-8 rounded-xl text-sm hover:scale-105 transition-transform">
                  Get Started
                </button>
              </div>
              <Users className="absolute -right-6 -bottom-6 size-32 text-white/10 -rotate-12" />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
