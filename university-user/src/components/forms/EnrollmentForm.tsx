'use client';

import React, { useState } from 'react';

export default function EnrollmentForm() {
  const [form, setForm] = useState({
    // Admission Details
    applicationId: '', admissionDate: '', program: '', course: '', semester: '',
    // Personal
    fullName: '', dob: '', gender: '', mobile: '', email: '', aadhar: '',
    // Address
    address: '', state: '', city: '', pincode: '',
    // Fee Payment
    feeReceiptNo: '', paymentDate: '', amountPaid: '', paymentMode: '',
  });

  const [docs, setDocs] = useState({
    admissionLetter: null as File | null,
    feeReceipt: null as File | null,
    photo: null as File | null,
    signature: null as File | null,
  });

  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setDocs((p) => ({ ...p, [e.target.name]: file }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Enrollment submitted! Your Enrollment Number: SAHCU-ENR-2024-' + Math.floor(Math.random() * 10000));
      setLoading(false);
    }, 2000);
  };

  const section = (title: string, icon: string) => (
    <div className="flex items-center gap-2 pt-3 pb-2 border-b border-gray-200 mb-4">
      <span className="text-lg">{icon}</span>
      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">{title}</h3>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Student Enrollment Form</h2>
        <p className="text-gray-500 text-sm mt-1">Complete your enrollment by providing accurate information.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {section('Admission Details', '🎓')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Application ID <span className="text-red-500">*</span></label>
            <input type="text" name="applicationId" value={form.applicationId} onChange={onChange} required placeholder="e.g. SAHCU-APP-2024-001"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Admission Date <span className="text-red-500">*</span></label>
            <input type="date" name="admissionDate" value={form.admissionDate} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Program <span className="text-red-500">*</span></label>
            <select name="program" value={form.program} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="">Select</option>
              <option value="ug">Undergraduate</option>
              <option value="pg">Postgraduate</option>
              <option value="diploma">Diploma</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Course <span className="text-red-500">*</span></label>
            <select name="course" value={form.course} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="">Select</option>
              <option value="nursing">B.Sc Nursing</option>
              <option value="pharmacy">B.Pharm</option>
              <option value="mlt">B.Sc MLT</option>
              <option value="physio">Physiotherapy</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Starting Semester <span className="text-red-500">*</span></label>
            <select name="semester" value={form.semester} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="">Select</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => <option key={s} value={s}>Semester {s}</option>)}
            </select>
          </div>
        </div>

        {section('Personal Information', '👤')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <input type="text" name="fullName" value={form.fullName} onChange={onChange} required placeholder="As per admission letter"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth <span className="text-red-500">*</span></label>
            <input type="date" name="dob" value={form.dob} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Gender <span className="text-red-500">*</span></label>
            <select name="gender" value={form.gender} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
            <input type="tel" name="mobile" value={form.mobile} onChange={onChange} required placeholder="10-digit mobile"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
            <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="your@email.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Aadhar Number <span className="text-red-500">*</span></label>
            <input type="text" name="aadhar" value={form.aadhar} onChange={onChange} required placeholder="12-digit Aadhar"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
        </div>

        {section('Address', '📍')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Address <span className="text-red-500">*</span></label>
            <input type="text" name="address" value={form.address} onChange={onChange} required placeholder="House no., Street, Area"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
            <input type="text" name="state" value={form.state} onChange={onChange} required placeholder="e.g. Uttar Pradesh"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
            <input type="text" name="city" value={form.city} onChange={onChange} required placeholder="e.g. Lucknow"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">PIN Code <span className="text-red-500">*</span></label>
            <input type="text" name="pincode" value={form.pincode} onChange={onChange} required placeholder="6-digit PIN"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
        </div>

        {section('Fee Payment Details', '💳')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Fee Receipt Number <span className="text-red-500">*</span></label>
            <input type="text" name="feeReceiptNo" value={form.feeReceiptNo} onChange={onChange} required placeholder="Receipt number"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Payment Date <span className="text-red-500">*</span></label>
            <input type="date" name="paymentDate" value={form.paymentDate} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Amount Paid <span className="text-red-500">*</span></label>
            <input type="number" name="amountPaid" value={form.amountPaid} onChange={onChange} required placeholder="e.g. 50000"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Payment Mode <span className="text-red-500">*</span></label>
            <select name="paymentMode" value={form.paymentMode} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="">Select</option>
              <option value="online">Online Transfer</option>
              <option value="dd">Demand Draft</option>
              <option value="cash">Cash</option>
              <option value="cheque">Cheque</option>
            </select>
          </div>
        </div>

        {section('Document Uploads', '📎')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Admission Letter', name: 'admissionLetter', file: docs.admissionLetter },
            { label: 'Fee Receipt', name: 'feeReceipt', file: docs.feeReceipt },
            { label: 'Passport Photo', name: 'photo', file: docs.photo },
            { label: 'Signature', name: 'signature', file: docs.signature },
          ].map((d) => (
            <div key={d.name}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{d.label} <span className="text-red-500">*</span></label>
              <input type="file" name={d.name} onChange={onFileChange} required accept=".pdf,.jpg,.jpeg,.png"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-teal-50 file:text-teal-700" />
              {d.file && <p className="text-xs text-green-600 mt-1">✓ {d.file.name}</p>}
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl">
          <input type="checkbox" id="declare" required className="w-4 h-4 accent-teal-600 mt-0.5" />
          <label htmlFor="declare" className="text-xs text-gray-700">
            I declare that all information provided is accurate and matches my admission documents.
          </label>
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 disabled:opacity-60 transition-all flex items-center justify-center gap-2">
          {loading ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>Submitting...</> : 'Complete Enrollment'}
        </button>
      </form>
    </div>
  );
}
