import { SheetCourse, SheetCrashCourse, LaptopSaleInfo, Announcement, SheetService, LaptopSaleCard } from '../types';

const MAIN_COURSES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=0&single=true&output=csv';
const CRASH_COURSES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=1682720920&single=true&output=csv';
const LAPTOP_SALE_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=2144170283&single=true&output=csv';
const ANNOUNCEMENTS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=675698559&single=true&output=csv';
const SERVICES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=1883481716&single=true&output=csv';
const LAPTOP_CATALOGUE_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtxk8sFkfAkRY6O5oqhUHPYcSDUIHCl3unaINUDGuWwEwdA7-l2yGN2eXuFLEYqEJTrsBMkfINZc91/pub?gid=1850733542&single=true&output=csv';



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

export const FALLBACK_LAPTOP_SALE_INFO: LaptopSaleInfo = {
  price: '₹6,500',
  warranty: '1 Month Testing Warranty'
};

export async function fetchLaptopSaleInfo(): Promise<LaptopSaleInfo> {
  try {
    const response = await fetch(LAPTOP_SALE_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error fetching laptop sale info: ${response.status}`);
    }
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    let price = FALLBACK_LAPTOP_SALE_INFO.price;
    let warranty = FALLBACK_LAPTOP_SALE_INFO.warranty;
    
    for (const row of rows) {
      if (row.length < 2) continue;
      
      const firstCell = row[0].toLowerCase();
      if (firstCell === 'price') {
        continue;
      }
      
      if (row[0]) {
        price = row[0];
      }
      if (row[1]) {
        warranty = row[1];
      }
      break;
    }
    
    return { price, warranty };
  } catch (error) {
    console.error('Failed to fetch laptop sale info from Google Sheets. Using fallback data.', error);
    return FALLBACK_LAPTOP_SALE_INFO;
  }
}

export const FALLBACK_ANNOUNCEMENTS: Announcement[] = [
  {
    id: '1',
    message: '🖥️ Used Laptops Starting ₹6,500 • 1 Month Warranty • 👉 Click here to view inventory 👈',
    active: true,
    sortOrder: 1
  },
  {
    id: '2',
    message: '📞 Call: 8527208085',
    active: true,
    sortOrder: 2
  },
  {
    id: '3',
    message: '✅ Free Demo Class Available',
    active: true,
    sortOrder: 3
  },
  {
    id: '4',
    message: '🎓 Delhi Govt Registered Since 1996',
    active: true,
    sortOrder: 4
  }
];

export async function fetchAnnouncements(): Promise<Announcement[]> {
  try {
    const response = await fetch(ANNOUNCEMENTS_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error fetching announcements: ${response.status}`);
    }
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    if (rows.length < 2) {
      return FALLBACK_ANNOUNCEMENTS;
    }

    const headers = rows[0].map(h => h.trim().toLowerCase());

    // Format 1: id,message,active,sortOrder
    if (headers.includes('message')) {
      const idIdx = headers.indexOf('id');
      const msgIdx = headers.indexOf('message');
      const activeIdx = headers.indexOf('active');
      const sortIdx = headers.indexOf('sortorder');

      const announcements: Announcement[] = [];
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row.length === 0) continue;
        
        const id = idIdx !== -1 && row[idIdx] ? row[idIdx] : String(i);
        const message = msgIdx !== -1 && row[msgIdx] ? row[msgIdx] : '';
        const activeStr = activeIdx !== -1 && row[activeIdx] ? row[activeIdx].trim().toLowerCase() : 'true';
        const active = activeStr === 'true' || activeStr === 'yes' || activeStr === '1';
        const sortOrder = sortIdx !== -1 && row[sortIdx] ? parseInt(row[sortIdx], 10) : i;

        if (message) {
          announcements.push({
            id,
            message,
            active,
            sortOrder: isNaN(sortOrder) ? i : sortOrder
          });
        }
      }

      return announcements
        .filter(a => a.active)
        .sort((a, b) => a.sortOrder - b.sortOrder);
    } else {
      // Format 2: message1,message2,message3,message4,bottomBanner (or general single row)
      const dataRow = rows[1];
      const announcements: Announcement[] = [];

      for (let i = 0; i < dataRow.length; i++) {
        const headerName = headers[i] || '';
        // Only map message1, message2, message3, message4 as sliding announcements (skip bottomBanner if desired, or skip any row header with "banner")
        if ((headerName.startsWith('message') || headerName.includes('msg') || !headerName.includes('banner')) && dataRow[i]) {
          announcements.push({
            id: String(i + 1),
            message: dataRow[i],
            active: true,
            sortOrder: i + 1
          });
        }
      }

      if (announcements.length > 0) {
        return announcements;
      }
    }

    return FALLBACK_ANNOUNCEMENTS;
  } catch (error) {
    console.error('Failed to fetch announcements from Google Sheets. Using fallback data.', error);
    return FALLBACK_ANNOUNCEMENTS;
  }
}

