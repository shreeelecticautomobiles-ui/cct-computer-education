import React, { useState } from 'react';
import { Award, BookOpen, Star, Linkedin, Mail, Calendar, Sparkles, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

interface FacultyMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string[];
  education: string;
  bio: string;
  imageUrl: string;
  rating: number;
}

interface FacultyPageProps {
  onBookDemo: (courseTitle?: string) => void;
}

export default function FacultyPage({ onBookDemo }: FacultyPageProps) {
  const [activeTrack, setActiveTrack] = useState<'all' | 'code' | 'accounts' | 'design'>('all');

  const faculty: FacultyMember[] = [
    {
      id: 'f1',
      name: 'Mrs. Sunita Pandey',
      role: 'Director & Foundational Systems Head',
      experience: '25+ Years of Academic Leadership',
      specialty: ['MS Office Suite', 'Computer Fundamentals', 'DCA Operations'],
      education: 'MCA, ISO-Certified Educational Lead',
      bio: 'Pioneered computing education frameworks since 1996. Guided over 15,000 students to secure essential government and corporate office roles.',
      imageUrl: 'https://images.unsplash.com/photo-1580894732444-8febeb78ec3e?auto=format&fit=crop&q=80&w=400',
      rating: 4.9,
    },
    {
      id: 'f2',
      name: 'Mr. Divyansh Pandey',
      role: 'Lead Python, AI & Full Stack Architect',
      experience: '8+ Years Software Development',
      specialty: ['React 19 & MERN Stack', 'Python Scripting', 'Prompt Engineering'],
      education: 'B.Tech in Computer Science, Certified AI Consultant',
      bio: 'Core software author specializing in reactive design systems. Teaches hands-on API deployment, backend relationships, and custom prompt loops.',
      imageUrl: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=400',
      rating: 5.0,
    },
    {
      id: 'f3',
      name: 'CA Ramesh Chandra',
      role: 'Senior Tally Prime & GST Assessor',
      experience: '18+ Years Corporate Taxation',
      specialty: ['Tally Prime 4.0', 'GST Compliance', 'E-Way Billing & TDS'],
      education: 'FCA (Chartered Accountant), Tax Audit Consultant',
      bio: 'Active corporate financial auditor. Focuses strictly on actual industry ledger audits, inventory accounts, and automated profit & loss sheet generation.',
      imageUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400',
      rating: 4.8,
    },
    {
      id: 'f4',
      name: 'Ms. Deepika Chawla',
      role: 'Head of Desktop Publishing & Design',
      experience: '11+ Years Vector Design',
      specialty: ['Adobe Photoshop', 'CorelDraw Layouts', 'Adobe Illustrator'],
      education: 'BFA (Bachelor of Fine Arts) in Communication Design',
      bio: 'Creative design supervisor focusing on print pre-press setup, packaging designs, vector illustration paths, and digital brand identities.',
      imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=400',
      rating: 4.9,
    }
  ];

  const getTrackMatches = (f: FacultyMember) => {
    if (activeTrack === 'all') return true;
    if (activeTrack === 'code' && (f.id === 'f2' || f.id === 'f1')) return true;
    if (activeTrack === 'accounts' && f.id === 'f3') return true;
    if (activeTrack === 'design' && (f.id === 'f4' || f.id === 'f2')) return true;
    return false;
  };

  const filteredFaculty = faculty.filter(getTrackMatches);

  return (
    <div className="bg-[#fcfaff] min-h-screen py-16 px-6 sm:px-12" id="faculty-page-root">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Elegant top banner */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-indigo-600 text-xs font-black uppercase tracking-wider bg-indigo-50 px-3.5 py-1 rounded-full flex items-center gap-1.5 w-fit mx-auto">
            <Sparkles className="h-3.5 w-3.5" /> Direct Mentorship Program
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-display">
            Meet Our Expert Faculty
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
            All CCT Computer Education faculty hold advanced industry degrees and technical vendor certifications. Learn from practicing accountants, designers, and developers.
          </p>
        </div>

        {/* Categories selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-100 pb-3">
          {(['all', 'code', 'accounts', 'design'] as const).map((track) => (
            <button
              key={track}
              onClick={() => setActiveTrack(track)}
              className={`cursor-pointer px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                activeTrack === track
                  ? 'bg-[#5c3cbc] text-white shadow-md shadow-indigo-500/15 font-black'
                  : 'bg-white border border-slate-100 text-slate-500 hover:text-slate-800 hover:border-slate-200'
              }`}
            >
              {track === 'all' && 'All Educators'}
              {track === 'code' && 'Code & Computer Tech'}
              {track === 'accounts' && 'Finance & GST Accounting'}
              {track === 'design' && 'Design & Desktop Publishing'}
            </button>
          ))}
        </div>

        {/* Faculty grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFaculty.map((member, idx) => (
            <motion.div
              layout
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:shadow-xl hover:border-slate-200 transition duration-300"
              id={`faculty-card-${member.id}`}
            >
              {/* Image Frame */}
              <div className="w-full sm:w-1/3 h-56 sm:h-auto rounded-2xl overflow-hidden bg-slate-50 relative shrink-0">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-[#5c3cbc] text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  {member.experience}
                </div>
              </div>

              {/* Bio content Columns */}
              <div className="flex-1 flex flex-col justify-between text-left space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="text-md sm:text-lg font-black text-slate-900 tracking-tight">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold bg-amber-50 px-2 py-0.5 rounded-full">
                      <Star className="h-3.5 w-3.5 fill-amber-500 shrink-0" />
                      <span>{member.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <p className="text-indigo-600 text-xs font-black uppercase tracking-wider font-mono">
                    {member.role}
                  </p>

                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-bold">
                    <GraduationCap className="h-4.5 w-4.5 text-indigo-400" />
                    <span>{member.education}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </div>

                {/* Specialties tags */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialty.map((s) => (
                      <span
                        key={s}
                        className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onBookDemo(`1-on-1 Consultation with ${member.name}`)}
                    className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-black text-[#5c3cbc] hover:text-indigo-800 transition"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Request Booking Sessions</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality commitment callout badge */}
        <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm text-left grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <h4 className="text-md font-black text-slate-950 tracking-tight flex items-center gap-2">
              <Award className="h-5.5 w-5.5 text-emerald-500" />
              <span>Certified Pedagogical Excellence Since 1996</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              CCT Computer Education maintains a rigorous continuous auditing policy for all trainers. Our educators undergo monthly audits to check alignment with the latest industrial updates, including accounting tools, design protocols, and development logic.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <button
              onClick={() => onBookDemo('Direct Counselling Session')}
              className="cursor-pointer bg-[#5c3cbc] hover:bg-indigo-700 text-white font-extrabold uppercase text-xs py-3.5 px-6 rounded-xl transition shadow-md shadow-indigo-600/10 tracking-widest font-sans"
            >
              Consult Director
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
