'use client';

import React, { useState } from 'react';

export default function AffiliationForm() {
  const [form, setForm] = useState({
    instituteName: '', instituteType: '', estYear: '', website: '',
    principalName: '', principalMobile: '', principalEmail: '',
    address: '', state: '', city: '', pincode: '',
    programs: '', totalSeats: '', labFacility: '', hostelFacility: '',
  });

  const [docs, setDocs] = useState({
    registrationCert: null as File | null,
    noc: null as File | null,
    buildingProof: null as File | null,
    facultyList: null as File | null,
  });

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
      alert('Affiliation application submitted! Reference ID: AFF-' + Math.floor(Math.random() * 10000));
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
        <h2 className="text-2xl font-bold text-gray-800">Institute Affiliation Form</h2>
        <p className="text-gray-500 text-sm mt-1">Apply for affiliation with State Allied Healthcare University.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {section('Institute Information', '🏫')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Institute Name <span className="text-red-500">*</span></label>
            <input type="text" name="instituteName" value={form.instituteName} onChange={onChange} required placeholder="Full legal name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Institute Type <span className="text-red-500">*</span></label>
            <select name="instituteType" value={form.instituteType} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Select</option>
              <option value="nursing">Nursing College</option>
              <option value="pharmacy">Pharmacy College</option>
              <option value="paramedical">Paramedical Institute</option>
              <option value="allied">Allied Health Sciences</option>
              <option value="hospital">Hospital-based Training Center</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Year of Establishment <span className="text-red-500">*</span></label>
            <input type="number" name="estYear" value={form.estYear} onChange={onChange} required placeholder="e.g. 2010"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Website</label>
            <input type="url" name="website" value={form.website} onChange={onChange} placeholder="https://yourinstitute.edu.in"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>

        {section('Principal Details', '👨‍💼')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Principal Name <span className="text-red-500">*</span></label>
            <input type="text" name="principalName" value={form.principalName} onChange={onChange} required placeholder="Full name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Principal Mobile <span className="text-red-500">*</span></label>
            <input type="tel" name="principalMobile" value={form.principalMobile} onChange={onChange} required placeholder="10-digit mobile"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Principal Email <span className="text-red-500">*</span></label>
            <input type="email" name="principalEmail" value={form.principalEmail} onChange={onChange} required placeholder="principal@institute.edu.in"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>

        {section('Address', '📍')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Address <span className="text-red-500">*</span></label>
            <input type="text" name="address" value={form.address} onChange={onChange} required placeholder="Street, Area, Landmark"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
            <input type="text" name="state" value={form.state} onChange={onChange} required placeholder="e.g. Uttar Pradesh"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
            <input type="text" name="city" value={form.city} onChange={onChange} required placeholder="e.g. Lucknow"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">PIN Code <span className="text-red-500">*</span></label>
            <input type="text" name="pincode" value={form.pincode} onChange={onChange} required placeholder="6-digit PIN"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>

        {section('Programs & Infrastructure', '🔬')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Programs to be Offered <span className="text-red-500">*</span></label>
            <textarea name="programs" value={form.programs} onChange={onChange} required rows={3} placeholder="e.g. B.Sc Nursing, D.Pharm, DMLT (separate with commas)"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-vertical" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Total Student Intake <span className="text-red-500">*</span></label>
            <input type="number" name="totalSeats" value={form.totalSeats} onChange={onChange} required placeholder="e.g. 120"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Lab Facility <span className="text-red-500">*</span></label>
            <select name="labFacility" value={form.labFacility} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Select</option>
              <option value="yes">Yes - Fully Equipped</option>
              <option value="partial">Partial</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Hostel Facility <span className="text-red-500">*</span></label>
            <select name="hostelFacility" value={form.hostelFacility} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Select</option>
              <option value="yes">Yes - Boys & Girls</option>
              <option value="boys">Yes - Boys Only</option>
              <option value="girls">Yes - Girls Only</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {section('Document Uploads', '📎')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Institute Registration Certificate', name: 'registrationCert', file: docs.registrationCert },
            { label: 'NOC from Local Authority', name: 'noc', file: docs.noc },
            { label: 'Building Ownership Proof', name: 'buildingProof', file: docs.buildingProof },
            { label: 'Faculty List with Qualifications', name: 'facultyList', file: docs.facultyList },
          ].map((d) => (
            <div key={d.name}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{d.label} <span className="text-red-500">*</span></label>
              <input type="file" name={d.name} onChange={onFileChange} required accept=".pdf,.jpg,.jpeg,.png"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700" />
              {d.file && <p className="text-xs text-green-600 mt-1">✓ {d.file.name}</p>}
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl">
          <input type="checkbox" id="declare" required className="w-4 h-4 accent-purple-600 mt-0.5" />
          <label htmlFor="declare" className="text-xs text-gray-700">
            I declare that all information provided is true and correct. I understand that the university will conduct an inspection before granting affiliation.
          </label>
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 disabled:opacity-60 transition-all flex items-center justify-center gap-2">
          {loading ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>Submitting...</> : 'Submit Affiliation Application'}
        </button>
      </form>
    </div>
  );
}
