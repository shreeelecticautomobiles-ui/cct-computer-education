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

export interface SheetHero {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  active: boolean;
}

export interface SheetLaptopFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  sortOrder: number;
  active: boolean;
}

export interface SheetSupportCatalogue {
  id: string;
  imageUrl: string;
  price: string;
  warranty: string;
  title: string;
  description: string;
  footerLeft: string;
  footerRight: string;
  buttonText: string;
  buttonLink: string;
  sortOrder: number;
  active: boolean;
}

export interface SheetWhyBuy {
  id: string;
  text: string;
  sortOrder: number;
  active: boolean;
}


