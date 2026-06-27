import { SheetCourse, SheetCrashCourse, SheetHero, SheetLaptopFeature, SheetSupportCatalogue, SheetWhyBuy } from '../types';

const MAIN_COURSES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=0&single=true&output=csv';
const CRASH_COURSES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=1682720920&single=true&output=csv';

const categoryMap: Record<string, string> = {
  'AI & Data Science': 'ai',
  'Career Courses': 'career',
  'Designing Courses': 'design',
  'Programming Languages': 'programming',
  'AutoCAD Courses': 'cad',
  'General Courses': 'general',
  'Hardware Courses': 'hardware',
  'Special Courses': 'special'
};

// Fallback Data
export const FALLBACK_COURSES: SheetCourse[] = [
  // AI & Data Science
  {
    id: 'ai1',
    category: 'AI & Data Science',
    categoryId: 'ai',
    title: 'Artificial Intelligence & Machine Learning Masterclass',
    duration: '4 Month Course',
    topics: ['AI FOUNDATIONS', 'SUPERVISED & UNSUPERVISED LEARNING', 'NEURAL NETWORKS & DEEP LEARNING', 'NATURAL LANGUAGE PROCESSING (NLP)', 'GENERATIVE AI & LLMs', 'AI MODEL DEPLOYMENT & PROMPT ENGINEERING'],
    tag: 'Trending Future Tech',
    enrollLink: '#',
    active: true,
    sortOrder: 1
  },
  {
    id: 'ai2',
    category: 'AI & Data Science',
    categoryId: 'ai',
    title: 'Data Science & Generative AI Specialist',
    duration: '3 Month Course',
    topics: ['PYTHON FOR DATA SCIENCE', 'NUMPY & PANDAS ANALYSIS', 'DATA VISUALIZATION WITH MATPLOTLIB & SEABORN', 'PROMPT ENGINEERING & LLM APIs', 'RETRIEVAL-AUGMENTED GENERATION (RAG)', 'VECTOR DATABASES'],
    tag: 'High Industry Demand',
    enrollLink: '#',
    active: true,
    sortOrder: 2
  },
  {
    id: 'ai3',
    category: 'AI & Data Science',
    categoryId: 'ai',
    title: 'Prompt Engineering & Modern AI Tools',
    duration: '1 Month Crash Course',
    topics: ['AI AGENTS & CO-PILOTS', 'CHATGPT, CLAUDE, & GEMINI OPTIMIZATION', 'IMAGE GENERATION (MIDJOURNEY/STABLE DIFFUSION)', 'WORKFLOW AUTOMATION WITH AI', 'ETHICS & BIAS IN AI'],
    tag: 'In-Demand Skill',
    enrollLink: '#',
    active: true,
    sortOrder: 3
  },
  // Career Courses
  {
    id: 'm1',
    category: 'Career Courses',
    categoryId: 'career',
    title: 'Master in Software Engineering',
    duration: '1 Year Program',
    topics: ['Fundamental', 'Ms-Dos', 'Windows', 'Ms-Excel', 'Ms-Word', 'Power-point', 'Ms-Access', 'Page-Maker', 'Corel-Draw', 'PhotoShop', 'HTML', 'Tally', 'E-mail, Internet'],
    tag: 'Best Placement Value',
    enrollLink: '#',
    active: true,
    sortOrder: 1
  },
  {
    id: 'm2',
    category: 'Career Courses',
    categoryId: 'career',
    title: 'Diploma in MS-Office',
    duration: '6 Month Course',
    topics: ['Fundamental', 'Ms-Dos', 'Windows', 'Ms-Excel', 'Ms-Word', 'Power-point', 'Ms-Access', 'Data-Entry', 'Typing Tutor', 'Internet'],
    tag: 'Popular Core',
    enrollLink: '#',
    active: true,
    sortOrder: 2
  },
  {
    id: 'm3',
    category: 'Career Courses',
    categoryId: 'career',
    title: 'Special Course in MS-Office',
    duration: '4 Month Course',
    topics: ['Ms-Excel', 'Ms-Word', 'Power-point', 'Ms-Access', 'Internet'],
    tag: 'Office Essential',
    enrollLink: '#',
    active: true,
    sortOrder: 3
  },
  {
    id: 'm4',
    category: 'Career Courses',
    categoryId: 'career',
    title: 'Diploma in DTP (Desktop Publishing)',
    duration: '6 Month Course',
    topics: ['Fundamental', 'Windows', 'Pagemaker', 'PhotoShop', 'illustrator', 'Corel-Draw', 'Typing'],
    tag: 'Print & Layout',
    enrollLink: '#',
    active: true,
    sortOrder: 4
  },
  {
    id: 'm5',
    category: 'Career Courses',
    categoryId: 'career',
    title: 'Special Diploma in DTP',
    duration: '4 Month Course',
    topics: ['PhotoShop', 'Pagemaker', 'Corel-Draw', 'Internet'],
    tag: 'Fast Layout',
    enrollLink: '#',
    active: true,
    sortOrder: 5
  },
  {
    id: 'm6',
    category: 'Career Courses',
    categoryId: 'career',
    title: 'Diploma in Financial Accounting',
    duration: '6 Month Course',
    topics: ['Windows', 'Excel', 'Busy', 'Internet', 'Typing', 'Taxes'],
    tag: 'Industry Accounting',
    enrollLink: '#',
    active: true,
    sortOrder: 6
  },
  // Designing Courses
  {
    id: 'd1',
    category: 'Designing Courses',
    categoryId: 'design',
    title: 'Graphics Designing & Multimedia',
    duration: '6 Month Course',
    topics: ['Core-Draw', 'Illustrator', 'Photoshop', 'Free Hand', 'Flash', 'Quark-express'],
    tag: 'Creative Suite',
    enrollLink: '#',
    active: true,
    sortOrder: 1
  },
  {
    id: 'd2',
    category: 'Designing Courses',
    categoryId: 'design',
    title: 'Certificate in Web Designing',
    duration: '6 Month Course',
    topics: ['Html/Dhtml', 'Frontpage', 'Flash', 'Dream Weaver', 'Photoshop', 'Flash-script'],
    tag: 'Web Standard',
    enrollLink: '#',
    active: true,
    sortOrder: 2
  },
  // Programming Tech
  {
    id: 'p1',
    category: 'Programming Languages',
    categoryId: 'programming',
    title: 'C & C++ Programming',
    duration: '3 Month Course',
    topics: ['DATA TYPES', 'ARRAY', 'POINTER', 'LOOPS', 'CLASS ETC.'],
    tag: 'Core Engineering',
    enrollLink: '#',
    active: true,
    sortOrder: 1
  },
  {
    id: 'p2',
    category: 'Programming Languages',
    categoryId: 'programming',
    title: 'Python Programming',
    duration: '3 Month Course',
    topics: ['VARIABLES & OPERATORS', 'CONDITIONAL LOGIC & LOOPS', 'FUNCTIONS & MODULES', 'OBJECT-ORIENTED PROGRAMMING', 'FILE HANDLING & APIs', 'DATA STRUCTURES'],
    tag: 'Most Popular Tech',
    enrollLink: '#',
    active: true,
    sortOrder: 2
  },
  {
    id: 'p3',
    category: 'Programming Languages',
    categoryId: 'programming',
    title: 'Core & Advance Java',
    duration: '3 Month Course',
    topics: ['JVM ARCHITECTURE', 'CLASSES & OBJECTS', 'INHERITANCE & POLYMORPHISM', 'EXCEPTION HANDLING', 'MULTITHREADING & COLLECTIONS', 'JDBC CONNECTIVITY'],
    tag: 'Enterprise Standard',
    enrollLink: '#',
    active: true,
    sortOrder: 3
  },
  {
    id: 'p4',
    category: 'Programming Languages',
    categoryId: 'programming',
    title: 'Advance Tally Course',
    duration: '4 Month Course',
    topics: ['ACCOUNTING', 'SALES TAX', 'INVENTORY', 'SERVICE TAX', 'GST', 'ADVANCE ACCOUNTING', 'PAY ROLL', 'BOM'],
    tag: 'Tax Professional',
    enrollLink: '#',
    active: true,
    sortOrder: 4
  },
  // AutoCAD Courses
  {
    id: 'a1',
    category: 'AutoCAD Courses',
    categoryId: 'cad',
    title: 'AutoCAD Course',
    duration: '3 Month Course',
    topics: ['Fundamental of cad', 'Menus', 'Commands', 'Drawing 2d', 'Drawing 3d', 'Project'],
    tag: 'Engineering Drafts',
    enrollLink: '#',
    active: true,
    sortOrder: 1
  },
  // General Courses
  {
    id: 'g1',
    category: 'General Courses',
    categoryId: 'general',
    title: 'Basic Computer Application',
    duration: '3 Month Course',
    topics: ['Fundamental', 'Ms-Dos', 'Windows', 'Ms-Word', 'Power-Point', 'Typing', 'Printing Job work', 'Internet'],
    tag: 'Absolute Starter',
    enrollLink: '#',
    active: true,
    sortOrder: 1
  },
  {
    id: 'g2',
    category: 'General Courses',
    categoryId: 'general',
    title: 'Office Management',
    duration: '4 Month Course',
    topics: ['Fundamental', 'Ms-Word', 'Windows', 'Printing Job', 'Internet', 'E-mail', 'Printing Job work', 'Typing', 'Tally'],
    tag: 'Business Office',
    enrollLink: '#',
    active: true,
    sortOrder: 2
  },
  // Hardware Courses
  {
    id: 'h1',
    category: 'Hardware Courses',
    categoryId: 'hardware',
    title: 'Special Course in Hardware',
    duration: '4 Month Course',
    topics: ['Fundamental of Hardware', 'Disk Operating System', 'Windows Instillation winxpwindows7,windows8,windows10', 'Assembling Of Computer', 'Trouble Shooting'],
    tag: 'System Tech',
    enrollLink: '#',
    active: true,
    sortOrder: 1
  },
  // Special Courses
  {
    id: 's1',
    category: 'Special Courses',
    categoryId: 'special',
    title: "Special Coaching for O'Level, BCA, MCA",
    duration: 'Strategic Track',
    topics: ['Strategic Programming Syllabus Training', 'Lab Assignment Completion Practice', 'Continuous Exam Support Panels'],
    tag: 'University Coaching',
    enrollLink: '#',
    active: true,
    sortOrder: 1
  },
  {
    id: 's2',
    category: 'Special Courses',
    categoryId: 'special',
    title: 'Computer Training for CBSE 10th & 12th Class',
    duration: 'Board Exam Alignment',
    topics: ['NCERT Programming Frameworks', 'CBSE Practice Projects Guidance', 'Mock Computer exams'],
    tag: 'School Board High score',
    enrollLink: '#',
    active: true,
    sortOrder: 2
  },
  {
    id: 's3',
    category: 'Special Courses',
    categoryId: 'special',
    title: 'Vocational Technical Training',
    duration: 'Flexible Schedule',
    topics: ['Job-oriented skills for fast livelihood security', 'Practical project log work certificate'],
    tag: 'Livelihood Prep',
    enrollLink: '#',
    active: true,
    sortOrder: 3
  }
];

