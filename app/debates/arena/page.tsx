'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MOCK_USER, MOCK_DEBATES, cn } from '@/lib/utils';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  MessageCircle, 
  X, 
  Send,
  MoreVertical,
  Flag,
  Hand,
  Timer,
  Info
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { GoogleGenAI } from "@google/genai";

export default function DebateArenaPage() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, user: 'System', text: 'Welcome to the Debate Arena! Remember to stay respectful.', time: '10:00 AM' },
    { id: 2, user: 'Alex Pro', text: 'Good luck everyone!', time: '10:01 AM' },
  ]);
  const [timeLeft, setTimeLeft] = useState(165); // 2:45 in seconds
  const [isAiDebate, setIsAiDebate] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if it's an AI debate from URL or mock data
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    if (id === 'ai' || (id && id.startsWith('ai-'))) {
      setIsAiDebate(true);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isAiThinking) return;
    
    const userMsg = { 
      id: Date.now(), 
      user: MOCK_USER.username, 
      text: message, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    
    setMessages(prev => [...prev, userMsg]);
    const currentMessage = message;
    setMessage('');

    if (isAiDebate) {
      setIsAiThinking(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '' });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: [
            {
              parts: [{
                text: `You are an expert debater for children aged 8-14. 
                The topic is: "Should homework be replaced with video games?". 
                You are on the Affirmative side (pro-video games). 
                Respond to the user's argument in a fun, educational, and persuasive way. 
                Keep it under 100 words. 
                User said: ${currentMessage}`
              }]
            }
          ],
        });

        const aiText = response.text || "I'm sorry, I couldn't think of a rebuttal!";
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          user: 'Alex Pro (AI)', 
          text: aiText, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        }]);
      } catch (error) {
        console.error("AI Error:", error);
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          user: 'System', 
          text: 'AI opponent is having trouble connecting. Please try again.', 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        }]);
      } finally {
        setIsAiThinking(false);
      }
    }
  };

  return (
    <div className="h-screen bg-[#0f172a] text-white flex flex-col overflow-hidden font-sans">
      <header className="flex items-center justify-between px-6 py-4 bg-slate-900/50 backdrop-blur-md border-b border-white/10 z-10">
        <div className="flex items-center gap-4">
          <div className="bg-[#0d59f2] p-2 rounded-lg">
            <Hand className="size-5" />
          </div>
          <div>
            <h1 className="text-sm font-black tracking-tight uppercase text-white/60">Live Debate</h1>
            <h2 className="text-base font-bold truncate max-w-[300px] md:max-w-md">Should homework be replaced with video games?</h2>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Timer className="size-4 text-[#0d59f2]" />
            <span className="text-lg font-black font-mono">{formatTime(timeLeft)}</span>
          </div>
          <Link 
            href="/dashboard"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl font-black text-sm transition-all flex items-center gap-2"
          >
            <X className="size-4" />
            <span>Leave</span>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex relative">
        <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div className="relative group rounded-3xl overflow-hidden bg-slate-800 border-2 border-white/5 shadow-2xl">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg5WUZo-T3d02IgfApXY7HseM_oOti3TbRVymuGiSvOz5bL6EmP3BuWAEQWgt4LEZfGavBQ5-6WjeAvJws40UB9rrGuonb8YY_pgDLVafmkKAlINZA11MEkE3CeQ_TDj3c36XkJ1tVpDQcYaiQ0jDEnW8t93m23BirmXE4kzxu1wxF19jDMODdRBkq2Owc3E7QnwC-FoUEiaP4b2UEg-Qmkf8to4Mlk7Vek2jG49f2xV4wLCZK2Y7MtwBgAlPBPAuPwgRm4009Dso" 
              alt="Opponent" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="size-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Mic className="size-5 text-white" />
              </div>
              <span className="font-black text-lg drop-shadow-lg">Alex Pro (Affirmative)</span>
            </div>
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 rounded-full bg-red-500/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest">Speaking</span>
            </div>
          </div>

          <div className="relative group rounded-3xl overflow-hidden bg-slate-800 border-2 border-[#0d59f2]/40 shadow-2xl">
            {isVideoOff ? (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-slate-900">
                <div className="size-32 rounded-full bg-slate-800 flex items-center justify-center border-4 border-white/5">
                  <VideoOff className="size-12 text-slate-600" />
                </div>
                <p className="text-slate-500 font-bold">Camera is off</p>
              </div>
            ) : (
              <Image 
                src={MOCK_USER.avatar} 
                alt="You" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className={cn(
                "size-10 rounded-full backdrop-blur-md border flex items-center justify-center transition-all",
                isMuted ? "bg-red-500/20 border-red-500/50" : "bg-white/10 border-white/20"
              )}>
                {isMuted ? <MicOff className="size-5 text-red-500" /> : <Mic className="size-5 text-white" />}
              </div>
              <span className="font-black text-lg drop-shadow-lg">You (Negative)</span>
            </div>
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 rounded-full bg-blue-500/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest">Listening</span>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-900/80 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/10 shadow-2xl z-20">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className={cn(
                "size-14 rounded-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95",
                isMuted ? "bg-red-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              {isMuted ? <MicOff className="size-6" /> : <Mic className="size-6" />}
            </button>
            <button 
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={cn(
                "size-14 rounded-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95",
                isVideoOff ? "bg-red-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              {isVideoOff ? <VideoOff className="size-6" /> : <Video className="size-6" />}
            </button>
            <div className="w-px h-8 bg-white/10 mx-2"></div>
            <button className="size-14 rounded-2xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 active:scale-95">
              <Hand className="size-6" />
            </button>
            <button 
              onClick={() => setChatOpen(!chatOpen)}
              className={cn(
                "size-14 rounded-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 relative",
                chatOpen ? "bg-[#0d59f2] text-white" : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              <MessageCircle className="size-6" />
              {!chatOpen && <span className="absolute top-3 right-3 size-3 bg-red-500 rounded-full border-2 border-slate-900"></span>}
            </button>
            <button className="size-14 rounded-2xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 active:scale-95">
              <MoreVertical className="size-6" />
            </button>
          </div>
        </div>

        {chatOpen && (
          <div className="w-96 bg-slate-900 border-l border-white/10 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="size-5 text-[#0d59f2]" />
                <h3 className="font-black uppercase text-sm tracking-widest">Live Chat</h3>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-white">
                <X className="size-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={cn(
                  "flex flex-col gap-1",
                  msg.user === MOCK_USER.username ? "items-end" : "items-start"
                )}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase">{msg.user}</span>
                    <span className="text-[10px] text-slate-600">{msg.time}</span>
                  </div>
                  <div className={cn(
                    "px-4 py-3 rounded-2xl text-sm max-w-[85%]",
                    msg.user === 'System' 
                      ? "bg-slate-800 text-slate-400 italic text-center w-full" 
                      : msg.user === MOCK_USER.username 
                        ? "bg-[#0d59f2] text-white rounded-tr-none" 
                        : "bg-slate-800 text-white rounded-tl-none"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-6 border-t border-white/10 bg-slate-900/50">
              <div className="relative">
                <input 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isAiThinking}
                  className="w-full bg-slate-800 border-none rounded-xl py-4 pl-4 pr-12 text-sm focus:ring-2 focus:ring-[#0d59f2]/40 transition-all disabled:opacity-50" 
                  placeholder={isAiThinking ? "AI is thinking..." : "Type a message..." }
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 size-10 bg-[#0d59f2] text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Send className="size-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="bg-slate-900/80 border-t border-white/10 px-8 py-3 flex items-center justify-between z-10">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Connection: Excellent</span>
          </div>
          <div className="flex items-center gap-2">
            <Info className="size-4 text-slate-500" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Round 1: Opening Statements</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
            <Flag className="size-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}
