import { Course } from '../types';
import { fetchSheet } from '../lib/sheets';
 
export const fallbackCourses: Course[] = [
  {
    id: 'basic_computer',
    title: 'Basic Computer Application',
    price: 2500,
    originalPrice: 4000,
    duration: '3 Month Course',
    rating: 4.8,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600',
    tags: ['Basic Application', 'Office Starter'],
    description: 'The definitive foundation program for kids, office workers, and shop owners.',
    syllabus: ['Fundamental concepts & Ms-Dos', 'Windows utilities & Ms-Word', 'Typing drills', 'Internet navigation basics']
  }
];
 
function rowToCourse(row: Record<string, string>): Course {
  return {
    id: row['id'] || `course_${Math.random().toString(36).slice(2, 7)}`,
    title: row['title'] || 'Untitled Course',
    price: parseFloat(row['price']) || 0,
    originalPrice: row['originalPrice'] ? parseFloat(row['originalPrice']) : undefined,
    duration: row['duration'] || '',
    rating: parseFloat(row['rating']) || 4.8,
    reviewsCount: parseInt(row['reviewsCount']) || 0,
    image: row['image'] || 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600',
    tags: row['tags'] ? row['tags'].split(',').map((t: string) => t.trim()).filter(Boolean) : [],
    description: row['description'] || '',
    syllabus: row['syllabus'] ? row['syllabus'].split('|').map((s: string) => s.trim()).filter(Boolean) : [],
  };
}
 
export async function fetchCourses(): Promise<Course[]> {
  const rows = await fetchSheet('courses');
  if (!rows || rows.length === 0) return fallbackCourses;
  return rows.map(rowToCourse);
}
 
export const coursesData: Course[] = [];
