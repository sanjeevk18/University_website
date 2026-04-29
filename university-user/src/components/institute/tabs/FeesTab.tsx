'use client';

import React, { useState } from 'react';
import { getFeesByInstituteId, getFeeCollectionSummary } from '@/store/instituteStore';

interface FeesTabProps {
  instituteId: string;
}

export default function FeesTab({ instituteId }: FeesTabProps) {
  const fees = getFeesByInstituteId(instituteId);
  const summary = getFeeCollectionSummary(instituteId);
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredFees = statusFilter === 'all' 
    ? fees 
    : fees.filter(f => f.status === statusFilter);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Fee Management</h2>
        <p className="text-sm text-gray-600 mt-1">Track and manage student fee payments</p>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-xl">💰</div>
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-1">₹{(summary.totalAmount / 100000).toFixed(1)}L</p>
          <p className="text-sm text-gray-600">Total Amount</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-xl">✅</div>
          </div>
          <p className="text-2xl font-bold text-green-600 mb-1">₹{(summary.collectedAmount / 100000).toFixed(1)}L</p>
          <p className="text-sm text-gray-600">Collected</p>
          <p className="text-xs text-gray-500 mt-1">{summary.paidCount} students</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-xl">⏳</div>
          </div>
          <p className="text-2xl font-bold text-orange-600 mb-1">₹{(summary.pendingAmount / 100000).toFixed(1)}L</p>
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-xs text-gray-500 mt-1">{summary.pendingCount} students</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-xl">⚠️</div>
          </div>
          <p className="text-2xl font-bold text-yellow-600 mb-1">{summary.partialCount}</p>
          <p className="text-sm text-gray-600">Partial Payments</p>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-700">Filter by Status:</span>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Partial">Partial</option>
          </select>
          <button className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Update Payment
          </button>
        </div>
      </div>

      {/* Fee Records Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Enrollment No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Student Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Semester</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Total Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Paid</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Pending</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredFees.map((fee) => (
                <tr key={fee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-bold text-blue-700">{fee.enrollmentNo}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{fee.studentName}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{fee.semester}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">₹{fee.totalAmount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600">₹{fee.paidAmount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-orange-600">₹{fee.pendingAmount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      fee.status === 'Paid' ? 'bg-green-100 text-green-700' :
                      fee.status === 'Partial' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {fee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">Update</button>
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
