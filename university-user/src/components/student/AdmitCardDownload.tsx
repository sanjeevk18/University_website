'use client';

import React, { useState } from 'react';

export default function AdmitCardDownload() {
  const [form, setForm] = useState({ enrollmentNo: '', dob: '' });
  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [examData, setExamData] = useState({
    name: '',
    enrollmentNo: '',
    course: '',
    semester: '',
    examCenter: '',
    examDate: '',
    reportingTime: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Generate dummy exam data
      setExamData({
        name: 'Rajesh Kumar Sharma',
        enrollmentNo: form.enrollmentNo,
        course: 'B.Sc Nursing',
        semester: '4th Semester',
        examCenter: 'Main Campus, Lucknow',
        examDate: '15th May 2026',
        reportingTime: '09:00 AM',
      });
      setShowCard(true);
      setLoading(false);
    }, 1500);
  };

  const handleDownload = () => {
    alert('Admit Card downloaded as PDF successfully!');
  };

  const handleReset = () => {
    setShowCard(false);
    setForm({ enrollmentNo: '', dob: '' });
  };

  const examSubjects = [
    { date: '15-May-2026', time: '10:00 AM - 01:00 PM', subject: 'Anatomy & Physiology', code: 'NUR401' },
    { date: '17-May-2026', time: '10:00 AM - 01:00 PM', subject: 'Pharmacology', code: 'NUR402' },
    { date: '19-May-2026', time: '10:00 AM - 01:00 PM', subject: 'Pathology', code: 'NUR403' },
    { date: '21-May-2026', time: '10:00 AM - 01:00 PM', subject: 'Community Medicine', code: 'NUR404' },
    { date: '23-May-2026', time: '10:00 AM - 01:00 PM', subject: 'Clinical Practice', code: 'NUR405' },
  ];

  return (
    <div className="space-y-6">
      {!showCard ? (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Download Admit Card</h2>
          <p className="text-gray-500 text-sm mb-6">Enter your details to download your examination hall ticket.</p>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Enrollment Number <span className="text-red-500">*</span></label>
              <input type="text" name="enrollmentNo" value={form.enrollmentNo} onChange={onChange} required placeholder="e.g. SAHCU-2024-001"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date of Birth <span className="text-red-500">*</span></label>
              <input type="date" name="dob" value={form.dob} onChange={onChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 disabled:opacity-60 transition-all flex items-center justify-center gap-2">
              {loading ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>Loading...</> : <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                View Admit Card
              </>}
            </button>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Success Message */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-green-800">Admit Card Available!</h3>
              <p className="text-sm text-green-700 mt-1">Your examination hall ticket is ready for download.</p>
            </div>
          </div>

          {/* Admit Card Preview */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-purple-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-700">U</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">State Allied Healthcare University</h3>
                  <p className="text-purple-100 text-sm">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
              <div className="mt-3 bg-white/20 rounded-lg py-2 px-4 inline-block">
                <p className="text-lg font-bold">EXAMINATION ADMIT CARD</p>
                <p className="text-sm text-purple-100">May 2026 Examination</p>
              </div>
            </div>

            {/* Student Details */}
            <div className="p-6">
              <div className="flex gap-6 mb-6">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-36 bg-gray-100 rounded-lg border-2 border-purple-200 flex items-center justify-center shadow-md">
                    <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-2">Student Photo</p>
                </div>

                {/* Details Grid */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500 font-medium">Student Name</p>
                    <p className="text-base font-bold text-gray-800">{examData.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Enrollment Number</p>
                    <p className="text-sm font-bold text-purple-700">{examData.enrollmentNo}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Course</p>
                    <p className="text-sm font-semibold text-gray-800">{examData.course}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Semester</p>
                    <p className="text-sm font-semibold text-gray-800">{examData.semester}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Date of Birth</p>
                    <p className="text-sm font-semibold text-gray-800">{new Date(form.dob).toLocaleDateString('en-GB')}</p>
                  </div>
                </div>

                {/* Signature */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <p className="text-xs text-gray-400">Student Signature</p>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-2">Sign Here</p>
                </div>
              </div>

              {/* Exam Center Details */}
              <div className="bg-purple-50 rounded-xl p-4 mb-6 border border-purple-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Examination Center Details
                </h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 font-medium">Center Name</p>
                    <p className="font-bold text-gray-800">{examData.examCenter}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Exam Starts From</p>
                    <p className="font-bold text-gray-800">{examData.examDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Reporting Time</p>
                    <p className="font-bold text-purple-700">{examData.reportingTime}</p>
                  </div>
                </div>
              </div>

              {/* Exam Schedule */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Examination Schedule
                </h4>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead className="bg-purple-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Date</th>
                        <th className="px-4 py-3 text-left font-semibold">Time</th>
                        <th className="px-4 py-3 text-left font-semibold">Subject</th>
                        <th className="px-4 py-3 text-left font-semibold">Code</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {examSubjects.map((exam, idx) => (
                        <tr key={idx} className="hover:bg-purple-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-gray-800">{exam.date}</td>
                          <td className="px-4 py-3 text-gray-700">{exam.time}</td>
                          <td className="px-4 py-3 font-semibold text-gray-800">{exam.subject}</td>
                          <td className="px-4 py-3 text-purple-700 font-bold">{exam.code}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Important Instructions */}
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 mb-6">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-yellow-600">⚠</span>
                  Important Instructions
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Candidates must report to the examination center 30 minutes before the exam time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Carry this admit card along with a valid photo ID proof (Aadhar/Passport/Driving License).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Mobile phones, calculators, and electronic devices are strictly prohibited in the exam hall.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Candidates will not be allowed to enter the exam hall after 30 minutes of exam start time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Any form of malpractice will result in immediate cancellation of the examination.</span>
                  </li>
                </ul>
              </div>

              {/* Footer Signatures */}
              <div className="flex justify-between items-end pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="h-12 flex items-end justify-center">
                    <p className="text-sm italic text-gray-600">Controller of Examinations</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Authorized Signature</p>
                </div>
                <div className="w-24 h-24 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <p className="text-xs text-gray-400 text-center">QR Code</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
            <button
              onClick={handleReset}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Check Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
