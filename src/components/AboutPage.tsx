import React from 'react';
import { ShieldCheck, Calendar, Users, Award, Landmark, CheckCircle, GraduationCap } from 'lucide-react';

interface AboutPageProps {
  onBookDemo: () => void;
}

export default function AboutPage({ onBookDemo }: AboutPageProps) {
  const values = [
    {
      icon: <GraduationCap className="h-6 w-6 text-indigo-600" />,
      title: 'Practical First Pedagogy',
      desc: 'We replace purely theoretical assignments with realistic workspace trials. Students compile real ledgers in Tally, construct real brand graphics in CorelDraw, and run active scripts locally.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      title: 'Authorized ISO 9001:2015 Certification',
      desc: 'Our administrative procedures and student certification credentials carry audited standard recognition, globally valid for company placement applications.'
    },
    {
      icon: <Users className="h-6 w-6 text-pink-600" />,
      title: 'Inclusive Admission',
      desc: 'We structure accessible, flexible installment payment systems to let any aspiring student learn computer tech and accounting from basic zero status to advanced corporate competence.'
    }
  ];

  const milestones = [
    { year: '1996', title: 'Academy Founding', desc: 'Opened our pioneering Computer Center in Madangir, New Delhi, using the latest processing hardware to democratize system access.' },
    { year: '2005', title: 'Accounting Alignment', desc: 'Introduced industry-centric accounting and ledger courses, training students directly on Tally standards.' },
    { year: '2015', title: 'ISO 9001 Alignment', desc: 'Formally audited and certified with ISO 9001 quality systems for professional curriculum development.' },
    { year: '25+ Yrs', title: 'CCT Developer Expansion', desc: 'Initiated full-stack React and AI prompt guidelines systems, modernizing curriculum to match next-generation programming frameworks.' }
  ];

  return (
    <div className="bg-[#fcfaff] min-h-screen py-16 px-6 sm:px-12" id="about-page-root">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main top hero display with custom image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-[#5c3cbc] text-xs font-black uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full">
              ESTD 1996 • DELHI METRO ACADEMY
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight font-display">
              Empowering Aspirants with Actual Computing Mastery
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed font-semibold">
              Since 1996, CCT Computer Education holds a distinguished track record of training students in functional desktop technology, layout designing, advanced ledger bookkeeping, and robust programming. Located in Delhi, we maintain physical laboratory rooms featuring dedicated student hardware terminals.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#5c3cbc]">25+ Yrs</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono mt-1">Delhi Legacy</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-800">15,000+</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono mt-1">Alumni Leaders</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">ISO</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono mt-1">9001:2015 Cert</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-indigo-200 rounded-3xl transform rotate-3 scale-95 opacity-50"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
                alt="Academy Infrastructure Classroom"
                className="w-full h-80 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Dynamic educational commitments */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3.5xl font-black text-slate-950 tracking-tight font-display">
              Our Core Educational Commitments
            </h2>
            <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider">The principles behind active student placements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 text-left space-y-4 shadow-sm hover:translate-y-[-2px] transition duration-200">
                <div className="p-3 bg-slate-50 rounded-xl w-fit">
                  {v.icon}
                </div>
                <h3 className="text-md sm:text-lg font-black text-slate-900 tracking-tight">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Vertical Timeline Layout */}
        <div className="bg-white border border-slate-100 p-8 sm:p-12 rounded-3xl shadow-sm text-left space-y-8">
          <div>
            <h2 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight flex items-center gap-2">
              <Landmark className="h-6 w-6 text-[#5c3cbc]" />
              <span>Academy Milestones & Growth</span>
            </h2>
            <p className="text-xs text-slate-500 font-semibold mt-1">Tracing a historical trajectory of continuous technology upgrades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block" />
            {milestones.map((m, idx) => (
              <div key={idx} className="relative z-10 bg-white border border-slate-100/80 p-5 rounded-2xl shadow-sm space-y-3 hover:border-indigo-100 transition">
                <div className="bg-[#5c3cbc] text-white text-[10px] font-black px-3 py-1 rounded-full w-fit font-mono tracking-widest">
                  {m.year}
                </div>
                <h4 className="font-extrabold text-sm text-slate-900 tracking-tight">
                  {m.title}
                </h4>
                <p className="text-slate-500 text-[11px] leading-relaxed font-medium">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA frame */}
        <div className="bg-[#5c3cbc] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-3 z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight font-display">
              Upgrade Your Career Trajectory Today
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100 font-semibold leading-relaxed">
              Consult with executive counselors physically at our New Delhi institute to structure custom batch timings and direct software trial schedules.
            </p>
          </div>
          <button
            onClick={onBookDemo}
            className="cursor-pointer bg-white hover:bg-indigo-50 text-[#5c3cbc] font-black uppercase text-xs py-4 px-8 rounded-xl shrink-0 tracking-widest shadow-lg shadow-indigo-950/20 z-10"
          >
            Request Free Session
          </button>
          
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
