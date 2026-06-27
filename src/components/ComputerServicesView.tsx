import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin } from 'lucide-react';
import { fetchSheet } from '../lib/sheets';
 
interface ComputerServicesViewProps {
  initialTab?: 'services' | 'laptop-sale';
}
 
interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  hasBadge: boolean;
  startingPrice: string;
  warrantyText: string;
}
 
interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}
 
const defaultServices: ServiceItem[] = [
  { icon: '🖥️', title: 'Used Laptop & Computer Sales', desc: 'We sell quality tested second hand laptops and desktop computers. Every system is thoroughly checked and comes with warranty.', image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400', alt: 'Laptops for sale', hasBadge: true, startingPrice: '₹6,500', warrantyText: '1 Month Testing Warranty' },
  { icon: '🔧', title: 'Computer Repairing', desc: 'Pro hardware component repairs, display swaps, keyboard repairs, logic board trace tests, and resolving power failures.', image: 'https://i.ibb.co/ks0HvMRK/computer-repair-1440x960-jpg.webp', alt: 'Computer repair', hasBadge: false, startingPrice: '', warrantyText: '' },
  { icon: '⚙️', title: 'Computer Maintenance & Service', desc: 'Regular technical servicing, malware checks, dust vacuums, thermal paste upgrades, and clean-up options.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400', alt: 'Computer maintenance', hasBadge: false, startingPrice: '', warrantyText: '' },
];
 
const defaultFeatures: FeatureItem[] = [
  { icon: '💰', title: 'Starting at ₹6,500', desc: 'Get a fully working laptop or desktop at the most affordable price in Delhi.' },
  { icon: '✅', title: 'Fully Tested Systems', desc: 'Every laptop and computer is thoroughly checked and tested before sale.' },
  { icon: '🛡️', title: '1 Month Testing Warranty', desc: 'All systems come with 1 month testing warranty. Issues fixed at no extra cost.' },
  { icon: '👨💻', title: 'Expert Advice', desc: 'Our staff will help you choose the right system based on your needs and budget.' },
];
 
const benefits = [
  'Government registered institute since 1996 — trusted by thousands of candidates and clients',
  'All systems personally tested and verified by our professional technical experts',
  'Affordable prices with genuine testing warranty — zero hidden charges',
];
 
export default function ComputerServicesView({ initialTab }: ComputerServicesViewProps) {
  const [services, setServices] = useState<ServiceItem[]>(defaultServices);
  const [features, setFeatures] = useState<FeatureItem[]>(defaultFeatures);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const serviceRows = await fetchSheet('services');
        if (serviceRows && serviceRows.length > 0) {
          setServices(serviceRows.map(row => ({
            icon: row['icon'] || '🖥️',
            title: row['title'] || '',
            desc: row['description'] || '',
            image: row['imageUrl'] || 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400',
            alt: row['imageAlt'] || row['title'] || '',
            hasBadge: (row['showPriceBadge'] || '').toUpperCase() === 'TRUE',
            startingPrice: row['startingPrice'] || '',
            warrantyText: row['warrantyText'] || '',
          })));
        }
        const laptopRows = await fetchSheet('laptopSale');
        if (laptopRows && laptopRows.length > 0) {
          setFeatures(laptopRows.map(row => ({
            icon: row['icon'] || '✅',
            title: row['featureTitle'] || '',
            desc: row['featureDescription'] || '',
          })));
        }
      } catch (err) {
        console.error('[ComputerServicesView] error:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);
 
  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 px-5 sm:py-16 sm:px-12 selection:bg-[#1e40af] selection:text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-16">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left space-y-6 w-full">
              <span className="inline-block text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono bg-[#dbeafe] border border-blue-200 px-3.5 py-1.5 rounded-full">CCT SALES & HARDWARE SUPPORT DEPT</span>
              <h1 className="text-3.5xl sm:text-5vw font-black text-[#0f172a] tracking-tight uppercase leading-none">Computer Hardware <br className="hidden sm:inline" /> & Repair Services</h1>
              <p className="text-sm text-[#374151] font-semibold leading-relaxed max-w-2xl">From high-capacity laptop sales to expert component motherboard repair and complete Windows software optimizations — we serve candidates, students, and professional hardware needs in Madangir since 1996.</p>
              <a href="tel:8527208085" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-lg transition min-h-[44px] shadow-md"><Phone className="h-4 w-4" />Call Department: 8527208085</a>
            </div>
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white w-full max-w-md bg-blue-100 group">
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                <img src="https://i.ibb.co/mC1FFnrG/Gemini-Generated-Image-v8iq2cv8iq2cv8iq.png" alt="CCT Computer Services" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
            </div>
          </section>
 
          <div className="space-y-6 pt-8 border-t border-slate-100">
            <div className="text-left space-y-2 max-w-2xl">
              <span className="text-[#1e40af] text-xs font-mono font-black uppercase tracking-widest">WARRANTY DRIVEN OUTCOMES</span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] uppercase tracking-tight">Our Support Catalogue</h2>
            </div>
            {loading ? (
              <div className="text-center py-16 text-slate-400 font-semibold">Loading services...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {services.map((item, idx) => (
                  <div key={idx} className="bg-white border border-[#bfdbfe]/50 hover:border-[#1e40af] rounded-2xl overflow-hidden text-left flex flex-col justify-between group transition duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(30,64,175,0.12)] w-full text-slate-800">
                    <div className="relative w-full bg-slate-50 overflow-hidden border-b border-blue-100" style={{aspectRatio:'16/10'}}>
                      <img src={item.image} alt={item.alt} referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute bottom-3 left-3 p-2 bg-[#1e40af] text-white rounded-lg shadow-md z-10">
                        <span className="text-sm">{item.icon}</span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-7 space-y-3 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        {item.hasBadge && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                            {item.startingPrice && <div style={{ background: '#1e40af', color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700', display: 'inline-block', width: 'fit-content' }}>Starting <span style={{ fontSize: '22px', fontWeight: '900' }}>{item.startingPrice}</span></div>}
                            {item.warrantyText && <div style={{ background: '#16a34a', color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700', display: 'inline-block', width: 'fit-content' }}>{item.warrantyText}</div>}
                          </div>
                        )}
                        <h3 className="text-md sm:text-lg font-black text-[#0f172a] uppercase group-hover:text-[#1e40af] transition-colors leading-tight">{item.title}</h3>
                        <p className="text-[11px] text-[#374151] font-semibold leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">
                        <span>Authorized support</span><span className="text-[#1e40af] font-bold">CCT Delhi</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
 
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-16 pt-16 border-t-2 border-slate-100">
          <section className="py-12 px-5 bg-slate-50 text-center rounded-3xl border border-slate-200/50">
            <div className="max-w-4xl mx-auto space-y-6">
              <span className="text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono block">EXPERT LAPTOP OUTLET</span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight leading-none">Quality Used Laptops & Computers For Sale</h2>
              <p className="text-sm sm:text-base text-slate-600 font-semibold max-w-2xl mx-auto leading-relaxed">Super affordable, thoroughly tested, and ready to use. Starting at just ₹6,500 with complete peace of mind.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <div className="bg-[#1e40af] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">Price Starts: <span className="font-black text-base sm:text-lg">₹6,500</span></div>
                <div className="bg-[#16a34a] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">1 Month Testing Warranty</div>
              </div>
            </div>
          </section>
 
          <section className="w-full">
            {loading ? <div className="text-center py-8 text-slate-400 font-semibold">Loading...</div> : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {features.map((feat, idx) => (
                  <div key={idx} className="bg-[#f0f9ff] border border-[#bfdbfe] rounded-[12px] p-6 text-center flex flex-col justify-between h-full hover:border-[#1e40af] transition-all duration-300 shadow-sm hover:shadow">
                    <div>
                      <div style={{ width: '60px', height: '60px', background: '#dbeafe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '32px' }}>{feat.icon}</div>
                      <h3 className="text-md sm:text-lg font-black text-[#1e40af] uppercase tracking-tight mb-2">{feat.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-semibold">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
 
          <section className="py-12 px-5 sm:px-12 bg-slate-50 border border-slate-150 rounded-3xl">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center">
                <span className="text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono block mb-2">PROVEN CREDENTIALS</span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] uppercase tracking-tight">Why Buy From Us</h2>
              </div>
              <div className="bg-white rounded-2xl border border-slate-150 p-6 sm:p-8 space-y-4 shadow-sm">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3.5 items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-50 text-[#1e40af] flex items-center justify-center shrink-0 border border-blue-100 font-bold text-sm">✓</div>
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
 
          <section className="py-12 max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] uppercase tracking-tight">Interested? Call or WhatsApp Us Now</h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">Visit our center at Madangir, New Delhi or call to know available stock, specifications, and prices.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a href="tel:8527208085" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1e40af] hover:bg-blue-800 text-white font-black text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-lg transition min-h-[44px] shadow-md"><Phone className="h-4 w-4" />Call Now: 8527208085</a>
              <a href="https://wa.me/918527208085?text=Hi%2C%20I%20am%20interested%20in%20buying%20a%20used%20laptop." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-green-700 text-white font-black text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-lg transition min-h-[44px] shadow-md">WhatsApp Us</a>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-xl max-w-md mx-auto flex gap-3.5 text-left items-start shadow-sm">
              <MapPin className="text-[#1e40af] h-5 w-5 mt-0.5 shrink-0" />
              <div className="space-y-0.5">
                <span className="text-[10px] font-black tracking-wider text-[#1e40af] font-mono block uppercase">Outlet Location</span>
                <p className="text-xs text-[#0f172a] font-bold leading-relaxed">19/520, DDA Flats, Madangir, Ground Floor, New Delhi — 110062</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
