import { Award, Shield, CheckCircle, GraduationCap, MapPin, Phone, Star, Send } from 'lucide-react';
import { useState } from 'react';
import CourseQuiz from './CourseQuiz';
import { Course } from '../types';
import { coursesData } from '../data/coursesData';

interface ThemeAcademicProps {
  onBookDemo: (courseTitle?: string) => void;
  onAddToCart: (course: Course) => void;
  enrolledIds: string[];
}

export default function ThemeAcademic({ onBookDemo, onAddToCart, enrolledIds }: ThemeAcademicProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  const courses: Course[] = coursesData;

  const whyChooseItems = [
    {
      title: 'Step-by-Step Learning',
      desc: 'Our modular structure splits dense concepts into bitesize steps. Zero to pro, backed by graded code labs.',
      details: 'Each module ends with a project check. You unlock the next stage only after your mentor reviews and approves your practical file, ensuring concrete memory retention.'
    },
    {
      title: 'Advanced Interactive Lab',
      desc: 'High-compute local terminal environments. Deploy services, query databases, and test APIs live in the classroom.',
      details: 'Our labs run multi-core developer stations. Students get persistent cloud instances to store projects, making code sharing and team programming reviews seamless.'
    },
    {
      title: 'Playful & Engaging Environment',
      desc: 'Gamified streak tracking, local developer quizzes, and hackathons with industry team leaders.',
      details: 'CCT hosts monthly internal sprints and mini-hackathons. Win exclusive certificates and study materials, adding exciting proof of capability to your career profile.'
    }
  ];

  const testimonials = [
    {
      name: 'Dhanalakshmi Dh',
      role: 'Junior Enterprise Architect',
      quote: 'The step by step explanation in coding exercises was excellent. The MCS track gave me a rock-solid programming logic base that allowed me to decode industrial frameworks effortlessly.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAa6bAFm4BfbYSzHZN542bqW_Wjm3dhlU86wmSupjs5JChUEaQasCJjvj_74w1Y6HnNZq5D6YhjD3PHnzliNOkP7uQLL6RgBdec7BdRErLuZMioDu5lZvcgK2y_S6rnO9zC4jPI0X9GzgX658y0IlrjBR0f8zjS4wRylYkdzbTz5Ytk4WdEYLqnUvQpSFywycBSXZZ_WkpaLwuDJymjTBadIjXyL-0oRm_q7k1Y5ObYao4rRRFmagdpw4_vPWhfNX-GMW7yOAnVzw',
      batch: 'MCS Track'
    },
    {
      name: 'Naziya Perveen',
      role: 'React Stack Engineer',
      quote: 'I was a basic programmer before, but after taking the advanced tracks, my confidence in data structures is at its peak. Mentorship support at Madangir is best!',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJiBWaNOBnFbhvsKWxz9yEcRCCw6D_lWJTRNG7jk5-skPAMvwQBK3cWaUa7E4DWYGQuKeRAG6XDF2mImAcYgNURGA37AYPuwRtEnoWAerg-97HLopJ5hY-xU1y14HQ2zAzPVJE8dXudjrf7pGS19s-pWP9ypJYRw1Osrl_MHu2EiG_CElhgmN2xRWjKtcexx1m9hZpzV_-lNd3F4nP8xRdIFQMMw9JIhBnduWJj24EztX4hr4DDoIX728bSm8ElABqmDCu-PgfrlM',
      batch: 'ACB Track'
    },
    {
      name: 'Nitish Kumar',
      role: 'Database Compliance Lead',
      quote: 'Great faculty support, interactive labs were very helpful. They don\'t just teach syntax, they teach how to debug databases and optimize memory logs. Highly practical!',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd4jHjKdb7ZU-qPvu0PRGIErR7QlECvyqo_-PcuGmXC9zLQ2qOqxJN4b2_sWsVlMEYaRoDdxMlg1pzUc4tkK5v0Fn2AE755uRUEXfB5Sy-S4uRttfnKR2P16GJH1mEklzlTyAPeZLUunEIGvyoPaoZdc0mt2yhL2QPK-f_V_H518VznMRUeyJwx5L2EEy7TnRu0dpJxvAyDExU4Skb2tlebMbBxekpVQOE_-ENDx4lJa147UcLtO2B1skw4sBB3qScSDjO6X755Mo',
      batch: 'IT Professional (PIS)'
    }
  ];

  return (
    <div className="bg-[#030712] text-slate-100 font-sans min-h-screen selection:bg-cyan-500/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950" id="academic-hero">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs px-3 py-1.5 rounded-full font-semibold font-mono tracking-wide uppercase">
              <GraduationCap className="h-4 w-4" /> CCT Academic Hub (Rohini)
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans text-white leading-[1.1]">
              Master Practical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Tech Skills. Step-by-Step.</span>
            </h1>
            <p className="text-sm sm:text-md text-slate-400 max-w-xl leading-relaxed">
              Equip yourself with elite software engineering, database scripting, and modern system compliance certifications. Designed by tech specialists for quick market integration.
            </p>

            {/* Newsletter Hook */}
            <div className="pt-2">
              {!newsSuccess ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsEmail) setNewsSuccess(true);
                  }}
                  className="flex flex-col sm:flex-row max-w-md gap-2.5 bg-slate-900/50 p-2 border border-slate-800 rounded-xl"
                >
                  <input
                    type="email"
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder="Enter email to get syllabus updates"
                    className="flex-1 bg-transparent px-4 py-2 text-xs focus:outline-none focus:ring-0 text-white"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 font-bold text-white text-xs px-5 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    id="sub-syllabus-btn"
                  >
                    Subscribe <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              ) : (
                <div className="text-sm text-emerald-400 font-semibold flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Comprehensive curriculum details routed successfully to {newsEmail}!
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <button
                onClick={() => onBookDemo('General IT Career Consulting')}
                className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs sm:text-sm px-7 py-3 py-3.5 rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition"
                id="academic-book-demo-btn"
              >
                Book a Free Demo Class
              </button>
              <a
                href="#signature-tracks"
                className="inline-flex items-center justify-center border border-slate-800 bg-slate-900/70 hover:bg-slate-800 hover:text-white px-7 py-3 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition"
              >
                Explore Signature Tracks
              </a>
            </div>
          </div>

          {/* Hero Right Image block */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 opacity-20 blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 p-2 shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgiBanYbDaPlmuUAypT6zSMr7MoUdVAHrUzyBB36n1XW4aa7ESJtRF2UO0ZaQauOIf9YiOIxpcxV2EU2mFmO6zHzVIPF7gB2jUE0p1l9CSOFxSC-nMEVRUzhZwLRgAqqmY76d3ognK7T11-s7vjK-oQdQGEQBjk0wBx1PZB7sxqNjefgoOCtV2sFLLcxsEMuav6huMQYGp103zDoEqUZtw1jPCVklHK1UFHiu5KA3WUTyk6bfQ7WYZX1SaumpPeNKiGgfOC1zshkg"
                alt="Programming Classroom Workspace"
                className="w-full h-auto object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-800 rounded-xl p-3 backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest font-mono">Center Location</p>
                  <p className="text-xs font-semibold text-slate-200">Doctor Ambedkar Nagar, Madangir</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Tracks Section */}
      <section className="py-20 max-w-7xl mx-auto px-6" id="signature-tracks">
        <div className="text-center space-y-3 mb-16">
          <div className="text-cyan-500 text-xs font-bold uppercase font-mono tracking-widest">Master Certifications</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Featured Signature Certification Tracks
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            These structured tracks are curated specifically to build modular skills and prepare developers for live agency deployments.
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700/60 transition duration-300 flex flex-col group relative"
              id={`course-card-${course.id}`}
            >
              {/* Highlight badge */}
              <div className="absolute top-3 right-3 z-10 bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider font-mono">
                {course.duration}
              </div>

              {/* Course image */}
              <div className="h-48 overflow-hidden bg-slate-950 relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>

              {/* Course Detail */}
              <div className="p-6 flex-1 flex flex-col space-y-4">
                <div className="space-y-2">
                  {/* Rating block */}
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <span>{course.rating}</span>
                    <span className="text-slate-500">({course.reviewsCount} verified reviews)</span>
                  </div>

                  <h3 className="text-md sm:text-lg font-bold text-white font-sans group-hover:text-cyan-400 transition">
                    {course.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed flex-1">
                  {course.description}
                </p>

                {/* Info tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-800/40 text-slate-300 border border-slate-800 text-[9px] px-2 py-0.5 rounded-md font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Curriculum snippet */}
                <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/40 space-y-2">
                  <h4 className="text-[10px] uppercase font-mono font-bold tracking-widest text-cyan-400">Module Core Syllabus</h4>
                  <ul className="space-y-1">
                    {course.syllabus.map((syl, sIdx) => (
                      <li key={sIdx} className="text-[10px] text-slate-400 flex items-center gap-1.5">
                        <CheckCircle className="h-3 w-3 text-cyan-500 shrink-0" />
                        <span className="line-clamp-1">{syl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Area */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 text-line-through block">₹{course.originalPrice?.toLocaleString('en-IN')}</span>
                    <span className="text-lg font-black text-white">₹{course.price.toLocaleString('en-IN')}</span>
                  </div>
                  <button
                    onClick={() => onAddToCart(course)}
                    className={`cursor-pointer rounded-lg px-4.5 py-2 text-xs font-bold transition flex items-center gap-1 ${
                      enrolledIds.includes(course.id)
                        ? 'bg-slate-800 border border-slate-700 text-slate-400 cursor-not-allowed'
                        : 'bg-cyan-500 hover:bg-cyan-600 text-slate-950 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20'
                    }`}
                    disabled={enrolledIds.includes(course.id)}
                    id={`add-to-cart-academic-${course.id}`}
                  >
                    {enrolledIds.includes(course.id) ? 'Seat Reserved' : 'Reserve Seat'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Adaptive Placement Assessment Section */}
      <section className="py-16 bg-slate-950 border-t border-b border-slate-900" id="placement-quiz-section">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-cyan-500 text-xs font-bold uppercase font-mono tracking-widest">Self Assisstant</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight leading-snug">
              Analyze Your Trajectory Level Instantly
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Our standard adaptive assessment calculates current programming baseline levels and routes you directly into either ACB, MCS or specialized database structures.
            </p>
            <div className="space-y-2.5 pt-2">
              {[
                { title: '1-on-1 Personalized Mentor Assignment', desc: 'Calculated instantly according to results.' },
                { title: 'Optimized Batch Duration Tracking', desc: 'Matches your current working workflow.' },
                { title: 'Flexible Fee Installments', desc: 'Receive custom scholarship grants matching score.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <span className="h-5 w-5 bg-cyan-500/10 ring-1 ring-cyan-500/20 rounded flex items-center justify-center text-cyan-400 font-mono text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-slate-200">{item.title}</h5>
                    <p className="text-[11px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <CourseQuiz />
          </div>
        </div>
      </section>

      {/* Why Choose CCT Details Accordion */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Why CCT Left */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-cyan-500 text-xs font-bold uppercase font-mono tracking-widest">Pedagogical Framework</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
              High-Standards Educational Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              At CCT Computer Education, we structure lessons around continuous practical iteration. Code files, database logs, and live hosting are fundamental pillars of our classes.
            </p>

            {/* Accordion List */}
            <div className="space-y-3 pt-2">
              {whyChooseItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between font-sans text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition"
                  >
                    <span>{item.title}</span>
                    <span className="text-cyan-400 font-mono text-xs">{activeAccordion === idx ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === idx && (
                    <div className="px-5 pb-5 pt-1 space-y-2.5 border-t border-slate-800/40">
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                      <p className="text-[11px] text-slate-500 italic leading-relaxed bg-[#030712] p-2.5 rounded-lg border border-slate-900">
                        {item.details}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why CCT Right Illustration */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-16 w-16 bg-cyan-500/10 rounded-full blur-xl" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUuMaPa9La_ZZZAma5o5XgksaDFps05fmFaHnNApdPBuMfv5O1JK0nHFdQ8SK6Cpm_4KKUy-z4ZTMXvgBEoodaiBU-XazK14uh_DgjdVmgB1o1u21r2Zyqie9raOwJqlCkWcqfVwUiJmrNapDpkiewqkyDHi_MQe0s05-HMwHnUj1ItAjgP8SdqYl1-I1nczeoXMfgYEm17HeOq62i4B4svWt8Sa1sh6WcTE4IXXQvxoT_K2FeObOG1f1BO0JhzyN2loF5dOllHMc"
                alt="Programming lab setups"
                className="w-full h-auto object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Voices of Success */}
      <section className="py-20 bg-slate-950 border-t border-slate-900" id="voices-success">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <div className="text-cyan-500 text-xs font-bold uppercase font-mono tracking-widest">Hall of Fame</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Testimonials & Verified Alumni Reviews
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
              Our student feedback traces our concrete pedagogical dedication in Rohini. Read how certifications unlocked real industrial work opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-cyan-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-cyan-400 shrink-0" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-slate-800/60 mt-6 shrink-0">
                  <div className="h-10 w-10 rounded-full bg-slate-800 text-cyan-400 flex items-center justify-center border border-slate-700 shrink-0 select-none">
                    <span className="text-[11px] font-bold uppercase font-sans">
                      {test.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">{test.name}</h4>
                    <p className="text-[10px] text-cyan-400 font-medium">{test.role}</p>
                    <span className="inline-block mt-1 text-[9px] font-mono bg-slate-800 border border-slate-800 text-slate-500 px-1.5 py-0.5 rounded-md">
                      {test.batch}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8" id="academic-footer">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Col 1 */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-cyan-600 flex items-center justify-center text-white font-black font-sans text-md shadow-md shadow-cyan-500/10">
                C
              </div>
              <div>
                <span className="text-sm font-bold text-white tracking-tight uppercase block leading-none">CCT Academic</span>
                <span className="text-[9px] text-[#0ea5e9] tracking-widest font-mono font-bold">ROHINI SECTOR-11</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering Delhi with certified industry-grade computer code logic, database standards, administrative Excel tools, and modern web software capabilities.
            </p>
            <div className="flex items-center gap-1 text-slate-500 text-xs font-mono font-semibold">
              <Shield className="h-4 w-4 text-cyan-500" /> Fully Vetted & ISO Aligned Learning Trajectories
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest border-b border-slate-900 pb-1.5">Certification Streams</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Master in Computer Software (MCS)</li>
              <li>• Advanced Coding Basics (ACB)</li>
              <li>• Professional IT Skills (PIS)</li>
              <li>• Mobile App Scripting</li>
            </ul>
          </div>

          {/* Col 3 Contact details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest border-b border-slate-900 pb-1.5 font-sans">Contact Headquarters</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex gap-2.5 items-center font-mono">
                <Phone className="h-4.5 w-4.5 text-cyan-500 shrink-0" />
                <a href="tel:08527208085" className="hover:text-cyan-400 transition-colors">08527208085</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <p>© 2026 CCT Computer Education. All Rights Reserved. Delhi, India.</p>
          <div className="flex gap-4 mt-2 sm:mt-0 font-mono text-[10px]">
            <span className="hover:text-slate-300 transition">Syllabus Registry</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition">Terms of Enrollment</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
