'use client';

import React, { useState } from 'react';

export default function ExaminationForm() {
  const [form, setForm] = useState({
    // Student Details
    enrollmentNo: '', fullName: '', course: '', semester: '', mobile: '', email: '',
    // Examination Details
    examType: '', examYear: '', examMonth: '',
    // Subjects
    subjects: [] as string[],
    // Fee Details
    examFee: '', lateFee: '', totalFee: '',
  });

  const [docs, setDocs] = useState({
    idCard: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [formNumber, setFormNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setDocs((p) => ({ ...p, [e.target.name]: file }));
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setForm((p) => ({
      ...p,
      subjects: checked ? [...p.subjects, value] : p.subjects.filter((s) => s !== value),
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.subjects.length === 0) {
      alert('Please select at least one subject');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const generatedFormNumber = 'EXAM-' + Math.floor(Math.random() * 100000);
      setFormNumber(generatedFormNumber);
      setShowPayment(true);
      setLoading(false);
    }, 1500);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      alert(`Payment successful! Transaction ID: TXN${Math.floor(Math.random() * 1000000)}\nYour examination form has been submitted successfully.\nForm Number: ${formNumber}`);
      setLoading(false);
      // Reset form
      window.location.reload();
    }, 2000);
  };

  const section = (title: string, icon: string) => (
    <div className="flex items-center gap-2 pt-3 pb-2 border-b border-gray-200 mb-4">
      <span className="text-lg">{icon}</span>
      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">{title}</h3>
    </div>
  );

  const availableSubjects = [
    'Anatomy', 'Physiology', 'Biochemistry', 'Pharmacology', 'Pathology',
    'Microbiology', 'Community Medicine', 'Clinical Practice', 'Nursing Foundation',
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Examination Form</h2>
        <p className="text-gray-500 text-sm mt-1">Register for your semester examinations.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {section('Student Information', '👤')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Enrollment Number <span className="text-red-500">*</span></label>
            <input type="text" name="enrollmentNo" value={form.enrollmentNo} onChange={onChange} required placeholder="e.g. SAHCU-2024-001"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <input type="text" name="fullName" value={form.fullName} onChange={onChange} required placeholder="As per enrollment"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Course <span className="text-red-500">*</span></label>
            <select name="course" value={form.course} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">Select</option>
              <option value="nursing">B.Sc Nursing</option>
              <option value="pharmacy">B.Pharm</option>
              <option value="mlt">B.Sc MLT</option>
              <option value="physio">Physiotherapy</option>
              <option value="radiology">Radiology</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Semester <span className="text-red-500">*</span></label>
            <select name="semester" value={form.semester} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">Select</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => <option key={s} value={s}>Semester {s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
            <input type="tel" name="mobile" value={form.mobile} onChange={onChange} required placeholder="10-digit mobile"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
            <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="your@email.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
        </div>

        {section('Examination Details', '📝')}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Exam Type <span className="text-red-500">*</span></label>
            <select name="examType" value={form.examType} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">Select</option>
              <option value="regular">Regular</option>
              <option value="backlog">Backlog/Reappear</option>
              <option value="improvement">Improvement</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Exam Year <span className="text-red-500">*</span></label>
            <select name="examYear" value={form.examYear} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">Select</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Exam Month <span className="text-red-500">*</span></label>
            <select name="examMonth" value={form.examMonth} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">Select</option>
              <option value="may">May</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>
        </div>

        {section('Select Subjects', '📚')}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-3">Select the subjects you want to appear for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {availableSubjects.map((subject) => (
              <label key={subject} className="flex items-center gap-2 cursor-pointer hover:bg-white p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  value={subject}
                  checked={form.subjects.includes(subject)}
                  onChange={handleSubjectChange}
                  className="w-4 h-4 accent-red-600 rounded"
                />
                <span className="text-sm text-gray-700">{subject}</span>
              </label>
            ))}
          </div>
          {form.subjects.length > 0 && (
            <p className="text-xs text-green-600 mt-3">
              ✓ {form.subjects.length} subject(s) selected
            </p>
          )}
        </div>

        {section('Fee Details', '💳')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Examination Fee <span className="text-red-500">*</span></label>
            <input type="number" name="examFee" value={form.examFee} onChange={onChange} required placeholder="e.g. 1500"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Late Fee (if applicable)</label>
            <input type="number" name="lateFee" value={form.lateFee} onChange={onChange} placeholder="e.g. 200"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Total Fee <span className="text-red-500">*</span></label>
            <input type="number" name="totalFee" value={form.totalFee} onChange={onChange} required placeholder="Total amount"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Payment Mode <span className="text-red-500">*</span></label>
            <select name="paymentMode" value={form.paymentMode} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">Select</option>
              <option value="online">Online Payment</option>
              <option value="dd">Demand Draft</option>
              <option value="cash">Cash</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Transaction ID / DD Number <span className="text-red-500">*</span></label>
            <input type="text" name="transactionId" value={form.transactionId} onChange={onChange} required placeholder="Payment reference number"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
        </div>

        {section('Document Uploads', '📎')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Fee Payment Receipt', name: 'feeReceipt', file: docs.feeReceipt },
            { label: 'Student ID Card Copy', name: 'idCard', file: docs.idCard },
          ].map((d) => (
            <div key={d.name}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{d.label} <span className="text-red-500">*</span></label>
              <input type="file" name={d.name} onChange={onFileChange} required accept=".pdf,.jpg,.jpeg,.png"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-red-50 file:text-red-700" />
              {d.file && <p className="text-xs text-green-600 mt-1">✓ {d.file.name}</p>}
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
          <input type="checkbox" id="declare" required className="w-4 h-4 accent-red-600 mt-0.5" />
          <label htmlFor="declare" className="text-xs text-gray-700">
            I declare that I have 75% or more attendance and all my previous dues are cleared. I understand that providing false information may result in cancellation of my examination.
          </label>
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 disabled:opacity-60 transition-all flex items-center justify-center gap-2">
          {loading ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>Submitting...</> : 'Submit Examination Form'}
        </button>
      </form>
    </div>
  );
}
