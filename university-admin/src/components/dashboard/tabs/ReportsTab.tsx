'use client';

import React from 'react';
import { store, getDashboardStats } from '@/store';

export default function ReportsTab() {
  const stats = getDashboardStats();
  const students = store.students;
  const courses = store.courses;
  const fees = store.fees;
  const exams = store.exams;
  const results = store.results;

  // Calculate additional metrics
  const courseEnrollment = courses.map(course => ({
    name: course.name,
    enrolled: students.filter(s => s.course === course.name).length,
    capacity: course.totalSeats,
    percentage: ((students.filter(s => s.course === course.name).length / course.totalSeats) * 100).toFixed(1)
  }));

  const feeCollection = {
    total: fees.reduce((sum, f) => sum + f.totalAmount, 0),
    collected: fees.reduce((sum, f) => sum + f.paidAmount, 0),
    pending: fees.reduce((sum, f) => sum + f.pendingAmount, 0),
    collectionRate: ((fees.reduce((sum, f) => sum + f.paidAmount, 0) / fees.reduce((sum, f) => sum + f.totalAmount, 0)) * 100).toFixed(1)
  };

  const examStats = {
    scheduled: exams.filter(e => e.status === 'Scheduled').length,
    completed: exams.filter(e => e.status === 'Completed').length,
    passRate: ((results.filter(r => r.result === 'Pass').length / results.length) * 100).toFixed(1),
    avgPercentage: (results.reduce((sum, r) => sum + r.percentage, 0) / results.length).toFixed(2)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">📈 Reports & Analytics</h2>
          <p className="text-gray-500 text-sm mt-1">Comprehensive overview of university performance</p>
        </div>
        <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md">
          📥 Export Report
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Students</p>
              <h3 className="text-3xl font-bold mt-1">{stats.totalStudents}</h3>
              <p className="text-blue-100 text-xs mt-1">{stats.activeStudents} Active</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Revenue</p>
              <h3 className="text-2xl font-bold mt-1">₹{(stats.totalRevenue / 100000).toFixed(1)}L</h3>
              <p className="text-green-100 text-xs mt-1">{feeCollection.collectionRate}% Collected</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Active Courses</p>
              <h3 className="text-3xl font-bold mt-1">{stats.totalCourses}</h3>
              <p className="text-purple-100 text-xs mt-1">{courses.length} Total</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Staff Members</p>
              <h3 className="text-3xl font-bold mt-1">{stats.totalStaff}</h3>
              <p className="text-orange-100 text-xs mt-1">Active Faculty</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👨‍🏫</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Collection Report */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">💰 Fee Collection Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Total Fees</p>
            <p className="text-2xl font-bold text-gray-800">₹{feeCollection.total.toLocaleString()}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Collected</p>
            <p className="text-2xl font-bold text-green-600">₹{feeCollection.collected.toLocaleString()}</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Pending</p>
            <p className="text-2xl font-bold text-red-600">₹{feeCollection.pending.toLocaleString()}</p>
          </div>
        </div>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-green-600"
            style={{ width: `${feeCollection.collectionRate}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">Collection Rate: {feeCollection.collectionRate}%</p>
      </div>

      {/* Course Enrollment Report */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">📚 Course Enrollment Report</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Course Name</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Enrolled</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Capacity</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Occupancy</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {courseEnrollment.map((course, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">{course.name}</td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-gray-900">{course.enrolled}</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">{course.capacity}</td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-purple-600">{course.percentage}%</td>
                  <td className="px-4 py-3">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${parseFloat(course.percentage) >= 90 ? 'bg-red-500' : parseFloat(course.percentage) >= 70 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{ width: `${course.percentage}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Examination Report */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">📝 Examination Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Total Exams</p>
            <p className="text-2xl font-bold text-gray-800">{exams.length}</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Scheduled</p>
            <p className="text-2xl font-bold text-yellow-600">{examStats.scheduled}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Completed</p>
            <p className="text-2xl font-bold text-green-600">{examStats.completed}</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Pass Rate</p>
            <p className="text-2xl font-bold text-purple-600">{examStats.passRate}%</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">Average Percentage</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{examStats.avgPercentage}%</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">⚡ Quick Report Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="font-semibold text-gray-800">Student Report</h4>
            <p className="text-xs text-gray-600 mt-1">Download complete student data</p>
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
            <div className="text-2xl mb-2">💵</div>
            <h4 className="font-semibold text-gray-800">Financial Report</h4>
            <p className="text-xs text-gray-600 mt-1">Export fee collection details</p>
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
            <div className="text-2xl mb-2">📈</div>
            <h4 className="font-semibold text-gray-800">Performance Report</h4>
            <p className="text-xs text-gray-600 mt-1">Academic performance analysis</p>
          </button>
        </div>
      </div>
    </div>
  );
}
