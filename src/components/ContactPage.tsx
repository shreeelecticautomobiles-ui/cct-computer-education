import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send, Star, HelpCircle, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    courseInterest: 'General computer basic + Excel',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneOrEmail) {
      alert('Please fill out your Name and Phone or Email so our Delhi counselors can contact you!');
      return;
    }
    setSuccess(true);
  };

  const coordinates = [
    {
      icon: <MapPin className="h-5.5 w-5.5 text-indigo-600 shrink-0" />,
      title: 'Academy Physical Address',
      lines: [
        'Central Complex, Madangir Main Market Road',
        'Adjacent Bank of Baroda ATM, Madangir',
        'New Delhi, Delhi - 110062'
      ],
      ctaText: 'View on Google Maps',
      ctaUrl: 'https://maps.google.com/?q=Madangir+New+Delhi'
    },
    {
      icon: <Phone className="h-5.5 w-5.5 text-emerald-600 shrink-0" />,
      title: 'Counseling Direct Hotline',
      lines: [
        'Phone Connection: 08527208085',
        'WhatsApp Support: 08527208085'
      ],
      ctaText: 'Call Counselor Now',
      ctaUrl: 'tel:08527208085'
    },
    {
      icon: <Clock className="h-5.5 w-5.5 text-pink-600 shrink-0" />,
      title: 'Institute Class Hours',
      lines: [
        'Monday To Saturday: 08:00 AM – 08:00 PM IST',
        'Sundays: Special Lab Practice Batches',
        'Counselor Desk Availability: 09:00 AM - 07:30 PM'
      ]
    }
  ];

  const faqs = [
    { q: 'Where are you located in New Delhi?', a: 'We are situated right next to the main Madangir Market, near the Bank of Baroda ATM. You can visit easily via Metro (Saket or Ambedkar Nagar nearby).' },
    { q: 'Can I choose custom class-timings?', a: 'Yes. We structure customizable hourly batches between 8:00 AM and 8:00 PM to accommodate office workers, distance college students, and high-schoolers.' },
    { q: 'Do you prepare students for government exams?', a: 'Our courses match standardized central and state government typing metrics, ledger patterns, and computer operation curriculum requirements.' }
  ];

  return (
    <div className="bg-[#fcfaff] min-h-screen py-16 px-6 sm:px-12" id="contact-page-root">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Header details */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[#5c3cbc] text-xs font-black uppercase tracking-wider bg-indigo-50 px-3.5 py-1 rounded-full">
            INSTITUTE COORDINATES
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-display text-center">
            Connect With Our Counselor Group
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed font-semibold text-center">
            Do you have custom questions about tuition structures, batch limits, or certificate status? Send a direct message or stop by our Madangir office.
          </p>
        </div>

        {/* Action Blocks: coordinates + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Coordinates Block */}
          <div className="lg:col-span-5 space-y-6">
            {coordinates.map((coord, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm text-left space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-50 rounded-xl">
                    {coord.icon}
                  </div>
                  <h3 className="text-sm font-black text-slate-900 tracking-tight uppercase">
                    {coord.title}
                  </h3>
                </div>

                <div className="space-y-1">
                  {coord.lines.map((line, lidx) => (
                    <p key={lidx} className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>

                {coord.ctaText && coord.ctaUrl && (
                  <a
                    href={coord.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer inline-flex items-center text-xs font-black text-[#5c3cbc] hover:underline"
                  >
                    <span>{coord.ctaText} →</span>
                  </a>
                )}
              </div>
            ))}

            {/* Google map iframe wrapper placeholder */}
            <div className="bg-white border border-slate-100 p-4 rounded-3xl shadow-sm space-y-3">
              <h4 className="text-xs font-black text-slate-800 tracking-wider uppercase text-left">
                📍 Madangir Center Location Plan
              </h4>
              <div className="bg-slate-50 border border-slate-100 h-44 rounded-2xl flex flex-col items-center justify-center p-4 text-center">
                <p className="text-indigo-600 text-xs font-black mb-1">CCT COMPUTER EDUCATION</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-wider font-mono">ESTD 1996 • DELHI CAPITAL CENTER</p>
                <a
                  href="https://www.google.com/maps/place/CCT+Computer+Education/@28.5209673,77.2287807,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce190013cb139:0xa1c2c0080c2cc2b0!8m2!3d28.5209673!4d77.2287807!16s%2Fg%2F12hn29_kr?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer mt-3 bg-[#5c3cbc] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg"
                >
                  Fetch Walking Directions
                </a>
              </div>
            </div>
          </div>

          {/* Form Block */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm text-left space-y-6">
            <h3 className="text-lg font-black text-slate-950 tracking-tight">
              Inquire About Class Registration
            </h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              Submit your candidate coordinate credentials, and our desk administrators will call you back within 2 business hours to verify class availability and trial slots.
            </p>

            {success ? (
              <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-center space-y-4">
                <div className="h-12 w-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold">✓</div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black text-slate-900">Registration Request Logged!</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed font-semibold">
                    Thank you, <span className="font-extrabold">{formData.name}</span>. An admissions officer will phone you soon at <span className="font-extrabold">{formData.phoneOrEmail}</span> to schedule your computer trial.
                  </p>
                </div>
                <button
                  onClick={() => { setSuccess(false); setFormData({ name: '', phoneOrEmail: '', courseInterest: 'General computer basic + Excel', message: '' }); }}
                  className="cursor-pointer bg-slate-850 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-xl"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-black text-slate-700 uppercase tracking-wider">
                      Candidate Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Shaurya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-indigo-200 outline-none font-semibold text-slate-850"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-black text-slate-700 uppercase tracking-wider">
                      Phone Number or Email *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., 9876543210"
                      value={formData.phoneOrEmail}
                      onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-indigo-200 outline-none font-semibold text-slate-850"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 uppercase tracking-wider">
                    Select Preferred Program Profile
                  </label>
                  <select
                    value={formData.courseInterest}
                    onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-indigo-200 outline-none font-semibold text-slate-800"
                  >
                    <option value="General computer basic + Excel">Basic + Advance Computer Course</option>
                    <option value="DCA Diploma">DCA (Diploma in Computer Applications)</option>
                    <option value="Desktop Publishing / DTP">DTP (Desktop Publishing Layouts)</option>
                    <option value="Tally Prime GST Accounting">Tally Prime with GST Assessor</option>
                    <option value="Professional Web Coding React python">Coding/Python & Web Tech Specialty</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 uppercase tracking-wider">
                    Message / Batch Timings preference (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g., Looking for morning batch times between 9 AM and 11 AM..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-indigo-200 outline-none font-semibold text-slate-850"
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full bg-[#5c3cbc] hover:bg-indigo-700 text-white font-extrabold uppercase text-xs py-4 px-6 rounded-xl transition shadow-md shadow-indigo-600/10 tracking-widest text-center flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Transmit Enrollment Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs section at the bottom */}
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-left space-y-6">
          <h3 className="text-md sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <HelpCircle className="h-5.5 w-5.5 text-indigo-500" />
            <span>Admissions Frequently Answered Questions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="space-y-1.5">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