export const FALLBACK_CRASH_COURSES: SheetCrashCourse[] = [
  { id: 'cc1', name: 'Windows Operating System', duration: '2 Weeks', active: true, sortOrder: 1 },
  { id: 'cc2', name: 'Tally Accounting software', duration: '1 Month', active: true, sortOrder: 2 },
  { id: 'cc3', name: 'CorelDraw Vector Layout', duration: '1 Month', active: true, sortOrder: 3 },
  { id: 'cc4', name: 'Pagemaker Printing Layout', duration: '1 Month', active: true, sortOrder: 4 },
  { id: 'cc5', name: 'Photoshop Image Editing', duration: '1 Month', active: true, sortOrder: 5 },
  { id: 'cc6', name: 'Illustrators Vector Drafting', duration: '1 Month', active: true, sortOrder: 6 },
  { id: 'cc7', name: 'Flash 2D Vector Animation', duration: '1 Month', active: true, sortOrder: 7 },
  { id: 'cc8', name: 'Internet Tools & Emailing', duration: '1 Week', active: true, sortOrder: 8 },
  { id: 'cc9', name: 'Quark-Express Layout system', duration: '1 Month', active: true, sortOrder: 9 },
  { id: 'cc10', name: 'Dream-Weaver Web Composer', duration: '1 Month', active: true, sortOrder: 10 },
  { id: 'cc11', name: 'Computer Data Structures', duration: '1 Month', active: true, sortOrder: 11 },
  { id: 'cc12', name: 'HTML Web Framework', duration: '1 Month', active: true, sortOrder: 12 },
  { id: 'cc13', name: 'AI Prompt Engineering Crash', duration: '2 Weeks', active: true, sortOrder: 13 },
  { id: 'cc14', name: 'Generative AI & LLM Basics', duration: '2 Weeks', active: true, sortOrder: 14 },
  { id: 'cc15', name: 'ChatGPT & Claude for Productivity', duration: '2 Weeks', active: true, sortOrder: 15 }
];

