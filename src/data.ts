import { Product, Stat, TimelineStep, Testimonial } from './types';

import brandLogo from './assets/images/ganga_jal_logo_1779934206091.png';
import heroImage from './assets/images/ganga_jal_hero_1779934226100.png';
import plantImage from './assets/images/ganga_jal_plant_1779934246156.png';
import pack6Image from './assets/images/ganga_jal_6pack_1779934267139.png';
import labImage from './assets/images/ganga_jal_lab_1779934290342.png';
import founderImage from './assets/images/ganga_jal_founder_1779934310023.png';

export const BRAND_LOGO = brandLogo;
export const HERO_IMAGE = heroImage;
export const PLANT_IMAGE = plantImage;
export const PACK_6_IMAGE = pack6Image;
export const LAB_IMAGE = labImage;
export const FOUNDER_IMAGE = founderImage;

export const PRODUCTS: Product[] = [
  {
    id: '1l-bottle',
    nameEn: '1 Litre Bottle',
    nameHi: '१ लीटर बोतल',
    descriptionEn: 'RO+UV+Ozone treated mineral drinking water in a premium PET bottle with an easy-to-grip design and secure packaging.',
    descriptionHi: 'RO+UV+Ozone द्वारा शुद्ध किया गया मिनरल वाटर, एक प्रीमियम और मजबूत ग्रिप वाली टिकाऊ 1 लीटर पीईटी बोतल में।',
    mrp: 15,
    highlight: 'MRP ₹15.00 only (Inclusive of all taxes)',
    image: HERO_IMAGE,
    features: [
      'Premium PET Bottle with designer cap',
      'Shrink sleeve dust-proof label',
      'Infused with essential minerals (Ca, Mg, K)',
      '100% safe & tested under strict BIS guidelines'
    ],
    ctaText: 'Enquire for Bulk / थोक के लिए संपर्क करें'
  },
  {
    id: '6l-bundle',
    nameEn: '6-Pack Shrink Bundle',
    nameHi: '६-बोतल श्रिंक बंडल',
    descriptionEn: 'Six 1 Litre Ganga Jal bottles packaged tightly in sturdy, clear PVC shrink wrap with a heavy-duty carry handle. Perfect for families, tours, events, and bulk wholesale.',
    descriptionHi: 'सुरक्षित और मजबूत कैरी हैंडल के साथ पारदर्शी पीवीसी श्रिंक रैप में पैक की गईं ६ लीटर गंगा जल बोतलें। परिवार, यात्रा और थोक विक्रेताओं के लिए सर्वोत्तम।',
    mrp: 90,
    highlight: 'Commercial Bundle - Value Pack',
    image: PACK_6_IMAGE,
    features: [
      'Easy-to-carry heavy-duty handle',
      'Dust, weather, and tamper resistant wrapping',
      'Saves preparation and transport space',
      'Special wholesale pricing available'
    ],
    ctaText: 'Request Wholesale Price / थोक मूल्य जानें'
  },
  {
    id: '500ml-bottle',
    nameEn: '500 ml Bottle (Coming Soon)',
    nameHi: '५०० मिली बोतल (जल्द आ रहा है)',
    descriptionEn: 'A light and compact travel friendly solution under development. Ideal for quick commutes and short rail trips between cities.',
    descriptionHi: 'एक छोटा, हल्का और यात्रा के अनुकूल समाधान जो अभी विकास के चरण में है। कम दूरी की यात्रा के लिए सटीक विकल्प।',
    mrp: 10,
    highlight: 'Launching Soon @ ₹10 MRP',
    image: HERO_IMAGE, // Use hero view scaled or modified
    features: [
      'Pocket-friendly compact layout',
      'Same pure, certified quality promise',
      'Effortless on-the-go hydration',
      'Eco-friendly low-thickness recyclable PET'
    ],
    ctaText: 'Notify Me / मुझे सूचित करें'
  }
];

export const STATS: Stat[] = [
  {
    value: '10,000+',
    labelEn: 'Delivered Daily',
    labelHi: 'प्रतिदिन शुद्धता का वितरण'
  },
  {
    value: '3 Cities',
    labelEn: 'Varanasi, Prayagraj, Kanpur',
    labelHi: 'वाराणसी, प्रयागराज, कानपुर'
  },
  {
    value: '50+',
    labelEn: 'Retail Partners Network',
    labelHi: 'अधिकृत रिटेलर पार्टनर'
  },
  {
    value: '₹15',
    labelEn: 'Affordable MRP',
    labelHi: 'सस्ती एवं सुलभ एमआरपी'
  }
];

