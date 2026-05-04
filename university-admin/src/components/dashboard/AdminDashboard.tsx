'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OverviewTab from './tabs/OverviewTab';
import StudentsTab from './tabs/StudentsTab';
import CoursesTab from './tabs/CoursesTab';
import FeesTab from './tabs/FeesTab';
import ExamsTab from './tabs/ExamsTab';
import ResultsTab from './tabs/ResultsTab';
import CertificatesTab from './tabs/CertificatesTab';
import StaffTab from './tabs/StaffTab';
import ReportsTab from './tabs/ReportsTab';

type Tab = 'overview' | 'students' | 'courses' | 'fees' | 'exams' | 'results' | 'certificates' | 'staff' | 'reports' | 'settings';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [adminData, setAdminData] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      router.push('/');
      return;
    }
    const data = JSON.parse(localStorage.getItem('adminData') || '{}');
    setAdminData(data);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminData');
    router.push('/');
  };

  if (!adminData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: '🏠' },
    { id: 'students', label: 'Students', icon: '👥' },
    { id: 'courses', label: 'Courses', icon: '📚' },
    { id: 'fees', label: 'Fees', icon: '💰' },
    { id: 'exams', label: 'Exams', icon: '📝' },
    { id: 'results', label: 'Results', icon: '📊' },
    { id: 'certificates', label: 'Certificates', icon: '🎓' },
    { id: 'staff', label: 'Staff', icon: '👨‍🏫' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 border-b border-purple-700 sticky top-0 z-40 shadow-lg">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-purple-600 font-bold text-lg">A</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-white">SAHU Admin Panel</h1>
                <p className="text-xs text-purple-100">State Allied Healthcare University</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 hover:bg-white/10 rounded-lg text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-gray-200 w-64 transition-transform duration-300 z-30 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="p-4 h-full overflow-y-auto">
            {/* Admin Profile Card */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl p-4 mb-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm truncate">{adminData.name}</h3>
                  <p className="text-xs text-purple-200 truncate">{adminData.role}</p>
                </div>
              </div>
              <div className="text-xs">
                <div className="flex justify-between">
                  <span className="text-purple-200">Department:</span>
                  <span className="font-semibold">{adminData.department}</span>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as Tab);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-purple-50 text-purple-700'
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
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 max-w-7xl">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'students' && <StudentsTab />}
          {activeTab === 'courses' && <CoursesTab />}
          {activeTab === 'fees' && <FeesTab />}
          {activeTab === 'exams' && <ExamsTab />}
          {activeTab === 'results' && <ResultsTab />}
          {activeTab === 'certificates' && <CertificatesTab />}
          {activeTab === 'staff' && <StaffTab />}
          {activeTab === 'reports' && <ReportsTab />}
          {activeTab === 'settings' && <div className="text-center py-20 text-gray-500">Settings - Coming Soon</div>}
        </main>
      </div>
    </div>
  );
}