function cleanField(field: string): string {
  let cleaned = field.trim();
  if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
    cleaned = cleaned.substring(1, cleaned.length - 1).trim();
  }
  return cleaned.replace(/""/g, '"');
}

export function parseCSV(csvText: string): string[][] {
  const lines: string[][] = [];
  const rawLines = csvText.split(/\r?\n/);
  
  for (const line of rawLines) {
    if (!line.trim()) continue;
    
    const fields: string[] = [];
    let currentField = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        fields.push(cleanField(currentField));
        currentField = '';
      } else {
        currentField += char;
      }
    }
    fields.push(cleanField(currentField));
    
    // Check if row has any content
    if (fields.some(f => f !== '')) {
      lines.push(fields);
    }
  }
  return lines;
}

export async function fetchMainCourses(): Promise<SheetCourse[]> {
  try {
    const response = await fetch(MAIN_COURSES_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error fetching main courses: ${response.status}`);
    }
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    const courses: SheetCourse[] = [];
    
    for (const row of rows) {
      if (row.length < 8) continue;
      
      // Skip header lines
      const firstCell = row[0].toLowerCase();
      const thirdCell = row[2].toLowerCase();
      if (firstCell === 'id' || thirdCell === 'title') {
        continue;
      }
      
      const id = row[0];
      const category = row[1];
      const title = row[2];
      const badge = row[3];
      const duration = row[4];
      const syllabus = row[5];
      const enrollLink = row[6] || '#';
      const activeStr = row[7];
      const sortOrderStr = row[8];
      
      const active = activeStr.toUpperCase() === 'TRUE';
      if (!active) continue;
      
      const sortOrder = parseInt(sortOrderStr, 10) || 999;
      const topics = syllabus ? syllabus.split('|').map(t => t.trim()).filter(Boolean) : [];
      const categoryId = categoryMap[category] || category.toLowerCase().replace(/[^a-z0-9]/g, '');
      
      courses.push({
        id,
        category,
        categoryId,
        title,
        tag: badge || 'Course',
        duration,
        topics,
        enrollLink,
        active,
        sortOrder
      });
    }
    
    // Sort courses by sortOrder
    return courses.sort((a, b) => a.sortOrder - b.sortOrder);
  } catch (error) {
    console.error('Failed to fetch main courses from Google Sheets. Using fallback data.', error);
    return FALLBACK_COURSES;
  }
}

export async function fetchCrashCourses(): Promise<SheetCrashCourse[]> {
  try {
    const response = await fetch(CRASH_COURSES_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error fetching crash courses: ${response.status}`);
    }
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    const crashCourses: SheetCrashCourse[] = [];
    
    for (const row of rows) {
      if (row.length < 3) continue;
      
      const firstCell = row[0].toLowerCase();
      const secondCell = row[1].toLowerCase();
      if (firstCell === 'id' || secondCell === 'title') {
        continue;
      }
      
      const id = row[0];
      const title = row[1];
      const duration = row[2];
      const activeStr = row[3] || 'TRUE';
      const sortOrderStr = row[4] || '999';
      
      const active = activeStr.toUpperCase() === 'TRUE';
      if (!active) continue;
      
      const sortOrder = parseInt(sortOrderStr, 10) || 999;
      
      crashCourses.push({
        id,
        name: title,
        duration,
        active,
        sortOrder
      });
    }
    
    return crashCourses.sort((a, b) => a.sortOrder - b.sortOrder);
  } catch (error) {
    console.error('Failed to fetch crash courses from Google Sheets. Using fallback data.', error);
    return FALLBACK_CRASH_COURSES;
  }
}

