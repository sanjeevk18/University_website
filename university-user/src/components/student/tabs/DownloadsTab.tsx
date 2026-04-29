'use client';

import React from 'react';
import Link from 'next/link';

export default function DownloadsTab() {
  const downloads = [
    {
      category: 'Identity Documents',
      items: [
        { name: 'Student ID Card', icon: '🪪', size: '2.1 MB', format: 'PDF', link: '/student-portal/id-card' },
        { name: 'Library Card', icon: '📚', size: '1.5 MB', format: 'PDF', link: '#' },
      ]
    },
    {
      category: 'Examination',
      items: [
        { name: 'Admit Card - Semester 4', icon: '🎫', size: '1.8 MB', format: 'PDF', link: '/student-portal/admit-card' },
        { name: 'Exam Schedule', icon: '📅', size: '0.5 MB', format: 'PDF', link: '#' },
        { name: 'Exam Guidelines', icon: '📋', size: '0.8 MB', format: 'PDF', link: '#' },
      ]
    },
    {
      category: 'Results & Marksheets',
      items: [
        { name: 'Semester 3 Marksheet', icon: '📊', size: '1.2 MB', format: 'PDF', link: '#' },
        { name: 'Semester 2 Marksheet', icon: '📊', size: '1.1 MB', format: 'PDF', link: '#' },
        { name: 'Semester 1 Marksheet', icon: '📊', size: '1.0 MB', format: 'PDF', link: '#' },
        { name: 'Consolidated Marksheet', icon: '📈', size: '2.5 MB', format: 'PDF', link: '#' },
      ]
    },
    {
      category: 'Certificates',
      items: [
        { name: 'Provisional Certificate', icon: '📜', size: '1.9 MB', format: 'PDF', link: '#' },
        { name: 'Character Certificate', icon: '✅', size: '1.3 MB', format: 'PDF', link: '#' },
        { name: 'Bonafide Certificate', icon: '📋', size: '1.4 MB', format: 'PDF', link: '#' },
      ]
    },
    {
      category: 'Fee Receipts',
      items: [
        { name: 'Semester 4 Fee Receipt', icon: '💳', size: '0.6 MB', format: 'PDF', link: '#' },
        { name: 'Semester 3 Fee Receipt', icon: '💳', size: '0.6 MB', format: 'PDF', link: '#' },
        { name: 'Semester 2 Fee Receipt', icon: '💳', size: '0.6 MB', format: 'PDF', link: '#' },
        { name: 'Semester 1 Fee Receipt', icon: '💳', size: '0.6 MB', format: 'PDF', link: '#' },
      ]
    },
    {
      category: 'Study Materials',
      items: [
        { name: 'Anatomy Notes - Chapter 5', icon: '📄', size: '2.4 MB', format: 'PDF', link: '#' },
        { name: 'Pharmacology Video Lecture', icon: '🎥', size: '45 MB', format: 'MP4', link: '#' },
        { name: 'Pathology Question Bank', icon: '📝', size: '1.8 MB', format: 'PDF', link: '#' },
        { name: 'Clinical Practice Guidelines', icon: '📖', size: '3.2 MB', format: 'PDF', link: '#' },
      ]
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Downloads</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
          Download All
        </button>
      </div>

      {/* Quick Download Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'ID Card', icon: '🪪', count: '1', color: 'bg-blue-50 border-blue-200' },
          { title: 'Admit Card', icon: '🎫', count: '1', color: 'bg-purple-50 border-purple-200' },
          { title: 'Marksheets', icon: '📊', count: '4', color: 'bg-green-50 border-green-200' },
          { title: 'Certificates', icon: '📜', count: '3', color: 'bg-orange-50 border-orange-200' },
        ].map((item) => (
          <div key={item.title} className={`${item.color} border-2 rounded-xl p-5`}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-4xl">{item.icon}</div>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-700">
                {item.count} files
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Downloads by Category */}
      {downloads.map((category) => (
        <div key={category.category} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <h3 className="font-bold text-gray-800">{category.category}</h3>
          </div>
          <div className="p-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.format} • {item.size}</p>
                  </div>
                  {item.link.startsWith('/') ? (
                    <Link href={item.link} className="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700 whitespace-nowrap">
                      View
                    </Link>
                  ) : (
                    <button className="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700 whitespace-nowrap">
                      Download
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Download History */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Recent Downloads</h3>
        <div className="space-y-3">
          {[
            { name: 'Admit Card - Semester 4', date: '28 Apr 2026', time: '10:30 AM', size: '1.8 MB' },
            { name: 'Semester 3 Marksheet', date: '25 Apr 2026', time: '02:15 PM', size: '1.2 MB' },
            { name: 'Fee Receipt - Semester 4', date: '20 Apr 2026', time: '11:45 AM', size: '0.6 MB' },
          ].map((download, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">✅</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{download.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{download.date} • {download.time} • {download.size}</p>
                </div>
              </div>
              <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium">
                Download Again
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
        <div className="flex items-start gap-4">
          <div className="text-5xl">💡</div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Need Help with Downloads?</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you're facing issues downloading any document, please contact our support team or raise a ticket.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700">
                Contact Support
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-100 border border-gray-300">
                View FAQs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
