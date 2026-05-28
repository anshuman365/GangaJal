import { Mail, Phone, MapPin, Award, MessageCircle } from 'lucide-react';
import { ActivePage } from '../types';
import { BRAND_LOGO } from '../data';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-100 border-t-4 border-amber-600">
      
      {/* Upper Brand Info Column Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Presentation */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <img 
                src={BRAND_LOGO} 
                alt="Ganga Jal Logo" 
                className="h-14 w-14 rounded-full border-2 border-sky-400 bg-white p-0.5 object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-hindi text-2xl font-bold text-sky-400">गंगा जल</h3>
                <p className="font-hindi text-xs text-amber-500">शुद्धता का संगम</p>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-300">Ganga Jal Minerals</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Bringing pure, RO + UV + Ozone treated, mineral-enriched bottled drinking water to train commuters and retailers in Uttar Pradesh since 2026. Consistent supply, unmatched pricing.
            </p>
            <div className="inline-flex items-center space-x-2 bg-slate-800 text-xs text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
              <Award className="h-4 w-4 text-amber-500" />
              <span><strong>FSSAI Lic No:</strong> 12726999000123 (Regd.)</span>
            </div>
          </div>

          {/* Quick Navigations */}
          <div>
            <h4 className="text-base font-bold text-slate-200 tracking-wider uppercase border-b-2 border-sky-500/30 pb-2 mb-4">
              Quick Menu / लिंक्स
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNavClick('home')} 
                  className="text-slate-400 hover:text-sky-400 hover:underline transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Home Page</span>
                  <span className="font-hindi text-xs text-slate-500">मुख्य पृष्ठ</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('about')} 
                  className="text-slate-400 hover:text-sky-400 hover:underline transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Our Story & Mission</span>
                  <span className="font-hindi text-xs text-slate-500">हमारे बारे में</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('quality')} 
                  className="text-slate-400 hover:text-sky-400 hover:underline transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Purification Quality</span>
                  <span className="font-hindi text-xs text-slate-500">शुद्धता जाँच</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('products')} 
                  className="text-slate-400 hover:text-sky-400 hover:underline transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Bottle Sizes & Bundle</span>
                  <span className="font-hindi text-xs text-slate-500">हमारे उत्पाद</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('where-to-find-us')} 
                  className="text-slate-400 hover:text-sky-400 hover:underline transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Where To Find Us</span>
                  <span className="font-hindi text-xs text-slate-500">वितरण नेटवर्क</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')} 
                  className="text-slate-400 hover:text-sky-400 hover:underline transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Get in Touch / Contact</span>
                  <span className="font-hindi text-xs text-slate-500">संपर्क सूत्र</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Core Areas */}
          <div>
            <h4 className="text-base font-bold text-slate-200 tracking-wider uppercase border-b-2 border-sky-500/30 pb-2 mb-4">
              Our Towns / सेवाएं
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-slate-400">
                We supply daily fresh batches to high-traffic locations around railway stations, roadside hotels, and bus terms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs px-2.5 py-1 rounded font-medium">Varanasi Cantt / वाराणसी</span>
                <span className="inline-block bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs px-2.5 py-1 rounded font-medium">Prayagraj Jn. / प्रयागराज</span>
                <span className="inline-block bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs px-2.5 py-1 rounded font-medium">Kanpur Central / कानपुर</span>
              </div>
              <p className="text-xs text-slate-400 italic">
                * Expanding shortly across Lucknow & Gorakhpur junctions!
              </p>
            </div>
          </div>

          {/* Plant Contacts */}
          <div>
            <h4 className="text-base font-bold text-slate-200 tracking-wider uppercase border-b-2 border-sky-500/30 pb-2 mb-4">
              Direct Support / संपर्क
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Ganga Jal Bottling Unit</strong><br />
                  Plot 45, Industrial Area Phase II, Ramnagar, Varanasi, Uttar Pradesh - 221008
                </span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 text-sky-400 shrink-0" />
                <a href="tel:+916393741885" className="hover:text-sky-400 transition-colors">
                  +91-63937 41885
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-sky-400 shrink-0" />
                <a href="mailto: altivonholdings@gmail.com" className="hover:text-sky-400 transition-colors">
                  info@gangajalbottle.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-slate-800 bg-slate-950 text-slate-500 text-xs py-6">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:px-6 lg:px-8">
          <div>
            <p>© 2026 Ganga Jal. All rights reserved. Designed with cultural pride specifically for travelers.</p>
            <p className="mt-1 text-slate-600">Disclaimer: &quot;Ganga Jal&quot; is our official registered brand name of packaged drinking water, packed strictly following IS 14543 certification processes containing purified municipal supply added with essential table minerals.</p>
          </div>
          
          {/* WhatsApp Direct link */}
          <a 
            href="https://wa.me/916393741885?text=Hello%20Ganga%20Jal%20Team!%20I%20am%20interested%20in%20bulk%20water%20supply." 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            <span>WhatsApp Retail Enquiry</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
