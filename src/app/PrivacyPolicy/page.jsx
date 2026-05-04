import React from 'react';
import { 
  ShieldCheck, 
  Cookie, 
  UserCheck, 
  Lock, 
  HelpCircle, 
  AlertCircle, 
  Database, 
  ExternalLink, 
  Eye, 
  Scale 
} from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 py-20 px-6">
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full">
            Legal Transparency
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We value your trust. This policy outlines how we protect your data while providing world-class printer support.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          
          {/* Quick Disclaimer Card */}
          <div className="flex items-start gap-4 p-6 bg-amber-50 border-b border-amber-100">
            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900">Independent Provider Notice</h3>
              <p className="text-sm text-amber-800/80">
                We are an independent third-party technical support provider. Brand names and trademarks 
                are used for identification purposes only.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar Navigation */}
            <aside className="hidden md:block p-8 bg-slate-50 border-r border-slate-100">
              <nav className="sticky top-8 space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sections</div>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="hover:text-blue-600 cursor-pointer transition">Introduction</li>
                  <li className="hover:text-blue-600 cursor-pointer transition">Information Collection</li>
                  <li className="hover:text-blue-600 cursor-pointer transition">Use of Information</li>
                  <li className="hover:text-blue-600 cursor-pointer transition">Cookies Policy</li>
                  <li className="hover:text-blue-600 cursor-pointer transition">Third Party Services</li>
                  <li className="hover:text-blue-600 cursor-pointer transition">Service Disclosure</li>
                  <li className="hover:text-blue-600 cursor-pointer transition">Data Security</li>
                  <li className="hover:text-blue-600 cursor-pointer transition">User Rights</li>
                </ul>
              </nav>
            </aside>

            {/* Policy Text */}
            <div className="md:col-span-2 p-8 md:p-12 space-y-12">
              
              {/* Introduction */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><ShieldCheck size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  At printerdriverssupport.com (“we”, “our”, “us”), we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, store, and share your information when you visit our website printerdriverssupport.com (“Website”) or purchase products from us.
                  <br />
                  <br />
                  This Policy complies with the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><UserCheck size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
                </div>
                <p className="text-slate-600 mb-4">We collect data to provide a seamless support experience:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block font-bold text-slate-900 mb-1">Personal Info</span>
                    <ul className="text-slate-500 list-disc list-inside">
                      <li>Full Name</li>
                      <li>Email Address</li>
                      <li>Phone Number</li>
                      <li>Billing and Shipping Address</li>
                      <li>Payment Information (processed securely via third-party payment gateways)</li>
                      <li>GST Number (if applicable)</li>
                      <li>Purchase History</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block font-bold text-slate-900 mb-1">Non-Personal Information</span>
                    <ul className="text-slate-500 list-disc list-inside">
                      <li>IP Address</li>
                      <li>Browser Type</li>
                      <li>Device Information</li>
                      <li>Cookies and Usage Data</li>
                      <li>Location Data (with your permission)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Use of Information */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600"><Database size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Use of Information</h2>
                </div>
                <p className="block font-bold text-slate-900 mb-1">We use your information for:</p>
                <ul className="text-slate-500 list-disc list-inside">
                      <li>Process and deliver your orders</li>
                      <li>Communicate with you regarding purchases, offers, or support</li>
                      <li>Improve our Website, products, and services</li>
                      <li>Comply with legal obligations</li>
                      <li>Prevent fraud and abuse</li>
                    </ul>
              </section>

              {/* Cookies Policy */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><Cookie size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Cookies Policy</h2>
                </div>
                <p className="block font-bold text-slate-700 mb-1">We use cookies and similar technologies to:</p>
                <ul className="text-slate-500 list-disc list-inside">
                      <li>Improve your browsing experience</li>
                      <li>Remember your preferences</li>
                      <li>Analyze traffic and performance</li>
                    </ul>
                <p className="block font-bold text-slate-700 mb-1 mt-2">You can manage cookie preferences through your browser settings.</p>
              </section>

              {/* Third Party Services */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-rose-100 rounded-lg text-rose-600"><ExternalLink size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Sharing of Information</h2>
                </div>
                <p className="block font-bold text-slate-700 mb-1">We do not sell or rent your personal data. We may share information with:</p>
                <ul className="text-slate-500 list-disc list-inside">
                      <li>Logistics and delivery partners</li>
                      <li>Payment gateways and financial institutions</li>
                      <li>Customer support service providers</li>
                      <li>Government authorities when required by law</li>
                    </ul>
                <p className="block font-bold text-slate-700 mb-1 mt-2">All third parties are bound by confidentiality and data protection agreements.</p>
              </section>


              {/* Data Security */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Lock size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
                </div>
                <p className="block font-bold text-slate-700 mb-1">We follow industry-standard security practices to protect your data. These include:</p>
                <ul className="text-slate-500 list-disc list-inside">
                      <li>SSL encryption</li>
                      <li>Secure server infrastructure</li>
                      <li>Role-based access controls</li>
                      <li>Regular audits and monitoring</li>
                    </ul>
                <p className="block font-bold text-slate-700 mb-1 mt-2">However, no online platform is 100% secure. We encourage you to use strong passwords and take appropriate measures to protect your own data.</p>
              </section>

              {/* User Rights */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-violet-100 rounded-lg text-violet-600"><Scale size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">User Rights</h2>
                </div>
                <p className="block font-bold text-slate-700 mb-1">As per Indian law, you have the right to:</p>
                <ul className="text-slate-500 list-disc list-inside">
                      <li>Review and correct your personal data</li>
                      <li>Withdraw consent (subject to terms of service)</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Request data deletion, unless retained for legal reasons</li>
                    </ul>
                <p className="block font-bold text-slate-700 mb-1 mt-2">To exercise these rights, contact us at info@printerdriverssupport.com.</p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><ShieldCheck size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Children’s Privacy</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Our Website is not intended for children under 18. We do not knowingly collect personal data from minors.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><ShieldCheck size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Third-Party Links</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><ShieldCheck size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Policy Updates</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised date.
                </p>
              </section>

              {/* Contact Section */}
              <section className="pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><HelpCircle size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
                </div>
                <p className="text-slate-600 mb-6">
                  For privacy-related inquiries, users may contact the company via website contact details.
                </p>
                <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg shadow-slate-200 active:scale-95">
                  Live Chat Support
                </button>
              </section>

              <p className="text-slate-900 font-bold mb-6">
                By using our Website, you consent to the terms of this Privacy Policy.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;