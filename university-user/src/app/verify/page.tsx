import type { Metadata } from 'next';
import VerifyRegistration from '@/components/student/VerifyRegistration';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verify Registration | State Allied Healthcare University',
  description: 'Verify student registration and certificate authenticity at State Allied Healthcare University, Lucknow.',
};

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            ✅ Verification Portal
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Verify Student Registration</h1>
          <p className="text-orange-100 max-w-2xl mx-auto">
            Verify the authenticity of student enrollment, certificates, and documents issued
            by State Allied Healthcare University.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Verify Registration</span>
          </nav>
        </div>
      </div>

      {/* Info Cards */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">What Can You Verify?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🎓', title: 'Student Enrollment', desc: 'Verify if a student is currently enrolled or has completed a program' },
              { icon: '📜', title: 'Certificate Authenticity', desc: 'Verify degree, diploma, or certificate issued by the university' },
              { icon: '📋', title: 'Marksheet Verification', desc: 'Verify semester or final year marksheets and transcripts' },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <VerifyRegistration />
        </div>
      </div>

      {/* Help Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help with Verification?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            If you face any issues or need manual verification, contact our verification office.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:verification@sahcl.edu.in" className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Verification Office
            </a>
            <a href="tel:+915221234567" className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +91 522 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