export const FALLBACK_SERVICES: SheetService[] = [
  {
    id: '1',
    title: 'Used Laptop & Computer Sales',
    description: 'We sell quality tested second hand laptops and desktop computers starting at ₹6,500. Every system is thoroughly checked and comes with 1 month testing warranty. Best option for students looking for affordable computers.',
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400',
    buttonText: 'Inquire Now',
    buttonLink: '',
    active: true,
    sortOrder: 1,
    price: '₹6,500',
    warranty: '1 Month Testing Warranty',
    badge1: 'Starting ₹6,500',
    badge2: '1 Month Testing Warranty'
  },
  {
    id: '2',
    title: 'Computer Repairing',
    description: 'Pro hardware component repairs, display swaps, keyboard repairs, logic board trace tests, and resolving power failures.',
    image: 'https://i.ibb.co/ks0HvMRK/computer-repair-1440x960-jpg.webp',
    buttonText: 'Book Repair',
    buttonLink: '',
    active: true,
    sortOrder: 2
  },
  {
    id: '3',
    title: 'Computer Maintenance & Service',
    description: 'Regular technical servicing, malware checks, dust vacuums, thermal paste upgrades, and clean-up options.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400',
    buttonText: 'Book Service',
    buttonLink: '',
    active: true,
    sortOrder: 3
  }
];

export const FALLBACK_LAPTOP_SALES: LaptopSaleCard[] = [
  {
    id: '1',
    title: 'Starting at ₹6,500',
    description: 'Get a fully working laptop or desktop computer at the most affordable price in Delhi. Best option for students and home users.',
    icon: '💰',
    active: true,
    sortOrder: 1
  },
  {
    id: '2',
    title: 'Fully Tested Systems',
    description: 'Every laptop and computer is thoroughly checked and tested before sale. You get a reliable working system every time.',
    icon: '✅',
    active: true,
    sortOrder: 2
  },
  {
    id: '3',
    title: '1 Month Testing Warranty',
    description: 'All systems come with 1 month testing warranty. If any issue occurs, we will fix it at no extra cost.',
    icon: '🛡️',
    active: true,
    sortOrder: 3
  },
  {
    id: '4',
    title: 'Expert Advice',
    description: 'Our experienced staff will help you choose the right laptop or computer based on your needs and budget.',
    icon: '👨‍💻',
    active: true,
    sortOrder: 4
  }
];

