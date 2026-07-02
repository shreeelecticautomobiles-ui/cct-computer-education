import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, Mail, BookOpen, CheckCircle, Award } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export default function BookingModal({ isOpen, onClose, selectedCourse = 'General IT Career Consulting' }: BookingModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourse,
    mode: 'Online (Live Zoom)',
    slot: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.slot) {
      alert('Please fill out all fields before booking.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const slots = [
    'Morning: 09:00 AM - 11:00 AM (Monday - Friday)',
    'Afternoon: 02:00 PM - 04:00 PM (Monday - Friday)',
    'Evening: 06:00 PM - 08:00 PM (Monday - Friday)',
    'Weekend Special: 11:00 AM - 01:00 PM (Saturday - Sunday)',
  ];

  const coursesList = [
    'Basic + Advance Computer Course',
    'DCA (Diploma in Computer Applications)',
    'DTP (Desktop Publishing)',
    'Graphic Designing Specialty',
    'Tally Prime with GST',
    'AI & Python Classes with English Speaking',
    'Full Stack Web Development (MERN)',
    'Data Science & Artificial Intelligence',
    'Cybersecurity Specialist',
    'General IT Career Consulting',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col"
            id="modal-container"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-sans tracking-tight">Book Free Demo Class</h3>
                <p className="text-xs text-slate-500">Coordinate your session with CCT Experts</p>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
                id="close-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Core */}
            <div className="flex-1 overflow-y-auto p-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-indigo-50/70 rounded-xl p-3 border border-indigo-100 flex items-start gap-2.5">
                    <Award className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-indigo-800 leading-relaxed">
                      <strong>Exclusive Benefits:</strong> Join our free live trial to inspect our advanced interface, interact with top mentors, and receive a customized 1-on-1 resume feedback roadmap.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Full Name</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-slate-400">
                        <User className="h-4.5 w-4.5" />
                      </span>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 font-sans transition"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address</label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-slate-400">
                          <Mail className="h-4.5 w-4.5" />
                        </span>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 font-sans transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Contact Number</label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-slate-400">
                          <Phone className="h-4.5 w-4.5" />
                        </span>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 font-sans transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Course Stream</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-slate-400">
                        <BookOpen className="h-4.5 w-4.5" />
                      </span>
                      <select
                        value={form.course}
                        onChange={(e) => setForm({ ...form, course: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 font-sans transition appearance-none bg-white font-medium"
                      >
                        {coursesList.map((courseOption) => (
                          <option key={courseOption} value={courseOption}>
                            {courseOption}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mode Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Learning Mode</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Online (Live Zoom)', 'Offline (Rohini Center)'].map((modeOption) => (
                        <button
                          key={modeOption}
                          type="button"
                          onClick={() => setForm({ ...form, mode: modeOption })}
                          className={`rounded-lg border py-2.5 text-center text-xs font-semibold transition ${
                            form.mode === modeOption
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-700 font-medium'
                              : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                          }`}
                        >
                          {modeOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Slot Choice */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Available Batch Slot</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-slate-400">
                        <Calendar className="h-4.5 w-4.5" />
                      </span>
                      <select
                        value={form.slot}
                        required
                        onChange={(e) => setForm({ ...form, slot: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 font-sans transition appearance-none bg-white"
                      >
                        <option value="">Select a time slot...</option>
                        {slots.map((slotOption) => (
                          <option key={slotOption} value={slotOption}>
                            {slotOption}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Register CTA */}
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cursor-pointer rounded-lg bg-indigo-600 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 hover:shadow-indigo-600/30 transition duration-200 flex items-center justify-center gap-2"
                      id="submit-booking-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Processing Booking...
                        </>
                      ) : (
                        'Secure My Spot Now'
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 animate-bounce">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-sans mb-2">Registration Confirmed!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                    Congratulations, <strong>{form.name}</strong>! Your free demo slot for **{form.course}** ({form.mode}) has been reserved.
                  </p>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-left max-w-sm mx-auto mb-6">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-2">Booking Snapshot</h5>
                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div><strong className="text-slate-800">Time:</strong> {form.slot}</div>
                      <div><strong className="text-slate-800">Assigned Mentor:</strong> Dynamic CCT Guide Team</div>
                      <div><strong className="text-slate-800">Access Details:</strong> Shared via email ({form.email})</div>
                      <div><strong className="text-slate-800">Phone Code:</strong> Sent SMS to {form.phone}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="cursor-pointer inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                    id="finish-booking-btn"
                  >
                    Return to Portal
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
