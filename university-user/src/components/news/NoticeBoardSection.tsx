'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { noticesData, examUpdatesData, type NoticeItem } from '@/store';

export default function NoticeBoardSection() {
  const NoticeCard = ({ items, title, bgColor }: { items: NoticeItem[]; title: string; bgColor: string }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer || isPaused) return;

      let scrollInterval: NodeJS.Timeout;
      
      // Auto-scroll every 3 seconds
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 10) {
          // Reset to top when reached bottom
          scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Scroll down smoothly
          scrollContainer.scrollBy({ top: 80, behavior: 'smooth' });
        }
      }, 3000);

      return () => clearInterval(scrollInterval);
    }, [isPaused]);

    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        <div className={`${bgColor} text-white py-5 px-6 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          <h2 className="text-xl font-bold text-center relative z-10 flex items-center justify-center gap-2">
            <span className="text-2xl">📢</span>
            {title}
          </h2>
        </div>
        
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="p-6 space-y-3 h-[400px] overflow-y-auto scroll-smooth custom-scrollbar"
        >
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.link || '#'}
              className="flex items-start gap-4 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 group border border-transparent hover:border-blue-200 relative"
            >
              {item.isNew && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">
                  NEW
                </span>
              )}
              <div className="flex-shrink-0 text-center bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-3 min-w-[75px] shadow-md group-hover:shadow-lg transition-shadow">
                <div className="text-xs text-orange-700 font-bold uppercase tracking-wide">{item.day} {item.year}</div>
                <div className="text-3xl font-extrabold text-orange-600 leading-none mt-1">{item.date}</div>
              </div>
              <div className="flex-1 pt-2">
                <p className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors leading-relaxed">
                  {item.title}
                </p>
                {item.description && (
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                )}
                <span className="text-xs text-gray-500 mt-1 inline-block group-hover:text-blue-500">
                  Click to read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="px-6 pb-6">
          <Link
            href="/news"
            className={`block w-full ${bgColor} text-white text-center py-3.5 rounded-xl font-bold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
          >
            📰 Read More और पढ़ें
          </Link>
        </div>
        
        <div className="text-center pb-3 text-xs text-gray-500">
          💡 Hover to pause auto-scroll
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Latest Updates</h2>
          <p className="text-gray-600">Stay informed with our latest notices and exam updates</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <NoticeCard items={noticesData} title="NOTICE BOARD सूचना पट" bgColor="bg-gradient-to-r from-slate-700 to-slate-800" />
          <NoticeCard items={examUpdatesData} title="EXAM UPDATES" bgColor="bg-gradient-to-r from-blue-600 to-blue-700" />
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
