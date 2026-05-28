import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Droplet, 
  Layers, 
  Sun, 
  PlusCircle, 
  Waves, 
  Check, 
  Activity, 
  Truck, 
  Award, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';
import { PROCESS_TIMELINE, LAB_IMAGE } from '../data';

export default function QualityView() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (stepNum: number) => {
    switch (stepNum) {
      case 1: return <Droplet className="h-6 w-6" />;
      case 2: return <Layers className="h-6 w-6" />;
      case 3: return <Sun className="h-6 w-6" />;
      case 4: return <PlusCircle className="h-6 w-6" />;
      case 5: return <Waves className="h-6 w-6" />;
      case 6: return <Check className="h-6 w-6" />;
      case 7: return <Activity className="h-6 w-6" />;
      case 8: return <Truck className="h-6 w-6" />;
      default: return <Droplet className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sky-600 font-extrabold text-sm uppercase tracking-widest block">
            Our Purification Process / शुद्धता की विधि
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Source to Bottle – Every Drop Pure
          </h1>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 font-medium">
            We employ modern multi-tier filtration technologies coupled with active mineral balancing to evoke maximum trust and pristine safety.
          </p>
        </div>


        {/* 2. Step-by-Step Interactive Timeline */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Timeline Cards Selection Desk (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">
              Process Stages / शुद्धिकरण चरण
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
              {PROCESS_TIMELINE.map((item) => {
                const isSelected = activeStep === item.step;
                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveStep(item.step)}
                    className={`flex items-center space-x-3 text-left p-3.5 sm:p-4 rounded-xl border transition-all ${
                      isSelected 
                        ? 'border-sky-500 bg-sky-50/70 text-sky-700 shadow-xs scale-102 lg:translate-x-2' 
                        : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${
                      isSelected ? 'bg-sky-500 text-white' : 'bg-white text-slate-400'
                    }`}>
                      {getStepIcon(item.step)}
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400">STAGE 0{item.step}</span>
                      <span className="block font-semibold text-sm line-clamp-1">{item.titleEn}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Details (Right 7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 lg:sticky lg:top-24">
            {PROCESS_TIMELINE.map((item) => {
              if (item.step !== activeStep) return null;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-extrabold text-xs tracking-wider uppercase bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/10">
                      Step {item.step} of 8 / चरण {item.step}
                    </span>
                    <span className="text-slate-300 font-bold text-5xl">0{item.step}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-hindi text-2xl font-bold text-sky-600">
                      {item.titleHi}
                    </h3>
                    <h2 className="font-heading text-xl font-bold text-slate-800">
                      {item.titleEn}
                    </h2>
                  </div>

                  <hr className="border-slate-250/20" />

                  <div className="space-y-4">
                    <p className="font-hindi text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                      {item.descriptionHi}
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {item.descriptionEn}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-150/50 flex items-center space-x-3 text-xs text-slate-500">
                    <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
                    <span>Every batch at this stage must satisfy all ISI and regional food security directives before routing onwards.</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </section>


        {/* 3. Laboratory spotlight */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-sky-950 text-white rounded-3xl overflow-hidden p-8 sm:p-12 mb-24 relative shadow-md">
          {/* Subtle background decoration */}
          <div className="absolute right-0 bottom-0 opacity-5 w-1/2 h-1/2 pointer-events-none">
            <Cpu className="w-full h-full" />
          </div>

          <div className="space-y-6 relative z-10">
            <span className="inline-flex items-center space-x-1 border border-sky-400/30 text-sky-400 font-bold px-3 py-1 rounded-full text-xs bg-sky-900/40 font-hindi">
              सघन प्रयोगशाला परीक्षण / Certified Lab Tested
            </span>
            <h2 className="font-hindi text-3xl font-bold text-amber-400 leading-tight">
              हमारी इन-हाउस लैब में हर घंटे पानी की जाँच की जाती है।
            </h2>
            <h3 className="font-heading text-xl font-bold text-slate-100">
              Maintain Final Total Dissolved Solids Between 70 to 120
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              We understand that regional geological characteristics alter groundwater properties. To safeguard your health and ensure a refreshing sweet taste, our certified chemists trace pH levels and TDS count using digital calibrated equipment on an hourly basis.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <span className="block text-amber-400 text-xl font-extrabold">70-120</span>
                <span className="block text-[10px] text-slate-300 tracking-wide uppercase mt-1">Optimal TDS</span>
              </div>
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <span className="block text-sky-400 text-xl font-extrabold">6.5-7.5</span>
                <span className="block text-[10px] text-slate-300 tracking-wide uppercase mt-1">Stable pH</span>
              </div>
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <span className="block text-emerald-400 text-xl font-extrabold">0%</span>
                <span className="block text-[10px] text-slate-300 tracking-wide uppercase mt-1">Chemicals</span>
              </div>
            </div>
          </div>

          {/* Imaging Desk */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white/10 aspect-4/3">
            <img 
              src={LAB_IMAGE} 
              alt="Technician checking water samples in laboratory" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>


        {/* 4. Certification Badges */}
        <section className="bg-slate-50 rounded-3xl border border-slate-100 p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <Award className="h-10 w-10 text-amber-500 mx-auto" />
            <h2 className="text-2xl font-bold text-slate-800">
              Recognized Compliances & Licenses
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto">
              We strictly comply with Indian municipal, chemical, and food safety standards to bring pure drinking water under official statutory approvals.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center font-extrabold text-orange-600 text-xs mb-3 font-heading uppercase">
                  FSSAI
                </div>
                <h4 className="text-sm font-bold text-slate-800">FSSAI licensed</h4>
                <p className="text-slate-400 text-xs text-center mt-1">Registered & certified plant for food processing safety.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-extrabold text-blue-600 text-xs mb-3 font-heading uppercase">
                  BIS
                </div>
                <h4 className="text-sm font-bold text-slate-800">BIS Guidelines</h4>
                <p className="text-slate-400 text-xs text-center mt-1">Maintains parameters strictly adhering to IS-14543.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center font-extrabold text-emerald-600 text-xs mb-3 font-heading uppercase font-hindi text-center">
                  MSME
                </div>
                <h4 className="text-sm font-bold text-slate-800">MSME Registered</h4>
                <p className="text-slate-400 text-xs text-center mt-1">Proudly supporting India&#39;s local enterprise and jobs.</p>
              </div>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
