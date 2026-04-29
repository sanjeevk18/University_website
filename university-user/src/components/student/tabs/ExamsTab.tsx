'use client';

import React from 'react';

export default function ExamsTab() {
  const upcomingExams = [
    { code: 'NUR401', subject: 'Anatomy & Physiology', date: '15 May 2026', time: '10:00 AM - 01:00 PM', room: 'Hall A' },
    { code: 'NUR402', subject: 'Pharmacology', date: '17 May 2026', time: '10:00 AM - 01:00 PM', room: 'Hall B' },
    { code: 'NUR403', subject: 'Pathology', date: '19 May 2026', time: '10:00 AM - 01:00 PM', room: 'Hall A' },
    { code: 'NUR404', subject: 'Community Medicine', date: '21 May 2026', time: '10:00 AM - 01:00 PM', room: 'Hall C' },
    { code: 'NUR405', subject: 'Clinical Practice', date: '23 May 2026', time: '10:00 AM - 01:00 PM', room: 'Hall B' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Examinations</h2>

      {/* Exam Status Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-xl">
              📝
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-1">5</p>
          <p className="text-sm text-gray-600">Upcoming Exams</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-xl">
              ✅
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-1">Eligible</p>
          <p className="text-sm text-gray-600">Exam Form Status</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-xl">
              🎫
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-1">Available</p>
          <p className="text-sm text-gray-600">Admit Card</p>
        </div>
      </div>

      {/* Quick Actions */}
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Fill Exam Form', icon: '📝', color: 'bg-purple-50 text-purple-700 border-purple-200' },
          { label: 'Download Admit Card', icon: '🎫', color: 'bg-blue-50 text-blue-700 border-blue-200' },
          { label: 'Exam Schedule', icon: '📅', color: 'bg-green-50 text-green-700 border-green-200' },
          { label: 'Pay Exam Fee', icon: '💳', color: 'bg-orange-50 text-orange-700 border-orange-200' },
        ].map((action) => (
          <button key={action.label} className={`${action.color} border rounded-xl p-4 hover:shadow-md transition-all text-center`}>
            <div className="text-3xl mb-2">{action.icon}</div>
            <div className="text-sm font-semibold">{action.label}</div>
          </button>
        ))}
      </div> */}

      {/* Exam Schedule */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <h3 className="font-bold text-lg">Semester 4 - Examination Schedule</h3>
          <p className="text-sm text-purple-100 mt-1">May 2026 Examination</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Subject Code</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Subject Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Exam Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Time</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Room</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {upcomingExams.map((exam) => (
                <tr key={exam.code} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-bold text-purple-700">{exam.code}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{exam.subject}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{exam.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{exam.time}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                      {exam.room}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Important Instructions */}
      <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-yellow-600">⚠</span> Important Exam Instructions
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Report to the examination center 30 minutes before the exam time.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Carry your admit card and a valid photo ID proof (Aadhar/Passport/Driving License).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Mobile phones, calculators, and electronic devices are strictly prohibited.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Students with less than 75% attendance will not be allowed to appear for exams.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Any form of malpractice will result in immediate cancellation of the examination.</span>
          </li>
        </ul>
      </div>

      {/* Previous Exams */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Previous Examinations</h3>
        <div className="space-y-3">
          {[
            { semester: 'Semester 3', date: 'December 2025', status: 'Completed', result: 'Declared' },
            { semester: 'Semester 2', date: 'May 2025', status: 'Completed', result: 'Declared' },
            { semester: 'Semester 1', date: 'December 2024', status: 'Completed', result: 'Declared' },
          ].map((exam, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{exam.semester}</p>
                  <p className="text-xs text-gray-500 mt-1">{exam.date} • {exam.status}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-green-600 font-semibold mb-1">Result {exam.result}</p>
                <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium">View Result</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
