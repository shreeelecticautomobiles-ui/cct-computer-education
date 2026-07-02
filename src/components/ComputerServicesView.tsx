import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, Wrench, Cpu, Phone, Check, MapPin, Sparkles,
  Tag, Image as ImageIcon, MessageSquare, Monitor, Laptop, HelpCircle
} from 'lucide-react';
import { fetchLaptopSaleInfo, fetchServices, fetchLaptopSales, fetchLaptopGallery, FALLBACK_SERVICES, FALLBACK_LAPTOP_SALES } from '../services/googleSheets';
import { SheetService, LaptopSaleCard, LaptopGalleryItem } from '../types';

interface ComputerServicesViewProps {
  initialTab?: 'services' | 'laptop-sale';
}

interface StockItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  tag: string;
  stockStatus?: string;
  buttonText?: string;
  buttonLink?: string;
  isCustom?: boolean;
}

const DEFAULT_STOCK_ITEMS: StockItem[] = [
  {
    id: 'stock-1',
    title: 'Lenovo ThinkPad L480',
    description: 'Intel Core i5 8th Gen | 8GB RAM | 256GB SSD | 14-inch IPS Screen | Win 11 Pro',
    price: '₹13,800',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600',
    tag: 'Grade A++ Like New'
  },
  {
    id: 'stock-2',
    title: 'HP EliteBook 840 G5',
    description: 'Intel Core i5 8th Gen | 16GB RAM | 512GB SSD | Backlit Keyboard | Full HD IPS',
    price: '₹16,500',
    image: 'https://images.unsplash.com/photo-1589561096644-4252277d10db?auto=format&fit=crop&q=80&w=600',
    tag: 'Premium Metal Body'
  },
  {
    id: 'stock-3',
    title: 'Dell Latitude 7490',
    description: 'Intel Core i7 8th Gen | 8GB RAM | 256GB SSD | Sleek Ultrabook Design',
    price: '₹18,500',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=600',
    tag: 'i7 High Performance'
  },
  {
    id: 'stock-4',
    title: 'Budget Student Laptop',
    description: 'Intel Core i3 6th Gen | 4GB RAM | 128GB SSD | Perfect for basic studies & Excel',
    price: '₹8,500',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=600',
    tag: 'Best Budget Option'
  }
];

