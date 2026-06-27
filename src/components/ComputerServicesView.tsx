import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Check, MapPin, CircleDollarSign, Shield, Laptop } from 'lucide-react';
import { fetchHero, fetchLaptopFeatures, fetchSupportCatalogue, fetchWhyBuy } from '../services/googleSheets';
import { SheetHero, SheetLaptopFeature, SheetSupportCatalogue, SheetWhyBuy } from '../types';

interface ComputerServicesViewProps {
  initialTab?: 'services' | 'laptop-sale';
}

export default function ComputerServicesView({ initialTab }: ComputerServicesViewProps) {
  const [hero, setHero] = useState<SheetHero | null>(null);
  const [features, setFeatures] = useState<SheetLaptopFeature[]>([]);
  const [supportCatalogue, setSupportCatalogue] = useState<SheetSupportCatalogue[]>([]);
  const [whyBuy, setWhyBuy] = useState<SheetWhyBuy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    async function loadData() {
      try {
        const [heroData, featuresData, catalogueData, whyBuyData] = await Promise.all([
          fetchHero(),
          fetchLaptopFeatures(),
          fetchSupportCatalogue(),
          fetchWhyBuy()
        ]);
        if (active) {
          setHero(heroData);
          setFeatures(featuresData);
          setSupportCatalogue(catalogueData);
          setWhyBuy(whyBuyData);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error loading computer services and laptop sales data:', error);
        if (active) {
          setIsLoading(false);
        }
      }
    }
    loadData();
    return () => {
      active = false;
    };
  }, []);

  function getFeatureIcon(iconKey: string): React.ReactNode {
    const normalized = (iconKey || '').trim().toLowerCase();
    if (normalized === 'money') {
      return <CircleDollarSign className="h-8 w-8 text-[#1e40af]" />;
    }
    if (normalized === 'check') {
      return <Check className="h-8 w-8 text-[#1e40af]" />;
    }
    if (normalized === 'shield') {
      return <Shield className="h-8 w-8 text-[#1e40af]" />;
    }
    if (normalized === 'laptop') {
      return <Laptop className="h-8 w-8 text-[#1e40af]" />;
    }
    
    // Fallback to emoji or raw text
    return <span className="select-none text-2xl">{iconKey}</span>;
  }

  function getCatalogueIcon(id: string, title: string, index: number) {
    const lowerTitle = (title || '').toLowerCase();
    if (lowerTitle.includes('sale') || lowerTitle.includes('laptop') || id === 's1') {
      return <span className="text-sm font-normal leading-none block">🖥️</span>;
    }
    if (lowerTitle.includes('repair') || id === 's2') {
      return <span className="text-sm font-normal leading-none block">🔧</span>;
    }
    if (lowerTitle.includes('maintenance') || lowerTitle.includes('service') || id === 's3') {
      return <span className="text-sm font-normal leading-none block">⚙️</span>;
    }
    const defaults = ['🖥️', '🔧', '⚙️'];
    return <span className="text-sm font-normal leading-none block">{defaults[index % defaults.length]}</span>;
  }

  if (isLoading) {
    return (
      <div className="bg-white text-slate-800 min-h-screen py-12 px-5 sm:py-20 sm:px-12 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-4 border-[#1e40af] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs sm:text-sm text-slate-500 font-mono uppercase tracking-widest font-black animate-pulse">
            Loading Hardware & Sales Support...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 px-5 sm:py-16 sm:px-12 selection:bg-[#1e40af] selection:text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ================= SECTION 1: COMPUTER HARDWARE SERVICES HERO ================= */}
        {hero && hero.active && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-16"
          >
            {/* Header Split Hero banner */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-center lg:text-left space-y-6 w-full">
                <span className="inline-block text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono bg-[#dbeafe] border border-blue-200 px-3.5 py-1.5 rounded-full">
                  CCT SALES & HARDWARE SUPPORT DEPT
                </span>
                <h1 className="text-3.5xl sm:text-5vw font-black text-[#0f172a] tracking-tight uppercase leading-none">
                  {hero.title.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < hero.title.split('\n').length - 1 && <br className="hidden sm:inline" />}
                    </span>
                  ))}
                </h1>
                <p className="text-sm text-[#374151] font-semibold leading-relaxed max-w-2xl">
                  {hero.subtitle}
                </p>
                {hero.buttonText && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href={hero.buttonLink || "tel:8527208085"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-black text-xs uppercase tracking-widest px-8 py-4.5 rounded-lg transition min-h-[44px] shadow-md"
                    >
                      <Phone className="h-4 w-4" />
                      {hero.buttonText}
                    </a>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 w-full flex justify-center">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[16:11] w-full max-w-md sm:max-w-xl lg:max-w-none bg-blue-100 group">
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                  <img 
                    src={hero.imageUrl}
                    alt="Quality laptops and computers showcase with modern workstations for laptop sales and repair services at CCT"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </section>

            {/* Services Grid with Graphic Card Images */}
            <div className="space-y-6 pt-8 border-t border-slate-100">
              <div className="text-left space-y-2 max-w-2xl">
                <span className="text-[#1e40af] text-xs font-mono font-black uppercase tracking-widest">WARRANTY DRIVEN OUTCOMES</span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] uppercase tracking-tight">Our Support Catalogue</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {supportCatalogue.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#bfdbfe]/50 hover:border-[#1e40af] rounded-2xl overflow-hidden text-left flex flex-col justify-between group transition duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(30,64,175,0.12)] w-full text-slate-800"
                  >
                    <div className="relative aspect-[16:10] w-full bg-slate-50 overflow-hidden border-b border-blue-100">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 p-2 bg-[#1e40af] text-white rounded-lg shadow-md z-10 border border-blue-400/20">
                        {getCatalogueIcon(item.id, item.title, idx)}
                      </div>
                    </div>

                    <div className="p-5 sm:p-7 space-y-3 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        {(item.price || item.warranty) && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                            {item.price && (
                              <div style={{ background: '#1e40af', color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700', display: 'inline-block', width: 'fit-content' }}>
                                Starting <span style={{ fontSize: '22px', fontWeight: '900', color: 'white' }}>{item.price}</span>
                              </div>
                            )}
                            {item.warranty && (
                              <div style={{ background: '#16a34a', color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700', display: 'inline-block', width: 'fit-content' }}>
                                {item.warranty}
                              </div>
                            )}
                          </div>
                        )}
                        <h3 className="text-md sm:text-lg font-black text-[#0f172a] uppercase group-hover:text-[#1e40af] transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-[#374151] font-semibold leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">
                          <span>{item.footerLeft}</span>
                          <span className="text-[#1e40af] font-bold">{item.footerRight}</span>
                        </div>
                        {item.buttonText && (
                          <a 
                            href={item.buttonLink && item.buttonLink !== '#' ? item.buttonLink : 'tel:8527208085'}
                            className="w-full text-center bg-[#1e40af] hover:bg-blue-800 text-white font-extrabold text-[10px] uppercase tracking-wider py-2.5 rounded-lg transition duration-150 inline-flex items-center justify-center cursor-pointer min-h-[36px]"
                            target={item.buttonLink && item.buttonLink !== '#' ? '_blank' : undefined}
                            rel={item.buttonLink && item.buttonLink !== '#' ? 'noopener noreferrer' : undefined}
                          >
                            {item.buttonText}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= SECTION 2: LAPTOP SALES & CATALOGUE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-16 pt-16 border-t-2 border-slate-100"
        >
          {/* HERO / INTRO SECTION */}
          <section className="py-12 px-5 bg-slate-50 text-center rounded-3xl border border-slate-200/50">
            <div className="max-w-4xl mx-auto space-y-6">
              <span className="text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono block">EXPERT LAPTOP OUTLET</span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight leading-none">
                Quality Used Laptops & Computers For Sale
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-semibold max-w-2xl mx-auto leading-relaxed">
                Super affordable, thoroughly tested, and ready to use. Starting at just ₹6,500 with complete peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <div className="bg-[#1e40af] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                  Price Starts: <span className="font-black text-base sm:text-lg">₹6,500</span>
                </div>
                <div className="bg-[#16a34a] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                  1 Month Testing Warranty
                </div>
              </div>
            </div>
          </section>

          {/* FEATURE CARDS */}
          <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="bg-[#f0f9ff] border border-[#bfdbfe] rounded-[12px] p-6 text-center flex flex-col justify-between h-full hover:border-[#1e40af] transition-all duration-300 shadow-sm hover:shadow"
                >
                  <div>
                    <div style={{ width: '60px', height: '60px', background: '#dbeafe', borderRadius: '12px', display: 'flex', alignItems: 'center', justify: 'center', margin: '0 auto 16px auto' }}>
                      {getFeatureIcon(feat.icon)}
                    </div>
                    <h3 className="text-md sm:text-lg font-black text-[#1e40af] uppercase tracking-tight mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WHY BUY FROM US SECTION */}
          <section className="py-12 px-5 sm:px-12 bg-slate-50 border border-slate-150 rounded-3xl">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center">
                <span className="text-[#1e40af] text-xs font-black uppercase tracking-[0.2em] font-mono block mb-2">PROVEN CREDENTIALS</span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] uppercase tracking-tight">
                  Why Buy From Us
                </h2>
              </div>

              <div className="bg-white rounded-2xl border border-slate-150 p-6 sm:p-8 space-y-4 shadow-sm">
                {whyBuy.map((benefit, index) => (
                  <div key={index} className="flex gap-3.5 items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-50 text-[#1e40af] flex items-center justify-center shrink-0 border border-blue-100 font-bold text-sm">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BIG CTA SECTION AT THE BOTTOM */}
          <section className="py-12 max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] uppercase tracking-tight">
                Interested? Call or WhatsApp Us Now
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">
                Visit our center at Madangir, New Delhi or call to know available stock, specifications, and prices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="tel:8527208085"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1e40af] hover:bg-blue-800 text-white font-black text-xs sm:text-sm uppercase tracking-widest px-8 py-4.5 rounded-lg transition min-h-[44px] shadow-md hover:-translate-y-0.5"
              >
                <Phone className="h-4.5 w-4.5" />
                Call Now: 8527208085
              </a>
              <a
                href="https://wa.me/918527208085?text=Hi%2C%20I%20am%20interested%20in%20buying%20a%20used%20laptop%20or%20computer.%20Please%20share%20available%20stock."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-green-700 text-white font-black text-xs sm:text-sm uppercase tracking-widest px-8 py-4.5 rounded-lg transition min-h-[44px] shadow-md hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.321 1.451 5.357 1.452 5.513 0 9.995-4.485 9.998-10.001.002-2.673-1.026-5.185-2.899-7.06-1.875-1.875-4.37-2.907-7.042-2.908-5.523 0-10.01 4.487-10.014 10.004-.001 2.016.521 3.987 1.513 5.727L1.616 22.01l4.413-1.156c1.642.895 3.529 1.365 5.395 1.365h.005zm10.74-6.843c-.29-.145-1.713-.846-1.978-.942-.266-.097-.459-.145-.652.146-.193.29-.747.942-.916 1.135-.168.193-.337.217-.627.072-2.263-1.134-3.551-1.722-4.996-4.2-.38-.652.38-.606 1.088-2.022.12-.242.06-.454-.03-.599-.09-.145-.747-1.8-.1023-2.65-.24-.583-.472-.505-.652-.514-.17-.008-.363-.01-.555-.01-.193 0-.507.073-.772.363-.266.29-1.014.99-1.014 2.415 0 1.425 1.038 2.802 1.182 2.996.145.193 2.04 3.114 4.945 4.368.69.298 1.23.476 1.65.61.694.221 1.325.19 1.825.114.557-.084 1.713-.7 1.953-1.376.24-.677.24-1.256.17-1.376-.073-.12-.266-.193-.556-.339z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* ADDRESS INFO TRACING IN MAJESTIC COLOR CARD */}
            <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-xl max-w-md mx-auto flex gap-3.5 text-left items-start shadow-sm">
              <MapPin className="text-[#1e40af] h-5 w-5 mt-0.5 shrink-0" />
              <div className="space-y-0.5">
                <span className="text-[10px] font-black tracking-wider text-[#1e40af] font-mono block uppercase">Outlet Location</span>
                <p className="text-xs text-[#0f172a] font-bold leading-relaxed">
                  19/520, DDA Flats, Madangir, Ground Floor, New Delhi — 110062
                </p>
              </div>
            </div>
          </section>
        </motion.div>

      </div>
    </div>
  );
}