export async function fetchServices(): Promise<SheetService[]> {
  try {
    const response = await fetch(SERVICES_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error fetching services: ${response.status}`);
    }
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    if (rows.length < 2) {
      return FALLBACK_SERVICES;
    }

    const headers = rows[0].map(h => h.trim().toLowerCase());

    const idIdx = headers.indexOf('id');
    const titleIdx = headers.indexOf('title');
    const descIdx = headers.indexOf('description');
    const imgIdx = headers.indexOf('image');
    const btnTextIdx = headers.indexOf('button text') !== -1 ? headers.indexOf('button text') : headers.indexOf('buttontext');
    const btnLinkIdx = headers.indexOf('button link') !== -1 ? headers.indexOf('button link') : headers.indexOf('buttonlink');
    const activeIdx = headers.indexOf('active');
    const sortIdx = headers.indexOf('sortorder') !== -1 ? headers.indexOf('sortorder') : headers.indexOf('sort_order');
    const priceIdx = headers.indexOf('price');
    const warrantyIdx = headers.indexOf('warranty');
    const badge1Idx = headers.indexOf('badge1');
    const badge2Idx = headers.indexOf('badge2');

    const services: SheetService[] = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (row.length === 0 || !row[titleIdx === -1 ? 1 : titleIdx]) continue;

      const id = idIdx !== -1 && row[idIdx] ? row[idIdx] : String(i);
      const title = titleIdx !== -1 && row[titleIdx] ? row[titleIdx] : '';
      const description = descIdx !== -1 && row[descIdx] ? row[descIdx] : '';
      
      let image = imgIdx !== -1 && row[imgIdx] ? row[imgIdx] : '';
      if (!image) {
        if (title.toLowerCase().includes('laptop') || title.toLowerCase().includes('sale')) {
          image = 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400';
        } else if (title.toLowerCase().includes('repair')) {
          image = 'https://i.ibb.co/ks0HvMRK/computer-repair-1440x960-jpg.webp';
        } else {
          image = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400';
        }
      }

      const buttonText = btnTextIdx !== -1 && row[btnTextIdx] ? row[btnTextIdx] : '';
      const buttonLink = btnLinkIdx !== -1 && row[btnLinkIdx] ? row[btnLinkIdx] : '';
      const activeStr = activeIdx !== -1 && row[activeIdx] ? row[activeIdx].trim().toLowerCase() : 'true';
      const active = activeStr === 'true' || activeStr === 'yes' || activeStr === '1';
      const sortOrder = sortIdx !== -1 && row[sortIdx] ? parseInt(row[sortIdx], 10) : i;

      const price = priceIdx !== -1 && row[priceIdx] ? row[priceIdx] : '';
      const warranty = warrantyIdx !== -1 && row[warrantyIdx] ? row[warrantyIdx] : '';
      const badge1 = badge1Idx !== -1 && row[badge1Idx] ? row[badge1Idx] : '';
      const badge2 = badge2Idx !== -1 && row[badge2Idx] ? row[badge2Idx] : '';

      services.push({
        id,
        title,
        description,
        image,
        buttonText,
        buttonLink,
        active,
        sortOrder: isNaN(sortOrder) ? i : sortOrder,
        price,
        warranty,
        badge1,
        badge2
      });
    }

    return services
      .filter(s => s.active)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  } catch (error) {
    console.error('Failed to fetch services from Google Sheets. Using fallback data.', error);
    return FALLBACK_SERVICES;
  }
}

export async function fetchLaptopSales(): Promise<LaptopSaleCard[]> {
  try {
    const response = await fetch(LAPTOP_CATALOGUE_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error fetching laptop sales: ${response.status}`);
    }
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    if (rows.length < 2) {
      return FALLBACK_LAPTOP_SALES;
    }

    const headers = rows[0].map(h => h.trim().toLowerCase());

    if (headers.includes('key') && headers.includes('value')) {
      const kv: Record<string, string> = {};
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row.length < 2) continue;
        const key = row[0]?.trim();
        const value = row[1]?.trim();
        if (key) {
          kv[key] = value;
        }
      }

      const laptopSales: LaptopSaleCard[] = [];
      for (let i = 1; i <= 10; i++) {
        const title = kv[`feature${i}_title`] || kv[`feature_${i}_title`] || kv[`laptop_${i}_title`] || kv[`title_${i}`];
        const description = kv[`feature${i}_desc`] || kv[`feature${i}_description`] || kv[`laptop_${i}_desc`] || kv[`desc_${i}`];
        const icon = kv[`feature${i}_icon`] || kv[`laptop_${i}_icon`] || kv[`icon_${i}`];
        const image = kv[`feature${i}_image`] || kv[`laptop_${i}_image`] || kv[`image_${i}`];
        const price = kv[`feature${i}_price`] || kv[`laptop_${i}_price`] || kv[`price_${i}`];
        const warranty = kv[`feature${i}_warranty`] || kv[`laptop_${i}_warranty`] || kv[`warranty_${i}`];
        const buttonText = kv[`feature${i}_button_text`] || kv[`laptop_${i}_button_text`] || kv[`button_text_${i}`];
        const buttonLink = kv[`feature${i}_button_link`] || kv[`laptop_${i}_button_link`] || kv[`button_link_${i}`];

        if (title || description) {
          laptopSales.push({
            id: String(i),
            title: title || '',
            description: description || '',
            icon: icon || '💻',
            image,
            price,
            warranty,
            buttonText,
            buttonLink,
            active: true,
            sortOrder: i
          });
        }
      }

      if (laptopSales.length > 0) {
        return laptopSales;
      }

      return FALLBACK_LAPTOP_SALES;
    } else {
      const idIdx = headers.indexOf('id');
      const titleIdx = headers.indexOf('title');
      const descIdx = headers.indexOf('description') !== -1 ? headers.indexOf('description') : headers.indexOf('desc');
      const imgIdx = headers.indexOf('image') !== -1 ? headers.indexOf('image') : headers.indexOf('img');
      const priceIdx = headers.indexOf('price');
      const warrantyIdx = headers.indexOf('warranty');
      const btnTextIdx = headers.indexOf('button text') !== -1 ? headers.indexOf('button text') : (headers.indexOf('buttontext') !== -1 ? headers.indexOf('buttontext') : headers.indexOf('button_text'));
      const btnLinkIdx = headers.indexOf('button link') !== -1 ? headers.indexOf('button link') : (headers.indexOf('buttonlink') !== -1 ? headers.indexOf('buttonlink') : headers.indexOf('button_link'));
      const activeIdx = headers.indexOf('active');
      const sortIdx = headers.indexOf('sortorder') !== -1 ? headers.indexOf('sortorder') : (headers.indexOf('sort_order') !== -1 ? headers.indexOf('sort_order') : headers.indexOf('sort'));

      const laptopSales: LaptopSaleCard[] = [];
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row.length === 0 || !row[titleIdx === -1 ? 0 : titleIdx]) continue;

        const id = idIdx !== -1 && row[idIdx] ? row[idIdx] : String(i);
        const title = titleIdx !== -1 && row[titleIdx] ? row[titleIdx] : '';
        const description = descIdx !== -1 && row[descIdx] ? row[descIdx] : '';
        const image = imgIdx !== -1 && row[imgIdx] ? row[imgIdx] : '';
        const price = priceIdx !== -1 && row[priceIdx] ? row[priceIdx] : '';
        const warranty = warrantyIdx !== -1 && row[warrantyIdx] ? row[warrantyIdx] : '';
        const buttonText = btnTextIdx !== -1 && row[btnTextIdx] ? row[btnTextIdx] : '';
        const buttonLink = btnLinkIdx !== -1 && row[btnLinkIdx] ? row[btnLinkIdx] : '';
        const activeStr = activeIdx !== -1 && row[activeIdx] ? row[activeIdx].trim().toLowerCase() : 'true';
        const active = activeStr === 'true' || activeStr === 'yes' || activeStr === '1';
        const sortOrder = sortIdx !== -1 && row[sortIdx] ? parseInt(row[sortIdx], 10) : i;

        laptopSales.push({
          id,
          title,
          description,
          image,
          price,
          warranty,
          buttonText,
          buttonLink,
          active,
          sortOrder: isNaN(sortOrder) ? i : sortOrder
        });
      }

      return laptopSales
        .filter(l => l.active)
        .sort((a, b) => a.sortOrder - b.sortOrder);
    }
  } catch (error) {
    console.error('Failed to fetch laptop sales from Google Sheets. Using fallback data.', error);
    return FALLBACK_LAPTOP_SALES;
  }
}


