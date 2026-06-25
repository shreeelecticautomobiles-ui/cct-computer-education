import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Shield, Award, Users, Monitor, Map } from 'lucide-react';

export default function AboutView() {
  useEffect(() => {
    document.querySelectorAll('.faculty-photo img').forEach(img => {
      const htmlImg = img as HTMLImageElement;
      htmlImg.onerror = function() {
        htmlImg.style.display = 'none';
        if (htmlImg.nextElementSibling) {
          (htmlImg.nextElementSibling as HTMLElement).style.display = 'flex';
        }
      };
    });
  }, []);

  const highlights = [
    {
      icon: <Calendar className="h-6 w-6 text-[#1e40af]" />,
      title: 'Established 1996',
      desc: 'Over 25+ years of pure, continuous educational delivery landmarks across Delhi capital territory.',
    },
    {
      icon: <Shield className="h-6 w-6 text-[#1e40af]" />,
      title: 'Govt. Registered (S/145)',
      desc: 'Officially recognized, audited, and registered under the registration reference of Delhi Government.',
    },
    {
      icon: <Award className="h-6 w-6 text-[#1e40af]" />,
      title: 'Certified Courses',
      desc: 'We offer validated certificates of master competence recognized across recruitment systems.',
    },
    {
      icon: <Users className="h-6 w-6 text-[#1e40af]" />,
      title: 'Highly Experienced Staff',
      desc: 'Classrooms guided directly by professional mentors holding decades of software tutoring history.',
    },
    {
      icon: <Monitor className="h-6 w-6 text-[#1e40af]" />,
      title: 'One is to One Computer Ratio',
      desc: 'Perfect practical setups featuring individual computer terminals for high operational output.',
    },
    {
      icon: <Map className="h-6 w-6 text-[#1e40af]" />,
      title: 'Branches Nationwide',
      desc: 'One of the oldest institutions running successfully all over India with an established national footprint.',
    },
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 px-5 sm:py-20 sm:px-12 selection:bg-[#1e40af] selection:text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Title context */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono bg-[#dbeafe] border border-blue-200 px-3.5 py-1.5 rounded-full">
            ABOUT CCT COMPUTER EDUCATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight">
            Our Heritage
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] font-semibold leading-relaxed">
            The standard of practical software and hardware training since 1996.
          </p>
          <div className="w-16 h-1 bg-[#1e40af] mx-auto rounded-full mt-4" />
        </div>

        {/* Brand story section split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0f172a] border-l-4 border-[#1e40af] pl-4 leading-tight">
              A Legacy of Technical Competence
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#374151] font-semibold leading-relaxed">
              <p>
                CCT is one of the oldest institutions running successfully all over India. It has branches nationwide. It provides certificated courses. It has been established since 1996.
              </p>
              <p>
                Recognizing today's market demands for computer literacy skills, CCT offers training in Basic Computer Applications like Web Development, Programming, Graphics Designing, Accounting, and computer training based according to individual needs.
              </p>
            </div>

            {/* Special offer callout box */}
            <div className="bg-[#f0f9ff] border border-[1px] border-[#bfdbfe] p-5 rounded-2xl flex items-center gap-4">
              <span className="text-3xl">🎁</span>
              <div>
                <h4 className="text-xs font-black text-[#0f172a] uppercase font-sans">Special offer direct from desk</h4>
                <p className="text-xs text-[#1e40af] mt-1 font-bold">15 days free classes given after course completion. No extra charge.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#f8fafc] border border-slate-200 rounded-3xl p-8 space-y-4 text-center">
            <h3 className="text-sm font-black text-[#0f172a] uppercase tracking-wider font-mono">Our Corporate Credentials</h3>
            <div className="h-[2px] bg-slate-100 w-full" />
            <div className="py-2">
              <span className="text-3xl font-black text-[#1e40af] font-mono block">25+</span>
              <span className="text-[10px] text-[#374151] uppercase tracking-widest font-mono font-bold mt-1 block">Years of Delhi Leadership</span>
            </div>
            <div className="h-[2px] bg-slate-100 w-full" />
            <div className="py-2">
              <span className="text-xl font-black text-[#0f172a] uppercase block">REGD S/145</span>
              <span className="text-[10px] text-[#374151] uppercase tracking-widest font-mono font-bold mt-1 block">Delhi Govt Audit</span>
            </div>
          </div>
        </div>

        {/* From the Director's Desk Section */}
        <section className="bg-slate-50 rounded-[2.5rem] border border-slate-205 p-6 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          
          {/* Director Photo Frame (Left Column) - Typographic Avatar representation */}
          <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-blue-700 to-indigo-900 flex flex-col items-center justify-center text-white">
              <span className="text-5xl sm:text-6xl font-black tracking-widest">RSR</span>
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-blue-200 mt-2">Director</span>
            </div>
            <div>
              <h4 className="text-xl font-black text-[#0f172a] uppercase tracking-tight">RS Rawat</h4>
              <p className="text-xs text-[#1e40af] font-bold uppercase tracking-wider mt-1">Founder & Executive Director</p>
              <p className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider mt-0.5">CCT Computer Education</p>
            </div>
          </div>

          {/* Director's Speech Message (Right Column) */}
          <div className="md:col-span-8 space-y-5">
            <span className="text-[#1e40af] text-[11px] font-mono font-black uppercase tracking-widest block font-bold">LEADERSHIP MESSAGE</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] uppercase tracking-tight leading-none">
              From the Director's Desk
            </h3>
            <div className="text-xs sm:text-sm text-[#374151] font-semibold leading-relaxed space-y-4">
              <p className="italic border-l-2 border-[#1e40af] pl-4">
                "Our mission since 1996 has always been focused on providing accessible, high-quality, 1-to-1 computer literacy training. We don't just teach modules; we build practical capabilities that prepare Delhi candidate minds for immediate and successful career placements."
              </p>
              <p>
                At CCT, we carefully calibrate our curriculum to real-world demands. Every computer desk is reserved specifically for individual candidate practices, ensuring maximum hands-on exposure under the direct supervision of veteran mentors. We welcome you to experience our 15-day free support class and fast-track your future.
              </p>
            </div>
          </div>

        </section>

        {/* SECTION — Meet Our Expert Faculty */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="faculty-section rounded-[2.5rem] border border-slate-200"
        >
          <div className="max-w-7xl mx-auto text-center space-y-10">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight uppercase leading-none">
                Meet Our Expert Faculty
              </h2>
              <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                Experienced and dedicated teachers committed to your success
              </p>
            </div>

            <div className="faculty-grid">
              {[
                {
                  id: 'krishna',
                  name: 'Krishna Nand Jha',
                  title: 'Senior Computer Instructor',
                  experience: '15+ Years Experience',
                  initials: 'KJ',
                  imageUrl: './krishna-sir.jpg',
                },
                {
                  id: 'mrutyunjay',
                  name: 'Mrutyunjay Sir',
                  title: 'Computer Science Faculty',
                  experience: '10+ Years Experience',
                  initials: 'MJ',
                  imageUrl: './mrutyunjay-sir.jpg',
                },
                {
                  id: 'ram',
                  name: 'Ram Sir',
                  title: 'Technical Instructor',
                  experience: '8+ Years Experience',
                  initials: 'RS',
                  imageUrl: './ram-sir.jpg',
                },
                {
                  id: 'deepali',
                  name: "Deepali Ma'am",
                  title: 'Computer Applications Faculty',
                  experience: '7+ Years Experience',
                  initials: 'DM',
                  imageUrl: './deepali-maam.jpg',
                },
                {
                  id: 'nishu',
                  name: "Nishu Ma'am",
                  title: 'MS Office & DTP Instructor',
                  experience: '6+ Years Experience',
                  initials: 'NM',
                  imageUrl: './nishu-maam.jpg',
                },
                {
                  id: 'neelam',
                  name: "Neelam Ma'am",
                  title: 'Tally & Accounting Faculty',
                  experience: '8+ Years Experience',
                  initials: 'NL',
                  imageUrl: './neelam-maam.jpg',
                },
                {
                  id: 'nidhi',
                  name: "Nidhi Ma'am",
                  title: 'Graphics & Designing Faculty',
                  experience: '5+ Years Experience',
                  initials: 'ND',
                  imageUrl: './nidhi-maam.jpg',
                },
              ].map((member) => (
                <div className="faculty-card" key={member.id}>
                  <div className="faculty-photo" id={`photo-${member.id}`}>
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                        }
                      }}
                      style={{ display: 'block' }}
                    />
                    <div className="photo-placeholder" style={{ display: 'none' }}>
                      {member.initials}
                    </div>
                  </div>
                  <div className="faculty-name">{member.name}</div>
                  <div className="faculty-title">{member.title}</div>
                  <div className="faculty-exp">{member.experience}</div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '14px', marginTop: '32px' }}>
              All our faculty members are experienced professionals dedicated to providing quality computer education.
            </p>
          </div>
        </motion.section>

        {/* Highlights grid */}
        <div className="space-y-8 pt-10 border-t border-slate-200">
          <div className="text-left space-y-2">
            <span className="text-[#1e40af] text-[10px] font-mono font-black uppercase tracking-widest">CCT STANDARD METRICS</span>
            <h3 className="text-lg sm:text-xl font-black text-[#0f172a] uppercase">Six Pillars of Our Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-[#f0f9ff] border border-[#bfdbfe] hover:border-[#1e40af] p-5 sm:p-8 rounded-2xl space-y-4 hover:shadow-[0_4px_20px_rgba(30,64,175,0.15)] transition duration-300 flex flex-col justify-between text-left w-full"
              >
                <div>
                  <div className="p-2 bg-[#dbeafe] w-fit rounded-lg mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-black text-[#0f172a] uppercase tracking-tight">{item.title}</h4>
                </div>
                <p className="text-xs text-[#374151] font-semibold leading-relaxed mt-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
