'use client';

import React from 'react';

export default function CoursesTab() {
  const subjects = [
    { code: 'NUR401', name: 'Anatomy & Physiology', credits: 4, faculty: 'Dr. Sharma', attendance: '92%' },
    { code: 'NUR402', name: 'Pharmacology', credits: 3, faculty: 'Dr. Verma', attendance: '88%' },
    { code: 'NUR403', name: 'Pathology', credits: 4, faculty: 'Dr. Singh', attendance: '85%' },
    { code: 'NUR404', name: 'Community Medicine', credits: 3, faculty: 'Dr. Gupta', attendance: '90%' },
    { code: 'NUR405', name: 'Clinical Practice', credits: 5, faculty: 'Dr. Patel', attendance: '87%' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">My Courses</h2>

      {/* Course Info */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 text-white">
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <p className="text-indigo-200 text-sm mb-1">Course Duration</p>
            <p className="text-xl font-bold">4 Years</p>
          </div>
          <div>
            <p className="text-indigo-200 text-sm mb-1">Total Credits</p>
            <p className="text-xl font-bold">19 Credits</p>
          </div>
          <div>
            <p className="text-indigo-200 text-sm mb-1">Current Semester</p>
            <p className="text-xl font-bold">4th Semester</p>
          </div>
        </div>
      </div>

      {/* Subjects List */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Subject Code</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Subject Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Credits</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Faculty</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Attendance</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {subjects.map((subject) => (
                <tr key={subject.code} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-bold text-indigo-700">{subject.code}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{subject.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{subject.credits}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{subject.faculty}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      parseInt(subject.attendance) >= 90 ? 'bg-green-100 text-green-700' :
                      parseInt(subject.attendance) >= 75 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {subject.attendance}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Study Materials */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Study Materials</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Anatomy Notes - Chapter 5', type: 'PDF', size: '2.4 MB', date: '10 May 2026' },
            { title: 'Pharmacology Video Lecture', type: 'Video', size: '45 MB', date: '08 May 2026' },
            { title: 'Pathology Question Bank', type: 'PDF', size: '1.8 MB', date: '05 May 2026' },
            { title: 'Clinical Practice Guidelines', type: 'PDF', size: '3.2 MB', date: '03 May 2026' },
          ].map((material, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{material.type === 'PDF' ? '📄' : '🎥'}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{material.title}</p>
                <p className="text-xs text-gray-500 mt-1">{material.size} • {material.date}</p>
              </div>
              <button className="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
