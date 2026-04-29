'use client';

import React, { useState } from 'react';

export default function CertificatesTab({ studentData }: any) {
  const [verifyEnrollment, setVerifyEnrollment] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleVerify = () => {
    if (verifyEnrollment) {
      setVerificationResult({
        valid: true,
        name: 'Rajesh Kumar Sharma',
        enrollment: verifyEnrollment,
        course: 'B.Sc Nursing',
        batch: '2024-2028',
        status: 'Active',
      });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Certificates & Verification</h2>

      {/* Certificate Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: 'Provisional Certificate', status: 'Available', icon: '📜', color: 'bg-blue-50 border-blue-200' },
          { title: 'Final Degree Certificate', status: 'Not Available', icon: '🎓', color: 'bg-gray-50 border-gray-200' },
          { title: 'Migration Certificate', status: 'Not Available', icon: '📄', color: 'bg-gray-50 border-gray-200' },
          { title: 'Character Certificate', status: 'Available', icon: '✅', color: 'bg-green-50 border-green-200' },
          { title: 'Bonafide Certificate', status: 'Available', icon: '📋', color: 'bg-purple-50 border-purple-200' },
          { title: 'Transfer Certificate', status: 'Not Available', icon: '🔄', color: 'bg-gray-50 border-gray-200' },
        ].map((cert) => (
          <div key={cert.title} className={`${cert.color} border-2 rounded-xl p-5`}>
            <div className="text-4xl mb-3">{cert.icon}</div>
            <h3 className="font-bold text-gray-800 text-sm mb-2">{cert.title}</h3>
            <p className={`text-xs mb-3 ${cert.status === 'Available' ? 'text-green-600' : 'text-gray-500'}`}>
              {cert.status}
            </p>
            {cert.status === 'Available' ? (
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700">
                Download
              </button>
            ) : (
              <button className="w-full px-4 py-2 bg-gray-200 text-gray-500 rounded-lg text-xs font-semibold cursor-not-allowed">
                Not Available
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Provisional Certificate Preview */}
      <div className="bg-white rounded-xl border-2 border-indigo-200 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6 text-center">
          <h3 className="font-bold text-xl mb-1">Provisional Certificate</h3>
          <p className="text-sm text-indigo-100">State Allied Healthcare University</p>
        </div>
        <div className="p-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-3xl">U</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">PROVISIONAL CERTIFICATE</h4>
              <p className="text-sm text-gray-600">This is to certify that</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-700 mb-2">{studentData.name}</p>
                <p className="text-sm text-gray-600">Enrollment No: <span className="font-semibold text-gray-800">{studentData.enrollmentNo}</span></p>
              </div>

              <p className="text-center text-gray-700 leading-relaxed">
                has successfully completed the course of <span className="font-bold text-gray-800">{studentData.course}</span> from this university during the academic session <span className="font-semibold">{studentData.batch}</span> and has been declared eligible for the award of degree.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Date of Issue</p>
                  <p className="font-semibold text-gray-800">29 April 2026</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Certificate No.</p>
                  <p className="font-semibold text-gray-800">PROV/2026/001234</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="h-16 flex items-end justify-center mb-2">
                  <p className="text-sm italic text-gray-600">Controller of Examinations</p>
                </div>
                <p className="text-xs text-gray-500">Authorized Signature</p>
              </div>
              <div className="w-24 h-24 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <p className="text-xs text-gray-400 text-center">QR Code</p>
              </div>
              <div className="text-center">
                <div className="h-16 flex items-end justify-center mb-2">
                  <p className="text-sm italic text-gray-600">Registrar</p>
                </div>
                <p className="text-xs text-gray-500">University Seal</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 shadow-lg">
                Download Certificate PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Public Verification */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-5xl">🔍</div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-1">Public Verification</h3>
            <p className="text-sm text-gray-600">
              Verify student enrollment and certificate authenticity. Anyone can verify using enrollment number.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={verifyEnrollment}
            onChange={(e) => setVerifyEnrollment(e.target.value)}
            placeholder="Enter Enrollment Number"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleVerify}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700"
          >
            Verify
          </button>
        </div>

        {verificationResult && (
          <div className="mt-4 bg-white rounded-lg p-4 border-2 border-green-300">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">✅</span>
              <h4 className="font-bold text-green-700">Verification Successful</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-600">Name:</p>
                <p className="font-semibold text-gray-800">{verificationResult.name}</p>
              </div>
              <div>
                <p className="text-gray-600">Enrollment:</p>
                <p className="font-semibold text-gray-800">{verificationResult.enrollment}</p>
              </div>
              <div>
                <p className="text-gray-600">Course:</p>
                <p className="font-semibold text-gray-800">{verificationResult.course}</p>
              </div>
              <div>
                <p className="text-gray-600">Status:</p>
                <p className="font-semibold text-green-600">{verificationResult.status}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Certificate Request */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Request New Certificate</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Certificate Type</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm">
              <option>Bonafide Certificate</option>
              <option>Character Certificate</option>
              <option>Migration Certificate</option>
              <option>Transfer Certificate</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Purpose</label>
            <input type="text" placeholder="e.g., Bank Loan, Visa" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label>
            <textarea rows={3} placeholder="Any additional information..." className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"></textarea>
          </div>
          <div className="sm:col-span-2">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
