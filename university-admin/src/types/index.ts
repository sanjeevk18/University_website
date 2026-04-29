// Student Types
export interface Student {
  id: string;
  enrollmentNo: string;
  name: string;
  email: string;
  mobile: string;
  dob: string;
  gender: 'Male' | 'Female' | 'Other';
  bloodGroup: string;
  course: string;
  semester: string;
  batch: string;
  status: 'Active' | 'Inactive' | 'Graduated' | 'Suspended';
  feesStatus: 'Paid' | 'Pending' | 'Partial';
  address: string;
  parentName: string;
  parentMobile: string;
  admissionDate: string;
  photo?: string;
}

// Course Types
export interface Course {
  id: string;
  code: string;
  name: string;
  duration: string;
  totalSeats: number;
  filledSeats: number;
  fees: number;
  department: string;
  status: 'Active' | 'Inactive';
  description: string;
}

// Subject Types
export interface Subject {
  id: string;
  code: string;
  name: string;
  courseId: string;
  semester: number;
  credits: number;
  faculty: string;
  type: 'Theory' | 'Practical' | 'Both';
}

// Fee Types
export interface FeeRecord {
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
}

// Exam Types
export interface Exam {
  id: string;
  name: string;
  course: string;
  semester: string;
  startDate: string;
  endDate: string;
  status: 'Scheduled' | 'Ongoing' | 'Completed' | 'Cancelled';
  totalStudents: number;
}

// Result Types
export interface Result {
  id: string;
  studentId: string;
  studentName: string;
  enrollmentNo: string;
  examId: string;
  semester: string;
  subjects: SubjectResult[];
  sgpa: number;
  cgpa: number;
  status: 'Pass' | 'Fail' | 'Pending';
  publishedDate?: string;
}

export interface SubjectResult {
  subjectCode: string;
  subjectName: string;
  internal: number;
  external: number;
  total: number;
  grade: string;
  status: 'Pass' | 'Fail';
}

// Certificate Types
export interface Certificate {
  id: string;
  certificateNo: string;
  studentId: string;
  studentName: string;
  enrollmentNo: string;
  type: 'Provisional' | 'Final' | 'Migration' | 'Character' | 'Bonafide' | 'Transfer';
  issueDate: string;
  status: 'Issued' | 'Pending' | 'Rejected';
}

// Staff Types
export interface Staff {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  mobile: string;
  designation: string;
  department: string;
  qualification: string;
  experience: number;
  joiningDate: string;
  status: 'Active' | 'Inactive' | 'On Leave';
  salary: number;
}

// Admin Types
export interface Admin {
  id: string;
  username: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Admin' | 'Manager';
  department: string;
  permissions: string[];
}

// Dashboard Stats
export interface DashboardStats {
  totalStudents: number;
  activeStudents: number;
  totalCourses: number;
  totalRevenue: number;
  pendingFees: number;
  totalStaff: number;
  upcomingExams: number;
  pendingApplications: number;
}