export const PROCESS_TIMELINE: TimelineStep[] = [
  {
    step: 1,
    titleHi: 'श्रोत जल भंडारण (Raw Water Storage)',
    titleEn: 'Source Water collection',
    descriptionHi: 'नगर निगम द्वारा प्राप्त सुरक्षित जल को उच्च क्षमता वाले खाद्य-ग्रेड (Food-Grade) एसएस टैंकों में संग्रहित किया जाता है।',
    descriptionEn: 'Safe municipal water source is securely collected and stored in certified food-grade stainless steel raw water tanks.'
  },
  {
    step: 2,
    titleHi: 'रिवर्स ऑस्मोसिस (RO Filtration)',
    titleEn: 'RO Filtration Technique',
    descriptionHi: 'हमारा अत्याधुनिक 100 LPH RO प्लांट पानी की सभी अशुद्धियों, भारी धातुओं और अत्यधिक लवणों (TDS) को पूरी तरह निकाल देता है।',
    descriptionEn: 'High-caliber 100 LPH multi-stage Reverse Osmosis units filter out suspended solids, heavy metals, and excess soluble salts.'
  },
  {
    step: 3,
    titleHi: 'यूवी कीटाणुशोधन (UV Sterilization)',
    titleEn: 'UV Sterilization Process',
    descriptionHi: 'अल्ट्रावॉयलेट किरणों से पानी गुज़ारा जाता है, जो किसी भी प्रकार के सूक्ष्म जीवाणुओं, बैक्टीरिया और वायरस को निष्क्रिय कर देती हैं।',
    descriptionEn: 'High-intensity Ultraviolet light sterilizes any residual micro-biological structures like bacteria and viruses.'
  },
  {
    step: 4,
    titleHi: 'खनिज संयोजन (Mineral Dosing)',
    titleEn: 'Mineral Enrichment',
    descriptionHi: 'पानी के प्राकृतिक स्वाद और स्वास्थ्य को बनाए रखने के लिए उपयुक्त मात्रा में आवश्यक पोषक खनिज कैल्शियम, सोडियम और पोटेशियम मिलाए जाते हैं।',
    descriptionEn: 'Precisely calibrated infusion of premium-grade Calcium, Magnesium, and Potassium elements for an optimal health profile and crisp taste.'
  },
  {
    step: 5,
    titleHi: 'ओज़ोन संरक्षण (Ozone Disinfection)',
    titleEn: 'Ozone Treatment',
    descriptionHi: 'ओजोन गैस का प्रवाह करके बिना किसी रसायन के पानी को अंतिम रूप से सुरक्षित किया जाता है ताकि बोतल खुलने तक पानी ताज़ा रहे।',
    descriptionEn: 'Chemical-free natural stabilization using active Ozone gas, ensuring sanitization and a prolonged fresh shelf-life.'
  },
  {
    step: 6,
    titleHi: 'बोतल फिलिंग एवं सीलिंग (Filling & Sealing)',
    titleEn: 'Automated Bottling & Tamper-Proof Cap',
    descriptionHi: 'स्वच्छ स्वचालित वातावरण में बोतलों में पानी भरा जाता है और तुरंत छेड़छाड़-निरोधक (tamper-proof) कैप से सील कर दिया जाता है।',
    descriptionEn: 'Hygienic automatic filling of pure water into premium sanitised PET bottles, sealed instantly using absolute tamper-evident cap barriers.'
  },
  {
    step: 7,
    titleHi: 'लैब टेस्ट प्रमाणपत्र (In-house Lab Audit)',
    titleEn: 'Laboratory Screening',
    descriptionHi: 'हमारी आधुनिक इन-हाउस लैब में हर घंटे पीएच (pH), टीडीएस (TDS) और शुद्धता मानकों की सख्त जाँच की जाती है।',
    descriptionEn: 'Hourly lab audits are performed for pH metrics, final Total Dissolved Solids alignment (aiming between 70-120), and structural safety.'
  },
  {
    step: 8,
    titleHi: 'सुबह-सुबह सुरक्षित डिलीवरी (Fresh Morning Supply)',
    titleEn: 'Early Morning Express Logistics',
    descriptionHi: 'हर सुबह सबसे पहली ट्रेन आने से पहले सीधे रेलवे दुकानों और रिटेलर्स तक ताज़ा बंडल डिलीवर कर दिए जाते हैं।',
    descriptionEn: 'Ensuring your shops are restocked before the first passenger train pulls into Uttar Pradesh platforms.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'गंगा जल की बिक्री बहुत अच्छी है। रेलवे स्टेशन के पास यात्री ₹15 में पानी पाकर बहुत खुश होते हैं। हमारा मार्जिन भी बड़ी कंपनियों से बढ़िया रहता है। ग्राहक को सस्ता पड़ता है और हमें ज़्यादा कमाई।',
    author: 'Ramesh Singh',
    location: 'Varanasi Cantt (वाराणसी कैंट रेलवे स्टेशन)'
  },
  {
    id: 't2',
    quote: 'हम रोज सुबह 100 बंडल मंगाते हैं। डिलीवरी गाड़ी बिल्कुल वक्त पर स्टेशन के पास आती है, जिससे हमें दिन भर की ताजी सप्लाई मिल जाती है। शुद्धता और स्वाद बहुत ही लाजवाब है।',
    author: 'Suresh Gupta',
    location: 'Prayagraj Junction (प्रयागराज जंक्शन)'
  },
  {
    id: 't3',
    quote: 'Ganga Jal name itself evokes pure trust. The tamper-proof cap and premium bottles feel strong. Passengers pick this over other brands because of high quality and fair price of ₹15.',
    author: 'Sunil Verma',
    location: 'Kanpur Central Shops (कानपुर सेंट्रल)'
  }
];
