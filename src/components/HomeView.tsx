import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Star, ChevronDown, ChevronUp, ArrowRight, Award, Users, Monitor, Calendar, Sparkles, CheckCircle2, Camera } from 'lucide-react';

interface HomeViewProps {
  onNavigateToCourses: () => void;
  onNavigateToLaptopSale: () => void;
  onNavigateToServices: () => void;
  onNavigateToGallery: () => void;
}

export default function HomeView({ onNavigateToCourses, onNavigateToLaptopSale, onNavigateToServices, onNavigateToGallery }: HomeViewProps) {
  // Frequently Asked Questions State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  React.useEffect(() => {
    document.querySelectorAll('.faculty-photo img').forEach(img => {
      const htmlImg = img as HTMLImageElement;
      htmlImg.onerror = function() {
        htmlImg.style.display = 'none';
        if (htmlImg.nextElementSibling) {
          (htmlImg.nextElementSibling as HTMLElement).style.display = 'flex';
        }
      };
    });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "Do I need any prior computer knowledge to join?",
      a: "No. Our courses are designed for complete beginners. We start from absolute basics — even if you have never used a computer before, you are welcome."
    },
    {
      q: "What are the available batch timings?",
      a: "We have 12 batches from 8:00 AM to 8:00 PM. You can choose any batch that fits your schedule."
    },
    {
      q: "Do you provide a certificate after course completion?",
      a: "Yes. CCT provides government recognized course completion certificates. Regd by Delhi Govt — S/145."
    },
    {
      q: "How much does a course cost?",
      a: "Course fees vary by course and duration. Call us at 8527208085 or visit our centre for the latest fee structure."
    },
    {
      q: "Do you provide placement assistance?",
      a: "We guide students on career options, interview preparation and job opportunities. Our trained students are working across Delhi NCR."
    },
    {
      q: "Is there a free demo class available?",
      a: "Yes. Book a free demo class by calling 8527208085 or filling the enquiry form on this page."
    },
    {
      q: "How many students are in each batch?",
      a: "We maintain a 1:1 computer ratio — every student gets their own computer during class. No sharing."
    },
    {
      q: "Where is CCT located?",
      a: "We are at 19/520, DDA Flats, Madangir, Ground Floor, New Delhi 110062 — near Madangir Market."
    }
  ];

  const careerOptions = [
    { icon: "💻", text: "Computer Operator" },
    { icon: "📊", text: "Tally Operator" },
    { icon: "🖨️", text: "DTP Operator" },
    { icon: "🎨", text: "Graphic Designer" },
    { icon: "🔧", text: "Hardware Technician" },
    { icon: "📝", text: "Data Entry Operator" },
    { icon: "📐", text: "AutoCAD Designer" },
    { icon: "🖥️", text: "Office Executive" }
  ];

  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans selection:bg-[#1e40af] selection:text-white relative w-full">
      {/* NATIVE CUSTOM EMBEDDED STYLES FOR SPECIFIC INTERACTION CLASSES */}
      <style dangerouslySetInnerHTML={{__html: `
        .course-card {
          background: white;
          border: 1.5px solid #bfdbfe;
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .course-card:hover {
          border-color: #1e40af;
          box-shadow: 0 12px 40px rgba(30,64,175,0.15);
          transform: translateY(-4px);
        }
        .course-card .course-icon {
          font-size: 40px;
          margin-bottom: 12px;
        }
        .course-card h3 {
          color: #0f172a;
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 4px;
        }
        .course-card .duration {
          color: #1e40af;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .course-card ul {
          padding-left: 16px;
          color: #374151;
          font-size: 14px;
          margin-bottom: 16px;
        }
        .course-card ul li { margin-bottom: 4px; list-style-type: disc; }
        .tags span {
          background: #dbeafe;
          color: #1e40af;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          display: inline-block;
          margin: 3px 3px 3px 0;
        }
        .view-btn {
          display: inline-block;
          margin-top: 16px;
          color: #1e40af;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
        }
        
        @keyframes marquee-continuous {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      {/* SECTION 3 — Hero Section */}
      <div className="hero-wrapper">
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white hero-section"
        >
          {/* Left Column Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 w-full hero-text">
            <span className="inline-block bg-[#dbeafe] border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold text-[#1e40af] hero-badge">
              Delhi Govt. Registered • Est. 1996 • Regd: S/145
            </span>
            
            <h1 className="text-4xl sm:text-6xl font-black text-[#0f172a] uppercase tracking-tight leading-[1.1] sm:leading-none w-full hero-headline">
              Start Your <br className="hidden sm:block" />
              <span className="relative inline-block pb-1.5 border-b-[6px] sm:border-b-[10px] border-[#bfdbfe]">
                <span className="text-[#1e40af] mr-2">Computer Career</span>Today
              </span>
            </h1>
            
            <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed max-w-2xl hero-subtext">
              29 years of trusted computer education in Madangir, South Delhi. Certified courses, experienced faculty, 1:1 computer ratio.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto max-w-sm sm:max-w-none hero-buttons">
              <a
                href="#enquiry-form"
                onClick={handleScrollToForm}
                className="w-full sm:w-auto bg-[#1e40af] hover:bg-blue-800 text-white font-black text-xs uppercase tracking-widest px-8 py-4.5 rounded-lg text-center transition shadow-lg min-h-[44px] btn-primary"
              >
                Book Free Demo Class
              </a>
              <a
                href="tel:8527208085"
                className="w-full sm:w-auto border-2 border-[#1e40af] hover:bg-[#1e40af] hover:text-white text-[#1e40af] bg-transparent font-black text-xs uppercase tracking-widest px-8 py-4 rounded-lg text-center transition min-h-[44px] btn-primary"
              >
                Call Now: 8527208085
              </a>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="hero-image-container w-full flex justify-center">
            <img 
              src="https://i.ibb.co/S9vyHS7/Gemini-Generated-Image-jckflejckflejckf.png"
              alt="Computer Training Classroom — CCT Computer Education Madangir Delhi"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '380px',
                maxHeight: '450px',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '16px',
                boxShadow: '0 8px 30px rgba(30,64,175,0.2)',
                border: '3px solid #bfdbfe'
              }}
              className="hero-image"
              loading="eager"
            />
          </div>
        </motion.section>
      </div>

      {/* SECTION 4 — Trust Metrics Bar */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{
          background: '#1e40af',
          padding: '32px 24px'
        }}
        className="stats-grid stats-section max-w-full mx-auto grid grid-cols-2 lg:grid-cols-5 gap-6"
      >
        <div style={{ textAlign: 'center', color: 'white' }} className="stat-card">
          <div className="stat-number" style={{ fontSize: '2rem', fontWeight: 900 }}>5000+</div>
          <div className="stat-label" style={{ fontSize: '12px', color: '#bfdbfe', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Students Trained Since 1996
          </div>
        </div>
        <div style={{ textAlign: 'center', color: 'white' }} className="stat-card">
          <div className="stat-number" style={{ fontSize: '2rem', fontWeight: 900 }}>29+</div>
          <div className="stat-label" style={{ fontSize: '12px', color: '#bfdbfe', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Years of Experience
          </div>
        </div>
        <div style={{ textAlign: 'center', color: 'white' }} className="stat-card">
          <div className="stat-number" style={{ fontSize: '2rem', fontWeight: 900 }}>4.7★</div>
          <div className="stat-label" style={{ fontSize: '12px', color: '#bfdbfe', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Google Rating
          </div>
        </div>
        <div style={{ textAlign: 'center', color: 'white' }} className="stat-card">
          <div className="stat-number" style={{ fontSize: '2rem', fontWeight: 900 }}>63+</div>
          <div className="stat-label" style={{ fontSize: '12px', color: '#bfdbfe', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Student Reviews
          </div>
        </div>
        <div style={{ textAlign: 'center', color: 'white' }} className="stat-card col-span-2 lg:col-span-1">
          <div className="stat-number" style={{ fontSize: '2rem', fontWeight: 900 }}>1:1</div>
          <div className="stat-label" style={{ fontSize: '12px', color: '#bfdbfe', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Computer Ratio
          </div>
        </div>
      </motion.section>

      {/* SECTION 5 — Lead Capture Form */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        id="enquiry-form" 
        style={{ background: '#f0f9ff', padding: '60px 24px' }}
      >
        <div style={{ maxWidth: '580px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: '#1e40af', color: 'white', padding: '4px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: '700', display: 'inline-block', marginBottom: '16px' }}>
            FREE CAREER COUNSELING
          </div>
          <h2 style={{ color: '#0f172a', fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>
            Get Free Demo Class Today
          </h2>
          <p style={{ color: '#374151', marginBottom: '28px', fontSize: '15px' }}>
            Fill the form — we will call you back within 2 hours
          </p>
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Your Full Name" 
              required
              style={{ padding: '14px 16px', border: '1.5px solid #bfdbfe', borderRadius: '8px', fontSize: '16px', width: '100%', boxSizing: 'border-box' }}
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Your Mobile Number" 
              required
              style={{ padding: '14px 16px', border: '1.5px solid #bfdbfe', borderRadius: '8px', fontSize: '16px', width: '100%', boxSizing: 'border-box' }}
            />
            <select 
              name="course" 
              required
              style={{ padding: '14px 16px', border: '1.5px solid #bfdbfe', borderRadius: '8px', fontSize: '16px', width: '100%', boxSizing: 'border-box', color: '#374151' }}
            >
              <option value="">Select Course You Are Interested In</option>
              <option>Master in Software Engineering (1 Year)</option>
              <option>Diploma in MS-Office (6 Month)</option>
              <option>Graphics Designing & Multimedia</option>
              <option>Certificate in Web Designing</option>
              <option>C & C++ Programming</option>
              <option>Advance Tally Course</option>
              <option>Basic Computer Application</option>
              <option>AutoCAD Course (3 Month)</option>
              <option>Hardware & Repairing</option>
              <option>Crash Course (1-4 Weeks)</option>
              <option>O Level / BCA / MCA Coaching</option>
              <option>Not Sure - Need Guidance</option>
            </select>
            <button 
              type="submit"
              className="hover:bg-blue-800 transition"
              style={{ background: '#1e40af', color: 'white', padding: '16px', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', width: '100%' }}
            >
              Get Free Counseling Call →
            </button>
          </form>
          <p style={{ marginTop: '16px', color: '#6b7280', fontSize: '13px' }}>
            Or directly call: <a href="tel:8527208085" style={{ color: '#1e40af', fontWeight: 700 }}>8527208085</a> &nbsp;|&nbsp; Enquire on{' '}
            <a href="https://wa.me/918527208085" style={{ color: '#25d366', fontWeight: 700 }}>WhatsApp Us</a>
          </p>
        </div>
      </motion.section>

      {/* SECTION — Our Advantages */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 sm:px-12 bg-white text-slate-800 border-t border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-block text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono bg-[#dbeafe] border border-blue-200 px-3.5 py-1.5 rounded-full">
              Why Choose CCT Madangir
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight">
              Our Advantages
            </h2>
            <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Over 29 years of excellence in computer training, delivering superior value, personal attention, and certified career success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Highly Experienced Staff */}
            <div className="bg-white border border-[#bfdbfe]/40 hover:border-[#1e40af] rounded-2xl overflow-hidden flex flex-col justify-between group transition duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(30,64,175,0.08)]">
              {/* Graphical Top Header */}
              <div className="relative h-44 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-blue-100/50 flex flex-col items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                <div className="relative p-4 bg-white rounded-2xl shadow-md border border-blue-100 text-[#1e40af] group-hover:scale-110 transition duration-300 z-10">
                  <Users className="h-8 w-8" />
                </div>
                <div className="absolute bottom-3 bg-[#1e40af] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm font-mono z-10">
                  Since 1996
                </div>
              </div>
              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3 text-left">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-[#0f172a] uppercase group-hover:text-[#1e40af] transition-colors leading-tight">
                    Highly Experienced Staff
                  </h3>
                  <p className="text-xs text-[#374151] font-semibold leading-relaxed">
                    Learn under the close guidance of industrial gurus coaching since 1996.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-50 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#1e40af] font-mono">
                  <Sparkles className="h-3 w-3" /> Expert Mentors
                </div>
              </div>
            </div>

            {/* Card 2: Certified Courses */}
            <div className="bg-white border border-[#bfdbfe]/40 hover:border-[#1e40af] rounded-2xl overflow-hidden flex flex-col justify-between group transition duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(30,64,175,0.08)]">
              {/* Graphical Top Header: Accredited certificate template with successful graduation stamp */}
              <div className="relative h-44 bg-gradient-to-br from-amber-50 to-orange-50 border-b border-amber-100/50 flex flex-col items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                {/* Stamp visual representation */}
                <div className="relative p-4 bg-white rounded-2xl shadow-md border border-amber-100 text-amber-600 group-hover:scale-110 transition duration-300 z-10 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                  <div className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 bg-amber-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm font-mono z-10">
                  Govt. Registered
                </div>
              </div>
              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3 text-left">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-[#0f172a] uppercase group-hover:text-amber-600 transition-colors leading-tight">
                    Certified Courses
                  </h3>
                  <p className="text-xs text-[#374151] font-semibold leading-relaxed">
                    Earn government-registered, industry-acknowledged master skill certifications.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-50 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-600 font-mono">
                  <Award className="h-3 w-3" /> Valid Nationwide
                </div>
              </div>
            </div>

            {/* Card 3: One is to One Computer Ratio */}
            <div className="bg-white border border-[#bfdbfe]/40 hover:border-[#1e40af] rounded-2xl overflow-hidden flex flex-col justify-between group transition duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(30,64,175,0.08)]">
              {/* Graphical Top Header: Clean modern computer workstation */}
              <div className="relative h-44 bg-gradient-to-br from-cyan-50 to-blue-50 border-b border-cyan-100/50 flex flex-col items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                <div className="relative p-4 bg-white rounded-2xl shadow-md border border-cyan-100 text-cyan-600 group-hover:scale-110 transition duration-300 z-10">
                  <Monitor className="h-8 w-8" />
                </div>
                <div className="absolute bottom-3 bg-cyan-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm font-mono z-10">
                  1 Workstation Per Person
                </div>
              </div>
              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3 text-left">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-[#0f172a] uppercase group-hover:text-cyan-600 transition-colors leading-tight">
                    One is to One Computer Ratio
                  </h3>
                  <p className="text-xs text-[#374151] font-semibold leading-relaxed">
                    No sharing. Every candidate receives a dedicated high-speed workstation.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-50 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-cyan-600 font-mono">
                  <Monitor className="h-3 w-3" /> 100% Practical
                </div>
              </div>
            </div>

            {/* Card 4: 15 Days Free Classes */}
            <div className="bg-white border border-[#bfdbfe]/40 hover:border-[#1e40af] rounded-2xl overflow-hidden flex flex-col justify-between group transition duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(30,64,175,0.08)]">
              {/* Graphical Top Header: Weekly planner with checkmarks */}
              <div className="relative h-44 bg-gradient-to-br from-emerald-50 to-teal-50 border-b border-emerald-100/50 flex flex-col items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                <div className="relative p-4 bg-white rounded-2xl shadow-md border border-emerald-100 text-emerald-600 group-hover:scale-110 transition duration-300 z-10 flex items-center justify-center">
                  <Calendar className="h-8 w-8" />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm">
                    <CheckCircle2 className="h-3 w-3" />
                  </div>
                </div>
                <div className="absolute bottom-3 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm font-mono z-10">
                  Zero Extra Fee
                </div>
              </div>
              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3 text-left">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-[#0f172a] uppercase group-hover:text-emerald-600 transition-colors leading-tight">
                    15 Days Free Classes
                  </h3>
                  <p className="text-xs text-[#374151] font-semibold leading-relaxed">
                    Extend your expertise with absolute zero surcharge after course completion.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-50 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-600 font-mono">
                  <Calendar className="h-3 w-3" /> Extra Buffer Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 7 — Career Outcome Based Course Cards */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ padding: '60px 24px', background: 'white' }}
        className="border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight uppercase leading-none">
              Courses That Build Real Careers
            </h2>
            <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed">
              Choose a course based on the career you want
            </p>
          </div>

          <div className="courses-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 — Office & Career Courses */}
            <div className="course-card">
              <div className="course-icon">💼</div>
              <h3>Office & Career Courses</h3>
              <p className="duration">Duration: 4 Month to 1 Year</p>
              <div className="learns text-left mb-4">
                <strong className="text-xs sm:text-sm text-slate-800 tracking-wide block mb-1">You Will Learn:</strong>
                <ul>
                  <li>MS Word, Excel, PowerPoint</li>
                  <li>Tally & Financial Accounting</li>
                  <li>Data Entry & Typing</li>
                  <li>Internet & Email</li>
                </ul>
              </div>
              <div className="careers text-left">
                <strong className="text-xs sm:text-sm text-slate-800 tracking-wide block mb-1">Career Options:</strong>
                <div className="tags">
                  <span>Office Executive</span>
                  <span>Data Entry Operator</span>
                  <span>Accountant</span>
                  <span>Computer Operator</span>
                </div>
              </div>
              <a href="#/courses" onClick={onNavigateToCourses} className="view-btn">View Full Syllabus →</a>
            </div>

            {/* Card 2 — Graphics & Designing */}
            <div className="course-card">
              <div className="course-icon">🎨</div>
              <h3>Graphics & Designing</h3>
              <p className="duration">Duration: 3 to 6 Months</p>
              <div className="learns text-left mb-4">
                <strong className="text-xs sm:text-sm text-slate-800 tracking-wide block mb-1">You Will Learn:</strong>
                <ul>
                  <li>CorelDraw & Photoshop</li>
                  <li>Illustrator Grid Layouts</li>
                  <li>Flash & Multimedia Production</li>
                  <li>Desktop Publishing (DTP)</li>
                </ul>
              </div>
              <div className="careers text-left">
                <strong className="text-xs sm:text-sm text-slate-800 tracking-wide block mb-1">Career Options:</strong>
                <div className="tags">
                  <span>Graphic Designer</span>
                  <span>DTP Operator</span>
                  <span>Multimedia Artist</span>
                  <span>Print Designer</span>
                </div>
              </div>
              <a href="#/courses" onClick={onNavigateToCourses} className="view-btn">View Full Syllabus →</a>
            </div>

            {/* Card 3 — Programming & Development */}
            <div className="course-card">
              <div className="course-icon">💻</div>
              <h3>Programming & Development</h3>
              <p className="duration">Duration: 3 Months</p>
              <div className="learns text-left mb-4">
                <strong className="text-xs sm:text-sm text-slate-800 tracking-wide block mb-1">You Will Learn:</strong>
                <ul>
                  <li>C, C++, Java & Python</li>
                  <li>Data Structures & OOPs</li>
                  <li>Web Design (HTML, CSS)</li>
                  <li>Programming Logic & Arrays</li>
                </ul>
              </div>
              <div className="careers text-left">
                <strong className="text-xs sm:text-sm text-slate-800 tracking-wide block mb-1">Career Options:</strong>
                <div className="tags">
                  <span>Python & Java Developer</span>
                  <span>Software Trainee</span>
                  <span>Web Designer</span>
                  <span>Programmer</span>
                </div>
              </div>
              <a href="#/courses" onClick={onNavigateToCourses} className="view-btn">View Full Syllabus →</a>
            </div>

            {/* Card 4 — AutoCAD & Technical */}
            <div className="course-card">
              <div className="course-icon">📐</div>
              <h3>AutoCAD & Technical</h3>
              <p className="duration">Duration: 3 Months</p>
              <div className="learns text-left mb-4">
                <strong className="text-xs sm:text-sm text-slate-800 tracking-wide block mb-1">You Will Learn:</strong>
                <ul>
                  <li>2D Drafting & Schematics</li>
                  <li>3D CAD Projections</li>
                  <li>Engineering Command Standards</li>
                  <li>Real-world Blueprint Architecture</li>
                </ul>
              </div>
              <div className="careers text-left">
                <strong className="text-xs sm:text-sm text-slate-800 tracking-wide block mb-1">Career Options:</strong>
                <div className="tags">
                  <span>AutoCAD Designer</span>
                  <span>Civil Draftsman</span>
                  <span>Mechanical Designer</span>
                </div>
              </div>
              <a href="#/courses" onClick={onNavigateToCourses} className="view-btn">View Full Syllabus →</a>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <button
              onClick={onNavigateToCourses}
              className="cursor-pointer bg-[#1e40af] hover:bg-blue-800 text-white font-black text-xs sm:text-sm uppercase tracking-widest px-8 py-4.5 rounded-xl text-center transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              Explore All Courses
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* SECTION 6 — About Director */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ padding: '60px 24px', background: 'white' }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-center director-section">
          {/* Director Badge Column */}
          <div className="text-center shrink-0">
            <div 
              className="director-photo"
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                border: '4px solid #ffffff',
                boxShadow: '0 10px 25px -5px rgba(30, 64, 175, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: '#ffffff',
              }}
            >
              <div style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '0.05em' }}>RSR</div>
              <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9, marginTop: '2px' }}>Director</div>
            </div>
            <div style={{ fontWeight: 900, color: '#0f172a', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>RS Rawat</div>
            <div style={{ color: '#1e40af', fontSize: '13px', fontWeight: 700, marginTop: '2px' }}>Founder & Executive Director</div>
            <div style={{ color: '#64748b', fontSize: '12px', fontWeight: 600, marginTop: '1px' }}>29+ Years Academic Leadership</div>
          </div>
          
          {/* Message Text Column */}
          <div className="text-center md:text-left flex-1 max-w-xl">
            <div style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 700, display: 'inline-block', marginBottom: '12px' }}>
              MESSAGE FROM OUR DIRECTOR
            </div>
            <h3 style={{ color: '#0f172a', fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>
              "We have been building careers since 1996"
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.7', fontSize: '15px' }}>
              CCT Computer Education was started with one mission — to make quality computer education accessible and affordable for every student in South Delhi. Over 29 years, we have trained thousands of students who are today working as computer operators, graphic designers, accountants, and software developers across Delhi NCR. Our one-to-one computer ratio ensures every student gets personal attention. We don't just teach — we build careers.
            </p>
            
            <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }} className="md:justify-start director-stats">
              <div style={{ background: '#f0f9ff', padding: '12px 20px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontWeight: 900, color: '#1e40af', fontSize: '1.5rem' }}>29+</div>
                <div style={{ fontSize: '12px', color: '#374151' }}>Years Teaching</div>
              </div>
              <div style={{ background: '#f0f9ff', padding: '12px 20px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontWeight: 900, color: '#1e40af', fontSize: '1.5rem' }}>5000+</div>
                <div style={{ fontSize: '12px', color: '#374151' }}>Students Trained</div>
              </div>
              <div style={{ background: '#f0f9ff', padding: '12px 20px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontWeight: 900, color: '#1e40af', fontSize: '1.5rem' }}>S/145</div>
                <div style={{ fontSize: '12px', color: '#374151' }}>Govt. Registered</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION — Meet Our Expert Faculty */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="faculty-section border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto text-center space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight uppercase leading-none">
              Meet Our Expert Faculty
            </h2>
            <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Experienced and dedicated teachers committed to your success
            </p>
          </div>

          <div className="faculty-grid">
            {[
              {
                id: 'krishna',
                name: 'Krishna Nand Jha',
                title: 'Senior Computer Instructor',
                experience: '15+ Years Experience',
                initials: 'KJ',
                imageUrl: './krishna-sir.jpg',
              },
              {
                id: 'mrutyunjay',
                name: 'Mrutyunjay Sir',
                title: 'Computer Science Faculty',
                experience: '10+ Years Experience',
                initials: 'MJ',
                imageUrl: './mrutyunjay-sir.jpg',
              },
              {
                id: 'ram',
                name: 'Ram Sir',
                title: 'Technical Instructor',
                experience: '8+ Years Experience',
                initials: 'RS',
                imageUrl: './ram-sir.jpg',
              },
              {
                id: 'deepali',
                name: "Deepali Ma'am",
                title: 'Computer Applications Faculty',
                experience: '7+ Years Experience',
                initials: 'DM',
                imageUrl: './deepali-maam.jpg',
              },
              {
                id: 'nishu',
                name: "Nishu Ma'am",
                title: 'MS Office & DTP Instructor',
                experience: '6+ Years Experience',
                initials: 'NM',
                imageUrl: './nishu-maam.jpg',
              },
              {
                id: 'neelam',
                name: "Neelam Ma'am",
                title: 'Tally & Accounting Faculty',
                experience: '8+ Years Experience',
                initials: 'NL',
                imageUrl: './neelam-maam.jpg',
              },
              {
                id: 'nidhi',
                name: "Nidhi Ma'am",
                title: 'Graphics & Designing Faculty',
                experience: '5+ Years Experience',
                initials: 'ND',
                imageUrl: './nidhi-maam.jpg',
              },
            ].map((member) => (
              <div className="faculty-card" key={member.id}>
                <div className="faculty-photo" id={`photo-${member.id}`}>
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                    style={{ display: 'block' }}
                  />
                  <div className="photo-placeholder" style={{ display: 'none' }}>
                    {member.initials}
                  </div>
                </div>
                <div className="faculty-name">{member.name}</div>
                <div className="faculty-title">{member.title}</div>
                <div className="faculty-exp">{member.experience}</div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '14px', marginTop: '32px' }}>
            All our faculty members are experienced professionals dedicated to providing quality computer education.
          </p>
        </div>
      </motion.section>



      {/* SECTION 7.5 — Hardware & Computer Sales Services */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ padding: '60px 24px', background: 'white' }}
        className="border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-block bg-[#dbeafe] border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold text-[#1e40af] uppercase tracking-wider">
              Computer Sales & Hardware Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight uppercase leading-none">
              Used Laptop Sales & Repairing
            </h2>
            <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed">
              We provide quality tested computers and expert troubleshooting support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 — Used Laptop & Computer Sales */}
            <div className="course-card flex flex-col justify-between h-full bg-white border-2 border-[#bfdbfe] hover:border-[#1e40af] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
              <div>
                <div style={{ width: '56px', height: '56px', background: '#dbeafe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '28px' }} className="group-hover:scale-110 transition-transform">
                  🖥️
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                  <div style={{ background: '#1e40af', color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, display: 'inline-block', width: 'fit-content' }}>
                    Starting <span style={{ fontSize: '22px', fontWeight: '900', color: 'white' }}>₹6,500</span>
                  </div>
                  <div style={{ background: '#16a34a', color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, display: 'inline-block', width: 'fit-content' }}>
                    1 Month Testing Warranty
                  </div>
                </div>

                <h3 className="text-lg font-black text-[#0f172a] uppercase group-hover:text-[#1e40af] transition-colors mb-2">Used Laptop & Computer Sales</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold mb-4">
                  Quality tested used laptops and desktop computers available starting from just <span style={{ fontSize: '22px', fontWeight: '900', color: '#1e40af' }}>₹6,500</span>. All systems come with 1 month testing warranty. Perfect for students and home use.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest mt-auto">
                <span>Certified Outlet</span>
                <span className="text-[#1e40af] hover:underline cursor-pointer" onClick={onNavigateToLaptopSale}>View Inventory →</span>
              </div>
            </div>

            {/* Card 2 — Computer Repairing */}
            <div className="course-card flex flex-col justify-between h-full bg-white border-2 border-[#bfdbfe] hover:border-[#1e40af] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
              <div>
                <div style={{ width: '56px', height: '56px', background: '#dbeafe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '28px' }} className="group-hover:scale-110 transition-transform">
                  🔧
                </div>
                <h3 className="text-lg font-black text-[#0f172a] uppercase group-hover:text-[#1e40af] transition-colors mb-2">Computer Repairing</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold mb-4">
                  Pro hardware component repairs, display swaps, keyboard repairs, logic board trace tests, power failures.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest mt-auto">
                <span>Expert Technicians</span>
                <span className="text-[#1e40af] hover:underline cursor-pointer" onClick={onNavigateToServices}>Book Repair →</span>
              </div>
            </div>

            {/* Card 3 — Computer Maintenance & Service */}
            <div className="course-card flex flex-col justify-between h-full bg-white border-2 border-[#bfdbfe] hover:border-[#1e40af] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
              <div>
                <div style={{ width: '56px', height: '56px', background: '#dbeafe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '28px' }} className="group-hover:scale-110 transition-transform">
                  ⚙️
                </div>
                <h3 className="text-lg font-black text-[#0f172a] uppercase group-hover:text-[#1e40af] transition-colors mb-2">Computer Maintenance & Service</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold mb-4">
                  Regular technical servicing, malware checks, dust vacuums, thermal paste upgrades, and clean-up options.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest mt-auto">
                <span>Preventive Maintenance</span>
                <span className="text-[#1e40af] hover:underline cursor-pointer" onClick={onNavigateToServices}>Schedule Service →</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 8 — Google Reviews Showcase */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ padding: '60px 24px', background: '#f8fafc' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'white', border: '1px solid #bfdbfe', padding: '12px 24px', borderRadius: '999px', marginBottom: '32px' }}>
            <span style={{ fontSize: '24px' }}>⭐</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>4.7</span>
            <span style={{ color: '#374151', fontSize: '14px' }}>63+ Google Reviews</span>
          </div>
          
          <h2 style={{ color: '#0f172a', fontSize: '2rem', fontWeight: 800, marginBottom: '40px' }} className="uppercase tracking-tight">
            What Our Students Say
          </h2>
          
          <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {/* Review 1 */}
            <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', textAlign: 'left' }} className="shadow-sm review-card">
              <div style={{ color: '#fbbf24', fontSize: '18px', marginBottom: '8px' }}>★★★★★</div>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px', fontWeight: 500 }}>
                "The teaching method is very clear and easy to understand. The teacher explains every topic step by step, which helps in better learning. Doubts are also solved properly."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#dbeafe', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 700, color: '#1e40af' }}>I</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px' }}>Ishant Yadav</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>Google Review</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', textAlign: 'left' }} className="shadow-sm review-card">
              <div style={{ color: '#fbbf24', fontSize: '18px', marginBottom: '8px' }}>★★★★★</div>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px', fontWeight: 500 }}>
                "Hello I''m Abhishek. I am taking computer classes from CCT Computer Education. Computer is taught very well here. 1:1 computer setup and personal doubt removal is really fantastic."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#dbeafe', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 700, color: '#1e40af' }}>A</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px' }}>Abhishek</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>Google Review</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', textAlign: 'left' }} className="shadow-sm review-card">
              <div style={{ color: '#fbbf24', fontSize: '18px', marginBottom: '8px' }}>★★★★★</div>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px', fontWeight: 500 }}>
                "The teacher has great knowledge. Great center for all. Come and enjoy learning. Affordable course fees with premium quality support."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#dbeafe', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 700, color: '#1e40af' }}>G</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px' }}>Gopal Yadav</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>Google Review</div>
                </div>
              </div>
            </div>
          </div>

          <a 
            href="https://www.google.com/maps/place/CCT+Computer+Education/@28.5209673,77.2287807,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce190013cb139:0xa1c2c0080c2cc2b0!8m2!3d28.5209673!4d77.2287807!16s%2Fg%2F12hn29_kr?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', marginTop: '24px', background: 'white', border: '1.5px solid #1e40af', color: '#1e40af', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}
            className="hover:bg-blue-50 transition"
          >
            Read All 63 Reviews on Google →
          </a>
        </div>
      </motion.section>

      {/* SECTION 8.5 — Spotlight Gallery Sneak Peek */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 sm:px-12 bg-white border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="inline-block text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono bg-[#dbeafe] border border-blue-200 px-3.5 py-1.5 rounded-full">
              <Camera className="h-3 w-3 inline-block mr-1 -mt-0.5" /> STUDIO SPOTLIGHT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight">
              Our Gallery
            </h2>
            <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              A glimpse inside our modern training laboratories, interactive lectures, and proud certification award ceremonies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Featured Gallery Image */}
            <div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-md aspect-[16/10] sm:aspect-[16/9] cursor-pointer" onClick={onNavigateToGallery}>
              <img 
                src="https://i.ibb.co/YFmJN2mv/IMG-20260624-WA0013.jpg" 
                alt="Modern Computer Laboratory at CCT" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono text-blue-300 font-black uppercase tracking-widest">CCT COMPUTER EDUCATION</span>
                <h4 className="text-white text-lg font-bold uppercase mt-1">Our Modern Training Laboratory & Infrastructure</h4>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={onNavigateToGallery}
              className="cursor-pointer bg-[#1e40af] hover:bg-blue-800 text-white font-black text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-xl text-center transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              View Our Gallery
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* SECTION 9 — Career Opportunities */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ padding: '60px 24px', background: 'white' }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight">
              What Will You Become After Our Course?
            </h2>
            <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed">
              Our students are working across Delhi NCR in these roles
            </p>
          </div>

          <div className="career-grid grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {careerOptions.map((opt, i) => (
              <div 
                key={i} 
                style={{
                  background: 'white',
                  border: '1px solid #bfdbfe',
                  borderRadius: '12px',
                  padding: '20px 16px',
                  textAlign: 'center',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#0f172a'
                }}
                className="shadow-sm hover:border-[#1e40af] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center gap-2 career-card"
              >
                <span className="text-2xl">{opt.icon}</span>
                <span>{opt.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 10 — Local SEO Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ padding: '40px 24px', background: '#1e40af' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px' }} className="uppercase tracking-tight">
            Computer Training Institute in Madangir, South Delhi
          </h2>
          <p style={{ color: '#bfdbfe', fontSize: '14px', lineHeight: '1.7', fontWeight: 500 }}>
            CCT Center for Computer Training is located at DDA Flats, Madangir, New Delhi. We serve students from Madangir, Ambedkar Nagar, Sangam Vihar, Govindpuri, Khanpur, Tughlakabad, Badarpur and nearby areas of South Delhi. Best computer institute near Madangir market.
          </p>
          <a 
            href="https://www.google.com/maps/place/CCT+Computer+Education/@28.5209673,77.2287807,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce190013cb139:0xa1c2c0080c2cc2b0!8m2!3d28.5209673!4d77.2287807!16s%2Fg%2F12hn29_kr?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', marginTop: '16px', background: 'white', color: '#1e40af', padding: '10px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '14px' }}
            className="hover:bg-slate-50 transition"
          >
            📍 Get Directions on Google Maps
          </a>
        </div>
      </motion.section>

      {/* SECTION 11 — FAQ Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ padding: '60px 24px', background: 'white' }}
        className="border-b border-slate-100"
      >
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-[#bfdbfe] rounded-xl overflow-hidden bg-white transition duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-black text-[#0f172a] uppercase tracking-wide text-xs sm:text-sm hover:bg-[#f0f9ff]/50 transition-colors"
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-[#1e40af] shrink-0 ml-3" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[#1e40af] shrink-0 ml-3" />
                    )}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="p-5 border-t border-[#bfdbfe] bg-[#f0f9ff]/30 text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* SECTION 12 — Final CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ padding: '60px 24px', background: '#f0f9ff', textAlign: 'center' }}
      >
        <h2 style={{ color: '#0f172a', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '8px' }} className="uppercase tracking-tight leading-none">
          Ready to Start Your Computer Career?
        </h2>
        <p style={{ color: '#374151', marginBottom: '32px', fontWeight: 600 }}>
          Join thousands of students who built their career with CCT since 1996
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="#enquiry-form" 
            onClick={handleScrollToForm}
            style={{ background: '#1e40af', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '16px' }}
            className="hover:bg-blue-800 transition shadow-sm text-center"
          >
            Book Free Demo Class
          </a>
          <a 
            href="tel:8527208085" 
            style={{ background: 'white', color: '#1e40af', border: '2px solid #1e40af', padding: '16px 32px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '16px' }}
            className="hover:bg-blue-50 transition text-center"
          >
            Call: 8527208085
          </a>
          <a 
            href="https://wa.me/918527208085" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#25d366', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '16px' }}
            className="hover:bg-green-600 transition text-center"
          >
            WhatsApp Us
          </a>
        </div>
      </motion.section>

    </div>
  );
}
