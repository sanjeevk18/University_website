import type { Metadata } from 'next';
import CenterAuthForm from '@/components/centers/CenterAuthForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Center Login | State Allied Healthcare University',
  description: 'Login to your affiliated center portal at State Allied Healthcare University, Lucknow.',
};

export default function CenterLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Top bar */}
      <div className="bg-blue-700 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>State Allied Healthcare University — Center Portal</span>
          <Link href="/" className="underline hover:text-blue-200 transition-colors">← Back to Home</Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Branding */}
          <div className="hidden lg:block sticky top-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-white font-bold text-2xl">U</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Center Portal</h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Access your affiliated institute dashboard to manage student enrollments,
              examination forms, results, and university communications.
            </p>

            <div className="space-y-3">
              {[
                { icon: '📋', title: 'Student Management', desc: 'Enroll and manage your students online' },
                { icon: '📝', title: 'Exam Forms', desc: 'Submit examination and enrollment forms' },
                { icon: '📊', title: 'Results & Reports', desc: 'View results and download reports' },
                { icon: '📢', title: 'Notices & Circulars', desc: 'Stay updated with university notifications' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-800">
              <span className="font-semibold">⚠ Note:</span> For login credentials, contact{' '}
              <span className="font-medium">affiliation@sahcl.edu.in</span>
            </div>
          </div>

          {/* Right — Auth Form (login tab by default) */}
          <CenterAuthForm defaultTab="login" />
        </div>
      </div>
    </div>
  );
}