// ================= COMPUTER SERVICES & LAPTOP SALE =================

const HERO_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=2144170283&single=true&output=csv';
const LAPTOP_FEATURES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=1523652795&single=true&output=csv';
const SUPPORT_CATALOGUE_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=1762675497&single=true&output=csv';
const WHY_BUY_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=312168777&single=true&output=csv';

export const FALLBACK_HERO: SheetHero = {
  id: 'hero1',
  title: 'Computer Hardware & Repair Services',
  subtitle: 'From high-capacity laptop sales to expert component motherboard repair and complete Windows software optimizations — we serve candidates, students, and professional hardware needs in Madangir since 1996.',
  buttonText: 'Call Department: 8527208085',
  buttonLink: 'tel:8527208085',
  imageUrl: 'https://i.ibb.co/mC1FFnrG/Gemini-Generated-Image-v8iq2cv8iq2cv8iq.png',
  active: true,
};

export const FALLBACK_FEATURES: SheetLaptopFeature[] = [
  {
    id: 'f1',
    icon: 'money',
    title: 'Starting at ₹6,500',
    description: 'Get a fully working laptop or desktop computer at the most affordable price in Delhi. Best option for students and home users.',
    sortOrder: 1,
    active: true,
  },
  {
    id: 'f2',
    icon: 'check',
    title: 'Fully Tested Systems',
    description: 'Every laptop and computer is thoroughly checked and tested before sale. You get a reliable working system every time.',
    sortOrder: 2,
    active: true,
  },
  {
    id: 'f3',
    icon: 'shield',
    title: '1 Month Testing Warranty',
    description: 'All systems come with 1 month testing warranty. If any issue occurs within 1 month, we will fix it at no extra cost.',
    sortOrder: 3,
    active: true,
  },
  {
    id: 'f4',
    icon: 'laptop',
    title: 'Expert Advice',
    description: 'Our experienced staff will help you choose the right laptop or computer based on your needs and budget.',
    sortOrder: 4,
    active: true,
  },
];

