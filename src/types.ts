export interface Course {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  duration: string;
  rating: number;
  reviewsCount: number;
  image: string;
  tags: string[];
  description: string;
  syllabus: string[];
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  avatar: string;
  rating: number;
}

export interface CartItem {
  courseId: string;
  title: string;
  price: number;
  count: number;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  batch: string;
}

export interface SheetCourse {
  id: string;
  category: string;
  categoryId: string;
  title: string;
  tag: string;
  duration: string;
  topics: string[];
  enrollLink: string;
  active: boolean;
  sortOrder: number;
}

export interface SheetCrashCourse {
  id: string;
  name: string;
  duration: string;
  active: boolean;
  sortOrder: number;
}

export interface LaptopSaleInfo {
  price: string;
  warranty: string;
}


