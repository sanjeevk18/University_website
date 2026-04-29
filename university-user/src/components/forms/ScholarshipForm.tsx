'use client';

import React, { useState } from 'react';

export default function ScholarshipForm() {
  const [form, setForm] = useState({
    fullName: '', enrollmentNo: '', course: '', semester: '', mobile: '', email: '',
    category: '', scholarshipType: '', percentage: '', familyIncome: '', reason: '',
  });
  const [docs, setDocs] = useState({ marksheet: null as File | null, incomeCert: null as File | null, aadhar: null as File | null });
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setDocs((p) => ({ ...p, [e.target.name]: file }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Scholarship application submitted! Reference ID: SCH-' + Math.floor(Math.random() * 10000));
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Scholarship Application</h2>
      <p className="text-gray-500 text-sm mb-6">Complete the form to apply for financial assistance.</p>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <input type="text" name="fullName" value={form.fullName} onChange={onChange} required placeholder="Your full name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Enrollment Number <span className="text-red-500">*</span></label>
            <input type="text" name="enrollmentNo" value={form.enrollmentNo} onChange={onChange} required placeholder="e.g. SAHCU-2024-001"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Course <span className="text-red-500">*</span></label>
            <select name="course" value={form.course} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Select</option>
              <option value="nursing">B.Sc Nursing</option>
              <option value="pharmacy">B.Pharm</option>
              <option value="mlt">B.Sc MLT</option>
              <option value="physio">Physiotherapy</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Current Semester <span className="text-red-500">*</span></label>
            <select name="semester" value={form.semester} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Select</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => <option key={s} value={s}>Semester {s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
            <input type="tel" name="mobile" value={form.mobile} onChange={onChange} required placeholder="10-digit mobile"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
            <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="your@email.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Category <span className="text-red-500">*</span></label>
            <select name="category" value={form.category} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Select</option>
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              <option value="ews">EWS</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Scholarship Type <span className="text-red-500">*</span></label>
            <select name="scholarshipType" value={form.scholarshipType} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Select</option>
              <option value="merit">Merit-Based</option>
              <option value="need">Need-Based</option>
              <option value="sports">Sports & Cultural</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Last Semester Percentage <span className="text-red-500">*</span></label>
            <input type="text" name="percentage" value={form.percentage} onChange={onChange} required placeholder="e.g. 85%"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Annual Family Income <span className="text-red-500">*</span></label>
            <select name="familyIncome" value={form.familyIncome} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Select</option>
              <option value="below1">Below ₹1 Lakh</option>
              <option value="1to2">₹1-2 Lakh</option>
              <option value="2to5">₹2-5 Lakh</option>
              <option value="above5">Above ₹5 Lakh</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Reason for Scholarship <span className="text-red-500">*</span></label>
          <textarea name="reason" value={form.reason} onChange={onChange} required rows={4} placeholder="Explain why you need this scholarship..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-vertical" />
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-700">Upload Documents</h3>
          {[
            { label: 'Last Semester Marksheet', name: 'marksheet', file: docs.marksheet },
            { label: 'Income Certificate', name: 'incomeCert', file: docs.incomeCert },
            { label: 'Aadhar Card', name: 'aadhar', file: docs.aadhar },
          ].map((d) => (
            <div key={d.name}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{d.label} <span className="text-red-500">*</span></label>
              <input type="file" name={d.name} onChange={onFileChange} required accept=".pdf,.jpg,.jpeg,.png"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700" />
              {d.file && <p className="text-xs text-green-600 mt-1">✓ {d.file.name}</p>}
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
          <input type="checkbox" id="declare" required className="w-4 h-4 accent-green-600 mt-0.5" />
          <label htmlFor="declare" className="text-xs text-gray-700">
            I declare that all information provided is accurate. I understand that providing false information may result in disqualification.
          </label>
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 disabled:opacity-60 transition-all flex items-center justify-center gap-2">
          {loading ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>Submitting...</> : 'Submit Scholarship Application'}
        </button>
      </form>
    </div>
  );
}
