import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Diploma Courses | State Allied Healthcare University',
  description:
    'Explore short-term diploma and certificate programs in healthcare at State Allied Healthcare University, Lucknow. Fast-track your career in allied health.',
};

const programs = [
  {
    code: 'DMLT',
    title: 'Diploma in Medical Lab Technology',
    duration: '2 Years',
    seats: 40,
    eligibility: '10+2 with PCB, min 45%',
    icon: '🔬',
    color: 'blue',
    description: 'Hands-on training in clinical laboratory procedures including blood analysis, microbiology, and biochemistry testing.',
    subjects: ['Clinical Biochemistry', 'Hematology', 'Microbiology', 'Pathology Basics'],
  },
  {
    code: 'DPHARM',
    title: 'D.Pharm',
    duration: '2 Years',
    seats: 60,
    eligibility: '10+2 with PCM/PCB, min 45%',
    icon: '💊',
    color: 'green',
    description: 'Foundation-level pharmacy program covering drug dispensing, pharmaceutical chemistry, and community pharmacy practice.',
    subjects: ['Pharmaceutics', 'Pharmacology', 'Pharmaceutical Chemistry', 'Drug Store Management'],
  },
  {
    code: 'DRIT',
    title: 'Diploma in Radiology & Imaging',
    duration: '2 Years',
    seats: 30,
    eligibility: '10+2 with PCB/PCM, min 45%',
    icon: '🩻',
    color: 'purple',
    description: 'Practical training in X-ray operation, darkroom techniques, and basic diagnostic imaging procedures.',
    subjects: ['Radiographic Anatomy', 'X-Ray Technology', 'Darkroom Techniques', 'Radiation Safety'],
  },
  {
    code: 'DOT',
    title: 'Diploma in Operation Theatre Technology',
    duration: '2 Years',
    seats: 30,
    eligibility: '10+2 with PCB, min 45%',
    icon: '🏥',
    color: 'red',
    description: 'Specialized training in operation theatre management, surgical assistance, sterilization, and patient care.',
    subjects: ['OT Management', 'Surgical Instruments', 'Sterilization Techniques', 'Anesthesia Basics'],
  },
  {
    code: 'DOTT',
    title: 'Diploma in Optometry',
    duration: '2 Years',
    seats: 25,
    eligibility: '10+2 with PCB/PCM, min 45%',
    icon: '👁️',
    color: 'teal',
    description: 'Training in vision testing, optical dispensing, and basic eye care procedures for community eye health.',
    subjects: ['Optics', 'Visual Acuity Testing', 'Contact Lens', 'Ocular Anatomy'],
  },
  {
    code: 'DCARD',
    title: 'Diploma in Cardiac Care Technology',
    duration: '2 Years',
    seats: 20,
    eligibility: '10+2 with PCB, min 45%',
    icon: '❤️',
    color: 'orange',
    description: 'Focused training in ECG, cardiac monitoring, and basic cardiac care procedures for ICU and cardiac units.',
    subjects: ['Cardiac Anatomy', 'ECG Interpretation', 'Cardiac Monitoring', 'Emergency Cardiac Care'],
  },
  {
    code: 'CDHA',
    title: 'Certificate in Dental Hygiene & Assistance',
    duration: '1 Year',
    seats: 20,
    eligibility: '10+2 any stream, min 40%',
    icon: '🦷',
    color: 'yellow',
    description: 'Short-term certificate program in dental hygiene, patient care, and dental chair-side assistance.',
    subjects: ['Oral Anatomy', 'Dental Hygiene', 'Chair-side Assistance', 'Infection Control'],
  },
  {
    code: 'CPHA',
    title: 'Certificate in Phlebotomy',
    duration: '6 Months',
    seats: 30,
    eligibility: '10th Pass, min 40%',
    icon: '🩸',
    color: 'pink',
    description: 'Quick-entry certificate program in blood collection techniques, specimen handling, and patient interaction.',
    subjects: ['Venipuncture', 'Specimen Handling', 'Lab Safety', 'Patient Communication'],
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string; border: string }> = {
  blue:   { bg: 'bg-blue-50',   text: 'text-blue-600',   badge: 'bg-blue-100 text-blue-700',   border: 'border-blue-200' },
  green:  { bg: 'bg-green-50',  text: 'text-green-600',  badge: 'bg-green-100 text-green-700',  border: 'border-green-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', badge: 'bg-orange-100 text-orange-700', border: 'border-orange-200' },
  red:    { bg: 'bg-red-50',    text: 'text-red-600',    badge: 'bg-red-100 text-red-700',    border: 'border-red-200' },
  teal:   { bg: 'bg-teal-50',   text: 'text-teal-600',   badge: 'bg-teal-100 text-teal-700',   border: 'border-teal-200' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-800', border: 'border-yellow-200' },
  pink:   { bg: 'bg-pink-50',   text: 'text-pink-600',   badge: 'bg-pink-100 text-pink-700',   border: 'border-pink-200' },
};

const DiplomaPage: React.FC = () => {
  const diplomas = programs.filter((p) => p.duration !== '6 Months' && p.duration !== '1 Year');
  const certificates = programs.filter((p) => p.duration === '6 Months' || p.duration === '1 Year');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              📜 Diploma & Certificate Programs
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Diploma &amp; Certificate Courses
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Fast-track your entry into the healthcare workforce with our practical,
              industry-ready diploma and certificate programs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold">{diplomas.length}</div>
                <div className="text-purple-200 text-sm">Diploma Programs</div>
              </div>
              <div className="w-px bg-white/30 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold">{certificates.length}</div>
                <div className="text-purple-200 text-sm">Certificate Courses</div>
              </div>
              <div className="w-px bg-white/30 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold">6M–2Y</div>
                <div className="text-purple-200 text-sm">Duration Range</div>
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
            <span className="text-gray-800 font-medium">Diploma Courses</span>
          </nav>
        </div>
      </div>

      {/* Diploma Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Diploma Programs</h2>
          <p className="text-gray-600 mb-10">2-year programs with comprehensive clinical training</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diplomas.map((prog) => {
              const c = colorMap[prog.color];
              return (
                <div
                  key={prog.code}
                  className={`bg-white rounded-2xl border ${c.border} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}
                >
                  <div className={`${c.bg} px-6 py-5 flex items-center justify-between`}>
                    <div className="text-4xl">{prog.icon}</div>
                    <div className="text-right">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.badge} block mb-1`}>
                        {prog.code}
                      </span>
                      <span className="text-xs text-gray-500">{prog.duration}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{prog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{prog.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-gray-500 text-xs mb-1">Seats</div>
                        <div className="font-semibold text-gray-800">{prog.seats}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-gray-500 text-xs mb-1">Duration</div>
                        <div className="font-semibold text-gray-800">{prog.duration}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-1">Eligibility</div>
                      <div className="text-sm text-gray-700">{prog.eligibility}</div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {prog.subjects.map((s) => (
                        <span key={s} className={`text-xs px-2 py-1 rounded-full ${c.badge}`}>{s}</span>
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

      {/* Certificate Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Certificate Programs</h2>
          <p className="text-gray-600 mb-10">Short-term courses for quick entry into healthcare</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {certificates.map((prog) => {
              const c = colorMap[prog.color];
              return (
                <div
                  key={prog.code}
                  className={`bg-white rounded-2xl border ${c.border} shadow-sm hover:shadow-md transition-all duration-300 flex gap-5 p-6`}
                >
                  <div className={`${c.bg} w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0`}>
                    {prog.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base font-bold text-gray-800">{prog.title}</h3>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge} flex-shrink-0`}>
                        {prog.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{prog.description}</p>
                    <div className="text-xs text-gray-500 mb-3">
                      <span className="font-medium">Eligibility:</span> {prog.eligibility}
                    </div>
                    <Link
                      href="/quote"
                      className={`text-sm font-semibold ${c.text} hover:underline`}
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

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose a Diploma Program?
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '⚡', title: 'Quick Entry', desc: 'Start your healthcare career in 1–2 years.' },
              { icon: '💰', title: 'Affordable', desc: 'Lower tuition fees compared to degree programs.' },
              { icon: '🏥', title: 'Job-Ready', desc: 'Practical training ensures immediate employability.' },
              { icon: '📈', title: 'Upgrade Path', desc: 'Lateral entry options to degree programs available.' },
            ].map((item) => (
              <div key={item.title} className="text-center bg-gray-50 rounded-xl p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start Your Healthcare Career Today</h2>
          <p className="text-purple-100 mb-8 max-w-xl mx-auto">
            Admissions open for 2024–25. Limited seats. Apply before they fill up.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="bg-white text-purple-700 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors">
              Apply Now
            </Link>
            <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiplomaPage;
