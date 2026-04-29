'use client';

import React, { useState } from 'react';

export default function ProfileTab({ studentData }: any) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    mobile: studentData.mobile,
    email: studentData.email,
    address: studentData.address,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
        <button
          onClick={() => setEditing(!editing)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700"
        >
          {editing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-800 text-lg mb-1">{studentData.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{studentData.enrollmentNo}</p>
          <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
            Upload Photo
          </button>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4">Personal Information</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name</label>
              <input type="text" value={studentData.name} disabled className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Enrollment Number</label>
              <input type="text" value={studentData.enrollmentNo} disabled className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Course</label>
              <input type="text" value={studentData.course} disabled className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Semester</label>
              <input type="text" value={studentData.semester} disabled className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Date of Birth</label>
              <input type="text" value={new Date(studentData.dob).toLocaleDateString('en-GB')} disabled className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Blood Group</label>
              <input type="text" value={studentData.bloodGroup} disabled className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile Number</label>
              <input type="text" value={form.mobile} onChange={(e) => setForm({...form, mobile: e.target.value})} disabled={!editing} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Email Address</label>
              <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} disabled={!editing} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Address</label>
              <textarea value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} disabled={!editing} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Documents</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Aadhar Card', status: 'Uploaded', color: 'text-green-600' },
            { label: 'Photo', status: 'Pending', color: 'text-orange-600' },
            { label: 'Signature', status: 'Uploaded', color: 'text-green-600' },
          ].map((doc) => (
            <div key={doc.label} className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-800 mb-2">{doc.label}</p>
              <p className={`text-xs ${doc.color} mb-3`}>{doc.status}</p>
              <button className="w-full px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200">
                {doc.status === 'Uploaded' ? 'Re-upload' : 'Upload'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
