'use client';

import React, { useState } from 'react';
import { instituteStore } from '@/store/instituteStore';

export default function NoticesTab() {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const filteredNotices = instituteStore.notices.filter(notice => {
    const matchesCategory = categoryFilter === 'all' || notice.category === categoryFilter;
    const matchesPriority = priorityFilter === 'all' || notice.priority === priorityFilter;
    return matchesCategory && matchesPriority;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">University Notices</h2>
        <p className="text-sm text-gray-600 mt-1">Stay updated with latest announcements</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <div className="grid sm:grid-cols-2 gap-4">
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="Exam">Exam</option>
            <option value="Admission">Admission</option>
            <option value="Fee">Fee</option>
            <option value="Result">Result</option>
            <option value="General">General</option>
          </select>
          <select 
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Priorities</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <div 
            key={notice.id} 
            className={`bg-white rounded-xl p-6 border-l-4 shadow-sm hover:shadow-md transition-shadow ${
              notice.priority === 'High' ? 'border-red-500' :
              notice.priority === 'Medium' ? 'border-yellow-500' :
              'border-green-500'
            } ${!notice.isRead ? 'bg-blue-50' : ''}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  notice.category === 'Exam' ? 'bg-purple-100 text-purple-700' :
                  notice.category === 'Fee' ? 'bg-green-100 text-green-700' :
                  notice.category === 'Result' ? 'bg-blue-100 text-blue-700' :
                  notice.category === 'Admission' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  <span className="text-xl">
                    {notice.category === 'Exam' ? '📝' :
                     notice.category === 'Fee' ? '💰' :
                     notice.category === 'Result' ? '📊' :
                     notice.category === 'Admission' ? '🎓' :
                     '📢'}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{notice.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      notice.priority === 'High' ? 'bg-red-100 text-red-700' :
                      notice.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {notice.priority}
                    </span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                      {notice.category}
                    </span>
                    <span className="text-xs text-gray-500">{notice.date}</span>
                  </div>
                </div>
              </div>
              {!notice.isRead && (
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold">
                  New
                </span>
              )}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{notice.description}</p>
            <div className="mt-4 flex items-center gap-3">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Read More</button>
              <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
