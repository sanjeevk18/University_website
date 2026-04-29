import type { Metadata } from 'next';
import StudentLoginForm from '@/components/student/StudentLoginForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Student Portal | State Allied Healthcare University',
  description: 'Login to student portal to access your dashboard, results, admit card, ID card and more.',
};

export default function StudentPortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Top bar */}
      <div className="bg-indigo-700 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>State Allied Healthcare University — Student Portal</span>
          <Link href="/" className="underline hover:text-indigo-200 transition-colors">← Back to Home</Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Info */}
          <div className="hidden lg:block sticky top-8">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Student Portal</h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Access your personalized student dashboard with exam results, admit cards,
              ID cards, fee receipts, and important notices.
            </p>

            <div className="space-y-3">
              {[
                { icon: '📊', title: 'View Results', desc: 'Check semester exam results online' },
                { icon: '🎫', title: 'Download Admit Card', desc: 'Get your exam hall ticket' },
                { icon: '🪪', title: 'Download ID Card', desc: 'Print your student ID card' },
                { icon: '💳', title: 'Fee Payment', desc: 'Pay fees online and download receipts' },
                { icon: '📢', title: 'Notices', desc: 'Stay updated with university announcements' },
                { icon: '📚', title: 'Course Material', desc: 'Access study materials and notes' },
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
          </div>

          {/* Right — Login Form */}
          <StudentLoginForm />
        </div>
      </div>
    </div>
  );
}
