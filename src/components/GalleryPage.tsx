import React, { useState } from 'react';
import { Camera, MapPin, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'labs' | 'awards' | 'lectures' | 'projects';
  imageUrl: string;
  description: string;
  dateStr: string;
  locationName: string;
}

export default function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const activeCategory = 'all';

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Our Modern Computing Laboratory',
      category: 'labs',
      imageUrl: 'https://i.ibb.co/rK9xwBjB/IMG-20260624-WA0013-1.jpg',
      description: 'Fully equipped practical laboratory setup where students engage in hands-on programming, web design, and hardware troubleshooting.',
      dateStr: 'June 2026',
      locationName: 'Madangir HQ, New Delhi'
    },
    {
      id: 'g2',
      title: 'Advanced Computer Lab Workstations',
      category: 'labs',
      imageUrl: 'https://i.ibb.co/4ZYTB5ww/IMG-20260624-WA0013-2.jpg',
      description: 'Active learning environment with custom setups for web development, software engineering, and database management.',
      dateStr: 'June 2026',
      locationName: 'Madangir HQ, New Delhi'
    },
    {
      id: 'g3',
      title: 'Interactive Learning & Practical Session',
      category: 'lectures',
      imageUrl: 'https://i.ibb.co/tphngx5h/IMG-20260624-WA0013-3.jpg',
      description: 'CCT instructors guiding students individually through software tools, accounting setups, and visual interface designing.',
      dateStr: 'June 2026',
      locationName: 'Main Lecture Hall'
    },
    {
      id: 'g4',
      title: 'Student Hands-on Lab Practice',
      category: 'labs',
      imageUrl: 'https://i.ibb.co/Mk6QNtfS/IMG-20260624-WA0013-4.jpg',
      description: 'Individual computer workstations allowing students to master Tally Prime, Python Coding, and basic-to-advanced software programs.',
      dateStr: 'June 2026',
      locationName: 'Computer Wing Alpha'
    },
    {
      id: 'g5',
      title: 'Classroom Instruction and Lab Setup',
      category: 'lectures',
      imageUrl: 'https://i.ibb.co/yn9XhrGd/IMG-20260624-WA0013-5.jpg',
      description: 'Dedicated training space designed to promote peer-to-peer discussions and interactive coding bootcamps.',
      dateStr: 'June 2026',
      locationName: 'Madangir HQ, New Delhi'
    },
    {
      id: 'g6',
      title: 'Expert Hardware & System Diagnostics',
      category: 'labs',
      imageUrl: 'https://i.ibb.co/Ld6bTXDh/IMG-20260624-WA0013-6.jpg',
      description: 'Specialized lab space where computer servicing, system diagnostics, and hardware components are tested by tech experts.',
      dateStr: 'June 2026',
      locationName: 'Technical Services Unit'
    },
    {
      id: 'g7',
      title: 'Tally Prime accounting & GST practicals',
      category: 'projects',
      imageUrl: 'https://i.ibb.co/7tKJBMcV/IMG-20260624-WA0013-7.jpg',
      description: 'Students resolving accounting sheets, managing business vouchers, and applying taxation modules.',
      dateStr: 'June 2026',
      locationName: 'FinTech Lab Wing'
    },
    {
      id: 'g8',
      title: 'CCT Computer Training Learning Hub',
      category: 'lectures',
      imageUrl: 'https://i.ibb.co/MyHHkkv6/IMG-20260624-WA0013.jpg',
      description: 'Spacious workspace for full-stack students creating modern UI projects, React applications, and interactive code modules.',
      dateStr: 'June 2026',
      locationName: 'Main Learning Hub'
    },
    {
      id: 'g9',
      title: 'Academic Achievement Recognition',
      category: 'awards',
      imageUrl: 'https://i.ibb.co/j2Gcz3T/IMG-20260624-WA0014.jpg',
      description: 'Honoring and awarding academic excellence to students who completed rigorous project modules and certified exams.',
      dateStr: 'June 2026',
      locationName: 'Main Conference Room'
    },
    {
      id: 'g10',
      title: 'Graduation Certification Handover',
      category: 'awards',
      imageUrl: 'https://i.ibb.co/vCLTkjRg/IMG-20260624-WA0015.jpg',
      description: 'Proud students receiving their Delhi Government registered certificates after completing professional training courses.',
      dateStr: 'June 2026',
      locationName: 'Ceremony Auditorium'
    },
    {
      id: 'g11',
      title: 'Proud CCT Certified Professionals',
      category: 'awards',
      imageUrl: 'https://i.ibb.co/7dBRfnWw/IMG-20260624-WA0017.jpg',
      description: 'Group photo of successful graduates displaying their accredited professional training credentials.',
      dateStr: 'June 2026',
      locationName: 'Front Reception'
    }
  ];

  // Filters logic
  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    const nextVal = selectedIdx - 1 < 0 ? filteredItems.length - 1 : selectedIdx - 1;
    setSelectedIdx(nextVal);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    const nextVal = selectedIdx + 1 >= filteredItems.length ? 0 : selectedIdx + 1;
    setSelectedIdx(nextVal);
  };

  return (
    <div className="bg-[#fcfaff] min-h-screen py-16 px-6 sm:px-12" id="gallery-page-root">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Block with luxurious formatting */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-indigo-600 text-xs font-black uppercase tracking-wider font-sans bg-indigo-50 px-3.5 py-1 rounded-full flex items-center gap-1.5 w-fit mx-auto">
            <Camera className="h-3.5 w-3.5" /> Studio Spotlight
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-display">
            Our Learning Environment
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
            Explore our classrooms, high-tech facilities, and nurturing environment designed for optimal focus and exceptional career outcomes.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedIdx(index)}
              className="bg-white p-5 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition duration-300 cursor-pointer relative"
              id={`gallery-item-${item.id}`}
            >
              {/* Media image container with elegant rounded card and border from screenshot */}
              <div className="overflow-hidden rounded-[1.8rem] aspect-[4/3] bg-slate-50 relative group">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Beautiful Dark Gradient Lens Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="h-12 w-12 bg-white/95 rounded-full flex items-center justify-center text-indigo-600 shadow-lg scale-75 group-hover:scale-100 transition duration-300">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Lightbox Frame */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
              className="fixed inset-0 bg-slate-950/95 z-[9999] flex flex-col items-center justify-center p-4 backdrop-blur-md"
              id="gallery-lightbox-overlay"
            >
              {/* Close Button top-right */}
              <button
                type="button"
                onClick={() => setSelectedIdx(null)}
                className="absolute top-6 right-6 h-12 w-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition border border-white/10"
                title="Close overlay [ESC]"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev Key left overlay */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-4 sm:left-8 h-12 w-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition border border-white/10"
                title="Previous Image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Main lightbox modal content */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full bg-slate-900 overflow-hidden rounded-3xl border border-slate-800 flex flex-col md:flex-row shadow-2xl"
              >
                {/* Graphics */}
                <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[500px]">
                  <img
                    src={filteredItems[selectedIdx].imageUrl}
                    alt={filteredItems[selectedIdx].title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Text Context columns */}
                <div className="md:w-2/5 p-6 sm:p-8 text-left uppercase-none space-y-4 flex flex-col justify-between bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800">
                  <div className="space-y-3">
                    <span className="text-[10px] text-indigo-400 font-extrabold uppercase tracking-widest bg-indigo-500/10 px-2.5 py-1 rounded">
                      {filteredItems[selectedIdx].category === 'labs' && 'Advanced Lab WORKSTATION'}
                      {filteredItems[selectedIdx].category === 'awards' && 'ISO Graduate CITATION'}
                      {filteredItems[selectedIdx].category === 'lectures' && 'Syllabus Training HALL'}
                      {filteredItems[selectedIdx].category === 'projects' && 'Development SANDBOX'}
                    </span>
                    <h2 className="text-md sm:text-lg font-black text-white leading-tight font-display tracking-tight">
                      {filteredItems[selectedIdx].title}
                    </h2>
                    <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                      {filteredItems[selectedIdx].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 space-y-2.5 text-[11px] text-slate-400 font-bold font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-indigo-400" />
                      <span>{filteredItems[selectedIdx].locationName}</span>
                    </div>
                    <div>Recorded: {filteredItems[selectedIdx].dateStr}</div>
                  </div>
                </div>
              </motion.div>

              {/* Next Key right overlay */}
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 sm:right-8 h-12 w-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition border border-white/10"
                title="Next Image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Floating index count footer overlay */}
              <div className="absolute bottom-6 bg-white/10 px-4 py-1.5 rounded-full text-slate-300 text-xs font-bold font-mono border border-white/10">
                Image {selectedIdx + 1} of {filteredItems.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
