import { motion } from 'motion/react';
import { Truck, ShieldCheck, IndianRupee, ArrowRight, ExternalLink } from 'lucide-react';
import { ActivePage } from '../types';
import { PRODUCTS, STATS } from '../data';

interface HomeViewProps {
  onNavigate: (page: ActivePage) => void;
  onSelectProduct: (productId: string) => void;
}

export default function HomeView({ onNavigate, onSelectProduct }: HomeViewProps) {
  
  const usps = [
    {
      icon: <Truck className="h-8 w-8 text-sky-500" />,
      titleHi: "दैनिक ताज़ा आपूर्ति",
      titleEn: "Daily Fresh Supply",
      descriptionHi: "हर सुबह, ताज़ा पानी सीधे आपकी दुकान तक पहुँचता है।",
      descriptionEn: "We deliver directly to your station-side store or hotel before the first train pulls into the platform."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-emerald-500" />,
      titleHi: "प्रमाणित शुद्धता",
      titleEn: "Certified Purity",
      descriptionHi: "FSSAI लाइसेंस और इन-हाउस प्रयोगशाला परीक्षित पानी।",
      descriptionEn: "Strict adherence to Indian standards. Every batch is hourly tested for TDS levels, ensuring pristine safety."
    },
    {
      icon: <IndianRupee className="h-8 w-8 text-amber-500" />,
      titleHi: "सर्वोत्तम मूल्य गारंटी",
      titleEn: "Best Price Guarantee",
      descriptionHi: "एमआरपी मात्र ₹15! बड़ी ब्रांड बोतलों से बेहतर व्यावसायिक मार्जिन।",
      descriptionEn: "Retailers get exceptional margins, and clients get high quality drinking water at an accessible MRP of ₹15."
    }
  ];

  return (
    <div className="overflow-x-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-950 overflow-hidden">
        {/* Background Image with custom overlay gradient to make text super crisp */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/ganga_jal_hero_1779934226100.png" 
            alt="Ganga Jal Hero water bottle at Indian railway station" 
            className="w-full h-full object-cover opacity-75 object-center scale-105 transform transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Deep blue and amber soft gradients matching saffron and blue themes */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-left"
          >
            {/* Spiritual Badge label visualizer */}
            <span className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold px-3 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider mb-6">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Confluence of Purity / शुद्धता का संगम</span>
            </span>

            {/* Custom Heading with Kalam and Montserrat pairings */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
              <span className="block font-hindi text-amber-500 text-5xl sm:text-6xl md:text-7xl mb-2 font-normal">
                गंगा जल
              </span>
              <span className="block font-heading tracking-tight text-sky-400 text-2xl sm:text-3xl md:text-4xl mt-1">
                शुद्धता का अनुपम संगम
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
              Pure. Affordable. Trusted. RO+UV+Ozone treated mineral packaged drinking water starting at just <strong className="text-white font-extrabold bg-sky-500/30 px-2 py-0.5 rounded border border-sky-400/30 text-xl sm:text-2xl">₹15</strong> for the common traveler.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span>Partner With Us / संपर्क करें</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => onNavigate('quality')}
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-bold px-6 py-4 rounded-full border border-white/20 backdrop-blur-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Our Quality Promise / शुद्दि विधि</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* 2. USP Section */}
      <section className="py-16 sm:py-24 bg-white border-y border-sky-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-sky-600 font-extrabold text-sm uppercase tracking-widest block font-sans">
              Our Core Promise / हमारा संकल्प
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Stations & Retailers Trust Ganga Jal
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50/50 hover:bg-sky-50/50 border border-slate-100 hover:border-sky-100 transition-all shadow-xs"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md border border-slate-100 mb-6 transform transition-transform hover:scale-110">
                  {usp.icon}
                </div>
                <h3 className="font-hindi text-xl font-bold text-amber-600 mb-1">
                  {usp.titleHi}
                </h3>
                <h4 className="font-heading text-lg font-bold text-slate-800 mb-3">
                  {usp.titleEn}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-2 font-medium">
                  {usp.descriptionHi}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  {usp.descriptionEn}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 3. Product Showcase */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sky-600 font-extrabold text-sm uppercase tracking-widest block">
              Ganga Jal Product Lineup
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-hindi">
              शुद्धता की पैकेजिंग – हमारे मुख्य उत्पाद
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-slate-600 text-base max-w-lg mx-auto">
              Choose from our individual travel-friendly bottles or compact bundle wrapping matching your supply requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-5xl mx-auto">
            {PRODUCTS.slice(0, 2).map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all"
              >
                {/* Product Image Stage */}
                <div className="relative aspect-4/3 bg-radial from-sky-50 to-white flex items-center justify-center p-6 border-b border-sky-50/50 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.nameEn} 
                    className="max-h-full max-w-full object-contain rounded-xl drop-shadow-lg transform transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    MRP ₹{product.mrp}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-2xl font-black text-slate-800 font-heading">
                        {product.nameEn}
                      </h3>
                      <span className="font-hindi text-lg font-bold text-amber-600">
                        {product.nameHi}
                      </span>
                    </div>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 font-hindi">
                      {product.descriptionHi}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {product.descriptionEn}
                    </p>

                    <div className="border-t border-slate-50 pt-4 mb-6">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">What makes it pure:</h4>
                      <ul className="space-y-2">
                        {product.features.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-center text-xs text-slate-600 space-x-2">
                            <span className="h-1.5 w-1.5 bg-sky-500 rounded-full shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className="w-full flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-xs transition-colors group"
                  >
                    <span>View Specifications / विवरण देखें</span>
                    <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-700 font-bold hover:underline py-2"
            >
              <span>Explore our Complete Product Lineup & Wholesale Pricing</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </section>


      {/* 4. Quick Stats Banner */}
      <section className="bg-sky-600 text-white py-16 relative overflow-hidden">
        {/* Abstract water wave lines decoration */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center z-0 pointer-events-none">
          <svg className="w-full h-full scale-110" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="white" strokeWidth="3" />
            <path d="M0,60 Q25,45 50,60 T100,60" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="space-y-2 border-r last:border-r-0 border-white/20 px-2"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <div className="font-hindi text-amber-300 font-bold text-sm">
                  {stat.labelHi}
                </div>
                <div className="text-slate-100 text-xs sm:text-sm font-medium tracking-wide">
                  {stat.labelEn}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. Call-to-Action Partner Banner */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-hindi text-amber-500 font-bold text-lg md:text-xl block mb-2">दुकानदारों और वितरकों के लिए सुनहरा अवसर</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Become a &quot;Ganga Jal&quot; Retail Partner
          </h2>
          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Want to stock Ganga Jal packaged water at your railway platform shop, transit stall, event, hotel, or restaurant in UP? Get unbeatable retail margins, consistent early-morning delivery, and high consumer trust.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-extrabold px-8 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Contact Wholesale Desk / थोक मूल्य जानें
            </button>
            
            <button
              onClick={() => onNavigate('where-to-find-us')}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-sky-400 font-bold px-6 py-4 rounded-full border border-slate-700 transition-colors"
            >
              Browse Distribution Grid / वितरण देखें
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
