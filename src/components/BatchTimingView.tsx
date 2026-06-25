import { motion } from 'motion/react';
import { Clock, HelpCircle, PhoneCall, Calendar } from 'lucide-react';

export default function BatchTimingView() {
  const timings = [
    { slot: '08:00 AM to 09:00 AM', tag: 'Early Morning Slot' },
    { slot: '09:00 AM to 10:00 AM', tag: 'Morning Batch A' },
    { slot: '10:00 AM to 11:00 AM', tag: 'Morning Batch B' },
    { slot: '11:00 AM to 12:00 PM', tag: 'Midday Slot' },
    { slot: '12:00 PM to 01:00 PM', tag: 'Noon Training Slot' },
    { slot: '01:00 PM to 02:00 PM', tag: 'Lunch Hour Practice' },
    { slot: '02:00 PM to 03:00 PM', tag: 'Afternoon Batch A' },
    { slot: '03:00 PM to 04:00 PM', tag: 'Afternoon Batch B' },
    { slot: '04:00 PM to 05:00 PM', tag: 'Late Afternoon Practice' },
    { slot: '05:00 PM to 06:00 PM', tag: 'Evening Batch A' },
    { slot: '06:00 PM to 07:00 PM', tag: 'Evening Batch B' },
    { slot: '07:00 PM to 08:00 PM', tag: 'Night Professional Batch' },
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 px-5 sm:py-20 sm:px-12 selection:bg-[#1e40af] selection:text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header content */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono bg-[#dbeafe] border border-blue-200 px-3.5 py-1.5 rounded-full">
            CLASS COMPONENT TIMELINES
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight">
            Batch Timings
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] font-semibold leading-relaxed">
            We structure hourly batches starting from early morning to late evening to match student work/study rhythms.
          </p>
          <div className="w-16 h-1 bg-[#1e40af] mx-auto rounded-full mt-4" />
        </div>

        {/* Timings Table/Card Box layout with split graphic illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* Left Column: Active Batch Slots List (Col span 7) */}
          <div className="lg:col-span-8 bg-white border border-slate-205 rounded-3xl p-5 sm:p-8 space-y-6 text-left shadow-lg shadow-blue-900/5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                <Clock className="text-[#1e40af] h-6 w-6" />
                <div>
                  <h2 className="text-lg font-black uppercase text-[#0f172a] tracking-tight">Active Batch Slots</h2>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold">1-Hour Dedicated Practice Blocks</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                {timings.map((time, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1e40af]/40 p-3.5 rounded-xl flex flex-row items-center justify-between gap-3 transition group w-full"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="h-2 w-2 rounded-full bg-[#1e40af] group-hover:scale-125 transition-transform" />
                      <span className="text-[12px] font-bold font-mono text-[#0f172a] tracking-tight">{time.slot}</span>
                    </div>
                    <span className="text-[8px] font-mono font-black uppercase tracking-wider text-[#1e40af] bg-[#dbeafe] px-2 py-0.5 rounded border border-blue-105">
                      {time.tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Special Custom Note below */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 mt-6 flex items-start gap-4">
              <span className="text-xl shrink-0">🤝</span>
              <div className="space-y-1">
                <h4 className="text-xs font-black text-[#0f172a] uppercase tracking-tight">Multiple Batches Available</h4>
                <p className="text-[11px] text-[#374151] font-semibold leading-relaxed">
                  Choose the time that suits you best. Candidates can also shift batch categories with prior notifications to the registrar desks depending on college examinations or office timings shift rules.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Schedule / Study Illustration Panel (Col span 5) */}
          <div className="lg:col-span-4 w-full h-full flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] lg:aspect-auto w-full min-h-[320px] lg:h-full bg-blue-50 group flex flex-col justify-end p-6"
            >
              {/* Subtle Dark/Blue Overlay (rgba 0,0,0,0.3) for readability and texture per instructions */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 group-hover:opacity-90 transition-opacity duration-300 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600"
                alt="Productive timeline schedule planner with vintage study clock and students workspace accessories"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              {/* Floating micro-copy on image */}
              <div className="relative z-20 space-y-2 text-left">
                <span className="text-[9px] font-mono font-black uppercase text-[#dbeafe] bg-[#1e40af]/80 px-2 py-0.5 rounded border border-blue-400/20 inline-block">DELHI CAMPUS RHYTHM</span>
                <p className="text-xs sm:text-sm text-white font-extrabold leading-snug">
                  "Every slot is carefully curated to offer standard learning, direct mentor guidance, and individual computing labs."
                </p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Action Bottom banner */}
        <div className="bg-[#1e40af] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl shadow-blue-600/10">
          <div className="absolute inset-0 bg-radial from-[#1d4ed8] to-[transparent] opacity-50" />
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tight">Need a custom timing loop?</h3>
            <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
              Contact our Delhi coordinator to reserve specific custom slots or weekend-only practice rooms without any surcharge.
            </p>
            <a
              href="tel:8527208085"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-10 transition text-[#1e40af] font-black text-xs uppercase tracking-widest px-8 py-4 rounded-lg"
            >
              <PhoneCall className="h-4 w-4" />
              Call Now: 8527208085
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
