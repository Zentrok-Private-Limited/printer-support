import React from 'react';
import { 
  FileText, 
  Settings, 
  UserCheck, 
  CreditCard, 
  ShieldAlert, 
  Copyright, 
  HelpCircle, 
  Handshake, 
  MonitorSmartphone 
} from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 py-20 px-6">
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-400/10 rounded-full">
            Legal Agreement
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our services. They outline your rights and our obligations to you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          
          {/* Top Info Banner */}
          <div className="flex items-start gap-4 p-6 bg-slate-50 border-b border-slate-100">
            <Handshake className="w-6 h-6 text-indigo-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-slate-900">Binding Agreement</h3>
              <p className="text-sm text-slate-600">
                By accessing our website or utilizing our services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms & Conditions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar Navigation */}
            <aside className="hidden md:block p-8 bg-slate-50 border-r border-slate-100">
              <nav className="sticky top-8 space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation</div>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="hover:text-indigo-600 cursor-pointer transition">1. Introduction</li>
                  <li className="hover:text-indigo-600 cursor-pointer transition">2. Services Provided</li>
                  <li className="hover:text-indigo-600 cursor-pointer transition">3. Independent Status</li>
                  <li className="hover:text-indigo-600 cursor-pointer transition">4. User Responsibilities</li>
                  <li className="hover:text-indigo-600 cursor-pointer transition">5. Payments & Refunds</li>
                  <li className="hover:text-indigo-600 cursor-pointer transition">6. Liability Notice</li>
                  <li className="hover:text-indigo-600 cursor-pointer transition">7. Intellectual Property</li>
                </ul>
              </nav>
            </aside>

            {/* Terms Text */}
            <div className="md:col-span-2 p-8 md:p-12 space-y-12">
              
              {/* Introduction */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><FileText size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  These Terms & Conditions govern the use of our printer support website and services. 
                  By accessing our website, you agree to comply with these terms in full.
                </p>
              </section>

              {/* Services Provided */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Settings size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Services Provided</h2>
                </div>
                <p className="text-slate-600 mb-4">Our expert technicians provide a wide range of support including:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-md border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>Printer Installation Assistance
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-md border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>Troubleshooting & Driver Support
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-md border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>Help in Wireless Configuration
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-md border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Remote Technical Support
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-md border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Maintenance Guidance
                  </div>
                </div>
              </section>

              {/* Independent Service Provider */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-600"><MonitorSmartphone size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Independent Service Provider</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We operate as an independent technical support provider and are <strong>not affiliated with, 
                  authorized by, or endorsed by</strong> any printer manufacturer or brand unless clearly stated. 
                  Any use of third-party trademarks is solely for reference.
                </p>
              </section>

              {/* User Responsibilities */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600"><UserCheck size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">User Responsibilities</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To ensure successful support, users must:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-2 text-slate-600">
                  <li>Provide accurate information regarding hardware and software issues.</li>
                  <li>Maintain current backups of all important data and files.</li>
                  <li>Voluntarily grant remote access permissions for troubleshooting purposes.</li>
                </ul>
              </section>

              {/* Payments and Refunds */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><CreditCard size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Payments and Refunds</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Service fees must be paid as agreed prior to or upon completion of services. 
                  Refund eligibility depends on the current status of the service request and our 
                  standard company refund policy.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg text-red-600"><ShieldAlert size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
                </div>
                <p className="text-slate-600 leading-relaxed italic">
                  In no event shall the company be liable for data loss, hardware failures, indirect 
                  damages, or service interruptions that may arise during or after the delivery of 
                  technical support.
                </p>
              </section>

              {/* Intellectual Property */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><Copyright size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Intellectual Property</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  All website content, custom branding, and materials remain the exclusive property 
                  of the company. Any unauthorized reuse, reproduction, or distribution of our content 
                  without explicit permission is strictly prohibited.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;