'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentLoginForm() {
  const [form, setForm] = useState({ enrollmentNo: '', dob: '', password: '' });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Store dummy login data
      localStorage.setItem('studentLoggedIn', 'true');
      localStorage.setItem('studentData', JSON.stringify({
        enrollmentNo: form.enrollmentNo,
        name: 'Rajesh Kumar Sharma',
        course: 'B.Sc Nursing',
        semester: '4th Semester',
        institute: 'Main Campus, Lucknow',
        batch: '2024-2028',
        dob: form.dob,
        mobile: '+91 98765 43210',
        email: 'rajesh.sharma@student.sahu.edu.in',
        bloodGroup: 'O+',
        address: '123, Civil Lines, Lucknow, UP - 226001',
      }));
      router.push('/student-portal/dashboard');
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 w-full">
      <div className="mb-6">
        <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-md lg:hidden">
          <span className="text-white font-bold text-2xl">S</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Student Login</h2>
        <p className="text-gray-500 text-sm mt-1">Access your student dashboard</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Enrollment Number <span className="text-red-500">*</span></label>
          <input type="text" name="enrollmentNo" value={form.enrollmentNo} onChange={onChange} required placeholder="e.g. SAHCU-2024-001"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date of Birth <span className="text-red-500">*</span></label>
          <input type="date" name="dob" value={form.dob} onChange={onChange} required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-sm font-semibold text-gray-700">Password <span className="text-red-500">*</span></label>
            <button type="button" className="text-xs text-indigo-600 hover:underline">Forgot Password?</button>
          </div>
          <div className="relative">
            <input type={show ? 'text' : 'password'} name="password" value={form.password} onChange={onChange} required placeholder="Enter password"
              className="w-full px-4 py-3 pr-11 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              {show
                ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              }
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="rem" className="w-4 h-4 accent-indigo-600 rounded" />
          <label htmlFor="rem" className="text-sm text-gray-600">Remember me</label>
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-60 transition-all flex items-center justify-center gap-2">
          {loading ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>Signing In...</> : 'Login to Portal'}
        </button>
      </form>

      <p className="text-center text-xs text-gray-400 mt-6">
        New student? Contact admissions office for enrollment.
      </p>
    </div>
  );
}
