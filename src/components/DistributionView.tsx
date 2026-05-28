import { useState } from 'react';
import { MapPin, MessageSquare, PlusCircle, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function DistributionView() {
  const [selectedCity, setSelectedCity] = useState<string>('varanasi');

  const locations = [
    {
      id: 'varanasi',
      nameHi: "वाराणसी कैंट एवं अन्य केंद्र",
      nameEn: "Varanasi Division",
      coords: { top: '65%', left: '72%' },
      points: [
        "Varanasi Cantt (Main Platform Exit booths)",
        "Varanasi City Junction roadside standard shops",
        "Kashi Junction transit counters",
        "Rathyatra & Godowlia marketplace kiosks"
      ],
      partnerCount: "25+ Stores"
    },
    {
      id: 'prayagraj',
      nameHi: "प्रयागराज जंक्शन एवं संगम क्षेत्र",
      nameEn: "Prayagraj Division",
      coords: { top: '70%', left: '50%' },
      points: [
        "Prayagraj Junction (Civil Lines Exit & Rambagh exit stores)",
        "Transit kiosks around sangam during sacred bath cycles",
        "Katra market regional supply warehouses",
        "Subedarganj station adjacent retailers"
      ],
      partnerCount: "18+ Stores"
    },
    {
      id: 'kanpur',
      nameHi: "कानपुर सेंट्रल औद्योगिक क्षेत्र",
      nameEn: "Kanpur Division",
      coords: { top: '45%', left: '33%' },
      points: [
        "Kanpur Central (North & South exit platform vendor partners)",
        "Industrial market wholesalers near transporter hub",
        "Jhakarkati bus stand roadside travel stores",
        "Anwarganj local station counters"
      ],
      partnerCount: "15+ Stores"
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sky-600 font-extrabold text-sm uppercase tracking-widest block">
            Grid Connections / वितरण नेटवर्क
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-hindi">
            गंगा जल गंगा पट्टी वितरण केंद्र
          </h1>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 font-medium">
            Find an authorized retail outlet or bulk storage dealer across major rail transit networks in Uttar Pradesh, India.
          </p>
        </div>


        {/* 2. Interactive Map & List Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          {/* Visual Grid Representer (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950 text-white rounded-3xl p-8 border border-slate-900 shadow-lg relative overflow-hidden">
            <h3 className="font-heading text-lg font-bold text-sky-400 mb-2">Uttar Pradesh Network Map</h3>
            <p className="text-xs text-slate-400 mb-8">Click on the active nodes representing our strategic regional storage hubs.</p>
            
            {/* Styled CSS vector representation of Uttar Pradesh layout outline */}
            <div className="relative w-full aspect-16/10 bg-slate-900/50 rounded-2xl border border-sky-950/50 flex items-center justify-center">
              
              {/* Decorative wave background */}
              <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                <svg className="w-4/5 h-4/5" fill="none" viewBox="0 0 100 100">
                  <path d="M 10,50 Q 30,20 50,55 T 90,40" stroke="skyBlue" strokeWidth="1" strokeDasharray="3" />
                  <path d="M 20,60 Q 40,30 60,65 T 100,50" stroke="skyBlue" strokeWidth="0.5" strokeDasharray="3" />
                </svg>
              </div>

              {/* Dynamic Interactive City Nodes */}
              {locations.map((loc) => {
                const isActive = selectedCity === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedCity(loc.id)}
                    style={{ top: loc.coords.top, left: loc.coords.left }}
                    className="absolute group flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  >
                    {/* Ripple effects */}
                    <div className="relative">
                      <span className={`absolute -inset-2 rounded-full opacity-60 animate-ping ${
                        isActive ? 'bg-amber-500' : 'bg-sky-500'
                      }`} />
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center shadow-lg transition-all ${
                        isActive 
                          ? 'bg-amber-500 text-white border-2 border-white scale-125' 
                          : 'bg-sky-500 text-white border border-sky-300 hover:scale-110'
                      }`}>
                        <MapPin className="h-3 w-3 shrink-0" />
                      </div>
                    </div>
                    {/* Text tags */}
                    <span className={`block mt-2 text-xs font-bold font-heading px-2 py-1 rounded shadow-md transition-colors ${
                      isActive ? 'bg-amber-500 text-white' : 'bg-slate-800 text-slate-200 group-hover:bg-slate-700'
                    }`}>
                      {loc.nameEn.split(' ')[0]}
                    </span>
                  </button>
                );
              })}

              <div className="absolute top-4 right-4 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-white/5 text-[9px] text-slate-400 capitalize whitespace-nowrap">
                Sangam-Indus Belt Supply Division
              </div>
            </div>

            {/* City helper text indicator */}
            <div className="mt-6 pt-6 border-t border-sky-950 flex items-center justify-between text-xs font-medium text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-500 inline-block" />
                <span>Sky Dot: Active hubs</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500 inline-block" />
                <span>Amber Dot: Selected hub</span>
              </div>
            </div>
          </div>

          {/* Location Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {locations.map((loc) => {
              if (selectedCity !== loc.id) return null;
              return (
                <div key={loc.id} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl space-y-6 animate-fade-in">
                  <div>
                    <span className="text-sky-600 font-hindi text-sm font-bold block mb-1">
                      {loc.nameHi}
                    </span>
                    <h2 className="text-2xl font-black font-heading text-slate-800">
                      {loc.nameEn} Location Network
                    </h2>
                    <span className="inline-block bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mt-3 uppercase tracking-wider">
                      {loc.partnerCount}
                    </span>
                  </div>

                  <hr className="border-slate-200/50" />

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Key Platform & Exit Zones:</h4>
                    <ul className="space-y-3">
                      {loc.points.map((pt, index) => (
                        <li key={index} className="flex items-start text-xs sm:text-sm text-slate-600 space-x-2.5">
                          <CheckCircle className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200/50 text-xs text-slate-400">
                    * Need exact GPS directions or contact details for wholesale logistics inside {loc.nameEn.split(' ')[0]}? Talk cleanly to Varanasi Headquarters.
                  </div>
                </div>
              );
            })}
          </div>

        </section>


        {/* 3. Retailer Testimonials Section */}
        <section className="py-16 border-t border-slate-100">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="h-10 w-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 mx-auto mb-4">
              <MessageSquare className="h-5 w-5" />
            </div>
            <span className="text-sky-600 font-bold text-xs uppercase tracking-widest block font-sans">
              Merchant Testimonials / दुकानदारों के विचार
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What Appointed Retailers Say About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="bg-white p-6 rounded-2xl border border-slate-150 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="border-t border-slate-50 pt-4 flex items-center justify-between">
                  <div>
                    <strong className="block text-slate-800 text-sm font-heading">{t.author}</strong>
                    <span className="block text-slate-400 text-[10px] uppercase font-bold tracking-wider mt-0.5">{t.location}</span>
                  </div>
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 4. Become retailer block */}
        <section className="mt-20 bg-slate-50 border border-slate-150 rounded-3xl p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <PlusCircle className="h-10 w-10 text-sky-600 mx-auto" />
            <h2 className="text-2xl font-bold text-slate-800">
              Onboard Your Retail Shop Today
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Become part of one of Uttar Pradesh&#39;s fastest scaling localized beverage brands. We protect you with territorial exclusive retail security and complete promotional signage help.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href="tel:+916393741885"
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl shadow-xs transition-transform hover:-translate-y-0.5 block text-xs"
              >
                Call Onboarding Office: +91 63937 41885
              </a>
              <a 
                href="https://wa.me/916393741885?text=Hello%20Ganga%20Jal%2520Team!%20I%20want%2520to%20register%2520my%20shop%20in%2520Kanpur%2520/%20Varanasi%20/%2520Prayagraj."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-xs transition-transform hover:-translate-y-0.5 block text-xs"
              >
                Register via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
