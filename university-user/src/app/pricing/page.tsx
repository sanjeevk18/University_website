import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Scholarships | Financial Aid',
  description: 'Apply for scholarships and financial aid at State Allied Healthcare University, Lucknow.',
};

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholarship Programs</h1>
            <p className="text-xl text-green-100">
              We believe financial constraints should never be a barrier to quality education.
              Apply for our scholarship programs and get financial assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section id="scholarships" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Scholarship Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe financial constraints should never be a barrier to quality education.
              Apply for our scholarship programs and get financial assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              { 
                icon: '🏆', 
                title: 'Merit-Based Scholarship', 
                desc: 'For students with 85%+ marks in previous exams',
                amount: 'Up to 50% tuition waiver',
                color: 'blue'
              },
              { 
                icon: '💰', 
                title: 'Need-Based Scholarship', 
                desc: 'For economically weaker sections (EWS)',
                amount: 'Up to 75% tuition waiver',
                color: 'green'
              },
              { 
                icon: '🎖️', 
                title: 'Sports & Cultural', 
                desc: 'For state/national level achievers',
                amount: 'Up to 100% tuition waiver',
                color: 'purple'
              },
            ].map((s) => (
              <div key={s.title} className={`bg-white rounded-2xl p-6 border-2 ${
                s.color === 'blue' ? 'border-blue-200' : s.color === 'green' ? 'border-green-200' : 'border-purple-200'
              } shadow-sm hover:shadow-md transition-shadow`}>
                <div className="text-4xl mb-4 text-center">{s.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2 text-center">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">{s.desc}</p>
                <div className={`text-center font-bold text-sm py-2 px-4 rounded-lg ${
                  s.color === 'blue' ? 'bg-blue-100 text-blue-700' : 
                  s.color === 'green' ? 'bg-green-100 text-green-700' : 
                  'bg-purple-100 text-purple-700'
                }`}>
                  {s.amount}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/scholarships" 
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 hover:scale-105 transition-all shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Apply for Scholarship
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Application deadline: 30th June 2024
            </p>
          </div>
        </div>
      </section>

      {/* Admission Brochure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Admission Brochure</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-4 px-6 text-left text-sm font-bold w-24">S.no</th>
                    <th className="py-4 px-6 text-left text-sm font-bold">Title</th>
                    <th className="py-4 px-6 text-center text-sm font-bold w-40">Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { sno: 1, title: 'Information Brochure 2025-26' },
                    { sno: 2, title: 'Information Brochure 2024-25' },
                    { sno: 3, title: 'Information Brochure 2023-24' },
                    { sno: 4, title: 'Admission Notice & Rules 2023-24 (University Campus and Affiliated Colleges)' },
                    { sno: 5, title: 'Admission notice for Online Degree Programs' },
                  ].map((item) => (
                    <tr key={item.sno} className="hover:bg-blue-50 transition-colors">
                      <td className="py-4 px-6 text-gray-700 font-medium">{item.sno}</td>
                      <td className="py-4 px-6 text-gray-700">{item.title}</td>
                      <td className="py-4 px-6 text-center">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Scholarship Eligibility</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-blue-600">✓</span> General Requirements
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  Must be a currently enrolled student
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  Minimum 75% attendance in previous semester
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  No pending dues or disciplinary actions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  Valid income certificate (for need-based)
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-green-600">📄</span> Required Documents
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  Last semester marksheet
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  Income certificate (for need-based)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  Aadhar card copy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  Achievement certificates (for sports/cultural)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
