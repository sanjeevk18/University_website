'use client';

import React from 'react';

interface DocumentsTabProps {
  instituteId: string;
}

export default function DocumentsTab({ instituteId }: DocumentsTabProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Document Management</h2>
        <p className="text-sm text-gray-600 mt-1">Upload and manage institute documents</p>
      </div>

      {/* Upload Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-300 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">📤</div>
        <h3 className="font-bold text-gray-800 mb-2">Upload Documents</h3>
        <p className="text-sm text-gray-600 mb-4">Drag and drop files here or click to browse</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          Choose Files
        </button>
        <p className="text-xs text-gray-500 mt-3">Supported: PDF, JPG, PNG (Max 10MB)</p>
      </div>

      {/* Document Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { category: 'Student Documents', count: 45, icon: '👥', color: 'bg-blue-100 text-blue-700' },
          { category: 'Attendance Files', count: 12, icon: '📅', color: 'bg-green-100 text-green-700' },
          { category: 'Exam Data', count: 8, icon: '📝', color: 'bg-purple-100 text-purple-700' },
          { category: 'Affiliation Docs', count: 5, icon: '🏫', color: 'bg-orange-100 text-orange-700' },
          { category: 'Fee Receipts', count: 32, icon: '💰', color: 'bg-yellow-100 text-yellow-700' },
          { category: 'Other Documents', count: 15, icon: '📄', color: 'bg-gray-100 text-gray-700' },
        ].map((doc, idx) => (
          <div key={idx} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 ${doc.color} rounded-lg flex items-center justify-center text-2xl mb-3`}>
              {doc.icon}
            </div>
            <h3 className="font-bold text-gray-800 mb-1">{doc.category}</h3>
            <p className="text-sm text-gray-600">{doc.count} files</p>
            <button className="mt-3 w-full px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100">
              View Files
            </button>
          </div>
        ))}
      </div>

      {/* Recent Uploads */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Recent Uploads</h3>
        <div className="space-y-3">
          {[
            { name: 'Student_Attendance_March_2024.xlsx', size: '2.4 MB', date: '2024-04-25', type: 'Excel' },
            { name: 'Exam_Forms_Semester_2.pdf', size: '1.8 MB', date: '2024-04-24', type: 'PDF' },
            { name: 'Fee_Receipt_Batch_10.pdf', size: '856 KB', date: '2024-04-23', type: 'PDF' },
          ].map((file, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">📄</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{file.name}</p>
                  <p className="text-xs text-gray-600">{file.size} • {file.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Download</button>
                <button className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
