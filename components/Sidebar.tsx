'use client';

import React from 'react';
import { cn, MOCK_USER } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Swords, 
  History, 
  Users, 
  Settings,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Debates', icon: Swords, href: '/debates' },
    { name: 'History', icon: History, href: '/history' },
    { name: 'Network', icon: Users, href: '/network' },
  ];

  return (
    <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col p-6 shrink-0 h-screen sticky top-0 z-50">
      <Link href="/dashboard" className="flex items-center gap-3 mb-10 px-2 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="bg-[#0d59f2] p-2 rounded-xl text-white">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
        </div>
        <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">DebateHub</h2>
      </Link>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-4 rounded-xl transition-all cursor-pointer relative z-10",
                isActive 
                  ? "bg-[#0d59f2] text-white shadow-lg shadow-[#0d59f2]/20" 
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
            >
              <item.icon className={cn("size-5", isActive ? "fill-current" : "")} />
              <span className={cn("font-semibold", isActive ? "font-bold" : "")}>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6">
        <div className="flex items-center gap-3 px-3 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <div className="size-10 rounded-full overflow-hidden shrink-0 border-2 border-[#0d59f2]/20 relative">
            <Image 
              src={MOCK_USER.avatar} 
              alt="User Avatar" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white truncate">{MOCK_USER.username}</h2>
            <span className="text-[#0d59f2] text-[10px] font-bold uppercase tracking-wider leading-none">{MOCK_USER.level}</span>
          </div>
          <button className="ml-auto text-slate-400 hover:text-slate-600">
            <Settings className="size-4" />
          </button>
        </div>
        <Link href="/" className="mt-4 flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors px-3 py-2 text-sm font-medium">
          <LogOut className="size-4" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
