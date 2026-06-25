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
