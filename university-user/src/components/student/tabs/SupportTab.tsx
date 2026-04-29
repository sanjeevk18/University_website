'use client';

import React, { useState } from 'react';

export default function SupportTab() {
  const [ticketForm, setTicketForm] = useState({
    category: '',
    subject: '',
    description: '',
    priority: 'medium',
  });

  const tickets = [
    { id: 'TKT-001234', subject: 'Unable to download admit card', category: 'Technical', status: 'Open', date: '28 Apr 2026', priority: 'High' },
    { id: 'TKT-001233', subject: 'Fee receipt not generated', category: 'Fees', status: 'In Progress', date: '25 Apr 2026', priority: 'Medium' },
    { id: 'TKT-001232', subject: 'Marksheet correction required', category: 'Academic', status: 'Resolved', date: '20 Apr 2026', priority: 'Low' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Support ticket raised successfully! Ticket ID: TKT-' + Math.floor(Math.random() * 100000));
    setTicketForm({ category: '', subject: '', description: '', priority: 'medium' });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Support & Helpdesk</h2>

      {/* Quick Help Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'FAQs', icon: '❓', color: 'bg-blue-50 text-blue-700 border-blue-200' },
          { title: 'Live Chat', icon: '💬', color: 'bg-green-50 text-green-700 border-green-200' },
          { title: 'Email Support', icon: '📧', color: 'bg-purple-50 text-purple-700 border-purple-200' },
          { title: 'Call Support', icon: '📞', color: 'bg-orange-50 text-orange-700 border-orange-200' },
        ].map((help) => (
          <button key={help.title} className={`${help.color} border-2 rounded-xl p-5 hover:shadow-md transition-all text-center`}>
            <div className="text-4xl mb-2">{help.icon}</div>
            <div className="text-sm font-semibold">{help.title}</div>
          </button>
        ))}
      </div>

      {/* Raise New Ticket */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>🎫</span> Raise New Ticket
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
              <select
                value={ticketForm.category}
                onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
              >
                <option value="">Select Category</option>
                <option value="technical">Technical Issue</option>
                <option value="fees">Fees Related</option>
                <option value="academic">Academic Query</option>
                <option value="exam">Examination</option>
                <option value="certificate">Certificate</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Priority *</label>
              <select
                value={ticketForm.priority}
                onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
            <input
              type="text"
              value={ticketForm.subject}
              onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
              required
              placeholder="Brief description of your issue"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
            <textarea
              value={ticketForm.description}
              onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
              required
              rows={4}
              placeholder="Provide detailed information about your issue..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Attachment (Optional)</label>
            <input
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700"
            />
          </div>
          <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700">
            Submit Ticket
          </button>
        </form>
      </div>

      {/* My Tickets */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-800">My Support Tickets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Ticket ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Category</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-bold text-indigo-700">{ticket.id}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{ticket.subject}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{ticket.category}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
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
                      ticket.status === 'In Progress' ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{ticket.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="text-4xl mb-3">📧</div>
          <h4 className="font-bold text-gray-800 mb-2">Email Support</h4>
          <p className="text-sm text-gray-700">support@sahu.edu.in</p>
          <p className="text-xs text-gray-600 mt-1">Response within 24 hours</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="text-4xl mb-3">📞</div>
          <h4 className="font-bold text-gray-800 mb-2">Phone Support</h4>
          <p className="text-sm text-gray-700">+91 522 123 4567</p>
          <p className="text-xs text-gray-600 mt-1">Mon-Fri: 9 AM - 6 PM</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="text-4xl mb-3">💬</div>
          <h4 className="font-bold text-gray-800 mb-2">Live Chat</h4>
          <p className="text-sm text-gray-700">Instant Support</p>
          <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-xs font-semibold hover:bg-purple-700">
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
}
