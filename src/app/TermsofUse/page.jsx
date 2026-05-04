import React from "react";
import {
  Users,
  UserCircle,
  ShoppingBag,
  CreditCard,
  Truck,
  Slash,
  Copyright,
  ShieldAlert,
  Gavel,
  Mail,
  Phone,
  MapPin,
  CheckSquare,
} from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 py-20 px-6">
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full">
            User Agreement
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Terms of Use
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            These terms govern your access to printerdriverssupport.com. By
            using our platform, you agree to the rules outlined below.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Acceptance Banner */}
          <div className="flex items-start gap-4 p-6 bg-blue-50 border-b border-blue-100">
            <CheckSquare className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-blue-900 text-lg">
                Acceptance of Terms
              </h3>
              <p className="text-sm text-blue-800/80 leading-relaxed">
                By accessing printerdriverssupport.com., you agree to be bound
                by these Terms. If you do not agree, please discontinue use
                immediately. These terms apply to all visitors, vendors, and
                customers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar Navigation */}
            <aside className="hidden md:block p-8 bg-slate-50 border-r border-slate-100">
              <nav className="sticky top-8 space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  On This Page
                </div>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Eligibility & Accounts
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Products & Pricing
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Orders & Delivery
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Prohibited Conduct
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Intellectual Property
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Legal Jurisdiction
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Terms Details */}
            <div className="md:col-span-2 p-8 md:p-12 space-y-12">
              {/* Eligibility & Accounts */}
              <section className="grid grid-cols-1 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                      <Users size={22} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Eligibility
                    </h2>
                  </div>
                  <p className="text-slate-600">
                    You must be at least <strong>18 years old</strong> or
                    accessing under the supervision of a parent/guardian to use
                    this website.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      <UserCircle size={22} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      User Account and Registration
                    </h2>
                  </div>
                  <ul className="text-slate-500 list-disc list-inside ml-4 space-y-2">
                    <li>
                      To make purchases, you may need to create an account by
                      providing accurate personal information.
                    </li>
                    <li>
                      You are responsible for maintaining the confidentiality of
                      your login credentials.
                    </li>
                    <li>
                      You agree to accept responsibility for all activities
                      under your account.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Products, Pricing & Orders */}
              <section className="space-y-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                      <ShoppingBag size={22} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Products and Pricing
                    </h2>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <span>•</span> Prices are in{" "}
                      <strong>Indian Rupees (INR)</strong> and include
                      applicable taxes.
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>All products listed on the Website are
                      subject to availability.
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> We reserve the right to modify or
                      discontinue any product or pricing at any time without
                      prior notice.
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    <Truck size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Shipping and Delivery
                    </h2>
                  </div>
                </div>

                <ul className="text-slate-500 list-disc list-inside ml-4 space-y-2">
                  <li>
                    Shipping timelines are estimates and not guaranteed. Delays
                    may occur due to logistics or external factors.
                  </li>
                  <li>Risk of loss or damage passes to you upon delivery.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-start gap-4 ">
                  <CheckSquare className="w-7 h-7 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black text-xl">
                      Returns, Refunds, and Cancellations
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Please refer to our Refund & Cancellation Policy for details on returns, refunds, and cancellations.
                    </p>
                  </div>
                </div>
              </section>

              {/* User Conduct */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                    <Slash size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    User Conduct
                  </h2>
                </div>
                <ul className="text-slate-500 list-disc list-inside ml-4 space-y-2">
                <p>You agree not to:</p>
                  <li>Use the Website for unlawful, abusive, or fraudulent purposes</li>
                  <li>Upload or transmit viruses or malicious code</li>
                  <li>Attempt to gain unauthorized access to any portion of the Website or its servers</li>
                  <li>Interfere with the Website’s security or functionality</li>
                  <p>Violation of these rules may result in suspension or termination of your access.</p>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    <Copyright size={22} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Intellectual Property
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  All content, including logos, text, and software, is the
                  property of <strong>printerdriverssupport.com</strong>.
                  Unauthorized reproduction or distribution is strictly
                  prohibited.
                </p>
              </section>

              {/* Liability & Indemnity */}
              <section className="p-6 bg-slate-900 rounded-2xl text-slate-300">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldAlert className="text-blue-400" size={24} />
                  <h2 className="text-xl font-bold text-white">
                    Liability & Indemnification
                  </h2>
                </div>
                <p className="text-sm leading-relaxed mb-4">
                  We are not liable for incidental or consequential damages
                  arising from site use. 
                  <br />
                  <br />
                  You agree to indemnify printerdriverssupport.com against claims arising from your
                  violation of these terms.
                </p>
              </section>

             <section>
                <div className="flex items-start gap-4 ">
                  <CheckSquare className="w-7 h-7 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black text-xl">
                       Third-Party Links
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Our Website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of those sites.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4 ">
                  <CheckSquare className="w-7 h-7 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black text-xl">
                       Privacy
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Your use of the Website is also governed by our Privacy Policy, which outlines how your personal data is collected, used, and protected.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4 ">
                  <CheckSquare className="w-7 h-7 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black text-xl">
                       Termination
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      We reserve the right to terminate your access to the Website at any time, without notice, for conduct that violates these Terms or is harmful to other users or the business.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4 ">
                  <CheckSquare className="w-7 h-7 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black text-xl">
                       Governing Law and Jurisdiction
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Delhi, India.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4 ">
                  <CheckSquare className="w-7 h-7 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black text-xl">
                       Amendments
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      We may revise these Terms from time to time. Any changes will be posted on this page with the updated date. Continued use of the Website signifies acceptance of the revised Terms.
                    </p>
                  </div>
                </div>
              </section>

              

              {/* Contact Information */}
              <section className="pt-8 border-t border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Us
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100">
                    <Mail className="text-blue-500" size={20} />
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold">
                        Email
                      </p>
                      <p className="text-slate-700">
                        info@printerdriverssupport.com
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
