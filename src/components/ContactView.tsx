import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Send, CheckCircle2, MessageSquare, Mail } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'Master in Software Engineering'
  });
  const [submitted, setSubmitted] = useState(false);

  const coursesSelectable = [
    'Master in Software Engineering (1 Year)',
    'Diploma in MS-Office (6 Month)',
    'Special Course in MS-Office (4 Month)',
    'Diploma in DTP (6 Month)',
    'Special Diploma in DTP (4 Month)',
    'Diploma in Financial Accounting (6 Month)',
    'Graphics Designing & Multimedia (6 Month)',
    'Certificate in Web Designing (6 Month)',
    'C & C++ Programming (3 Month)',
    'Advance Tally Course (4 Month)',
    'Basic Computer Application (3 Month)',
    'Office Management (4 Month)',
    'AutoCAD Courses (3 Month)',
    'Special Course in Hardware',
    'Special Coaching for O\'Level, BCA, MCA',
    'CBSE Computer Training 10th & 12th',
    'Other Vocational / Basic Course'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your Name and Phone Number so our Delhi registrar can contact you!');
      return;
    }
    setSubmitted(true);

    // Construct WhatsApp message and redirect
    const messageText = `Hello CCT Delhi, I would like to register for a course:
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Course Interested:* ${formData.course}`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/918527208085?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 px-5 sm:py-20 sm:px-12 selection:bg-[#1e40af] selection:text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono bg-[#dbeafe] border border-blue-200 px-3.5 py-1.5 rounded-full">
            CCT REGISTRATION COUNSEL Desk
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight">
            Connect With Us
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] font-semibold leading-relaxed">
            Get your questions answered immediately. Drop by our Madangir office or submit the register inquiry.
          </p>
          <div className="w-16 h-1 bg-[#1e40af] mx-auto rounded-full mt-4" />
        </div>

        {/* Full-width Entrance/Reception Banner with Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[21/9] sm:aspect-[24/10] md:aspect-[3/1] max-h-72 w-full bg-blue-100 group border-4 border-white"
        >
          {/* Subtle Dark/Blue Overlay (rgba 0,0,0,0.25) per instructions */}
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
            alt="Clean professional reception lobby area of modern CCT computer institute center in India"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />
        </motion.div>

        {/* Content Section Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Coordinates Details list */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="bg-[#f8fafc] border border-slate-205 p-5 sm:p-8 rounded-3xl space-y-6 shadow-sm w-full">
              <h3 className="text-lg font-black uppercase tracking-tight text-[#0f172a] border-b border-slate-200 pb-4">
                Office Coordinates
              </h3>

              {/* Phone Card */}
              <div className="flex gap-4">
                <div className="p-3 bg-[#dbeafe] text-[#1e40af] rounded-xl h-fit border border-blue-100 animate-none">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase text-slate-400 font-mono">Calling Line</h4>
                  <a 
                    href="tel:8527208085" 
                    className="text-lg font-black text-[#1e40af] hover:text-[#1d4ed8] transition block focus:outline-none"
                  >
                    8527208085
                  </a>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase font-mono">Admission • Queries • Hardware</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl h-fit border border-emerald-100 w-fit">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase text-slate-400 font-mono">WhatsApp Support</h4>
                  <a 
                    href="https://wa.me/918527208085" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-[10px] uppercase tracking-wider px-4 py-2.5 rounded-lg transition mt-1.5 min-h-[36px]"
                  >
                    Chat on WhatsApp
                  </a>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase font-mono mt-1 font-bold">Direct to Office Desk</p>
                </div>
              </div>

              {/* Email Support Card */}
              <div className="flex gap-4">
                <div className="p-3 bg-[#dbeafe] text-[#1e40af] rounded-xl h-fit border border-blue-100">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase text-slate-400 font-mono">Email Coordinates</h4>
                  <a 
                    href="mailto:Ccteducation@rediffmail.com" 
                    className="text-base sm:text-lg font-black text-[#1e40af] hover:text-[#1d4ed8] transition block break-all focus:outline-none"
                  >
                    Ccteducation@rediffmail.com
                  </a>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase font-mono">Academic Inquiries & Verification</p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex gap-4">
                <div className="p-3 bg-[#dbeafe] text-[#1e40af] rounded-xl h-fit border border-blue-105">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase text-slate-400 font-mono">Physical Center Address</h4>
                  <p className="text-xs sm:text-sm text-slate-900 font-bold max-w-sm leading-relaxed">
                    19/520, DDA Flats, Madangir, Ground Floor, New Delhi — 110062
                  </p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase font-mono">Located near main Madangir market corridor</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps container */}
            <div className="bg-[#f8fafc] border border-slate-205 rounded-3xl p-4 space-y-3 shadow-sm w-full">
              <h4 className="text-[10px] font-mono font-black text-[#0f172a] uppercase tracking-widest pl-2">
                📍 Live Google Map Navigation
              </h4>
              <div className="relative overflow-hidden group rounded-2xl h-[250px] sm:h-56 border border-slate-200 w-full">
                <iframe 
                  title="CCT Computer Education Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0123565509934!2d77.22620581507982!3d28.5209722824619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce190013cb139%3A0xa1c2c0080c2cc2b0!2sCCT%20Computer%20Education!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-0 invert-0 opacity-100 transition-opacity duration-350"
                />
              </div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono text-center font-bold">
                ESTD 1996 • 4.7 ★ ON GOOGLE (63+ REVIEW ENTRIES)
              </p>
            </div>
          </div>

          {/* Contact Inquiry form */}
          <div className="lg:col-span-7 bg-white border border-slate-180 rounded-3xl p-5 sm:p-8 space-y-6 shadow-xl w-full">
            <h3 className="text-xl font-black uppercase text-[#0f172a] tracking-tight">
              Inquire About Class Registration
            </h3>
            <p className="text-xs text-[#374151] font-semibold leading-relaxed">
              Submit your candidate coordinate credentials, and our desk administrators will call you back within 2 business hours to verify class availability and trial slots.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#f0f9ff] border border-blue-200 p-8 rounded-2xl text-center space-y-5"
                >
                  <div className="h-12 w-12 bg-[#1e40af] text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-blue-600/20">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-md font-black uppercase text-[#0f172a]">Application Received!</h4>
                    <p className="text-xs text-[#374151] leading-relaxed font-semibold">
                      Thank you, <span className="font-extrabold text-[#0f172a]">{formData.name}</span>. An admissions counselor will phone you soon at <span className="font-extrabold text-[#0f172a]">{formData.phone}</span> regarding your entry for <span className="font-extrabold text-[#0f172a]">{formData.course}</span>.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', course: 'Master in Software Engineering' }); }}
                    className="cursor-pointer bg-[#1e40af] hover:bg-[#1d4ed8] text-white text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-lg transition"
                  >
                    Submit New Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 font-extrabold uppercase tracking-wider block">Candidate Name</label>
                    <input 
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition placeholder-slate-400 min-h-[44px]"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 font-extrabold uppercase tracking-wider block">Candidate Phone Number</label>
                    <input 
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition placeholder-slate-400 min-h-[44px]"
                    />
                  </div>

                  {/* Course Interested In */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 font-extrabold uppercase tracking-wider block">Course Interested In</label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#1e40af] transition min-h-[44px]"
                    >
                      {coursesSelectable.map((courseOption, index) => (
                        <option 
                          key={index} 
                          value={courseOption}
                          className="bg-white text-slate-700 font-semibold text-xs"
                        >
                          {courseOption}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Action submit per spec 5: Primary button bg #1e40af rounded-lg hover #1d4ed8 */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-black text-xs uppercase tracking-widest py-4 rounded-lg shadow-lg shadow-blue-600/10 flex items-center justify-center gap-2 transition min-h-[44px]"
                    >
                      <Send className="h-4 w-4" />
                      Inquire / Book Slot
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
