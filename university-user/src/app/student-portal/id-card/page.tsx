import type { Metadata } from 'next';
import IDCardDownload from '@/components/student/IDCardDownload';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download ID Card | Student Portal',
  description: 'Download your student ID card from State Allied Healthcare University.',
};

export default function IDCardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-700 to-blue-700 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            🪪 Student ID Card
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Download Student ID Card</h1>
          <p className="text-teal-100 max-w-2xl mx-auto">
            Enter your enrollment number and date of birth to download your official student ID card.
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
            <span className="text-gray-800 font-medium">ID Card</span>
          </nav>
        </div>
      </div>

      {/* Instructions */}
      <section className="py-8 bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-blue-600">ℹ️</span> ID Card Guidelines
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                ID card will be available after successful enrollment and fee payment.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Print the ID card on thick paper (200 GSM or higher) for durability.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Laminate the ID card for protection and carry it at all times on campus.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                In case of loss or damage, apply for a duplicate ID card at the student services office (₹200 fee).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Download Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <IDCardDownload />
        </div>
      </div>
    </div>
  );
}
