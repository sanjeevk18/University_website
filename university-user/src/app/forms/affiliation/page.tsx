import type { Metadata } from 'next';
import AffiliationForm from '@/components/forms/AffiliationForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliation Form | State Allied Healthcare University',
  description: 'Apply for affiliation with State Allied Healthcare University, Lucknow.',
};

export default function AffiliationFormPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            🏫 Institute Affiliation
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Affiliation Application Form</h1>
          <p className="text-purple-100 max-w-2xl mx-auto">
            Apply for affiliation with State Allied Healthcare University. Fill in your institute
            details to begin the affiliation process.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Forms</span>
            <span>/</span>
            <span className="text-gray-800 font-medium">Affiliation</span>
          </nav>
        </div>
      </div>

      {/* Info */}
      <section className="py-8 bg-blue-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-blue-600">ℹ️</span> Affiliation Requirements
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Institute must have adequate infrastructure and qualified faculty
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Valid registration certificate and NOC from local authorities required
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Affiliation fee must be paid within 15 days of application submission
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                University inspection team will visit the institute for verification
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <AffiliationForm />
        </div>
      </div>
    </div>
  );
}
