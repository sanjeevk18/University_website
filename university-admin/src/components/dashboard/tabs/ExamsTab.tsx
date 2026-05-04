'use client';

import React, { useState } from 'react';
import { store } from '@/store';

export default function ExamsTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterCourse, setFilterCourse] = useState('All');

  const exams = store.exams;

  // Get unique courses
  const courses = ['All', ...Array.from(new Set(exams.map(e => e.course)))];

  // Filter exams
  const filteredExams = exams.filter(exam => {
    const matchesSearch = exam.examName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.examCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || exam.status === filterStatus;
    const matchesCourse = filterCourse === 'All' || exam.course === filterCourse;
    return matchesSearch && matchesStatus && matchesCourse;
  });

  const scheduledCount = exams.filter(e => e.status === 'Scheduled').length;
  const completedCount = exams.filter(e => e.status === 'Completed').length;
  const ongoingCount = exams.filter(e => e.status === 'Ongoing').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-700';
      case 'Ongoing': return 'bg-yellow-100 text-yellow-700';
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">📝 Examination Management</h2>
          <p className="text-gray-500 text-sm mt-1">Schedule and manage examinations</p>
        </div>
        <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md">
          + Schedule New Exam
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Exams</p>
              <h3 className="text-3xl font-bold mt-1">{exams.length}</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📝</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Scheduled</p>
              <h3 className="text-3xl font-bold mt-1">{scheduledCount}</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Ongoing</p>
              <h3 className="text-3xl font-bold mt-1">{ongoingCount}</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Completed</p>
              <h3 className="text-3xl font-bold mt-1">{completedCount}</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Exams</label>
            <input
              type="text"
              placeholder="Search by name or code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
            <select
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="All">All Status</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExams.map((exam) => (
          <div key={exam.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{exam.examName}</h3>
                <p className="text-sm text-gray-500 font-mono mt-1">{exam.examCode}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
                {exam.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📚 Course:</span>
                <span className="font-medium text-gray-800">{exam.course}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📖 Semester:</span>
                <span className="font-medium text-gray-800">{exam.semester}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📅 Date:</span>
                <span className="font-medium text-gray-800">{new Date(exam.examDate).toLocaleDateString('en-IN')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">⏰ Time:</span>
                <span className="font-medium text-gray-800">{exam.examTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">⏱️ Duration:</span>
                <span className="font-medium text-gray-800">{exam.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📍 Venue:</span>
                <span className="font-medium text-gray-800">{exam.venue}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">💯 Marks:</span>
                <span className="font-medium text-gray-800">{exam.totalMarks} (Pass: {exam.passingMarks})</span>
              </div>
              <div className="pt-2 border-t">
                <p className="text-xs text-gray-500 mb-2">Subjects:</p>
                <div className="flex flex-wrap gap-2">
                  {exam.subjects.map((subject, idx) => (
                    <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                View Details
              </button>
              <button className="flex-1 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredExams.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <p className="text-gray-500">No exams found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
