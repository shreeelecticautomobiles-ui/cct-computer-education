import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, BookOpen, Laptop, Phone } from 'lucide-react';

export default function NotFoundView() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-24 px-6 text-center space-y-10 min-h-[70vh] flex flex-col justify-center items-center">
      {/* 404 visual card */}
      <div className="space-y-4">
        <span className="text-[100px] sm:text-[140px] font-black tracking-tighter text-[#1e40af] select-none leading-none animate-pulse">
          404
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
          Oops! Page Not Found
        </h1>
        <p className="text-slate-600 max-w-lg mx-auto font-medium text-sm sm:text-base leading-relaxed">
          The requested ledger index or link reference does not exist on our servers. Let's redirect you back to active CCT Delhi services!
        </p>
      </div>

      {/* Helpful Navigation Cards for better Internal Linking & Crawlability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg text-left">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3.5 p-4 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition cursor-pointer group"
        >
          <div className="bg-[#1e40af] text-white p-2.5 rounded-lg shrink-0 group-hover:scale-105 transition-transform">
            <Home className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">CCT Delhi Home</h4>
            <p className="text-[11px] text-slate-500 font-semibold">Visit our main education campus</p>
          </div>
        </button>

        <button
          onClick={() => navigate('/courses')}
          className="flex items-center gap-3.5 p-4 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition cursor-pointer group"
        >
          <div className="bg-[#1e40af] text-white p-2.5 rounded-lg shrink-0 group-hover:scale-105 transition-transform">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Computer Courses</h4>
            <p className="text-[11px] text-slate-500 font-semibold">Tally Prime, Python, Advanced Excel</p>
          </div>
        </button>

        <button
          onClick={() => navigate('/services')}
          className="flex items-center gap-3.5 p-4 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition cursor-pointer group"
        >
          <div className="bg-[#1e40af] text-white p-2.5 rounded-lg shrink-0 group-hover:scale-105 transition-transform">
            <Laptop className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Laptops & Repair</h4>
            <p className="text-[11px] text-slate-500 font-semibold">Buy refurbished laptops & book repairs</p>
          </div>
        </button>

        <button
          onClick={() => navigate('/contact')}
          className="flex items-center gap-3.5 p-4 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition cursor-pointer group"
        >
          <div className="bg-[#1e40af] text-white p-2.5 rounded-lg shrink-0 group-hover:scale-105 transition-transform">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Contact Coordinator</h4>
            <p className="text-[11px] text-slate-500 font-semibold">Call or send direct admissions inquiry</p>
          </div>
        </button>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#1e40af] hover:underline cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" /> Go Back to Previous Page
      </button>
    </div>
  );
}