export const FALLBACK_SUPPORT_CATALOGUE: SheetSupportCatalogue[] = [
  {
    id: 's1',
    imageUrl: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400',
    price: '₹6,500',
    warranty: '1 Month Testing Warranty',
    title: 'Used Laptop & Computer Sales',
    description: 'We sell quality tested second hand laptops and desktop computers starting at ₹6,500. Every system is thoroughly checked and comes with 1 month testing warranty. Best option for students looking for affordable computers.',
    footerLeft: 'Authorized Support',
    footerRight: 'CCT Delhi',
    buttonText: 'Enquire',
    buttonLink: '#',
    sortOrder: 1,
    active: true,
  },
  {
    id: 's2',
    imageUrl: 'https://i.ibb.co/ks0HvMRK/computer-repair-1440x960-jpg.webp',
    price: '',
    warranty: '',
    title: 'Computer Repairing',
    description: 'Pro hardware component repairs, display swaps, keyboard repairs, logic board trace tests, and resolving power failures.',
    footerLeft: 'Authorized support',
    footerRight: 'CCT Delhi',
    buttonText: 'Enquire',
    buttonLink: '#',
    sortOrder: 2,
    active: true,
  },
  {
    id: 's3',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400',
    price: '',
    warranty: '',
    title: 'Computer Maintenance & Service',
    description: 'Regular technical servicing, malware checks, dust vacuums, thermal paste upgrades, and clean-up options.',
    footerLeft: 'Authorized support',
    footerRight: 'CCT Delhi',
    buttonText: 'Enquire',
    buttonLink: '#',
    sortOrder: 3,
    active: true,
  },
];

export const FALLBACK_WHY_BUY: SheetWhyBuy[] = [
  {
    id: 'w1',
    text: 'Government registered institute since 1996 — trusted by thousands of candidates and clients',
    sortOrder: 1,
    active: true,
  },
  {
    id: 'w2',
    text: 'All systems personally tested and verified by our professional technical experts',
    sortOrder: 2,
    active: true,
  },
  {
    id: 'w3',
    text: 'Affordable prices with genuine testing warranty — zero hidden charges',
    sortOrder: 3,
    active: true,
  },
];

function resolveSupportImage(id: string, imageUrl: string): string {
  if (!imageUrl || imageUrl.includes('your-image-url.com') || imageUrl.includes('image-url.com')) {
    if (id === 's1') return 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400';
    if (id === 's2') return 'https://i.ibb.co/ks0HvMRK/computer-repair-1440x960-jpg.webp';
    if (id === 's3') return 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400';
    return 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400';
  }
  return imageUrl;
}

function resolveHeroImage(imageUrl: string): string {
  if (!imageUrl || imageUrl.includes('image-url.com') || imageUrl.includes('your-image-url.com')) {
    return 'https://i.ibb.co/mC1FFnrG/Gemini-Generated-Image-v8iq2cv8iq2cv8iq.png';
  }
  return imageUrl;
}

