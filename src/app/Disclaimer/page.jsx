import React from 'react';
import { 
  AlertTriangle, 
  Tag, 
  UserMinus, 
  CheckCircle, 
  MousePointer2, 
  ShieldX, 
  Info,
  HelpCircle
} from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 py-20 px-6">
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-400/10 rounded-full">
            Legal Disclosures
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Disclaimer
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Please read this document carefully to understand the limitations of our services and our independent status.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          
          {/* Critical Warning Banner */}
          <div className="flex items-start gap-4 p-6 bg-amber-50 border-b border-amber-100">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900">Important Notice</h3>
              <p className="text-sm text-amber-800/80">
                The information provided on this site is "as-is." Use of our technical support 
                services implies your acknowledgment of these limitations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar Navigation */}
            <aside className="hidden md:block p-8 bg-slate-50 border-r border-slate-100">
              <nav className="sticky top-8 space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Links</div>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="hover:text-amber-600 cursor-pointer transition">General Disclaimer</li>
                  <li className="hover:text-amber-600 cursor-pointer transition">Trademark Notice</li>
                  <li className="hover:text-amber-600 cursor-pointer transition">No Affiliation</li>
                  <li className="hover:text-amber-600 cursor-pointer transition">Service Accuracy</li>
                  <li className="hover:text-amber-600 cursor-pointer transition">Remote Consent</li>
                  <li className="hover:text-amber-600 cursor-pointer transition">Responsibility</li>
                </ul>
              </nav>
            </aside>

            {/* Disclaimer Text */}
            <div className="md:col-span-2 p-8 md:p-12 space-y-12">
              
              {/* General Disclaimer */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600"><Info size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">General Disclaimer</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Information and services provided on this website are for general technical assistance 
                  purposes only and are offered without warranties of any kind, either express or implied.
                </p>
              </section>

              {/* Brand & Trademark Notice */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Tag size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Brand & Trademark Notice</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  All trademarks, logos, and brand names such as <strong>HP®, Canon®, Epson®, Brother®</strong>, 
                  and others belong to their respective owners.
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-sm text-slate-500">
                  Reference to these brands is used strictly for identification purposes and does not imply 
                  that the brand owners have endorsed our services.
                </div>
              </section>

              {/* No Affiliation Statement */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg text-red-600"><UserMinus size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">No Affiliation Statement</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We are an <strong>independent third-party support provider</strong> and do not represent 
                  any official printer brand unless explicitly stated. We do not claim any direct 
                  partnership with original equipment manufacturers (OEMs).
                </p>
              </section>

              {/* Service Accuracy Disclaimer */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><CheckCircle size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Service Accuracy Disclaimer</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  While we strive to provide accurate and effective solutions, we do not guarantee 
                  uninterrupted, error-free, or permanent fixes for all technical issues due to 
                  the complex nature of hardware and software environments.
                </p>
              </section>

              {/* Remote Support Consent */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><MousePointer2 size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Remote Support Consent</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  By requesting remote assistance, users voluntarily grant our technicians temporary access 
                  to their systems solely for troubleshooting and service delivery. Users are encouraged 
                  to remain present at their computer during the entire remote session.
                </p>
              </section>

              {/* Limitation of Responsibility */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-rose-100 rounded-lg text-rose-600"><ShieldX size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Limitation of Responsibility</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  The company shall not be responsible for:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-2 text-slate-600">
                  <li>Data loss or corruption during the repair process.</li>
                  <li>System issues arising from third-party software or drivers.</li>
                  <li>Pre-existing technical problems or hardware failures.</li>
                </ul>
              </section>

              {/* Help Section */}
              <section className="pt-8 border-t border-slate-100 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full text-orange-600 mb-4">
                  <HelpCircle size={28}/>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Need Clarity?</h2>
                <p className="text-slate-600 mb-6">
                  If you have questions about these disclosures, our support team is happy to explain our processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-amber-600 transition shadow-lg shadow-slate-200">
                    Contact Us
                  </button>
                </div>
              </section>

            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-slate-400 text-sm italic">
          Disclaimer ID: DS-PRINTER-2026 • &copy; Printer Support Team
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;