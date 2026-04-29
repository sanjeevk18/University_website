'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FeesTab from './tabs/FeesTab';
import ExamsTab from './tabs/ExamsTab';
import ResultsTab from './tabs/ResultsTab';
import CertificatesTab from './tabs/CertificatesTab';
import NoticesTab from './tabs/NoticesTab';
import SupportTab from './tabs/SupportTab';
import DownloadsTab from './tabs/DownloadsTab';
import ProfileTab from './tabs/ProfileTab';
import CoursesTab from './tabs/CoursesTab';

type Tab = 'overview' | 'profile' | 'courses' | 'fees' | 'exams' | 'results' | 'certificates' | 'notices' | 'support' | 'downloads';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [studentData, setStudentData] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('studentLoggedIn');
    if (!isLoggedIn) {
      router.push('/student-portal');
      return;
    }
    const data = JSON.parse(localStorage.getItem('studentData') || '{}');
    setStudentData(data);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('studentLoggedIn');
    localStorage.removeItem('studentData');
    router.push('/student-portal');
  };

  if (!studentData) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div></div>;

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: '🏠' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'courses', label: 'Courses', icon: '📚' },
    // { id: 'fees', label: 'Fees', icon: '💳' },
    { id: 'exams', label: 'Exams', icon: '📝' },
    { id: 'results', label: 'Results', icon: '📊' },
    // { id: 'certificates', label: 'Certificates', icon: '🎓' },
    // { id: 'notices', label: 'Notices', icon: '📢' },
    // { id: 'support', label: 'Support', icon: '🎫' },
    // { id: 'downloads', label: 'Downloads', icon: '📥' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-gray-800">SAHU Student Portal</h1>
                <p className="text-xs text-gray-500">State Allied Healthcare University</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button onClick={handleLogout} className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-gray-200 w-64 transition-transform duration-300 z-30 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="p-4 h-full overflow-y-auto">
            {/* User Profile Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-4 mb-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm truncate">{studentData.name}</h3>
                  <p className="text-xs text-indigo-200 truncate">{studentData.enrollmentNo}</p>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-indigo-200">Course:</span>
                  <span className="font-semibold">{studentData.course}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-200">Semester:</span>
                  <span className="font-semibold">{studentData.semester}</span>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id as Tab); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-20 lg:hidden"></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 max-w-7xl">
          {activeTab === 'overview' && <OverviewTab studentData={studentData} />}
          {activeTab === 'profile' && <ProfileTab studentData={studentData} />}
          {activeTab === 'courses' && <CoursesTab />}
          {/* {activeTab === 'fees' && <FeesTab />} */}
          {activeTab === 'exams' && <ExamsTab />}
          {activeTab === 'results' && <ResultsTab />}
          {/* {activeTab === 'certificates' && <CertificatesTab studentData={studentData} />} */}
          {/* {activeTab === 'notices' && <NoticesTab />} */}
          {/* {activeTab === 'support' && <SupportTab />} */}
          {/* {activeTab === 'downloads' && <DownloadsTab />} */}
        </main>
      </div>
    </div>
  );
}

// Overview Tab
function OverviewTab({ studentData }: any) {
  const stats = [
    { label: 'Current Semester', value: studentData.semester, icon: '📚', color: 'bg-blue-500' },
    { label: 'Attendance', value: '87%', icon: '✅', color: 'bg-green-500' },
    // { label: 'Fees Status', value: 'Paid', icon: '💳', color: 'bg-purple-500' },
    { label: 'Pending Exams', value: '2', icon: '📝', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome back, {studentData.name.split(' ')[0]}! 👋</h2>
        <p className="text-gray-600">Here's what's happening with your academics today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-xl`}>
                {stat.icon}
              </div>
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
            // { label: 'Pay Fees', icon: '💳', color: 'bg-green-50 text-green-700 border-green-200' },
            // { label: 'Admit Card', icon: '🎫', color: 'bg-purple-50 text-purple-700 border-purple-200' },
            // { label: 'ID Card', icon: '🪪', color: 'bg-blue-50 text-blue-700 border-blue-200' },
            { label: 'Results', icon: '📊', color: 'bg-orange-50 text-orange-700 border-orange-200' },
            { label: 'Certificates', icon: '🎓', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
            { label: 'Study Material', icon: '📚', color: 'bg-teal-50 text-teal-700 border-teal-200' },
            // { label: 'Raise Ticket', icon: '🎫', color: 'bg-red-50 text-red-700 border-red-200' },
            { label: 'Verify', icon: '🔍', color: 'bg-gray-50 text-gray-700 border-gray-200' },
          ].map((action) => (
            <button key={action.label} className={`${action.color} border rounded-xl p-4 hover:shadow-md transition-all text-center`}>
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
            <span>📢</span> Recent Notices
          </h3>
          <div className="space-y-3">
            {[
              { title: 'Semester Exam Schedule Released', date: '2 days ago', type: 'Exam' },
              { title: 'Fee Payment Deadline Extended', date: '5 days ago', type: 'Fees' },
              { title: 'New Study Material Uploaded', date: '1 week ago', type: 'Academic' },
            ].map((notice, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{notice.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{notice.date} • {notice.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📅</span> Upcoming Events
          </h3>
          <div className="space-y-3">
            {[
              { title: 'Mid-Semester Exam', date: '15 May 2026', time: '10:00 AM' },
              { title: 'Fee Payment Deadline', date: '20 May 2026', time: 'All Day' },
              { title: 'Result Declaration', date: '30 May 2026', time: '02:00 PM' },
            ].map((event, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                <div className="text-2xl">📌</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{event.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{event.date} • {event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



// Fees Tab Component continues in next part...