export default function ComputerServicesView({ initialTab }: ComputerServicesViewProps) {
  const [laptopInfo, setLaptopInfo] = useState({
    price: '₹6,500',
    warranty: '1 Month Testing Warranty'
  });
  const [services, setServices] = useState<SheetService[]>(FALLBACK_SERVICES);
  const [laptopSales, setLaptopSales] = useState<LaptopSaleCard[]>(FALLBACK_LAPTOP_SALES);

  // Live Stock Gallery State
  const [stockItems, setStockItems] = useState<StockItem[]>(DEFAULT_STOCK_ITEMS);

  useEffect(() => {
    let active = true;
    async function loadAllData() {
      try {
        const [info, servicesData, salesData, galleryData] = await Promise.all([
          fetchLaptopSaleInfo(),
          fetchServices(),
          fetchLaptopSales(),
          fetchLaptopGallery().catch(err => {
            console.error('Error fetching laptop gallery, using fallback:', err);
            return [];
          })
        ]);
        if (active) {
          setLaptopInfo(info);
          setServices(servicesData);
          setLaptopSales(salesData);

          if (galleryData.length > 0) {
            const mappedItems: StockItem[] = galleryData.map((item, idx) => {
              const defaultPlaceholder = DEFAULT_STOCK_ITEMS[idx % DEFAULT_STOCK_ITEMS.length]?.image || DEFAULT_STOCK_ITEMS[0].image;
              const imageToUse = (item.imageUrl && item.imageUrl.trim() !== '') ? item.imageUrl : defaultPlaceholder;
              return {
                id: item.id,
                title: item.title || `Premium Laptop Stock ${idx + 1}`,
                description: item.specifications || 'Thoroughly tested pre-owned computer workstation in pristine condition. Contact for full specs.',
                price: item.price || `Contact for Price`,
                image: imageToUse,
                tag: item.badge || 'Certified Grade A',
                stockStatus: item.stockStatus || 'In Stock',
                buttonText: item.buttonText || 'Inquire via WhatsApp',
                buttonLink: item.buttonLink || '#'
              };
            });
            setStockItems(mappedItems);
          } else {
            setStockItems(DEFAULT_STOCK_ITEMS);
          }
        }
      } catch (err) {
        console.error('Error loading dynamic computer services data:', err);
        if (active) {
          setStockItems(DEFAULT_STOCK_ITEMS);
        }
      }
    }
    loadAllData();
    return () => {
      active = false;
    };
  }, []);

  const benefits = [
    'Government registered institute since 1996 — trusted by thousands of candidates and clients',
    'All systems personally tested and verified by our professional technical experts',
    'Affordable prices with genuine testing warranty — zero hidden charges',
  ];


  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 px-5 sm:py-16 sm:px-12 selection:bg-[#1e40af] selection:text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ================= SECTION 1: COMPUTER HARDWARE SERVICES ================= */}
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
                Computer Hardware <br className="hidden sm:inline" /> & Repair Services
              </h1>
              <p className="text-sm text-[#374151] font-semibold leading-relaxed max-w-2xl">
                From high-capacity laptop sales to expert component motherboard repair and complete Windows software optimizations — we serve candidates, students, and professional hardware needs in Madangir since 1996.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:8527208085"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-black text-xs uppercase tracking-widest px-8 py-4.5 rounded-lg transition min-h-[44px] shadow-md"
                >
                  <Phone className="h-4 w-4" />
                  Call Department: 8527208085
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[16:11] w-full max-w-md sm:max-w-xl lg:max-w-none bg-blue-100 group">
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                <img 
                  src="https://i.ibb.co/mC1FFnrG/Gemini-Generated-Image-v8iq2cv8iq2cv8iq.png"
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
              {services.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="bg-white border border-[#bfdbfe]/50 hover:border-[#1e40af] rounded-2xl overflow-hidden text-left flex flex-col justify-between group transition duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(30,64,175,0.12)] w-full text-slate-800"
                >
                  <div className="relative aspect-[16:10] w-full bg-slate-50 overflow-hidden border-b border-blue-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 p-2 bg-[#1e40af] text-white rounded-lg shadow-md z-10 border border-blue-400/20">
                      {item.title.toLowerCase().includes('laptop') || item.title.toLowerCase().includes('sale') ? (
                        <span className="text-sm font-normal leading-none block">🖥️</span>
                      ) : item.title.toLowerCase().includes('repair') ? (
                        <span className="text-sm font-normal leading-none block">🔧</span>
                      ) : (
                        <span className="text-sm font-normal leading-none block">⚙️</span>
                      )}
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 space-y-3 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      {(item.badge1 || item.badge2 || item.price || item.warranty || item.title.toLowerCase().includes('laptop') || item.title.toLowerCase().includes('sale')) && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                          <div style={{ background: '#1e40af', color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700', display: 'inline-block', width: 'fit-content' }}>
                            {item.badge1 || (item.price ? `Starting ₹${item.price.replace(/[^\d,]/g, '')}` : `Starting ${laptopInfo.price}`)}
                          </div>
                          {(item.badge2 || item.warranty || laptopInfo.warranty) && (
                            <div style={{ background: '#16a34a', color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700', display: 'inline-block', width: 'fit-content' }}>
                              {item.badge2 || item.warranty || laptopInfo.warranty}
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

                    {item.buttonText && (
                      <div className="pt-2">
                        <a
                          href={item.buttonLink || "tel:8527208085"}
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#1e40af] hover:bg-blue-800 text-white font-black text-[10px] uppercase tracking-widest py-3 rounded-lg transition"
                        >
                          {item.buttonText}
                        </a>
                      </div>
                    )}

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">
                      <span>Authorized support</span>
                      <span className="text-[#1e40af] font-bold">CCT Delhi</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

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
                Super affordable, thoroughly tested, and ready to use. Starting at just {laptopInfo.price} with complete peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <div className="bg-[#1e40af] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                  Price Starts: <span className="font-black text-base sm:text-lg">{laptopInfo.price}</span>
                </div>
                <div className="bg-[#16a34a] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                  {laptopInfo.warranty}
                </div>
              </div>
            </div>
          </section>

          {/* FEATURE CARDS */}
          <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {laptopSales.map((feat, idx) => (
                <div 
                  key={feat.id || idx}
                  className="bg-[#f0f9ff] border border-[#bfdbfe] rounded-[12px] overflow-hidden text-center flex flex-col justify-between h-full hover:border-[#1e40af] transition-all duration-300 shadow-sm hover:shadow group"
                >
                  <div className={feat.image ? "" : "p-6"}>
                    {feat.image ? (
                      <div className="relative aspect-[16:10] w-full bg-slate-50 overflow-hidden border-b border-blue-100">
                        <img
                          src={feat.image}
                          alt={feat.title}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {feat.icon && (
                          <div className="absolute bottom-3 left-3 p-1.5 bg-[#dbeafe] text-[#1e40af] rounded-lg shadow-sm z-10 text-xl">
                            {feat.icon}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={{ width: '60px', height: '60px', background: '#dbeafe', borderRadius: '12px', display: 'flex', alignItems: 'center', justify: 'center', margin: '0 auto 16px auto', fontSize: '32px' }}>
                        {feat.icon || '💻'}
                      </div>
                    )}
                    
                    <div className={feat.image ? "p-6 text-left" : "text-center"}>
                      <h3 className="text-md sm:text-lg font-black text-[#1e40af] uppercase tracking-tight mb-2">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                        {feat.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 mt-3 ${feat.image ? "justify-start" : "justify-center"}`}>
                        {feat.price && (
                          <div className="bg-[#1e40af] text-white px-2.5 py-1 rounded-full text-[10px] font-bold">
                            Price: {feat.price}
                          </div>
                        )}
                        {feat.warranty && (
                          <div className="bg-[#16a34a] text-white px-2.5 py-1 rounded-full text-[10px] font-bold">
                            {feat.warranty}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {(feat.buttonText || feat.price || feat.warranty || feat.image) && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-slate-100/60">
                        <a
                          href={(!feat.buttonLink || feat.buttonLink === '#' || feat.buttonLink.trim() === '') ? 'tel:8527208085' : feat.buttonLink}
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#1e40af] hover:bg-blue-800 text-white font-black text-[10px] uppercase tracking-widest py-3 rounded-lg transition"
                        >
                          {feat.buttonText || 'Inquire Now'}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ================= NEW STOCK ARRIVALS LIVE GALLERY ================= */}
          <section className="space-y-8 pt-12 border-t border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-left space-y-2 max-w-2xl">
                <span className="inline-flex items-center gap-1 text-[#1e40af] text-xs font-mono font-black uppercase tracking-widest">
                  <Sparkles className="h-3 w-3 animate-pulse" /> LIVE STOCK ARRIVAL GALLERY
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-[#0f172a] uppercase tracking-tight">
                  Browse Active Laptop & Computer Inventory
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  These systems are currently available for direct purchase at our Madangir outlet. We update this catalog live. Click any item to enquire via WhatsApp.
                </p>
              </div>
            </div>

            {/* LIVE STOCK GRID DISPLAY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stockItems.map((item) => {
                const inquiryMessage = `Hi CCT Delhi, I am interested in buying the *${item.title}* listed in your Live Stock Arrival Gallery for *${item.price}*.\n\n💻 *Specs:* ${item.description}\n\nIs this system currently available for sale? Please share details.`;
                const whatsappUrl = `https://wa.me/918527208085?text=${encodeURIComponent(inquiryMessage)}`;
                const finalButtonLink = (!item.buttonLink || item.buttonLink.trim() === '' || item.buttonLink.trim() === '#')
                  ? whatsappUrl
                  : item.buttonLink;
                const finalButtonText = item.buttonText || 'Inquire via WhatsApp';
                
                return (
                  <motion.div
                    layout
                    key={item.id}
                    className="bg-white border border-[#bfdbfe]/50 hover:border-[#1e40af] rounded-2xl overflow-hidden flex flex-col justify-between group transition duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(30,64,175,0.08)] w-full text-slate-800 text-left relative"
                  >
                    {/* Product Image */}
                    <div className="relative aspect-[16:11] w-full bg-slate-50 overflow-hidden border-b border-blue-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#1e40af] text-white text-[9px] font-black tracking-widest uppercase py-1 px-2.5 rounded-full shadow border border-blue-400/20">
                        {item.stockStatus || 'In Stock'}
                      </div>
                    </div>

                    {/* Product details */}
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5">
                          <span className="inline-flex items-center gap-1 bg-[#dbeafe] text-[#1e40af] text-[9px] font-extrabold px-2 py-0.5 rounded-md">
                            <Tag className="h-2.5 w-2.5" />
                            {item.tag}
                          </span>
                        </div>

                        <h4 className="text-md font-black text-[#0f172a] uppercase group-hover:text-[#1e40af] transition-colors leading-tight">
                          {item.title}
                        </h4>
                        
                        <p className="text-[11px] text-[#374151] font-semibold leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-slate-100">
                        {/* Price Tag Display */}
                        <div className="flex items-baseline justify-between">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Sale Price</span>
                          <span className="text-lg font-black text-[#1e40af]">{item.price}</span>
                        </div>

                        {/* WhatsApp Inquiry Link */}
                        <a
                          href={finalButtonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-green-700 text-white font-black text-[10px] uppercase tracking-widest py-3 rounded-lg transition shadow-md shadow-emerald-100"
                        >
                          <MessageSquare className="h-3.5 w-3.5" />
                          {finalButtonText}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3.5 items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-50 text-[#1e40af] flex items-center justify-center shrink-0 border border-blue-100 font-bold text-sm">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      {benefit}
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
