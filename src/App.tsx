import { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import { fetchAnnouncements } from './services/googleSheets';
import { Announcement } from './types';

// Import our new premium page components
import HomeView from './components/HomeView';
import CoursesView from './components/CoursesView';
import BatchTimingView from './components/BatchTimingView';
import ComputerServicesView from './components/ComputerServicesView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import GalleryPage from './components/GalleryPage';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to derive active view and sub-tabs from clean pathnames
  const getActiveViewAndSubTab = () => {
    const path = location.pathname;
    if (path === '/about') return { view: 'about' as const, subTab: 'services' as const };
    if (path === '/courses' || path === '/course-details') return { view: 'courses' as const, subTab: 'services' as const };
    if (path === '/timing' || path === '/batch-timing') return { view: 'timing' as const, subTab: 'services' as const };
    if (path === '/services') return { view: 'services' as const, subTab: 'services' as const };
    if (path === '/laptop-sale') return { view: 'services' as const, subTab: 'laptop-sale' as const };
    if (path === '/gallery') return { view: 'gallery' as const, subTab: 'services' as const };
    if (path === '/contact') return { view: 'contact' as const, subTab: 'services' as const };
    if (path === '/blog') return { view: 'blog' as const, subTab: 'services' as const };
    return { view: 'home' as const, subTab: 'services' as const };
  };

  const { view: activeView, subTab: servicesSubTab } = getActiveViewAndSubTab();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [announcements, setAnnouncements] = useState<Announcement[]>([
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
  ]);

  useEffect(() => {
    let active = true;
    async function loadAnnouncements() {
      try {
        const data = await fetchAnnouncements();
        if (active) {
          setAnnouncements(data);
        }
      } catch (err) {
        console.error('Failed to load announcements:', err);
      }
    }
    loadAnnouncements();
    return () => {
      active = false;
    };
  }, []);

  // Smooth scroll to top on every page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Trigger scroll-in animations on load and page transition
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      document.querySelectorAll('section, .course-card, .stat-card, .review-card, .career-card, .faq-item').forEach(el => {
        observer.observe(el);
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeView]);

  // Keep navbar always visible on scroll and manage body classes
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar, header') as HTMLElement;
      if (navbar) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.width = '100%';
        navbar.style.zIndex = '9999';
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially

    // Toggle announcement class on body
    if (activeView === 'home') {
      document.body.classList.add('has-announcement');
    } else {
      document.body.classList.remove('has-announcement');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('has-announcement');
    };
  }, [activeView]);

  const openMenu = () => {
    const pos = window.scrollY || window.pageYOffset || 0;
    setScrollPosition(pos);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${pos}px`;
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    document.body.style.position = '';
    document.body.style.overflow = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
    setIsMenuOpen(false);
  };

  const handleAnnouncementClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen flex flex-col font-sans selection:bg-[#1e40af] selection:text-white relative">
      

      <header className="sticky top-0 left-0 w-full z-[9999] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] px-6 py-4 sm:px-12 navbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand Title Frame */}
          <button 
            onClick={() => {
              if (isMenuOpen) {
                closeMenu();
              }
              navigate('/');
            }} 
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
          >
            {/* Blue Squared Branding Badge */}
            <div className="bg-[#1e40af] text-white rounded-xl h-11 w-11 flex flex-col items-center justify-center shadow-lg shadow-blue-900/20 select-none shrink-0 border border-blue-700 group-hover:scale-105 transition-transform duration-200 navbar-logo-icon">
              <span className="text-[15px] font-black tracking-tighter leading-none">CCT</span>
              <span className="text-[6.5px] font-black uppercase tracking-widest mt-0.5 opacity-90 leading-none">Delhi</span>
            </div>
            
            {/* Title Typography in Uppercase per spec */}
            <div className="flex flex-col">
              <span className="text-sm sm:text-md md:text-lg font-black tracking-tight text-[#0f172a] uppercase leading-none navbar-logo-text navbar-logo-name">
                CCT COMPUTER TRAINING
              </span>
              <span className="text-[8px] sm:text-[9px] font-extrabold tracking-[0.16em] text-slate-500 uppercase mt-1 leading-none navbar-sub navbar-logo-subtitle">
                Govt. Regd. • ESTD 1996
              </span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION INTERFACE (Visible on medium screen +) */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { name: 'Home', path: '/' },
              { name: 'Courses', path: '/courses' },
              { name: 'Batch Timing', path: '/timing' },
              { name: 'Services & Laptop Sale', path: '/services' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => {
              const viewNameMap: Record<string, string> = {
                '/': 'home',
                '/courses': 'courses',
                '/timing': 'timing',
                '/services': 'services',
                '/laptop-sale': 'services',
                '/gallery': 'gallery',
                '/about': 'about',
                '/contact': 'contact',
              };
              const isItemActive = activeView === viewNameMap[item.path];
              return (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                  }}
                  className={`relative px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                    isItemActive 
                      ? 'text-[#1e40af]' 
                      : 'text-slate-600 hover:text-[#1e40af]'
                  }`}
                >
                  {/* Active Indicator Underline */}
                  {isItemActive && (
                    <motion.span 
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#1e40af]" 
                      transition={{ type: 'spring', damping: 15 }}
                    />
                  )}
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-4">
            
            {/* Live Call Now Button */}
            <a 
              href="tel:8527208085"
              className="hidden md:inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg shadow-md transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span>8527208085</span>
            </a>

            {/* CLEAR BLUE HAMBURGER DIALOG TRIGGER (Tappable Minimum 44px Height & Width, 28px Icon) */}
            <button
              onClick={() => {
                if (isMenuOpen) {
                  closeMenu();
                } else {
                  openMenu();
                }
              }}
              className="p-2 text-[#1e40af] hover:opacity-85 transition shrink-0 z-50 flex items-center justify-center cursor-pointer focus:outline-none min-h-[44px] min-w-[44px]"
              title="Toggle Directory Menu"
              aria-label="Toggle Navigation Options"
            >
              {isMenuOpen ? (
                <X className="text-[#1e40af]" style={{ width: '28px', height: '28px' }} />
              ) : (
                <Menu className="text-[#1e40af]" style={{ width: '28px', height: '28px' }} />
              )}
            </button>
          </div>

        </div>

        {/* FULL SCREEN / IMMERSIVE NAV NAVIGATOR OVERLAY (White background, z-9998) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-white z-[9998] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto w-screen h-screen"
            >
              {/* Close Button Top Right (Clearly Visible) */}
              <button
                onClick={closeMenu}
                className="absolute top-6 right-6 p-2 text-[#1e40af] hover:opacity-85 transition shrink-0 cursor-pointer focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close Mobile Menu"
              >
                <X className="h-8 w-8" style={{ width: '32px', height: '32px' }} />
              </button>

              {/* Large Clear Routes in #1e40af */}
              <div className="flex flex-col items-center justify-center flex-1 space-y-5 mt-16 text-center">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Courses', path: '/courses' },
                  { name: 'Batch Timing', path: '/timing' },
                  { name: 'Services & Laptop Sale', path: '/services' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' },
                ].map((item) => {
                  const viewNameMap: Record<string, string> = {
                    '/': 'home',
                    '/courses': 'courses',
                    '/timing': 'timing',
                    '/services': 'services',
                    '/laptop-sale': 'services',
                    '/gallery': 'gallery',
                    '/about': 'about',
                    '/contact': 'contact',
                  };
                  const isItemActive = activeView === viewNameMap[item.path];
                  return (
                    <button
                      key={item.path}
                      onClick={() => {
                        navigate(item.path);
                        closeMenu();
                      }}
                      className={`text-2xl sm:text-3xl font-black uppercase tracking-tight transition hover:opacity-80 active:scale-95 focus:outline-none py-2.5 min-h-[44px] ${
                        isItemActive ? 'text-[#1e40af]' : 'text-[#1e40af]/80'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>

              {/* Responsive action buttons at the bottom coordinates of screen */}
              <div className="pt-6 border-t border-slate-100 flex flex-col gap-3.5 w-full max-w-md mx-auto">
                <a
                  href="tel:8527208085"
                  className="w-full bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-black text-xs sm:text-sm uppercase tracking-widest py-4.5 rounded-lg text-center flex items-center justify-center gap-2 transition min-h-[46px] shadow-md shadow-blue-600/10 cursor-pointer"
                >
                  <Phone className="h-4.5 w-4.5" />
                  Call Now: 8527208085
                </a>
                <a
                  href="https://wa.me/918527208085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25d366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm uppercase tracking-widest py-4.5 rounded-lg text-center flex items-center justify-center gap-2 transition min-h-[46px] shadow-md shadow-emerald-500/10 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.321 1.451 5.357 1.452 5.513 0 9.995-4.485 9.998-10.001.002-2.673-1.026-5.185-2.899-7.06-1.875-1.875-4.37-2.907-7.042-2.908-5.523 0-10.01 4.487-10.014 10.004-.001 2.016.521 3.987 1.513 5.727L1.616 22.01l4.413-1.156c1.642.895 3.529 1.365 5.395 1.365h.005zm10.74-6.843c-.29-.145-1.713-.846-1.978-.942-.266-.097-.459-.145-.652.146-.193.29-.747.942-.916 1.135-.168.193-.337.217-.627.072-2.263-1.134-3.551-1.722-4.996-4.2-.38-.652.38-.606 1.088-2.022.12-.242.06-.454-.03-.599-.09-.145-.747-1.8-.1023-2.65-.24-.583-.472-.505-.652-.514-.17-.008-.363-.01-.555-.01-.193 0-.507.073-.772.363-.266.29-1.014.99-1.014 2.415 0 1.425 1.038 2.802 1.182 2.996.145.193 2.04 3.114 4.945 4.368.69.298 1.23.476 1.65.61.694.221 1.325.19 1.825.114.557-.084 1.713-.7 1.953-1.376.24-.677.24-1.256.17-1.376-.073-.12-.266-.193-.556-.339z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to push content exactly below navbar on desktop */}
      <div className="navbar-spacer" style={{ height: activeView === 'home' ? '110px' : '70px' }}></div>

      {/* Scrolling Announcement Banner on the Home page at the very top (below the navbar) */}
      {activeView === 'home' && (
        <div 
          onClick={() => {
            navigate('/laptop-sale');
          }}
          style={{ background: '#1e40af', color: 'white', padding: '12px 0', overflow: 'hidden', cursor: 'pointer' }}
          className="w-full relative z-[9997] border-b border-blue-700/50 select-none announcement-bar cursor-pointer hover:bg-[#1d4ed8] transition-colors mb-6 md:mb-10"
        >
          <div style={{ display: 'flex', width: 'max-content', animation: 'marquee-continuous 25s linear infinite' }}>
            <div style={{ display: 'flex', flexShrink: 0, gap: '40px', paddingRight: '40px', fontSize: '13px', fontWeight: 'bold' }} className="uppercase">
              {announcements.map((ann) => (
                <span key={ann.id}>{ann.message}</span>
              ))}
            </div>
            <div style={{ display: 'flex', flexShrink: 0, gap: '40px', paddingRight: '40px', fontSize: '13px', fontWeight: 'bold' }} className="uppercase">
              {announcements.map((ann) => (
                <span key={`${ann.id}-duplicate`}>{ann.message}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* DYNAMIC RENDERING BLOCK FOR SWITCHED VIEW ROUTERS */}
      <main className="flex-1 bg-white pt-0 w-full">
        <Routes>
          <Route path="/" element={
            <HomeView 
              onNavigateToCourses={() => navigate('/courses')} 
              onNavigateToLaptopSale={() => navigate('/laptop-sale')}
              onNavigateToServices={() => navigate('/services')}
              onNavigateToGallery={() => navigate('/gallery')}
            />
          } />
          <Route path="/courses" element={<CoursesView />} />
          <Route path="/course-details" element={<CoursesView />} />
          <Route path="/timing" element={<BatchTimingView />} />
          <Route path="/batch-timing" element={<BatchTimingView />} />
          <Route path="/services" element={<div key="services_view" className="w-full"><ComputerServicesView initialTab="services" /></div>} />
          <Route path="/laptop-sale" element={<div key="laptop_sale_view" className="w-full"><ComputerServicesView initialTab="laptop-sale" /></div>} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/blog" element={
            <div className="max-w-7xl mx-auto py-20 px-6 text-center space-y-6">
              <span className="text-[#1e40af] text-xs font-black uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
                CCT Blog & Insights
              </span>
              <h1 className="text-4xl font-black text-slate-900 uppercase">
                Educational Blog & Tech Insights
              </h1>
              <p className="text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                Stay updated with the latest computer hardware trends, core programming tricks, and accounting tips directly from our senior certified educators at CCT Delhi.
              </p>
              <div className="border border-blue-100 bg-[#f0f9ff]/50 rounded-2xl p-8 max-w-lg mx-auto text-left space-y-4">
                <h3 className="font-bold text-[#1e40af] text-md sm:text-lg">Featured Articles (Coming Soon)</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                  <li className="flex items-center gap-2">👉 10 Tally Prime Hacks for Corporate Ledger Reconciliation</li>
                  <li className="flex items-center gap-2">👉 Basic vs Advanced Python: What Companies Look For in 2026</li>
                  <li className="flex items-center gap-2">👉 Choosing the Right Second-Hand Laptop for Student Budgets</li>
                </ul>
              </div>
            </div>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* SPECIAL BOTTOM HIGHLIGHT NOTE - Renders bottom of every page */}
      <section className="bg-[#1e40af] text-white py-4.5 px-6 sm:px-12 text-center uppercase tracking-wider font-sans font-black text-xs sm:text-sm border-t border-slate-200 select-none">
        <marquee scrollamount="4" className="w-full">
          15 Days Free Classes After Course Completion — No Extra Charge • Estd 1996 • Call 8527208085 today to reserve your computer slot!
        </marquee>
      </section>

      {/* SECTION - Visit Our Academy */}
      {(activeView === 'home' || activeView === 'contact') && (
        <section style={{ padding: '60px 24px', backgroundColor: 'white' }}>
        <div className="visit-section-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Left Side */}
          <div>
            <h2 className="font-heading" style={{ color: '#0f172a', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '32px' }}>
              Visit Our<br />Academy
            </h2>
            
            {/* Address Card */}
            <div className="visit-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
              <div style={{ width: '44px', height: '44px', backgroundColor: '#dbeafe', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '20px' }}>
                📍
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '16px', marginBottom: '4px' }}>Address</div>
                <div style={{ color: '#374151', fontSize: '14px', lineHeight: 1.6 }}>19/520, DDA Flats, Madangir, Ground Floor, New Delhi — 110062</div>
              </div>
            </div>
            
            {/* Phone Card */}
            <div className="visit-card" style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
              <div style={{ width: '44px', height: '44px', backgroundColor: '#dbeafe', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '20px' }}>
                📞
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '16px', marginBottom: '4px' }}>Phone</div>
                <a href="tel:8527208085" style={{ color: '#1e40af', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>8527208085</a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="visit-card" style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
              <div style={{ width: '44px', height: '44px', backgroundColor: '#dcfce7', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '20px' }}>
                💬
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '16px', marginBottom: '4px' }}>WhatsApp</div>
                <a href="https://wa.me/918527208085" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Chat With Us</a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="visit-card" style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '20px' }}>
              <div style={{ width: '44px', height: '44px', backgroundColor: '#dbeafe', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '20px' }}>
                🕐
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '16px', marginBottom: '4px' }}>Opening Hours</div>
                <div style={{ color: '#374151', fontSize: '14px' }}>Monday - Saturday: <strong>8:00 AM - 8:00 PM</strong></div>
                <div style={{ color: '#374151', fontSize: '14px' }}>Sunday: Closed</div>
              </div>
            </div>

            {/* Get Directions Button */}
            <a href="https://www.google.com/maps/place/CCT+Computer+Education/@28.5209673,77.2287807,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce190013cb139:0xa1c2c0080c2cc2b0!8m2!3d28.5209673!4d77.2287807!16s%2Fg%2F12hn29_kr?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', marginTop: '24px', backgroundColor: '#1e40af', color: 'white', padding: '14px 28px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
              📍 Get Directions on Google Maps
            </a>
          </div>

          {/* Right Side — Google Maps Embed */}
          <div className="visit-section-map" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '420px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8!2d77.2262058!3d28.520972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce190013cb139%3A0xa1c2c0080c2cc2b0!2sCCT%20Computer%20Education!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>
      </section>
      )}

      {/* FOOTER AREA - Displaying brand and navigation links on every single view with blue-900 background */}
      <footer className="bg-[#1e3a8a] py-12 px-6 sm:px-12 text-left text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start footer-grid">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white text-[#1e40af] text-xs font-black h-8 w-8 rounded-lg flex items-center justify-center border border-white">
                CCT
              </div>
              <h4 className="font-black uppercase tracking-tight text-white font-sans">Center for Computer Training</h4>
            </div>
            
            <p className="text-xs text-blue-100/90 leading-relaxed font-semibold max-w-sm">
              Delhi Government Registered Computer Institute. Unleashing functional computing confidence and core coding certifications since 1996.
            </p>


          </div>

          {/* Column 2: Quick Direct Actions */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div>
              <h5 className="text-[10px] font-mono font-black uppercase text-blue-200 tracking-widest mb-3">
                NAVIGATION LINKS
              </h5>
              <div className="flex flex-col gap-2 text-xs font-black uppercase text-[#bfdbfe]">
                <button 
                  onClick={() => { navigate('/'); }}
                  className="hover:text-white transition text-left cursor-pointer hover:underline"
                >
                  Home
                </button>
                <button 
                  onClick={() => { navigate('/courses'); }}
                  className="hover:text-white transition text-left cursor-pointer hover:underline"
                >
                  Courses
                </button>
                <button 
                  onClick={() => { navigate('/timing'); }}
                  className="hover:text-white transition text-left cursor-pointer hover:underline"
                >
                  Batch Timing
                </button>
                <button 
                  onClick={() => { navigate('/services'); }}
                  className="hover:text-white transition text-left cursor-pointer hover:underline"
                >
                  Services & Laptop Sale
                </button>
                <button 
                  onClick={() => { navigate('/gallery'); }}
                  className="hover:text-white transition text-left cursor-pointer hover:underline"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => { navigate('/about'); }}
                  className="hover:text-white transition text-left cursor-pointer hover:underline"
                >
                  About
                </button>
                <button 
                  onClick={() => { navigate('/contact'); }}
                  className="hover:text-white transition text-left cursor-pointer hover:underline"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Global Copyright parameters */}
        <div className="max-w-7xl mx-auto border-t border-blue-850/40 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] text-blue-200 font-mono uppercase tracking-wider font-bold gap-4 text-center sm:text-left">
          <p>© 2026 CCT Center for Computer Training. All Rights Reserved.</p>
          <p className="normal-case sm:uppercase">
            Developed by{' '}
            <a 
              href="https://www.divyanshwebservices.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition underline underline-offset-2"
            >
              DIVYANSH WEB SERVICES
            </a>
          </p>
          <p>DELHI GOVERNMENT REGISTERED</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (NO CALL FLOATING BUTTON) */}
      <a
        href="https://wa.me/918527208085"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float hover:scale-110 active:scale-95 transition-transform duration-200"
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          width: '56px',
          height: '56px',
          background: '#25d366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(37,211,102,0.4)',
          zIndex: 9997,
          textDecoration: 'none',
        }}
        title="Chat on WhatsApp"
        id="floating-whatsapp-widget"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30" height="30">
          <path fill="white" d="M24 4C12.95 4 4 12.95 4 24c0 3.6.95 7 2.6 9.95L4 44l10.35-2.55C17.1 43.1 20.45 44 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm0 36c-3.15 0-6.1-.85-8.65-2.35l-.6-.35-6.3 1.55 1.6-6.1-.4-.65C8.9 29.9 8 27.05 8 24 8 15.16 15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm8.85-11.75c-.45-.25-2.7-1.35-3.15-1.5-.45-.15-.75-.25-1.1.25-.35.5-1.3 1.5-1.6 1.85-.3.35-.6.4-1.05.15-.45-.25-1.9-.7-3.6-2.25-1.35-1.2-2.25-2.65-2.5-3.1-.25-.45 0-.7.2-.9.2-.2.45-.5.65-.75.2-.25.25-.45.4-.75.15-.3.05-.55-.05-.75-.1-.2-1.1-2.65-1.5-3.6-.4-.95-.8-.8-1.1-.8h-.95c-.3 0-.8.1-1.2.55-.4.45-1.55 1.5-1.55 3.7s1.6 4.3 1.8 4.6c.2.3 3.1 4.85 7.6 6.8 1.05.45 1.9.7 2.55.9 1.05.35 2 .3 2.75.2.85-.15 2.7-1.1 3.1-2.15.4-1.05.4-1.95.3-2.15-.1-.2-.4-.3-.85-.55z"/>
        </svg>
      </a>



    </div>
  );
}
