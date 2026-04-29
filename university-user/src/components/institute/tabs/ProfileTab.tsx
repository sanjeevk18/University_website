'use client';

import React from 'react';

interface ProfileTabProps {
  instituteData: any;
}

export default function ProfileTab({ instituteData }: ProfileTabProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Institute Profile</h2>
        <p className="text-sm text-gray-600 mt-1">View and update your institute information</p>
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
              <span className="text-4xl">🏫</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">{instituteData.instituteName}</h3>
              <p className="text-blue-100 mb-2">{instituteData.instituteCode}</p>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  instituteData.status === 'Active' ? 'bg-green-500 text-white' :
                  'bg-yellow-500 text-white'
                }`}>
                  {instituteData.status}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                  {instituteData.instituteType}
                </span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-white text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-50">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Institute Details */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📋</span> Basic Information
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Institute Code', value: instituteData.instituteCode },
              { label: 'Institute Type', value: instituteData.instituteType },
              { label: 'Affiliation No.', value: instituteData.affiliationNo },
              { label: 'Affiliation Date', value: instituteData.affiliationDate },
              { label: 'Total Students', value: instituteData.totalStudents },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-600">{item.label}:</span>
                <span className="text-sm font-semibold text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📞</span> Contact Information
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Email', value: instituteData.email, icon: '✉️' },
              { label: 'Mobile', value: instituteData.mobile, icon: '📱' },
              { label: 'City', value: instituteData.city, icon: '🏙️' },
              { label: 'State', value: instituteData.state, icon: '📍' },
              { label: 'PIN Code', value: instituteData.pincode, icon: '📮' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                <span className="text-lg">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Principal Details */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>👨‍💼</span> Principal Details
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Name', value: instituteData.principalName },
              { label: 'Email', value: instituteData.principalEmail },
              { label: 'Mobile', value: instituteData.principalMobile },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-600">{item.label}:</span>
                <span className="text-sm font-semibold text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Programs */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📚</span> Active Programs
          </h3>
          <div className="space-y-2">
            {instituteData.activePrograms?.map((program: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-600">✓</span>
                <span className="text-sm font-semibold text-gray-800">{program}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>🏢</span> Complete Address
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {instituteData.address}, {instituteData.city}, {instituteData.state} - {instituteData.pincode}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          Update Profile
        </button>
        <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
          Upload Documents
        </button>
        <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
          View Affiliation Status
        </button>
      </div>
    </div>
  );
}
