'use client';

import React from 'react';

interface ExamsTabProps {
  instituteId: string;
}

export default function ExamsTab({ instituteId }: ExamsTabProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Exam Management</h2>
        <p className="text-sm text-gray-600 mt-1">Submit exam forms and generate admit cards</p>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-3 gap-4">
        <button className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all text-center">
          <div className="text-4xl mb-3">📝</div>
          <h3 className="font-bold text-gray-800 mb-1">Submit Exam Form</h3>
          <p className="text-xs text-gray-600">Fill and submit examination forms</p>
        </button>

        <button className="bg-white border-2 border-green-200 rounded-xl p-6 hover:border-green-400 hover:shadow-md transition-all text-center">
          <div className="text-4xl mb-3">🎫</div>
          <h3 className="font-bold text-gray-800 mb-1">Generate Admit Card</h3>
          <p className="text-xs text-gray-600">Create and download admit cards</p>
        </button>

        <button className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-md transition-all text-center">
          <div className="text-4xl mb-3">📅</div>
          <h3 className="font-bold text-gray-800 mb-1">Exam Schedule</h3>
          <p className="text-xs text-gray-600">View examination timetable</p>
        </button>
      </div>

      {/* Exam Forms Status */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Recent Exam Forms</h3>
        <div className="space-y-3">
          {[
            { student: 'Anjali Sharma', enrollment: 'LMI-2024-001', exam: 'Semester 2', status: 'Submitted', date: '2024-04-20' },
            { student: 'Priya Singh', enrollment: 'LMI-2024-002', exam: 'Semester 2', status: 'Pending', date: '2024-04-19' },
            { student: 'Sneha Gupta', enrollment: 'LMI-2024-003', exam: 'Semester 1', status: 'Approved', date: '2024-04-18' },
          ].map((form, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{form.student}</p>
                <p className="text-sm text-gray-600">{form.enrollment} • {form.exam}</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  form.status === 'Approved' ? 'bg-green-100 text-green-700' :
                  form.status === 'Submitted' ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {form.status}
                </span>
                <p className="text-xs text-gray-500 mt-1">{form.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
