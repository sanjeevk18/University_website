'use client';

import React, { useState } from 'react';

export default function IDCardDownload() {
  const [form, setForm] = useState({ enrollmentNo: '', dob: '' });
  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [studentData, setStudentData] = useState({
    name: '',
    enrollmentNo: '',
    course: '',
    batch: '',
    dob: '',
    bloodGroup: '',
    validUpto: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Generate dummy student data
      setStudentData({
        name: 'Rajesh Kumar Sharma',
        enrollmentNo: form.enrollmentNo,
        course: 'B.Sc Nursing',
        batch: '2024-2028',
        dob: form.dob,
        bloodGroup: 'O+',
        validUpto: '31-Dec-2028',
      });
      setShowCard(true);
      setLoading(false);
    }, 1500);
  };

  const handleDownload = () => {
    alert('ID Card downloaded as PDF successfully!');
  };

  const handleReset = () => {
    setShowCard(false);
    setForm({ enrollmentNo: '', dob: '' });
  };

  return (
    <div className="space-y-6">
      {!showCard ? (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Download Student ID Card</h2>
          <p className="text-gray-500 text-sm mb-6">Enter your details to download your official student ID card.</p>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Enrollment Number <span className="text-red-500">*</span></label>
              <input type="text" name="enrollmentNo" value={form.enrollmentNo} onChange={onChange} required placeholder="e.g. SAHCU-2024-001"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date of Birth <span className="text-red-500">*</span></label>
              <input type="date" name="dob" value={form.dob} onChange={onChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 disabled:opacity-60 transition-all flex items-center justify-center gap-2">
              {loading ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>Loading...</> : <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                View ID Card
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
              <h3 className="font-semibold text-green-800">ID Card Found!</h3>
              <p className="text-sm text-green-700 mt-1">Your student ID card is ready for download.</p>
            </div>
          </div>

          {/* ID Card Preview */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Student ID Card Preview</h3>
            
            {/* ID Card - Front Side */}
            <div className="max-w-md mx-auto">
              <div className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-blue-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
                </div>

                {/* Card Content */}
                <div className="relative p-6">
                  {/* Header */}
                  <div className="text-center mb-4 pb-4 border-b border-white/30">
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-teal-700">U</span>
                    </div>
                    <h4 className="text-white font-bold text-sm leading-tight">State Allied Healthcare University</h4>
                    <p className="text-teal-100 text-xs mt-1">Lucknow, Uttar Pradesh</p>
                  </div>

                  {/* Photo and Details */}
                  <div className="flex gap-4 mb-4">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-28 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-teal-200">
                        <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Student Details */}
                    <div className="flex-1 space-y-2 text-white">
                      <div>
                        <p className="text-teal-200 text-xs font-medium">Student Name</p>
                        <p className="font-bold text-sm">{studentData.name}</p>
                      </div>
                      <div>
                        <p className="text-teal-200 text-xs font-medium">Enrollment No.</p>
                        <p className="font-bold text-sm">{studentData.enrollmentNo}</p>
                      </div>
                      <div>
                        <p className="text-teal-200 text-xs font-medium">Course</p>
                        <p className="font-bold text-sm">{studentData.course}</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-3 text-white text-xs">
                    <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                      <p className="text-teal-200 font-medium">Batch</p>
                      <p className="font-bold">{studentData.batch}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                      <p className="text-teal-200 font-medium">Blood Group</p>
                      <p className="font-bold">{studentData.bloodGroup}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                      <p className="text-teal-200 font-medium">Date of Birth</p>
                      <p className="font-bold">{new Date(studentData.dob).toLocaleDateString('en-GB')}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                      <p className="text-teal-200 font-medium">Valid Upto</p>
                      <p className="font-bold">{studentData.validUpto}</p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-4 pt-3 border-t border-white/30 flex items-center justify-between">
                    <div className="text-white text-xs">
                      <p className="font-bold">Principal's Signature</p>
                      <div className="h-6 flex items-end">
                        <span className="italic text-teal-200">Dr. A.K. Singh</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-xs text-gray-400 border-2 border-teal-200">
                      QR Code
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Back Side Preview */}
              <div className="mt-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 border-4 border-white shadow-xl">
                <h5 className="font-bold text-gray-800 text-center mb-3 text-sm">Important Instructions</h5>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>This card is the property of the university and must be returned on demand.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Loss of this card should be reported immediately to the administration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>This card must be carried at all times while on campus premises.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Misuse of this card may result in disciplinary action.</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-300 text-center">
                  <p className="text-xs text-gray-600 font-medium">Emergency Contact</p>
                  <p className="text-xs text-gray-800 font-bold">+91 522 123 4567</p>
                  <p className="text-xs text-gray-600 mt-1">www.sahu.edu.in</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8 max-w-md mx-auto">
              <button
                onClick={handleDownload}
                className="flex-1 bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
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
        </div>
      )}
    </div>
  );
}
