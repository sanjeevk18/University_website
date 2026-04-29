import AdminLoginForm from '@/components/auth/AdminLoginForm';
import Link from 'next/link';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Top bar */}
      <div className="bg-black/30 backdrop-blur-sm text-white text-sm py-2 border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="font-semibold">🎓 State Allied Healthcare University — Admin Portal</span>
          <Link href="http://localhost:3000" className="underline hover:text-purple-300 transition-colors">
            ← Back to Website 
          </Link>
        </div>

      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Info */}
          <div className="text-white">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
              <span className="text-white font-bold text-3xl">A</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              University Admin Panel
            </h1>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Comprehensive management system for university operations. Manage students, courses,
              fees, examinations, results, and all administrative tasks from one powerful dashboard.
            </p>

            <div className="space-y-4">
              {[
                { icon: '👥', title: 'Student Management', desc: 'Manage enrollments, profiles, and records' },
                { icon: '📚', title: 'Course Management', desc: 'Create and manage courses and subjects' },
                { icon: '💰', title: 'Fee Management', desc: 'Track payments and generate receipts' },
                { icon: '📝', title: 'Exam Management', desc: 'Schedule exams and publish results' },
                { icon: '🎓', title: 'Certificate Management', desc: 'Issue and verify certificates' },
                { icon: '📊', title: 'Analytics & Reports', desc: 'Comprehensive insights and reports' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-white text-sm">{item.title}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Login Form */}
          <AdminLoginForm />
        </div>
      </div>
    </div>
  );
}
