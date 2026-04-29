// Common interface definitions for the university website

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: NavItem[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  stats: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  alt?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  course: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface Course {
  id: number;
  title: string;
  duration: string;
  eligibility: string;
  description: string;
  fees: string;
  category: 'undergraduate' | 'postgraduate' | 'diploma';
}

export interface Faculty {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  imageUrl: string;
  specialization: string[];
}

export interface NewsEvent {
  id: number;
  title: string;
  date: string;
  category: 'news' | 'event' | 'announcement';
  description: string;
  imageUrl?: string;
  link?: string;
}

export interface Facility {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  features: string[];
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AdmissionFormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: 'male' | 'female' | 'other';
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  academicInfo: {
    course: string;
    previousEducation: string;
    marks: string;
    passingYear: string;
  };
  documents: {
    photo: File | null;
    marksheet: File | null;
    certificate: File | null;
  };
}

// Component Props types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

// SEO types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}