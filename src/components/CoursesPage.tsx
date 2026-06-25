import React, { useState } from 'react';
import { Search, Star, Clock, Check, ChevronDown, ChevronUp, Tag, HelpCircle, ArrowRight, Award } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { Course } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CoursesPageProps {
  onAddToCart: (course: Course) => void;
  onBookDemo: (courseTitle?: string) => void;
  enrolledIds: string[];
}

export default function CoursesPage({ onAddToCart, onBookDemo, enrolledIds }: CoursesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'office' | 'diploma' | 'design' | 'advanced' | 'crash'>('all');
  const [expandedSyllabusId, setExpandedSyllabusId] = useState<string | null>(null);

  // Group categorization conditions
  const getCategoryClass = (item: Course) => {
    const id = item.id;
    if (activeCategory === 'all') return true;
    if (activeCategory === 'office' && (id === 'diploma_office' || id === 'special_office' || id === 'advance_tally' || id === 'basic_computer' || id === 'office_management' || id === 'diploma_accounting')) return true;
    if (activeCategory === 'diploma' && (id === 'master_software' || id === 'diploma_office' || id === 'diploma_dtp' || id === 'special_dtp' || id === 'diploma_accounting')) return true;
    if (activeCategory === 'design' && (id === 'graphics_multimedia' || id === 'web_designing' || id === 'diploma_dtp' || id === 'special_dtp')) return true;
    if (activeCategory === 'advanced' && (id === 'master_software' || id === 'autocad' || id === 'hardware' || id === 'c_cpp' || id === 'advance_tally' || id === 'python_programming' || id === 'java_programming')) return true;
    if (activeCategory === 'crash' && (id === 'special_office' || id === 'special_dtp' || id === 'c_cpp' || id === 'python_programming')) return true;
    return false;
  };

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = getCategoryClass(course);
    return matchesSearch && matchesCategory;
  });

  const toggleSyllabusExpansion = (id: string) => {
    setExpandedSyllabusId(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-[#fcfaff] min-h-screen py-16 px-6 sm:px-12" id="courses-page-root">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Dynamic header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-indigo-600 text-xs font-black uppercase tracking-wider font-sans bg-indigo-50 px-3 py-1 rounded-full">
            Complete Curriculum Catalog (ESTD 1996)
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-display">
            Explore All IT Training Programs
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
            Search and select ISO 9001:2015 approved certificates, diplomas, and high-concurrency coding tracks. Expand card chapters to inspect syllabus topics in detail before reservation.
          </p>
        </div>

        {/* Categories Tabs & Search controls */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center justify-between bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          
          {/* Tabs flow */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Trajectories' },
              { id: 'office', label: 'Office & Tally Accounting' },
              { id: 'diploma', label: 'Diplomas (DCA / DTP)' },
              { id: 'design', label: 'Creative Design' },
              { id: 'advanced', label: 'Advanced Tech & Cyber' },
              { id: 'crash', label: 'Spoken / Python Crash' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as any);
                  setExpandedSyllabusId(null);
                }}
                className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition ${
                  activeCategory === tab.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10'
                    : 'bg-slate-50 border border-slate-100 text-slate-500 hover:text-slate-800 hover:border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search box right */}
          <div className="relative min-w-[280px]">
            <input
              type="text"
              placeholder="Search chapters or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3.5 pl-10 text-xs focus:outline-none focus:border-indigo-500 font-medium"
            />
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
          </div>
        </div>

        {/* Dynamic Items count ticker */}
        <div className="text-left text-xs font-mono font-bold text-slate-500">
          Showing <span className="text-indigo-600 font-extrabold font-sans">{filteredCourses.length}</span> programs matched coordinates
        </div>

        {/* Master Catalog Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => {
            const isReserved = enrolledIds.includes(course.id);
            const isSyllabusExpanded = expandedSyllabusId === course.id;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden hover:border-slate-200 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group relative"
                id={`catalog-detail-${course.id}`}
              >
                {/* Image layout overlay with duration badge */}
                <div className="h-52 overflow-hidden bg-slate-100 relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white text-[9px] px-2.5 py-1.5 rounded-full font-black uppercase tracking-wider shadow-md">
                    {course.duration}
                  </div>
                  {(course.id === 'c_cpp' || course.id === 'python_programming' || course.id === 'java_programming') && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-slate-900 text-[9px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider shadow-xs animate-pulse">
                      Special programming
                    </div>
                  )}
                </div>

                {/* Information Frame */}
                <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Stars ratings */}
                    <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                      <Star className="h-4 w-4 fill-amber-500 shrink-0" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400 font-semibold">({course.reviewsCount}+ graduates)</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-md sm:text-lg font-black text-slate-950 tracking-tight leading-snug">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold block">
                      {course.description}
                    </p>

                    {/* Tags clouds */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Accordion syllabus drawer */}
                  <div className="border-t border-b border-slate-50 py-3">
                    <button
                      onClick={() => toggleSyllabusExpansion(course.id)}
                      className="cursor-pointer w-full flex items-center justify-between text-xs font-bold text-indigo-600 hover:text-indigo-800 transition"
                      title="Inspect full outline structure chapters"
                    >
                      <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide">
                        <Award className="h-4 w-4 stroke-[2]" /> Inspect Core Syllabus Topics
                      </span>
                      {isSyllabusExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    <AnimatePresence>
                      {isSyllabusExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden mt-3 text-left bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-2"
                        >
                          <div className="text-[9px] uppercase font-bold text-slate-400 tracking-widest border-b border-slate-200/55 pb-1">
                            Syllabus Chapters In-Depth
                          </div>
                          <ul className="space-y-1.5">
                            {course.syllabus.map((pt, pIdx) => (
                              <li key={pIdx} className="flex gap-2 items-start text-xs text-slate-600 leading-tight">
                                <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="text-[10px] text-indigo-800 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/30">
                            ✨ Includes practical computer labs terminal file sets, portfolio projects review, and certification viva counseling.
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Cash checkout & Interactive Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      {course.originalPrice && (
                        <span className="text-[10px] text-slate-400 block line-through">
                          ₹{course.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      <span className="text-xl font-black text-slate-900 leading-none">
                        ₹{course.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => onBookDemo(course.title)}
                        className="cursor-pointer bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 text-[10px] font-bold py-2 px-3 rounded-xl transition"
                        title="Book physical consulting timing at our center"
                      >
                        Book Demo
                      </button>

                      <button
                        onClick={() => onAddToCart(course)}
                        disabled={isReserved}
                        className={`cursor-pointer rounded-xl px-4 py-2 text-[11px] font-extrabold transition flex items-center gap-1.5 uppercase tracking-wide ${
                          isReserved
                            ? 'bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/10'
                        }`}
                        id={`catalog-reserve-btn-${course.id}`}
                      >
                        {isReserved ? 'Reserved' : 'Reserve Seat'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic FAQ sub-banner section to enrich Course page specifically */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest font-mono">Academic FAQs</span>
            <h3 className="text-md sm:text-lg font-black text-slate-950 tracking-tight leading-tight">Common Admission Queries</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              Read quick answers to timing adjustments, certification criteria, and local Delhi batch approvals.
            </p>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-700 font-semibold">
            <div className="space-y-1.5">
              <h4 className="font-extrabold text-slate-950 text-xs flex items-center gap-1">
                <span className="text-indigo-600">Q.</span> Are timings flexible?
              </h4>
              <p className="text-slate-600 leading-normal pl-4">
                Yes! We offer morning, afternoon, and dedicated weekend computer sandbox batches for college students and working professionals.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-extrabold text-slate-950 text-xs flex items-center gap-1">
                <span className="text-indigo-600">Q.</span> Will I get physical certificates?
              </h4>
              <p className="text-slate-600 leading-normal pl-4">
                Yes. Under our ISO 9001:2015 registration, all programs conclude with authentic physical certificates, student file transcripts, and scorecards.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-extrabold text-slate-950 text-xs flex items-center gap-1">
                <span className="text-indigo-600">Q.</span> Is there installment support?
              </h4>
              <p className="text-slate-600 leading-normal pl-4">
                Yes. For intensive certifications like MERN full-stack, fees can be deferred via easy monthly installments. Talk to a counselor!
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-extrabold text-slate-950 text-xs flex items-center gap-1">
                <span className="text-indigo-600">Q.</span> Where is the computer lab located?
              </h4>
              <p className="text-slate-600 leading-normal pl-4">
                Our main high-density training lab is located at Lal Bahadur Shastri Marg, Madangir, New Delhi. Direct walk-ins are welcome for campus tours.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
