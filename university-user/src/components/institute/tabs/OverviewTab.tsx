'use client';

import React from 'react';
import { getInstituteDashboardStats } from '@/store/instituteStore';

interface OverviewTabProps {
  instituteId: string;
}

export default function OverviewTab({ instituteId }: OverviewTabProps) {
  const stats = getInstituteDashboardStats(instituteId);

  const statCards = [
    { 
      label: 'Total Students', 
      value: stats.totalStudents.toString(), 
      icon: '👥', 
      color: 'bg-blue-500', 
      subtext: `${stats.activeStudents} Active` 
    },
    { 
      label: 'Active Courses', 
      value: stats.activeCourses.toString(), 
      icon: '📚', 
      color: 'bg-green-500', 
      subtext: 'Programs' 
    },
    { 
      label: 'Fees Collected', 
      value: `₹${(stats.totalFeesCollected / 100000).toFixed(1)}L`, 
      icon: '💰', 
      color: 'bg-purple-500', 
      subtext: `₹${(stats.pendingFees / 1000).toFixed(0)}K Pending` 
    },
    { 
      label: 'Unread Notices', 
      value: stats.unreadNotices.toString(), 
      icon: '📢', 
      color: 'bg-orange-500', 
      subtext: 'New Updates' 
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome to Institute Dashboard! 👋</h2>
        <p className="text-gray-600">Here's an overview of your institute operations.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-xl`}>
                {stat.icon}
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.subtext}</p>
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
            { label: 'Update Fees', icon: '💳', color: 'bg-green-50 text-green-700 border-green-200' },
            { label: 'Submit Exam Form', icon: '📝', color: 'bg-purple-50 text-purple-700 border-purple-200' },
            { label: 'Request Certificate', icon: '🎓', color: 'bg-orange-50 text-orange-700 border-orange-200' },
            { label: 'Upload Documents', icon: '📄', color: 'bg-red-50 text-red-700 border-red-200' },
            { label: 'View Results', icon: '📊', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
            { label: 'Raise Ticket', icon: '🎫', color: 'bg-teal-50 text-teal-700 border-teal-200' },
            { label: 'View Notices', icon: '📢', color: 'bg-pink-50 text-pink-700 border-pink-200' },
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

      {/* Recent Activity & Pending Tasks */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📋</span> Recent Activities
          </h3>
          <div className="space-y-3">
            {[
              { title: 'New student enrolled - Anjali Sharma', time: '10 minutes ago', type: 'Student' },
              { title: 'Fee payment received - ₹60,000', time: '1 hour ago', type: 'Fee' },
              { title: 'Exam form submitted for 5 students', time: '2 hours ago', type: 'Exam' },
              { title: 'Certificate request approved', time: '3 hours ago', type: 'Certificate' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
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
              { title: 'Submit exam forms for Semester 4', priority: 'High', count: stats.pendingExamForms },
              { title: 'Update pending fee records', priority: 'Medium', count: Math.ceil(stats.pendingFees / 50000) },
              { title: 'Upload student documents', priority: 'High', count: 8 },
              { title: 'Respond to support tickets', priority: 'Low', count: 2 },
            ].map((task, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{task.title}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Priority: <span className={`font-semibold ${
                      task.priority === 'High' ? 'text-red-600' :
                      task.priority === 'Medium' ? 'text-orange-600' :
                      'text-green-600'
                    }`}>{task.priority}</span>
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">
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
