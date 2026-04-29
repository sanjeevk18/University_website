// Institute Types
export interface Institute {
  id: string;
  instituteCode: string;
  instituteName: string;
  instituteType: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  affiliationNo: string;
  affiliationDate: string;
  status: 'Active' | 'Inactive' | 'Suspended' | 'Pending';
  principalName: string;
  principalEmail: string;
  principalMobile: string;
  totalStudents: number;
  activePrograms: string[];
}

// Institute Student (managed by institute)
export interface InstituteStudent {
  id: string;
  enrollmentNo: string;
  name: string;
  email: string;
  mobile: string;
  dob: string;
  gender: 'Male' | 'Female' | 'Other';
  course: string;
  semester: string;
  batch: string;
  status: 'Active' | 'Inactive' | 'Graduated' | 'Dropped';
  feesStatus: 'Paid' | 'Pending' | 'Partial';
  admissionDate: string;
  instituteId: string;
  instituteName: string;
  fatherName: string;
  motherName: string;
  address: string;
  aadharNo: string;
}

// Institute Fee Record
export interface InstituteFeeRecord {
  id: string;
  studentId: string;
  studentName: string;
  enrollmentNo: string;
  semester: string;
  totalAmount: number;
  paidAmount: number;
  pendingAmount: number;
  paymentDate?: string;
  paymentMode?: 'Online' | 'Cash' | 'DD' | 'Cheque';
  transactionId?: string;
  status: 'Paid' | 'Pending' | 'Partial';
  instituteId: string;
}

// Institute Exam Form
export interface InstituteExamForm {
  id: string;
  studentId: string;
  studentName: string;
  enrollmentNo: string;
  examName: string;
  semester: string;
  examFees: number;
  submissionDate: string;
  status: 'Submitted' | 'Approved' | 'Rejected' | 'Pending';
  instituteId: string;
  admitCardGenerated: boolean;
}

// Institute Notice
export interface InstituteNotice {
  id: string;
  title: string;
  description: string;
  date: string;
  priority: 'High' | 'Medium' | 'Low';
  category: 'Exam' | 'Admission' | 'General' | 'Fee' | 'Result';
  isRead: boolean;
}

// Institute Support Ticket
export interface InstituteSupportTicket {
  id: string;
  ticketNo: string;
  subject: string;
  description: string;
  category: 'Technical' | 'Admission' | 'Exam' | 'Fee' | 'Certificate' | 'Other';
  priority: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  createdDate: string;
  lastUpdated: string;
  instituteId: string;
}

// Institute Certificate Request
export interface InstituteCertificateRequest {
  id: string;
  requestNo: string;
  studentId: string;
  studentName: string;
  enrollmentNo: string;
  certificateType: 'Provisional' | 'Final' | 'Migration' | 'Character' | 'Bonafide';
  requestDate: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Issued';
  instituteId: string;
  remarks?: string;
}

// Institute Dashboard Stats
export interface InstituteDashboardStats {
  totalStudents: number;
  activeStudents: number;
  activeCourses: number;
  totalFeesCollected: number;
  pendingFees: number;
  pendingExamForms: number;
  pendingCertificates: number;
  unreadNotices: number;
}
