import { motion } from 'motion/react';
import { Award, Target, Eye, Quote } from 'lucide-react';
import { PLANT_IMAGE, FOUNDER_IMAGE } from '../data';

export default function AboutView() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header with title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-600 font-extrabold text-sm uppercase tracking-widest block font-sans">
            Know Ganga Jal Minerals / हमारे बारे में जानें
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Ganga Jal / <span className="font-hindi text-sky-600">गंगा जल की कहानी</span>
          </h1>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-4 rounded-full animate-pulse" />
          <p className="mt-4 text-slate-600 text-base">
            Providing pure, premium-grade table water to budget travellers of North India.
          </p>
        </div>


        {/* 2. Story Breakdown section - Two columns */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center mb-24">
          
          {/* Left Text details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-xs">
              <span className="inline-flex items-center space-x-2 bg-sky-50 text-sky-700 font-bold px-3 py-1 rounded-full text-xs mb-4">
                <Award className="h-3.5 w-3.5" />
                <span>Story & Roots / हमारा इतिहास</span>
              </span>
              <h2 className="text-2xl font-black text-slate-800 font-heading mb-4">
                Born in Uttar Pradesh&#39;s Soul
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm mb-4 font-hindi font-medium">
                उत्तर प्रदेश की पावन धरा पर शुरू की गई पहल - &ldquo;गंगा जल&rdquo; का मुख्य उद्देश्य रेलवे स्टेशनों पर यात्रा करने वाले आम यात्रियों तक उचित दाम पर उच्च गुणवत्ता और प्रयोगशाला परीक्षित पीने का पानी पहुंचाना है।
              </p>
              <p className="text-slate-700 leading-relaxed text-base">
                Born in the spiritual heartland of Uttar Pradesh, <strong>Ganga Jal</strong> was founded to serve the common traveler with pure, affordable water. We saw that at crowded railway stations, passengers often compromise on quality due to exorbitant prices. Our mission is to change that by delivering trusted, mineral-rich water at just <strong>₹15 MRP</strong>, while ensuring our local retail partners earn superior industry margins.
              </p>
            </div>

            {/* Mission & Vision cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
                <div className="h-10 w-10 bg-sky-50 rounded-lg flex items-center justify-center text-sky-500 mb-4">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-extrabold text-slate-800 text-sm mb-2">Our Mission / हमारा लक्ष्य</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  To make safe, RO + UV + Ozone sterilized high-quality drinking water accessible to every passenger across Indian rails without burdening their pocket.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
                <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-extrabold text-slate-800 text-sm mb-2">Our Vision / भावी दृष्टिकोण</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  To become the most dependable and widely stocked local drinking water brand across all prominent North Indian railway junctions by 2028.
                </p>
              </div>

            </div>
          </div>

          {/* Right Image element */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-4/3"
            >
              <img 
                src={PLANT_IMAGE} 
                alt="Spotless inside of Ganga Jal water bottling plant" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 text-white">
                <span className="text-xs font-bold text-amber-400 capitalize">Manufacturing facility</span>
                <p className="text-sm font-semibold mt-0.5">Spotless, Automated Bottling Line</p>
              </div>
            </motion.div>
          </div>

        </section>


        {/* 3. Team / Founder Section */}
        <section className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Founder Image */}
            <div className="lg:col-span-4 bg-slate-100 h-80 lg:h-auto min-h-[300px] relative">
              <img 
                src={FOUNDER_IMAGE} 
                alt="Founder of Ganga Jal" 
                className="absolute inset-0 w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Founder message */}
            <div className="lg:col-span-8 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-6">
              <Quote className="h-10 w-10 text-sky-400 opacity-60" />
              
              <blockquote className="space-y-4">
                <p className="font-hindi text-xl sm:text-2xl font-bold text-amber-600 leading-relaxed italic">
                  &ldquo;एक स्थानीय उद्यमी के रूप में, मैं स्वयं प्रत्येक बैच की शुद्धता की निगरानी करता हूँ। रेलवे की भीड़-भाड़ में जब एक प्यासे यात्री को उचित दाम में सुलभ पानी मिलता है, वही हमारी सबसे बड़ी जीत है। आपका विश्वास ही हमारी सबसे बड़ी पूँजी है।&rdquo;
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  &ldquo;As a regional entrepreneur, I personally supervise the mineral composition and sterilization of every bottle we ship. Our goal is simple - your absolute trust and health shouldn&#39;t cost you more. High margins for water brands shouldn&#39;t override quality.&rdquo;
                </p>
              </blockquote>

              <div className="border-t border-slate-100 pt-6">
                <cite className="not-italic">
                  <span className="block text-slate-800 font-extrabold text-base font-heading">
                    Sarvar Singh
                  </span>
                  <span className="block text-sky-600 text-xs font-semibold tracking-wider uppercase mt-1">
                    Founder, Ganga Jal Minerals
                  </span>
                </cite>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
