import type { Metadata } from 'next';
import CenterAuthForm from '@/components/centers/CenterAuthForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Center Registration | State Allied Healthcare University',
  description: 'Register your institute or teacher profile with State Allied Healthcare University, Lucknow.',
};

export default function CenterRegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Top bar */}
      <div className="bg-blue-700 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>State Allied Healthcare University — New Registration</span>
          <Link href="/" className="underline hover:text-blue-200 transition-colors">← Back to Home</Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            🏫 Affiliation Registration
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Register with SAHCU</h1>
          <p className="text-blue-100 max-w-xl mx-auto text-sm">
            Register as a Teacher or Institute Owner. Our team will verify your details
            and respond within 7 working days.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {[
              { step: '01', label: 'Select Role & Fill Form' },
              { step: '02', label: 'Submit Documents' },
              { step: '03', label: 'University Verification' },
              { step: '04', label: 'Get Login Credentials' },
            ].map((s, i, arr) => (
              <div key={s.step} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
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
        <div className="max-w-3xl mx-auto">
          {/* Auth Form (register tab by default) */}
          <CenterAuthForm defaultTab="register" />
        </div>
      </div>
    </div>
  );
}
