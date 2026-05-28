/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ActivePage } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import QualityView from './components/QualityView';
import ProductsView from './components/ProductsView';
import DistributionView from './components/DistributionView';
import ContactView from './components/ContactView';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // SEO & Meta tags management dynamically
  useEffect(() => {
    let title = 'Ganga Jal - Packaged drinking water';
    let desc = 'Providing pure, mineral-added drinking water at a highly affordable rate across North India.';
    
    switch (activePage) {
      case 'home':
        title = 'Ganga Jal (गंगा जल) | Pure. Affordable. Trusted. RO+UV+Ozone Minerals';
        desc = 'Pure RO+UV+Ozone treated mineral drinking water at just ₹15. Confluence of Purity for common travelers in Uttar Pradesh.';
        break;
      case 'about':
        title = 'Our Story & Mission | Ganga Jal Minerals (गंगा जल)';
        desc = 'Founded in Uttar Pradesh to serve passengers with clean mineral rich bottled water at an affordable price of just ₹15.';
        break;
      case 'quality':
        title = '8-Step Advanced Filtration Process | Pure Ganga Jal';
        desc = 'Explore our advanced RO, UV, Ozone, and Mineral-infusion process tested hourly in our certified chemist laboratories.';
        break;
      case 'products':
        title = 'Packaged Water Sizes & Wholesale Pricing | Ganga Jal';
        desc = 'Available in individual 1L bottles and wholesale shrink bundles at highly lucrative retail profit margins for merchants.';
        break;
      case 'where-to-find-us':
        title = 'Regional Distribution Network Map | Ganga Jal';
        desc = 'Authorized supply hubs at Varanasi Cantt, Prayagraj Sangam, and Kanpur Central railway station markets.';
        break;
      case 'contact':
        title = 'Become a Retail / Event Partner | Contact Ganga Jal';
        desc = 'Apply for wholesale franchises or buy bulk packages directly. Secure morning delivery at station platforms in India.';
        break;
    }
    document.title = title;
    
    // Update or create Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', desc);
    
    // Google Analytics Event Simulator Logs
    console.log(`[Google Analytics - Event Placeholder] Page Viewed: ${activePage}`);
  }, [activePage]);

  // Back to top scroll listener
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setActivePage('products');
    setTimeout(() => {
      const el = document.getElementById(productId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const renderActiveView = () => {
    switch (activePage) {
      case 'home':
        return <HomeView onNavigate={setActivePage} onSelectProduct={handleSelectProduct} />;
      case 'about':
        return <AboutView />;
      case 'quality':
        return <QualityView />;
      case 'products':
        return <ProductsView onNavigate={setActivePage} selectedProductId={selectedProductId} />;
      case 'where-to-find-us':
        return <DistributionView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={setActivePage} onSelectProduct={handleSelectProduct} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-amber-600 selection:text-white">
      
      {/* 1. Navigation Header (Sticky) */}
      <Header activePage={activePage} onNavigate={setActivePage} />

      {/* 2. Primary Layout Page Stream */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* 3. Global Footer */}
      <Footer onNavigate={setActivePage} />

      {/* 4. Floating Direct WhatsApp Hotkey */}
      <a
        href="https://wa.me/9163937 41885?text=Hello!%20I'm%20visiting%20the%20Ganga%20Jal%20website%20and%20want%20to%20know%20more%20about%20your%20water%20supply."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Ganga Jal on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all group"
      >
        <span className="absolute -left-36 bg-slate-900 text-white text-[11px] font-bold py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp Retailer Help
        </span>
        <MessageCircle className="h-6 w-6 fill-current" />
      </a>

      {/* 5. Scroll to Top Indicator */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-24 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 border border-slate-150 shadow-md hover:bg-slate-50 transition-all hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

    </div>
  );
}
