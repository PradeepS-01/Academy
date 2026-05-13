export interface Enquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  status?: string;
  created_at?: string;
}

export interface Testimonial {
  id: string;
  student_name: string;
  course: string;
  rank: string;
  score: string;
  content: string;
  rating: number;
  image_url: string;
  year: number;
  is_featured: boolean;
}

export interface Course {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  fee: number;
  batch_size: number;
  is_active: boolean;
  features: string[];
}

export interface Faculty {
  id: string;
  name: string;
  designation: string;
  subject: string;
  experience_years: number;
  qualification: string;
  bio: string;
  image_url: string;
  achievements: string[];
  is_active: boolean;
}

export interface Achievement {
  id: string;
  student_name: string;
  exam: string;
  rank: string;
  score: string;
  year: number;
  course: string;
  image_url: string;
  is_featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  image_url: string;
  author: string;
  published_at: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  category: string;
  description: string;
}
