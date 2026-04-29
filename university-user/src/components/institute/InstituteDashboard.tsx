'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OverviewTab from './tabs/OverviewTab';
import StudentsTab from './tabs/StudentsTab';
import CoursesTab from './tabs/CoursesTab';
import FeesTab from './tabs/FeesTab';
import ExamsTab from './tabs/ExamsTab';
import ResultsTab from './tabs/ResultsTab';
import DocumentsTab from './tabs/DocumentsTab';
import CertificatesTab from './tabs/CertificatesTab';
import NoticesTab from '../student/tabs/NoticesTab';
import SupportTab from './tabs/SupportTab';
import ProfileTab from './tabs/ProfileTab';


type Tab = 'overview' | 'students' | 'courses' | 'fees' | 'exams' | 'results' | 'documents' | 'certificates' | 'notices' | 'support' | 'profile';

export default function InstituteDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [instituteData, setInstituteData] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('instituteLoggedIn');
    if (!isLoggedIn) {
      router.push('/centers/login');
      return;
    }
    const data = JSON.parse(localStorage.getItem('instituteData') || '{}');
    setInstituteData(data);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('instituteLoggedIn');
    localStorage.removeItem('instituteData');
    router.push('/centers/login');
  };

  if (!instituteData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
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
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'certificates', label: 'Certificates', icon: '🎓' },
    { id: 'notices', label: 'Notices', icon: '📢' },
    { id: 'support', label: 'Support', icon: '🎫' },
    { id: 'profile', label: 'Profile', icon: '🏢' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 border-b border-blue-700 sticky top-0 z-40 shadow-lg">
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
                <span className="text-blue-600 font-bold text-lg">I</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-white">Institute Portal</h1>
                <p className="text-xs text-blue-100">State Allied Healthcare University</p>
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
            {/* Institute Profile Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-4 mb-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm truncate">{instituteData.instituteName}</h3>
                  <p className="text-xs text-blue-200 truncate">{instituteData.instituteCode}</p>
                </div>
              </div>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-blue-200">Status:</span>
                  <span className="font-semibold">{instituteData.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Type:</span>
                  <span className="font-semibold text-xs truncate">{instituteData.instituteType}</span>
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
                      ? 'bg-blue-50 text-blue-700'
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
          {activeTab === 'overview' && <OverviewTab instituteId={instituteData.id} />}
          {activeTab === 'students' && <StudentsTab instituteId={instituteData.id} />}
          {activeTab === 'courses' && <CoursesTab instituteId={instituteData.id} />}
          {activeTab === 'fees' && <FeesTab instituteId={instituteData.id} />}
          {activeTab === 'exams' && <ExamsTab instituteId={instituteData.id} />}
          {activeTab === 'results' && <ResultsTab instituteId={instituteData.id} />}
          {activeTab === 'documents' && <DocumentsTab instituteId={instituteData.id} />}
          {activeTab === 'certificates' && <CertificatesTab instituteId={instituteData.id} />}
          {activeTab === 'notices' && <NoticesTab />}
          {activeTab === 'support' && <SupportTab instituteId={instituteData.id} />}
          {activeTab === 'profile' && <ProfileTab instituteData={instituteData} />}
        </main>
      </div>
    </div>
  );
}
