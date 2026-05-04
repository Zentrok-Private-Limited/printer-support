import React from 'react';
import { 
  RefreshCcw, 
  PackageX, 
  Truck, 
  CheckCircle2, 
  Ban, 
  CreditCard, 
  Gavel, 
  Mail, 
  Phone, 
  MapPin,
  AlertCircle
} from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 py-20 px-6">
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 rounded-full">
            Customer Assurance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Refund & Return Policy
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Your satisfaction is our priority. We ensure a transparent process for cancellations, returns, and refunds under the Consumer Protection Act, 2019.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          
          {/* Overview Banner */}
          <div className="flex items-start gap-4 p-6 bg-emerald-50 border-b border-emerald-100">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-emerald-900 text-lg">Overview</h3>
              <p className="text-sm text-emerald-800/80 leading-relaxed">
                At printerdriverssupport.com, customer satisfaction is our top priority. This policy outlines 
                the terms for cancellations and returns in compliance with applicable Indian laws.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar Navigation */}
            <aside className="hidden md:block p-8 bg-slate-50 border-r border-slate-100">
              <nav className="sticky top-8 space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Policy Sections</div>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="hover:text-emerald-600 cursor-pointer transition">Order Cancellation</li>
                  <li className="hover:text-emerald-600 cursor-pointer transition">Return & Replacement</li>
                  <li className="hover:text-emerald-600 cursor-pointer transition">Eligibility Criteria</li>
                  <li className="hover:text-emerald-600 cursor-pointer transition">Non-Returnable Items</li>
                  <li className="hover:text-emerald-600 cursor-pointer transition">Refund Timeline</li>
                  <li className="hover:text-emerald-600 cursor-pointer transition">Shipping & Dispuites</li>
                </ul>
              </nav>
            </aside>

            {/* Policy Details */}
            <div className="md:col-span-2 p-8 md:p-12 space-y-12">
              
              {/* Order Cancellation */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-rose-100 rounded-lg text-rose-600"><PackageX size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Order Cancellation Policy</h2>
                </div>
                <div className="space-y-4 text-slate-600">
                  <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-rose-400">
                    <p className="font-bold text-slate-900 mb-1">Before Shipment:</p>
                    <ul className='list-disc list-inside '>
                        <li className='pb-2'>You may cancel your order before it is shipped by contacting our support team at info@printerdriverssupport.com or via live chat support.</li>
                        <li>If the order is cancelled before shipment, you will receive a full refund within 5–7 business days to your original payment method.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-300">
                    <p className="font-bold text-slate-900 mb-1">After Shipment:</p>
                    <ul className='list-disc list-inside '>
                        <li className='pb-2'>Once an order is shipped, cancellation is not possible.</li>
                        <li>You may choose to reject the delivery, in which case the item will be returned to us, and a refund will be initiated after we receive the product in its original condition (see Refund Terms below).</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Return & Replacement */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><RefreshCcw size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Return & Replacement Policy</h2>
                </div>
                <p className="block text-lg font-bold text-slate-700 mb-1">Eligiblity</p>
                <p className='text-slate-500 font-bold '>We accept returns and offer replacements only under the following conditions:</p>
                <ul className="text-slate-500 list-disc list-inside">
                      <li>You received a damaged, defective, or incorrect product.</li>
                      <li>The product is unopened, unused, and returned in its original packaging with all accessories, manuals, and invoices.</li>
                </ul>
                <p className="block text-lg font-bold text-slate-700 mb-1 mt-4">Timeframe</p>
                <ul className="text-slate-500 list-disc list-inside">
                      <li>You must raise a return request within 7 days of delivery.</li>
                      <li>To initiate a return or replacement, contact our support team with your Order ID, product photos, and reason for return.</li>
                </ul>
                <p className="block text-lg font-bold text-slate-700 mb-1 mt-4">Non-Returnable Items</p>
                <p className='text-slate-500 font-bold '>The following items are not eligible for return:</p>
                <ul className="text-slate-500 list-disc list-inside">
                    <li>Products damaged due to misuse or improper handling</li>
                    <li>Software products, downloaded drivers, and licenses.</li>
                    <li>Ink/toner cartridges once opened or used</li>
                    <li>Customized or special-order items</li>
                </ul>
              </section>

              {/* Refund Method */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><CreditCard size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Refund Policy</h2>
                </div>
                <div className="space-y-4">
                  <p className="block text-lg font-bold text-slate-700 mb-1">Refund Method</p>
                <p className='text-slate-500 font-bold '>Once your return is approved and the product is received and inspected, the refund will be processed via:</p>
                <ul className="text-slate-500 list-disc list-inside">
                      <li>Original mode of payment (Credit/Debit Card, UPI, Net Banking, etc.)</li>
                      <li>Refunds are typically processed within 7–10 business days after product inspection.</li>
                </ul>
                <p className="block text-lg font-bold text-slate-700 mb-1 mt-4">Deductions</p>
                <ul className="text-slate-500 list-disc list-inside">
                      <li>YIf any product is returned without original packaging, accessories, or has signs of use, a partial refund or restocking fee may apply.</li>
                </ul>
                </div>
              </section>

              {/* Shipping for Returns */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Truck size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Shipping for Returns</h2>
                </div>
                <ul className="text-slate-500 list-disc list-inside">
                    <li>We offer free reverse pickup for eligible return cases.</li>
                    <li>In locations where reverse pickup is not available, customers may need to ship the item to our return center. We will reimburse reasonable shipping charges on verified cases of defective/damaged products.</li>
                </ul>
              </section>

              {/* Dispute Resolution */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Truck size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Dispute Resolution</h2>
                </div>
                <ul className="text-slate-500 list-disc list-inside">
                    <li>We aim to resolve disputes in accordance with applicable consumer protection laws in India.</li>
                </ul>
              </section>

              {/* Contact */}
              <section className="pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600"><Gavel size={22}/></div>
                  <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-600">
                      <Mail size={18} className="text-emerald-500"/>
                      <span>info@printerdriverssupport.com</span>
                    </div>
                  </div> 
                </div>

                <button className="w-full mt-8 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-900 transition shadow-lg shadow-emerald-100 active:scale-95">
                  Initiate Return Request
                </button>
              </section>

            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-slate-400 text-sm">
          Policy Updated: May 2026 • Printsolutionpro.com Legal
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;