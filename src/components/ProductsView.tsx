import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Flame, MessageCircle, Info, Calculator } from 'lucide-react';
import { PRODUCTS } from '../data';

interface ProductsViewProps {
  onNavigate: (page: string) => void;
  selectedProductId?: string;
}

export default function ProductsView({ onNavigate, selectedProductId }: ProductsViewProps) {
  // Retailer calculator state
  const [calcQuantity, setCalcQuantity] = useState<number>(300); // number of bottles
  const [productType, setProductType] = useState<string>('1l-bottle');

  // Calculates estimated rates based on quantities (wholesale discounts!)
  const getEstimatedRate = () => {
    if (productType === '1l-bottle') {
      // Retail MRP ₹15. Wholesale deals:
      if (calcQuantity < 100) return 12.0;
      if (calcQuantity < 500) return 10.5;
      if (calcQuantity < 2000) return 9.5;
      return 8.8; // deep discount!
    } else {
      // 6-pack shrink wrap (MRP ₹90).
      const packsCount = Math.ceil(calcQuantity / 6);
      if (packsCount < 20) return 72.0; // ₹12 per bottle
      if (packsCount < 100) return 60.0; // ₹10 per bottle
      if (packsCount < 500) return 54.0; // ₹9 per bottle
      return 50.0; // deepest discount!
    }
  };

  const unitRate = getEstimatedRate();
  const calculatedTotal = productType === '1l-bottle' 
    ? calcQuantity * unitRate 
    : Math.ceil(calcQuantity / 6) * unitRate;

  const totalMRP = productType === '1l-bottle'
    ? calcQuantity * 15
    : Math.ceil(calcQuantity / 6) * 90;

  const estimatedProfit = totalMRP - calculatedTotal;

  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sky-600 font-extrabold text-sm uppercase tracking-widest block">
            Our Drinking Water Range / मुख्य उत्पाद
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-hindi">
            गंगा जल बोतल एवं थोक बंडल
          </h1>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 font-medium">
            Discover our premium PET bottles and bulk wholesale bundles designed for station platform retailers, hotels, and mass commuting.
          </p>
        </div>


        {/* 2. Products Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {PRODUCTS.map((prod) => {
            const isHighlight = selectedProductId === prod.id;
            return (
              <div 
                key={prod.id}
                id={prod.id}
                className={`bg-white rounded-3xl overflow-hidden border transition-all flex flex-col justify-between ${
                  isHighlight 
                    ? 'border-2 border-amber-500 shadow-xl ring-4 ring-amber-500/10 scale-102 font-bold' 
                    : 'border-slate-100 hover:border-sky-200 hover:shadow-lg'
                }`}
              >
                {/* Image Stage */}
                <div className="relative aspect-4/3 bg-radial from-slate-50 to-white flex items-center justify-center p-6 border-b border-slate-50">
                  <img 
                    src={prod.image} 
                    alt={prod.nameEn} 
                    className="max-h-full max-w-full object-contain drop-shadow-md rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                  {prod.id === '1l-bottle' && (
                    <span className="absolute top-4 left-4 bg-sky-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Most Popular / सबसे लोकप्रिय
                    </span>
                  )}
                  {prod.id === '500ml-bottle' && (
                    <span className="absolute top-4 left-4 bg-slate-800 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider animate-pulse">
                      Under development / जल्द आ रहा है
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-amber-600 font-hindi text-base font-bold">
                        {prod.nameHi}
                      </span>
                      <span className="bg-sky-50 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-md">
                        {prod.id === '6l-bundle' ? '6 x 1L Pack' : prod.id === '1l-bottle' ? '1 Litre Unit' : '500 ml Unit'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">
                      {prod.nameEn}
                    </h3>
                    
                    <p className="text-slate-500 text-xs leading-relaxed font-hindi mb-3 font-medium">
                      {prod.descriptionHi}
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {prod.descriptionEn}
                    </p>

                    <div className="bg-slate-50/80 rounded-xl p-3.5 my-4 border border-slate-100">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pricing Structure</span>
                      <strong className="text-slate-800 text-sm font-extrabold">{prod.highlight}</strong>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 mt-4 pt-4 border-t border-slate-50">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-2.5">What is included:</span>
                      {prod.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-xs text-slate-600 space-x-2">
                          <Check className="h-4 w-4 text-sky-500 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (prod.id !== '500ml-bottle') {
                        setProductType(prod.id);
                        const calculatorEl = document.getElementById('wholesale-calculator');
                        if (calculatorEl) {
                          calculatorEl.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        onNavigate('contact');
                      }
                    }}
                    className={`w-full mt-6 py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                      prod.id === '500ml-bottle'
                        ? 'bg-slate-200 text-slate-500 cursor-not-allowed hover:bg-slate-300'
                        : 'bg-amber-600 hover:bg-amber-700 text-white shadow-xs'
                    }`}
                  >
                    <span>{prod.ctaText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>


        {/* 3. Interactive Bulk Calculator */}
        <section 
          id="wholesale-calculator" 
          className="bg-white rounded-3xl border border-sky-100 shadow-md p-6 sm:p-10 mb-16"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <span className="font-hindi text-sm font-bold text-sky-600 block">वितरक मार्जिन गणक</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                Ganga Jal Wholesale Profit Estimator
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Controls (7 columns) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Product selector */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                  Select Water Format / बोतल आकार चुनें
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setProductType('1l-bottle')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      productType === '1l-bottle'
                        ? 'border-sky-500 bg-sky-50/55 text-sky-800 font-extrabold ring-2 ring-sky-500/10'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block text-xs text-slate-400">1 Litre Bottle</span>
                    <span className="block text-sm font-bold mt-1">१ लीटर बोतलें</span>
                  </button>

                  <button
                    onClick={() => setProductType('6l-bundle')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      productType === '6l-bundle'
                        ? 'border-sky-50 bg-sky-50/55 text-sky-800 font-extrabold ring-2 ring-sky-500/10'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block text-xs text-slate-400">6-Bottle Bundle</span>
                    <span className="block text-sm font-bold mt-1">६-बोतल श्रिंक पैकं</span>
                  </button>
                </div>
              </div>

              {/* Quantity range slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Select Target Bottle Quantity / बोतलें
                  </label>
                  <span className="text-sm font-extrabold bg-sky-100 text-sky-700 px-3 py-1 rounded-md">
                    {calcQuantity} Bottles
                  </span>
                </div>
                <input 
                  type="range" 
                  min="60" 
                  max="5000" 
                  step="60"
                  value={calcQuantity}
                  onChange={(e) => setCalcQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 font-medium">
                  <span>Min Wholesale: 60 bottles</span>
                  <span>Medium Net: 1,200</span>
                  <span>Distributor tier: 5,000+</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start space-x-3 text-xs text-slate-500 leading-relaxed">
                <Info className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p><strong>Note on calculation:</strong> The estimates shown are realistic indicators based on cash-and-carry or freight configurations around Ramnagar plant. Final transport levies, tax compliance structures (GST), and retail schemes may vary matching delivery schedules in Varanasi or Kanpur.</p>
                </div>
              </div>

            </div>

            {/* Right Estimator results (5 columns) */}
            <div className="lg:col-span-5 bg-sky-950 text-white rounded-2xl p-6 flex flex-col justify-between border border-sky-900 shadow-md">
              <div className="space-y-6">
                <h3 className="text-xs font-bold text-sky-300 uppercase tracking-widest border-b border-sky-900 pb-2.5">
                  Financial Breakdown / आय विवरन
                </h3>

                <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-300">
                  <div>
                    <span className="block text-slate-400 text-[10px] uppercase">Format Selected</span>
                    <span className="block text-white font-bold text-sm mt-0.5 font-hindi">
                      {productType === '1l-bottle' ? '१ लीटर पीस' : '६-पीस बंडल (श्रिंक)'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-slate-400 text-[10px] uppercase">Total Units</span>
                    <span className="block text-white font-bold text-sm mt-0.5">
                      {productType === '1l-bottle' 
                        ? `${calcQuantity} bottles` 
                        : `${Math.ceil(calcQuantity / 6)} shrink wraps`
                      }
                    </span>
                  </div>
                </div>

                <hr className="border-sky-900" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Wholesale Unit Cost</span>
                    <span className="font-bold text-white">
                      ₹{unitRate.toFixed(2)} / {productType === '1l-bottle' ? 'bottle' : 'shrink pack'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Total Purchase Price (Est)</span>
                    <span className="font-extrabold text-white text-base">
                      ₹{calculatedTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Estimated Retail Sales (MRP Value)</span>
                    <span className="font-bold text-white">
                      ₹{totalMRP.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/5 my-4 flex items-center justify-between">
                  <div>
                    <span className="block text-emerald-400 text-[10px] uppercase font-bold tracking-wider">Estimated Profit / लाभ मार्जिन</span>
                    <span className="block text-emerald-400 text-lg font-black mt-1 font-hindi">
                      + ₹{estimatedProfit.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 text-[11px] font-black px-2.5 py-1 rounded-full uppercase border border-emerald-500/10">
                    {((estimatedProfit / totalMRP) * 100).toFixed(0)}% Margin
                  </span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full mt-6 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors text-xs text-center uppercase tracking-wider block"
              >
                Apply for Wholesale Franchise / संपर्क करें
              </button>
            </div>

          </div>
        </section>


        {/* 4. Extra info / Custom branding promotion */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div>
              <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-2 font-hindi">विशेष ब्रांडिंग सेवा</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Bulk Supply & Custom Private Labeling
              </h2>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                Are you hosting a high-profile marriage ceremony, political event, regional corporate conference, or managing a pilgrimage camp in Prayagraj? We design, print, and sleeve custom-branded bottles featuring your event details or logo for continuous, trustworthy drinking water service.
              </p>
              
              <ul className="grid grid-cols-2 gap-4 mt-6 text-xs text-slate-200">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 bg-sky-400 rounded-full shrink-0" />
                  <span>Free Design Consultation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 bg-sky-400 rounded-full shrink-0" />
                  <span>Doorstep logistics in Prayagraj</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 bg-sky-400 rounded-full shrink-0" />
                  <span>Premium 250gsm high-gloss label</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 bg-sky-400 rounded-full shrink-0" />
                  <span>Minimum batch size: 1000 units</span>
                </li>
              </ul>
            </div>

            {/* Direct Connect panel */}
            <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 text-center border border-slate-700">
              <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Talk to Production Manager
              </span>
              <p className="text-xs text-slate-300">
                Discuss custom templates, volume schedules, or railway concession deals directly with our business development lead.
              </p>
              
              <div className="text-lg font-extrabold text-white font-sans">
                +91 63937 41885
              </div>

              <a 
                href="https://wa.me/916393741885?text=Hello!%20Interested%20in%20custom%20labeling%20Ganga%20Jal%20bottles."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 text-xs transition-colors"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
