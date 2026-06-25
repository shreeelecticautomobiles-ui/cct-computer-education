import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy, ArrowRight, RefreshCcw, CheckCircle, HelpCircle } from 'lucide-react';

interface Question {
  text: string;
  options: { label: string; score: number }[];
}

export default function CourseQuiz() {
  const [currentIdx, setCurrentIdx] = useState(-1); // -1 is entry splash
  const [score, setScore] = useState(0);
  const [recommendation, setRecommendation] = useState('');

  const questions: Question[] = [
    {
      text: 'What is your primary career aspirational objective?',
      options: [
        { label: 'Start from absolute scratch and build deep typing & fundamental logic computer literacy', score: 2 },
        { label: 'Secure a high-salary industry job as a Full-Stack Software Developer/Engineer', score: 5 },
        { label: 'Master AI modeling, analytics, statistics, and business intelligence reporting', score: 4 },
        { label: 'Secure systems against cyberattacks, study firewall configurations and protocols', score: 3 }
      ]
    },
    {
      text: 'How much coding background do you currently have?',
      options: [
        { label: 'Zero experience (I have never written code before or did a tiny spreadsheet formula)', score: 1 },
        { label: 'Basic concepts (I understand conditional logic, arrays, and standard variable declarations)', score: 3 },
        { label: 'Moderate (I can write complete modules but lack structured architectural standards)', score: 5 }
      ]
    },
    {
      text: 'How many hours per week can you allocate towards learning and lab practice?',
      options: [
        { label: 'Light commitments: Around 3 to 5 hours per week', score: 2 },
        { label: 'Intensive growth: 10 to 15 hours per week of deep lab exercises', score: 5 }
      ]
    },
    {
      text: 'Which technology category excites you most to explore right now?',
      options: [
        { label: 'Visual layouts, web services, database synchronization, and scalable APIs', score: 5 },
        { label: 'Neural networks, regression modeling, pandas, charts, and deep statistics', score: 4 },
        { label: 'Desktop software architecture foundation, C/C++ core compilers, and office packages', score: 2 }
      ]
    }
  ];

  const handleAnswer = (optionScore: number) => {
    const nextScore = score + optionScore;
    setScore(nextScore);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      // Calculate Recommendation
      if (nextScore >= 16) {
        setRecommendation('Full Stack Web Development (MERN) or Advanced Data Science & AI. You have strong foundations for elite production engineers.');
      } else if (nextScore >= 11) {
        setRecommendation('Master in Computer Software (MCS) or Accelerated Backend programs. These offer deep professional growth.');
      } else if (nextScore >= 7) {
        setRecommendation('Advanced Coding Basics (ACB) or Cybersecurity Defense. Ideal for securing stable foundational skills.');
      } else {
        setRecommendation('Professional IT Skills (PIS). Great starter track to build solid industry foundations before engineering.');
      }
      setCurrentIdx(questions.length); // final screen
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(-1);
    setScore(0);
    setRecommendation('');
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden font-sans">
      <div className="p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-indigo-400" />
          <h4 className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider">CCT Adaptive Placement Engine</h4>
        </div>
        {currentIdx >= 0 && currentIdx < questions.length && (
          <span className="text-xs text-slate-500 font-mono">
            Step {currentIdx + 1} of {questions.length}
          </span>
        )}
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {currentIdx === -1 && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-4"
            >
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-3 border border-indigo-500/20">
                <Sparkles className="h-6 w-6" />
              </div>
              <h5 className="text-md sm:text-lg font-bold text-slate-100 tracking-tight mb-2">Unsure Which Certification Fits Best?</h5>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6 leading-relaxed">
                Answer 4 quick technical questions. Our neural routing algorithm will calculate the ideal batch pace and trajectory to maximize your placement.
              </p>
              <button
                onClick={() => setCurrentIdx(0)}
                className="cursor-pointer inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 py-2.5 text-xs font-bold shadow-lg shadow-indigo-600/20 transition"
              >
                Assess My Skills <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}

          {currentIdx >= 0 && currentIdx < questions.length && (
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mb-4">
                <div
                  className="bg-indigo-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>

              <h5 className="text-sm sm:text-md font-bold text-slate-100 leading-snug">
                {questions[currentIdx].text}
              </h5>

              <div className="space-y-2 pt-2">
                {questions[currentIdx].options.map((option, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-3.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-300 text-xs font-semibold tracking-wide transition leading-relaxed flex items-start gap-2"
                  >
                    <span className="h-5 w-5 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center shrink-0 text-[10px] font-bold">
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {currentIdx === questions.length && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/20 animate-pulse">
                <Trophy className="h-7 w-7" />
              </div>
              <h5 className="text-md sm:text-lg font-bold text-slate-100 mb-1">Your Curated Career Track Match!</h5>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 my-4 max-w-md mx-auto">
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#06b6d4]">Recommended Curricular Match</div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1.5 leading-relaxed">
                  {recommendation}
                </div>
              </div>

              <p className="text-[11px] text-slate-500 max-w-sm mx-auto mb-6 leading-relaxed">
                Connect with admission advisors to learn about monthly installment plan structures and live reservation capacities.
              </p>

              <div className="flex justify-center gap-3">
                <button
                  onClick={resetQuiz}
                  className="cursor-pointer inline-flex items-center gap-2 border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-400 rounded-lg px-4 py-2 text-xs font-semibold transition"
                >
                  <RefreshCcw className="h-3.5 w-3.5" /> Start Over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
