'use client';

import React, { useState } from 'react';
import { store } from '@/store';

export default function ResultsTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterResult, setFilterResult] = useState('All');

  const results = store.results;

  // Filter results
  const filteredResults = results.filter(result => {
    const matchesSearch = result.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.enrollmentNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesResult = filterResult === 'All' || result.result === filterResult;
    return matchesSearch && matchesResult;
  });

  const passCount = results.filter(r => r.result === 'Pass').length;
  const avgPercentage = results.reduce((sum, r) => sum + r.percentage, 0) / results.length;

  const getGradeColor = (grade: string) => {
    if (grade === 'A+' || grade === 'A') return 'bg-green-100 text-green-700';
    if (grade === 'B+' || grade === 'B') return 'bg-blue-100 text-blue-700';
    if (grade === 'C+' || grade === 'C') return 'bg-yellow-100 text-yellow-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">📊 Results Management</h2>
          <p className="text-gray-500 text-sm mt-1">View and manage examination results</p>
        </div>
        <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md">
          + Publish Results
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Results</p>
              <h3 className="text-3xl font-bold mt-1">{results.length}</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Pass Count</p>
              <h3 className="text-3xl font-bold mt-1">{passCount}</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Avg Percentage</p>
              <h3 className="text-3xl font-bold mt-1">{avgPercentage.toFixed(1)}%</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Pass Rate</p>
              <h3 className="text-3xl font-bold mt-1">{((passCount / results.length) * 100).toFixed(0)}%</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Student</label>
            <input
              type="text"
              placeholder="Search by name or enrollment no..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Result Status</label>
            <select
              value={filterResult}
              onChange={(e) => setFilterResult(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="All">All Results</option>
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredResults.map((result) => (
          <div key={result.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{result.studentName}</h3>
                <p className="text-sm text-gray-500 font-mono mt-1">{result.enrollmentNo}</p>
                <p className="text-sm text-gray-600 mt-1">{result.course} - {result.semester}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-800">{result.percentage.toFixed(2)}%</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getGradeColor(result.grade)}`}>
                    Grade: {result.grade}
                  </span>
                </div>
                <span className={`px-4 py-2 rounded-lg text-sm font-bold ${result.result === 'Pass' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {result.result}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Exam: {result.examName}</p>
              <p className="text-xs text-gray-500">Published: {new Date(result.publishedDate).toLocaleDateString('en-IN')}</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Subject</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-gray-600">Marks Obtained</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-gray-600">Total Marks</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-gray-600">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {result.subjects.map((subject, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-2 font-medium text-gray-800">{subject.name}</td>
                      <td className="px-4 py-2 text-center font-semibold text-gray-900">{subject.marksObtained}</td>
                      <td className="px-4 py-2 text-center text-gray-600">{subject.totalMarks}</td>
                      <td className="px-4 py-2 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(subject.grade)}`}>
                          {subject.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-bold">
                    <td className="px-4 py-2">Total</td>
                    <td className="px-4 py-2 text-center">{result.marksObtained}</td>
                    <td className="px-4 py-2 text-center">{result.totalMarks}</td>
                    <td className="px-4 py-2 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(result.grade)}`}>
                        {result.grade}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                Download Marksheet
              </button>
              <button className="flex-1 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
                Send to Student
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredResults.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <p className="text-gray-500">No results found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
