'use client';

import React, { useState } from 'react';

export default function VerifyRegistration() {
  const [form, setForm] = useState({ type: '', enrollmentNo: '', certificateNo: '', dob: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { valid: boolean; name?: string; course?: string; year?: string }>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Mock verification result
      setResult({
        valid: true,
        name: 'Rahul Kumar',
        course: 'B.Sc Nursing',
        year: '2021-2025',
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Registration</h2>
      <p className="text-gray-500 text-sm mb-6">Verify student enrollment or certificate authenticity.</p>

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Verification Type <span className="text-red-500">*</span></label>
          <select name="type" value={form.type} onChange={onChange} required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option value="">Select type</option>
            <option value="enrollment">Student Enrollment</option>
            <option value="certificate">Certificate / Degree</option>
            <option value="marksheet">Marksheet</option>
          </select>
        </div>

        {form.type === 'enrollment' && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Enrollment Number <span className="text-red-500">*</span></label>
            <input type="text" name="enrollmentNo" value={form.enrollmentNo} onChange={onChange} required placeholder="e.g. SAHCU-2024-001"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
        )}

        {(form.type === 'certificate' || form.type === 'marksheet') && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Certificate / Document Number <span className="text-red-500">*</span></label>
            <input type="text" name="certificateNo" value={form.certificateNo} onChange={onChange} required placeholder="e.g. CERT-2024-001"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date of Birth <span className="text-red-500">*</span></label>
          <input type="date" name="dob" value={form.dob} onChange={onChange} required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 disabled:opacity-60 transition-all flex items-center justify-center gap-2">
          {loading ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>Verifying...</> : <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Verify Now
          </>}
        </button>
      </form>

      {result && (
        <div className={`mt-6 p-6 rounded-xl border-2 ${result.valid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <div className="flex items-center gap-3 mb-3">
            {result.valid ? (
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <h3 className={`text-lg font-bold ${result.valid ? 'text-green-800' : 'text-red-800'}`}>
              {result.valid ? 'Verification Successful ✓' : 'Verification Failed ✗'}
            </h3>
          </div>
          {result.valid && (
            <div className="space-y-1 text-sm text-gray-700">
              <p><span className="font-semibold">Name:</span> {result.name}</p>
              <p><span className="font-semibold">Course:</span> {result.course}</p>
              <p><span className="font-semibold">Year:</span> {result.year}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
