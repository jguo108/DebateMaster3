'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import { MOCK_HISTORY, cn } from '@/lib/utils';
import { 
  Search, 
  Calendar, 
  Trophy, 
  Frown, 
  Minus,
  ChevronRight,
  Download,
  Share2
} from 'lucide-react';
import Link from 'next/link';

export default function HistoryPage() {
  return (
    <div className="flex h-screen bg-[#f5f6f8] dark:bg-[#101622]">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Debate History</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Review your past performances and learn from feedback.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Download className="size-5" />
            </button>
            <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Share2 className="size-5" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">Total Wins</p>
            <p className="text-3xl font-black text-green-600">28</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">Total Losses</p>
            <p className="text-3xl font-black text-red-600">12</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">Avg. Score</p>
            <p className="text-3xl font-black text-blue-600">82%</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">Current Rank</p>
            <p className="text-3xl font-black text-yellow-600">#42</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">Recent Sessions</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input 
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-slate-100 dark:bg-slate-800 border-none text-sm focus:ring-2 focus:ring-[#0d59f2]/20 transition-all" 
                placeholder="Search history..." 
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Debate Topic</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Opponent</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Result</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Score</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {MOCK_HISTORY.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-5">
                      <p className="font-bold text-slate-900 dark:text-white line-clamp-1">{item.topic}</p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{item.opponent}</p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <Calendar className="size-3.5" />
                        <span className="text-xs font-medium">{item.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                        item.result === 'win' ? "bg-green-100 text-green-700" : 
                        item.result === 'loss' ? "bg-red-100 text-red-700" : "bg-slate-100 text-slate-700"
                      )}>
                        {item.result === 'win' ? <Trophy className="size-3" /> : 
                         item.result === 'loss' ? <Frown className="size-3" /> : <Minus className="size-3" />}
                        {item.result}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-black text-slate-900 dark:text-white">{item.score}</p>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <Link 
                        href={`/history/verdict?id=${item.id}`}
                        className="inline-flex items-center justify-center size-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-[#0d59f2] group-hover:text-white transition-all"
                      >
                        <ChevronRight className="size-5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Showing 3 of 42 debates</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-400 cursor-not-allowed">Previous</button>
              <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
