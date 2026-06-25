import { useState } from 'react';
import { Award, Search, Check, Play, Star, Calendar, Clock, Sparkles, BookOpen, MapPin, Phone, GraduationCap, X } from 'lucide-react';
import { Course } from '../types';

interface ThemeConquerProps {
  onBookDemo: (courseTitle?: string) => void;
  onAddToCart: (course: Course) => void;
  enrolledIds: string[];
}

export default function ThemeConquer({ onBookDemo, onAddToCart, enrolledIds }: ThemeConquerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; url: string } | null>(null);
  const [bookedMentor, setBookedMentor] = useState<string | null>(null);

  const statsHighlighted = [
    { value: '100k+', label: 'Successful Graduates' },
    { value: '150+', label: 'Expert Mentors' },
    { value: '2k+', label: 'Online Lectures' },
    { value: '95%', label: 'Active Placement Rate' }
  ];

  const batches: Course[] = [
    {
      id: 'fs_master',
      title: 'Full Stack Masterclass (MERN Stack)',
      price: 4999,
      originalPrice: 12000,
      duration: '6 Months Live',
      rating: 4.9,
      reviewsCount: 1420,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnWyAK0o4Zgz06dL1XH4BgBh9s4mmiLjCvEhh_QfY4x79M4YXBI6qCoqYREzA-HUu730lI1yu0Pwbf7mh5Bj3QhjpKfYJ2fFNOwd1GTn87JIc2h6mf90Vum0bRjCAtMb3nKT0vp7fzvLbC6XOkFzZiNWC7iDHff_c5K3at3rPI1yKUEvW88rt1k1GMDhsKDH6j4TNFg_9ObjDogrw30tLU5hUl32VWbQNmG30fzs36LnXziIfVKcVrO7zo33GGZ_ImNFRob5tfBpY',
      tags: ['React 18', 'NodeJS', 'Express', 'MongoDB'],
      description: 'Acquire complete logical control. Build highly responsive layout forms, database transactional models, and secure server nodes from scratch.',
      syllabus: ['React Router & Global Context APIs', 'NodeJS Express server routers & middleware', 'Unstructured MongoDB collections', 'Heroku & Cloud deployments']
    },
    {
      id: 'ds_master',
      title: 'Advanced Data Science & Analytics',
      price: 3499,
      originalPrice: 9500,
      duration: '4 Months Live',
      rating: 4.8,
      reviewsCount: 890,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPO-K64v1v7lxZ1k4Y7BjZCJsMdRVKzrLYtbXVwBTVMBs3lGnyn0bB-Tr2Bl-DqGkNMtR10v-OPcTAZZ_e87bNJvH6lAglFTpCx7PxHh9AZ7qkwJGAAt9Y9cAHzwlojOjC3tsbTAZR5IdUQW1hv2JTjWuAj8bgeOPvUTyjiWxehn4QU2WCTjRHuYNyF4ujUsYGwR4oqoYGnqQ9TMfFzO28fIjrC2gOTDpaqPTZCGC6VGoZ5ZIAgPhqZ7l9f-TiKBGwCrTwRMdu9io',
      tags: ['Python Core', 'Pandas', 'Matplotlib', 'Jupyter'],
      description: 'Analyze statistics, translate large files into interactive reports, clean complex worksheets, and formulate predictive models.',
      syllabus: ['Python array manipulation: NumPy & Pandas', 'Data visualization: Matplotlib grids', 'Algorithmic regression modeling', 'SQL relational joints & collections']
    },
    {
      id: 'cs_master',
      title: 'Cybersecurity Masterclass & Defense',
      price: 5999,
      originalPrice: 15000,
      duration: '5 Months Live',
      rating: 4.9,
      reviewsCount: 654,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHuKN97VWLl6AQF4Kv6gpRcO_yUkhrnqj4uzkQKPsBYUg-jf3a_zY1GRY3l4ok_Sx1oor-PTvkjAF_lX0LylX6xYNShXapn8MQzlq4nqDGkFCmbX6d44aeUOlcuST9oHxPYahcNmOQYiS-MlNF5mymDXd83E8tDhhqHCi-CgkBo77mybvgYvNw1x_uBVSd9e-yypMb4p4unRcqUaKByJx845Q153NVuv9uaS67JkR4cBQIhEPmt33Nsa8ydH12jNPy-PNLAYtotVY',
      tags: ['Pen testing', 'Kali Linux', 'Wireshark', 'Metasploit'],
      description: 'Audit network routing structures, decrypt protocols, configure firewall defenses, and study OWASP compliance benchmarks.',
      syllabus: ['Analyzing network ports via Wireshark', 'Kali Linux penetration test execution', 'OWASP defensive benchmarks', 'Firewall security setups']
    }
  ];

  const mentors = [
    {
      id: 'amit',
      name: 'Dr. Amit Sharma',
      role: 'Ex-Lead Dev at Microsoft',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK6h5nVbcz2qK25JrpsmUEoLPC7UV-8Kdj2zbD7wsvU_gZwQdNa636IzzO7u5145jZzsJKQnOs_c2oRNzQnMayBRNNy_T806YA5Y32INtIi7nmSv82_FUzdQ3RLbJE39itIxTvHfu6qNvowUxYx73Q6wN9zBweHgoEIe98YjzIgfri_tpkIYYNY5SPOeTIH_BpybkTKUnf8knAb_aFNpBFf-MWRdqi0-ecqCO_u34eFYZiFOU6arZWL5vRmWuMptIMSJy-BZ9b1_4',
      bio: 'PhD in Computer Science with 15+ years engineering operating system scaling protocols.'
    },
    {
      id: 'priya',
      name: 'Priya Verma',
      role: 'Senior Data Scientist',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAa6bAFm4BfbYSzHZN542bqW_Wjm3dhlU86wmSupjs5JChUEaQasCJjvj_74w1Y6HnNZq5D6YhjD3PHnzliNOkP7uQLL6RgBdec7BdRErLuZMioDu5lZvcgK2y_S6rnO9zC4jPI0X9GzgX658y0IlrjBR0f8zjS4wRylYkdzbTz5Ytk4WdEYLqnUvQpSFywycBSXZZ_WkpaLwuDJymjTBadIjXyL-0oRm_q7k1Y5ObYao4rRRFmagdpw4_vPWhfNX-GMW7yOAnVzw',
      bio: 'AI consultant and developer specialized in statistical modeling, neural arrays, and descriptive charts.'
    },
    {
      id: 'rajesh',
      name: 'Rajesh Iyer',
      role: 'Founder & Head Educator',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd4jHjKdb7ZU-qPvu0PRGIErR7QlECvyqo_-PcuGmXC9zLQ2qOqxJN4b2_sWsVlMEYaRoDdxMlg1pzUc4tkK5v0Fn2AE755uRUEXfB5Sy-S4uRttfnKR2P16GJH1mEklzlTyAPeZLUunEIGvyoPaoZdc0mt2yhL2QPK-f_V_H518VznMRUeyJwx5L2EEy7TnRu0dpJxvAyDExU4Skb2tlebMbBxekpVQOE_-ENDx4lJa147UcLtO2B1skw4sBB3qScSDjO6X755Mo',
      bio: 'Pioneered CCT Rohini center curriculums, mentoring over 50k graduates into technology sectors.'
    }
  ];

  // Live filter batches based on search querying
  const filteredBatches = batches.filter((b) => {
    const q = searchQuery.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.tags.some((t) => t.toLowerCase().includes(q)) ||
      b.description.toLowerCase().includes(q)
    );
  });

  const triggerLecturePlay = (title: string) => {
    setSelectedVideo({
      title,
      url: 'https://www.w3schools.com/html/mov_bbb.mp4' // placeholder playable mock video
    });
  };

  const scheduleOfficeHour = (mentorName: string) => {
    setBookedMentor(mentorName);
    setTimeout(() => {
      setBookedMentor(null);
      alert(`Office hour scheduled successfully with ${mentorName}. Look out for Zoom codes in inbox!`);
    }, 1500);
  };

  return (
    <div className="bg-[#f0f9ff] text-slate-800 font-sans min-h-screen selection:bg-sky-200">
      {/* Light Sky Header Hero */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-[#e3f2fd] via-[#f0f9ff] to-[#f0f9ff] overflow-hidden border-b border-sky-100" id="conquer-hero">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-sky-200/80 text-sky-800 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-sky-600 animate-spin" /> High-Density Batches Active Now
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
              Master Skills, <br />
              <span className="text-sky-600">Conquer the Future.</span>
            </h1>
            <p className="text-sm sm:text-md text-slate-600 max-w-xl leading-relaxed">
              Premium computer education tailored for success. Get certified by top industry mentors and join a community of 50k+ successful graduates across Delhi.
            </p>

            {/* LIVE QUERY LIVE SEARCH BAR */}
            <div className="relative max-w-md shadow-lg rounded-xl bg-white p-1 border border-sky-150">
              <span className="absolute left-4 top-4 text-slate-400">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses: Python, Web Dev, Java, Security..."
                className="w-full bg-transparent pl-11 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none text-slate-800 font-sans"
                id="conquer-course-search"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Course stats banner line */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-sky-100/80">
              {statsHighlighted.map((s, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-md sm:text-lg font-black text-slate-900">{s.value}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-none">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onBookDemo('General IT Career Consulting')}
                className="cursor-pointer bg-sky-600 hover:bg-sky-700 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/10 transition"
                id="conquer-book-demo-btn"
              >
                Book a Free Demo Class
              </button>
              <a
                href="#top-batches"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs"
              >
                Explore Batches
              </a>
            </div>
          </div>

          {/* Right Hero Frame */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-2xl bg-sky-400/20 blur-xl animate-pulse" />
            <div className="relative rounded-2xl overflow-hidden border border-sky-100 bg-white p-2 flex justify-center items-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPhpDW_hkmmRIEXs6A8lJyqdkO03aMOfTnqznWSm95XcmDMUoqsXwGJQ3bLq74fKAjZTKdgYtUWIYxpYkvixA96haAdbmlGXESJ4Ut78jZVF_EhefuYoEjX5tvxoVvEeZnxMeREAS4OMEGl5ep4Fa-uYqIhjaR-7OnsAK8MDYn4rbvyAB410AtVIOHEa9v0RK313DSIkOjAEsEF7xlQT1LMYKTIH8RZh4UyyEDs09ixEDp0WdDLl1yaSNXyZ-YAGXzgCt_g4ydOEM"
                alt="Happy computing student inside laboratory"
                className="w-full h-auto object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE TOP BATCHES */}
      <section className="py-20 max-w-7xl mx-auto px-6" id="top-batches">
        <div className="text-center space-y-3 mb-16">
          <span className="text-sky-600 text-xs font-black uppercase tracking-wider font-sans">Enrolling Currently</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Explore Our Top Batches</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            These active schedules in Delhi offer real-time mentoring files, daily graded code challenges, and certified industrial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Batches Left: Active Batches Grid */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredBatches.map((b) => (
              <div
                key={b.id}
                className="bg-white border border-sky-100/60 rounded-2xl overflow-hidden hover:border-sky-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full"
                id={`batch-card-${b.id}`}
              >
                <div>
                  {/* Banner */}
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-sky-600 text-white text-[9px] px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                      {b.duration}
                    </div>
                  </div>

                  {/* Body details */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                      <Star className="h-4 w-4 fill-amber-500" />
                      <span>{b.rating}</span>
                      <span className="text-slate-400 font-semibold">({b.reviewsCount}+)</span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-black text-slate-900 leading-snug group-hover:text-sky-600 transition">
                      {b.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {b.description}
                    </p>

                    {/* Syllabus lines */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mb-1.5">Weekly Core Syllabus</div>
                      <div className="space-y-1 text-xs text-slate-600">
                        {b.syllabus.map((syl, idx) => (
                          <div key={idx} className="flex gap-1.5 items-start">
                            <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{syl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Purchase area */}
                <div className="p-5 pt-0 border-t border-slate-100/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block text-line-through">₹{b.originalPrice?.toLocaleString('en-IN')}</span>
                    <span className="text-md sm:text-lg font-black text-slate-900">₹{b.price.toLocaleString('en-IN')}</span>
                  </div>
                  <button
                    onClick={() => onAddToCart(b)}
                    disabled={enrolledIds.includes(b.id)}
                    className={`cursor-pointer rounded-lg px-4.5 py-2 text-xs font-bold transition flex items-center gap-1 ${
                      enrolledIds.includes(b.id)
                        ? 'bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-500/10'
                    }`}
                    id={`add-to-cart-conquer-${b.id}`}
                  >
                    {enrolledIds.includes(b.id) ? 'Enrolled' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            ))}

            {filteredBatches.length === 0 && (
              <div className="sm:col-span-2 py-12 text-center text-slate-400 font-medium">
                No batches found matching "{searchQuery}". Try 'python' or 'web dev'!
              </div>
            )}
          </div>

          {/* Batches Right Side components: Free Demo Video Player & Location highlights */}
          <div className="md:col-span-4 space-y-6 text-left">
            {/* Free Demo Lecture Launcher Card */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-20 w-20 bg-indigo-500/10 rounded-full blur-xl animate-pulse" />
              <div className="space-y-4 relative">
                <span className="inline-flex bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider uppercase font-mono">
                  No Cost Demo Inside
                </span>
                <h4 className="text-md font-bold tracking-tight">Free Live Demo Classes</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Inspect our advanced layout files and modular instruction style instantly with simulated stream lectures.
                </p>

                {/* Simulated video cards links */}
                <div className="space-y-2 pt-1">
                  {[
                    { label: 'MERN State Management Hooks', code: 'React 18 Hooks' },
                    { label: 'Database indexing & profiling', code: 'MongoDB logic' },
                    { label: 'Network Threat Modeling & Audits', code: 'Cyber defense' }
                  ].map((video, vIdx) => (
                    <button
                      key={vIdx}
                      onClick={() => triggerLecturePlay(video.label)}
                      className="cursor-pointer w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-between border border-white/5 hover:border-white/10 transition group"
                    >
                      <div>
                        <h5 className="text-xs font-bold text-white group-hover:text-cyan-400 transition">{video.label}</h5>
                        <p className="text-[10px] text-slate-400 font-mono mt-0.5">{video.code}</p>
                      </div>
                      <div className="h-7 w-7 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center shrink-0">
                        <Play className="h-3.5 w-3.5 fill-slate-900 ml-0.5" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Placement assurance banner details */}
            <div className="bg-white border border-sky-100 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase">ISO Certified Delhi center</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-bold uppercase tracking-wider">Placement Board Aligned</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our certifications are recognized globally. Over 50k graduates are employed in product software firms and administration headquarters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARN FROM BEST MINDS */}
      <section className="py-20 bg-white border-t border-b border-sky-100/50" id="best-minds">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-sky-600 text-xs font-black uppercase tracking-wider font-sans">Vetted Guides</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Learn from the Best Minds</h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              Our instructional staff includes Ex-Developers, analytical consultants, and database architects focused on hands-on logic files.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((m) => (
              <div
                key={m.id}
                className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:border-sky-300 hover:shadow-lg transition flex flex-col group relative"
                id={`mentor-card-${m.id}`}
              >
                {/* Photo frame */}
                <div className="h-64 overflow-hidden relative bg-slate-200">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 border border-sky-100 px-2.5 py-1 text-[10px] font-bold text-sky-700 rounded-full flex items-center gap-1 shadow-xs">
                    <Clock className="h-3.5 w-3.5" /> Hours Live
                  </div>
                </div>

                {/* Info details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-md font-black text-slate-900 group-hover:text-sky-600 transition">{m.name}</h3>
                    <p className="text-xs font-bold text-sky-600 uppercase tracking-wide">{m.role}</p>
                    <p className="text-xs text-slate-500 leading-relaxed italic">{m.bio}</p>
                  </div>

                  <button
                    onClick={() => scheduleOfficeHour(m.name)}
                    disabled={bookedMentor === m.name}
                    className="cursor-pointer w-full bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-700 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition"
                    id={`schedule-mentor-btn-${m.id}`}
                  >
                    <Calendar className="h-3.5 w-3.5 text-sky-600" />
                    {bookedMentor === m.name ? 'Saving slot...' : 'Book 1-on-1 Office Hour'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white pt-16 pb-8" id="conquer-footer">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Col 1 */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-sky-600 flex items-center justify-center text-white font-black text-md">
                C
              </div>
              <div>
                <span className="text-sm font-bold tracking-tight block uppercase">CCT COMPUTER EDUCATION</span>
                <span className="text-[8px] text-sky-400 tracking-widest font-mono font-bold block">NEW DELHI HQ</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Delhi's premier institute helping students globally master database setups, React functional compiler stateful nodes, and network threat auditing.
            </p>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-1.5">Admission streams</h4>
            <div className="space-y-1.5 text-xs text-slate-500 font-semibold">
              <p>• Full Stack Masterclass (MERN)</p>
              <p>• Advanced Data Science</p>
              <p>• Cybersecurity Defense</p>
              <p>• Professional IT Skills</p>
            </div>
          </div>

          {/* Col 3 HQ address details */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-1.5">Center Details</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex gap-2.5 items-center">
                <Phone className="h-4.5 w-4.5 text-sky-500 shrink-0" />
                <a href="tel:08527208085" className="font-mono hover:text-sky-400 transition-colors">08527208085</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <p>© 2026 CCT Computer Education. All Rights Reservd. Delhi, India.</p>
          <div className="flex gap-4 mt-2 sm:mt-0 font-mono text-[9px]">
            <span>Regulatory Register</span>
            <span>•</span>
            <span>Syllabus Compliance</span>
          </div>
        </div>
      </footer>

      {/* Video Popup Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden relative shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
              <h5 className="text-xs font-bold text-slate-200 uppercase tracking-widest">{selectedVideo.title}</h5>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {/* Video mockup frame */}
            <div className="p-4 bg-black flex justify-center items-center h-80 relative group">
              <video
                src={selectedVideo.url}
                controls
                autoPlay
                className="w-full h-full object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
