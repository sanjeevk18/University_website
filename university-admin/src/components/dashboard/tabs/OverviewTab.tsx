'use client';

import React from 'react';
import { getDashboardStats } from '@/store';

export default function OverviewTab() {
  const dashboardStats = getDashboardStats();

  const stats = [
    {
      label: 'Total Students',
      value: dashboardStats.totalStudents.toString(),
      icon: '👥',
      color: 'bg-blue-500',
      change: `${dashboardStats.activeStudents} Active`
    },
    {
      label: 'Active Courses',
      value: dashboardStats.totalCourses.toString(),
      icon: '📚',
      color: 'bg-green-500',
      change: 'Running'
    },
    {
      label: 'Total Revenue',
      value: `₹${(dashboardStats.totalRevenue / 100000).toFixed(1)}L`,
      icon: '💰',
      color: 'bg-purple-500',
      change: `₹${(dashboardStats.pendingFees / 1000).toFixed(0)}K Pending`
    },
    {
      label: 'Staff Members',
      value: dashboardStats.totalStaff.toString(),
      icon: '👨‍🏫',
      color: 'bg-orange-500',
      change: 'Active'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome to Admin Dashboard! 👋</h2>
        {/* <p className="text-gray-600">Here&apos;s what&apos;s happening with your university today.</p> */}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-xl`}>
                {stat.icon}
              </div>
              <span className="text-xs font-semibold text-green-600">{stat.change}</span>
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>⚡</span> Quick Actions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { label: 'Add Student', icon: '➕', color: 'bg-blue-50 text-blue-700 border-blue-200' },
            { label: 'Create Course', icon: '📚', color: 'bg-green-50 text-green-700 border-green-200' },
            { label: 'Fee Collection', icon: '💳', color: 'bg-purple-50 text-purple-700 border-purple-200' },
            { label: 'Schedule Exam', icon: '📝', color: 'bg-orange-50 text-orange-700 border-orange-200' },
            { label: 'Publish Results', icon: '📊', color: 'bg-red-50 text-red-700 border-red-200' },
            { label: 'Issue Certificate', icon: '🎓', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
            { label: 'Add Staff', icon: '👨‍🏫', color: 'bg-teal-50 text-teal-700 border-teal-200' },
            { label: 'Generate Report', icon: '📈', color: 'bg-pink-50 text-pink-700 border-pink-200' },
          ].map((action) => (
            <button
              key={action.label}
              className={`${action.color} border rounded-xl p-4 hover:shadow-md transition-all text-center`}
            >
              <div className="text-2xl mb-2">{action.icon}</div>
              <div className="text-xs font-semibold">{action.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📋</span> Recent Activities
          </h3>
          <div className="space-y-3">
            {[
              { title: 'New student enrolled - Priya Sharma', time: '5 minutes ago', type: 'Student' },
              { title: 'Fee payment received - ₹55,000', time: '15 minutes ago', type: 'Fee' },
              { title: 'Exam schedule published for Semester 4', time: '1 hour ago', type: 'Exam' },
              { title: 'New staff member added - Dr. Verma', time: '2 hours ago', type: 'Staff' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{activity.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time} • {activity.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>⚠️</span> Pending Tasks
          </h3>
          <div className="space-y-3">
            {[
              { title: 'Approve 12 student applications', priority: 'High', count: 12 },
              { title: 'Review fee payment requests', priority: 'Medium', count: 8 },
              { title: 'Verify certificate requests', priority: 'High', count: 5 },
              { title: 'Update course syllabus', priority: 'Low', count: 3 },
            ].map((task, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{task.title}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Priority: <span className={`font-semibold ${task.priority === 'High' ? 'text-red-600' :
                        task.priority === 'Medium' ? 'text-orange-600' :
                          'text-green-600'
                      }`}>{task.priority}</span>
                  </p>
                </div>
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-bold">
                  {task.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
