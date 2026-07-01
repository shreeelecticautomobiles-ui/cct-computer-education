import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogType?: string;
  schemas: Record<string, any>[];
}

const SITE_URL = 'https://www.cctcomputereducation.in';

const SEO_MAP: Record<string, SEOConfig> = {
  '/': {
    title: 'CCT Computer Education | Best Computer Institute in Madangir, South Delhi',
    description: 'Government Registered Computer Training Institute in Madangir, South Delhi since 1996. Learn Tally Prime, Advanced Excel, Python programming, and laptop repair. High-quality used laptops start at ₹6,500.',
    keywords: 'computer courses near me, computer institute in Madangir, best computer coaching South Delhi, computer class Sangam Vihar, Tally Prime course with GST Ambedkar Nagar, Python coding class Saket',
    canonical: `${SITE_URL}/`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        '@id': `${SITE_URL}/#org`,
        'name': 'CCT Computer Education',
        'url': SITE_URL,
        'logo': 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800',
        'description': 'Pioneering computer literacy since 1996 with top courses like Tally Prime, Python, and hardware repair.',
        'telephone': '+918527208085',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '19/520, Ground Floor, DDA Flats, Madangir',
          'addressLocality': 'New Delhi',
          'addressRegion': 'Delhi',
          'postalCode': '110062',
          'addressCountry': 'IN'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        'name': 'CCT Computer Education',
        'image': 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800',
        'url': SITE_URL,
        'telephone': '+918527208085',
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '19/520, Ground Floor, DDA Flats, Madangir',
          'addressLocality': 'New Delhi',
          'addressRegion': 'Delhi',
          'postalCode': '110062',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 28.5209673,
          'longitude': 77.2287807
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
          ],
          'opens': '08:30',
          'closes': '20:00'
        }
      }
    ]
  },
  '/courses': {
    title: 'Govt Certified Computer Courses in South Delhi | CCT Computer Education',
    description: 'Explore certified career-oriented computer training courses in South Delhi: Tally Prime with GST, Python, Advanced Excel, computer hardware mechanics, and web layout design.',
    keywords: 'computer courses in South Delhi, tally prime coaching near me, learn python coding Delhi, advanced excel course near me, government computer certification',
    canonical: `${SITE_URL}/courses`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': SITE_URL
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Courses',
            'item': `${SITE_URL}/courses`
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Course',
        'name': 'Tally Prime Professional Accounting with GST',
        'description': 'Master corporate journal entries, balance sheet adjustments, ledger reconciliations, and tax computing in Tally Prime.',
        'provider': {
          '@type': 'EducationalOrganization',
          'name': 'CCT Computer Education',
          'url': SITE_URL
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Course',
        'name': 'Python Programming (Basic to Advanced)',
        'description': 'Learn syntax arrays, functions, classes, data structures, backend logical files, and database connections in Python.',
        'provider': {
          '@type': 'EducationalOrganization',
          'name': 'CCT Computer Education',
          'url': SITE_URL
        }
      }
    ]
  },
  '/timing': {
    title: 'Batch Timings & Lab Hours | CCT Computer Education Madangir',
    description: 'Explore flexible computer class batch timings in South Delhi. Morning, afternoon, and evening slots from 8:30 AM to 8:00 PM with 12 hours of open lab practice.',
    keywords: 'computer course batch timings, evening computer classes, flexible coaching hours delhi, weekend computer practice room',
    canonical: `${SITE_URL}/timing`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': SITE_URL
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Batch Timing',
            'item': `${SITE_URL}/timing`
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What are the computer course batch timings at CCT Madangir?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We run multiple batches starting from 8:30 AM to 8:00 PM. Students can choose any 1-hour or 2-hour slot as per convenience.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do we get computer lab practice time?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes! Our high-density laboratory is open for up to 12 hours daily. Students can sit and practice extra hours at no extra charge.'
            }
          }
        ]
      }
    ]
  },
  '/services': {
    title: 'Computer & Laptop Repairing Shop in Madangir, South Delhi | CCT',
    description: 'Fast and reliable desktop & laptop repair services near Madangir market. Hard disk to high-speed SSD upgrades, RAM installation, screen repair, and OS formatting.',
    keywords: 'laptop repairing near me, computer mechanics in Madangir, used laptop service shop, fix slow computer, format windows delhi',
    canonical: `${SITE_URL}/services`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': SITE_URL
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': `${SITE_URL}/services`
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'CCT Computer Repair & Services',
        'image': 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800',
        'telephone': '+918527208085',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '19/520, Ground Floor, DDA Flats, Madangir',
          'addressLocality': 'New Delhi',
          'addressRegion': 'Delhi',
          'postalCode': '110062',
          'addressCountry': 'IN'
        }
      }
    ]
  },
  '/laptop-sale': {
    title: 'Second Hand Laptops for Sale in South Delhi starting ₹6,500 | CCT',
    description: 'Get verified second-hand laptops with full testing warranty in South Delhi. Top brands: Dell, HP, Lenovo ThinkPad. Certified, hardware checked, and SSD upgraded.',
    keywords: 'second hand laptop shop near me, cheap refurbished laptop delhi, buy used laptop in madangir, cheap macbook delhi',
    canonical: `${SITE_URL}/laptop-sale`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': SITE_URL
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Laptop Sale',
            'item': `${SITE_URL}/laptop-sale`
          }
        ]
      }
    ]
  },
  '/gallery': {
    title: 'CCT Computer Center Gallery | Training Lab Facilities Delhi',
    description: 'Explore the modern training facilities, student classrooms, interactive computers, and official certificate distribution ceremonies at CCT Madangir.',
    keywords: 'computer education photos, computer labs in Delhi, CCT computer education gallery, certification event images',
    canonical: `${SITE_URL}/gallery`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': SITE_URL
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Gallery',
            'item': `${SITE_URL}/gallery`
          }
        ]
      }
    ]
  },
  '/about': {
    title: 'About CCT Computer Education | Government Registered Since 1996',
    description: 'CCT Computer Education is an ISO 9001:2015 certified academy with a 29-year history of empowering students with computer hardware, coding, and accounting skills.',
    keywords: 'about cct computer center, government certified computer training, iso computer academy delhi, computer teachers history',
    canonical: `${SITE_URL}/about`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': SITE_URL
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'About Us',
            'item': `${SITE_URL}/about`
          }
        ]
      }
    ]
  },
  '/contact': {
    title: 'Contact CCT Computer Education | Phone, Address & Map Route',
    description: 'Visit CCT Computer Education near Madangir Market, South Delhi. Call us at +91-8527208085 or send an online ledger request. Ground floor parking available.',
    keywords: 'contact computer institute, cct delhi phone number, computer coaching madangir address, send inquiry computer course',
    canonical: `${SITE_URL}/contact`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': SITE_URL
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Contact',
            'item': `${SITE_URL}/contact`
          }
        ]
      }
    ]
  },
  '/blog': {
    title: 'CCT Computer Education Blog | Tech Insights & Tally Prime Hacks',
    description: 'Stay updated with accounting ledger management shortcuts, advanced formatting in Excel, and basic Python coding tips written by Delhi certified counselors.',
    keywords: 'computer education blog, learn tally prime, excel lookup tips, coding tutorials delhi',
    canonical: `${SITE_URL}/blog`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': SITE_URL
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': `${SITE_URL}/blog`
          }
        ]
      }
    ]
  }
};

