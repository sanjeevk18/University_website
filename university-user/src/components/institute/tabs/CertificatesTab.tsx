'use client';

import React from 'react';

interface CertificatesTabProps {
  instituteId: string;
}

export default function CertificatesTab({ instituteId }: CertificatesTabProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Certificate Requests</h2>
          <p className="text-sm text-gray-600 mt-1">Request and track student certificates</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          + New Request
        </button>
      </div>

      {/* Certificate Types */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { type: 'Provisional', icon: '📜', count: 5 },
          { type: 'Final', icon: '🎓', count: 2 },
          { type: 'Migration', icon: '🔄', count: 1 },
          { type: 'Character', icon: '✅', count: 3 },
          { type: 'Bonafide', icon: '📋', count: 4 },
        ].map((cert, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">{cert.icon}</div>
            <p className="font-bold text-gray-800 text-sm">{cert.type}</p>
            <p className="text-xs text-gray-600 mt-1">{cert.count} pending</p>
          </div>
        ))}
      </div>

      {/* Certificate Requests Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Request No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Student Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Enrollment</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Certificate Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Request Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { reqNo: 'CERT-001', student: 'Anjali Sharma', enrollment: 'LMI-2024-001', type: 'Provisional', date: '2024-04-20', status: 'Pending' },
                { reqNo: 'CERT-002', student: 'Neha Kapoor', enrollment: 'LMI-2024-004', type: 'Bonafide', date: '2024-04-18', status: 'Approved' },
                { reqNo: 'CERT-003', student: 'Ravi Kumar', enrollment: 'LMI-2023-101', type: 'Character', date: '2024-04-15', status: 'Issued' },
              ].map((req, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-bold text-blue-700">{req.reqNo}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{req.student}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{req.enrollment}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{req.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{req.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      req.status === 'Issued' ? 'bg-green-100 text-green-700' :
                      req.status === 'Approved' ? 'bg-blue-100 text-blue-700' :
                      req.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">Track</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
