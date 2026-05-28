import { useState } from 'react';
import { Menu, X, Droplet, Phone } from 'lucide-react';
import { ActivePage } from '../types';
import { BRAND_LOGO } from '../data';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: { id: ActivePage; labelEn: string; labelHi: string }[] = [
    { id: 'home', labelEn: 'Home', labelHi: 'मुख्य पृष्ठ' },
    { id: 'about', labelEn: 'About Us', labelHi: 'हमारे बारे में' },
    { id: 'quality', labelEn: 'Quality & Process', labelHi: 'शुद्धता एवं प्रक्रिया' },
    { id: 'products', labelEn: 'Our Products', labelHi: 'उत्पाद' },
    { id: 'where-to-find-us', labelEn: 'Distribution Grid', labelHi: 'वितरण केंद्र' },
    { id: 'contact', labelEn: 'Contact', labelHi: 'संपर्क करें' },
  ];

  const handleNavClick = (id: ActivePage) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky-100 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex cursor-pointer items-center space-x-3 transition-opacity hover:opacity-95"
        >
          <img 
            src={BRAND_LOGO} 
            alt="Ganga Jal Logo" 
            className="h-12 w-12 rounded-full border border-sky-200 bg-white object-contain shadow-xs sm:h-14 sm:w-14"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="font-hindi text-xl font-bold text-sky-600 sm:text-2xl">गंगा जल</span>
              <span className="text-xs font-semibold text-sky-400">|</span>
              <span className="font-heading text-sm font-extrabold tracking-wider text-slate-800 uppercase sm:text-base">Ganga Jal</span>
            </div>
            <p className="font-hindi text-xs font-medium text-amber-600 sm:text-sm">शुद्धता का संगम</p>
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {menuItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-sky-600 bg-sky-50' 
                    : 'text-slate-600 hover:text-sky-500 hover:bg-slate-50'
                }`}
              >
                <span className="block text-[11px] leading-3 text-right opacity-70 group-hover:text-sky-500 font-hindi">
                  {item.labelHi}
                </span>
                <span className="block font-semibold">
                  {item.labelEn}
                </span>
                {isActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-sky-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Hamburger */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            <span>थोक आवश्यकता / Get Quote</span>
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-sky-50 hover:text-sky-600 lg:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-sky-50 bg-white/98 shadow-inner animate-fade-in">
          <div className="space-y-1 px-4 py-3 sm:px-6">
            {menuItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors ${
                    isActive 
                      ? 'bg-sky-50 text-sky-700 font-bold' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-semibold text-base">{item.labelEn}</span>
                  <span className="font-hindi text-sm text-sky-500/80">{item.labelHi}</span>
                </button>
              );
            })}
            
            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="flex w-full items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 py-3 rounded-xl shadow-xs"
              >
                <Phone className="h-4 w-4" />
                <span>थोक आवश्यकता / Get Quote</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
