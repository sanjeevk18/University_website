'use client';

import React, { useState } from 'react';

export default function AdmissionForm() {
  const [form, setForm] = useState({
    // Personal
    fullName: '', dob: '', gender: '', category: '', religion: '', nationality: '',
    aadhar: '', mobile: '', email: '', bloodGroup: '',
    // Academic
    program: '', course: '', semester: '',
    lastSchool: '', board: '', passingYear: '', percentage: '', rollNo: '',
    // Address
    address: '', state: '', city: '', pincode: '',
    // Guardian
    fatherName: '', fatherOccupation: '', fatherMobile: '',
    motherName: '', motherOccupation: '', motherMobile: '',
    guardianIncome: '',
  });

  const [docs, setDocs] = useState({
    photo: null as File | null,
    signature: null as File | null,
    aadhar: null as File | null,
    marksheet: null as File | null,
    tc: null as File | null,
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
      alert('Application submitted successfully! Your Application ID: SAHCU-APP-2024-' + Math.floor(Math.random() * 10000));
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
        <h2 className="text-2xl font-bold text-gray-800">Admission Application Form</h2>
        <p className="text-gray-500 text-sm mt-1">Fill all fields carefully. Fields marked with * are mandatory.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {section('Personal Information', '👤')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <input type="text" name="fullName" value={form.fullName} onChange={onChange} required placeholder="As per 10th certificate"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth <span className="text-red-500">*</span></label>
            <input type="date" name="dob" value={form.dob} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Gender <span className="text-red-500">*</span></label>
            <select name="gender" value={form.gender} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Category <span className="text-red-500">*</span></label>
            <select name="category" value={form.category} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              <option value="ews">EWS</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Religion</label>
            <input type="text" name="religion" value={form.religion} onChange={onChange} placeholder="Optional"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nationality <span className="text-red-500">*</span></label>
            <input type="text" name="nationality" value={form.nationality} onChange={onChange} required placeholder="e.g. Indian"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Aadhar Number <span className="text-red-500">*</span></label>
            <input type="text" name="aadhar" value={form.aadhar} onChange={onChange} required placeholder="12-digit Aadhar"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
            <input type="tel" name="mobile" value={form.mobile} onChange={onChange} required placeholder="10-digit mobile"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
            <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="your@email.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Blood Group</label>
            <select name="bloodGroup" value={form.bloodGroup} onChange={onChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bg) => <option key={bg} value={bg}>{bg}</option>)}
            </select>
          </div>
        </div>

        {section('Program & Course Details', '🎓')}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Program Type <span className="text-red-500">*</span></label>
            <select name="program" value={form.program} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              <option value="ug">Undergraduate</option>
              <option value="pg">Postgraduate</option>
              <option value="diploma">Diploma</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Course <span className="text-red-500">*</span></label>
            <select name="course" value={form.course} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
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
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => <option key={s} value={s}>Semester {s}</option>)}
            </select>
          </div>
        </div>

        {section('Previous Academic Details', '📚')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Last School/College Name <span className="text-red-500">*</span></label>
            <input type="text" name="lastSchool" value={form.lastSchool} onChange={onChange} required placeholder="Full name of institution"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Board/University <span className="text-red-500">*</span></label>
            <input type="text" name="board" value={form.board} onChange={onChange} required placeholder="e.g. CBSE, UP Board"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Passing Year <span className="text-red-500">*</span></label>
            <input type="number" name="passingYear" value={form.passingYear} onChange={onChange} required placeholder="e.g. 2023"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Percentage/CGPA <span className="text-red-500">*</span></label>
            <input type="text" name="percentage" value={form.percentage} onChange={onChange} required placeholder="e.g. 85% or 8.5 CGPA"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Roll Number <span className="text-red-500">*</span></label>
            <input type="text" name="rollNo" value={form.rollNo} onChange={onChange} required placeholder="Last exam roll number"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        {section('Address Details', '📍')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Address <span className="text-red-500">*</span></label>
            <input type="text" name="address" value={form.address} onChange={onChange} required placeholder="House no., Street, Area"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
            <input type="text" name="state" value={form.state} onChange={onChange} required placeholder="e.g. Uttar Pradesh"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
            <input type="text" name="city" value={form.city} onChange={onChange} required placeholder="e.g. Lucknow"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">PIN Code <span className="text-red-500">*</span></label>
            <input type="text" name="pincode" value={form.pincode} onChange={onChange} required placeholder="6-digit PIN"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        {section('Parent / Guardian Details', '👨‍👩‍👧')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Father&apos;s Name <span className="text-red-500">*</span></label>
            <input type="text" name="fatherName" value={form.fatherName} onChange={onChange} required placeholder="Full name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Father&apos;s Occupation</label>
            <input type="text" name="fatherOccupation" value={form.fatherOccupation} onChange={onChange} placeholder="Occupation"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Father&apos;s Mobile <span className="text-red-500">*</span></label>
            <input type="tel" name="fatherMobile" value={form.fatherMobile} onChange={onChange} required placeholder="10-digit mobile"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mother&apos;s Name <span className="text-red-500">*</span></label>
            <input type="text" name="motherName" value={form.motherName} onChange={onChange} required placeholder="Full name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mother&apos;s Occupation</label>
            <input type="text" name="motherOccupation" value={form.motherOccupation} onChange={onChange} placeholder="Occupation"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mother&apos;s Mobile</label>
            <input type="tel" name="motherMobile" value={form.motherMobile} onChange={onChange} placeholder="10-digit mobile"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Annual Family Income <span className="text-red-500">*</span></label>
            <select name="guardianIncome" value={form.guardianIncome} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              <option value="below2">Below ₹2 Lakh</option>
              <option value="2to5">₹2-5 Lakh</option>
              <option value="5to10">₹5-10 Lakh</option>
              <option value="above10">Above ₹10 Lakh</option>
            </select>
          </div>
        </div>

        {section('Document Uploads', '📎')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Passport Size Photo', name: 'photo', file: docs.photo },
            { label: 'Signature', name: 'signature', file: docs.signature },
            { label: 'Aadhar Card', name: 'aadhar', file: docs.aadhar },
            { label: 'Last Marksheet', name: 'marksheet', file: docs.marksheet },
            { label: 'Transfer Certificate', name: 'tc', file: docs.tc },
          ].map((d) => (
            <div key={d.name}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{d.label} <span className="text-red-500">*</span></label>
              <input type="file" name={d.name} onChange={onFileChange} required accept=".pdf,.jpg,.jpeg,.png"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700" />
              {d.file && <p className="text-xs text-green-600 mt-1">✓ {d.file.name}</p>}
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <input type="checkbox" id="declare" required className="w-4 h-4 accent-blue-600 mt-0.5" />
          <label htmlFor="declare" className="text-xs text-gray-700">
            I hereby declare that all information provided is true and correct. I understand that any false information may result in cancellation of admission.
          </label>
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-60 transition-all flex items-center justify-center gap-2">
          {loading ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>Submitting...</> : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
