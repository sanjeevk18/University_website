import type { Metadata } from 'next';
import ExaminationForm from '@/components/forms/ExaminationForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Examination Form | State Allied Healthcare University',
  description: 'Fill examination form for semester exams at State Allied Healthcare University, Lucknow.',
};

export default function ExaminationFormPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-700 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            📝 Examination Form
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Semester Examination Form</h1>
          <p className="text-red-100 max-w-2xl mx-auto">
            Fill this form to register for your upcoming semester examinations. Ensure all
            details are correct before submission.
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
            <span className="text-gray-800 font-medium">Examination</span>
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
                <span className="text-red-600 font-bold">•</span>
                Examination form must be submitted at least 15 days before the exam date
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                Students with less than 75% attendance will not be allowed to appear for exams
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                All previous semester dues must be cleared before form submission
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                Examination fee must be paid online or via demand draft
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                Admit card will be available 7 days before the examination
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <ExaminationForm />
        </div>
      </div>
    </div>
  );
}
