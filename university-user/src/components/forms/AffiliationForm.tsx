'use client';

import React, { useState } from 'react';

export default function AffiliationForm() {
  const [form, setForm] = useState({
    // Institute Details
    instituteOwnerName: '',
    instituteName: '',
    qualificationOfHead: '',
    studentSeries: '',
    dateOfBirth: '',
    panNumber: '',
    aadharNumber: '',
    instituteFullAddress: '',
    
    // Location & Contact
    pincode: '',
    state: '',
    district: '',
    numberOfStaff: '',
    numberOfClassrooms: '',
    totalComputers: '',
    spaceOfCentre: '',
    whatsappNumber: '',
    contactNumber: '',
    email: '',
    password: '',
    
    // Facilities
    reception: 'No',
    staffRoom: 'No',
    waterSupply: 'No',
    toilet: 'No',
  });

  const [docs, setDocs] = useState({
    ownerImage: null as File | null,
    aadharCard: null as File | null,
    signature: null as File | null,
    addressProof: null as File | null,
    agreement: null as File | null,
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

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 
    'Uttarakhand', 'West Bengal'
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Institute Affiliation Form</h2>
        <p className="text-gray-500 text-sm mt-1">Apply for affiliation with State Allied Healthcare University.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {section('Institute Information', '🏫')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Institute Owner Name <span className="text-red-500">*</span></label>
            <input type="text" name="instituteOwnerName" value={form.instituteOwnerName} onChange={onChange} required placeholder="Enter Institute Owner Name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Institute Name <span className="text-red-500">*</span></label>
            <input type="text" name="instituteName" value={form.instituteName} onChange={onChange} required placeholder="Enter Institute Name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Qualification of Institute Head <span className="text-red-500">*</span></label>
            <input type="text" name="qualificationOfHead" value={form.qualificationOfHead} onChange={onChange} required placeholder="Enter Qualification"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Student Series <span className="text-red-500">*</span></label>
            <input type="text" name="studentSeries" value={form.studentSeries} onChange={onChange} required placeholder="Enter Prefix Roll No."
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>

        {section('Personal Details', '👨‍💼')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth <span className="text-red-500">*</span></label>
            <input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Pan Number <span className="text-red-500">*</span></label>
            <input type="text" name="panNumber" value={form.panNumber} onChange={onChange} required placeholder="Enter Pan Number" maxLength={10}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 uppercase" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Aadhar Number <span className="text-red-500">*</span></label>
            <input type="text" name="aadharNumber" value={form.aadharNumber} onChange={onChange} required placeholder="Enter Aadhar Number" maxLength={12}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>

        {section('Address', '📍')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Institute Full Address <span className="text-red-500">*</span></label>
            <textarea name="instituteFullAddress" value={form.instituteFullAddress} onChange={onChange} required rows={3} placeholder="Institute Full Address"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-vertical" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Pincode <span className="text-red-500">*</span></label>
            <input type="text" name="pincode" value={form.pincode} onChange={onChange} required placeholder="Enter Pincode" maxLength={6}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Select State <span className="text-red-500">*</span></label>
            <select name="state" value={form.state} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Select a State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Select District <span className="text-red-500">*</span></label>
            <input type="text" name="district" value={form.district} onChange={onChange} required placeholder="Select a City"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>

        {section('Infrastructure Details', '🔬')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Number of Staff <span className="text-red-500">*</span></label>
            <input type="number" name="numberOfStaff" value={form.numberOfStaff} onChange={onChange} required placeholder="Enter Number of Staff"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Number of Class Rooms <span className="text-red-500">*</span></label>
            <input type="number" name="numberOfClassrooms" value={form.numberOfClassrooms} onChange={onChange} required placeholder="Enter Number of Class Rooms"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Total Computers <span className="text-red-500">*</span></label>
            <input type="number" name="totalComputers" value={form.totalComputers} onChange={onChange} required placeholder="Enter Total Computers"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Space of Centre <span className="text-red-500">*</span></label>
            <input type="text" name="spaceOfCentre" value={form.spaceOfCentre} onChange={onChange} required placeholder="Enter Space of Centre"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>

        {section('Contact Details', '📞')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Whatsapp Number <span className="text-red-500">*</span></label>
            <input type="tel" name="whatsappNumber" value={form.whatsappNumber} onChange={onChange} required placeholder="Enter Whatsapp Number" maxLength={10}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
            <input type="tel" name="contactNumber" value={form.contactNumber} onChange={onChange} required placeholder="Enter Contact Number" maxLength={10}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">E-Mail ID <span className="text-red-500">*</span></label>
            <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="Enter E-Mail ID"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password <span className="text-red-500">*</span></label>
            <input type="password" name="password" value={form.password} onChange={onChange} required placeholder="Enter Password" minLength={8}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <p className="text-xs text-gray-500 mt-1">Use 8 or more characters with a mix of letters, numbers & symbols.</p>
          </div>
        </div>

        {section('Facilities', '🏢')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Reception <span className="text-red-500">*</span></label>
            <select name="reception" value={form.reception} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Staff Room <span className="text-red-500">*</span></label>
            <select name="staffRoom" value={form.staffRoom} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Water Supply <span className="text-red-500">*</span></label>
            <select name="waterSupply" value={form.waterSupply} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Toilet <span className="text-red-500">*</span></label>
            <select name="toilet" value={form.toilet} onChange={onChange} required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
        </div>

        {section('Document Uploads', '📎')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Image of Owner <span className="text-red-500">*</span></label>
            <input type="file" name="ownerImage" onChange={onFileChange} required accept=".jpg,.jpeg,.png"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700" />
            {docs.ownerImage && <p className="text-xs text-green-600 mt-1">✓ {docs.ownerImage.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Aadhar Card <span className="text-red-500">*</span></label>
            <input type="file" name="aadharCard" onChange={onFileChange} required accept=".pdf,.jpg,.jpeg,.png"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700" />
            {docs.aadharCard && <p className="text-xs text-green-600 mt-1">✓ {docs.aadharCard.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Signature <span className="text-red-500">*</span></label>
            <input type="file" name="signature" onChange={onFileChange} required accept=".pdf,.jpg,.jpeg,.png"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700" />
            {docs.signature && <p className="text-xs text-green-600 mt-1">✓ {docs.signature.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Address Proof</label>
            <input type="file" name="addressProof" onChange={onFileChange} accept=".pdf,.jpg,.jpeg,.png"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700" />
            {docs.addressProof && <p className="text-xs text-green-600 mt-1">✓ {docs.addressProof.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Agreement</label>
            <input type="file" name="agreement" onChange={onFileChange} accept=".pdf,.jpg,.jpeg,.png"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700" />
            {docs.agreement && <p className="text-xs text-green-600 mt-1">✓ {docs.agreement.name}</p>}
          </div>
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
