import { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'master_software',
    title: 'Master in Software Engineering',
    price: 9500,
    originalPrice: 15000,
    duration: '1 Year Program',
    rating: 4.9,
    reviewsCount: 154,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600',
    tags: ['Software', 'Full Suite', 'Placement Value'],
    description: 'A comprehensive 1-year master package mapping from absolute computer fundamentals, desktop layouts, spreadsheets, databases up to web designing basics of HTML & Tally.',
    syllabus: [
      'Fundamental & Ms-Dos controls',
      'Windows operating utilities',
      'Ms-Word documents & Ms-Excel advanced calculators',
      'Power-point showcases & Ms-Access database records',
      'Page-Maker publications & Corel-Draw layouts',
      'PhotoShop designing, HTML framework basics, Tally Accounting, and E-mail with Internet utilities'
    ]
  },
  {
    id: 'diploma_office',
    title: 'Diploma in MS-Office',
    price: 4500,
    originalPrice: 6500,
    duration: '6 Month Course',
    rating: 4.8,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    tags: ['MS Office', 'Data Entry', 'Typing'],
    description: 'Acquire high proficiency in business office documentation, standard client entry operations, typing logs, and spreadsheet formatting.',
    syllabus: [
      'Fundamental, Ms-Dos and Windows tools',
      'Ms-Excel Calculations & Ms-Word Documents',
      'Power-point Presentation Design',
      'Ms-Access databases, Data-Entry routines, Typing Tutor drills, and Internet tools'
    ]
  },
  {
    id: 'special_office',
    title: 'Special Course in MS-Office',
    price: 3500,
    originalPrice: 5000,
    duration: '4 Month Course',
    rating: 4.7,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
    tags: ['Fast-track', 'MS Office Utilities'],
    description: 'Fast-track program specifically curated for intermediate candidates seeking rapid mastery of Word formatting, power sheets, slides, and web search guides.',
    syllabus: [
      'Ms-Excel cells, formulas & charting',
      'Ms-Word letters, tables & mail merge',
      'Power-point slide builders',
      'Ms-Access database creation and Internet browsing essentials'
    ]
  },
  {
    id: 'diploma_dtp',
    title: 'Diploma in DTP (Desktop Publishing)',
    price: 5000,
    originalPrice: 7500,
    duration: '6 Month Course',
    rating: 4.9,
    reviewsCount: 124,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315344d?auto=format&fit=crop&q=80&w=600',
    tags: ['DTP', 'CorelDraw', 'Pagemaker', 'Photoshop'],
    description: 'Acquire high print-industry capabilities for publishing newspapers, printing brochures, generating vector signs, and professional Hindi/English typesetting.',
    syllabus: [
      'Fundamental, Windows system utilities',
      'Pagemaker text layouting & Corel-Draw vectors',
      'PhotoShop image editing & graphic manipulations',
      'illustrator vectors & English/Hindi typing standards'
    ]
  },
  {
    id: 'special_dtp',
    title: 'Special Diploma in DTP',
    price: 3800,
    originalPrice: 5500,
    duration: '4 Month Course',
    rating: 4.8,
    reviewsCount: 86,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
    tags: ['DTP Core', 'Fast Publication'],
    description: 'Speed course containing necessary vector paths, cropping layouts, and print setups for quick placements in local presses.',
    syllabus: [
      'PhotoShop filters & framing',
      'Pagemaker booklet creations',
      'Corel-Draw path shapes',
      'Internet upload-download protocols'
    ]
  },
  {
    id: 'diploma_accounting',
    title: 'Diploma in Financial Accounting',
    price: 5500,
    originalPrice: 8500,
    duration: '6 Month Course',
    rating: 4.9,
    reviewsCount: 172,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
    tags: ['Accounting', 'Tally', 'Busy', 'Taxes'],
    description: 'Become an industry-ready tax accountant with practical ledgers, GST calculations, stock parameters on Busy, and dual speed typing methods.',
    syllabus: [
      'Windows OS settings',
      'Excel analytical rows & GST calculations',
      'Busy accounting entries & inventory registers',
      'Internet, English/Hindi Typing speed tutorials, and Taxes (TDS/GST) fundamentals'
    ]
  },
  {
    id: 'graphics_multimedia',
    title: 'Graphics Designing & Multimedia',
    price: 6500,
    originalPrice: 10000,
    duration: '6 Month Course',
    rating: 4.9,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
    tags: ['Graphics', 'CorelDraw', 'Photoshop', 'Flash'],
    description: 'Master creative high-spec publications, advertising modules, vector design, and frame-by-frame flash micro animations.',
    syllabus: [
      'Core-Draw vector grids & Illustrator paths',
      'Photoshop adjustments & layered composites',
      'Free Hand illustrations, Flash layout design, and Quark-express publishing systems'
    ]
  },
  {
    id: 'web_designing',
    title: 'Certificate in Web Designing',
    price: 6000,
    originalPrice: 9000,
    duration: '6 Month Course',
    rating: 4.8,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    tags: ['Web Design', 'HTML', 'Dreamweaver'],
    description: 'Construct custom websites, configure table layers, create responsive pages using Frontpage, and insert flash-active scripts.',
    syllabus: [
      'Html/Dhtml core frameworks',
      'Frontpage dynamic layout editors',
      'Flash motion systems, Dream Weaver composer, Photoshop web mockups, and Flash-script logic builds'
    ]
  },
  {
    id: 'c_cpp',
    title: 'C & C++ Programming',
    price: 3000,
    originalPrice: 4500,
    duration: '3 Month Course',
    rating: 4.9,
    reviewsCount: 165,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    tags: ['Programming', 'C++', 'Data Structures'],
    description: 'Develop fundamental logical algorithms and system programming structures. Perfect for college candidates and O\'level students.',
    syllabus: [
      'DATA TYPES & Primitive Operators',
      'ARRAY configurations (1D & 2D)',
      'POINTER addressings and variable relationships',
      'LOOPS (For, While, Do-While) and CLASS Object-Oriented Structures'
    ]
  },
  {
    id: 'advance_tally',
    title: 'Advance Tally Course',
    price: 4000,
    originalPrice: 6000,
    duration: '4 Month Course',
    rating: 4.9,
    reviewsCount: 228,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
    tags: ['Tally', 'GST', 'BOM', 'Payroll'],
    description: 'Professional high-tier accounting setup. Learn complex inventory transfers, payroll metrics, GST filings, and bill of materials management.',
    syllabus: [
      'ACCOUNTING fundamentals & ledger postings',
      'SALES TAX ledger configurations',
      'INVENTORY tracking & service tax models',
      'GST billing, ADVANCE ACCOUNTING, PAY ROLL ledgers, and BOM inventory structures'
    ]
  },
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
    description: 'The definitive foundation program for kids, office workers, and shop owners starting their computing journey.',
    syllabus: [
      'Fundamental concepts & Ms-Dos environments',
      'Windows utilities, Ms-Word document builders & Power-Point structures',
      'Typing drills & Speed practices',
      'Printing Job work configurations and Internet navigation basics'
    ]
  },
  {
    id: 'office_management',
    title: 'Office Management',
    price: 3500,
    originalPrice: 5500,
    duration: '4 Month Course',
    rating: 4.8,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600',
    tags: ['Office', 'Tally basics', 'E-mail'],
    description: 'Direct corporate administration module focusing on file records, document formatting, emailing protocols, print queuing, and fundamental tally tools.',
    syllabus: [
      'Fundamental, Ms-Word techniques and Windows configurations',
      'Printing Job printer installation and E-mail/Internet operations',
      'Printing Job work, Typing speed tests, and Tally fundamental books ledger'
    ]
  },
  {
    id: 'autocad',
    title: 'AutoCAD Course',
    price: 4500,
    originalPrice: 7000,
    duration: '3 Month Course',
    rating: 4.9,
    reviewsCount: 119,
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600',
    tags: ['AutoCAD', '2D/3D', 'Drafting'],
    description: 'Learn master civil engineering blueprints and machine geometries in industry-standard CAD software setup.',
    syllabus: [
      'Fundamental of cad commands',
      'Layer & toolbar Menus configurations',
      'Commands execution, Drawing 2d shapes, Drawing 3d extrudes, and Project file compilations'
    ]
  },
  {
    id: 'hardware',
    title: 'Special Course in Hardware',
    price: 5000,
    originalPrice: 8000,
    duration: '4 Month Course',
    rating: 4.9,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=600',
    tags: ['Hardware', 'OS Installation', 'Assembly'],
    description: 'Develop hands-on engineering capabilities to disassemble hardware components, diagnose faulty motherboard parts, and clean-install system software.',
    syllabus: [
      'Fundamental of Hardware architectures',
      'Disk Operating System commands',
      'Windows Instillation winxpwindows7,windows8,windows10 configurations',
      'Assembling Of Computer components and system diagnostic Trouble Shooting rules'
    ]
  },
  {
    id: 'python_programming',
    title: 'Python Programming',
    price: 3500,
    originalPrice: 5000,
    duration: '3 Month Course',
    rating: 4.9,
    reviewsCount: 182,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
    tags: ['Programming', 'Python', 'AI Basics', 'Data Analysis'],
    description: 'Learn Python programming from scratch. Build fundamental algorithms, work with data libraries, and understand key OOP concepts in Python.',
    syllabus: [
      'Python Installation & Environment Setup',
      'Data Types, Variables, and Core Operators',
      'Control Flow (If-Else, Loops, List Comprehensions)',
      'Functions, Modules, and File Handling Operations',
      'Object-Oriented Programming (Classes, Objects, Inheritance)',
      'Introduction to Data Libraries (NumPy, Pandas) and API interactions'
    ]
  },
  {
    id: 'java_programming',
    title: 'Java Programming',
    price: 3800,
    originalPrice: 5500,
    duration: '3 Month Course',
    rating: 4.9,
    reviewsCount: 146,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    tags: ['Programming', 'Java', 'OOPs', 'Core Java'],
    description: 'Master Core Java concepts. Develop strong object-oriented design principles, exception handling strategies, multi-threading, and backend logical constructs.',
    syllabus: [
      'Java Virtual Machine (JVM) & JDK Setup',
      'Syntax, Primitive Types, and Control Statements',
      'Classes, Objects, Methods, and Constructors',
      'Inheritance, Polymorphism, Encapsulation, and Interfaces',
      'Exception Handling & Custom Exception Builders',
      'Java Collections Framework (List, Set, Map) and Multithreading'
    ]
  }
];
