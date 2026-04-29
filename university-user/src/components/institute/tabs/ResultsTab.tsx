'use client';

import React from 'react';

interface ResultsTabProps {
  instituteId: string;
}

export default function ResultsTab({ instituteId }: ResultsTabProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Results Management</h2>
        <p className="text-sm text-gray-600 mt-1">View and manage student results</p>
      </div>

      {/* Results Overview */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-xl mb-3">📊</div>
          <p className="text-2xl font-bold text-gray-800 mb-1">85%</p>
          <p className="text-sm text-gray-600">Pass Percentage</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-xl mb-3">🎯</div>
          <p className="text-2xl font-bold text-gray-800 mb-1">7.8</p>
          <p className="text-sm text-gray-600">Average CGPA</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-xl mb-3">🏆</div>
          <p className="text-2xl font-bold text-gray-800 mb-1">12</p>
          <p className="text-sm text-gray-600">Distinction</p>
        </div>
      </div>

      {/* Recent Results */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800">Published Results</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Upload Internal Marks
          </button>
        </div>
        <div className="space-y-3">
          {[
            { exam: 'Semester 2 - B.Sc Nursing', date: '2024-04-15', students: 25, status: 'Published' },
            { exam: 'Semester 1 - GNM', date: '2024-04-10', students: 18, status: 'Published' },
            { exam: 'Semester 4 - B.Sc Nursing', date: '2024-04-05', students: 22, status: 'Published' },
          ].map((result, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-800">{result.exam}</p>
                <p className="text-sm text-gray-600">{result.students} students • {result.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {result.status}
                </span>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
