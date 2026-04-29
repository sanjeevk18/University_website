import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Undergraduate Programs | State Allied Healthcare University',
  description:
    'Explore our undergraduate healthcare programs including B.Sc Nursing, B.Pharm, Physiotherapy, Radiology, and more at State Allied Healthcare University, Lucknow.',
};

const programs = [
  {
    code: 'BSN',
    title: 'B.Sc Nursing',
    duration: '4 Years',
    seats: 60,
    eligibility: '10+2 with PCB, min 50%',
    icon: '🩺',
    color: 'blue',
    description:
      'A comprehensive nursing program that prepares students for professional nursing practice in hospitals, clinics, and community health settings.',
    highlights: ['Clinical Training', 'Hospital Internship', 'Community Health', 'Research Methods'],
  },
  {
    code: 'BPHARM',
    title: 'B.Pharm',
    duration: '4 Years',
    seats: 60,
    eligibility: '10+2 with PCM/PCB, min 50%',
    icon: '💊',
    color: 'green',
    description:
      'An in-depth pharmacy program covering pharmaceutical sciences, drug formulation, pharmacology, and clinical pharmacy practice.',
    highlights: ['Drug Formulation', 'Pharmacology', 'Clinical Pharmacy', 'Quality Control'],
  },
  {
    code: 'BMLT',
    title: 'B.Sc Medical Lab Technology',
    duration: '3 Years',
    seats: 40,
    eligibility: '10+2 with PCB, min 45%',
    icon: '🔬',
    color: 'purple',
    description:
      'Trains students in diagnostic laboratory techniques, pathology, microbiology, and clinical biochemistry for modern healthcare labs.',
    highlights: ['Pathology', 'Microbiology', 'Biochemistry', 'Hematology'],
  },
  {
    code: 'BPT',
    title: 'B.Sc Physiotherapy',
    duration: '4.5 Years',
    seats: 40,
    eligibility: '10+2 with PCB, min 50%',
    icon: '🦴',
    color: 'orange',
    description:
      'Prepares students to assess, diagnose, and treat physical conditions using therapeutic exercises, manual therapy, and rehabilitation techniques.',
    highlights: ['Manual Therapy', 'Rehabilitation', 'Sports Physio', 'Neuro Physio'],
  },
  {
    code: 'BRIT',
    title: 'B.Sc Radiology & Imaging Technology',
    duration: '3 Years',
    seats: 30,
    eligibility: '10+2 with PCB/PCM, min 45%',
    icon: '🩻',
    color: 'red',
    description:
      'Covers diagnostic imaging techniques including X-ray, CT scan, MRI, and ultrasound for accurate medical diagnosis.',
    highlights: ['X-Ray Technology', 'CT & MRI', 'Ultrasound', 'Radiation Safety'],
  },
  {
    code: 'BOTT',
    title: 'B.Sc Occupational Therapy',
    duration: '4.5 Years',
    seats: 30,
    eligibility: '10+2 with PCB, min 45%',
    icon: '🧠',
    color: 'teal',
    description:
      'Focuses on helping patients regain independence in daily activities through therapeutic interventions and adaptive strategies.',
    highlights: ['Adaptive Techniques', 'Mental Health', 'Pediatric OT', 'Geriatric Care'],
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string; border: string }> = {
  blue:   { bg: 'bg-blue-50',   text: 'text-blue-600',   badge: 'bg-blue-100 text-blue-700',   border: 'border-blue-200' },
  green:  { bg: 'bg-green-50',  text: 'text-green-600',  badge: 'bg-green-100 text-green-700',  border: 'border-green-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', badge: 'bg-orange-100 text-orange-700', border: 'border-orange-200' },
  red:    { bg: 'bg-red-50',    text: 'text-red-600',    badge: 'bg-red-100 text-red-700',    border: 'border-red-200' },
  teal:   { bg: 'bg-teal-50',   text: 'text-teal-600',   badge: 'bg-teal-100 text-teal-700',   border: 'border-teal-200' },
};

const UndergraduatePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              🎓 Undergraduate Programs
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bachelor&apos;s Degree Programs
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Launch your healthcare career with our industry-aligned undergraduate programs
              designed to build strong clinical and academic foundations.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold">{programs.length}+</div>
                <div className="text-blue-200 text-sm">Programs</div>
              </div>
              <div className="w-px bg-white/30 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold">260+</div>
                <div className="text-blue-200 text-sm">Total Seats</div>
              </div>
              <div className="w-px bg-white/30 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold">3–4.5</div>
                <div className="text-blue-200 text-sm">Years Duration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Academics</span>
            <span>/</span>
            <span className="text-gray-800 font-medium">Undergraduate</span>
          </nav>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Available Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All programs are approved by the relevant regulatory bodies and designed in
              collaboration with leading healthcare institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog) => {
              const c = colorMap[prog.color];
              return (
                <div
                  key={prog.code}
                  className={`bg-white rounded-2xl border ${c.border} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group`}
                >
                  <div className={`${c.bg} px-6 py-5 flex items-center justify-between`}>
                    <div className="text-4xl">{prog.icon}</div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.badge}`}>
                      {prog.code}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{prog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{prog.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-gray-500 text-xs mb-1">Duration</div>
                        <div className="font-semibold text-gray-800">{prog.duration}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-gray-500 text-xs mb-1">Seats</div>
                        <div className="font-semibold text-gray-800">{prog.seats}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-1">Eligibility</div>
                      <div className="text-sm text-gray-700">{prog.eligibility}</div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {prog.highlights.map((h) => (
                        <span key={h} className={`text-xs px-2 py-1 rounded-full ${c.badge}`}>
                          {h}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/quote"
                      className={`block text-center w-full py-2.5 rounded-lg font-semibold text-sm ${c.text} border ${c.border} hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200`}
                    >
                      Apply Now →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Admission Process</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Fill Application', desc: 'Complete the online application form with required details.' },
              { step: '02', title: 'Submit Documents', desc: 'Upload mark sheets, ID proof, and passport photo.' },
              { step: '03', title: 'Entrance / Merit', desc: 'Qualify entrance test or merit-based selection.' },
              { step: '04', title: 'Fee Payment', desc: 'Pay admission fee and confirm your seat.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Healthcare Journey?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Admissions are open for 2024–25. Limited seats available. Apply today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UndergraduatePage;
