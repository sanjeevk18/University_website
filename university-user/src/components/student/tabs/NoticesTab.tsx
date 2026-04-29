'use client';

import React, { useState } from 'react';

export default function NoticesTab() {
  const [filter, setFilter] = useState('all');

  const notices = [
    { id: 1, title: 'Semester Exam Schedule Released', category: 'Exam', date: '25 Apr 2026', priority: 'high', content: 'The examination schedule for Semester 4 has been released. Exams will commence from 15th May 2026.' },
    { id: 2, title: 'Fee Payment Deadline Extended', category: 'Fees', date: '23 Apr 2026', priority: 'medium', content: 'The last date for fee payment has been extended to 30th April 2026 without late fees.' },
    { id: 3, title: 'New Study Material Uploaded', category: 'Academic', date: '20 Apr 2026', priority: 'low', content: 'New study materials for Pharmacology and Pathology have been uploaded to the student portal.' },
    { id: 4, title: 'University Holiday - May Day', category: 'Holiday', date: '18 Apr 2026', priority: 'low', content: 'The university will remain closed on 1st May 2026 on account of May Day.' },
    { id: 5, title: 'Admit Card Available for Download', category: 'Exam', date: '15 Apr 2026', priority: 'high', content: 'Admit cards for Semester 4 examinations are now available for download from the student portal.' },
    { id: 6, title: 'Library Timing Change', category: 'General', date: '10 Apr 2026', priority: 'medium', content: 'Library timings have been extended. New timings: 8:00 AM to 10:00 PM on weekdays.' },
  ];

  const filteredNotices = filter === 'all' ? notices : notices.filter(n => n.category.toLowerCase() === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Notices & Updates</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium"
        >
          <option value="all">All Notices</option>
          <option value="exam">Exam</option>
          <option value="fees">Fees</option>
          <option value="academic">Academic</option>
          <option value="general">General</option>
          <option value="holiday">Holiday</option>
        </select>
      </div>

      {/* Important Notices Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="text-5xl">🔔</div>
          <div>
            <h3 className="font-bold text-lg mb-1">Important Announcement</h3>
            <p className="text-sm text-red-100">
              Semester 4 examinations will commence from 15th May 2026. Download your admit card now!
            </p>
          </div>
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <div key={notice.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  notice.priority === 'high' ? 'bg-red-500' :
                  notice.priority === 'medium' ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}></div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{notice.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      notice.category === 'Exam' ? 'bg-purple-100 text-purple-700' :
                      notice.category === 'Fees' ? 'bg-green-100 text-green-700' :
                      notice.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
                      notice.category === 'Holiday' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {notice.category}
                    </span>
                    <span className="text-xs text-gray-500">{notice.date}</span>
                  </div>
                </div>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                View Details
              </button>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{notice.content}</p>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>📅</span> Upcoming Events
        </h3>
        <div className="space-y-3">
          {[
            { title: 'Mid-Semester Exam', date: '15 May 2026', time: '10:00 AM', type: 'Exam' },
            { title: 'Fee Payment Deadline', date: '30 Apr 2026', time: 'All Day', type: 'Deadline' },
            { title: 'Guest Lecture - Healthcare Management', date: '05 May 2026', time: '02:00 PM', type: 'Academic' },
            { title: 'Sports Day', date: '12 May 2026', time: '09:00 AM', type: 'Event' },
          ].map((event, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                  {event.date.split(' ')[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{event.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{event.date} • {event.time}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-indigo-700">
                {event.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe to Notifications */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-800 mb-1">Stay Updated</h3>
            <p className="text-sm text-gray-600">
              Enable notifications to receive instant updates about exams, fees, and important announcements.
            </p>
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 whitespace-nowrap">
            Enable Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