export async function fetchHero(): Promise<SheetHero> {
  try {
    const response = await fetch(HERO_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error fetching hero: ${response.status}`);
    }
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    for (const row of rows) {
      if (row.length < 6) continue;
      
      const firstCell = row[0].toLowerCase();
      if (firstCell === 'id' || firstCell === 'title') {
        continue;
      }
      
      const id = row[0];
      const title = row[1];
      const subtitle = row[2];
      const buttonText = row[3];
      const buttonLink = row[4];
      const imageUrl = resolveHeroImage(row[5]);
      const activeStr = row[6] || 'TRUE';
      
      const active = activeStr.toUpperCase() === 'TRUE';
      
      return {
        id,
        title,
        subtitle,
        buttonText,
        buttonLink,
        imageUrl,
        active
      };
    }
    return FALLBACK_HERO;
  } catch (error) {
    console.error('Failed to fetch hero from Google Sheets. Using fallback.', error);
    return FALLBACK_HERO;
  }
}

export async function fetchLaptopFeatures(): Promise<SheetLaptopFeature[]> {
  try {
    const response = await fetch(LAPTOP_FEATURES_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error fetching laptop features: ${response.status}`);
    }
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    const features: SheetLaptopFeature[] = [];
    
    for (const row of rows) {
      if (row.length < 4) continue;
      
      const firstCell = row[0].toLowerCase();
      if (firstCell === 'id' || firstCell === 'icon') {
        continue;
      }
      
      const id = row[0];
      const icon = row[1];
      const title = row[2];
      const description = row[3];
      const sortOrderStr = row[4] || '999';
      const activeStr = row[5] || 'TRUE';
      
      const active = activeStr.toUpperCase() === 'TRUE';
      if (!active) continue;
      
      const sortOrder = parseInt(sortOrderStr, 10) || 999;
      
      features.push({
        id,
        icon,
        title,
        description,
        sortOrder,
        active
      });
    }
    
    return features.sort((a, b) => a.sortOrder - b.sortOrder);
  } catch (error) {
    console.error('Failed to fetch laptop features from Google Sheets. Using fallback.', error);
    return FALLBACK_FEATURES;
  }
}

export async function fetchSupportCatalogue(): Promise<SheetSupportCatalogue[]> {
  try {
    const response = await fetch(SUPPORT_CATALOGUE_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error fetching support catalogue: ${response.status}`);
    }
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    const catalogue: SheetSupportCatalogue[] = [];
    
    for (const row of rows) {
      if (row.length < 6) continue;
      
      const firstCell = row[0].toLowerCase();
      if (firstCell === 'id' || firstCell === 'imageurl') {
        continue;
      }
      
      const id = row[0];
      const imageUrl = resolveSupportImage(id, row[1]);
      const price = row[2];
      const warranty = row[3];
      const title = row[4];
      const description = row[5];
      const footerLeft = row[6] || 'Authorized support';
      const footerRight = row[7] || 'CCT Delhi';
      const buttonText = row[8] || 'Enquire';
      const buttonLink = row[9] || '#';
      const sortOrderStr = row[10] || '999';
      const activeStr = row[11] || 'TRUE';
      
      const active = activeStr.toUpperCase() === 'TRUE';
      if (!active) continue;
      
      const sortOrder = parseInt(sortOrderStr, 10) || 999;
      
      catalogue.push({
        id,
        imageUrl,
        price,
        warranty,
        title,
        description,
        footerLeft,
        footerRight,
        buttonText,
        buttonLink,
        sortOrder,
        active
      });
    }
    
    return catalogue.sort((a, b) => a.sortOrder - b.sortOrder);
  } catch (error) {
    console.error('Failed to fetch support catalogue from Google Sheets. Using fallback.', error);
    return FALLBACK_SUPPORT_CATALOGUE;
  }
}

export async function fetchWhyBuy(): Promise<SheetWhyBuy[]> {
  try {
    const response = await fetch(WHY_BUY_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error fetching why buy: ${response.status}`);
    }
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    const whyBuyItems: SheetWhyBuy[] = [];
    
    for (const row of rows) {
      if (row.length < 2) continue;
      
      const firstCell = row[0].toLowerCase();
      if (firstCell === 'id' || firstCell === 'text') {
        continue;
      }
      
      const id = row[0];
      const text = row[1];
      const sortOrderStr = row[2] || '999';
      const activeStr = row[3] || 'TRUE';
      
      const active = activeStr.toUpperCase() === 'TRUE';
      if (!active) continue;
      
      const sortOrder = parseInt(sortOrderStr, 10) || 999;
      
      whyBuyItems.push({
        id,
        text,
        sortOrder,
        active
      });
    }
    
    return whyBuyItems.sort((a, b) => a.sortOrder - b.sortOrder);
  } catch (error) {
    console.error('Failed to fetch why buy from Google Sheets. Using fallback.', error);
    return FALLBACK_WHY_BUY;
  }
}
