export interface Course {
  sNo: number;
  courseCode: string;
  courseName: string;
  duration: string;
  faculty: string;
}

export const coursesData: Course[] = [
  // FACULTY OF PARA MEDICAL SCIENCE
  { sNo: 1, courseCode: 'DHSI', courseName: 'DIPLOMA IN HEALTH & SANITARY INSPECTOR', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 2, courseCode: 'DMLT', courseName: 'DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 3, courseCode: 'DECG', courseName: 'DIPLOMA IN E C G TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 4, courseCode: 'DPT', courseName: 'DIPLOMA IN PHYSIOTHERAPY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 5, courseCode: 'DXRT', courseName: 'DIPLOMA IN X-RAY TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 6, courseCode: 'DCTST', courseName: 'DIPLOMA IN CT SCAN TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 7, courseCode: 'DOTA', courseName: 'DIPLOMA IN OPERATION THEATRE ASSISTANT', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 8, courseCode: 'DOTT', courseName: 'DIPLOMA IN OCCUPATIONAL THERAPY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 9, courseCode: 'DOT', courseName: 'DIPLOMA IN OPHTHALMIC TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 10, courseCode: 'DO', courseName: 'DIPLOMA IN OPTOMETRY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 11, courseCode: 'DRIT', courseName: 'DIPLOMA IN RADIOLOGY & IMAGING TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 12, courseCode: 'DMT', courseName: 'DIPLOMA IN MEDICAL TRANSCRIPTION', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 13, courseCode: 'DTCCT', courseName: 'DIPLOMA IN TRAUMA CARE & CASUALTY TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 14, courseCode: 'DDT', courseName: 'DIPLOMA IN DIALYSIS TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 15, courseCode: 'DECCT', courseName: 'DIPLOMA IN ECHO CARDIOGRAPHY & CARDIAC TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 16, courseCode: 'DNA', courseName: 'DIPLOMA IN NURSING ASSISTANT', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 17, courseCode: 'DAA', courseName: 'DIPLOMA IN ANESTHESIA ASSISTANT', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 18, courseCode: 'DEMT', courseName: 'DIPLOMA IN EMERGENCY MEDICAL TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 19, courseCode: 'DCLT', courseName: 'DIPLOMA IN CATH LAB TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 20, courseCode: 'DLST', courseName: 'DIPLOMA IN LAPAROSCOPIC SURGICAL TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 21, courseCode: 'DMA', courseName: 'DIPLOMA IN MEDICAL ASSISTANT', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 22, courseCode: 'DMPHW', courseName: 'DIPLOMA IN MULTI PURPOSE HEALTH WORKER (Male/Female)', duration: '1 1/2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 23, courseCode: 'DHM', courseName: 'DIPLOMA IN HOSPITAL MANAGEMENT', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 24, courseCode: 'DHDRM', courseName: 'DIPLOMA IN HOSPITAL DOCUMENTATION & RECORDS MANAGEMENT', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 25, courseCode: 'DNA', courseName: 'DIPLOMA IN NURSING ADMINISTRATION', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 26, courseCode: 'CMLT', courseName: 'CERTIFICATE IN MEDICAL LABORATORY TECHNOLOGY', duration: '1 YEAR', faculty: 'Para Medical Science' },
  { sNo: 27, courseCode: 'CECGT', courseName: 'CERTIFICATE IN E C G TECHNOLOGY', duration: '1 YEAR', faculty: 'Para Medical Science' },
  { sNo: 28, courseCode: 'CP', courseName: 'CERTIFICATE IN PHYSIOTHERAPY', duration: '1 YEAR', faculty: 'Para Medical Science' },
  { sNo: 29, courseCode: 'CRT', courseName: 'CERTIFICATE IN X-RAY TECHNOLOGY', duration: '1 YEAR', faculty: 'Para Medical Science' },
  { sNo: 30, courseCode: 'COTA', courseName: 'CERTIFICATE IN OPERATION THEATRE ASSISTANT', duration: '1 YEAR', faculty: 'Para Medical Science' },
  { sNo: 31, courseCode: 'COT', courseName: 'CERTIFICATE IN OPHTHALMIC TECHNOLOGY', duration: '1 YEAR', faculty: 'Para Medical Science' },
  { sNo: 32, courseCode: 'CRIT', courseName: 'CERTIFICATE IN RADIOLOGY & IMAGING TECHNOLOGY', duration: '1 YEAR', faculty: 'Para Medical Science' },
  { sNo: 33, courseCode: 'CAA', courseName: 'CERTIFICATE IN ANESTHESIA ASSISTANT', duration: '1 YEAR', faculty: 'Para Medical Science' },
  { sNo: 34, courseCode: 'CMD', courseName: 'CERTIFICATE IN MEDICAL DRESSER', duration: '1 YEAR', faculty: 'Para Medical Science' },
  { sNo: 35, courseCode: 'Dpharma A', courseName: 'DIPLOMA IN PHARMACY ASSISTANT', duration: '2 YEARS', faculty: 'Para Medical Science' },
  { sNo: 36, courseCode: 'DMRIT', courseName: 'DIPLOMA IN MRI SCAN TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Medical Science' },

  // FACULTY OF HEALTH & HOSPITAL ADMINISTRATION
  { sNo: 37, courseCode: 'DHM', courseName: 'DIPLOMA IN HOSPITAL MANAGEMENT', duration: '2 YEARS', faculty: 'Health & Hospital Administration' },
  { sNo: 38, courseCode: 'DHDRM', courseName: 'DIPLOMA IN HOSPITAL DOCUMENTATION & RECORDS MANAGEMENT', duration: '2 YEARS', faculty: 'Health & Hospital Administration' },
  { sNo: 39, courseCode: 'DHWM', courseName: 'DIPLOMA IN HOSPITAL WASTE MANAGEMENT', duration: '2 YEARS', faculty: 'Health & Hospital Administration' },
  { sNo: 40, courseCode: 'DNA', courseName: 'DIPLOMA IN NURSING ADMINISTRATION', duration: '2 YEARS', faculty: 'Health & Hospital Administration' },

  // FACULTY OF PARA DENTAL SCIENCE
  { sNo: 41, courseCode: 'DDH', courseName: 'DIPLOMA IN DENTAL HYGINIST', duration: '2 YEARS', faculty: 'Para Dental Science' },
  { sNo: 42, courseCode: 'DDM', courseName: 'DIPLOMA IN DENTAL MACHANICS', duration: '2 YEARS', faculty: 'Para Dental Science' },
  { sNo: 43, courseCode: 'DDLT', courseName: 'DIPLOMA IN DENTAL LAB TECHNOLOGY', duration: '2 YEARS', faculty: 'Para Dental Science' },
  { sNo: 44, courseCode: 'DDORA', courseName: 'DIPLOMA IN DENTAL OPERATING ROOM ASSISTANT', duration: '2 YEARS', faculty: 'Para Dental Science' },
  { sNo: 45, courseCode: 'DDHW', courseName: 'DIPLOMA IN DENTAL HEALTH WORKER', duration: '2 YEARS', faculty: 'Para Dental Science' },
  { sNo: 46, courseCode: 'CDH', courseName: 'CERTIFICATE IN DENTAL HYGINIST', duration: '1 YEAR', faculty: 'Para Dental Science' },
  { sNo: 47, courseCode: 'CDM', courseName: 'CERTIFICATE IN DENTAL MACHANICS', duration: '1 YEAR', faculty: 'Para Dental Science' },
  { sNo: 48, courseCode: 'CDLT', courseName: 'CERTIFICATE IN DENTAL LAB TECHNOLOGY', duration: '1 YEAR', faculty: 'Para Dental Science' },
  { sNo: 49, courseCode: 'CDORA', courseName: 'CERTIFICATE IN DENTAL OPERATING ROOM ASSISTANT', duration: '1 YEAR', faculty: 'Para Dental Science' },
  { sNo: 50, courseCode: 'CDHW', courseName: 'CERTIFICATE IN DENTAL HEALTH WORKER', duration: '1 YEAR', faculty: 'Para Dental Science' },

  // FACULTY OF VETERINARY SCIENCE
  { sNo: 51, courseCode: 'DVSc', courseName: 'DIPLOMA IN VETERINARY SCIENCES', duration: '2 YEARS', faculty: 'Veterinary Science' },
  { sNo: 52, courseCode: 'DLVSc', courseName: 'DIPLOMA IN LIVESTOCK & VETERINARY SCIENCES', duration: '2 YEARS', faculty: 'Veterinary Science' },
  { sNo: 53, courseCode: 'DVLT', courseName: 'DIPLOMA IN VETERINARY LABORATORY TECHNOLOGY', duration: '2 YEARS', faculty: 'Veterinary Science' },
  { sNo: 54, courseCode: 'DLDS', courseName: 'DIPLOMA IN LIVESTOCK DAIRY SUPERVISOR', duration: '2 YEARS', faculty: 'Veterinary Science' },
  { sNo: 55, courseCode: 'DVPharma', courseName: 'DIPLOMA IN VETERINARY PHARMACY', duration: '2 YEARS', faculty: 'Veterinary Science' },
  { sNo: 56, courseCode: 'DVI', courseName: 'DIPLOMA IN VETERINARY INSPECTOR', duration: '2 YEARS', faculty: 'Veterinary Science' },
  { sNo: 57, courseCode: 'CVSC', courseName: 'CERTIFICATE IN VETERINARY SCIENCES', duration: '1 YEAR', faculty: 'Veterinary Science' },
  { sNo: 58, courseCode: 'CVLVSc', courseName: 'CERTIFICATE IN LIVESTOCK & VETERINARY SCIENCES', duration: '1 YEAR', faculty: 'Veterinary Science' },
  { sNo: 59, courseCode: 'CVLT', courseName: 'CERTIFICATE IN VETERINARY LABORATORY TECHNOLOGY', duration: '1 YEAR', faculty: 'Veterinary Science' },

  // FACULTY OF RURAL HEALTH CARE
  { sNo: 60, courseCode: 'DCHW', courseName: 'DIPLOMA IN COMMUNITY HEALTH WORKER', duration: '2 YEARS', faculty: 'Rural Health Care' },
  { sNo: 61, courseCode: 'CCHW', courseName: 'CERTIFICATE IN COMMUNITY HEALTH WORKER', duration: '1 YEAR', faculty: 'Rural Health Care' },
  { sNo: 62, courseCode: 'DCMS&ED', courseName: 'DIPLOMA IN COMMUNITY MEDICAL SERVICES & ESSENTIAL DRUG', duration: '2 YEARS', faculty: 'Rural Health Care' },

  // FACULTY OF NATUROPATHY & YOGA SCIENCE
  { sNo: 63, courseCode: 'DNYS', courseName: 'DIPLOMA IN NATUROPATHY & YOGA SCIENCE', duration: '2 YEARS', faculty: 'Naturopathy & Yoga Science' },
  { sNo: 64, courseCode: 'DNYS', courseName: 'DIPLOMA IN NATUROPATHY & YOGA SCIENCE', duration: '3 YEARS', faculty: 'Naturopathy & Yoga Science' },
  { sNo: 65, courseCode: 'CNYS', courseName: 'CERTIFICATE IN NATUROPATHY & YOGA SCIENCE', duration: '1 YEAR', faculty: 'Naturopathy & Yoga Science' },
  { sNo: 66, courseCode: 'ND', courseName: 'DOCTOR OF NATUROPATHY', duration: '2 YEARS', faculty: 'Naturopathy & Yoga Science' },
  { sNo: 67, courseCode: 'MDNYS', courseName: 'MASTER DIPLOMA IN NATUROPATHY & YOGA SCIENCE', duration: '2 YEARS', faculty: 'Naturopathy & Yoga Science' },
  { sNo: 68, courseCode: 'DAMS', courseName: 'DIPLOMA IN ACUPRESSURE MEDICAL SYSTEM', duration: '2 YEARS', faculty: 'Naturopathy & Yoga Science' },

  // FACULTY OF ELECTROPATHY MEDICAL SCIENCE
  { sNo: 69, courseCode: 'BEMS', courseName: 'BACHELOR OF ELECTROPATHY MEDICINE & SURGERY', duration: '4 1/2 YEARS', faculty: 'Electropathy Medical Science' },
  { sNo: 70, courseCode: 'DEMS', courseName: 'DIPLOMA IN ELECTROPATHY MEDICINE & SURGERY', duration: '3 YEARS', faculty: 'Electropathy Medical Science' },
  { sNo: 71, courseCode: 'MDEH', courseName: 'MASTER DIPLOMA IN ELECTROHOMOEOPATHY', duration: '2 YEARS', faculty: 'Electropathy Medical Science' },

  // FACULTY OF ALLIED MEDICAL SPECIALTIES
  { sNo: 72, courseCode: 'PGDGM', courseName: 'PG DIPLOMA IN GERIATRIC MEDICINE', duration: '1 YEAR', faculty: 'Allied Medical Specialties' },
  { sNo: 73, courseCode: 'PGDMCH', courseName: 'PG DIPLOMA IN MATERNAL & CHILD HEALTH', duration: '1 YEAR', faculty: 'Allied Medical Specialties' },
  { sNo: 74, courseCode: 'PGDUSG', courseName: 'PG DIPLOMA IN ULTRASONOGRAPHY', duration: '1 YEAR', faculty: 'Allied Medical Specialties' },
  { sNo: 75, courseCode: 'PGDCP', courseName: 'PG DIPLOMA IN CLINICAL PATHOLOGY', duration: '1 YEAR', faculty: 'Allied Medical Specialties' },
  { sNo: 76, courseCode: 'PGHHM', courseName: 'PG DIPLOMA IN HOSPITAL HEALTH MANAGEMENT', duration: '1 YEAR', faculty: 'Allied Medical Specialties' },
  { sNo: 77, courseCode: 'PGDDRA', courseName: 'PG DIPLOMA IN DRUG REGULATORY AFFAIRS', duration: '1 YEAR', faculty: 'Allied Medical Specialties' },

  // FACULTY OF ALLIED AYUSH MEDICAL SCIENCE
  { sNo: 78, courseCode: 'DAPharma', courseName: 'DIPLOMA IN AYURVEDIC PHARMACY', duration: '2 YEARS', faculty: 'Allied AYUSH Medical Science' },
  { sNo: 79, courseCode: 'DUPharma', courseName: 'DIPLOMA IN UNANI PHARMACY', duration: '2 YEARS', faculty: 'Allied AYUSH Medical Science' },
  { sNo: 80, courseCode: 'DHPharma', courseName: 'DIPLOMA IN HOMOEOPATHIC PHARMACY', duration: '2 YEARS', faculty: 'Allied AYUSH Medical Science' },
];

// Helper functions
export const getFaculties = (): string[] => {
  return Array.from(new Set(coursesData.map(course => course.faculty)));
};

export const getCoursesByFaculty = (faculty: string): Course[] => {
  return coursesData.filter(course => course.faculty === faculty);
};

export const getCourseByCode = (courseCode: string): Course | undefined => {
  return coursesData.find(course => course.courseCode === courseCode);
};

export const searchCourses = (query: string): Course[] => {
  const lowerQuery = query.toLowerCase();
  return coursesData.filter(
    course =>
      course.courseName.toLowerCase().includes(lowerQuery) ||
      course.courseCode.toLowerCase().includes(lowerQuery) ||
      course.faculty.toLowerCase().includes(lowerQuery)
  );
};

export const getCoursesByDuration = (duration: string): Course[] => {
  return coursesData.filter(course => course.duration === duration);
};
