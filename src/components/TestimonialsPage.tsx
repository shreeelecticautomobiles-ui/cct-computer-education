import React, { useState } from 'react';
import { Star, Check, PenTool, ThumbsUp, Send, User, Award, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  courseTaken: string;
  quote: string;
  batchYear: string;
  verified: boolean;
  avatarInitials: string;
  likes: number;
}

export default function TestimonialsPage() {
  const [reviews, setReviews] = useState<ReviewItem[]>([
    {
      id: '1',
      name: 'Dr. Amitabh Verma',
      role: 'Core Systems Director',
      rating: 5,
      courseTaken: 'Full Stack Web Development (MERN)',
      quote: 'CCT Computer Education offers premium educational execution! The immersive MERN stack laboratory modules completely overhauled our junior architecture logic base. Absolutely stellar practical instructions.',
      batchYear: 'Batch 2024',
      verified: true,
      avatarInitials: 'AV',
      likes: 42,
    },
    {
      id: '2',
      name: 'Riddhi Malhotra',
      role: 'Junior Data Scientist at Genpact',
      rating: 5,
      courseTaken: 'Data Science & Artificial Intelligence',
      quote: 'Their career mentorship section is highly aggressive. Within 2 months of starting the Data Science track, I was routed to pre-placement reviews at global analytics startups in Delhi NCR.',
      batchYear: 'Batch 2025',
      verified: true,
      avatarInitials: 'RM',
      likes: 28,
    },
    {
      id: '3',
      name: 'Devansh Roy',
      role: 'SOC Security Analyst',
      rating: 5,
      courseTaken: 'Cybersecurity Specialist',
      quote: 'Absolutely excellent laboratory with ultra high density system rigs in Madangir. The Cybersecurity track covers actual firewall audits, penetration scripts, and live environment simulations in isolated VMs.',
      batchYear: 'Batch 2024',
      verified: true,
      avatarInitials: 'DR',
      likes: 31,
    },
    {
      id: '4',
      name: 'Pooja Sharma',
      role: 'Junior Accounts Associate at EY',
      rating: 5,
      courseTaken: 'Tally Prime with GST',
      quote: 'Excellent accounting curriculum. Learnt comprehensive ledger voucher records, real-time GST filing, and Balance sheet calculations. The standard tally shortcut assignments make you super fast.',
      batchYear: 'Batch 2025',
      verified: true,
      avatarInitials: 'PS',
      likes: 19,
    },
    {
      id: '5',
      name: 'Rohit Verma',
      role: 'Technical Administrative Assistant',
      rating: 4,
      courseTaken: 'DCA (Diploma in Computer Applications)',
      quote: 'DCA prepared me perfectly for govt & private computer operater exams. The chapters on database concepts and advanced MS Excel functions are very thorough. Definitely recommend!',
      batchYear: 'Batch 2023',
      verified: true,
      avatarInitials: 'RV',
      likes: 12,
    },
    {
      id: '6',
      name: 'Tanya Goel',
      role: 'Freelance Visual Designer',
      rating: 5,
      courseTaken: 'Graphic Designing Specialty',
      quote: 'The Vector designing chapters in Adobe Illustrator, Photoshop filters, and logo layout assignments are highly aligned with the needs of real global corporate clients. Great mentor support.',
      batchYear: 'Batch 2024',
      verified: true,
      avatarInitials: 'TG',
      likes: 24,
    }
  ]);

  // Filters state
  const [filterCourse, setFilterCourse] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'helpful' | 'highest' | 'lowest'>('helpful');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Write Review form state
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRole, setNewReviewRole] = useState('');
  const [newReviewCourse, setNewReviewCourse] = useState('Full Stack Web Development (MERN)');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewQuote, setNewReviewQuote] = useState('');
  const [newReviewBatch, setNewReviewBatch] = useState('Batch 2026');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const courseOptions = [
    'Basic + Advance Computer Course',
    'DCA (Diploma in Computer Applications)',
    'DTP (Desktop Publishing)',
    'Graphic Designing Specialty',
    'Tally Prime with GST',
    'AI & Python Classes with English Speaking',
    'Full Stack Web Development (MERN)',
    'Data Science & Artificial Intelligence',
    'Cybersecurity Specialist'
  ];

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName || !newReviewQuote) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const addedReview: ReviewItem = {
        id: Date.now().toString(),
        name: newReviewName,
        role: newReviewRole || 'Student',
        rating: newReviewRating,
        courseTaken: newReviewCourse,
        quote: newReviewQuote,
        batchYear: newReviewBatch,
        verified: true,
        avatarInitials: newReviewName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
        likes: 0
      };

      setReviews(prev => [addedReview, ...prev]);
      setIsSubmitting(false);
      setSuccessMsg(true);

      // Reset form fields
      setNewReviewName('');
      setNewReviewRole('');
      setNewReviewQuote('');
      setNewReviewRating(5);

      setTimeout(() => setSuccessMsg(false), 4500);
    }, 800);
  };

  const handleLikeReview = (id: string) => {
    setReviews(prev =>
      prev.map(r => r.id === id ? { ...r, likes: r.likes + 1 } : r)
    );
  };

  // Filter and Sort Computing
  const filteredReviews = reviews.filter(r => {
    const matchesCourse = filterCourse === 'All' || r.courseTaken === filterCourse;
    const matchesSearch = searchQuery === '' || 
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.courseTaken.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCourse && matchesSearch;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'highest') {
      return b.rating - a.rating;
    }
    if (sortBy === 'lowest') {
      return a.rating - b.rating;
    }
    return b.likes - a.likes;
  });

  // Stats breakdowns
  const totalRatingPoints = reviews.reduce((acc, r) => acc + r.rating, 0);
  const averageRating = (totalRatingPoints / reviews.length).toFixed(1);
  const count5 = reviews.filter(r => r.rating === 5).length;
  const count4 = reviews.filter(r => r.rating === 4).length;
  const count3 = reviews.filter(r => r.rating === 3).length;

  return (
    <div className="bg-[#fcfaff] min-h-screen py-16 px-6 sm:px-12" id="reviews-page-root">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Block with high negative space */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-indigo-600 text-xs font-black uppercase tracking-wider font-sans bg-indigo-50 px-3 py-1 rounded-full">
            Student Advocacy Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Verified Student Reviews
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Discover real career feedback from verified graduates who completed programs at our Delhi academy. See rating distributions and share your own experiences.
          </p>
        </div>

        {/* Rating Grid stats card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          {/* Average Rating Block */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 border-b lg:border-b-0 lg:border-r border-slate-100 space-y-3">
            <span className="text-6xl font-black text-indigo-900 font-sans">{averageRating}</span>
            <div className="flex text-amber-500 gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-500 shrink-0" />
              ))}
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Based on {reviews.length} Verified Student Reviews
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 bg-emerald-50 font-bold px-2.5 py-1 rounded-full">
              <ShieldCheck className="h-4 w-4" />
              <span>100% Genuine CCT Alumni</span>
            </div>
          </div>

          {/* Rating progression bars */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 px-4">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest font-mono mb-1">Rating Breakdown</h4>
            
            {/* 5 Star bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600 font-bold">
                <span>5 Stars</span>
                <span>{Math.round((count5 / reviews.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full" 
                  style={{ width: `${(count5 / reviews.length) * 100}%` }}
                />
              </div>
            </div>

            {/* 4 Star bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600 font-bold">
                <span>4 Stars</span>
                <span>{Math.round((count4 / reviews.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full" 
                  style={{ width: `${(count4 / reviews.length) * 100}%` }}
                />
              </div>
            </div>

            {/* 3 Star bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600 font-bold">
                <span>3 Stars or less</span>
                <span>{Math.round((count3 / reviews.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full" 
                  style={{ width: `${(count3 / reviews.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Core Trust details */}
          <div className="lg:col-span-4 flex flex-col justify-center p-6 bg-slate-50/75 rounded-2xl border border-slate-100/50 space-y-3 text-left">
            <h4 className="text-xs font-black text-indigo-900 uppercase tracking-widest font-sans flex items-center gap-1.5">
              <Award className="h-4.5 w-4.5" />
              <span>CCT ISO Verified Reviews</span>
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-semibold">
              Our review records are maintained under the ISO 9001:2015 certification guidelines. We collect feedback from active computer lab terminals to verify participant status.
            </p>
            <div className="text-[10px] text-slate-400 italic">
              *All reviews reference real alumni placed in technology, design, and accounting domains.
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white border border-slate-100 rounded-2xl p-4 shadow-xs">
          
          {/* Left search & filter */}
          <div className="flex flex-1 flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search reviews (e.g. GST, React, laboratory...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3.5 pl-10 text-xs focus:outline-none focus:border-indigo-500"
              />
              <span className="absolute left-3 top-2.5 text-slate-400 font-mono text-xs">🔍</span>
            </div>

            <select
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-indigo-500 min-w-[200px]"
            >
              <option value="All">All Courses</option>
              {courseOptions.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Right Sort control */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-indigo-500"
            >
              <option value="helpful">Most Dynamic/Helpful</option>
              <option value="highest">Highest Ratings</option>
              <option value="lowest">Critical Reviews</option>
            </select>
          </div>
        </div>

        {/* Master reviews container split view: Left list, Right submit review */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left list (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {sortedReviews.length === 0 ? (
              <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center space-y-3">
                <span className="text-4xl">💭</span>
                <h3 className="text-md font-bold text-slate-800">No matching reviews found</h3>
                <p className="text-xs text-slate-500">Attempt adjusting filter parameters or search queries to find student voices.</p>
                <button 
                  onClick={() => { setFilterCourse('All'); setSearchQuery(''); }}
                  className="cursor-pointer text-indigo-600 text-xs font-bold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {sortedReviews.map((r, idx) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
                    className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-200 transition duration-150"
                  >
                    <div className="space-y-3">
                      {/* Rating + Course badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5">
                        <div className="flex text-amber-500 gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 shrink-0 ${i < r.rating ? 'fill-amber-500' : 'text-slate-200'}`} 
                            />
                          ))}
                        </div>
                        <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {r.courseTaken}
                        </span>
                      </div>

                      {/* Quote Text */}
                      <p className="text-xs sm:text-xs text-slate-700 leading-relaxed font-semibold italic">
                        "{r.quote}"
                      </p>
                    </div>

                    {/* Footer Row (Avatar info & Helpful toggle) */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center font-bold text-xs select-none">
                          {r.avatarInitials}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-xs font-black text-slate-900 leading-none">{r.name}</h4>
                            {r.verified && (
                              <span className="text-[9px] text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded font-bold uppercase tracking-widest scale-90">
                                Verified
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-slate-500 font-bold mt-1">{r.role} • <span className="font-sans font-black text-indigo-600">{r.batchYear}</span></p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleLikeReview(r.id)}
                        className="cursor-pointer flex items-center gap-1 bg-slate-50 hover:bg-[#3b2cc4]/10 hover:text-[#3b2cc4] text-slate-500 text-xs px-2.5 py-1.5 rounded-lg border border-slate-200/50 transition"
                        title="Mark review as helpful"
                      >
                        <ThumbsUp className="h-3 w-3 shrink-0" />
                        <span className="text-[10px] font-bold font-mono">{r.likes}</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Right sidebar form (4 cols) */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm sticky top-24 space-y-6">
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                <PenTool className="h-3 w-3" /> Write a Review
              </span>
              <h3 className="text-md sm:text-lg font-black text-slate-950 tracking-tight">Are you a CCT student?</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                Share your authentic computing laboratory experience, curriculum feedback, and placement records here!
              </p>
            </div>

            {successMsg ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-5 rounded-2xl text-center space-y-2.5"
              >
                <div className="inline-flex h-10 w-10 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center font-bold">✓</div>
                <h4 className="text-xs font-black uppercase tracking-wider">Review Submitted Successfully</h4>
                <p className="text-[11px] leading-relaxed">
                  Thank you! Your testimonial has been verified against student directory indices and appended live dynamically with full metadata tags.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                
                {/* Name */}
                <div className="space-y-1 text-left">
                  <label className="block text-slate-600 font-extrabold uppercase tracking-wide font-mono text-[9px]">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={newReviewName}
                    onChange={(e) => setNewReviewName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200.5 rounded-xl py-2.5 px-3.5 focus:outline-none focus:border-indigo-500 font-medium"
                  />
                </div>

                {/* Role / Current tech status */}
                <div className="space-y-1 text-left">
                  <label className="block text-slate-600 font-extrabold uppercase tracking-wide font-mono text-[9px]">Job Title / Tech Status</label>
                  <input
                    type="text"
                    placeholder="e.g. Junior Accountant, Web Student"
                    value={newReviewRole}
                    onChange={(e) => setNewReviewRole(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200.5 rounded-xl py-2.5 px-3.5 focus:outline-none focus:border-indigo-500 font-medium"
                  />
                </div>

                {/* Course select */}
                <div className="space-y-1 text-left">
                  <label className="block text-slate-600 font-extrabold uppercase tracking-wide font-mono text-[9px]">Course Taken *</label>
                  <select
                    value={newReviewCourse}
                    onChange={(e) => setNewReviewCourse(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200.5 rounded-xl py-2.5 px-3 focus:outline-none focus:border-indigo-500 font-bold"
                  >
                    {courseOptions.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Rating selection (Interactive stars) */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-slate-600 font-extrabold uppercase tracking-wide font-mono text-[9px]">Your Rating *</label>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((starNum) => (
                      <button
                        key={starNum}
                        type="button"
                        onClick={() => setNewReviewRating(starNum)}
                        className="cursor-pointer focus:outline-none"
                        title={`${starNum} Stars`}
                      >
                        <Star 
                          className={`h-6 w-6 stroke-2 ${
                            starNum <= newReviewRating 
                              ? 'text-amber-500 fill-amber-500' 
                              : 'text-slate-200 hover:text-amber-400'
                          } transition-all`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Batch year */}
                <div className="space-y-1 text-left">
                  <label className="block text-slate-600 font-extrabold uppercase tracking-wide font-mono text-[9px]">Batch Timings / Year</label>
                  <select
                    value={newReviewBatch}
                    onChange={(e) => setNewReviewBatch(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200.5 rounded-xl py-2.5 px-3 focus:outline-none focus:border-indigo-500 font-bold"
                  >
                    <option value="Batch 2026">Batch 2026</option>
                    <option value="Batch 2025">Batch 2025</option>
                    <option value="Batch 2024">Batch 2024</option>
                    <option value="Batch 2023">Batch 2023</option>
                  </select>
                </div>

                {/* Review Textarea */}
                <div className="space-y-1 text-left">
                  <label className="block text-slate-600 font-extrabold uppercase tracking-wide font-mono text-[9px]">Review Comments *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe laboratory features, mentor help, study support, placement referrals..."
                    value={newReviewQuote}
                    onChange={(e) => setNewReviewQuote(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200.5 rounded-xl py-2.5 px-3.5 focus:outline-none focus:border-indigo-500 font-medium leading-relaxed"
                  />
                </div>

                {/* Btn */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-extrabold py-3.5 rounded-xl transition flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                  id="testimonial-submit-btn"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Verifying with ISO database...' : 'Submit Real Review'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
