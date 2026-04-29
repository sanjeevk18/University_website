'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Tab = 'login' | 'register';
type Role = '' | 'teacher' | 'institute';

/* ─── small reusable input ─── */
function Field({
  label, name, type = 'text', placeholder, required = true, value, onChange, hint,
}: {
  label: string; name: string; type?: string; placeholder: string;
  required?: boolean; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        required={required} placeholder={placeholder}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
      />
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

function SelectField({
  label, name, value, onChange, options, required = true, placeholder,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean; placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name} value={value} onChange={onChange} required={required}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

function FileUpload({
  label, name, onChange, file, required = true, accept = '.pdf,.jpg,.jpeg,.png',
}: {
  label: string; name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null; required?: boolean; accept?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type="file" name={name} onChange={onChange} required={required}
          accept={accept}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
      {file && (
        <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {file.name} ({(file.size / 1024).toFixed(1)} KB)
        </p>
      )}
      <p className="text-xs text-gray-400 mt-1">Max 5MB • PDF, JPG, PNG</p>
    </div>
  );
}

/* ─── LOGIN ─── */
function LoginForm() {
  const [form, setForm] = useState({ userId: '', email: '', password: '' });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Dummy login - accept any credentials
    setTimeout(() => {
      // Store dummy institute data
      const dummyInstituteData = {
        id: '1',
        instituteCode: form.userId || 'SAHCU-CTR-2024-001',
        instituteName: 'Lucknow Medical Institute',
        instituteType: 'Nursing College',
        email: form.email,
        mobile: '+91 98765 11111',
        address: '123, Gomti Nagar Extension',
        city: 'Lucknow',
        state: 'Uttar Pradesh',
        pincode: '226010',
        affiliationNo: 'AFF-2024-001',
        affiliationDate: '2024-01-15',
        status: 'Active',
        principalName: 'Dr. Rajesh Kumar',
        principalEmail: 'principal@lmi.edu.in',
        principalMobile: '+91 98765 11112',
        totalStudents: 150,
        activePrograms: ['B.Sc Nursing', 'GNM'],
      };
      
      localStorage.setItem('instituteLoggedIn', 'true');
      localStorage.setItem('instituteData', JSON.stringify(dummyInstituteData));
      
      // Redirect to dashboard
      router.push('/centers/dashboard');
    }, 1500);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="User ID / Center ID" name="userId" placeholder="e.g. SAHCU-CTR-2024-001 or TCH-2024-045"
        value={form.userId} onChange={onChange}
        hint="Provided after registration approval" />

      <Field label="Registered Email" name="email" type="email"
        placeholder="you@institute.edu.in" value={form.email} onChange={onChange} />

      {/* Password */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <label className="text-sm font-semibold text-gray-700">
            Password <span className="text-red-500">*</span>
          </label>
          <button type="button" className="text-xs text-blue-600 hover:underline">Forgot Password?</button>
        </div>
        <div className="relative">
          <input
            type={show ? 'text' : 'password'} name="password" value={form.password}
            onChange={onChange} required placeholder="Enter your password"
            className="w-full px-4 py-2.5 pr-11 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <button type="button" onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            {show
              ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
              : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            }
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" id="rem" className="w-4 h-4 accent-blue-600 rounded" />
        <label htmlFor="rem" className="text-sm text-gray-600">Remember this device</label>
      </div>

      <button type="submit" disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-60 flex items-center justify-center gap-2">
        {loading
          ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>Signing In...</>
          : 'Sign In to Portal'}
      </button>
    </form>
  );
}

/* ─── REGISTER ─── */
function RegisterForm() {
  const [role, setRole] = useState<Role>('');
  const [loading, setLoading] = useState(false);

  /* teacher fields */
  const [teacher, setTeacher] = useState({
    fullName: '', dob: '', gender: '', mobile: '', email: '', aadhar: '',
    qualification: '', specialization: '', experience: '', designation: '',
    centerName: '', centerCode: '', address: '', state: '', city: '', pincode: '',
    password: '', confirmPassword: '',
  });

  /* institute fields */
  const [institute, setInstitute] = useState({
    instituteName: '', instituteType: '', affiliationNo: '', estYear: '',
    ownerName: '', ownerMobile: '', ownerEmail: '', ownerAadhar: '', ownerPan: '',
    principalName: '', principalMobile: '', principalEmail: '', principalQualification: '',
    address: '', state: '', city: '', pincode: '', website: '',
    programs: '', totalSeats: '', labFacility: '', hostelFacility: '',
    password: '', confirmPassword: '',
  });

  /* document uploads for institute */
  const [docs, setDocs] = useState({
    registrationCert: null as File | null,
    affiliationCert: null as File | null,
    ownerAadhar: null as File | null,
    ownerPan: null as File | null,
    principalQualification: null as File | null,
    buildingProof: null as File | null,
    noc: null as File | null,
  });

  const onTeacher = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setTeacher((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onInstitute = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setInstitute((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setDocs((p) => ({ ...p, [e.target.name]: file }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  const states = [
    'Uttar Pradesh','Delhi','Maharashtra','Bihar','Madhya Pradesh',
    'Rajasthan','Gujarat','West Bengal','Karnataka','Tamil Nadu','Other',
  ].map((s) => ({ value: s, label: s }));

  const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const qualifications = [
    { value: 'bsc', label: 'B.Sc' },
    { value: 'msc', label: 'M.Sc' },
    { value: 'bpharm', label: 'B.Pharm' },
    { value: 'mpharm', label: 'M.Pharm' },
    { value: 'mbbs', label: 'MBBS' },
    { value: 'md', label: 'MD' },
    { value: 'phd', label: 'Ph.D' },
    { value: 'other', label: 'Other' },
  ];

  const instituteTypes = [
    { value: 'nursing', label: 'Nursing College' },
    { value: 'pharmacy', label: 'Pharmacy College' },
    { value: 'paramedical', label: 'Paramedical Institute' },
    { value: 'allied', label: 'Allied Health Sciences' },
    { value: 'hospital', label: 'Hospital-based Training Center' },
    { value: 'other', label: 'Other' },
  ];

  const sectionHead = (title: string, icon: string) => (
    <div className="flex items-center gap-2 pt-2 pb-1 border-b border-gray-200">
      <span className="text-lg">{icon}</span>
      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">{title}</h3>
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Role selector — dropdown */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          I am registering as <span className="text-red-500">*</span>
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
        >
          <option value="">-- Select your role --</option>
          <option value="teacher">👨‍🏫 Teacher / Faculty</option>
          <option value="institute">🏫 Institute Owner</option>
        </select>
      </div>

      {/* ── TEACHER FIELDS ── */}
      {role === 'teacher' && (
        <div className="space-y-4">
          {sectionHead('Personal Information', '👤')}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full Name" name="fullName" placeholder="As per Aadhar card" value={teacher.fullName} onChange={onTeacher} />
            <Field label="Date of Birth" name="dob" type="date" placeholder="" value={teacher.dob} onChange={onTeacher} />
            <SelectField label="Gender" name="gender" placeholder="Select gender" value={teacher.gender} onChange={onTeacher} options={genders} />
            <Field label="Mobile Number" name="mobile" type="tel" placeholder="10-digit mobile" value={teacher.mobile} onChange={onTeacher} />
            <Field label="Email Address" name="email" type="email" placeholder="your@email.com" value={teacher.email} onChange={onTeacher} />
            <Field label="Aadhar Number" name="aadhar" placeholder="12-digit Aadhar" value={teacher.aadhar} onChange={onTeacher} />
          </div>

          {sectionHead('Academic & Professional Details', '🎓')}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectField label="Highest Qualification" name="qualification" placeholder="Select qualification" value={teacher.qualification} onChange={onTeacher} options={qualifications} />
            <Field label="Specialization / Subject" name="specialization" placeholder="e.g. Pharmacology, Nursing" value={teacher.specialization} onChange={onTeacher} />
            <Field label="Years of Experience" name="experience" type="number" placeholder="e.g. 5" value={teacher.experience} onChange={onTeacher} />
            <Field label="Current Designation" name="designation" placeholder="e.g. Lecturer, Asst. Professor" value={teacher.designation} onChange={onTeacher} />
          </div>

          {sectionHead('Affiliated Center Details', '🏥')}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Center / Institute Name" name="centerName" placeholder="Name of your institute" value={teacher.centerName} onChange={onTeacher} />
            <Field label="Center Affiliation Code" name="centerCode" placeholder="e.g. SAHCU-CTR-2024-001" value={teacher.centerCode} onChange={onTeacher} hint="Leave blank if not yet affiliated" required={false} />
            <div className="sm:col-span-2">
              <Field label="Institute Address" name="address" placeholder="Full address" value={teacher.address} onChange={onTeacher} />
            </div>
            <SelectField label="State" name="state" placeholder="Select state" value={teacher.state} onChange={onTeacher} options={states} />
            <Field label="City" name="city" placeholder="City" value={teacher.city} onChange={onTeacher} />
            <Field label="PIN Code" name="pincode" placeholder="6-digit PIN" value={teacher.pincode} onChange={onTeacher} />
          </div>

          {sectionHead('Set Password', '🔒')}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Password" name="password" type="password" placeholder="Min 8 characters" value={teacher.password} onChange={onTeacher} />
            <Field label="Confirm Password" name="confirmPassword" type="password" placeholder="Re-enter password" value={teacher.confirmPassword} onChange={onTeacher} />
          </div>
        </div>
      )}

      {/* ── INSTITUTE FIELDS ── */}
      {role === 'institute' && (
        <div className="space-y-4">
          {sectionHead('Institute Basic Information', '🏫')}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Field label="Institute Name" name="instituteName" placeholder="Full legal name of institute" value={institute.instituteName} onChange={onInstitute} />
            </div>
            <SelectField label="Institute Type" name="instituteType" placeholder="Select type" value={institute.instituteType} onChange={onInstitute} options={instituteTypes} />
            <Field label="Existing Affiliation No." name="affiliationNo" placeholder="If already affiliated elsewhere" value={institute.affiliationNo} onChange={onInstitute} required={false} />
            <Field label="Year of Establishment" name="estYear" type="number" placeholder="e.g. 2010" value={institute.estYear} onChange={onInstitute} />
            <Field label="Institute Website" name="website" type="url" placeholder="https://yourinstitute.edu.in" value={institute.website} onChange={onInstitute} required={false} />
          </div>

          {sectionHead('Owner / Director Details', '👔')}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Owner / Director Name" name="ownerName" placeholder="Full name" value={institute.ownerName} onChange={onInstitute} />
            <Field label="Owner Mobile" name="ownerMobile" type="tel" placeholder="10-digit mobile" value={institute.ownerMobile} onChange={onInstitute} />
            <Field label="Owner Email" name="ownerEmail" type="email" placeholder="owner@institute.edu.in" value={institute.ownerEmail} onChange={onInstitute} />
            <Field label="Owner Aadhar Number" name="ownerAadhar" placeholder="12-digit Aadhar" value={institute.ownerAadhar} onChange={onInstitute} />
            <Field label="Owner PAN Number" name="ownerPan" placeholder="e.g. ABCDE1234F" value={institute.ownerPan} onChange={onInstitute} />
          </div>

          {sectionHead('Principal / Head of Institution', '🧑‍💼')}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Principal Name" name="principalName" placeholder="Full name" value={institute.principalName} onChange={onInstitute} />
            <Field label="Principal Mobile" name="principalMobile" type="tel" placeholder="10-digit mobile" value={institute.principalMobile} onChange={onInstitute} />
            <Field label="Principal Email" name="principalEmail" type="email" placeholder="principal@institute.edu.in" value={institute.principalEmail} onChange={onInstitute} />
            <SelectField label="Principal Qualification" name="principalQualification" placeholder="Select qualification" value={institute.principalQualification} onChange={onInstitute} options={qualifications} />
          </div>

          {sectionHead('Address & Location', '📍')}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Field label="Full Address" name="address" placeholder="Street, Area, Landmark" value={institute.address} onChange={onInstitute} />
            </div>
            <SelectField label="State" name="state" placeholder="Select state" value={institute.state} onChange={onInstitute} options={states} />
            <Field label="City / District" name="city" placeholder="City" value={institute.city} onChange={onInstitute} />
            <Field label="PIN Code" name="pincode" placeholder="6-digit PIN" value={institute.pincode} onChange={onInstitute} />
          </div>

          {sectionHead('Programs & Infrastructure', '🔬')}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Field label="Programs Offered" name="programs" placeholder="e.g. B.Sc Nursing, D.Pharm, DMLT" value={institute.programs} onChange={onInstitute} hint="Separate multiple programs with commas" />
            </div>
            <Field label="Total Student Intake (per year)" name="totalSeats" type="number" placeholder="e.g. 120" value={institute.totalSeats} onChange={onInstitute} />
            <SelectField label="Lab Facility Available?" name="labFacility" placeholder="Select" value={institute.labFacility} onChange={onInstitute}
              options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }, { value: 'partial', label: 'Partial' }]} />
            <SelectField label="Hostel Facility Available?" name="hostelFacility" placeholder="Select" value={institute.hostelFacility} onChange={onInstitute}
              options={[{ value: 'yes', label: 'Yes — Boys & Girls' }, { value: 'boys', label: 'Yes — Boys Only' }, { value: 'girls', label: 'Yes — Girls Only' }, { value: 'no', label: 'No' }]} />
          </div>

          {sectionHead('Document Uploads', '📎')}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FileUpload
              label="Institute Registration Certificate"
              name="registrationCert"
              onChange={onFileChange}
              file={docs.registrationCert}
            />
            <FileUpload
              label="Existing Affiliation Certificate"
              name="affiliationCert"
              onChange={onFileChange}
              file={docs.affiliationCert}
              required={false}
            />
            <FileUpload
              label="Owner Aadhar Card"
              name="ownerAadhar"
              onChange={onFileChange}
              file={docs.ownerAadhar}
            />
            <FileUpload
              label="Owner PAN Card"
              name="ownerPan"
              onChange={onFileChange}
              file={docs.ownerPan}
            />
            <FileUpload
              label="Principal Qualification Certificate"
              name="principalQualification"
              onChange={onFileChange}
              file={docs.principalQualification}
            />
            <FileUpload
              label="Building Ownership / Lease Proof"
              name="buildingProof"
              onChange={onFileChange}
              file={docs.buildingProof}
            />
            <div className="sm:col-span-2">
              <FileUpload
                label="NOC from Local Authority (if applicable)"
                name="noc"
                onChange={onFileChange}
                file={docs.noc}
                required={false}
              />
            </div>
          </div>

          {sectionHead('Set Login Password', '🔒')}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Password" name="password" type="password" placeholder="Min 8 characters" value={institute.password} onChange={onInstitute} />
            <Field label="Confirm Password" name="confirmPassword" type="password" placeholder="Re-enter password" value={institute.confirmPassword} onChange={onInstitute} />
          </div>
        </div>
      )}

      {/* Declaration */}
      {role && (
        <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <input type="checkbox" id="declare" required className="w-4 h-4 accent-blue-600 mt-0.5 flex-shrink-0" />
          <label htmlFor="declare" className="text-xs text-gray-700 leading-relaxed">
            I hereby declare that all the information provided above is true and correct to the best of my knowledge.
            I understand that any false information may result in cancellation of registration.
          </label>
        </div>
      )}

      {/* Submit */}
      {role && (
        <button type="submit" disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-60 flex items-center justify-center gap-2">
          {loading
            ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>Submitting...</>
            : role === 'teacher' ? 'Submit Teacher Registration' : 'Submit Institute Registration'}
        </button>
      )}
    </form>
  );
}

/* ─── MAIN EXPORT ─── */
export default function CenterAuthForm({ defaultTab = 'login' }: { defaultTab?: Tab }) {
  const [tab, setTab] = useState<Tab>(defaultTab);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full overflow-hidden">
      {/* Tab switcher */}
      <div className="grid grid-cols-2 border-b border-gray-200">
        {(['login', 'register'] as Tab[]).map((t) => (
          <button key={t} type="button" onClick={() => setTab(t)}
            className={`py-4 text-sm font-bold tracking-wide transition-all ${
              tab === t
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
            }`}>
            {t === 'login' ? '🔑 Sign In' : '📝 Register'}
          </button>
        ))}
      </div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            {tab === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {tab === 'login'
              ? 'Sign in to access your center portal'
              : 'Register as a teacher or institute to get started'}
          </p>
        </div>

        {tab === 'login' ? <LoginForm /> : <RegisterForm />}

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Need help?{' '}
          <a href="mailto:affiliation@sahcl.edu.in" className="text-blue-600 hover:underline">
            affiliation@sahcl.edu.in
          </a>
          {' '}| +91 522 123 4567
        </p>
      </div>
    </div>
  );
}
