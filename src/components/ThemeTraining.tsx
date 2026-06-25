import React, { useState } from 'react';
import { Award, Code, Compass, GraduationCap, MapPin, Phone, Star, Check, Zap, ArrowRight, ClipboardCheck, Mail, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Course } from '../types';
import { motion } from 'motion/react';
import { coursesData } from '../data/coursesData';

interface ThemeTrainingProps {
  onBookDemo: (courseTitle?: string) => void;
  onAddToCart: (course: Course) => void;
  enrolledIds: string[];
}

export default function ThemeTraining({ onBookDemo, onAddToCart, enrolledIds }: ThemeTrainingProps) {
  const [activeTab, setActiveTab] = useState<'curriculum' | 'projects' | 'mentorship'>('curriculum');
  // Dynamic Score State
  const [resumeWordCount, setResumeWordCount] = useState<string>('');
  const [resumeScore, setResumeScore] = useState<number | null>(null);

  const stats = [
    { value: '12+ Years', label: 'Instructional Experience' },
    { value: '50+ Expert', label: 'Faculty & Mentors' },
    { value: '95%', label: 'Active Placement Rate' },
    { value: '100+ Partner', label: 'Global Tech Sponsors' }
  ];

  const courses: Course[] = coursesData;

  const corePillarsContent = {
    curriculum: {
      title: 'Certified Practical Curriculum',
      subtitle: 'Rigorous. Modern. Industry-aligned.',
      points: [
        'Vetted monthly by corporate tech recruiters to ensure skill freshness.',
        'Structured around actual API specs rather than old textbooks.',
        'Full integration with global certifications including Oracle Java & CompTIA Security.'
      ],
      tip: 'Our curriculum bypasses obsolete topics and focuses strictly on what software teams use in production.'
    },
    projects: {
      title: 'Project-Based Laboratory Sandbox',
      subtitle: 'Develop physical digital products.',
      points: [
        'Complete 12+ verified projects covering microservice architectures.',
        'Compile actual databases and push deployment files to real web hosting environments.',
        'Continuous team reviews mimicking true sprint pipelines.'
      ],
      tip: 'Build a premium GitHub file portfolio during class that demonstrates technical competency directly.'
    },
    mentorship: {
      title: 'Direct Strategic Placement Consulting',
      subtitle: 'Unlock opportunities aggressively.',
      points: [
        'Simulated mock interviews with Lead Developers from Delhi tech hubs.',
        'Exclusive premium resume styling template configurations.',
        'Referral connections to 100+ vetted outsourcing and product companies.'
      ],
      tip: 'Get premium career consulting starting the very first week of enrollment.'
    }
  };

  const calculateResumeScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeWordCount.trim()) return;

    // Simulate standard scanner NLP scoring
    const cleaned = resumeWordCount.toLowerCase();
    let calculated = 45; // baseline

    if (cleaned.includes('react') || cleaned.includes('javascript') || cleaned.includes('node')) calculated += 12;
    if (cleaned.includes('database') || cleaned.includes('sql') || cleaned.includes('mongodb')) calculated += 10;
    if (cleaned.includes('git') || cleaned.includes('docker') || cleaned.includes('aws')) calculated += 13;
    if (cleaned.includes('project') || cleaned.includes('deploy')) calculated += 10;
    if (cleaned.includes('internship') || cleaned.includes('experience')) calculated += 10;

    // Cap at 100
    setResumeScore(Math.min(calculated, 100));
  };

  const alumniTestimonials = [
    {
      name: 'Dr. Amitabh Verma',
      quote: 'CCT Computer Education offers premium educational execution! The immersive MERN stack laboratory modules completely overhauled our junior architecture logic base.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAOq3Id-yKLNpqPEycD209C3Px5yiaxoiOt56T2q5cRLVEBw29ZYZEkGVKwf2M5ZwmSI0XDtiduXf_O5vPQG5HyGdP7RIsY1sl2hZn8mkBsmnhChgShQRmnkjuGEKIDPykFzpFYJWKtE5pE2ST-WgrrsUPrgtTqTxWR3bg7c9p5gK5ePwZjZljY61c96XQ2APIzlIszQZcxe81fObJCY3RGYVnC5gpKhuLfJIKjchijOx2SV0rrUKBosFaCk7siuxD70VJF8S4-s0',
      role: 'Core Systems Director'
    },
    {
      name: 'Riddhi Malhotra',
      quote: 'Their career mentorship section is highly aggressive. Within 2 months of starting the Data Science track, I was routed to pre-placement reviews at global analytics startups.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjHuKduEoNefx523vQhyuXXCJFr97af50X5j0qB3PJcGgU87-I1m9Aj_Elte1Ldfap9fGisLKqzGcNIlhRRvWcrxzjBLsr6sx0XoTmMhvNk3ghIAEvd5CWm9UU2k58DTkWaMMC8jhw9ocGxjyS7lh28OEC08t8ns0IFX0yR-C_21l5YwUsKTuYfelSx4444HHoOTs7NRYMQrhQdsCU97J-hNPiXA4cNaUDQ5AfUKlhrXZWOklF47y2NxpPx8Ucj9v0pIr0cBB3_34',
      role: 'Junior Data Scientist'
    },
    {
      name: 'Devansh Roy',
      quote: 'Absolutely excellent laboratry, ultra high density system rigs in Madangir. The Cybersecurity Specialist track covers actual firewall audits and pen tests inside isolated virtual machines.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAllhi_hiajLEI8Jpa534DkzVTiEN47Qzc1BWYhWYLjDohCOs4le7ZOVQajCPb6QgGKm9GGC0U1Clj2uHxLEwM0nS08bzOKUc-g3CfRgPxHeUT5F6WJjElqr1Fz-cQh04Jehvgl6FxWpN-29VmORvGdrg6StltJl56jyZIzvGzOoUmfsn47-dxKfzVHRWqsNZ1GUpnX99yIZe-K4u0A-8zjkyPI6VPb9gIjhwEHmb28EEvKwXWLfLYPmb4h0qw9FtOVC3eBu-eG-KU',
      role: 'SOC Analyst'
    }
  ];

  return (
    <div className="bg-[#fcfaff] text-slate-800 font-sans min-h-screen selection:bg-indigo-600/10">
      {/* Light Clean Hero Matching Mockup Screenshot */}
      <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#f3f0ff] via-white to-white overflow-hidden border-b border-slate-100" id="training-hero">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="inline-flex items-center gap-1.5 bg-indigo-100/75 text-[#3b2cc4] font-black text-[10px] sm:text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-sans shadow-xs">
              THE STANDARD OF EXCELLENCE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight leading-[1.1] font-display">
              Master the Future of IT <br className="hidden sm:inline" />
              with CCT Education
            </h1>
            <p className="text-sm sm:text-md text-slate-600 max-w-xl leading-relaxed">
              Empowering thousands of students with industry-certified skills. Learn from experts and bridge the gap between classroom and career.
            </p>

            {/* CTAs matching mockup */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onBookDemo('General IT Career Consulting')}
                className="cursor-pointer bg-[#3b2cc4] hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all font-sans flex items-center gap-2"
                id="training-book-demo-btn"
              >
                Explore Programs <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onBookDemo('Contact Admission Counselor')}
                className="cursor-pointer border-2 border-[#3b2cc4] text-[#3b2cc4] hover:bg-indigo-50/50 bg-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-all font-sans"
              >
                Contact a Counselor
              </button>
            </div>

            {/* Graduation indicator icon badge */}
            <div className="flex items-center gap-3.5 pt-4">
              <div className="h-10 w-10 rounded-full bg-violet-50 text-[#3b2cc4] flex items-center justify-center border border-violet-100 shrink-0 shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
              <p className="text-xs text-slate-600 font-semibold">
                <span className="text-[#3b2cc4] font-black mr-1 text-sm font-sans">15,000+</span> Students Graduated
              </p>
            </div>
          </motion.div>

          {/* Right Image element matching mockup exactly with floating certification badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-6 lg:mt-0 pb-8 pr-8"
          >
            <div className="absolute -inset-1 rounded-2xl bg-indigo-500/10 blur-xl" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-100 bg-white p-2.5 shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnWyAK0o4Zgz06dL1XH4BgBh9s4mmiLjCvEhh_QfY4x79M4YXBI6qCoqYREzA-HUu730lI1yu0Pwbf7mh5Bj3QhjpKfYJ2fFNOwd1GTn87JIc2h6mf90Vum0bRjCAtMb3nKT0vp7fzvLbC6XOkFzZiNWC7iDHff_c5K3at3rPI1yKUEvW88rt1k1GMDhsKDH6j4TNFg_9ObjDogrw30tLU5hUl32VWbQNmG30fzs36LnXziIfVKcVrO7zo33GGZ_ImNFRob5tfBpY"
                alt="High density software coding laboratory setup"
                className="w-full h-auto object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-5 right-5 bg-white/95 border border-slate-100 rounded-lg py-1 px-2.5 shadow-xs backdrop-blur-xs flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-bold text-slate-800 uppercase tracking-wider font-mono">Admission Portal Live</span>
              </div>
              
              {/* Floating Star/Award certification badge overlapping exactly as in mock illustration */}
              <div className="absolute -bottom-4 -left-4 bg-white/100 p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-100/60 max-w-[210px] z-20 flex gap-3.5 items-center justify-start animate-fade-in">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 shadow-inner">
                  <Award className="h-5.5 w-5.5 stroke-[2.5]" />
                </div>
                <div className="text-left leading-none">
                  <h4 className="text-xs sm:text-xs font-black text-slate-900 leading-none">ISO 9001:2015</h4>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold mt-1.5 leading-none">Certified Center</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE CAPABILITIES TAB-BASED SECTION */}
      <section className="py-20 bg-white border-b border-slate-100" id="career-pillars">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Core Info left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="text-indigo-600 text-xs font-black uppercase tracking-wider font-sans">Strategic Methodology</div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              We Don't Just Teach Code. <br />We Build Engineering Trajectories.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our training infrastructure provides students in New Delhi with custom practical simulators, corporate code compliance tools, and continuous team review processes.
            </p>

            {/* Tabs Controller */}
            <div className="grid grid-cols-3 gap-2 border-b border-slate-100 pb-2">
              {(['curriculum', 'projects', 'mentorship'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer pb-2 text-center text-xs font-bold uppercase tracking-wider transition border-b-2 ${
                    activeTab === tab
                      ? 'border-indigo-600 text-indigo-600 font-black'
                      : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Dynamic Content display based on Tab */}
            <div className="space-y-4 pt-2">
              <h4 className="text-md font-bold text-slate-900">{corePillarsContent[activeTab].title}</h4>
              <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider">{corePillarsContent[activeTab].subtitle}</p>
              <ul className="space-y-2.5">
                {corePillarsContent[activeTab].points.map((pt, index) => (
                  <li key={index} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                    <Check className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="p-3 bg-indigo-50/50 rounded-xl text-[10px] text-indigo-800 border border-indigo-100 font-medium italic">
                💡 {corePillarsContent[activeTab].tip}
              </div>
            </div>
          </motion.div>

          {/* Right Area: Interactive resume scanner mock */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl shadow-xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <ClipboardCheck className="h-5 w-5 text-indigo-400" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">CCT Placement Scanner Mock</h4>
                  <p className="text-[10px] text-slate-500">Test if your background details trigger corporate filters</p>
                </div>
              </div>

              <form onSubmit={calculateResumeScore} className="space-y-3">
                <textarea
                  value={resumeWordCount}
                  onChange={(e) => setResumeWordCount(e.target.value)}
                  placeholder="Paste your current resume bullet headings or key skills here... (e.g. Java, Python, SQL, React)"
                  required
                  className="w-full bg-[#030712] rounded-xl border border-slate-800 p-4 text-[11px] sm:text-xs text-slate-300 focus:outline-none focus:border-indigo-500 font-mono h-28"
                />

                <button
                  type="submit"
                  className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 py-2.5 rounded-lg text-xs font-bold text-white transition flex items-center justify-center gap-1"
                  id="scanner-submit-btn"
                >
                  Analyze Match Score <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>

              {resumeScore !== null && (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">NLP Filter Rating:</span>
                    <span className={`font-black ${resumeScore < 60 ? 'text-amber-400' : 'text-emerald-400'}`}>{resumeScore}/100</span>
                  </div>
                  {/* Progress Line */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${resumeScore < 60 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                      style={{ width: `${resumeScore}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    {resumeScore < 65
                      ? '⚠️ Limited triggers found. Improve relevance by adding CCT certification tracks: MCS logic constructs, MERN API hooks, and Linux Admin tools.'
                      : '🚀 Strong matches! Enroll in Full Stack Web Development or Data Science at CCT to unlock high-salary pre-placement direct referral pipelines.'}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE PROGRAMS GRID SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6" id="core-programs-grid">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <span className="text-indigo-600 text-xs font-black uppercase tracking-wider font-sans">Signature Trajectories</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">Professional IT Training Tracks</h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            These specialized tracks focus on core concepts, advanced code files, high-concurrency databases, and network firewalls.
          </p>
        </motion.div>

        {/* Courses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-slate-200 hover:shadow-lg transition duration-300 flex flex-col group relative"
              id={`training-card-${course.id}`}
            >
              {/* Highlight badge */}
              <div className="absolute top-3.5 right-3.5 z-10 bg-indigo-600 text-white text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-widest">
                {course.duration}
              </div>

              {/* Cover */}
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400">({course.reviewsCount}+ ratings)</span>
                  </div>
                  <h3 className="text-md sm:text-lg font-black text-slate-950 tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed block">
                    {course.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Syllabus Sub-block */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                    <div className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-1.5">Core Syllabus Highlights</div>
                    <div className="space-y-1.5 text-xs text-slate-600">
                      {course.syllabus.map((pt, pIdx) => (
                        <div key={pIdx} className="flex gap-1.5 items-start">
                          <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Checkout Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block text-line-through">₹{course.originalPrice?.toLocaleString('en-IN')}</span>
                      <span className="text-lg font-black text-slate-900">₹{course.price.toLocaleString('en-IN')}</span>
                    </div>
                    <button
                      onClick={() => onAddToCart(course)}
                      disabled={enrolledIds.includes(course.id)}
                      className={`cursor-pointer rounded-lg px-4.5 py-2 text-xs font-bold transition flex items-center gap-1 ${
                        enrolledIds.includes(course.id)
                          ? 'bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/10'
                      }`}
                      id={`add-to-cart-training-${course.id}`}
                    >
                      {enrolledIds.includes(course.id) ? 'Reserved' : 'Reserve Seat'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Voices of Success */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100" id="voices-training">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3 mb-16"
          >
            <span className="text-indigo-600 text-xs font-black uppercase tracking-wider font-sans">Verified Trajectory Proof</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Voices of Success</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Read review testimonials from our students across Delhi. Explore how intensive laboratories and portfolio guidance shaped their paths.
            </p>
          </motion.div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumniTestimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 shrink-0" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
 
                <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6 shrink-0">
                  <div className="h-10 w-10 rounded-full bg-violet-50 text-[#3b2cc4] flex items-center justify-center border border-violet-100/50 shrink-0 select-none">
                    <span className="text-[11px] font-black uppercase font-sans">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-950 leading-tight">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 font-bold">{t.role}</p>
                    <span className="inline-block mt-0.5 text-[9px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                      CCT Alumni
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT OUR ACADEMY SECTION */}
      <section className="py-20 bg-white px-6 sm:px-12 relative overflow-hidden border-t border-slate-100" id="visit-academy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description and Contact Cards */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-[#3b2cc4] text-xs font-black uppercase tracking-wider font-sans">Our Physical Campus</span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight font-display text-[#1c1265]">
                  Visit Our Academy
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                  We invite you to experience our advanced computing laboratories and high-density coding rigs firsthand. Meet senior educators and consult about batch timings.
                </p>
              </div>

              <div className="space-y-5">
                {/* Address Card */}
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50/75 border border-slate-100/80 transition hover:bg-slate-50 cursor-default">
                  <div className="h-12 w-12 rounded-xl bg-violet-50 text-[#3b2cc4] flex items-center justify-center shrink-0 border border-violet-100/50">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider font-sans">Address</h4>
                    <p className="text-xs sm:text-xs text-slate-500 font-bold leading-relaxed">
                      19/520, Lal Bahadur Shastri Marg, DDA Flats, Doctor Ambedkar Nagar, Madangir, New Delhi, Delhi 110062
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50/75 border border-slate-100/80 transition hover:bg-slate-50 cursor-default">
                  <div className="h-12 w-12 rounded-xl bg-violet-50 text-[#3b2cc4] flex items-center justify-center shrink-0 border border-violet-100/50">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider font-sans">Phone Support</h4>
                    <a href="tel:08527208085" className="text-xs sm:text-sm text-slate-600 hover:text-[#3b2cc4] transition-colors font-black block">
                      08527208085
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50/75 border border-slate-100/80 transition hover:bg-slate-50 cursor-default">
                  <div className="h-12 w-12 rounded-xl bg-violet-50 text-[#3b2cc4] flex items-center justify-center shrink-0 border border-violet-100/50">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider font-sans">Email Address</h4>
                    <a href="mailto:admissions@cct.edu.in" className="text-xs sm:text-sm text-slate-600 hover:text-[#3b2cc4] transition-colors font-black block">
                      admissions@cct.edu.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Map Module corresponding exactly to user's layout block */}
            <div className="lg:col-span-7 relative">
              <div className="absolute -inset-2.5 rounded-[32px] bg-indigo-500/5 blur-2xl" />
              <div className="relative rounded-[30px] overflow-hidden border border-slate-100 bg-white p-2.5 shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0123565509934!2d77.22620581507982!3d28.5209722824619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce190013cb139%3A0xa1c2c0080c2cc2b0!2sCCT%20Computer%20Education!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
                  className="w-full h-[360px] sm:h-[420px] rounded-[24px] border-none shadow-inner"
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CCT Computer Education Madangir Location"
                  id="google-maps-frame"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start Your Journey? CTA */}
      <section className="py-16 bg-slate-50 px-6 sm:px-12 relative overflow-hidden" id="training-cta">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#3b2cc4] text-white rounded-[32px] py-16 px-8 sm:px-16 text-center relative overflow-hidden shadow-2xl">
            {/* Elegant wave overlay */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full object-cover" viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0,90 C320,190 420,40 720,140 C1020,240 1120,90 1440,160 L1440,250 L0,250 Z" fill="rgba(255,255,255,0.08)"></path>
                <path d="M0,150 C380,240 520,10 820,130 C1120,250 1220,150 1440,210 L1440,250 L0,250 Z" fill="rgba(255,255,255,0.08)"></path>
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight font-display text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xs sm:text-sm md:text-md text-indigo-100/90 leading-relaxed font-semibold">
                Enroll today and join a community of lifelong learners and innovators. New batches starting next Monday!
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onBookDemo('Apply Now CTA')}
                  className="cursor-pointer bg-white text-[#3b2cc4] hover:bg-slate-50 font-bold px-8 py-3.5 rounded-xl transition shadow-md text-xs sm:text-sm font-sans flex items-center gap-2"
                  id="cta-apply-now-btn"
                >
                  Apply Now
                </button>
                <a
                  href="https://wa.me/918527208085?text=Hello%21%20I%20am%20interested%20in%20CCT%20Computer%20Courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-8 py-3.5 rounded-xl transition shadow-md text-xs sm:text-sm font-sans flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.321 1.451 5.357 1.452 5.513 0 9.995-4.485 9.998-10.001.002-2.673-1.026-5.185-2.899-7.06-1.875-1.875-4.37-2.907-7.042-2.908-5.523 0-10.01 4.487-10.014 10.004-.001 2.016.521 3.987 1.513 5.727L1.616 22.01l4.413-1.156c1.642.895 3.529 1.365 5.395 1.365h.005zm10.74-6.843c-.29-.145-1.713-.846-1.978-.942-.266-.097-.459-.145-.652.146-.193.29-.747.942-.916 1.135-.168.193-.337.217-.627.072-2.263-1.134-3.551-1.722-4.996-4.2-.38-.652.38-.606 1.088-2.022.12-.242.06-.454-.03-.599-.09-.145-.747-1.8-.1023-2.65-.24-.583-.472-.505-.652-.514-.17-.008-.363-.01-.555-.01-.193 0-.507.073-.772.363-.266.29-1.014.99-1.014 2.415 0 1.425 1.038 2.802 1.182 2.996.145.193 2.04 3.114 4.945 4.368.69.298 1.23.476 1.65.61.694.221 1.325.19 1.825.114.557-.084 1.713-.7 1.953-1.376.24-.677.24-1.256.17-1.376-.073-.12-.266-.193-.556-.339z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => onBookDemo('Download Prospectus CTA')}
                  className="cursor-pointer border border-white/25 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition text-xs sm:text-sm font-sans"
                >
                  Download Prospectus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white text-slate-800 border-t border-slate-100/85 pt-16 pb-12" id="training-footer">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Logo & Info column */}
          <div className="md:col-span-4 space-y-5 text-left">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#1c1265] m-0 font-display">
              CCT <span className="text-[#3b2cc4] font-black">Computer Education</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm font-semibold">
              Empowering Students Globally with top-tier technical education and career support.
            </p>
            {/* Social Icons exactly like image */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#twitter" className="h-9 w-9 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-[#3b2cc4] text-slate-500 flex items-center justify-center transition shadow-2xs border border-transparent hover:border-slate-200">
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a href="#instagram" className="h-9 w-9 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-[#3b2cc4] text-slate-500 flex items-center justify-center transition shadow-2xs border border-transparent hover:border-slate-200">
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a href="#linkedin" className="h-9 w-9 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-[#3b2cc4] text-slate-500 flex items-center justify-center transition shadow-2xs border border-transparent hover:border-slate-200">
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2.5 space-y-4 text-left">
            <h4 className="text-[11px] sm:text-xs font-extrabold text-slate-900 uppercase tracking-widest font-mono">Quick Links</h4>
            <ul className="space-y-3.5 text-xs text-slate-500 font-bold">
              <li>
                <a href="#core-programs-grid" className="hover:text-[#3b2cc4] transition-colors">About Us</a>
              </li>
              <li>
                <button type="button" onClick={() => onBookDemo('Footer Contact Us')} className="cursor-pointer text-left hover:text-[#3b2cc4] transition-colors font-bold text-xs">Contact Us</button>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#3b2cc4] transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-2.5 space-y-4 text-left">
            <h4 className="text-[11px] sm:text-xs font-extrabold text-slate-900 uppercase tracking-widest font-mono">Resources</h4>
            <ul className="space-y-3.5 text-xs text-slate-500 font-bold">
              <li>
                <a href="#terms" className="hover:text-[#3b2cc4] transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#refund" className="hover:text-[#3b2cc4] transition-colors">Refund Policy</a>
              </li>
              <li>
                <button type="button" onClick={() => onBookDemo('Footer Counselling')} className="cursor-pointer text-left hover:text-[#3b2cc4] transition-colors font-bold text-xs">Counselling</button>
              </li>
            </ul>
          </div>

          {/* Contact Column matching mockup exactly with genuine local Delhi info */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-[11px] sm:text-xs font-extrabold text-slate-900 uppercase tracking-widest font-mono">Get In Touch</h4>
            <div className="space-y-4 text-xs text-slate-500 font-bold">
              <div className="flex gap-2.5 items-center">
                <Phone className="h-4.5 w-4.5 text-[#3b2cc4] shrink-0" />
                <a href="tel:08527208085" className="hover:text-[#3b2cc4] transition-colors">08527208085</a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="h-4.5 w-4.5 text-[#3b2cc4] shrink-0" />
                <a href="mailto:admissions@cct.edu.in" className="hover:text-[#3b2cc4] transition-colors">admissions@cct.edu.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal area */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-semibold gap-2">
          <p>© 2026 CCT Computer Education. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0 text-[10px]">
            <span>ISO 9001:2015 Approved</span>
            <span>•</span>
            <a 
              href="https://www.google.com/maps/place/CCT+Computer+Education/@28.5209673,77.2287807,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce190013cb139:0xa1c2c0080c2cc2b0!8m2!3d28.5209673!4d77.2287807!16s%2Fg%2F12hn29_kr?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b2cc4] transition-colors font-mono font-bold"
            >
              Madangir HQ Delhi (View Map)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
