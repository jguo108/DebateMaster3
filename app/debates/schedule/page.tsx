'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { MOCK_FRIENDS, cn } from '@/lib/utils';
import { 
  Rocket, 
  Search, 
  X, 
  MessageSquare, 
  UserPlus,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ScheduleDebatePage() {
  const [opponentType, setOpponentType] = useState<'ai' | 'friend'>('ai');
  const [selectedAI, setSelectedAI] = useState('Kimi');
  const [selectedFriend, setSelectedFriend] = useState(MOCK_FRIENDS[1].id);
  const [duration, setDuration] = useState('10 mins');
  const [topic, setTopic] = useState('');

  return (
    <div className="flex h-screen bg-[#f5f6f8] dark:bg-[#101622]">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8 flex justify-center">
        <div className="max-w-[960px] w-full flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-10 py-6">
            <div className="flex items-center gap-4">
              <div className="text-[#0d59f2]">
                <MessageSquare className="size-8" />
              </div>
              <h2 className="text-2xl font-black tracking-tight">Schedule a Debate</h2>
            </div>
            <Link 
              href="/dashboard"
              className="flex items-center justify-center rounded-full h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="size-5" />
            </Link>
          </header>

          <div className="flex px-10 py-8">
            <div className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 p-1.5">
              <button 
                onClick={() => setOpponentType('ai')}
                className={cn(
                  "flex h-full grow items-center justify-center rounded-xl px-4 text-sm font-bold transition-all",
                  opponentType === 'ai' 
                    ? "bg-white dark:bg-slate-700 shadow-sm text-[#0d59f2]" 
                    : "text-slate-500 dark:text-slate-400"
                )}
              >
                AI Opponent
              </button>
              <button 
                onClick={() => setOpponentType('friend')}
                className={cn(
                  "flex h-full grow items-center justify-center rounded-xl px-4 text-sm font-bold transition-all",
                  opponentType === 'friend' 
                    ? "bg-white dark:bg-slate-700 shadow-sm text-[#0d59f2]" 
                    : "text-slate-500 dark:text-slate-400"
                )}
              >
                Friend Opponent
              </button>
            </div>
          </div>

          <div className="space-y-10 px-10 pb-12">
            {opponentType === 'ai' ? (
              <section>
                <h3 className="text-lg font-black mb-5">Select AI Model</h3>
                <div className="flex gap-4 flex-wrap">
                  {['Kimi', 'Llama', 'Mistral'].map((model) => (
                    <button
                      key={model}
                      onClick={() => setSelectedAI(model)}
                      className={cn(
                        "flex h-12 items-center justify-center px-8 rounded-xl border-2 transition-all font-bold text-sm",
                        selectedAI === model
                          ? "border-[#0d59f2] bg-[#0d59f2]/10 text-[#0d59f2]"
                          : "border-transparent bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      )}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </section>
            ) : (
              <section>
                <h3 className="text-lg font-black mb-5">Select Friend</h3>
                <div className="relative mb-8">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                  <input 
                    className="w-full h-14 pl-12 pr-4 rounded-2xl border-none bg-slate-100 dark:bg-slate-800 text-base focus:ring-2 focus:ring-[#0d59f2]/20 transition-all" 
                    placeholder="Search friends by name or ID..." 
                    type="search"
                  />
                </div>
                <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
                  {MOCK_FRIENDS.slice(0, 4).map((friend) => (
                    <button
                      key={friend.id}
                      onClick={() => setSelectedFriend(friend.id)}
                      className="flex flex-col items-center min-w-[80px] group"
                    >
                      <div className={cn(
                        "w-20 h-20 rounded-full border-4 transition-all overflow-hidden mb-3 relative",
                        selectedFriend === friend.id
                          ? "border-[#0d59f2] ring-4 ring-[#0d59f2]/10"
                          : "border-transparent bg-slate-100 dark:bg-slate-800"
                      )}>
                        <Image src={friend.avatar} alt={friend.name} fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <span className={cn(
                        "text-sm font-bold transition-colors",
                        selectedFriend === friend.id ? "text-[#0d59f2]" : "text-slate-500 dark:text-slate-400"
                      )}>
                        {friend.name}
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section>
              <div className="flex justify-between items-end mb-5">
                <h3 className="text-lg font-black">Debate Topic</h3>
                <span className="text-xs text-slate-400 font-bold">{topic.length} / 100 characters</span>
              </div>
              <textarea 
                value={topic}
                onChange={(e) => setTopic(e.target.value.slice(0, 100))}
                className="w-full min-h-[120px] rounded-2xl border-none bg-slate-100 dark:bg-slate-800 p-5 text-base placeholder:text-slate-400 focus:ring-2 focus:ring-[#0d59f2]/20 transition-all resize-none" 
                placeholder="What is the topic of discussion? (e.g., The impact of remote work on productivity)"
              />
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-lg font-black mb-5">Schedule Date</h3>
                <input 
                  className="w-full h-14 rounded-2xl border-none bg-slate-100 dark:bg-slate-800 px-5 text-base focus:ring-2 focus:ring-[#0d59f2]/20 transition-all [color-scheme:light] dark:[color-scheme:dark]" 
                  type="date"
                />
              </section>
              <section>
                <h3 className="text-lg font-black mb-5">Schedule Time</h3>
                <input 
                  className="w-full h-14 rounded-2xl border-none bg-slate-100 dark:bg-slate-800 px-5 text-base focus:ring-2 focus:ring-[#0d59f2]/20 transition-all [color-scheme:light] dark:[color-scheme:dark]" 
                  type="time"
                />
              </section>
            </div>

            <section>
              <h3 className="text-lg font-black mb-5">Debate Duration</h3>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {['1 min', '5 mins', '10 mins', '30 mins', '60 mins'].map((time) => (
                  <button
                    key={time}
                    onClick={() => setDuration(time)}
                    className={cn(
                      "px-6 py-3 rounded-full border-2 transition-all font-bold text-sm whitespace-nowrap",
                      duration === time
                        ? "border-[#0d59f2] bg-[#0d59f2]/10 text-[#0d59f2]"
                        : "border-transparent bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </section>

            <div className="flex justify-center pt-8">
              <button 
                onClick={() => window.location.href = `/debates/arena?id=${opponentType === 'ai' ? 'ai' : 'friend'}`}
                className="h-16 bg-[#0d59f2] text-white font-black text-xl rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 px-16 shadow-2xl shadow-[#0d59f2]/30"
              >
                <Rocket className="size-6" />
                {opponentType === 'ai' ? 'Start Debate' : 'Initiate Debate'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
