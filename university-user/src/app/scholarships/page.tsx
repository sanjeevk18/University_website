import type { Metadata } from 'next';
import ScholarshipForm from '@/components/forms/ScholarshipForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Scholarship Application | State Allied Healthcare University',
  description: 'Apply for scholarships and financial aid at State Allied Healthcare University, Lucknow.',
};

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            🎓 Scholarship Application
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Apply for Scholarship</h1>
          <p className="text-green-100 max-w-2xl mx-auto">
            We offer merit-based and need-based scholarships to deserving students.
            Fill the form below to apply for financial assistance.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Scholarships</span>
          </nav>
        </div>
      </div>

      {/* Scholarship Types */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Available Scholarships</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🏆', title: 'Merit-Based', desc: 'For students with 85%+ marks', amount: 'Up to 50% tuition waiver' },
              { icon: '💰', title: 'Need-Based', desc: 'For economically weaker sections', amount: 'Up to 75% tuition waiver' },
              { icon: '🎖️', title: 'Sports & Cultural', desc: 'For state/national level achievers', amount: 'Up to 100% tuition waiver' },
            ].map((s) => (
              <div key={s.title} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100 text-center">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                <div className="text-green-700 font-bold text-sm">{s.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <ScholarshipForm />
        </div>
      </div>
    </div>
  );
}
