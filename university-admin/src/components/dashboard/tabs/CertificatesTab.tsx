'use client';

import React, { useState } from 'react';
import { store } from '@/store';

export default function CertificatesTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('All');

  const certificates = store.certificates;

  // Get unique certificate types
  const types = ['All', ...Array.from(new Set(certificates.map(c => c.certificateType)))];

  // Filter certificates
  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.enrollmentNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.certificateNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || cert.status === filterStatus;
    const matchesType = filterType === 'All' || cert.certificateType === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });

  const issuedCount = certificates.filter(c => c.status === 'Issued').length;
  const pendingCount = certificates.filter(c => c.status === 'Pending').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Issued': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">🎓 Certificates Management</h2>
          <p className="text-gray-500 text-sm mt-1">Issue and manage student certificates</p>
        </div>
        <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md">
          + Issue Certificate
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Certificates</p>
              <h3 className="text-3xl font-bold mt-1">{certificates.length}</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Issued</p>
              <h3 className="text-3xl font-bold mt-1">{issuedCount}</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Pending</p>
              <h3 className="text-3xl font-bold mt-1">{pendingCount}</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search by name, enrollment or cert no..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Certificate Type</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="All">All Status</option>
              <option value="Issued">Issued</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCertificates.map((cert) => (
          <div key={cert.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{cert.certificateType}</h3>
                <p className="text-sm text-gray-500 font-mono mt-1">{cert.certificateNo}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                {cert.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">👤 Student:</span>
                <span className="font-medium text-gray-800">{cert.studentName}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">🆔 Enrollment:</span>
                <span className="font-mono font-medium text-gray-800">{cert.enrollmentNo}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📚 Course:</span>
                <span className="font-medium text-gray-800">{cert.course}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📅 Issue Date:</span>
                <span className="font-medium text-gray-800">{new Date(cert.issueDate).toLocaleDateString('en-IN')}</span>
              </div>
              {cert.validUpto && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">⏰ Valid Upto:</span>
                  <span className="font-medium text-gray-800">{new Date(cert.validUpto).toLocaleDateString('en-IN')}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">✍️ Issued By:</span>
                <span className="font-medium text-gray-800">{cert.issuedBy}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                Download PDF
              </button>
              <button className="flex-1 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCertificates.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <p className="text-gray-500">No certificates found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
