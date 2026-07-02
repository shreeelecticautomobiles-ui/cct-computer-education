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

export interface Announcement {
  id: string;
  message: string;
  active: boolean;
  sortOrder: number;
}

export interface SheetService {
  id: string;
  title: string;
  description: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
  active: boolean;
  sortOrder: number;
  price?: string;
  warranty?: string;
  badge1?: string;
  badge2?: string;
}

export interface LaptopSaleCard {
  id: string;
  title: string;
  description: string;
  image?: string;
  price?: string;
  warranty?: string;
  buttonText?: string;
  buttonLink?: string;
  active: boolean;
  sortOrder: number;
  icon?: string;
}

export interface LaptopGalleryItem {
  id: string;
  imageUrl: string;
  active: boolean;
  sortOrder: number;
  brand?: string;
  price?: string;
}



