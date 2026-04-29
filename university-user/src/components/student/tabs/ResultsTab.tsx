'use client';

import React, { useState } from 'react';

export default function ResultsTab() {
  const [selectedSemester, setSelectedSemester] = useState('4');

  const semesterResults = {
    '4': {
      sgpa: '8.5',
      cgpa: '8.3',
      status: 'Awaited',
      subjects: [
        { code: 'NUR401', name: 'Anatomy & Physiology', internal: '-', external: '-', total: '-', grade: '-' },
        { code: 'NUR402', name: 'Pharmacology', internal: '-', external: '-', total: '-', grade: '-' },
        { code: 'NUR403', name: 'Pathology', internal: '-', external: '-', total: '-', grade: '-' },
        { code: 'NUR404', name: 'Community Medicine', internal: '-', external: '-', total: '-', grade: '-' },
        { code: 'NUR405', name: 'Clinical Practice', internal: '-', external: '-', total: '-', grade: '-' },
      ]
    },
    '3': {
      sgpa: '8.5',
      cgpa: '8.3',
      status: 'Declared',
      subjects: [
        { code: 'NUR301', name: 'Medical Surgical Nursing', internal: 18, external: 72, total: 90, grade: 'A+' },
        { code: 'NUR302', name: 'Child Health Nursing', internal: 17, external: 68, total: 85, grade: 'A' },
        { code: 'NUR303', name: 'Mental Health Nursing', internal: 19, external: 75, total: 94, grade: 'A+' },
        { code: 'NUR304', name: 'Midwifery & Gynecology', internal: 16, external: 70, total: 86, grade: 'A' },
        { code: 'NUR305', name: 'Community Health Nursing', internal: 18, external: 73, total: 91, grade: 'A+' },
      ]
    },
  };

  const currentResult = semesterResults[selectedSemester as keyof typeof semesterResults];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Examination Results</h2>
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium"
        >
          {[1, 2, 3, 4].map((sem) => (
            <option key={sem} value={sem}>Semester {sem}</option>
          ))}
        </select>
      </div>

      {/* Performance Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <p className="text-blue-100 text-sm mb-2">Semester GPA</p>
          <p className="text-4xl font-bold">{currentResult.sgpa}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <p className="text-purple-100 text-sm mb-2">Cumulative GPA</p>
          <p className="text-4xl font-bold">{currentResult.cgpa}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <p className="text-green-100 text-sm mb-2">Result Status</p>
          <p className="text-2xl font-bold">{currentResult.status}</p>
        </div>
      </div>

      {/* Result Status Banner */}
      {currentResult.status === 'Awaited' ? (
        <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
          <div className="flex items-center gap-4">
            <div className="text-5xl">⏳</div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Result Awaited</h3>
              <p className="text-sm text-gray-600">
                Your Semester {selectedSemester} results will be declared soon. Expected date: 30 May 2026
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🎉</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Result Declared</h3>
                <p className="text-sm text-gray-600">
                  Congratulations! You have successfully passed Semester {selectedSemester}
                </p>
              </div>
            </div>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 shadow-lg">
              Download Marksheet
            </button>
          </div>
        </div>
      )}

      {/* Detailed Marks */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <h3 className="font-bold text-lg">Semester {selectedSemester} - Detailed Marks</h3>
          <p className="text-sm text-indigo-100 mt-1">Subject-wise Performance</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Subject Code</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Subject Name</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700">Internal (20)</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700">External (80)</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700">Total (100)</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentResult.subjects.map((subject) => (
                <tr key={subject.code} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-bold text-indigo-700">{subject.code}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{subject.name}</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">{subject.internal}</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">{subject.external}</td>
                  <td className="px-6 py-4 text-sm text-center font-bold text-gray-800">{subject.total}</td>
                  <td className="px-6 py-4 text-sm text-center">
                    {subject.grade !== '-' ? (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        subject.grade === 'A+' ? 'bg-green-100 text-green-700' :
                        subject.grade === 'A' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {subject.grade}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Semester-wise Performance */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Semester-wise Performance</h3>
        <div className="space-y-3">
          {[
            { semester: 'Semester 3', sgpa: '8.5', cgpa: '8.3', status: 'Pass', percentage: '85%' },
            { semester: 'Semester 2', sgpa: '8.2', cgpa: '8.1', status: 'Pass', percentage: '82%' },
            { semester: 'Semester 1', sgpa: '8.0', cgpa: '8.0', status: 'Pass', percentage: '80%' },
          ].map((sem, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-indigo-700">{sem.semester.split(' ')[1]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{sem.semester}</p>
                  <p className="text-xs text-gray-500 mt-1">SGPA: {sem.sgpa} • CGPA: {sem.cgpa}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800 mb-1">{sem.percentage}</p>
                <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
