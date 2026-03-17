'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import { MOCK_DEBATES } from '@/lib/utils';
import { 
  Search, 
  Filter, 
  Plus, 
  Clock, 
  CheckCircle2,
  PlayCircle,
  Calendar
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function DebatesPage() {
  return (
    <div className="flex h-screen bg-[#f5f6f8] dark:bg-[#101622]">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">My Debates</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Manage your scheduled and active arguments.</p>
          </div>
          
          <Link 
            href="/debates/schedule"
            className="bg-[#0d59f2] hover:bg-blue-700 text-white rounded-2xl py-4 px-8 flex items-center justify-center gap-3 font-black text-base shadow-lg transition-all"
          >
            <Plus className="size-6" />
            NEW DEBATE
          </Link>
        </header>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            <input 
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-2 focus:ring-[#0d59f2]/20 transition-all" 
              placeholder="Search by topic or opponent..." 
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <Filter className="size-4" />
            <span>Filter</span>
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {MOCK_DEBATES.map((debate) => (
            <div key={debate.id} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col sm:flex-row">
              <div className="w-full sm:w-48 h-48 sm:h-auto relative shrink-0">
                <Image src={debate.image || debate.opponentAvatar || 'https://picsum.photos/seed/debate/200/200'} alt={debate.topic} fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm",
                    debate.status === 'active' ? "bg-red-500 text-white" : "bg-blue-500 text-white"
                  )}>
                    {debate.status}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-[#0d59f2] uppercase tracking-widest">{debate.category}</span>
                    <span className="size-1 rounded-full bg-slate-300"></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">vs {debate.opponent}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-3">
                    {debate.topic}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    {debate.status === 'active' ? <Clock className="size-4 text-red-500" /> : <Calendar className="size-4" />}
                    <span className="text-xs font-bold">{debate.status === 'active' ? `${debate.timeRemaining} left` : debate.time}</span>
                  </div>
                  
                  <Link 
                    href={debate.status === 'active' ? `/debates/arena?id=${debate.id}` : `/debates/arena?id=${debate.id}`}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2 rounded-xl font-black text-sm transition-all",
                      debate.status === 'active' 
                        ? "bg-red-500 text-white shadow-lg shadow-red-500/20 hover:bg-red-600" 
                        : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-[#0d59f2] hover:text-white"
                    )}
                  >
                    {debate.status === 'active' ? <PlayCircle className="size-4" /> : <CheckCircle2 className="size-4" />}
                    <span>{debate.status === 'active' ? 'JOIN NOW' : 'VIEW DETAILS'}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
