import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle2, Building, Send } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Varanasi Division / वाराणसी कैंट',   // full text as expected by Google Form
    role: 'Retailer / दुकानदार (Railway station / Transit)', // full text
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('कृपया नाम और फ़ोन नंबर दर्ज करें! Please fill in your name and phone number.');
      return;
    }

    setIsSubmitting(true);

    // Google Form action URL (do not change)
    const formAction = 'https://docs.google.com/forms/d/e/1FAIpQLSdCV0oyuxAoWbUJxC6YkABX7hb8CUC_MS1OJNVB9M70KvzYEw/formResponse';

    // Required hidden fields from the original Google Form
    const hiddenFields = {
      'fvv': '1',
      'partialResponse': '[null,null,"6739501341191842784"]',
      'pageHistory': '0',
      'fbzx': '6739501341191842784'
    };

    // Create hidden iframe and form (no page reload)
    const iframe = document.createElement('iframe');
    iframe.name = 'googleFormFrame';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formAction;
    form.target = 'googleFormFrame';
    form.style.display = 'none';
    document.body.appendChild(form);

    // Map our form fields to Google Form entry IDs
    const fields = {
      'entry.475492728': formData.name,
      'entry.1424180630': formData.phone,
      'entry.1021775958': formData.email,
      'entry.1999490360': formData.role,
      'entry.499980485': formData.city,
      'entry.1489958251': formData.message,
      ...hiddenFields,
      'submissionTimestamp': Date.now().toString()
    };

    for (const [name, value] of Object.entries(fields)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    }

    // Submit the form to the hidden iframe
    form.submit();

    // Clean up after submission (remove iframe and form)
    setTimeout(() => {
      if (document.body.contains(form)) document.body.removeChild(form);
      if (document.body.contains(iframe)) document.body.removeChild(iframe);
    }, 1000);

    // Show success message and generate ticket ID
    setIsSubmitted(true);
    setTicketId(`GJ-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-slate-50 py-12 sm:py-20 animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sky-600 font-extrabold text-sm uppercase tracking-widest block font-sans">
            Connect Instantly / संपर्क सूत्र
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch / <span className="font-hindi text-sky-600">गंगा जल टीम से जुड़ें</span>
          </h1>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 font-medium">
            Contact our business desk or plant operations for immediate franchise allocations, bulk deliveries, or private label consultations.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit} 
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-slate-800 border-b border-slate-50 pb-3 flex items-center space-x-2">
                    <Send className="h-5 w-5 text-sky-500" />
                    <span>Send us a message / संदेश भेजें</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Your Name / आपका नाम <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Anand Kumar" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500/25 focus:border-sky-500 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Phone Number / मोबाइल नंबर <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 99999 88888" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500/25 focus:border-sky-500 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Email Address / ईमेल
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. anand@yourmail.com" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500/25 focus:border-sky-500 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        I am a / मेरी भूमिका
                      </label>
                      <select 
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-sky-500/25 focus:border-sky-500 outline-none text-sm cursor-pointer"
                      >
                        <option value="Retailer / दुकानदार (Railway station / Transit)">Retailer / दुकानदार (Railway station / Transit)</option>
                        <option value="Event Organizer / समारोह आयोजक">Event Organizer / समारोह आयोजक</option>
                        <option value="Individual Traveler / व्यक्तिगत ग्राहक">Individual Traveler / व्यक्तिगत ग्राहक</option>
                        <option value="Wholesaler / थोक वितरक">Wholesaler / थोक वितरक</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Target Area / वितरण क्षेत्र
                    </label>
                    <select 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-sky-500/25 focus:border-sky-500 outline-none text-sm cursor-pointer"
                    >
                      <option value="Varanasi Division / वाराणसी कैंट">Varanasi Division / वाराणसी कैंट</option>
                      <option value="Prayagraj Sangam / प्रयागराज जंक्शन">Prayagraj Sangam / प्रयागराज जंक्शन</option>
                      <option value="Kanpur Central / कानपुर सेंट्रल">Kanpur Central / कानपुर सेंट्रल</option>
                      <option value="Other Region / अन्य उत्तर प्रदेश">Other Region / अन्य उत्तर प्रदेश</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Your Message / आवश्यकताओं का विवरण
                    </label>
                    <textarea 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g. We require 120 bundles of 1-litre bottles delivered daily at Varanasi Platform 1 exit. Please share best pricing."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500/25 focus:border-sky-500 outline-none text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 disabled:bg-amber-500/60 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-colors"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin inline-block" />
                        <span>Sending message... / भेजा जा रहा है</span>
                      </span>
                    ) : (
                      <span>Submit Inquiry / संदेश भेजें</span>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="submit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="h-16 w-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-inner">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-slate-800">Inquiry Received Successfully!</h2>
                    <h3 className="font-hindi text-amber-600 font-bold">आपका संदेश सफलतापूर्वक प्राप्त हुआ!</h3>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto">
                      Thank you for contacting Ganga Jal. Our regional distribution coordinator will check your route and call you shortly.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/60 max-w-xs mx-auto p-4 rounded-xl text-xs space-y-1.5 text-slate-600">
                    <div><strong>Ticket ID:</strong> <span className="font-mono text-sky-600 font-extrabold">{ticketId}</span></div>
                    <div><strong>Time Logged:</strong> {new Date().toLocaleString()}</div>
                    <div><strong>Selected Hub:</strong> {formData.city}</div>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        city: 'Varanasi Division / वाराणसी कैंट',
                        role: 'Retailer / दुकानदार (Railway station / Transit)',
                        message: ''
                      });
                    }}
                    className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs py-2.5 px-6 rounded-full transition-colors"
                  >
                    Send Another message / नया संदेश भेजें
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Contact details (unchanged) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-md border border-slate-800">
              <h3 className="text-base font-bold font-heading border-b border-slate-800 pb-3 uppercase tracking-wider text-sky-400">
                Direct Contact Desk
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3.5">
                  <Phone className="h-5 w-5 text-amber-500 mt-1 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400">Phone Support / कॉल करें</span>
                    <a href="tel:+91 63937 41885" className="block text-base font-bold hover:text-sky-400 transition-colors">
                      +91 63937 41885
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3.5">
                  <MessageSquare className="h-5 w-5 text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400">WhatsApp Enquiry / व्हाट्सएप</span>
                    <a 
                      href="https://wa.me/916393741885?text=Hello%20Ganga%20Jal%20Team!%20Interested%20in%20high-margin%20retail%20supplies." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-base font-bold text-emerald-400 hover:underline hover:text-emerald-300"
                    >
                      Click to Chat on WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3.5">
                  <Mail className="h-5 w-5 text-sky-400 mt-1 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400">Email Address / ईमेल</span>
                    <a href="mailto:altivonholdings@gmail.com" className="block text-sm font-semibold hover:text-sky-400 transition-colors">
                      altivonholdings@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3.5">
                  <MapPin className="h-5 w-5 text-rose-500 mt-1 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400">Bottling Plant Head / प्लांट पता</span>
                    <span className="block text-xs text-slate-300 leading-relaxed mt-0.5">
                      <strong>Ganga Jal Minerals</strong><br />
                      Plot 45, Industrial Area Phase II, Ramnagar, Varanasi, Uttar Pradesh - 221008
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex items-center space-x-4">
              <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500 shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-widest">Office hours</span>
                <span className="block text-sm font-bold text-slate-800">Monday - Saturday</span>
                <span className="block text-xs text-slate-500 font-medium">8:00 AM to 8:00 PM IST</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 p-6 flex flex-col items-center justify-center text-center py-10">
              <Building className="h-8 w-8 text-slate-400 mb-3" />
              <strong className="block text-slate-800 text-sm">Industrial Hub Ramnagar Pincode Direction</strong>
              <p className="text-slate-400 text-xs max-w-xs mt-1">Our production unit is located 500 meters adjacent to the active Ganges bridge, allowing prompt transport logistics across NH-2 highway routes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}