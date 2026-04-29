import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Postgraduate Programs | State Allied Healthcare University',
  description:
    'Advance your healthcare career with our postgraduate programs including M.Sc Nursing, M.Pharm, MPT, and more at State Allied Healthcare University, Lucknow.',
};

const programs = [
  {
    code: 'MSN',
    title: 'M.Sc Nursing',
    duration: '2 Years',
    seats: 30,
    eligibility: 'B.Sc Nursing with min 55%',
    icon: '🩺',
    color: 'blue',
    specializations: ['Medical-Surgical', 'Obstetrics & Gynecology', 'Pediatric Nursing', 'Psychiatric Nursing'],
    description:
      'Advanced nursing education focusing on clinical specialization, leadership, research, and evidence-based practice in nursing.',
  },
  {
    code: 'MPHARM',
    title: 'M.Pharm',
    duration: '2 Years',
    seats: 30,
    eligibility: 'B.Pharm with min 55%',
    icon: '💊',
    color: 'green',
    specializations: ['Pharmaceutics', 'Pharmacology', 'Pharmaceutical Chemistry', 'Quality Assurance'],
    description:
      'Advanced pharmaceutical sciences program with specialization in drug development, clinical research, and regulatory affairs.',
  },
  {
    code: 'MPT',
    title: 'M.Sc Physiotherapy',
    duration: '2 Years',
    seats: 20,
    eligibility: 'BPT with min 55%',
    icon: '🦴',
    color: 'orange',
    specializations: ['Musculoskeletal', 'Neurological', 'Cardiopulmonary', 'Sports Rehabilitation'],
    description:
      'Specialized postgraduate program in physiotherapy with advanced clinical training and research in rehabilitation sciences.',
  },
  {
    code: 'MMLT',
    title: 'M.Sc Medical Lab Technology',
    duration: '2 Years',
    seats: 20,
    eligibility: 'B.Sc MLT with min 55%',
    icon: '🔬',
    color: 'purple',
    specializations: ['Clinical Biochemistry', 'Microbiology', 'Hematology', 'Molecular Diagnostics'],
    description:
      'Advanced laboratory sciences program covering molecular diagnostics, research methodology, and specialized clinical testing.',
  },
  {
    code: 'MPH',
    title: 'Master of Public Health',
    duration: '2 Years',
    seats: 25,
    eligibility: 'Any healthcare UG degree with min 50%',
    icon: '🏥',
    color: 'teal',
    specializations: ['Epidemiology', 'Health Policy', 'Community Health', 'Health Management'],
    description:
      'Interdisciplinary program preparing healthcare leaders for public health challenges, policy development, and community health management.',
  },
  {
    code: 'MRIT',
    title: 'M.Sc Radiology & Imaging',
    duration: '2 Years',
    seats: 15,
    eligibility: 'B.Sc RIT with min 55%',
    icon: '🩻',
    color: 'red',
    specializations: ['Advanced MRI', 'Interventional Radiology', 'Nuclear Medicine', 'Radiation Oncology'],
    description:
      'Advanced imaging sciences program with focus on cutting-edge diagnostic technologies and interventional procedures.',
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string; border: string; dot: string }> = {
  blue:   { bg: 'bg-blue-50',   text: 'text-blue-600',   badge: 'bg-blue-100 text-blue-700',   border: 'border-blue-200', dot: 'bg-blue-500' },
  green:  { bg: 'bg-green-50',  text: 'text-green-600',  badge: 'bg-green-100 text-green-700',  border: 'border-green-200', dot: 'bg-green-500' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700', border: 'border-purple-200', dot: 'bg-purple-500' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', badge: 'bg-orange-100 text-orange-700', border: 'border-orange-200', dot: 'bg-orange-500' },
  red:    { bg: 'bg-red-50',    text: 'text-red-600',    badge: 'bg-red-100 text-red-700',    border: 'border-red-200', dot: 'bg-red-500' },
  teal:   { bg: 'bg-teal-50',   text: 'text-teal-600',   badge: 'bg-teal-100 text-teal-700',   border: 'border-teal-200', dot: 'bg-teal-500' },
};

const PostgraduatePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              🎓 Postgraduate Programs
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Master&apos;s Degree Programs
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Elevate your expertise with advanced postgraduate programs designed for
              healthcare professionals seeking specialization and leadership roles.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold">{programs.length}+</div>
                <div className="text-indigo-200 text-sm">Programs</div>
              </div>
              <div className="w-px bg-white/30 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold">140+</div>
                <div className="text-indigo-200 text-sm">Total Seats</div>
              </div>
              <div className="w-px bg-white/30 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold">2 Years</div>
                <div className="text-indigo-200 text-sm">Duration</div>
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
            <span className="text-gray-800 font-medium">Postgraduate</span>
          </nav>
        </div>
      </div>

      {/* Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Postgraduate Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our postgraduate programs combine advanced coursework, research, and clinical
              training to prepare specialists for leadership in healthcare.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {programs.map((prog) => {
              const c = colorMap[prog.color];
              return (
                <div
                  key={prog.code}
                  className={`bg-white rounded-2xl border ${c.border} shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Left accent */}
                    <div className={`${c.bg} md:w-48 p-6 flex flex-col items-center justify-center text-center flex-shrink-0`}>
                      <div className="text-5xl mb-3">{prog.icon}</div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.badge} mb-2`}>
                        {prog.code}
                      </span>
                      <div className={`text-sm font-semibold ${c.text}`}>{prog.duration}</div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{prog.title}</h3>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span className="bg-gray-100 px-3 py-1 rounded-full">
                            🪑 {prog.seats} Seats
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{prog.description}</p>

                      <div className="mb-4">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Eligibility
                        </div>
                        <div className="text-sm text-gray-700">{prog.eligibility}</div>
                      </div>

                      <div className="mb-5">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Specializations
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {prog.specializations.map((s) => (
                            <span key={s} className={`text-xs px-3 py-1 rounded-full ${c.badge}`}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/quote"
                        className={`inline-block px-6 py-2 rounded-lg font-semibold text-sm border ${c.border} ${c.text} hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200`}
                      >
                        Apply Now →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why PG */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Pursue Postgraduate Studies Here?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '🔬', title: 'Research Facilities', desc: 'Access to advanced research labs, clinical simulation centers, and digital libraries.' },
              { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'Learn from experienced clinicians, researchers, and industry professionals.' },
              { icon: '🏥', title: 'Hospital Tie-ups', desc: 'Clinical rotations at top hospitals and healthcare institutions across Lucknow.' },
              { icon: '📜', title: 'Recognized Degrees', desc: 'Degrees recognized by UGC, NMC, PCI, and other regulatory bodies.' },
              { icon: '💼', title: 'Placement Support', desc: 'Dedicated placement cell with connections to leading healthcare employers.' },
              { icon: '🌐', title: 'Global Exposure', desc: 'International collaborations and exchange programs with global universities.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Take the Next Step in Your Career</h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            Postgraduate admissions for 2024–25 are now open. Secure your seat today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
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

export default PostgraduatePage;
