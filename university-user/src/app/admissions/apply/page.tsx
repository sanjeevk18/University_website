import type { Metadata } from 'next';
import AdmissionForm from '@/components/forms/AdmissionForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Apply for Admission | State Allied Healthcare University',
  description: 'Apply online for admission to undergraduate and postgraduate programs at State Allied Healthcare University, Lucknow.',
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            📝 Online Admission Application
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Apply for Admission 2024-25</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Fill in your details carefully. Our admissions team will review your application
            and contact you within 3-5 working days.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Admissions</span>
            <span>/</span>
            <span className="text-gray-800 font-medium">Apply</span>
          </nav>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { step: '01', label: 'Fill Application Form' },
              { step: '02', label: 'Upload Documents' },
              { step: '03', label: 'Pay Application Fee' },
              { step: '04', label: 'Get Application ID' },
            ].map((s, i, arr) => (
              <div key={s.step} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                  {s.step}
                </div>
                <span className="text-sm font-medium text-gray-700">{s.label}</span>
                {i < arr.length - 1 && (
                  <svg className="w-4 h-4 text-gray-300 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <AdmissionForm />
        </div>
      </div>
    </div>
  );
}