export default function SEOMetadata() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    // Map /course-details or other paths to closest category
    let matchedPath = '/';
    if (currentPath === '/courses' || currentPath === '/course-details') {
      matchedPath = '/courses';
    } else if (currentPath === '/timing' || currentPath === '/batch-timing') {
      matchedPath = '/timing';
    } else if (currentPath === '/services') {
      matchedPath = '/services';
    } else if (currentPath === '/laptop-sale') {
      matchedPath = '/laptop-sale';
    } else if (currentPath === '/gallery') {
      matchedPath = '/gallery';
    } else if (currentPath === '/about') {
      matchedPath = '/about';
    } else if (currentPath === '/contact') {
      matchedPath = '/contact';
    } else if (currentPath === '/blog') {
      matchedPath = '/blog';
    }

    const config = SEO_MAP[matchedPath] || SEO_MAP['/'];

    // 1. Update Title
    document.title = config.title;

    // 2. Update Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', config.description);

    // 3. Update Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', config.keywords);

    // 4. Update Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', config.canonical);

    // 5. Update Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow');

    // 6. Update Open Graph Meta Tags
    const ogTags = {
      'og:title': config.title,
      'og:description': config.description,
      'og:url': config.canonical,
      'og:type': config.ogType || 'website',
      'og:image': 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800',
      'twitter:title': config.title,
      'twitter:description': config.description,
      'twitter:image': 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800',
      'twitter:card': 'summary_large_image'
    };

    Object.entries(ogTags).forEach(([property, value]) => {
      const isOg = property.startsWith('og:');
      const attributeName = isOg ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attributeName}="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeName, property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', value);
    });

    // 7. Inject Structured JSON-LD Data
    // Remove existing CCT SEO script nodes to avoid duplication
    const existingScripts = document.querySelectorAll('script[data-seo="cct-jsonld"]');
    existingScripts.forEach(script => script.remove());

    config.schemas.forEach((schema) => {
      const scriptNode = document.createElement('script');
      scriptNode.setAttribute('type', 'application/ld+json');
      scriptNode.setAttribute('data-seo', 'cct-jsonld');
      scriptNode.text = JSON.stringify(schema);
      document.head.appendChild(scriptNode);
    });

  }, [location.pathname]);

  return null;
}
