import { useState } from 'react';
import { Award, Terminal, Code, Cpu, CloudCheck, ShieldAlert, Cpu as Layers, Star, Info, MapPin, Phone } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';
import { Course } from '../types';

interface ThemeSkillsProps {
  onBookDemo: (courseTitle?: string) => void;
  onAddToCart: (course: Course) => void;
  enrolledIds: string[];
}

export default function ThemeSkills({ onBookDemo, onAddToCart, enrolledIds }: ThemeSkillsProps) {
  const [selectedTech, setSelectedTech] = useState<string>('python');

  const techStack = [
    {
      id: 'python',
      title: 'Python for AI & Data Science',
      desc: 'Master regression modeling, vectorized computation, neural backprop, and cloud-hosted data pipelines.',
      tools: ['Pandas', 'FastAPI', 'PyTorch', 'TensorFlow'],
      badge: 'Advanced Core ML'
    },
    {
      id: 'java',
      title: 'Enterprise Java Engineering',
      desc: 'Design synchronous server transaction protocols, multi-threaded worker pools, and hibernate repository interfaces.',
      tools: ['Spring Boot', 'SQL Server', 'Hibernate', 'Docker'],
      badge: 'Backbone Systems'
    },
    {
      id: 'cloud',
      title: 'Cloud Systems & DevOps',
      desc: 'Automate build configurations, coordinate container fabrics, configure cloud ingress routes, and manage secrets.',
      tools: ['AWS Services', 'Docker', 'Kubernetes', 'Actions CI/CD'],
      badge: 'DevOps Verified'
    },
    {
      id: 'web',
      title: 'Full-Stack React & Node',
      desc: 'Construct low-latency stateful single page apps, custom REST routers, secure cookie authenticators, and ORM pipelines.',
      tools: ['React 19', 'NodeJS', 'PostgreSQL', 'TailwindCSS'],
      badge: 'MERN & Beyond'
    },
    {
      id: 'security',
      title: 'Cybersecurity & Defenses',
      desc: 'Formulate threat models, inspect server socket captures, auditing ports, and hardener configurations.',
      tools: ['Linux Terminal', 'OWASP Rules', 'Metasploit', 'Nmap Tool'],
      badge: 'SOC Compliance Master'
    }
  ];

  const acceleratedPrograms: Course[] = [
    {
      id: 'benode',
      title: 'Backend Development with Node.js',
      price: 30000,
      originalPrice: 42000,
      duration: '4 Months Certification',
      rating: 4.9,
      reviewsCount: 185,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_7FlW5ukvFeUQFEKyJT12GDwZVdCMsZGjFkpj1Cjm0BNu-WvOz_kDjd7XV34Z4a4AS6e92IkjRDRi4SxmR7-AJkfeIoSM7A-8CGLnkiUnlrXMxf3ZcoWr_TPVL7scNs6tWgl_K_0xppXarsODry7jX6IffPLwuZgr_g5GRs2t4eWjInPDpFTWclGpW0hjd9Qba6vd3ZSO4fgnhbdDKNegMro87wCQQy13ewbKqIgp4I9Mb2rViOSjepa0PK6a9_lxWoaJfsjUUqE',
      tags: ['Express', 'Redis Cache', 'PostgreSQL', 'JWT Auth'],
      description: 'Acquire elite server logic. Deploy custom auth strategies, caching buffers, high-speed relational pools, and stateful socket gateways.',
      syllabus: ['Architecture: MVC server setup protocols', 'Data: Redis Cache & PostgreSQL transaction queries', 'Secure: JWT validation, helmet headers', 'Scaling: Cluster management & task runners']
    },
    {
      id: 'uiuxm',
      title: 'UI/UX Design Masterclass',
      price: 25000,
      originalPrice: 35000,
      duration: '3 Months Certification',
      rating: 4.8,
      reviewsCount: 211,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLNiUEUGRwY_gBfOYJpUFgFNWUYJ8knH26KQhQ5FQddTacvGam9ZPstkBmkMpy7eyF2-hWFJ_iia39VJoOzVx4chre34Ah3hg-B0-h8CjQ2avwKNPNQ_fg9GE3sQiS_YScoKRc_S0xSdbKdNlQ0qRozXYt687TNH9-5l0bqY7fua_2kd-9O_bq0NVWRKF9m_mwyeqitdeCqkI74NpHAfS2qSE-DmTN6_kpcRpZLM9opXh8nQFtVM5_p5CowHzjk63qKI89QvKdpWg',
      tags: ['Figma Pro', 'Wireframing', 'Design Systems', 'Usability'],
      description: 'Master advanced typography pairing, spatial responsive containers, components design systems, and client validation testing protocols.',
      syllabus: ['Figma: Component variance, layout grids', 'Strategy: User journey charting', 'Execution: Building micro-interactions', 'Compliance: WCAG accessibility standards']
    },
    {
      id: 'amln',
      title: 'Advanced Machine Learning Neural Nets',
      price: 45000,
      originalPrice: 65000,
      duration: '5 Months Specialized',
      rating: 4.9,
      reviewsCount: 167,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0FoPlc5oZT5BdLlg-kGKXEGv6LJnDhGSotT-ynxqWdfvsV5VTAhrNfaAFamprWtA4FFYlquKga8PIi_i82ZOB8oF3dVyYYLxChSEaQnR1dtNzGSvFjlGW_tENSxBS1YPjQywPbA8F3XlSZvWL4LTfrpXwgGbxrApAS-9vZz1pGK04GoI_A1T1WdhHBTtFNs_WY4vDuEXmw2L6muHkefqN-xJSRwmUzFMe6lvKXzMqanIbkdmoGq78Em-doWjkq6JKQKowRt9SIAk',
      tags: ['CNNs/RNNs', 'PyTorch', 'Data Sprints', 'GPU Clusters'],
      description: 'Deep dive into computer vision algorithms, recursive text predictors, transformer blocks, and distributed GPU hyperparameter tuning.',
      syllabus: ['Models: Multilayer perceptrons, convolution layers', 'Tuning: Loss optimizations & regularizers', 'Pipelines: Distributed model serving', 'Simulation: Deploying AI models to web environments']
    }
  ];

  const currentTech = techStack.find((t) => t.id === selectedTech) || techStack[0];

  return (
    <div className="bg-[#020617] text-slate-100 font-mono min-h-screen selection:bg-cyan-500/20">
      {/* Cyber Hero */}
      <section className="relative pt-12 pb-24 overflow-hidden border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950" id="skills-hero">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Hero text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded px-2.5 py-1 text-[11px] font-semibold text-indigo-400 uppercase tracking-widest">
              <Terminal className="h-4 w-4" /> Systems Console V4.12
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans text-white leading-[1.1]">
              Master the Code <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">That Defines Tomorrow.</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans max-w-lg">
              Unlock enterprise coding, container pipelines, and cybersecurity defenses. Build structured web files, run debugger logs, and compile certified skill trajectories at Delhi's premier sandbox.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onBookDemo('General IT Career Consulting')}
                className="cursor-pointer bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded tracking-wide border border-indigo-500/20 shadow-lg shadow-cyan-500/5 transition font-sans"
                id="skills-book-demo-btn"
              >
                Launch Sandbox Free Demo
              </button>
              <a
                href="#interactive-playground"
                className="inline-flex items-center justify-center border border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:border-slate-700 px-6 py-3 rounded text-xs font-semibold tracking-wide transition font-sans"
              >
                Access Interactive Playground
              </a>
            </div>
          </div>

          {/* Right graphics - code editor */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-20 blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2 shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-HjTXcsYW6FuwM4K6Cdx8W5PBFprA2CPhoRH1PzWP6xnRz-pps-SA7Mn7q8fkge26tYmhSileT2_vpPY3lvCDP0o7JjAFsVolQq0qVRsfGRGEqrQF05_UkMg8CN8y_zaKj7qHthxb3mUOBviq_0KsoScco3SO6zG2cKjpC2Vc3w08T_f2_-QtXD9MFMRFn4i5C7Q-nZFCXK9RlWOgySiOF47X4wsglc5s28VFYpb5DrPqaQSdMg3_Nb6q3pOBk1yOcsftR6_ybTc"
                alt="Cloud code testing framework illustration"
                className="w-full h-auto object-cover rounded-xl border border-slate-900"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded CLi Terminal Playground */}
      <section className="py-20 max-w-7xl mx-auto px-6" id="interactive-playground">
        <div className="space-y-3 mb-12 text-left">
          <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Compiler Terminal</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">Active Curricular Sandbox Code Workspace</h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-xl">
            Test our workspace compiler logic live. Try editing the counter script block below and click 'Run' to inspect structural validations in real-time.
          </p>
        </div>

        <InteractiveTerminal />
      </section>

      {/* Modern Tech Stack Explorer */}
      <section className="py-20 bg-slate-950 border-t border-b border-slate-900" id="tech-stack-explorer">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Tech List left */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Active Stack</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">The Modern Tech Stack</h2>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              We focus program logic strictly around high-speed languages, server routers, relational database configurations, and network audits. Click a stream to inspect.
            </p>

            <div className="space-y-2">
              {techStack.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech.id)}
                  className={`w-full text-left px-4 py-3 rounded border transition-all flex items-center justify-between ${
                    selectedTech === tech.id
                      ? 'border-indigo-500 bg-indigo-500/10 text-white font-bold'
                      : 'border-slate-900 hover:border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-semibold uppercase">{tech.title}</span>
                  <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-widest bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {tech.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Details right */}
          <div className="lg:col-span-7 bg-[#04091e]/50 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4 text-left">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="h-10 w-10 rounded bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Code className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white">{currentTech.title}</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Curricular Module Spec</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {currentTech.desc}
            </p>

            <div className="space-y-3 pt-2">
              <h5 className="text-[10px] uppercase text-indigo-300 tracking-wider">Associated Utilities & Packages:</h5>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {currentTech.tools.map((toolsOpt) => (
                  <div
                    key={toolsOpt}
                    className="bg-[#030712] border border-slate-800/80 rounded p-2 text-center text-xs text-slate-300 font-semibold uppercase tracking-wider"
                  >
                    {toolsOpt}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/60 text-[11px] text-slate-500 flex items-center gap-2 font-sans">
              <Info className="h-4 w-4 text-indigo-500 shrink-0" />
              <span>Aligned with standard certification assessments to ensure direct corporate readiness.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accelerated Programs Section */}
      <section className="py-20 max-w-7xl mx-auto px-6" id="accelerated-programs">
        <div className="text-center space-y-3 mb-16">
          <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Accelerated Tracks</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">Accelerated Career Programs</h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-lg mx-auto">
            High-concentration tracks configured to build deep core capability inside specific tech environments under tight timelines.
          </p>
        </div>

        {/* Accelerated cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {acceleratedPrograms.map((course) => (
            <div
              key={course.id}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 hover:shadow-xl transition flex flex-col group relative"
              id={`accelerated-card-${course.id}`}
            >
              <div className="absolute top-3.5 right-3.5 z-10 bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider font-mono">
                {course.duration}
              </div>

              {/* Cover */}
              <div className="h-48 overflow-hidden bg-slate-950">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                    <Star className="h-4.5 w-4.5 fill-amber-400 shrink-0" />
                    <span>{course.rating}</span>
                    <span className="text-slate-600">({course.reviewsCount}+ alumni)</span>
                  </div>
                  <h3 className="text-sm sm:text-md font-bold text-white font-sans group-hover:text-indigo-400 transition leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {course.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-950/80 border border-slate-800 text-[10px] text-slate-400 px-2 py-0.5 rounded font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights curriculum block */}
                  <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5">
                    <div className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-2">Segment Core Syllabus</div>
                    <div className="space-y-1.5 text-xs text-slate-400">
                      {course.syllabus.map((syl, sIdx) => (
                        <div key={sIdx} className="flex gap-2 items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0 mt-2" />
                          <span className="line-clamp-1">{syl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Purchase */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-600 block text-line-through">₹{course.originalPrice?.toLocaleString('en-IN')}</span>
                      <span className="text-md sm:text-lg font-black text-white">₹{course.price.toLocaleString('en-IN')}</span>
                    </div>
                    <button
                      onClick={() => onAddToCart(course)}
                      disabled={enrolledIds.includes(course.id)}
                      className={`cursor-pointer rounded-lg px-4.5 py-2 text-xs font-bold transition flex items-center gap-1 ${
                        enrolledIds.includes(course.id)
                          ? 'bg-slate-800 border border-slate-700 text-slate-500 cursor-not-allowed'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/10'
                      }`}
                      id={`add-to-cart-skills-${course.id}`}
                    >
                      {enrolledIds.includes(course.id) ? 'Claimed' : 'Claim seat'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8" id="skills-footer">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Col 1 */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-indigo-600 flex items-center justify-center text-white font-black text-md">
                C
              </div>
              <div>
                <span className="text-sm font-bold tracking-tight block uppercase">CCT Skills HQ</span>
                <span className="text-[8px] text-indigo-400 tracking-widest font-mono font-bold block">RECURSION LABS</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Highly aggressive tech development centers targeting server scalability architectures, Python machine learning processes, and modern responsive app logic files.
            </p>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-1.5 font-sans">Tech Frameworks</h4>
            <div className="space-y-1.5 text-xs text-slate-500 font-semibold">
              <p>• Advanced NodeJS Backend Sprints</p>
              <p>• PyTorch & Regression Models</p>
              <p>• Figma Component Frameworks</p>
              <p>• Security Protocol Auditing</p>
            </div>
          </div>

          {/* Col 3 HQ */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-1.5 font-sans">Center Location</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex gap-2.5 items-center">
                <Phone className="h-4.5 w-4.5 text-indigo-500 shrink-0" />
                <a href="tel:08527208085" className="font-mono hover:text-indigo-400 transition-colors">08527208085</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600">
          <p>© 2026 CCT Computer Education. All Rights Reserved. Delhi, India.</p>
          <div className="flex gap-4 mt-2 sm:mt-0 font-mono text-[9px]">
            <span>Admissions Portal</span>
            <span>•</span>
            <span>API Docs Config</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
