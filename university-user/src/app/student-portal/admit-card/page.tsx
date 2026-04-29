import type { Metadata } from 'next';
import AdmitCardDownload from '@/components/student/AdmitCardDownload';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download Admit Card | Student Portal',
  description: 'Download your examination admit card / hall ticket from State Allied Healthcare University.',
};

export default function AdmitCardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            🎫 Examination Admit Card
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Download Admit Card</h1>
          <p className="text-purple-100 max-w-2xl mx-auto">
            Enter your enrollment number and date of birth to download your examination hall ticket.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/student-portal" className="hover:text-blue-600 transition-colors">Student Portal</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Admit Card</span>
          </nav>
        </div>
      </div>

      {/* Instructions */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-yellow-600">⚠</span> Important Instructions
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Admit card will be available 7 days before the examination date.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Carry a printed copy of the admit card along with a valid photo ID to the exam center.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Check all details carefully. Report any discrepancies to the examination office immediately.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Students without a valid admit card will not be allowed to appear for the examination.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Download Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <AdmitCardDownload />
        </div>
      </div>
    </div>
  );
}
