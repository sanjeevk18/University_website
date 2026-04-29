'use client';

import React, { useState } from 'react';

export default function FeesTab() {
  const [selectedSemester, setSelectedSemester] = useState('4');

  const feeStructure = [
    { item: 'Tuition Fee', amount: 45000, status: 'Paid', date: '10 Jan 2026' },
    { item: 'Library Fee', amount: 2000, status: 'Paid', date: '10 Jan 2026' },
    { item: 'Lab Fee', amount: 5000, status: 'Paid', date: '10 Jan 2026' },
    { item: 'Exam Fee', amount: 3000, status: 'Pending', date: '-' },
    { item: 'Development Fee', amount: 5000, status: 'Paid', date: '10 Jan 2026' },
  ];

  const totalFees = feeStructure.reduce((sum, item) => sum + item.amount, 0);
  const paidFees = feeStructure.filter(item => item.status === 'Paid').reduce((sum, item) => sum + item.amount, 0);
  const pendingFees = totalFees - paidFees;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Fees Management</h2>
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
            <option key={sem} value={sem}>Semester {sem}</option>
          ))}
        </select>
      </div>

      {/* Fee Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <p className="text-blue-100 text-sm mb-2">Total Fees</p>
          <p className="text-3xl font-bold">₹{totalFees.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <p className="text-green-100 text-sm mb-2">Paid Amount</p>
          <p className="text-3xl font-bold">₹{paidFees.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <p className="text-orange-100 text-sm mb-2">Pending Amount</p>
          <p className="text-3xl font-bold">₹{pendingFees.toLocaleString()}</p>
        </div>
      </div>

      {/* Fee Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-800">Fee Breakdown - Semester {selectedSemester}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Fee Item</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Payment Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {feeStructure.map((fee, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{fee.item}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-800">₹{fee.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      fee.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {fee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{fee.date}</td>
                  <td className="px-6 py-4 text-sm">
                    {fee.status === 'Paid' ? (
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium">Download Receipt</button>
                    ) : (
                      <button className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-xs font-semibold hover:bg-green-700">
                        Pay Now
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Recent Payment History</h3>
        <div className="space-y-3">
          {[
            { id: 'TXN123456', amount: 57000, date: '10 Jan 2026', method: 'Online Payment', status: 'Success' },
            { id: 'TXN123455', amount: 55000, date: '15 Jul 2025', method: 'Demand Draft', status: 'Success' },
            { id: 'TXN123454', amount: 55000, date: '10 Jan 2025', method: 'Online Payment', status: 'Success' },
          ].map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">₹{payment.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">{payment.id} • {payment.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600 mb-1">{payment.method}</p>
                <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium">Download Receipt</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Online Payment */}
      {pendingFees > 0 && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Pay Pending Fees Online</h3>
              <p className="text-sm text-gray-600 mb-4">
                You have ₹{pendingFees.toLocaleString()} pending. Pay now to avoid late fees.
              </p>
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 shadow-lg">
                Pay ₹{pendingFees.toLocaleString()} Now
              </button>
            </div>
            <div className="text-6xl">💳</div>
          </div>
        </div>
      )}
    </div>
  );
}
