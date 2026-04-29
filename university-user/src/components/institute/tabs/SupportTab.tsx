'use client';

import React, { useState } from 'react';

interface SupportTabProps {
  instituteId: string;
}

export default function SupportTab({ instituteId }: SupportTabProps) {
  const [showNewTicket, setShowNewTicket] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Support & Helpdesk</h2>
          <p className="text-sm text-gray-600 mt-1">Raise tickets and track issues</p>
        </div>
        <button 
          onClick={() => setShowNewTicket(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2"
        >
          <span>+</span> Raise New Ticket
        </button>
      </div>

      {/* Ticket Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        {[
          { label: 'Open Tickets', value: '3', icon: '🎫', color: 'bg-blue-500' },
          { label: 'In Progress', value: '2', icon: '⏳', color: 'bg-yellow-500' },
          { label: 'Resolved', value: '15', icon: '✅', color: 'bg-green-500' },
          { label: 'Closed', value: '28', icon: '🔒', color: 'bg-gray-500' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-xl mb-3`}>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* My Tickets */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-bold text-gray-800">My Tickets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Ticket No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Category</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Created</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { ticketNo: 'TKT-001', subject: 'Unable to submit exam form', category: 'Exam', priority: 'High', status: 'Open', date: '2024-04-25' },
                { ticketNo: 'TKT-002', subject: 'Fee payment not reflecting', category: 'Fee', priority: 'Medium', status: 'In Progress', date: '2024-04-23' },
                { ticketNo: 'TKT-003', subject: 'Student document upload issue', category: 'Technical', priority: 'Low', status: 'Resolved', date: '2024-04-20' },
              ].map((ticket, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-bold text-blue-700">{ticket.ticketNo}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{ticket.subject}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{ticket.category}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      ticket.priority === 'High' ? 'bg-red-100 text-red-700' :
                      ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      ticket.status === 'Open' ? 'bg-blue-100 text-blue-700' :
                      ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                      ticket.status === 'Resolved' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{ticket.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <h3 className="font-bold text-gray-800 mb-4">Need Immediate Help?</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              📞
            </div>
            <div>
              <p className="text-xs text-gray-600">Call Us</p>
              <p className="font-semibold text-gray-800">+91 522 123 4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              ✉️
            </div>
            <div>
              <p className="text-xs text-gray-600">Email Us</p>
              <p className="font-semibold text-gray-800">support@sahcu.edu.in</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              ⏰
            </div>
            <div>
              <p className="text-xs text-gray-600">Working Hours</p>
              <p className="font-semibold text-gray-800">Mon-Sat, 9AM-6PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Ticket Modal */}
      {showNewTicket && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Raise New Ticket</h3>
              <button 
                onClick={() => setShowNewTicket(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Describe your issue and our support team will get back to you within 24 hours.
            </p>
            <div className="text-center py-8 text-gray-500">
              <p>Ticket form will be implemented here</p>
              <button 
                onClick={() => setShowNewTicket(false)}
                className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
