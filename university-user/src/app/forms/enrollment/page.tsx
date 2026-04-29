import type { Metadata } from 'next';
import EnrollmentForm from '@/components/forms/EnrollmentForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enrollment Form | State Allied Healthcare University',
  description: 'Complete your enrollment at State Allied Healthcare University, Lucknow.',
};

export default function EnrollmentFormPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            📋 Student Enrollment
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Student Enrollment Form</h1>
          <p className="text-teal-100 max-w-2xl mx-auto">
            Complete your enrollment process by filling this form. Make sure all details match
            your admission documents.
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
            <span className="text-gray-800 font-medium">Enrollment</span>
          </nav>
        </div>
      </div>

      {/* Info */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-yellow-600">⚠</span> Important Instructions
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                This form is only for students who have received admission confirmation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                Keep your admission letter and fee receipt ready before filling this form
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                Upload clear scanned copies of all required documents (max 5MB each)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                After submission, you will receive your enrollment number via email within 48 hours
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <EnrollmentForm />
        </div>
      </div>
    </div>
  );
}
