import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { fetchMainCourses, fetchCrashCourses } from '../services/googleSheets';
import { SheetCourse, SheetCrashCourse } from '../types';

export default function CoursesView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'career' | 'design' | 'programming' | 'general' | 'cad' | 'hardware' | 'special'>('all');
  const [courses, setCourses] = useState<SheetCourse[]>([]);
  const [crashCourses, setCrashCourses] = useState<SheetCrashCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    async function loadData() {
      try {
        const [mainData, crashData] = await Promise.all([
          fetchMainCourses(),
          fetchCrashCourses()
        ]);
        if (active) {
          setCourses(mainData);
          setCrashCourses(crashData);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error loading courses:', err);
        if (active) {
          setIsLoading(false);
        }
      }
    }
    loadData();
    return () => {
      active = false;
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'ai', name: 'AI & Data Science' },
    { id: 'career', name: 'Career Courses' },
    { id: 'design', name: 'Designing Courses' },
    { id: 'programming', name: 'Programming Tech' },
    { id: 'general', name: 'General/Office' },
    { id: 'cad', name: 'AutoCAD system' },
    { id: 'hardware', name: 'Hardware Repair' },
    { id: 'special', name: 'College/CBSE Prep' },
  ];

  const courseGroups = [
    { id: 'ai', name: 'AI & Data Science', list: courses.filter(c => c.categoryId === 'ai') },
    { id: 'career', name: 'Career Courses', list: courses.filter(c => c.categoryId === 'career') },
    { id: 'design', name: 'Designing Courses', list: courses.filter(c => c.categoryId === 'design') },
    { id: 'programming', name: 'Programming Languages', list: courses.filter(c => c.categoryId === 'programming') },
    { id: 'cad', name: 'AutoCAD Courses', list: courses.filter(c => c.categoryId === 'cad') },
    { id: 'general', name: 'General Courses', list: courses.filter(c => c.categoryId === 'general') },
    { id: 'hardware', name: 'Hardware Courses', list: courses.filter(c => c.categoryId === 'hardware') },
    { id: 'special', name: 'Special Courses', list: courses.filter(c => c.categoryId === 'special') },
  ];

  const filteredGroups = courseGroups
    .map(group => {
      const filteredList = group.list.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              course.topics.some((topic) => topic.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = activeTab === 'all' || group.id === activeTab;
        return matchesSearch && matchesCategory;
      });
      return { ...group, list: filteredList };
    })
    .filter(group => group.list.length > 0);

  if (isLoading) {
    return (
      <div className="bg-white text-slate-800 min-h-screen py-12 px-5 sm:py-20 sm:px-12 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-4 border-[#1e40af] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs sm:text-sm text-slate-500 font-mono uppercase tracking-widest font-black animate-pulse">
            Loading Course Directory...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 px-5 sm:py-20 sm:px-12 selection:bg-[#1e40af] selection:text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Top Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono bg-[#dbeafe] border border-blue-200 px-3.5 py-1.5 rounded-full">
            CCT COURSE DIRECTORY
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            Learn Certified Computations
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] leading-relaxed font-semibold">
            Explore industry-vetted courses mapped to central metrics. Choose individual crash items or dual master-diploma programs.
          </p>
          <div className="w-16 h-1 bg-[#1e40af] mx-auto rounded-full mt-4" />
        </div>

        {/* Dynamic Courses Page Banner Image - Wide-aspect landscape with dark overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-3xl overflow-hidden shadow-xl aspect-[21/9] sm:aspect-[24/10] md:aspect-[3/1] max-h-80 w-full bg-blue-100 group border-4 border-white"
        >
          {/* Subtle Dark Overlay (rgba 0,0,0,0.3) so text and banner contrast stays beautiful */}
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
            alt="Wide modern computer training laboratory with rows of workstations and Indian students learning diligently"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </motion.div>

        {/* Filters and Inputs row */}
        <div className="bg-[#f8fafc] border border-slate-200 p-5 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-4 shadow-sm w-full">
          <div className="relative w-full lg:w-96">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4.5 w-4.5 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search topics (e.g. Photoshop, Excel, Tally)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition placeholder-slate-400 min-h-[44px]"
            />
          </div>

          {/* Quick Categories filter */}
          <div className="flex flex-wrap gap-1.5 justify-center w-full lg:w-auto">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-2 rounded-lg text-[9px] font-black uppercase tracking-wider transition min-h-[36px] ${
                  activeTab === tab.id
                    ? 'bg-[#1e40af] text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-[#1e40af]'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Style tag representing the requested css styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          .course-category {
            background: #f0f9ff;
            border: 1px solid #bfdbfe;
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 24px;
          }

          .course-category h3 {
            color: #1e40af;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #1e40af;
          }

          .course-category ul {
            list-style: none;
            padding: 0;
          }

          .course-category ul li {
            padding: 12px 0;
            color: #374151;
            border-bottom: 1px solid #e2e8f0;
            font-size: 15px;
          }

          .course-category ul li:before {
            content: "✓ ";
            color: #1e40af;
            font-weight: bold;
          }
        ` }} />

        {/* Courses list results rendering using .course-category style */}
        {filteredGroups.length > 0 ? (
          <div className="space-y-6 w-full">
            {filteredGroups.map((group, gIdx) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: gIdx * 0.05 }}
                className="course-category text-left"
              >
                <h3 className="uppercase tracking-tight font-black">{group.name}</h3>
                <ul>
                  {group.list.map((course, idx) => (
                    <li key={idx}>
                      <div className="inline-flex flex-col md:flex-row md:items-center justify-between w-full gap-3 pl-1 text-[#374151]">
                        <div className="space-y-1 sm:space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-extrabold text-[#0f172a] text-md sm:text-base uppercase tracking-tight">{course.title}</span>
                            <span className="inline-block bg-white text-[#1e40af] text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-blue-200">
                              {course.tag}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 items-center">
                            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">Syllabus Chapters:</span>
                            {course.topics.map((topic, ti) => (
                              <span key={ti} className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-600 font-semibold">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right flex flex-wrap items-center gap-3 self-start md:self-center">
                          <span className="text-[10px] font-extrabold text-slate-400 font-mono hidden sm:inline">ESTD 1996</span>
                          <span className="text-xs bg-blue-50 text-[#1e40af] font-black py-1 px-3 rounded-full border border-blue-200 uppercase tracking-tight">
                            {course.duration}
                          </span>
                          <a 
                            href={course.enrollLink && course.enrollLink !== '#' ? course.enrollLink : 'tel:8527208085'}
                            className="bg-[#1e40af] hover:bg-blue-800 text-white font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-md transition duration-150 min-h-[32px] inline-flex items-center justify-center cursor-pointer"
                            target={course.enrollLink && course.enrollLink !== '#' ? '_blank' : undefined}
                            rel={course.enrollLink && course.enrollLink !== '#' ? 'noopener noreferrer' : undefined}
                          >
                            Enroll
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-[#f8fafc] border border-slate-205 p-12 rounded-3xl text-center space-y-4 max-w-md mx-auto w-full">
            <span className="text-3xl">🔍</span>
            <h3 className="text-md font-black text-[#0f172a] uppercase">No Programs Found</h3>
            <p className="text-xs text-[#374151] font-semibold leading-relaxed">
              We couldn't match any chapters for "{searchTerm}". Please check spelling or select different filter categories.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setActiveTab('all'); }}
              className="mt-4 bg-[#1e40af] text-white font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-[#1d4ed8] transition min-h-[44px]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Section 8 — Crash Courses tabular sheet */}
        <div className="bg-white border border-slate-150 rounded-3xl p-5 sm:p-10 space-y-8 text-left mt-12 w-full">
          <div className="space-y-2 border-l-2 border-[#1e40af] pl-4">
            <span className="text-[#1e40af] text-[10px] font-mono font-black uppercase tracking-widest">RAPID LEARNING SYSTEM</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] uppercase tracking-tight">Module Crash Courses Directory</h2>
            <p className="text-xs text-[#374151] font-semibold leading-relaxed max-w-3xl">
              Need to master a specific layout software or bookkeeping system rapidly? Check our fast-track module classes structure. Select your parameter and register today.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-150 rounded-2xl w-full">
            <table className="w-full text-left border-collapse min-w-[300px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-slate-200">
                  <th className="p-3 sm:p-5 text-xs font-black text-[#0f172a] uppercase tracking-wider font-mono">Individual Course Name</th>
                  <th className="p-3 sm:p-5 text-xs font-black text-[#0f172a] uppercase tracking-wider font-mono text-right">Standard Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {crashCourses.map((item, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-blue-50/30 transition duration-150"
                  >
                    <td className="p-3 sm:p-5 text-xs sm:text-sm font-bold text-slate-850 uppercase">{item.name}</td>
                    <td className="p-3 sm:p-5 text-xs sm:text-sm text-right font-mono font-black text-[#1e40af]">{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#f0f9ff] border border-blue-200 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="text-xs font-black text-[#0f172a] uppercase">Looking for custom CBSE or Vocational timelines?</h4>
                <p className="text-[10px] text-[#374151] font-medium leading-relaxed">Our trainers construct tailored classroom slots according to student metrics.</p>
              </div>
            </div>
            <a 
              href="tel:8527208085" 
              className="bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-black text-[10px] uppercase tracking-widest px-5 py-3 rounded-lg transition duration-150 shrink-0 text-center w-full sm:w-auto min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              Call Registrar: 8527208085
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
